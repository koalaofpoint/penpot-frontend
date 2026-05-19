// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

/**
 * Parser node type
 */
type ParserNode =
  | { type: 'opt-expr'; children: ParserNode[] }
  | { type: 'expr'; operator: string | null; left: ParserNode; right?: ParserNode }
  | { type: 'term'; left: ParserNode; right?: ParserNode }
  | { type: 'factor'; value: ParserNode | string }
  | { type: 'number'; value: string };

/**
 * Parse tree
 */
interface ParseTree {
  type: string;
  children?: ParseTree[];
  value?: string;
  left?: ParseTree;
  right?: ParseTree;
}

/**
 * Parse mathematical expression
 *
 * Grammar:
 * opt-expr = '' | expr
 * expr = term (<spaces> ('+'|'-') <spaces> expr)* |
 *        ('+'|'-'|'*'|'/') <spaces> factor
 * term = factor (<spaces> ('*'|'/') <spaces> term)*
 * factor = number | ('(' <spaces> expr <spaces> ')')
 * number = #'[0-9]*[.,]?[0-9]+%?'
 * spaces = ' '*
 */
function parseExpression(expr: string): ParseTree | null {
  const tokens = tokenize(expr);
  if (tokens.length === 0) {
    return null;
  }

  let pos = 0;

  function parseOptExpr(): ParseTree {
    const children: ParseTree[] = [];
    while (pos < tokens.length) {
      children.push(parseExpr());
    }
    return { type: 'opt-expr', children };
  }

  function parseExpr(): ParseTree {
    const node = parseTerm();

    while (pos < tokens.length && (tokens[pos] === '+' || tokens[pos] === '-')) {
      const operator = tokens[pos++];
      const right = parseTerm();
      return {
        type: 'expr',
        operator,
        left: node,
        right
      };
    }

    return node;
  }

  function parseTerm(): ParseTree {
    const node = parseFactor();

    while (pos < tokens.length && (tokens[pos] === '*' || tokens[pos] === '/')) {
      const operator = tokens[pos++];
      const right = parseFactor();
      return {
        type: 'term',
        left: node,
        right
      };
    }

    return node;
  }

  function parseFactor(): ParseTree {
    if (tokens[pos] === '(') {
      pos++;
      const expr = parseExpr();
      if (tokens[pos] === ')') {
        pos++;
      }
      return { type: 'factor', value: expr };
    }

    return { type: 'factor', value: tokens[pos++] };
  }

  return parseOptExpr();
}

/**
 * Tokenize expression
 */
function tokenize(expr: string): string[] {
  const tokens: string[] = [];
  let i = 0;

  while (i < expr.length) {
    const char = expr[i];

    if (/\s/.test(char)) {
      i++;
      continue;
    }

    if (/[+\-*/()]/.test(char)) {
      tokens.push(char);
      i++;
      continue;
    }

    // Parse number
    let num = '';
    while (i < expr.length && /[0-9.,%]/.test(expr[i])) {
      num += expr[i++];
    }
    if (num) {
      tokens.push(num);
    }
  }

  return tokens;
}

/**
 * Interpret parse tree
 */
function interpret(tree: ParseTree, initValue: number): number {
  if (!tree) {
    return initValue;
  }

  switch (tree.type) {
    case 'opt-expr':
      return tree.children?.length ? interpret(tree.children[0], initValue) : initValue;

    case 'expr': {
      const leftValue = interpret(tree.left!, initValue);

      if (!tree.operator) {
        return leftValue;
      }

      // Handle unary operators
      if (!tree.right && '+-*/'.includes(tree.operator)) {
        switch (tree.operator) {
          case '+':
            return leftValue;
          case '-':
            return -leftValue;
          case '*':
            return leftValue;
          case '/':
            return leftValue;
        }
      }

      // Handle binary operators
      if (tree.right) {
        const rightValue = interpret(tree.right, initValue);
        switch (tree.operator) {
          case '+':
            return leftValue + rightValue;
          case '-':
            return leftValue - rightValue;
          case '*':
            return leftValue * rightValue;
          case '/':
            return leftValue / rightValue;
        }
      }

      return leftValue;
    }

    case 'term': {
      const leftValue = interpret(tree.left!, initValue);

      if (tree.right) {
        const rightValue = interpret(tree.right, initValue);
        switch ((tree.left! as any).operator) {
          case '*':
            return leftValue * rightValue;
          case '/':
            return leftValue / rightValue;
        }
      }

      return leftValue;
    }

    case 'factor':
      if (typeof tree.value === 'string' && tree.value === '(') {
        return interpret(tree.left!, initValue);
      }
      return interpret(tree.value as ParseTree, initValue);

    case 'number':
      let valueStr = tree.value.replace(',', '.');
      if (valueStr.endsWith('%')) {
        const num = parseFloat(valueStr.replace('%', '')) / 100;
        return num * initValue;
      }
      return parseFloat(valueStr);
  }

  throw new Error('Unknown token in interpretation');
}

/**
 * Evaluate mathematical expression
 *
 * Examples:
 * - "10 + 20" => 30
 * - "50%" => 0.5 (with initValue 1)
 * - "100 + 50%" => 150 (with initValue 100)
 * - "(10 + 5) * 2" => 30
 */
export function evalExpr(expr: string, initValue?: number): number | null {
  if (typeof expr !== 'string') {
    return null;
  }

  const result = parseExpression(expr);
  const actualInitValue = initValue ?? 0;

  if (typeof actualInitValue !== 'number') {
    return null;
  }

  if (!result) {
    return null;
  }

  try {
    return interpret(result, actualInitValue);
  } catch (error) {
    console.debug(`Invalid value '${expr}'`, error);
    return null;
  }
}

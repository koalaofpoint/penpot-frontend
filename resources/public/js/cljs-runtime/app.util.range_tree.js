import "./cljs_env.js";
import "./cljs.core.js";
goog.provide("app.util.range_tree");
goog.require("cljs.core");
goog.scope(function() {
  function isRed(branch) {
    return branch && branch.color === Color.RED;
  }
  function recInsert(branch, value, data) {
    if (!branch) {
      const ret = new Node(value, data);
      ret.color = Color.RED;
      return ret;
    } else if (branch.value === value) {
      branch.data.push(data);
    } else if (branch.value > value) {
      branch.left = recInsert(branch.left, value, data);
    } else if (branch.value < value) {
      branch.right = recInsert(branch.right, value, data);
    }
    if (isRed(branch.right) && !isRed(branch.left)) {
      branch = rotateLeft(branch);
    }
    if (isRed(branch.left) && isRed(branch.left.left)) {
      branch = rotateRight(branch);
    }
    if (isRed(branch.left) && isRed(branch.right)) {
      flipColors(branch);
    }
    return branch;
  }
  function searchMin(branch) {
    if (!branch.left) {
      return branch;
    } else {
      return searchMin(branch.left);
    }
  }
  function recRemoveMin(branch) {
    if (!branch.left) {
      return null;
    }
    if (!isRed(branch.left) && !isRed(branch.left.left)) {
      branch = moveRedLeft(branch);
    }
    branch.left = recRemoveMin(branch.left);
    return balance(branch);
  }
  function recRemoveData(branch, value, data) {
    if (!branch) {
      return branch;
    } else if (branch.value === value) {
      branch.data = branch.data.filter(it => {
        return !eq(it, data);
      });
      return branch;
    } else if (branch.value > value) {
      branch.left = recRemoveData(branch.left, value, data);
      return branch;
    } else if (branch.value < value) {
      branch.right = recRemoveData(branch.right, value, data);
      return branch;
    }
  }
  function recRemoveNode(branch, value) {
    if (value < branch.value) {
      if (!isRed(branch.left) && !isRed(branch.left.left)) {
        branch = moveRedLeft(branch);
      }
      branch.left = recRemoveNode(branch.left, value);
    } else {
      if (isRed(branch.left)) {
        branch = rotateRight(branch);
      }
      if (value === branch.value && !branch.right) {
        return null;
      }
      if (!isRed(branch.right) && !isRed(branch.right.left)) {
        branch = moveRedRight(branch);
      }
      if (value === branch.value) {
        const x = searchMin(branch.right);
        branch.value = x.value;
        branch.data = x.data;
        branch.right = recRemoveMin(branch.right);
      } else {
        branch.right = recRemoveNode(branch.right, value);
      }
    }
    return balance(branch);
  }
  function recGet(branch, value) {
    if (!branch) {
      return null;
    } else if (branch.value === value) {
      return branch.data;
    } else if (branch.value > value) {
      return recGet(branch.left, value);
    } else if (branch.value < value) {
      return recGet(branch.right, value);
    }
  }
  function recUpdate(branch, value, oldData, newData) {
    if (!branch) {
      return branch;
    } else if (branch.value === value) {
      branch.data = branch.data.map(it => {
        return eq(it, oldData) ? newData : it;
      });
      return branch;
    } else if (branch.value > value) {
      return recUpdate(branch.left, value, oldData, newData);
    } else if (branch.value < value) {
      return recUpdate(branch.right, value, oldData, newData);
    }
  }
  function recRangeQuery(branch, fromValue, toValue, result) {
    if (!branch) {
      return result;
    }
    if (fromValue < branch.value) {
      recRangeQuery(branch.left, fromValue, toValue, result);
    }
    if (fromValue <= branch.value && toValue >= branch.value) {
      result.push(vec([branch.value, vec(branch.data)]));
    }
    if (toValue > branch.value) {
      recRangeQuery(branch.right, fromValue, toValue, result);
    }
    return result;
  }
  function rotateLeft(branch) {
    const x = branch.right;
    branch.right = x.left;
    x.left = branch;
    x.color = x.left.color;
    x.left.color = Color.RED;
    return x;
  }
  function rotateRight(branch) {
    const x = branch.left;
    branch.left = x.right;
    x.right = branch;
    x.color = x.right.color;
    x.right.color = Color.RED;
    return x;
  }
  function balance(branch) {
    if (isRed(branch.right)) {
      branch = rotateLeft(branch);
    }
    if (isRed(branch.left) && isRed(branch.left.left)) {
      branch = rotateRight(branch);
    }
    if (isRed(branch.left) && isRed(branch.right)) {
      flipColors(branch);
    }
    return branch;
  }
  function moveRedLeft(branch) {
    flipColors(branch);
    if (branch.right && isRed(branch.right.left)) {
      branch.right = rotateRight(branch.right);
      branch = rotateLeft(branch);
      flipColors(branch);
    }
    return branch;
  }
  function moveRedRight(branch) {
    flipColors(branch);
    if (branch.left && isRed(branch.left.left)) {
      branch = rotateRight(branch);
      flipColors(branch);
    }
    return branch;
  }
  function flip(color) {
    return color === Color.RED ? Color.BLACK : Color.RED;
  }
  function flipColors(branch) {
    branch.color = flip(branch.color);
    if (branch.left) {
      branch.left.color = flip(branch.left.color);
    }
    if (branch.right) {
      branch.right.color = flip(branch.right.color);
    }
  }
  function recHeight(branch) {
    let curHeight = 0;
    if (branch !== null) {
      curHeight = Math.max(recHeight(branch.left), recHeight(branch.right));
    }
    return 1 + curHeight;
  }
  function recToString(branch, result) {
    if (!branch) {
      return;
    }
    recToString(branch.left, result);
    result.push(`${branch.value}: [${branch.data.join(", ")}]`);
    recToString(branch.right, result);
  }
  function printTree(tree) {
    if (!tree) {
      return "";
    }
    const val = tree.color[0] + "(" + tree.value + ")";
    return "[" + printTree(tree.left) + " " + val + " " + printTree(tree.right) + "]";
  }
  function recTreeAsMap(branch, result) {
    if (!branch) {
      return result;
    }
    recTreeAsMap(branch.left, result);
    result[branch.value] = branch.data;
    recTreeAsMap(branch.right, result);
    return result;
  }
  const eq = cljs.core._EQ_;
  const vec = cljs.core.vec;
  const nil = cljs.core.nil;
  const Color = {RED:1, BLACK:2};
  class Node {
    constructor(value, data) {
      this.value = value;
      this.data = [data];
      this.left = null;
      this.right = null;
      this.color = Color.BLACK;
    }
  }
  class RangeTree {
    constructor() {
      this.root = null;
    }
    insert(value, data) {
      this.root = recInsert(this.root, value, data);
      this.root.color = Color.BLACK;
      return this;
    }
    remove(value, data) {
      if (!this.root) {
        return this;
      }
      this.root = recRemoveData(this.root, value, data);
      const newData = recGet(this.root, value);
      if (newData && newData.length === 0) {
        if (!isRed(this.root.left) && !isRed(this.root.right)) {
          this.root.color = Color.RED;
        }
        this.root = recRemoveNode(this.root, value);
        if (this.root) {
          this.root.color = Color.BLACK;
        }
      }
      return this;
    }
    update(value, oldData, newData) {
      this.root = recUpdate(this.root, value, oldData, newData);
      return this;
    }
    get(value) {
      return recGet(this.root, value);
    }
    rangeQuery(fromValue, toValue) {
      return recRangeQuery(this.root, fromValue, toValue, []);
    }
    height() {
      return recHeight(this.root);
    }
    isEmpty() {
      return !this.root;
    }
    toString() {
      const result = [];
      recToString(this.root, result);
      return result.join(", ");
    }
    asMap() {
      const result = {};
      recTreeAsMap(this.root, result);
      return result;
    }
  }
  const self = app.util.range_tree;
  self.make_tree = () => {
    return new RangeTree();
  };
  self.insert = (tree, value, data) => {
    return tree.insert(value, data);
  };
  self.remove = (tree, value, data) => {
    return tree.remove(value, data);
  };
  self.update = (tree, value, oldData, newData) => {
    return tree.update(value, oldData, newData);
  };
  self.get = (tree, value) => {
    const result = tree.get(value);
    if (!result) {
      return nil;
    }
    return vec(result);
  };
  self.range_query = (tree, from_value, to_value) => {
    if (!tree) {
      return vec();
    }
    return vec(tree.rangeQuery(from_value, to_value));
  };
  self.empty_QMARK_ = tree => {
    return tree.isEmpty();
  };
  self.height = tree => {
    return tree.height();
  };
  self.print = tree => {
    return printTree(tree.root);
  };
  self.as_map = tree => {
    return tree.asMap();
  };
});

//# sourceMappingURL=app.util.range_tree.js.map

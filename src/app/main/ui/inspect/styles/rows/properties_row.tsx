// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
//
// Copyright (c) KALEIDOS INC

import * as d from 'app/common/data'
import { categoryDictionary, formatTokenValue } from '@main/data/workspace/tokens/format'
import { tooltip as tooltip* } from '@ui/ds/tooltip'
import { propertyDetailCopiable as propertyDetailCopiable* } from '@ui/inspect/styles/property-detail-copiable'
import * as clipboard from '@util/clipboard'
import { tr } from '@util/i18n'
import * as tm from '@util/timers'
import { isBlank } from 'cuerdas'
import React, { useCallback, useRef, useState } from 'react'

interface PropertiesRowProps {
  className?: string
  term: string
  detail?: string
  property?: string
  token?: any
  copiable?: boolean
}

export const PropertiesRow: React.FC<PropertiesRowProps> = ({
  className,
  term,
  detail,
  token,
  property,
  copiable,
}) => {
  const copiableFlag = d.nilv(copiable, false)
  const hasDetail = detail !== null && !isBlank(detail)
  const resolvedDetail = hasDetail ? detail : '-'

  const [copied, setCopied] = useState(false)
  const rowRef = useRef<HTMLElement>(null)

  const copiableValue = token ? token.name : property

  const copyAttr = useCallback(() => {
    setCopied(true)
    clipboard.toClipboard(copiableValue ?? '')
    tm.schedule(1000, () => setCopied(false))
  }, [copiableValue])

  return (
    <dl
      className={[className, 'property-row'].filter(Boolean).join(' ')}
      data-testid="property-row"
    >
      <dt className="property-term">{term}</dt>
      <dd className="property-detail">
        {copiableFlag ? (
          token ? (
            <tooltip*
              id={token.name}
              className="tooltip-token-wrapper"
              triggerRef={rowRef}
              content={() => (
                <div className="tooltip-token">
                  <div className="tooltip-token-title">
                    {tr('inspect.tabs.styles.token-resolved-value')}
                  </div>
                  <div className="tooltip-token-value">
                    {token.type === 'typography' ? (
                      <ul className="tooltip-token-resolved-values">
                        {[...Object.entries(token.resolvedValue)].map(
                          ([prop, val]) => (
                            <li key={prop}>
                              {categoryDictionary(prop)}:{' '}
                              {formatTokenValue(val)}
                            </li>
                          )
                        )}
                      </ul>
                    ) : token.type === 'shadow' ? (
                      <ul className="tooltip-token-resolved-values">
                        {token.resolvedValue.map((item: any) =>
                          Object.entries(item).map(([key, val]) => (
                            <li key={key}>
                              {categoryDictionary(key)}:{' '}
                              {formatTokenValue(val)}
                            </li>
                          ))
                        )}
                      </ul>
                    ) : (
                      String(token.resolvedValue)
                    )}
                  </div>
                </div>
              )}
            >
              <propertyDetailCopiable*
                token={token}
                copied={copied}
                ref={rowRef}
                onClick={copyAttr}
              >
                {resolvedDetail}
              </propertyDetailCopiable*>
            </tooltip*>
          ) : (
            <propertyDetailCopiable*
              copied={copied}
              onClick={copyAttr}
            >
              {resolvedDetail}
            </propertyDetailCopiable*>
          )
        ) : (
          resolvedDetail
        )}
      </dd>
    </dl>
  )
}

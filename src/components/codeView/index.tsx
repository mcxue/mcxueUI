import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Tooltip from '../../../packages/tooltip';
import Icon from '../../../packages/icon';
import style from './index.module.scss';
import { Button } from '../../../index';
import Message from '../../../packages/message';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);


interface Props {
  path: string;
  showButtonGroup?: boolean;
  showCopyButton?: boolean;
  showCode?: boolean;
}

export default function CodeView(props: Props) {
  const {
    path,
    showButtonGroup = true,
    showCopyButton = true,
    showCode = false,
  } = props;
  const [code, setCode] = useState('');
  const [codePanelOpen, setCodePanelOpen] = useState(showCode);
  const codeElementRef = useRef<HTMLElement>(null);
  const allPaths = import.meta.glob('/src/demo/**/*.tsx', { as: 'raw' });
  useEffect(() => {
    if (!allPaths[`/src/demo/${path}.tsx`]) return;
    allPaths[`/src/demo/${path}.tsx`]().then(content => {
      setCode(content);
    });
  }, [path]);

  useLayoutEffect(() => { // code 变动时候，将其代码高亮
    if (codeElementRef.current) {
      hljs.highlightElement(codeElementRef.current);
    }
  }, [code]);

  return (
    <div className={style.codeView}>
      {showButtonGroup &&
        (
          <div className={style.buttonWrapper}>
            {
              (
                <Tooltip content={codePanelOpen ? '隐藏代码' : '查看代码'}>
                  <Button
                    style={{ fontSize: '16px', padding: '8px' }}
                    type="text"
                    onClick={() => {setCodePanelOpen(!codePanelOpen);}}
                  >
                    <Icon name="code" />
                  </Button>
                </Tooltip>
              )
            }
            {
              showCopyButton && (
                <Tooltip content="复制代码">
                  <Button
                    style={{ fontSize: '16px', padding: '8px' }}
                    type="text"
                    onClick={() => {
                      window.navigator.clipboard.writeText(code).then(() => {
                        Message.success('复制成功');
                      }).catch(() => {
                        // Message.error('复制失败');
                      });
                    }}
                  >
                    <Icon name="copy" />
                  </Button>
                </Tooltip>
              )
            }
          </div>
        )}
      <div className={style.pureCode}
           style={{ display: codePanelOpen ? 'block' : 'none' }}>
        <pre>
          <code className="language-ts" ref={codeElementRef}>{code}</code>
        </pre>
      </div>
    </div>
  );
}

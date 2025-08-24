import {Styles, View, Text} from '@react-pdf/renderer';
import {FC, ReactElement} from 'react';
import {flushSync} from 'react-dom';
import {createRoot} from 'react-dom/client';
import {Fragment} from 'react/jsx-runtime';
import {nativeEnum} from 'zod';
import {Tag} from '../../../../types/Tag';
import {pdfStyles} from '../utils/pdfStyles';


interface JsxPdfProps {
  el: ReactElement
}

export const JsxPdf: FC<JsxPdfProps> = ({el}) => {
  const htmlToPdfView = (node: typeof window.document.body['childNodes'][0]): ReactElement => {
    const style: Styles[0] = {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    };
    if (node.nodeName === 'P' || node.nodeName === 'UL') {
      for (const key of Object.keys(pdfStyles.paragraph)) {
        style[key] = pdfStyles.paragraph[key];
      }
    }

    if (node.nodeName === 'B' || node.nodeName === 'STRONG') {
      style.fontWeight = 'bold';
    }
    if (node.nodeName === 'LI') {
      style.marginLeft = 5;
    }

    if (node.textContent && node.childNodes.length === 0) {
      // return <Text style={style}>{parent.textContent}</Text>;
      return <>{node.textContent.split(' ').map((text, i) => <Text key={i} style={style}>{text.trim()} </Text>)}</>;
    }
    const child = node.childNodes[0];
    if (child && node.childNodes.length === 1) {
      if (node.nodeName === 'SPAN' && node instanceof Element) {
        const tag = node.getAttribute('x-data-tag');
        const valid = nativeEnum(Tag).safeParse(tag);
        if (valid.success) {
          const b = document.createElement('b');
          b.textContent = node.textContent;
          return htmlToPdfView(b);
        }
      }
      return <View style={style}>{htmlToPdfView(child)}</View>;
    }
    const view = <View style={style}>
      {Array.from(node.childNodes).map((x) => (
        <Fragment key={Math.random()}>{htmlToPdfView(x)}</Fragment>
      ))}
    </View>;
    return view;
  };

  const render = (el: ReactElement): ReactElement => {
    const div = document.createElement('div');
    const root = createRoot(div);
    flushSync(() => {
      root.render(el);
    });

    const result = htmlToPdfView(div);
    return result;
  };

  return render(el);
};

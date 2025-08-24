import {Link, View, Text} from '@react-pdf/renderer';
import {FC} from 'react';
import {Project} from '../../../../types/Projects';
import {pdfStyles} from '../utils/pdfStyles';
import {Tag} from '../../../../types/Tag';
import {TagsPdf} from './TagsPdf';
import {JsxPdf} from './JsxPdf';


export interface ProjectSerctionPdfProps {
  projects: Project[],
  allowedTags?: Tag[]
}
export const ProjectSectionPdf: FC<ProjectSerctionPdfProps> = ({projects, allowedTags}) => {
  const projectList = projects.filter((p) => {
    if (!allowedTags) {
      return true;
    }
    const projectTags = Object.values(p.tags).flatMap((x) => x);
    const result = !!allowedTags.find((tag) => projectTags.includes(tag));
    return result;
  });

  const cleanUrl = (url: string) => {
    return url;
    // return url.replace('https://', '').replace('http://', '');
  };

  return (
   <>
     {projects && projectList.map((p, i) => (
        <View key={p.title} style={pdfStyles.section} wrap={false}>
          {i === 0 && <Text style={pdfStyles.section.heading}>Projects & Code Samples</Text>}
          <Text style={pdfStyles.section.block.heading}>{p.title}</Text>
          <View style={pdfStyles.paragraph}>
            <View style={{flexDirection: 'row', gap: 5}}>
            {!!p.demo && <Link href={p.demo}>{cleanUrl(p.demo)}</Link>}
            {!!p.code && <Link href={p.demo}>{cleanUrl(p.code)}</Link>}
            {!!p.url && <Link href={p.demo}>{cleanUrl(p.url)}</Link>}
            </View>
          </View>

          {!p.brief && <JsxPdf el={p.description}></JsxPdf>}
          {p.brief && <JsxPdf el={p.brief}></JsxPdf>}
          {!!p.tags && allowedTags && <TagsPdf tags={p.tags} allowedTags={allowedTags} />}
        </View>
      ))}
      </>
  );
};

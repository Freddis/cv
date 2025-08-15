import {Page, View, StyleSheet, Document, Text, Styles, Font, Link} from '@react-pdf/renderer';
import {FC, Fragment, ReactElement} from 'react';
import {Model} from '../../types/Model';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {joinWith} from '../../utils/joinWith';
import {groupMap} from '../../model/groupMap';
import {TagGroup} from '../../types/TagGroup';
import {Tag} from '../../types/Tag';
import {tagMap} from '../../model/tagMap';

Font.register({family: 'Arial', src: '/fonts/Arial.ttf', fontStyle: 'normal', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold'});
Font.register({family: 'Arial', src: '/fonts/Arial-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-BoldItalic.ttf', fontStyle: 'italic', fontWeight: 'bold'});
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Arial',
    flexDirection: 'column',
    fontSize: 11,
    lineHeight: 1.3,
    padding: 80,
    paddingTop: 20,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 20,
    lineHeight: 1.5,
  },
  paragraph: {
    marginBottom: 5,
  },
  link: {
    color: '#0000ee',
  },
  section: {
    heading: {
      fontSize: 16,
      lineHeight: 1.4,
    },
    marginBottom: 10,
    block: {
      heading: {
        fontWeight: 'bold',
      },
    },
  },
});

export const CvPdf: FC<{model: Model}> = ({model}) => {

  const getDate = (date?: Date): string => {
    if (!date) {
      return 'To Date';
    }
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'November',
      'December',
    ];
    const month = date.getMonth();
    const name = months[month - 1] ?? 'January';
    const result = `${name.substring(0, 3)} ${date.getFullYear()}`;
    return result;
  };

  const htmlToPdfView = (parent: typeof window.document.body['childNodes'][0]): ReactElement => {
    const style: Styles[0] = {
      flexDirection: 'row',
      flexWrap: 'wrap',
    };
    if (parent.nodeName === 'P' || parent.nodeName === 'UL') {
      for (const key of Object.keys(styles.paragraph)) {
        style[key] = styles.paragraph[key];
      }
    }
    if (parent.nodeName === 'B') {
      style.fontWeight = 'bold';
    }
    if (parent.nodeName === 'LI') {
      style.marginLeft = 5;
    }
    if (parent.nodeName === 'P' || parent.childNodes.length === 0) {
      return <Text style={style}>{parent.textContent}</Text>;
    }
    const child = parent.childNodes[0];
    if (child && parent.childNodes.length === 1) {
      return <View style={style}>{htmlToPdfView(child)}</View>;
    }
    const view = <View style={style}>
      {Array.from(parent.childNodes).map((x) => (
        <Fragment key={Math.random()}>{htmlToPdfView(x)}</Fragment>
      ))}
    </View>;
    return view;
  };

  const jsxToPdf = (el: ReactElement): ReactElement => {
    const div = document.createElement('div');
    const root = createRoot(div);
    flushSync(() => {
      root.render(el);
    });

    const result = htmlToPdfView(div);
    return result;
  };
  const getTagsView = (
    tags: Tag[],
    inclusions?: {mobile?: boolean, backend?: boolean, frontend?:boolean, management?: boolean}
  ): ReactElement => {
    const groups: {name: TagGroup, tags: Tag[]}[] = [];
    const excluded: TagGroup[] = [
      TagGroup.Languages,
      TagGroup.Databases,
    ];
    if (!inclusions?.management) {
      excluded.push(TagGroup.Management);
    }
    if (!inclusions?.frontend) {
      excluded.push(TagGroup.Frontend);
    }
    if (!inclusions?.mobile) {
      excluded.push(TagGroup.Mobile);
    }
    if (!inclusions?.backend) {
      excluded.push(TagGroup.Backend);
    }
    const merged: {from: TagGroup, to: TagGroup}[] = [
      {from: TagGroup.Techniques, to: TagGroup.Other},
    ];
    for (const group of Object.keys(groupMap)) {
      if (excluded.includes(group)) {
        continue;
      }
      const groupTags: Tag[] = [];
      for (const tag of tags) {
        if (tagMap[tag].groups.includes(group)) {
          groupTags.push(tag);
        }
      }
      if (!groupTags.length) {
        continue;
      }
      groups.push({name: group, tags: groupTags});
    }
    for (const row of merged) {
      const from = groups.find((x) => x.name === row.from);
      const to = groups.find((x) => x.name === row.to);
      if (from && to) {
        to.tags = [...from.tags, ...to.tags];
        delete groups[groups.indexOf(from)];
      }
    }
    return (
      <View>
        {groups.map((group) => (
          <View key={group.name} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>{group.name}: </Text>
              {group.tags.join(', ')}
            </Text>
          </View>
        ))}
      </View>
    );
  };
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{model.profile.name}</Text>
        <Text >{model.profile.position}</Text>
      </View>

      <View style={styles.section}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Telegram: </Text>
          <Link href={`https://t.me/${model.profile.contacts.telegram}`}>{model.profile.contacts.telegram}</Link>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Phone: </Text>
          <Link href={`tel:${model.profile.contacts.phone}`}>{model.profile.contacts.phone}</Link>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Email: </Text>
          <Link href={`mailto:${model.profile.contacts.email}`}>{model.profile.contacts.email}</Link>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>LinkedIn: </Text>
          <Link href={`${model.profile.contacts.linkedIn}`}>{model.profile.contacts.linkedIn}</Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section.heading}>Core Qualifications</Text>
        {model.profile.brief.map((p) => (
          <Text key={p} style={{marginBottom: 5}} >{p}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.section.heading}>Education</Text>
        <Text style={{}}>{model.education.degree}</Text>
        <Text style={{}}>
          {model.education.insitution}, {model.education.start.getFullYear()} - {model.education.end.getFullYear()}
        </Text>
      </View>

      {model.jobs.map((j, i) => (
        <View key={j.company.name} style={styles.section} wrap={false}>
          {i === 0 && <Text style={styles.section.heading}>Employment History</Text>}
          <View style={styles.paragraph}>
            <Text style={styles.section.block.heading}>{j.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{j.company.name}</Text>
               {!!j.company.websites && (
                <View style={{flexDirection: 'row'}}>
                  <Text>, </Text>
                  {joinWith(
                    j.company.websites.map((website) => <Link key={website}>{website}</Link>),
                    <Text key={Math.random()}>, </Text>
                  )}
                </View>
            )}
            </View>

            <Text>{getDate(j.from)} - {getDate(j.to)}</Text>
          </View>
          <View>{jsxToPdf(j.description)}</View>
          {!!j.tags && (
            <View>
              {getTagsView(j.tags, {
                management: !!j.skills?.management,
                backend: !!j.skills?.backend,
                frontend: !!j.skills?.backend && j.skills?.backend !== 100,
                mobile: !!j.skills?.mobile,
              })}
            </View>)}
        </View>
      ))}

      {model.projects.map((p, i) => (
        <View key={p.title} style={styles.section} wrap={false}>
          {i === 0 && <Text style={styles.section.heading}>Proejcts & Code Samples</Text>}
          <Text style={styles.section.block.heading}>{p.title}</Text>
          <View style={styles.paragraph}>
            {!!p.demo && <Text>Demo: <Link>{p.demo}</Link></Text>}
            {!!p.code && <Text>Code: <Link>{p.code}</Link></Text>}
            {!!p.url && <Text>Website: <Link>{p.url}</Link></Text>}
          </View>
          <View>{jsxToPdf(p.description)}</View>
          {!!p.tags && <View>{getTagsView(p.tags, p.skills)}</View>}
        </View>
      ))}

    </Page>
  </Document>
  );
};

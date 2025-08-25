import {Font, StyleSheet} from '@react-pdf/renderer';

Font.register({family: 'Arial', src: '/fonts/Arial.ttf', fontStyle: 'normal', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold'});
Font.register({family: 'Arial', src: '/fonts/Arial-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal'});
Font.register({family: 'Arial', src: '/fonts/Arial-BoldItalic.ttf', fontStyle: 'italic', fontWeight: 'bold'});

export const pdfStyles = StyleSheet.create({
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
    paddingBottom: 5,
    borderBottom: '1px solid silver',
    block: {
      heading: {
        fontWeight: 'bold',
      },
    },
  },
});

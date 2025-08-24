import {StyleSheet} from '@react-pdf/renderer';

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
    block: {
      heading: {
        fontWeight: 'bold',
        // fontSize: 10,
      },
    },
  },
});

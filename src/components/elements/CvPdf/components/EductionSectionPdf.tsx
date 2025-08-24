import {View, Text} from '@react-pdf/renderer';
import {FC} from 'react';
import {pdfStyles} from '../utils/pdfStyles';
import {Model} from '../../../../types/Model';

export const EducationSectionPdf: FC<{education: Model['education']}> = ({education}) => {
  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.section.heading}>Education</Text>
      <Text style={{}}>{education.degree}</Text>
      <Text style={{}}>
        {education.insitution}, {education.start.getFullYear()} - {education.end.getFullYear()}
      </Text>
    </View>
  );
};

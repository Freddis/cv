import {View, Text} from '@react-pdf/renderer';
import {FC} from 'react';
import {Model} from '../../../../types/Model';
import {pdfStyles} from '../utils/pdfStyles';

export const ProfileSectionPdf: FC<{profile: Model['profile'], variant: 'long' | 'short'}> = ({
  variant,
  profile,
}) => {

  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.section.heading}>Profile</Text>
      {variant === 'short' && <Text style={{marginBottom: 5}} >{profile.brief}</Text>}
      {variant !== 'short' && profile.core.map((p) => (
        <Text key={p} style={{marginBottom: 5}} >{p}</Text>
      ))}
    </View>
  );
};

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
      <View style={{flexDirection: 'column', gap: 5}}>
        {variant === 'short' && <Text>{profile.brief}</Text>}
        {variant !== 'short' && profile.core.map((p) => (
          <Text key={p}>{p}</Text>
        ))}
      </View>
    </View>
  );
};

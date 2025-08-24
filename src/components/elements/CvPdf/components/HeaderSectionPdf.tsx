import {View, Text, Link} from '@react-pdf/renderer';
import {pdfStyles} from '../utils/pdfStyles';
import {Model} from '../../../../types/Model';
import {FC} from 'react';
import {LinkPdfIcon} from './LinkPdfIcon';
import {LinkedInPdfIcon} from './LinkedInPdfIcon';
import {MailPdfIcon} from './MailPdfIcon';
import {PhonePdfIcon} from './PhonePdfIcon';
import {TelegramPdfIcon} from './TelegramPdfIcon';

interface HeaderSectionPdfProps {
  profile: Model['profile']
  contacts?: Partial<Record<keyof Model['profile']['contacts'], boolean>>
}
export const HeaderSectionPdf: FC<HeaderSectionPdfProps> = ({profile, contacts = {website: true, phone: true, email: true}}) => {
  return (
    <View style={pdfStyles.section}>
      <Text style={pdfStyles.heading}>{profile.name}</Text>
      <Text >{profile.position}</Text>
      <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
        {contacts.website && (
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2}}>
            <LinkPdfIcon width={10}/>
            <Link href={`${profile.contacts.website}`}>{profile.contacts.website}</Link>
          </View>
        )}
        {contacts.phone && (
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2}}>
            <PhonePdfIcon width={10}/>
            <Link href={`tel:${profile.contacts.phone}`}>{profile.contacts.phone}</Link>
          </View>
        )}
        {contacts.email && (
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2}}>
            <MailPdfIcon width={10} />
            <Link href={`mailto:${profile.contacts.email}`}>{profile.contacts.email}</Link>
          </View>
        )}
        {contacts.linkedIn && (
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2}}>
            <LinkedInPdfIcon width={10} />
            <Link href={`${profile.contacts.linkedIn}`}>{profile.contacts.linkedIn}</Link>
          </View>
        )}
        {contacts.telegram && (
          <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2}}>
            <TelegramPdfIcon width={10}/>
            <Link href={`https://t.me/${profile.contacts.telegram}`}>{profile.contacts.telegram}</Link>
          </View>
        )}
      </View>
    </View>

  );
};

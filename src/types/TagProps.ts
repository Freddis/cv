import {ProgrammingLangauge} from './ProgrammingLangauge';
import {TagGroup} from './TagGroup';

export type TagProps = {
  estimatable: boolean;
  language: null | [ProgrammingLangauge, ...ProgrammingLangauge[]];
  groups: [TagGroup, ...TagGroup[]];
};

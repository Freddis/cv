import {ProgrammingLangauge} from "./ProgrammingLangauge";
import {TagGroup} from "./TagGroup";

export type TagProps = {
  language: null | [ProgrammingLangauge,...ProgrammingLangauge[]];
  categories: [TagGroup, ...TagGroup[]];
};
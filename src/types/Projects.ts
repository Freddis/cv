import {ReactElement} from 'react';
import {Tag} from './Tag';

export interface Project {
  title: string,
  color: string,
  case?: string,
  code?: string,
  demo?: string,
  url?: string,
  description: ReactElement,
  skills: {
    mobile?: boolean,
    backend?: boolean,
    frontend?:boolean,
    management?: boolean
  },
  logo?: ReactElement,
  tags: [Tag, ...Tag[]]
}

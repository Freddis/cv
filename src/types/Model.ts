import {Education} from './Education';
import {Job} from './Job';
import {Project} from './Projects';

export interface Model {
  profile:{
    name: string,
    position: string,
    dateOfBirth: Date,
    country: string,
    brief: string
    core: string[],
    contacts:{
      telegram: string,
      phone: string,
      email: string,
      linkedIn: string,
      website: string,
    },
    skills: {
      backend: string[],
      frontend: string[],
      mobile: string[],
      management: string[],
    }
  },
  education: Education
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jobs: Job<any>[]
  projects: Project[]
}

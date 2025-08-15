import {Education} from './Education';
import {Job} from './Job';
import {Project} from './Projects';

export interface Model {
  profile:{
    name: string,
    position: string,
    dateOfBirth: Date,
    country: string,
    brief: string[],
    contacts:{
      telegram: string,
      phone: string,
      email: string,
      linkedIn: string,
    },
    skills: {
      backend: string[],
      frontend: string[],
      mobile: string[],
      management: string[],
    }
  },
  education: Education
  jobs: Job[]
  projects: Project[]
}

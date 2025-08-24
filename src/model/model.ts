import {Model} from '../types/Model';
import {cleanUpBreaks} from '../utils/cleanUpBreaks';
import {alfabank} from './jobs/alfabank';
import {analit} from './jobs/analit';
import {homeStudio} from './jobs/homeStudio';
import {paive} from './jobs/paive';
import {sitronics} from './jobs/sitronics';
import {skyground} from './jobs/skyground';
import {unleashedCapital} from './jobs/unleashedCapital';
import {upwork} from './jobs/upwork';
import {webrex} from './jobs/webrex';
import {xsoft} from './jobs/xsoft';
import {discipline} from './projects/discipline';
import {strapOnOpenApi} from './projects/strapOnOpenApi';
import {streamGridKit} from './projects/streamGridKit';
import {tauroMarkets} from './projects/tauroMarkets';

export const model: Model = {
  profile: {
    brief: cleanUpBreaks(`Lead / Senior Full-Stack Developer with 14+ years of experience 
            designing and scaling high-impact applications. 
            Proven record of leading engineering teams, building fintech and trading 
            platforms, and delivering resilient microservices 
            and event-driven systems. Passionate about type-safe development, 
            scalable architectures, and DevOps automation.`),
    core: [
      `With over 14 years of experience in web and mobile development, I have consistently
        worked on complex, high-impact projects throughout my career. Passionate about technology,
        I stay up-to-date with industry-leading solutions and best practices in modern software development.`,
      `I have strong expertise in multiple programming languages
        and proficient in developing production-grade applications across these technologies.
        My technical knowledge, problem-solving skills, and commitment to high-quality code make me a reliable choice
        for challenging development tasks.`,
    ].map((x) => cleanUpBreaks(x)),
    name: 'Alex Sarychev',
    position: 'Lead / Senior Full-Stack Developer',
    country: 'Georgia',
    dateOfBirth: new Date('1991-03-04'),
    contacts: {
      telegram: 'aleksei_sarychev',
      phone: '+995 511 260 049',
      email: 'alex@alex-sarychev.com',
      linkedIn: 'alex-sarychev-a75a0374',
      website: 'https://alex-sarychev.com',
    },
    skills: {
      backend: [
        `I design and build robust backend systems using TypeScript, 
        JavaScript, PHP, C#, and Java, delivering scalable,high-performance applications.
        `,
        `With expertise in microservices architecture, object-oriented design,
         and API development, I create clean, modular, and maintainable code.`,
      ].map((x) => cleanUpBreaks(x)),
      frontend: [
        `I build responsive, high-performance frontends using Angular, React and Vue, delivering seamless,
         accessible experiences across devices`,
        `I develop robust design systems that ensure consistent, theme-adaptive components,
          enabling rapid development without constant designer input. Proficient in browser automation,
          testing, and BDD.`,
      ].map((x) => cleanUpBreaks(x)),
      mobile: [
        `I develop high-quality mobile applications using Java and Swift for native Android and iOS,
        as well as React Native for cross-platform solutions.`,
        `With a focus on performance, usability, and maintainable architecture, I deliver smooth,
        responsive apps that integrate seamlessly with backend services and modern APIs.`,
      ].map((x) => cleanUpBreaks(x)),
      management: [
        `I lead by example, guiding teams of up to 10 developers with a
        focus on collaboration, mentorship, and shared ownership of success.`,
        ` Not afraid to get my hands dirty, I stay involved in the code while setting
        the technical vision and direction, capable of driving company-wide IT strategy at the CTO level.`,
      ].map((x) => cleanUpBreaks(x)),
    },
  },
  jobs: [
    skyground,
    unleashedCapital,
    upwork,
    homeStudio,
    analit,
    sitronics,
    alfabank,
    xsoft,
    webrex,
    paive,
  ],
  projects: [
    tauroMarkets,
    discipline,
    strapOnOpenApi,
    streamGridKit,
  ],
  education: {
    start: new Date('2008-09-01'),
    end: new Date('2013-06-01'),
    degree: 'Bachelor Degree in Development of CAD Systems',
    insitution: 'Moscow State University of Design and Technology',
  },
};

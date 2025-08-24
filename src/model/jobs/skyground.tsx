import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const skyground: Job<Domain.Management> = {
  from: new Date('2022-11-01'),
  to: new Date('2025-02-22'),
  title: 'Tech Lead',
  company: {
    websites: ['https://skyground.group'],
    name: 'Skyground LLC',
  },
  skills: {
    management: 60,
    backend: 75,
    mobile: 10,
  },
  tags: {
    Management: [
      Tag.Management,
      Tag.Jira,
    ],
    Backend: [
      Tag.Backend,
      Tag.nestJS,
      Tag.cpp,
      Tag.TCP,
      Tag.Express,
      Tag.awsFargate,
      Tag.aws,
      Tag.awsLambda,
      Tag.redis,
      Tag.protobuf,
      Tag.cSharp,
      Tag.docker,
      Tag.typeORM,
      Tag.Knex,
      Tag.Gulp,
      Tag.Webpack,
      Tag.Zod,
      Tag.gha,
      Tag.mysql,
      Tag.postgreSQL,
      Tag.mt4,
      Tag.mt5,
      Tag.fintech,
      Tag.websocket,
      Tag.jenkins,
    ],
    Frontend: [
      Tag.Frontend,
      Tag.Tailwind,
      Tag.tanstackQuery,
      Tag.react,
      Tag.redux,
      Tag.playwright,
      Tag.Zod,
      Tag.nextJS,
      Tag.websocket,
      Tag.fintech,
      Tag.designSystem,
      Tag.gha,
      Tag.jenkins,
    ],
    Mobile: [
      Tag.Mobile,
      Tag.swift,
      Tag.Mobile,
      Tag.fintech,
    ],
  },
  description: {
    Backend: (
      <p>
        Built type-safe services using <b>TypeScript</b>, <b>Express</b>,
        <b>Zod</b>, and <b>OpenAPI</b>. Delivered an <b>ETL pipeline</b>
        with <b>RabbitMQ</b> (10M+ updates/day) and a <b>Redis</b> cache for live PnL (25k users in &lt;5s).
        Improved infrastructure with <b>Docker</b>, <b>AWS Lambda</b>, <b>protobuf</b>,
        <b>TCP</b>, <b>MySQL</b>, <b>PostgreSQL</b>,
        plus <b>C++</b>/<b>C#</b> modules.
      </p>
    ),
    Frontend: (
      <p>Developed apps with <b>React</b>, <b>Next.js</b>, <b>Tailwind</b>,
        <b>tanstackQuery</b>, and <b>Redux</b>. Created a shared <b>design system</b>,
        optimized builds with <b>Webpack</b>/<b>Gulp</b>, added <b>Websockets</b>,
        and ensured quality with <b>Playwright</b> tests.</p>
    ),
    Management: (
      <p>
        Led a <b>10-person team</b> delivering a Forex whitelabeling platform with 30+ <b>microservices</b> on
        <b>AWS ECS / Fargate</b>. Managed <b>hiring</b>, <b>mentorship</b>, and
        <b>planning</b>, standardized workflows with <b>Jira</b>, and set up <b>CI/CD</b>
        via <b>Jenkins</b> and <b>GitHub Actions</b>.
      </p>
    ),
    Mobile: (
      <p>
        Contributed to <b>Swift</b> apps integrated with <b>MT4/MT5</b>,
        extending platform functionality across devices
        in the <b>fintech</b> ecosystem.
      </p>
    ),
  },
  primaryDescription: Domain.Management,
};

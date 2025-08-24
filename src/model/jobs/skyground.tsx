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
      Tag.nodeJs,
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
        Built type-safe services using <span x-data-tag={Tag.typescript}>TypeScript</span>
        ,<span x-data-tag={Tag.Zod}>Zod</span>, and <span x-data-tag={Tag.openApi}>OpenAPI</span>.
        Delivered an <span x-data-tag={Tag.ETL}>ETL</span> pipeline
        with <span x-data-tag={Tag.rabbitMQ}>RabbitMQ</span> (10M+ updates/day) and
        a <span x-data-tag={Tag.redis}>Redis</span> cache for live PnL (25k users in &lt;5s).
        Improved infrastructure with <span x-data-tag={Tag.docker}>Docker</span>, <span x-data-tag={Tag.awsLambda}>AWS
        Lambda</span>, <span x-data-tag={Tag.protobuf}>protobuf</span>
        , <span x-data-tag={Tag.TCP}>TCP</span>, <span x-data-tag={Tag.mysql}>MySQL</span>,
        <span x-data-tag={Tag.postgreSQL}>PostgreSQL</span>,
        plus <span x-data-tag={Tag.cpp}>C++</span>/<span x-data-tag={Tag.cSharp}>C#</span> modules.
      </p>
    ),
    Frontend: (
      <p>
        Developed apps with <span x-data-tag={Tag.react}>React</span>, <span x-data-tag={Tag.nextJS}>Next.js</span>
        , <span x-data-tag={Tag.Tailwind}>Tailwind</span>
        , <span x-data-tag={Tag.tanstackQuery}>tanstackQuery</span>
        , and <span x-data-tag={Tag.redux}>Redux</span>
        . Created a shared <span x-data-tag={Tag.designSystem}>design system</span>, optimized builds
        with <span x-data-tag={Tag.Webpack}>Webpack</span>/<span x-data-tag={Tag.Gulp}>Gulp</span>,
        added <span x-data-tag={Tag.websocket}>Websockets</span>
        , and ensured quality with <span x-data-tag={Tag.playwright}>Playwright</span> tests
        .</p>
    ),
    Management: (
      <p>
        Led a <span x-data-tag={Tag.Management}>10-person</span> team delivering
        a <span x-data-tag={Tag.fintech}>Forex</span> whitelabeling platform
        with <span x-data-tag={Tag.microservices}>30+  microservices</span>
        on <span x-data-tag={Tag.awsFargate}>AWS ECS / Fargate</span>. Managed hiring, mentorship, and
        planning, standardized workflows with <span x-data-tag={Tag.Jira}>Jira</span>, and
        set up <span x-data-tag={Tag.Backend}>CI/CD</span>&nbsp;
        via <span x-data-tag={Tag.jenkins}>Jenkins</span> and <span x-data-tag={Tag.gha}>GitHub Actions</span>.
      </p>
    ),
    Mobile: (
      <p>
        Contributed to <span x-data-tag={Tag.swift}>Swift</span> apps integrated with <span x-data-tag={Tag.fintech}>MT4/MT5</span>,
        extending platform functionality across devices
        in the <span x-data-tag={Tag.fintech}>fintech</span> ecosystem.
      </p>
    ),
  },
  primaryDescription: Domain.Management,
};

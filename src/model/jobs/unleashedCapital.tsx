import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const unleashedCapital: Job<Domain.Backend> = {
  from: new Date('2021-09-01'),
  to: new Date('2022-10-01'),
  company: {
    name: 'Unleashed Capital GmbH',
    bankrupcyDate: new Date('2023-12-23'),
  },
  title: 'Senior Fullstack Developer',
  skills: {
    management: 0,
    backend: 100,
  },
  tags: {
    Backend: [
      Tag.Backend,
      Tag.javascript,
      Tag.typescript,
      Tag.jenkins,
      Tag.kubernetes,
      Tag.postgreSQL,
      Tag.redis,
      Tag.protobuf,
      Tag.nestJS,
      Tag.docker,
      Tag.Knex,
      Tag.Jira,
      Tag.Webpack,
      Tag.Zod,
      Tag.websocket,
      Tag.typeORM,
      Tag.microservices,
      Tag.fintech,
      Tag.CodeGen,
    ],
  },
  primaryDescription: Domain.Backend,
  description: {
    Backend: (
       <p>
        Developed and maintained <b>microservices</b> (≈15)
        for <b>HAVE Bank</b> using <b>NestJS</b>, <b>TypeORM</b>, <b>Knex</b>, <b>PostgreSQL</b>, <b>Redis</b>,
        <b>Protobuf</b>, <b>Docker</b>, <b>Kubernetes</b>, and <b>Jenkins</b>. Built <b>GraphQL APIs</b> and event-driven
        architecture with <b>Kafka</b> and <b>RabbitMQ</b>, following <b>CQRS</b> patterns in a high-load <b>fintech</b> environment.
      </p>

    ),
  },

};

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
      Tag.nodeJs,
      Tag.javascript,
      Tag.typescript,
      Tag.jenkins,
      Tag.kubernetes,
      Tag.postgreSQL,
      Tag.redis,
      Tag.protobuf,
      Tag.nestJS,
      Tag.docker,
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
        Developed and maintained <span x-data-tag={Tag.microservices}>15  microservices</span> for
        HAVE Bank using <span x-data-tag={Tag.nestJS}>NestJS</span>, <span x-data-tag={Tag.typeORM}>TypeORM</span>
        , <span x-data-tag={Tag.postgreSQL}>PostgreSQL</span>, <span x-data-tag={Tag.redis}>Redis</span>
        , <span x-data-tag={Tag.protobuf}>Protobuf</span>, <span x-data-tag={Tag.docker}>Docker</span>
        , <span x-data-tag={Tag.kubernetes}>Kubernetes</span>, and <span x-data-tag={Tag.jenkins}>Jenkins</span>
        . Built <span x-data-tag={Tag.graphql}>GraphQL</span> APIs and event-driven
        architecture with <span x-data-tag={Tag.kafka}>Kafka</span>
        , following <span x-data-tag={Tag.microservices}>CQRS</span> and&nbsp;
        <span x-data-tag={Tag.EventSourcing}>Event Sourcing</span> patterns
        in a <span x-data-tag={Tag.fintech}>fintech</span> environment.
      </p>

    ),
  },

};

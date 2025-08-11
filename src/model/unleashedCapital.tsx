import {Job} from "../types/Job";
import {Tag} from "../types/Tag";

export const unleashedCapital: Job = {
  from: new Date('2021-09-01'),
  to:  new Date('2023-10-01'),
  title: "Senior Fullstack Developer",
  description: (
    <div>
      <p className="mb-2">
        Participating in the development of HAVE Bank with Unleashed Capital.
        We used microservice architecture along with event sourcing and CQRS patterns.
        API have been developed using GraphQL.
        For communication we used both Kafka and RabbitMQ. 
        The rough number of microservices managed by the department: 15.
      </p>
      <p>
        One of the biggest problems I solved was unification of validation
        and transformation of data between different sources: 
        Postgres =&gt; Microservice Level =&gt; Protobuf =&gt; GraphQL. 
        At each point the data has to be properly validated and 
        transformed to expected format which is usually significantly different for each level.
      </p>
    </div>
  ),
  skills: {
    management: 0,
    backend: 100,
  },
  tags: [Tag.typescirpt],
  company: {
    name: "Unleashed Capital GmbH",
    webiste: "unleashedcapital.com",
    bankrupcyDate: new Date('2023-12-23'),
  }
}
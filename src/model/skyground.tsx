import {Job} from "../types/Job"

export const skyground: Job = {
  from: new Date('2023-11-01'),
  to: new Date('2025-02-22'),
  title: "Tech Lead",
  company: {
    webiste: 'https://skyground.group',
    name: 'Skyground LLC',
  },
  description: (
    <div>
      <p className="mb-2">
        Led a team of 10 developers in designing and developing a whitelabeling platform for Forex brokerage,
         overseeing more than 30 services deployed on AWS ECS.
      </p>
      <p className="mb-2">
      Duties consist of hiring new developers, planning for the department, 
      creating the development workflow and pipelines, navigating developers on their
       tasks.Participated in product and UX design decisions since i had some relevant experience.
      </p>
      <p className="mb-2">
      Accomplishments:
      <ul>
        <li>1. Have written Documentation and solidified Jira workflows</li>
      <li>2. Integrated tests (both browser and integrational) and CI pipelines.</li>
      <li>2. Developed a new framework for frontend and backend projects. Input / Output fully typechecked.
      Used OpenAPI and Zod to achieve the same effect as tRPC but more flexible and tailored to our needs.</li>
      <li>3. Taken DevOps responsibilities, constantly was working on improving CD pipelines</li>
      <li>4. Developed an ETL service that had to process more than 10 million updates daily.
        RMQ and some functionality to correct problems remotely such as reuploading some data.</li>
      <li>5. Developed a cache system to show stats on open trades such as open PNL  that processed 10 million ticks and trades daily.
         The whole forex server (25k users and 7k open trades) processed within 5 seconds using Typescript only.</li>
      </ul>
      </p>
    </div>
  ),
  
}
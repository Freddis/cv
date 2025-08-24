import {TauroMarketsLogo} from '../../components/elements/TauroMarketsLogo';
import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const tauroMarkets: Project = {
  title: 'Tauro Markets',
  color: 'bg-white',
  url: 'https://tauromarkets.com/',
  logo: <TauroMarketsLogo />,
  tags: {
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
  },
  brief: (
    <p>Tauro Markets is a multi-asset investment platform — a fully
        operational brokerage whitelabel with over 20+ Fargate services</p>
  ),
  description: (
    <div>
      <p className="mb-2">
        Tauro Markets is a multi-asset investment platform — a fully
        operational brokerage whitelabel — built to give clients
        everything they need in one seamless package: conversion-ready website, robust CRM, trading dashboard
        that displays everything in real time and ofcourse ETL system for importing and exporting  data.
      </p>
      <p className="mb-2">
        With over 30+ Fargate services, Tauro delivers a full-stack,
        end-to-end trading experience that’s as scalable as it is powerful.
      </p>
    </div>
  ),
};

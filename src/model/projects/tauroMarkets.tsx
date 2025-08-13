import {TauroMarketsLogo} from '../../components/elements/TauroMarketsLogo';
import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const tauroMarkets: Project = {
  name: 'Tauro Markets',
  color: 'bg-white',
  url: 'https://tauromarkets.com/',
  logo: <TauroMarketsLogo />,
  description: (
    <div>
      <p className="mb-2">
        Tauro Markets is a multi-asset investment platform — a fully
        operational brokerage whitelabel — built to give clients
        everything they need in one seamless package: conversion-ready website, robust CRM, trading dashboard
         that displays everything in real time and ofcourse ETL system for importing and exporting  data.
      </p>
      <p className="mb-2">
        With over 20+ Fargate services, Tauro delivers a full-stack,
         end-to-end trading experience that’s as scalable as it is powerful.
      </p>
    </div>
  ),
  tags: [
    Tag.javascript,
    Tag.typescript,
    Tag.cpp,
    Tag.Tailwind,
    Tag.tanstackQuery,
    Tag.TCP,
    Tag.Express,
    Tag.awsFargate,
    Tag.aws,
    Tag.awsLambda,
    Tag.redis,
    Tag.react,
    Tag.protobuf,
    Tag.nextJS,
    Tag.cSharp,
    Tag.docker,
    Tag.typeORM,
    Tag.Knex,
    Tag.playwright,
    Tag.Gulp,
    Tag.Webpack,
    Tag.Zod,
    Tag.websocket,
    Tag.gha,
    Tag.mysql,
    Tag.postgreSQL,
    Tag.redux,
    Tag.designSystem,
    Tag.rabbitMQ,
    Tag.mt4,
    Tag.mt5,
    Tag.redux,
    Tag.gha,
    Tag.Replication,
  ],
};

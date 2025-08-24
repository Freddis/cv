import {Tag} from '../types/Tag';
import {TagGroup} from '../types/TagGroup';
import {TagProps} from '../types/TagProps';

export const tagMap: Record<Tag, TagProps> = {
  [Tag.typescript]: {
    estimatable: true,
    language: [Tag.typescript],
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.javascript]: {
    language: [Tag.javascript],
    estimatable: true,
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.php]: {
    language: [Tag.php],
    estimatable: true,
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.java]: {
    language: [Tag.java],
    estimatable: true,
    groups: [TagGroup.Languages, TagGroup.Backend, TagGroup.Mobile],
  },
  [Tag.cSharp]: {
    language: [Tag.cSharp],
    estimatable: true,
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.swift]: {
    language: [Tag.swift],
    estimatable: false,
    groups: [TagGroup.Languages, TagGroup.Mobile],
  },
  [Tag.cpp]: {
    estimatable: false,
    language: [Tag.cpp],
    groups: [TagGroup.Languages],
  },
  [Tag.haskell]: {
    estimatable: false,
    language: [Tag.haskell],
    groups: [TagGroup.Languages],
  },

  [Tag.redmine]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Management],
  },
  [Tag.Jira]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Management],
  },
  [Tag.Assembla]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Management],
  },

  [Tag.jenkins]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.CDCI, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.teamCity]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.CDCI, TagGroup.Backend],
  },
  [Tag.gitlab]: {language: null, estimatable: false, groups: [TagGroup.CDCI, TagGroup.Backend]},

  [Tag.bugsnag]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Observability, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.sentry]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Observability, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.elk]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Observability, TagGroup.Backend],
  },
  [Tag.prometheus]: {
    language: null,
    estimatable: false,
    groups: [TagGroup.Observability, TagGroup.Backend],
  },

  [Tag.jquery]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.ajax]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Techniques, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.websocket]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.graphql]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.openApi]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.longPolling]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Frontend],
  },
  [Tag.protobuf]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
  },
  [Tag.trpc]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.kue]: {
    estimatable: false,
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
  },
  [Tag.bull]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.redux]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.mobX]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Zod]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },

  [Tag.mooTools]: {
    language: [Tag.javascript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.prototype]: {
    language: [Tag.javascript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.yii]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.laravel]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.spring]: {
    language: [Tag.java],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.nextJS]: {
    estimatable: true,
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.nestJS]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: true,
  },
  [Tag.react]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
    estimatable: true,
  },
  [Tag.angular]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Frontend],
    estimatable: true,
  },
  [Tag.Vue]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Express]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Hibernate]: {
    language: [Tag.java],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.JavaFx]: {
    language: [Tag.java],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.symfony]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.typeORM]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.drizzle]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend],
    estimatable: false,
  },

  [Tag.mysql]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: true,
  },
  [Tag.mssql]: {
    language: [Tag.cSharp],
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.postgreSQL]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: true,
  },
  [Tag.mongoDB]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: true,
  },
  [Tag.couchDB]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.sqLite]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.memcached]: {
    language: [Tag.php],
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.redis]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },

  [Tag.rabbitMQ]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.kafka]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.smtp]: {
    language: null,
    groups: [TagGroup.Backend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.mt5]: {language: null, groups: [TagGroup.Other, TagGroup.Backend], estimatable: false},
  [Tag.mt4]: {language: null, groups: [TagGroup.Other, TagGroup.Backend], estimatable: false},
  [Tag.HTTP]: {language: null, groups: [TagGroup.Other, TagGroup.Backend, TagGroup.Frontend], estimatable: false},
  [Tag.TCP]: {language: null, groups: [TagGroup.Other, TagGroup.Backend], estimatable: false},

  [Tag.reactNative]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Mobile],
    estimatable: false,
  },

  [Tag.designSystem]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.CodeGen]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Scaling]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend, TagGroup.Databases],
    estimatable: false,
  },
  [Tag.Replication]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Databases, TagGroup.Backend],
    estimatable: false,
  },

  [Tag.vbox]: {language: null, groups: [TagGroup.CDCI, TagGroup.Backend], estimatable: false},
  [Tag.tanstackStart]: {
    language: [Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.tanstackQuery]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.docker]: {language: null, groups: [TagGroup.CDCI, TagGroup.Frontend, TagGroup.Backend], estimatable: false},
  [Tag.aws]: {language: null, groups: [TagGroup.CDCI, TagGroup.Backend], estimatable: false},
  [Tag.awsFargate]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.awsLambda]: {
    language: null,
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.kubernetes]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Vite]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.CDCI, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Webpack]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Frontend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Gulp]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.CDCI, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Apache]: {language: null, groups: [TagGroup.CDCI, TagGroup.Backend], estimatable: false},
  [Tag.Nginx]: {language: null, groups: [TagGroup.CDCI, TagGroup.Backend], estimatable: false},

  [Tag.selenium]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.playwright]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.mocha]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.CDCI, TagGroup.Frontend, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.nunit]: {
    language: [Tag.cSharp],
    groups: [TagGroup.CDCI, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.pHPUnit]: {
    language: [Tag.php],
    groups: [TagGroup.CDCI, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.jUnit]: {
    language: [Tag.java],
    groups: [TagGroup.CDCI, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.prisma]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Doctrine]: {
    language: [Tag.php],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.HTML]: {
    language: null,
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.CSS]: {
    language: null,
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Tailwind]: {
    language: null,
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.SVG]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.nodeJs]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Backend],
    estimatable: true,
  },
  [Tag.Knex]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.microservices]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.ASPNETMVC]: {
    language: [Tag.cSharp],
    groups: [TagGroup.Backend],
    estimatable: false,
  },
  [Tag.awsCDK]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.CDCI, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.expo]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Mobile],
    estimatable: false,
  },
  [Tag.EventSourcing]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Less]: {
    language: null,
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Sass]: {
    language: null,
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Shadcn]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.OpenGL]: {
    language: null,
    groups: [TagGroup.Other, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.WebGL]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Miro]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.AndroidJava]: {
    language: null,
    groups: [TagGroup.Mobile],
    estimatable: false,
  },
  [Tag.AWSCloudWatch]: {
    language: null,
    groups: [TagGroup.Observability, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.UML]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.Kanban]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.Scrum]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.Agile]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.Waterfall]: {
    language: null,
    groups: [TagGroup.Management],
    estimatable: false,
  },
  [Tag.gha]: {
    language: null,
    groups: [TagGroup.CDCI, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.Vitest]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.CDCI, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.ETL]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
    estimatable: false,
  },
  [Tag.Binary]: {
    language: null,
    groups: [TagGroup.Other, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  [Tag.fintech]: {
    language: null,
    groups: [TagGroup.Other, TagGroup.Backend, TagGroup.Frontend],
    estimatable: false,
  },
  // [Tag.Databases]: {
  //   language: null,
  //   groups: [TagGroup.Category],
  //   estimatable: false,
  // },
  [Tag.Backend]: {
    language: null,
    groups: [TagGroup.Category],
    estimatable: true,
  },
  [Tag.Frontend]: {
    language: null,
    groups: [TagGroup.Category],
    estimatable: true,
  },
  [Tag.Mobile]: {
    language: null,
    groups: [TagGroup.Category],
    estimatable: true,
  },
  // [Tag.CDCI]: {
  //   language: null,
  //   groups: [TagGroup.Category],
  //   estimatable: false,
  // },
  // [Tag.Observability]: {
  //   language: null,
  //   groups: [TagGroup.Category],
  //   estimatable: false,
  // },
  [Tag.Management]: {
    language: null,
    groups: [TagGroup.Category],
    estimatable: true,
  },
  [Tag.ecommerce]: {
    estimatable: false,
    language: null,
    groups: [TagGroup.Other, TagGroup.Frontend, TagGroup.Backend],
  },
};

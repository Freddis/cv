import {Tag} from '../types/Tag';
import {TagGroup} from '../types/TagGroup';
import {TagProps} from '../types/TagProps';

export const tagMap: Record<Tag, TagProps> = {
  // --- ProgrammingLangauges ---
  [Tag.typescript]: {
    language: [Tag.typescript],
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.javascript]: {
    language: [Tag.javascript],
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.php]: {
    language: [Tag.php],
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.java]: {
    language: [Tag.java],
    groups: [TagGroup.Languages, TagGroup.Backend, TagGroup.Mobile],
  },
  [Tag.cSharp]: {
    language: [Tag.cSharp],
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.swift]: {
    language: [Tag.swift],
    groups: [TagGroup.Languages, TagGroup.Mobile],
  },
  [Tag.c]: {language: [Tag.c], groups: [TagGroup.Languages]},
  [Tag.cpp]: {language: [Tag.cpp], groups: [TagGroup.Languages]},
  [Tag.haskell]: {
    language: [Tag.haskell],
    groups: [TagGroup.Languages],
  },

  // --- Management ---
  [Tag.redmine]: {language: null, groups: [TagGroup.Management]},
  [Tag.Jira]: {language: null, groups: [TagGroup.Management]},
  [Tag.Assembla]: {language: null, groups: [TagGroup.Management]},

  // --- CDCI ---
  [Tag.jenkins]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.teamCity]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.gitlab]: {language: null, groups: [TagGroup.CDCI]},

  // --- Observability ---
  [Tag.bugsnag]: {language: null, groups: [TagGroup.Observability]},
  [Tag.sentry]: {language: null, groups: [TagGroup.Observability]},
  [Tag.elk]: {language: null, groups: [TagGroup.Observability]},
  [Tag.prometheus]: {language: null, groups: [TagGroup.Observability]},

  // --- Libraries ---
  [Tag.jquery]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.ajax]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Techniques, TagGroup.Frontend],
  },
  [Tag.websocket]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.graphql]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.openApi]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.longPolling]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.protobuf]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.trpc]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.kue]: {language: [Tag.javascript, Tag.typescript], groups: [TagGroup.Backend]},
  [Tag.bull]: {language: [Tag.javascript, Tag.typescript], groups: [TagGroup.Backend]},
  [Tag.redux]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.mobX]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Zod]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Frontend],
  },

  // --- Frameworks ---
  [Tag.mooTools]: {
    language: [Tag.javascript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.prototype]: {
    language: [Tag.javascript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.yii]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.laravel]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.spring]: {
    language: [Tag.java],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.nextJS]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.nestJS]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.react]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.angular]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Vue]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Express]: {
    language: [Tag.javascript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.Hibernate]: {
    language: [Tag.java],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.JavaFx]: {
    language: [Tag.java],
    groups: [TagGroup.Frontend],
  },
  [Tag.symfony]: {
    language: [Tag.php],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.typeORM]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend],
  },
  [Tag.drizzle]: {
    language: [Tag.typescript],
    groups: [TagGroup.Backend],
  },

  // --- Databases ---
  [Tag.mysql]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mssql]: {
    language: [Tag.cSharp],
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.postgreSQL]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mongoDB]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.couchDB]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.sqLite]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mariaDb]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.memcached]: {
    language: [Tag.php],
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.redis]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },

  // --- Backend ---
  [Tag.rabbitMQ]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.kafka]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.smtp]: {
    language: null,
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.mt5]: {language: [Tag.c, Tag.cpp], groups: [TagGroup.Other]},
  [Tag.mt4]: {language: [Tag.c, Tag.cpp], groups: [TagGroup.Other]},
  [Tag.HTTP]: {language: null, groups: [TagGroup.Other]},
  [Tag.TCP]: {language: null, groups: [TagGroup.Other]},

  // --- Mobile ---
  [Tag.reactNative]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Mobile],
  },

  // --- Techniques ---
  [Tag.designSystem]: {language: null, groups: [TagGroup.Techniques, TagGroup.Frontend]},
  [Tag.CodeGen]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.Scaling]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.Replication]: {language: null, groups: [TagGroup.Techniques]},

  // --- Other ---
  [Tag.vbox]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.tanstackStart]: {
    language: [Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.tanstackQuery]: {language: [Tag.javascript, Tag.typescript], groups: [TagGroup.Frontend]},
  [Tag.docker]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.aws]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.awsFargate]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.awsLambda]: {language: null, groups: [TagGroup.Backend]},
  [Tag.kubernetes]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Vite]: {language: [Tag.javascript, Tag.typescript], groups: [TagGroup.CDCI]},
  [Tag.Webpack]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Gulp]: {language: [Tag.javascript], groups: [TagGroup.CDCI]},
  [Tag.Apache]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Nginx]: {language: null, groups: [TagGroup.CDCI]},

  // --- Testing ---
  [Tag.selenium]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.playwright]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.mocha]: {language: [Tag.javascript, Tag.typescript], groups: [TagGroup.CDCI]},
  [Tag.nunit]: {language: [Tag.cSharp], groups: [TagGroup.CDCI]},
  [Tag.pHPUnit]: {language: [Tag.php], groups: [TagGroup.CDCI]},
  [Tag.jUnit]: {language: [Tag.java], groups: [TagGroup.CDCI]},
  [Tag.prisma]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
  },
  [Tag.Doctrine]: {
    language: [Tag.php],
    groups: [TagGroup.Backend],
  },
  [Tag.HTML]: {
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.CSS]: {
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.Tailwind]: {
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.SVG]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.nodeJs]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Backend],
  },
  [Tag.Knex]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Backend],
  },
  [Tag.microservices]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
  },
  [Tag.ASPNETMVC]: {
    language: [Tag.cSharp],
    groups: [TagGroup.Backend],
  },
  [Tag.awsCDK]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.CDCI],
  },
  [Tag.expo]: {
    language: [Tag.typescript, Tag.javascript],
    groups: [TagGroup.Mobile],
  },
  [Tag.EventSourcing]: {
    language: null,
    groups: [TagGroup.Techniques],
  },
  [Tag.Less]: {
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.Sass]: {
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.Shadcn]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.OpenGL]: {
    language: null,
    groups: [TagGroup.Other],
  },
  [Tag.WebGL]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Miro]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.AndroidJava]: {
    language: null,
    groups: [TagGroup.Mobile],
  },
  [Tag.AWSCloudWatch]: {
    language: null,
    groups: [TagGroup.Observability],
  },
  [Tag.UML]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.Kanban]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.Scrum]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.Agile]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.Waterfall]: {
    language: null,
    groups: [TagGroup.Management],
  },
  [Tag.gha]: {
    language: null,
    groups: [TagGroup.CDCI],
  },
  [Tag.Vitest]: {
    language: [Tag.javascript, Tag.typescript],
    groups: [TagGroup.CDCI],
  },
  [Tag.ETL]: {
    language: null,
    groups: [TagGroup.Techniques],
  },
  [Tag.Binary]: {
    language: null,
    groups: [TagGroup.Other],
  },
  [Tag.fintech]: {
    language: null,
    groups: [TagGroup.Other],
  },
};



import {ProgrammingLangauge} from '../types/ProgrammingLangauge';
import {Tag} from '../types/Tag';
import {TagGroup} from '../types/TagGroup';
import {TagProps} from '../types/TagProps';

export const tagMap: Record<Tag, TagProps> = {
  // --- ProgrammingLangauges ---
  [Tag.typescript]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.javascript]: {
    language: [ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.php]: {
    language: [ProgrammingLangauge.PHP],
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.java]: {
    language: [ProgrammingLangauge.Java],
    groups: [TagGroup.Languages, TagGroup.Backend, TagGroup.Mobile],
  },
  [Tag.cSharp]: {
    language: [ProgrammingLangauge.CSharp],
    groups: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.swift]: {
    language: [ProgrammingLangauge.Swift],
    groups: [TagGroup.Languages, TagGroup.Mobile],
  },
  [Tag.c]: {language: [ProgrammingLangauge.C], groups: [TagGroup.Languages]},
  [Tag.cpp]: {language: [ProgrammingLangauge.Cpp], groups: [TagGroup.Languages]},
  [Tag.haskell]: {
    language: [ProgrammingLangauge.Haskell],
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
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.ajax]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Techniques, TagGroup.Frontend],
  },
  [Tag.websocket]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.graphql]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.openApi]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.longPolling]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.protobuf]: {language: null, groups: [TagGroup.Techniques]},
  [Tag.trpc]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.kue]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], groups: [TagGroup.Backend]},
  [Tag.bull]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], groups: [TagGroup.Backend]},
  [Tag.redux]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.mobX]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Zod]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend, TagGroup.Frontend],
  },

  // --- Frameworks ---
  [Tag.mooTools]: {
    language: [ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.prototype]: {
    language: [ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.yii]: {
    language: [ProgrammingLangauge.PHP],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.laravel]: {
    language: [ProgrammingLangauge.PHP],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.spring]: {
    language: [ProgrammingLangauge.Java],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.nextJS]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.nestJS]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.react]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.angular]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Vue]: {
    language: [ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.Express]: {
    language: [ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.Hibernate]: {
    language: [ProgrammingLangauge.Java],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.JavaFx]: {
    language: [ProgrammingLangauge.Java],
    groups: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.symfony]: {
    language: [ProgrammingLangauge.PHP],
    groups: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.typeORM]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend],
  },
  [Tag.drizzle]: {
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend],
  },

  // --- Databases ---
  [Tag.mysql]: {
    language: null,
    groups: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mssql]: {
    language: [ProgrammingLangauge.CSharp],
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
    language: [ProgrammingLangauge.PHP],
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
  [Tag.mt5]: {language: [ProgrammingLangauge.C, ProgrammingLangauge.Cpp], groups: [TagGroup.Other]},
  [Tag.mt4]: {language: [ProgrammingLangauge.C, ProgrammingLangauge.Cpp], groups: [TagGroup.Other]},
  [Tag.HTTP]: {language: null, groups: [TagGroup.Other]},
  [Tag.TCP]: {language: null, groups: [TagGroup.Other]},

  // --- Mobile ---
  [Tag.reactNative]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
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
    language: [ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.tanstackQuery]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], groups: [TagGroup.Frontend]},
  [Tag.docker]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.aws]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.awsFargate]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.awsLambda]: {language: null, groups: [TagGroup.Backend]},
  [Tag.kubernetes]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Vite]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], groups: [TagGroup.CDCI]},
  [Tag.Webpack]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Gulp]: {language: [ProgrammingLangauge.JavaScript], groups: [TagGroup.CDCI]},
  [Tag.Apache]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.Nginx]: {language: null, groups: [TagGroup.CDCI]},

  // --- Testing ---
  [Tag.selenium]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.playwright]: {language: null, groups: [TagGroup.CDCI]},
  [Tag.mocha]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], groups: [TagGroup.CDCI]},
  [Tag.nunit]: {language: [ProgrammingLangauge.CSharp], groups: [TagGroup.CDCI]},
  [Tag.pHPUnit]: {language: [ProgrammingLangauge.PHP], groups: [TagGroup.CDCI]},
  [Tag.jUnit]: {language: [ProgrammingLangauge.Java], groups: [TagGroup.CDCI]},
  [Tag.prisma]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend],
  },
  [Tag.Doctrine]: {
    language: [ProgrammingLangauge.PHP],
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
    language: null,
    groups: [TagGroup.Frontend],
  },
  [Tag.nodeJs]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
    groups: [TagGroup.Backend],
  },
  [Tag.Knex]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Backend],
  },
  [Tag.microservices]: {
    language: null,
    groups: [TagGroup.Techniques, TagGroup.Backend],
  },
  [Tag.ASPNETMVC]: {
    language: [ProgrammingLangauge.CSharp],
    groups: [TagGroup.Backend],
  },
  [Tag.awsCDK]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
    groups: [TagGroup.CDCI],
  },
  [Tag.expo]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
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
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    groups: [TagGroup.Frontend],
  },
  [Tag.OpenGL]: {
    language: null,
    groups: [TagGroup.Other],
  },
  [Tag.WebGL]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
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
    language: null,
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
};



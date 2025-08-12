import {ProgrammingLangauge} from '../types/ProgrammingLangauge';
import {Tag} from '../types/Tag';
import {TagGroup} from '../types/TagGroup';
import {TagProps} from '../types/TagProps';

export const tagMap: Record<Tag, TagProps> = {
  // --- ProgrammingLangauges ---
  [Tag.php]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.javascript]: {
    language: [ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.cSharp]: {
    language: [ProgrammingLangauge.CSharp],
    categories: [TagGroup.Languages, TagGroup.Backend],
  },
  [Tag.c]: {language: [ProgrammingLangauge.C], categories: [TagGroup.Languages]},
  [Tag.cpp]: {language: [ProgrammingLangauge.Cpp], categories: [TagGroup.Languages]},
  [Tag.java]: {
    language: [ProgrammingLangauge.Java],
    categories: [TagGroup.Languages, TagGroup.Backend, TagGroup.Mobile],
  },
  [Tag.typescript]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Languages, TagGroup.Frontend, TagGroup.Backend],
  },
  [Tag.swift]: {
    language: [ProgrammingLangauge.Swift],
    categories: [TagGroup.Languages, TagGroup.Mobile],
  },
  [Tag.haskell]: {
    language: [ProgrammingLangauge.Haskell],
    categories: [TagGroup.Languages],
  },

  // --- Management ---
  [Tag.redmine]: {language: null, categories: [TagGroup.Management]},
  [Tag.Jira]: {language: null, categories: [TagGroup.Management]},
  [Tag.Assembla]: {language: null, categories: [TagGroup.Management]},

  // --- CDCI ---
  [Tag.jenkins]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.teamCity]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.gitlab]: {language: null, categories: [TagGroup.CDCI]},

  // --- Observability ---
  [Tag.bugsnag]: {language: null, categories: [TagGroup.Observability]},
  [Tag.sentry]: {language: null, categories: [TagGroup.Observability]},
  [Tag.elk]: {language: null, categories: [TagGroup.Observability]},
  [Tag.prometheus]: {language: null, categories: [TagGroup.Observability]},

  // --- Libraries ---
  [Tag.jquery]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.ajax]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Techniques, TagGroup.Frontend],
  },
  [Tag.websocket]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.graphql]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.openApi]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.longPolling]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.protobuf]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.trpc]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.kue]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], categories: [TagGroup.Backend]},
  [Tag.bull]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], categories: [TagGroup.Backend]},
  [Tag.redux]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.mobX]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.Zod]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend, TagGroup.Frontend],
  },

  // --- Frameworks ---
  [Tag.mooTools]: {
    language: [ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.prototype]: {
    language: [ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.yii]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.laravel]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.spring]: {
    language: [ProgrammingLangauge.Java],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.nextJS]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.nestJS]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.react]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.angular]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.Vue]: {
    language: [ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.Express]: {
    language: [ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.Hibernate]: {
    language: [ProgrammingLangauge.Java],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.JavaFx]: {
    language: [ProgrammingLangauge.Java],
    categories: [TagGroup.Frontend, TagGroup.Frontend],
  },
  [Tag.symfony]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.typeORM]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend],
  },
  [Tag.drizzle]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend],
  },

  // --- Databases ---
  [Tag.mysql]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mssql]: {
    language: [ProgrammingLangauge.CSharp],
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.postgreSQL]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mongoDB]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.couchDB]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.sqLite]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.mariaDb]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.memcached]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.redis]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },

  // --- Backend ---
  [Tag.rabbitMQ]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.kafka]: {
    language: null,
    categories: [TagGroup.Databases, TagGroup.Backend],
  },
  [Tag.smtp]: {
    language: null,
    categories: [TagGroup.Backend, TagGroup.Backend],
  },
  [Tag.mt5]: {language: [ProgrammingLangauge.C, ProgrammingLangauge.Cpp], categories: [TagGroup.Other]},
  [Tag.mt4]: {language: [ProgrammingLangauge.C, ProgrammingLangauge.Cpp], categories: [TagGroup.Other]},
  [Tag.HTTP]: {language: null, categories: [TagGroup.Other]},
  [Tag.TCP]: {language: null, categories: [TagGroup.Other]},

  // --- Mobile ---
  [Tag.reactNative]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Mobile],
  },

  // --- Techniques ---
  [Tag.designSystem]: {language: null, categories: [TagGroup.Techniques, TagGroup.Frontend]},
  [Tag.CodeGen]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.Scaling]: {language: null, categories: [TagGroup.Techniques]},
  [Tag.Replication]: {language: null, categories: [TagGroup.Techniques]},

  // --- Other ---
  [Tag.vbox]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.tanstackStart]: {
    language: [ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.tanstackQuery]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], categories: [TagGroup.Frontend]},
  [Tag.docker]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.aws]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.awsFargate]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.awsLambda]: {language: null, categories: [TagGroup.Backend]},
  [Tag.kubernetes]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.Vite]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], categories: [TagGroup.CDCI]},
  [Tag.Webpack]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.Gulp]: {language: [ProgrammingLangauge.JavaScript], categories: [TagGroup.CDCI]},
  [Tag.Apache]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.Nginx]: {language: null, categories: [TagGroup.CDCI]},

  // --- Testing ---
  [Tag.selenium]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.playwright]: {language: null, categories: [TagGroup.CDCI]},
  [Tag.mocha]: {language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript], categories: [TagGroup.CDCI]},
  [Tag.nunit]: {language: [ProgrammingLangauge.CSharp], categories: [TagGroup.CDCI]},
  [Tag.pHPUnit]: {language: [ProgrammingLangauge.PHP], categories: [TagGroup.CDCI]},
  [Tag.jUnit]: {language: [ProgrammingLangauge.Java], categories: [TagGroup.CDCI]},
  [Tag.prisma]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend],
  },
  [Tag.Doctrine]: {
    language: [ProgrammingLangauge.PHP],
    categories: [TagGroup.Backend],
  },
  [Tag.HTML]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.CSS]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.Tailwind]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.SVG]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.nodeJs]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Backend],
  },
  [Tag.Knex]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Backend],
  },
  [Tag.microservices]: {
    language: null,
    categories: [TagGroup.Techniques, TagGroup.Backend],
  },
  [Tag.ASPNETMVC]: {
    language: [ProgrammingLangauge.CSharp],
    categories: [TagGroup.Backend],
  },
  [Tag.awsCDK]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
    categories: [TagGroup.CDCI],
  },
  [Tag.expo]: {
    language: [ProgrammingLangauge.TypeScript, ProgrammingLangauge.JavaScript],
    categories: [TagGroup.Mobile],
  },
  [Tag.EventSourcing]: {
    language: null,
    categories: [TagGroup.Techniques],
  },
  [Tag.Less]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.Sass]: {
    language: null,
    categories: [TagGroup.Frontend],
  },
  [Tag.Shadcn]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.OpenGL]: {
    language: null,
    categories: [TagGroup.Other],
  },
  [Tag.WebGL]: {
    language: [ProgrammingLangauge.JavaScript, ProgrammingLangauge.TypeScript],
    categories: [TagGroup.Frontend],
  },
  [Tag.Miro]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.AndroidJava]: {
    language: null,
    categories: [TagGroup.Mobile],
  },
  [Tag.AWSCloudWatch]: {
    language: null,
    categories: [TagGroup.Observability],
  },
  [Tag.UML]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.Kanban]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.Scrum]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.Agile]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.Waterfall]: {
    language: null,
    categories: [TagGroup.Management],
  },
  [Tag.gha]: {
    language: null,
    categories: [TagGroup.CDCI],
  },
};



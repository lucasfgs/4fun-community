
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ChatScalarFieldEnum = {
  auth: 'auth',
  name: 'name',
  ccname: 'ccname',
  message: 'message',
  ccmessage: 'ccmessage',
  ccaccess: 'ccaccess'
};

exports.Prisma.MaptiersScalarFieldEnum = {
  map: 'map',
  tier: 'tier',
  possible_on_400vel: 'possible_on_400vel',
  possible_on_scroll: 'possible_on_scroll',
  possible_on_stamina: 'possible_on_stamina'
};

exports.Prisma.MapzonesScalarFieldEnum = {
  id: 'id',
  map: 'map',
  type: 'type',
  corner1_x: 'corner1_x',
  corner1_y: 'corner1_y',
  corner1_z: 'corner1_z',
  corner2_x: 'corner2_x',
  corner2_y: 'corner2_y',
  corner2_z: 'corner2_z',
  destination_x: 'destination_x',
  destination_y: 'destination_y',
  destination_z: 'destination_z',
  track: 'track',
  flags: 'flags',
  data: 'data',
  form: 'form',
  target: 'target'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  code: 'code'
};

exports.Prisma.PlayertimesScalarFieldEnum = {
  id: 'id',
  style: 'style',
  track: 'track',
  time: 'time',
  auth: 'auth',
  map: 'map',
  points: 'points',
  jumps: 'jumps',
  date: 'date',
  strafes: 'strafes',
  sync: 'sync',
  perfs: 'perfs',
  completions: 'completions'
};

exports.Prisma.StagetimespbScalarFieldEnum = {
  style: 'style',
  track: 'track',
  map: 'map',
  stage: 'stage',
  auth: 'auth',
  time: 'time'
};

exports.Prisma.StagetimeswrScalarFieldEnum = {
  style: 'style',
  track: 'track',
  map: 'map',
  stage: 'stage',
  auth: 'auth',
  time: 'time'
};

exports.Prisma.StartpositionsScalarFieldEnum = {
  auth: 'auth',
  track: 'track',
  map: 'map',
  pos_x: 'pos_x',
  pos_y: 'pos_y',
  pos_z: 'pos_z',
  ang_x: 'ang_x',
  ang_y: 'ang_y',
  ang_z: 'ang_z',
  angles_only: 'angles_only'
};

exports.Prisma.StyleplaytimeScalarFieldEnum = {
  auth: 'auth',
  style: 'style',
  playtime: 'playtime'
};

exports.Prisma.UsersScalarFieldEnum = {
  auth: 'auth',
  name: 'name',
  ip: 'ip',
  lastlogin: 'lastlogin',
  points: 'points',
  playtime: 'playtime'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.chatOrderByRelevanceFieldEnum = {
  ccname: 'ccname',
  ccmessage: 'ccmessage'
};

exports.Prisma.maptiersOrderByRelevanceFieldEnum = {
  map: 'map'
};

exports.Prisma.mapzonesOrderByRelevanceFieldEnum = {
  map: 'map',
  target: 'target'
};

exports.Prisma.playertimesOrderByRelevanceFieldEnum = {
  map: 'map'
};

exports.Prisma.stagetimespbOrderByRelevanceFieldEnum = {
  map: 'map'
};

exports.Prisma.stagetimeswrOrderByRelevanceFieldEnum = {
  map: 'map'
};

exports.Prisma.startpositionsOrderByRelevanceFieldEnum = {
  map: 'map'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  name: 'name'
};


exports.Prisma.ModelName = {
  chat: 'chat',
  maptiers: 'maptiers',
  mapzones: 'mapzones',
  migrations: 'migrations',
  playertimes: 'playertimes',
  stagetimespb: 'stagetimespb',
  stagetimeswr: 'stagetimeswr',
  startpositions: 'startpositions',
  styleplaytime: 'styleplaytime',
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

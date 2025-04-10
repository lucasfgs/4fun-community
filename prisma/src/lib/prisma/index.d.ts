
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>
/**
 * Model maptiers
 * 
 */
export type maptiers = $Result.DefaultSelection<Prisma.$maptiersPayload>
/**
 * Model mapzones
 * 
 */
export type mapzones = $Result.DefaultSelection<Prisma.$mapzonesPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model playertimes
 * 
 */
export type playertimes = $Result.DefaultSelection<Prisma.$playertimesPayload>
/**
 * Model stagetimespb
 * 
 */
export type stagetimespb = $Result.DefaultSelection<Prisma.$stagetimespbPayload>
/**
 * Model stagetimeswr
 * 
 */
export type stagetimeswr = $Result.DefaultSelection<Prisma.$stagetimeswrPayload>
/**
 * Model startpositions
 * 
 */
export type startpositions = $Result.DefaultSelection<Prisma.$startpositionsPayload>
/**
 * Model styleplaytime
 * 
 */
export type styleplaytime = $Result.DefaultSelection<Prisma.$styleplaytimePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chats
 * const chats = await prisma.chat.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chats
   * const chats = await prisma.chat.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maptiers`: Exposes CRUD operations for the **maptiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maptiers
    * const maptiers = await prisma.maptiers.findMany()
    * ```
    */
  get maptiers(): Prisma.maptiersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mapzones`: Exposes CRUD operations for the **mapzones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mapzones
    * const mapzones = await prisma.mapzones.findMany()
    * ```
    */
  get mapzones(): Prisma.mapzonesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playertimes`: Exposes CRUD operations for the **playertimes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playertimes
    * const playertimes = await prisma.playertimes.findMany()
    * ```
    */
  get playertimes(): Prisma.playertimesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stagetimespb`: Exposes CRUD operations for the **stagetimespb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stagetimespbs
    * const stagetimespbs = await prisma.stagetimespb.findMany()
    * ```
    */
  get stagetimespb(): Prisma.stagetimespbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stagetimeswr`: Exposes CRUD operations for the **stagetimeswr** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stagetimeswrs
    * const stagetimeswrs = await prisma.stagetimeswr.findMany()
    * ```
    */
  get stagetimeswr(): Prisma.stagetimeswrDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.startpositions`: Exposes CRUD operations for the **startpositions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Startpositions
    * const startpositions = await prisma.startpositions.findMany()
    * ```
    */
  get startpositions(): Prisma.startpositionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.styleplaytime`: Exposes CRUD operations for the **styleplaytime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Styleplaytimes
    * const styleplaytimes = await prisma.styleplaytime.findMany()
    * ```
    */
  get styleplaytime(): Prisma.styleplaytimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chat" | "maptiers" | "mapzones" | "migrations" | "playertimes" | "stagetimespb" | "stagetimeswr" | "startpositions" | "styleplaytime" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      maptiers: {
        payload: Prisma.$maptiersPayload<ExtArgs>
        fields: Prisma.maptiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maptiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maptiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          findFirst: {
            args: Prisma.maptiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maptiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          findMany: {
            args: Prisma.maptiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>[]
          }
          create: {
            args: Prisma.maptiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          createMany: {
            args: Prisma.maptiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.maptiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          update: {
            args: Prisma.maptiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          deleteMany: {
            args: Prisma.maptiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maptiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.maptiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maptiersPayload>
          }
          aggregate: {
            args: Prisma.MaptiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaptiers>
          }
          groupBy: {
            args: Prisma.maptiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaptiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.maptiersCountArgs<ExtArgs>
            result: $Utils.Optional<MaptiersCountAggregateOutputType> | number
          }
        }
      }
      mapzones: {
        payload: Prisma.$mapzonesPayload<ExtArgs>
        fields: Prisma.mapzonesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mapzonesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mapzonesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          findFirst: {
            args: Prisma.mapzonesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mapzonesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          findMany: {
            args: Prisma.mapzonesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>[]
          }
          create: {
            args: Prisma.mapzonesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          createMany: {
            args: Prisma.mapzonesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mapzonesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          update: {
            args: Prisma.mapzonesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          deleteMany: {
            args: Prisma.mapzonesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mapzonesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mapzonesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mapzonesPayload>
          }
          aggregate: {
            args: Prisma.MapzonesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMapzones>
          }
          groupBy: {
            args: Prisma.mapzonesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MapzonesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mapzonesCountArgs<ExtArgs>
            result: $Utils.Optional<MapzonesCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      playertimes: {
        payload: Prisma.$playertimesPayload<ExtArgs>
        fields: Prisma.playertimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.playertimesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.playertimesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          findFirst: {
            args: Prisma.playertimesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.playertimesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          findMany: {
            args: Prisma.playertimesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>[]
          }
          create: {
            args: Prisma.playertimesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          createMany: {
            args: Prisma.playertimesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.playertimesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          update: {
            args: Prisma.playertimesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          deleteMany: {
            args: Prisma.playertimesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.playertimesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.playertimesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$playertimesPayload>
          }
          aggregate: {
            args: Prisma.PlayertimesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayertimes>
          }
          groupBy: {
            args: Prisma.playertimesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayertimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.playertimesCountArgs<ExtArgs>
            result: $Utils.Optional<PlayertimesCountAggregateOutputType> | number
          }
        }
      }
      stagetimespb: {
        payload: Prisma.$stagetimespbPayload<ExtArgs>
        fields: Prisma.stagetimespbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stagetimespbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stagetimespbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          findFirst: {
            args: Prisma.stagetimespbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stagetimespbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          findMany: {
            args: Prisma.stagetimespbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>[]
          }
          create: {
            args: Prisma.stagetimespbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          createMany: {
            args: Prisma.stagetimespbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stagetimespbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          update: {
            args: Prisma.stagetimespbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          deleteMany: {
            args: Prisma.stagetimespbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stagetimespbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stagetimespbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimespbPayload>
          }
          aggregate: {
            args: Prisma.StagetimespbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStagetimespb>
          }
          groupBy: {
            args: Prisma.stagetimespbGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagetimespbGroupByOutputType>[]
          }
          count: {
            args: Prisma.stagetimespbCountArgs<ExtArgs>
            result: $Utils.Optional<StagetimespbCountAggregateOutputType> | number
          }
        }
      }
      stagetimeswr: {
        payload: Prisma.$stagetimeswrPayload<ExtArgs>
        fields: Prisma.stagetimeswrFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stagetimeswrFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stagetimeswrFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          findFirst: {
            args: Prisma.stagetimeswrFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stagetimeswrFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          findMany: {
            args: Prisma.stagetimeswrFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>[]
          }
          create: {
            args: Prisma.stagetimeswrCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          createMany: {
            args: Prisma.stagetimeswrCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stagetimeswrDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          update: {
            args: Prisma.stagetimeswrUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          deleteMany: {
            args: Prisma.stagetimeswrDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stagetimeswrUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stagetimeswrUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stagetimeswrPayload>
          }
          aggregate: {
            args: Prisma.StagetimeswrAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStagetimeswr>
          }
          groupBy: {
            args: Prisma.stagetimeswrGroupByArgs<ExtArgs>
            result: $Utils.Optional<StagetimeswrGroupByOutputType>[]
          }
          count: {
            args: Prisma.stagetimeswrCountArgs<ExtArgs>
            result: $Utils.Optional<StagetimeswrCountAggregateOutputType> | number
          }
        }
      }
      startpositions: {
        payload: Prisma.$startpositionsPayload<ExtArgs>
        fields: Prisma.startpositionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.startpositionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.startpositionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          findFirst: {
            args: Prisma.startpositionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.startpositionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          findMany: {
            args: Prisma.startpositionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>[]
          }
          create: {
            args: Prisma.startpositionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          createMany: {
            args: Prisma.startpositionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.startpositionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          update: {
            args: Prisma.startpositionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          deleteMany: {
            args: Prisma.startpositionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.startpositionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.startpositionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$startpositionsPayload>
          }
          aggregate: {
            args: Prisma.StartpositionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartpositions>
          }
          groupBy: {
            args: Prisma.startpositionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StartpositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.startpositionsCountArgs<ExtArgs>
            result: $Utils.Optional<StartpositionsCountAggregateOutputType> | number
          }
        }
      }
      styleplaytime: {
        payload: Prisma.$styleplaytimePayload<ExtArgs>
        fields: Prisma.styleplaytimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.styleplaytimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.styleplaytimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          findFirst: {
            args: Prisma.styleplaytimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.styleplaytimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          findMany: {
            args: Prisma.styleplaytimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>[]
          }
          create: {
            args: Prisma.styleplaytimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          createMany: {
            args: Prisma.styleplaytimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.styleplaytimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          update: {
            args: Prisma.styleplaytimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          deleteMany: {
            args: Prisma.styleplaytimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.styleplaytimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.styleplaytimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$styleplaytimePayload>
          }
          aggregate: {
            args: Prisma.StyleplaytimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStyleplaytime>
          }
          groupBy: {
            args: Prisma.styleplaytimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StyleplaytimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.styleplaytimeCountArgs<ExtArgs>
            result: $Utils.Optional<StyleplaytimeCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chat?: chatOmit
    maptiers?: maptiersOmit
    mapzones?: mapzonesOmit
    migrations?: migrationsOmit
    playertimes?: playertimesOmit
    stagetimespb?: stagetimespbOmit
    stagetimeswr?: stagetimeswrOmit
    startpositions?: startpositionsOmit
    styleplaytime?: styleplaytimeOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    playertimes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playertimes?: boolean | UsersCountOutputTypeCountPlayertimesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlayertimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playertimesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    auth: number | null
    name: number | null
    message: number | null
    ccaccess: number | null
  }

  export type ChatSumAggregateOutputType = {
    auth: number | null
    name: number | null
    message: number | null
    ccaccess: number | null
  }

  export type ChatMinAggregateOutputType = {
    auth: number | null
    name: number | null
    ccname: string | null
    message: number | null
    ccmessage: string | null
    ccaccess: number | null
  }

  export type ChatMaxAggregateOutputType = {
    auth: number | null
    name: number | null
    ccname: string | null
    message: number | null
    ccmessage: string | null
    ccaccess: number | null
  }

  export type ChatCountAggregateOutputType = {
    auth: number
    name: number
    ccname: number
    message: number
    ccmessage: number
    ccaccess: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    auth?: true
    name?: true
    message?: true
    ccaccess?: true
  }

  export type ChatSumAggregateInputType = {
    auth?: true
    name?: true
    message?: true
    ccaccess?: true
  }

  export type ChatMinAggregateInputType = {
    auth?: true
    name?: true
    ccname?: true
    message?: true
    ccmessage?: true
    ccaccess?: true
  }

  export type ChatMaxAggregateInputType = {
    auth?: true
    name?: true
    ccname?: true
    message?: true
    ccmessage?: true
    ccaccess?: true
  }

  export type ChatCountAggregateInputType = {
    auth?: true
    name?: true
    ccname?: true
    message?: true
    ccmessage?: true
    ccaccess?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    auth: number
    name: number
    ccname: string | null
    message: number
    ccmessage: string | null
    ccaccess: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auth?: boolean
    name?: boolean
    ccname?: boolean
    message?: boolean
    ccmessage?: boolean
    ccaccess?: boolean
  }, ExtArgs["result"]["chat"]>



  export type chatSelectScalar = {
    auth?: boolean
    name?: boolean
    ccname?: boolean
    message?: boolean
    ccmessage?: boolean
    ccaccess?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"auth" | "name" | "ccname" | "message" | "ccmessage" | "ccaccess", ExtArgs["result"]["chat"]>

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auth: number
      name: number
      ccname: string | null
      message: number
      ccmessage: string | null
      ccaccess: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `auth`
     * const chatWithAuthOnly = await prisma.chat.findMany({ select: { auth: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly auth: FieldRef<"chat", 'Int'>
    readonly name: FieldRef<"chat", 'Int'>
    readonly ccname: FieldRef<"chat", 'String'>
    readonly message: FieldRef<"chat", 'Int'>
    readonly ccmessage: FieldRef<"chat", 'String'>
    readonly ccaccess: FieldRef<"chat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
  }


  /**
   * Model maptiers
   */

  export type AggregateMaptiers = {
    _count: MaptiersCountAggregateOutputType | null
    _avg: MaptiersAvgAggregateOutputType | null
    _sum: MaptiersSumAggregateOutputType | null
    _min: MaptiersMinAggregateOutputType | null
    _max: MaptiersMaxAggregateOutputType | null
  }

  export type MaptiersAvgAggregateOutputType = {
    tier: number | null
  }

  export type MaptiersSumAggregateOutputType = {
    tier: number | null
  }

  export type MaptiersMinAggregateOutputType = {
    map: string | null
    tier: number | null
    possible_on_400vel: boolean | null
    possible_on_scroll: boolean | null
    possible_on_stamina: boolean | null
  }

  export type MaptiersMaxAggregateOutputType = {
    map: string | null
    tier: number | null
    possible_on_400vel: boolean | null
    possible_on_scroll: boolean | null
    possible_on_stamina: boolean | null
  }

  export type MaptiersCountAggregateOutputType = {
    map: number
    tier: number
    possible_on_400vel: number
    possible_on_scroll: number
    possible_on_stamina: number
    _all: number
  }


  export type MaptiersAvgAggregateInputType = {
    tier?: true
  }

  export type MaptiersSumAggregateInputType = {
    tier?: true
  }

  export type MaptiersMinAggregateInputType = {
    map?: true
    tier?: true
    possible_on_400vel?: true
    possible_on_scroll?: true
    possible_on_stamina?: true
  }

  export type MaptiersMaxAggregateInputType = {
    map?: true
    tier?: true
    possible_on_400vel?: true
    possible_on_scroll?: true
    possible_on_stamina?: true
  }

  export type MaptiersCountAggregateInputType = {
    map?: true
    tier?: true
    possible_on_400vel?: true
    possible_on_scroll?: true
    possible_on_stamina?: true
    _all?: true
  }

  export type MaptiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maptiers to aggregate.
     */
    where?: maptiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maptiers to fetch.
     */
    orderBy?: maptiersOrderByWithRelationInput | maptiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maptiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maptiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maptiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maptiers
    **/
    _count?: true | MaptiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaptiersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaptiersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaptiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaptiersMaxAggregateInputType
  }

  export type GetMaptiersAggregateType<T extends MaptiersAggregateArgs> = {
        [P in keyof T & keyof AggregateMaptiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaptiers[P]>
      : GetScalarType<T[P], AggregateMaptiers[P]>
  }




  export type maptiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maptiersWhereInput
    orderBy?: maptiersOrderByWithAggregationInput | maptiersOrderByWithAggregationInput[]
    by: MaptiersScalarFieldEnum[] | MaptiersScalarFieldEnum
    having?: maptiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaptiersCountAggregateInputType | true
    _avg?: MaptiersAvgAggregateInputType
    _sum?: MaptiersSumAggregateInputType
    _min?: MaptiersMinAggregateInputType
    _max?: MaptiersMaxAggregateInputType
  }

  export type MaptiersGroupByOutputType = {
    map: string
    tier: number
    possible_on_400vel: boolean | null
    possible_on_scroll: boolean | null
    possible_on_stamina: boolean | null
    _count: MaptiersCountAggregateOutputType | null
    _avg: MaptiersAvgAggregateOutputType | null
    _sum: MaptiersSumAggregateOutputType | null
    _min: MaptiersMinAggregateOutputType | null
    _max: MaptiersMaxAggregateOutputType | null
  }

  type GetMaptiersGroupByPayload<T extends maptiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaptiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaptiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaptiersGroupByOutputType[P]>
            : GetScalarType<T[P], MaptiersGroupByOutputType[P]>
        }
      >
    >


  export type maptiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    map?: boolean
    tier?: boolean
    possible_on_400vel?: boolean
    possible_on_scroll?: boolean
    possible_on_stamina?: boolean
  }, ExtArgs["result"]["maptiers"]>



  export type maptiersSelectScalar = {
    map?: boolean
    tier?: boolean
    possible_on_400vel?: boolean
    possible_on_scroll?: boolean
    possible_on_stamina?: boolean
  }

  export type maptiersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"map" | "tier" | "possible_on_400vel" | "possible_on_scroll" | "possible_on_stamina", ExtArgs["result"]["maptiers"]>

  export type $maptiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maptiers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      map: string
      tier: number
      possible_on_400vel: boolean | null
      possible_on_scroll: boolean | null
      possible_on_stamina: boolean | null
    }, ExtArgs["result"]["maptiers"]>
    composites: {}
  }

  type maptiersGetPayload<S extends boolean | null | undefined | maptiersDefaultArgs> = $Result.GetResult<Prisma.$maptiersPayload, S>

  type maptiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maptiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaptiersCountAggregateInputType | true
    }

  export interface maptiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maptiers'], meta: { name: 'maptiers' } }
    /**
     * Find zero or one Maptiers that matches the filter.
     * @param {maptiersFindUniqueArgs} args - Arguments to find a Maptiers
     * @example
     * // Get one Maptiers
     * const maptiers = await prisma.maptiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maptiersFindUniqueArgs>(args: SelectSubset<T, maptiersFindUniqueArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maptiers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maptiersFindUniqueOrThrowArgs} args - Arguments to find a Maptiers
     * @example
     * // Get one Maptiers
     * const maptiers = await prisma.maptiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maptiersFindUniqueOrThrowArgs>(args: SelectSubset<T, maptiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maptiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersFindFirstArgs} args - Arguments to find a Maptiers
     * @example
     * // Get one Maptiers
     * const maptiers = await prisma.maptiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maptiersFindFirstArgs>(args?: SelectSubset<T, maptiersFindFirstArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maptiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersFindFirstOrThrowArgs} args - Arguments to find a Maptiers
     * @example
     * // Get one Maptiers
     * const maptiers = await prisma.maptiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maptiersFindFirstOrThrowArgs>(args?: SelectSubset<T, maptiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maptiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maptiers
     * const maptiers = await prisma.maptiers.findMany()
     * 
     * // Get first 10 Maptiers
     * const maptiers = await prisma.maptiers.findMany({ take: 10 })
     * 
     * // Only select the `map`
     * const maptiersWithMapOnly = await prisma.maptiers.findMany({ select: { map: true } })
     * 
     */
    findMany<T extends maptiersFindManyArgs>(args?: SelectSubset<T, maptiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maptiers.
     * @param {maptiersCreateArgs} args - Arguments to create a Maptiers.
     * @example
     * // Create one Maptiers
     * const Maptiers = await prisma.maptiers.create({
     *   data: {
     *     // ... data to create a Maptiers
     *   }
     * })
     * 
     */
    create<T extends maptiersCreateArgs>(args: SelectSubset<T, maptiersCreateArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maptiers.
     * @param {maptiersCreateManyArgs} args - Arguments to create many Maptiers.
     * @example
     * // Create many Maptiers
     * const maptiers = await prisma.maptiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maptiersCreateManyArgs>(args?: SelectSubset<T, maptiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maptiers.
     * @param {maptiersDeleteArgs} args - Arguments to delete one Maptiers.
     * @example
     * // Delete one Maptiers
     * const Maptiers = await prisma.maptiers.delete({
     *   where: {
     *     // ... filter to delete one Maptiers
     *   }
     * })
     * 
     */
    delete<T extends maptiersDeleteArgs>(args: SelectSubset<T, maptiersDeleteArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maptiers.
     * @param {maptiersUpdateArgs} args - Arguments to update one Maptiers.
     * @example
     * // Update one Maptiers
     * const maptiers = await prisma.maptiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maptiersUpdateArgs>(args: SelectSubset<T, maptiersUpdateArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maptiers.
     * @param {maptiersDeleteManyArgs} args - Arguments to filter Maptiers to delete.
     * @example
     * // Delete a few Maptiers
     * const { count } = await prisma.maptiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maptiersDeleteManyArgs>(args?: SelectSubset<T, maptiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maptiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maptiers
     * const maptiers = await prisma.maptiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maptiersUpdateManyArgs>(args: SelectSubset<T, maptiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maptiers.
     * @param {maptiersUpsertArgs} args - Arguments to update or create a Maptiers.
     * @example
     * // Update or create a Maptiers
     * const maptiers = await prisma.maptiers.upsert({
     *   create: {
     *     // ... data to create a Maptiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maptiers we want to update
     *   }
     * })
     */
    upsert<T extends maptiersUpsertArgs>(args: SelectSubset<T, maptiersUpsertArgs<ExtArgs>>): Prisma__maptiersClient<$Result.GetResult<Prisma.$maptiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maptiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersCountArgs} args - Arguments to filter Maptiers to count.
     * @example
     * // Count the number of Maptiers
     * const count = await prisma.maptiers.count({
     *   where: {
     *     // ... the filter for the Maptiers we want to count
     *   }
     * })
    **/
    count<T extends maptiersCountArgs>(
      args?: Subset<T, maptiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaptiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maptiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaptiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaptiersAggregateArgs>(args: Subset<T, MaptiersAggregateArgs>): Prisma.PrismaPromise<GetMaptiersAggregateType<T>>

    /**
     * Group by Maptiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maptiersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maptiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maptiersGroupByArgs['orderBy'] }
        : { orderBy?: maptiersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maptiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaptiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maptiers model
   */
  readonly fields: maptiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maptiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maptiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maptiers model
   */
  interface maptiersFieldRefs {
    readonly map: FieldRef<"maptiers", 'String'>
    readonly tier: FieldRef<"maptiers", 'Int'>
    readonly possible_on_400vel: FieldRef<"maptiers", 'Boolean'>
    readonly possible_on_scroll: FieldRef<"maptiers", 'Boolean'>
    readonly possible_on_stamina: FieldRef<"maptiers", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * maptiers findUnique
   */
  export type maptiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter, which maptiers to fetch.
     */
    where: maptiersWhereUniqueInput
  }

  /**
   * maptiers findUniqueOrThrow
   */
  export type maptiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter, which maptiers to fetch.
     */
    where: maptiersWhereUniqueInput
  }

  /**
   * maptiers findFirst
   */
  export type maptiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter, which maptiers to fetch.
     */
    where?: maptiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maptiers to fetch.
     */
    orderBy?: maptiersOrderByWithRelationInput | maptiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maptiers.
     */
    cursor?: maptiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maptiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maptiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maptiers.
     */
    distinct?: MaptiersScalarFieldEnum | MaptiersScalarFieldEnum[]
  }

  /**
   * maptiers findFirstOrThrow
   */
  export type maptiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter, which maptiers to fetch.
     */
    where?: maptiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maptiers to fetch.
     */
    orderBy?: maptiersOrderByWithRelationInput | maptiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maptiers.
     */
    cursor?: maptiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maptiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maptiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maptiers.
     */
    distinct?: MaptiersScalarFieldEnum | MaptiersScalarFieldEnum[]
  }

  /**
   * maptiers findMany
   */
  export type maptiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter, which maptiers to fetch.
     */
    where?: maptiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maptiers to fetch.
     */
    orderBy?: maptiersOrderByWithRelationInput | maptiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maptiers.
     */
    cursor?: maptiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maptiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maptiers.
     */
    skip?: number
    distinct?: MaptiersScalarFieldEnum | MaptiersScalarFieldEnum[]
  }

  /**
   * maptiers create
   */
  export type maptiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * The data needed to create a maptiers.
     */
    data: XOR<maptiersCreateInput, maptiersUncheckedCreateInput>
  }

  /**
   * maptiers createMany
   */
  export type maptiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maptiers.
     */
    data: maptiersCreateManyInput | maptiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maptiers update
   */
  export type maptiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * The data needed to update a maptiers.
     */
    data: XOR<maptiersUpdateInput, maptiersUncheckedUpdateInput>
    /**
     * Choose, which maptiers to update.
     */
    where: maptiersWhereUniqueInput
  }

  /**
   * maptiers updateMany
   */
  export type maptiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maptiers.
     */
    data: XOR<maptiersUpdateManyMutationInput, maptiersUncheckedUpdateManyInput>
    /**
     * Filter which maptiers to update
     */
    where?: maptiersWhereInput
    /**
     * Limit how many maptiers to update.
     */
    limit?: number
  }

  /**
   * maptiers upsert
   */
  export type maptiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * The filter to search for the maptiers to update in case it exists.
     */
    where: maptiersWhereUniqueInput
    /**
     * In case the maptiers found by the `where` argument doesn't exist, create a new maptiers with this data.
     */
    create: XOR<maptiersCreateInput, maptiersUncheckedCreateInput>
    /**
     * In case the maptiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maptiersUpdateInput, maptiersUncheckedUpdateInput>
  }

  /**
   * maptiers delete
   */
  export type maptiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
    /**
     * Filter which maptiers to delete.
     */
    where: maptiersWhereUniqueInput
  }

  /**
   * maptiers deleteMany
   */
  export type maptiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maptiers to delete
     */
    where?: maptiersWhereInput
    /**
     * Limit how many maptiers to delete.
     */
    limit?: number
  }

  /**
   * maptiers without action
   */
  export type maptiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maptiers
     */
    select?: maptiersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maptiers
     */
    omit?: maptiersOmit<ExtArgs> | null
  }


  /**
   * Model mapzones
   */

  export type AggregateMapzones = {
    _count: MapzonesCountAggregateOutputType | null
    _avg: MapzonesAvgAggregateOutputType | null
    _sum: MapzonesSumAggregateOutputType | null
    _min: MapzonesMinAggregateOutputType | null
    _max: MapzonesMaxAggregateOutputType | null
  }

  export type MapzonesAvgAggregateOutputType = {
    id: number | null
    type: number | null
    corner1_x: number | null
    corner1_y: number | null
    corner1_z: number | null
    corner2_x: number | null
    corner2_y: number | null
    corner2_z: number | null
    destination_x: number | null
    destination_y: number | null
    destination_z: number | null
    track: number | null
    flags: number | null
    data: number | null
    form: number | null
  }

  export type MapzonesSumAggregateOutputType = {
    id: number | null
    type: number | null
    corner1_x: number | null
    corner1_y: number | null
    corner1_z: number | null
    corner2_x: number | null
    corner2_y: number | null
    corner2_z: number | null
    destination_x: number | null
    destination_y: number | null
    destination_z: number | null
    track: number | null
    flags: number | null
    data: number | null
    form: number | null
  }

  export type MapzonesMinAggregateOutputType = {
    id: number | null
    map: string | null
    type: number | null
    corner1_x: number | null
    corner1_y: number | null
    corner1_z: number | null
    corner2_x: number | null
    corner2_y: number | null
    corner2_z: number | null
    destination_x: number | null
    destination_y: number | null
    destination_z: number | null
    track: number | null
    flags: number | null
    data: number | null
    form: number | null
    target: string | null
  }

  export type MapzonesMaxAggregateOutputType = {
    id: number | null
    map: string | null
    type: number | null
    corner1_x: number | null
    corner1_y: number | null
    corner1_z: number | null
    corner2_x: number | null
    corner2_y: number | null
    corner2_z: number | null
    destination_x: number | null
    destination_y: number | null
    destination_z: number | null
    track: number | null
    flags: number | null
    data: number | null
    form: number | null
    target: string | null
  }

  export type MapzonesCountAggregateOutputType = {
    id: number
    map: number
    type: number
    corner1_x: number
    corner1_y: number
    corner1_z: number
    corner2_x: number
    corner2_y: number
    corner2_z: number
    destination_x: number
    destination_y: number
    destination_z: number
    track: number
    flags: number
    data: number
    form: number
    target: number
    _all: number
  }


  export type MapzonesAvgAggregateInputType = {
    id?: true
    type?: true
    corner1_x?: true
    corner1_y?: true
    corner1_z?: true
    corner2_x?: true
    corner2_y?: true
    corner2_z?: true
    destination_x?: true
    destination_y?: true
    destination_z?: true
    track?: true
    flags?: true
    data?: true
    form?: true
  }

  export type MapzonesSumAggregateInputType = {
    id?: true
    type?: true
    corner1_x?: true
    corner1_y?: true
    corner1_z?: true
    corner2_x?: true
    corner2_y?: true
    corner2_z?: true
    destination_x?: true
    destination_y?: true
    destination_z?: true
    track?: true
    flags?: true
    data?: true
    form?: true
  }

  export type MapzonesMinAggregateInputType = {
    id?: true
    map?: true
    type?: true
    corner1_x?: true
    corner1_y?: true
    corner1_z?: true
    corner2_x?: true
    corner2_y?: true
    corner2_z?: true
    destination_x?: true
    destination_y?: true
    destination_z?: true
    track?: true
    flags?: true
    data?: true
    form?: true
    target?: true
  }

  export type MapzonesMaxAggregateInputType = {
    id?: true
    map?: true
    type?: true
    corner1_x?: true
    corner1_y?: true
    corner1_z?: true
    corner2_x?: true
    corner2_y?: true
    corner2_z?: true
    destination_x?: true
    destination_y?: true
    destination_z?: true
    track?: true
    flags?: true
    data?: true
    form?: true
    target?: true
  }

  export type MapzonesCountAggregateInputType = {
    id?: true
    map?: true
    type?: true
    corner1_x?: true
    corner1_y?: true
    corner1_z?: true
    corner2_x?: true
    corner2_y?: true
    corner2_z?: true
    destination_x?: true
    destination_y?: true
    destination_z?: true
    track?: true
    flags?: true
    data?: true
    form?: true
    target?: true
    _all?: true
  }

  export type MapzonesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mapzones to aggregate.
     */
    where?: mapzonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mapzones to fetch.
     */
    orderBy?: mapzonesOrderByWithRelationInput | mapzonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mapzonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mapzones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mapzones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mapzones
    **/
    _count?: true | MapzonesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MapzonesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MapzonesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MapzonesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MapzonesMaxAggregateInputType
  }

  export type GetMapzonesAggregateType<T extends MapzonesAggregateArgs> = {
        [P in keyof T & keyof AggregateMapzones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMapzones[P]>
      : GetScalarType<T[P], AggregateMapzones[P]>
  }




  export type mapzonesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mapzonesWhereInput
    orderBy?: mapzonesOrderByWithAggregationInput | mapzonesOrderByWithAggregationInput[]
    by: MapzonesScalarFieldEnum[] | MapzonesScalarFieldEnum
    having?: mapzonesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MapzonesCountAggregateInputType | true
    _avg?: MapzonesAvgAggregateInputType
    _sum?: MapzonesSumAggregateInputType
    _min?: MapzonesMinAggregateInputType
    _max?: MapzonesMaxAggregateInputType
  }

  export type MapzonesGroupByOutputType = {
    id: number
    map: string
    type: number | null
    corner1_x: number | null
    corner1_y: number | null
    corner1_z: number | null
    corner2_x: number | null
    corner2_y: number | null
    corner2_z: number | null
    destination_x: number
    destination_y: number
    destination_z: number
    track: number
    flags: number
    data: number
    form: number | null
    target: string | null
    _count: MapzonesCountAggregateOutputType | null
    _avg: MapzonesAvgAggregateOutputType | null
    _sum: MapzonesSumAggregateOutputType | null
    _min: MapzonesMinAggregateOutputType | null
    _max: MapzonesMaxAggregateOutputType | null
  }

  type GetMapzonesGroupByPayload<T extends mapzonesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MapzonesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MapzonesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MapzonesGroupByOutputType[P]>
            : GetScalarType<T[P], MapzonesGroupByOutputType[P]>
        }
      >
    >


  export type mapzonesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    map?: boolean
    type?: boolean
    corner1_x?: boolean
    corner1_y?: boolean
    corner1_z?: boolean
    corner2_x?: boolean
    corner2_y?: boolean
    corner2_z?: boolean
    destination_x?: boolean
    destination_y?: boolean
    destination_z?: boolean
    track?: boolean
    flags?: boolean
    data?: boolean
    form?: boolean
    target?: boolean
  }, ExtArgs["result"]["mapzones"]>



  export type mapzonesSelectScalar = {
    id?: boolean
    map?: boolean
    type?: boolean
    corner1_x?: boolean
    corner1_y?: boolean
    corner1_z?: boolean
    corner2_x?: boolean
    corner2_y?: boolean
    corner2_z?: boolean
    destination_x?: boolean
    destination_y?: boolean
    destination_z?: boolean
    track?: boolean
    flags?: boolean
    data?: boolean
    form?: boolean
    target?: boolean
  }

  export type mapzonesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "map" | "type" | "corner1_x" | "corner1_y" | "corner1_z" | "corner2_x" | "corner2_y" | "corner2_z" | "destination_x" | "destination_y" | "destination_z" | "track" | "flags" | "data" | "form" | "target", ExtArgs["result"]["mapzones"]>

  export type $mapzonesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mapzones"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      map: string
      type: number | null
      corner1_x: number | null
      corner1_y: number | null
      corner1_z: number | null
      corner2_x: number | null
      corner2_y: number | null
      corner2_z: number | null
      destination_x: number
      destination_y: number
      destination_z: number
      track: number
      flags: number
      data: number
      form: number | null
      target: string | null
    }, ExtArgs["result"]["mapzones"]>
    composites: {}
  }

  type mapzonesGetPayload<S extends boolean | null | undefined | mapzonesDefaultArgs> = $Result.GetResult<Prisma.$mapzonesPayload, S>

  type mapzonesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mapzonesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MapzonesCountAggregateInputType | true
    }

  export interface mapzonesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mapzones'], meta: { name: 'mapzones' } }
    /**
     * Find zero or one Mapzones that matches the filter.
     * @param {mapzonesFindUniqueArgs} args - Arguments to find a Mapzones
     * @example
     * // Get one Mapzones
     * const mapzones = await prisma.mapzones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mapzonesFindUniqueArgs>(args: SelectSubset<T, mapzonesFindUniqueArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mapzones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mapzonesFindUniqueOrThrowArgs} args - Arguments to find a Mapzones
     * @example
     * // Get one Mapzones
     * const mapzones = await prisma.mapzones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mapzonesFindUniqueOrThrowArgs>(args: SelectSubset<T, mapzonesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapzones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesFindFirstArgs} args - Arguments to find a Mapzones
     * @example
     * // Get one Mapzones
     * const mapzones = await prisma.mapzones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mapzonesFindFirstArgs>(args?: SelectSubset<T, mapzonesFindFirstArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mapzones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesFindFirstOrThrowArgs} args - Arguments to find a Mapzones
     * @example
     * // Get one Mapzones
     * const mapzones = await prisma.mapzones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mapzonesFindFirstOrThrowArgs>(args?: SelectSubset<T, mapzonesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mapzones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mapzones
     * const mapzones = await prisma.mapzones.findMany()
     * 
     * // Get first 10 Mapzones
     * const mapzones = await prisma.mapzones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mapzonesWithIdOnly = await prisma.mapzones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mapzonesFindManyArgs>(args?: SelectSubset<T, mapzonesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mapzones.
     * @param {mapzonesCreateArgs} args - Arguments to create a Mapzones.
     * @example
     * // Create one Mapzones
     * const Mapzones = await prisma.mapzones.create({
     *   data: {
     *     // ... data to create a Mapzones
     *   }
     * })
     * 
     */
    create<T extends mapzonesCreateArgs>(args: SelectSubset<T, mapzonesCreateArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mapzones.
     * @param {mapzonesCreateManyArgs} args - Arguments to create many Mapzones.
     * @example
     * // Create many Mapzones
     * const mapzones = await prisma.mapzones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mapzonesCreateManyArgs>(args?: SelectSubset<T, mapzonesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mapzones.
     * @param {mapzonesDeleteArgs} args - Arguments to delete one Mapzones.
     * @example
     * // Delete one Mapzones
     * const Mapzones = await prisma.mapzones.delete({
     *   where: {
     *     // ... filter to delete one Mapzones
     *   }
     * })
     * 
     */
    delete<T extends mapzonesDeleteArgs>(args: SelectSubset<T, mapzonesDeleteArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mapzones.
     * @param {mapzonesUpdateArgs} args - Arguments to update one Mapzones.
     * @example
     * // Update one Mapzones
     * const mapzones = await prisma.mapzones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mapzonesUpdateArgs>(args: SelectSubset<T, mapzonesUpdateArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mapzones.
     * @param {mapzonesDeleteManyArgs} args - Arguments to filter Mapzones to delete.
     * @example
     * // Delete a few Mapzones
     * const { count } = await prisma.mapzones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mapzonesDeleteManyArgs>(args?: SelectSubset<T, mapzonesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mapzones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mapzones
     * const mapzones = await prisma.mapzones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mapzonesUpdateManyArgs>(args: SelectSubset<T, mapzonesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mapzones.
     * @param {mapzonesUpsertArgs} args - Arguments to update or create a Mapzones.
     * @example
     * // Update or create a Mapzones
     * const mapzones = await prisma.mapzones.upsert({
     *   create: {
     *     // ... data to create a Mapzones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mapzones we want to update
     *   }
     * })
     */
    upsert<T extends mapzonesUpsertArgs>(args: SelectSubset<T, mapzonesUpsertArgs<ExtArgs>>): Prisma__mapzonesClient<$Result.GetResult<Prisma.$mapzonesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mapzones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesCountArgs} args - Arguments to filter Mapzones to count.
     * @example
     * // Count the number of Mapzones
     * const count = await prisma.mapzones.count({
     *   where: {
     *     // ... the filter for the Mapzones we want to count
     *   }
     * })
    **/
    count<T extends mapzonesCountArgs>(
      args?: Subset<T, mapzonesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MapzonesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mapzones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapzonesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MapzonesAggregateArgs>(args: Subset<T, MapzonesAggregateArgs>): Prisma.PrismaPromise<GetMapzonesAggregateType<T>>

    /**
     * Group by Mapzones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mapzonesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mapzonesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mapzonesGroupByArgs['orderBy'] }
        : { orderBy?: mapzonesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mapzonesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapzonesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mapzones model
   */
  readonly fields: mapzonesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mapzones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mapzonesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mapzones model
   */
  interface mapzonesFieldRefs {
    readonly id: FieldRef<"mapzones", 'Int'>
    readonly map: FieldRef<"mapzones", 'String'>
    readonly type: FieldRef<"mapzones", 'Int'>
    readonly corner1_x: FieldRef<"mapzones", 'Float'>
    readonly corner1_y: FieldRef<"mapzones", 'Float'>
    readonly corner1_z: FieldRef<"mapzones", 'Float'>
    readonly corner2_x: FieldRef<"mapzones", 'Float'>
    readonly corner2_y: FieldRef<"mapzones", 'Float'>
    readonly corner2_z: FieldRef<"mapzones", 'Float'>
    readonly destination_x: FieldRef<"mapzones", 'Float'>
    readonly destination_y: FieldRef<"mapzones", 'Float'>
    readonly destination_z: FieldRef<"mapzones", 'Float'>
    readonly track: FieldRef<"mapzones", 'Int'>
    readonly flags: FieldRef<"mapzones", 'Int'>
    readonly data: FieldRef<"mapzones", 'Int'>
    readonly form: FieldRef<"mapzones", 'Int'>
    readonly target: FieldRef<"mapzones", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mapzones findUnique
   */
  export type mapzonesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter, which mapzones to fetch.
     */
    where: mapzonesWhereUniqueInput
  }

  /**
   * mapzones findUniqueOrThrow
   */
  export type mapzonesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter, which mapzones to fetch.
     */
    where: mapzonesWhereUniqueInput
  }

  /**
   * mapzones findFirst
   */
  export type mapzonesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter, which mapzones to fetch.
     */
    where?: mapzonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mapzones to fetch.
     */
    orderBy?: mapzonesOrderByWithRelationInput | mapzonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mapzones.
     */
    cursor?: mapzonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mapzones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mapzones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mapzones.
     */
    distinct?: MapzonesScalarFieldEnum | MapzonesScalarFieldEnum[]
  }

  /**
   * mapzones findFirstOrThrow
   */
  export type mapzonesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter, which mapzones to fetch.
     */
    where?: mapzonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mapzones to fetch.
     */
    orderBy?: mapzonesOrderByWithRelationInput | mapzonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mapzones.
     */
    cursor?: mapzonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mapzones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mapzones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mapzones.
     */
    distinct?: MapzonesScalarFieldEnum | MapzonesScalarFieldEnum[]
  }

  /**
   * mapzones findMany
   */
  export type mapzonesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter, which mapzones to fetch.
     */
    where?: mapzonesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mapzones to fetch.
     */
    orderBy?: mapzonesOrderByWithRelationInput | mapzonesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mapzones.
     */
    cursor?: mapzonesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mapzones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mapzones.
     */
    skip?: number
    distinct?: MapzonesScalarFieldEnum | MapzonesScalarFieldEnum[]
  }

  /**
   * mapzones create
   */
  export type mapzonesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * The data needed to create a mapzones.
     */
    data: XOR<mapzonesCreateInput, mapzonesUncheckedCreateInput>
  }

  /**
   * mapzones createMany
   */
  export type mapzonesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mapzones.
     */
    data: mapzonesCreateManyInput | mapzonesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mapzones update
   */
  export type mapzonesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * The data needed to update a mapzones.
     */
    data: XOR<mapzonesUpdateInput, mapzonesUncheckedUpdateInput>
    /**
     * Choose, which mapzones to update.
     */
    where: mapzonesWhereUniqueInput
  }

  /**
   * mapzones updateMany
   */
  export type mapzonesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mapzones.
     */
    data: XOR<mapzonesUpdateManyMutationInput, mapzonesUncheckedUpdateManyInput>
    /**
     * Filter which mapzones to update
     */
    where?: mapzonesWhereInput
    /**
     * Limit how many mapzones to update.
     */
    limit?: number
  }

  /**
   * mapzones upsert
   */
  export type mapzonesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * The filter to search for the mapzones to update in case it exists.
     */
    where: mapzonesWhereUniqueInput
    /**
     * In case the mapzones found by the `where` argument doesn't exist, create a new mapzones with this data.
     */
    create: XOR<mapzonesCreateInput, mapzonesUncheckedCreateInput>
    /**
     * In case the mapzones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mapzonesUpdateInput, mapzonesUncheckedUpdateInput>
  }

  /**
   * mapzones delete
   */
  export type mapzonesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
    /**
     * Filter which mapzones to delete.
     */
    where: mapzonesWhereUniqueInput
  }

  /**
   * mapzones deleteMany
   */
  export type mapzonesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mapzones to delete
     */
    where?: mapzonesWhereInput
    /**
     * Limit how many mapzones to delete.
     */
    limit?: number
  }

  /**
   * mapzones without action
   */
  export type mapzonesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mapzones
     */
    select?: mapzonesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mapzones
     */
    omit?: mapzonesOmit<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    code: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    code: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    code: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    code: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    code: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    code?: true
  }

  export type MigrationsSumAggregateInputType = {
    code?: true
  }

  export type MigrationsMinAggregateInputType = {
    code?: true
  }

  export type MigrationsMaxAggregateInputType = {
    code?: true
  }

  export type MigrationsCountAggregateInputType = {
    code?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    code: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    code?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const migrationsWithCodeOnly = await prisma.migrations.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly code: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model playertimes
   */

  export type AggregatePlayertimes = {
    _count: PlayertimesCountAggregateOutputType | null
    _avg: PlayertimesAvgAggregateOutputType | null
    _sum: PlayertimesSumAggregateOutputType | null
    _min: PlayertimesMinAggregateOutputType | null
    _max: PlayertimesMaxAggregateOutputType | null
  }

  export type PlayertimesAvgAggregateOutputType = {
    id: number | null
    style: number | null
    track: number | null
    time: number | null
    auth: number | null
    points: number | null
    jumps: number | null
    date: number | null
    strafes: number | null
    sync: number | null
    perfs: number | null
    completions: number | null
  }

  export type PlayertimesSumAggregateOutputType = {
    id: number | null
    style: number | null
    track: number | null
    time: number | null
    auth: number | null
    points: number | null
    jumps: number | null
    date: number | null
    strafes: number | null
    sync: number | null
    perfs: number | null
    completions: number | null
  }

  export type PlayertimesMinAggregateOutputType = {
    id: number | null
    style: number | null
    track: number | null
    time: number | null
    auth: number | null
    map: string | null
    points: number | null
    jumps: number | null
    date: number | null
    strafes: number | null
    sync: number | null
    perfs: number | null
    completions: number | null
  }

  export type PlayertimesMaxAggregateOutputType = {
    id: number | null
    style: number | null
    track: number | null
    time: number | null
    auth: number | null
    map: string | null
    points: number | null
    jumps: number | null
    date: number | null
    strafes: number | null
    sync: number | null
    perfs: number | null
    completions: number | null
  }

  export type PlayertimesCountAggregateOutputType = {
    id: number
    style: number
    track: number
    time: number
    auth: number
    map: number
    points: number
    jumps: number
    date: number
    strafes: number
    sync: number
    perfs: number
    completions: number
    _all: number
  }


  export type PlayertimesAvgAggregateInputType = {
    id?: true
    style?: true
    track?: true
    time?: true
    auth?: true
    points?: true
    jumps?: true
    date?: true
    strafes?: true
    sync?: true
    perfs?: true
    completions?: true
  }

  export type PlayertimesSumAggregateInputType = {
    id?: true
    style?: true
    track?: true
    time?: true
    auth?: true
    points?: true
    jumps?: true
    date?: true
    strafes?: true
    sync?: true
    perfs?: true
    completions?: true
  }

  export type PlayertimesMinAggregateInputType = {
    id?: true
    style?: true
    track?: true
    time?: true
    auth?: true
    map?: true
    points?: true
    jumps?: true
    date?: true
    strafes?: true
    sync?: true
    perfs?: true
    completions?: true
  }

  export type PlayertimesMaxAggregateInputType = {
    id?: true
    style?: true
    track?: true
    time?: true
    auth?: true
    map?: true
    points?: true
    jumps?: true
    date?: true
    strafes?: true
    sync?: true
    perfs?: true
    completions?: true
  }

  export type PlayertimesCountAggregateInputType = {
    id?: true
    style?: true
    track?: true
    time?: true
    auth?: true
    map?: true
    points?: true
    jumps?: true
    date?: true
    strafes?: true
    sync?: true
    perfs?: true
    completions?: true
    _all?: true
  }

  export type PlayertimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playertimes to aggregate.
     */
    where?: playertimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playertimes to fetch.
     */
    orderBy?: playertimesOrderByWithRelationInput | playertimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: playertimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playertimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playertimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned playertimes
    **/
    _count?: true | PlayertimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayertimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayertimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayertimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayertimesMaxAggregateInputType
  }

  export type GetPlayertimesAggregateType<T extends PlayertimesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayertimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayertimes[P]>
      : GetScalarType<T[P], AggregatePlayertimes[P]>
  }




  export type playertimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: playertimesWhereInput
    orderBy?: playertimesOrderByWithAggregationInput | playertimesOrderByWithAggregationInput[]
    by: PlayertimesScalarFieldEnum[] | PlayertimesScalarFieldEnum
    having?: playertimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayertimesCountAggregateInputType | true
    _avg?: PlayertimesAvgAggregateInputType
    _sum?: PlayertimesSumAggregateInputType
    _min?: PlayertimesMinAggregateInputType
    _max?: PlayertimesMaxAggregateInputType
  }

  export type PlayertimesGroupByOutputType = {
    id: number
    style: number
    track: number
    time: number
    auth: number | null
    map: string
    points: number
    jumps: number | null
    date: number | null
    strafes: number | null
    sync: number | null
    perfs: number | null
    completions: number | null
    _count: PlayertimesCountAggregateOutputType | null
    _avg: PlayertimesAvgAggregateOutputType | null
    _sum: PlayertimesSumAggregateOutputType | null
    _min: PlayertimesMinAggregateOutputType | null
    _max: PlayertimesMaxAggregateOutputType | null
  }

  type GetPlayertimesGroupByPayload<T extends playertimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayertimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayertimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayertimesGroupByOutputType[P]>
            : GetScalarType<T[P], PlayertimesGroupByOutputType[P]>
        }
      >
    >


  export type playertimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    style?: boolean
    track?: boolean
    time?: boolean
    auth?: boolean
    map?: boolean
    points?: boolean
    jumps?: boolean
    date?: boolean
    strafes?: boolean
    sync?: boolean
    perfs?: boolean
    completions?: boolean
    users?: boolean | playertimes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["playertimes"]>



  export type playertimesSelectScalar = {
    id?: boolean
    style?: boolean
    track?: boolean
    time?: boolean
    auth?: boolean
    map?: boolean
    points?: boolean
    jumps?: boolean
    date?: boolean
    strafes?: boolean
    sync?: boolean
    perfs?: boolean
    completions?: boolean
  }

  export type playertimesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "style" | "track" | "time" | "auth" | "map" | "points" | "jumps" | "date" | "strafes" | "sync" | "perfs" | "completions", ExtArgs["result"]["playertimes"]>
  export type playertimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | playertimes$usersArgs<ExtArgs>
  }

  export type $playertimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "playertimes"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      style: number
      track: number
      time: number
      auth: number | null
      map: string
      points: number
      jumps: number | null
      date: number | null
      strafes: number | null
      sync: number | null
      perfs: number | null
      completions: number | null
    }, ExtArgs["result"]["playertimes"]>
    composites: {}
  }

  type playertimesGetPayload<S extends boolean | null | undefined | playertimesDefaultArgs> = $Result.GetResult<Prisma.$playertimesPayload, S>

  type playertimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<playertimesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayertimesCountAggregateInputType | true
    }

  export interface playertimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['playertimes'], meta: { name: 'playertimes' } }
    /**
     * Find zero or one Playertimes that matches the filter.
     * @param {playertimesFindUniqueArgs} args - Arguments to find a Playertimes
     * @example
     * // Get one Playertimes
     * const playertimes = await prisma.playertimes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends playertimesFindUniqueArgs>(args: SelectSubset<T, playertimesFindUniqueArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playertimes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {playertimesFindUniqueOrThrowArgs} args - Arguments to find a Playertimes
     * @example
     * // Get one Playertimes
     * const playertimes = await prisma.playertimes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends playertimesFindUniqueOrThrowArgs>(args: SelectSubset<T, playertimesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playertimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesFindFirstArgs} args - Arguments to find a Playertimes
     * @example
     * // Get one Playertimes
     * const playertimes = await prisma.playertimes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends playertimesFindFirstArgs>(args?: SelectSubset<T, playertimesFindFirstArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playertimes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesFindFirstOrThrowArgs} args - Arguments to find a Playertimes
     * @example
     * // Get one Playertimes
     * const playertimes = await prisma.playertimes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends playertimesFindFirstOrThrowArgs>(args?: SelectSubset<T, playertimesFindFirstOrThrowArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playertimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playertimes
     * const playertimes = await prisma.playertimes.findMany()
     * 
     * // Get first 10 Playertimes
     * const playertimes = await prisma.playertimes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playertimesWithIdOnly = await prisma.playertimes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends playertimesFindManyArgs>(args?: SelectSubset<T, playertimesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playertimes.
     * @param {playertimesCreateArgs} args - Arguments to create a Playertimes.
     * @example
     * // Create one Playertimes
     * const Playertimes = await prisma.playertimes.create({
     *   data: {
     *     // ... data to create a Playertimes
     *   }
     * })
     * 
     */
    create<T extends playertimesCreateArgs>(args: SelectSubset<T, playertimesCreateArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playertimes.
     * @param {playertimesCreateManyArgs} args - Arguments to create many Playertimes.
     * @example
     * // Create many Playertimes
     * const playertimes = await prisma.playertimes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends playertimesCreateManyArgs>(args?: SelectSubset<T, playertimesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playertimes.
     * @param {playertimesDeleteArgs} args - Arguments to delete one Playertimes.
     * @example
     * // Delete one Playertimes
     * const Playertimes = await prisma.playertimes.delete({
     *   where: {
     *     // ... filter to delete one Playertimes
     *   }
     * })
     * 
     */
    delete<T extends playertimesDeleteArgs>(args: SelectSubset<T, playertimesDeleteArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playertimes.
     * @param {playertimesUpdateArgs} args - Arguments to update one Playertimes.
     * @example
     * // Update one Playertimes
     * const playertimes = await prisma.playertimes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends playertimesUpdateArgs>(args: SelectSubset<T, playertimesUpdateArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playertimes.
     * @param {playertimesDeleteManyArgs} args - Arguments to filter Playertimes to delete.
     * @example
     * // Delete a few Playertimes
     * const { count } = await prisma.playertimes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends playertimesDeleteManyArgs>(args?: SelectSubset<T, playertimesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playertimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playertimes
     * const playertimes = await prisma.playertimes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends playertimesUpdateManyArgs>(args: SelectSubset<T, playertimesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playertimes.
     * @param {playertimesUpsertArgs} args - Arguments to update or create a Playertimes.
     * @example
     * // Update or create a Playertimes
     * const playertimes = await prisma.playertimes.upsert({
     *   create: {
     *     // ... data to create a Playertimes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playertimes we want to update
     *   }
     * })
     */
    upsert<T extends playertimesUpsertArgs>(args: SelectSubset<T, playertimesUpsertArgs<ExtArgs>>): Prisma__playertimesClient<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playertimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesCountArgs} args - Arguments to filter Playertimes to count.
     * @example
     * // Count the number of Playertimes
     * const count = await prisma.playertimes.count({
     *   where: {
     *     // ... the filter for the Playertimes we want to count
     *   }
     * })
    **/
    count<T extends playertimesCountArgs>(
      args?: Subset<T, playertimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayertimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playertimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayertimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayertimesAggregateArgs>(args: Subset<T, PlayertimesAggregateArgs>): Prisma.PrismaPromise<GetPlayertimesAggregateType<T>>

    /**
     * Group by Playertimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {playertimesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends playertimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: playertimesGroupByArgs['orderBy'] }
        : { orderBy?: playertimesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, playertimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayertimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the playertimes model
   */
  readonly fields: playertimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for playertimes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__playertimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends playertimes$usersArgs<ExtArgs> = {}>(args?: Subset<T, playertimes$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the playertimes model
   */
  interface playertimesFieldRefs {
    readonly id: FieldRef<"playertimes", 'Int'>
    readonly style: FieldRef<"playertimes", 'Int'>
    readonly track: FieldRef<"playertimes", 'Int'>
    readonly time: FieldRef<"playertimes", 'Float'>
    readonly auth: FieldRef<"playertimes", 'Int'>
    readonly map: FieldRef<"playertimes", 'String'>
    readonly points: FieldRef<"playertimes", 'Float'>
    readonly jumps: FieldRef<"playertimes", 'Int'>
    readonly date: FieldRef<"playertimes", 'Int'>
    readonly strafes: FieldRef<"playertimes", 'Int'>
    readonly sync: FieldRef<"playertimes", 'Float'>
    readonly perfs: FieldRef<"playertimes", 'Float'>
    readonly completions: FieldRef<"playertimes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * playertimes findUnique
   */
  export type playertimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter, which playertimes to fetch.
     */
    where: playertimesWhereUniqueInput
  }

  /**
   * playertimes findUniqueOrThrow
   */
  export type playertimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter, which playertimes to fetch.
     */
    where: playertimesWhereUniqueInput
  }

  /**
   * playertimes findFirst
   */
  export type playertimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter, which playertimes to fetch.
     */
    where?: playertimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playertimes to fetch.
     */
    orderBy?: playertimesOrderByWithRelationInput | playertimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playertimes.
     */
    cursor?: playertimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playertimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playertimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playertimes.
     */
    distinct?: PlayertimesScalarFieldEnum | PlayertimesScalarFieldEnum[]
  }

  /**
   * playertimes findFirstOrThrow
   */
  export type playertimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter, which playertimes to fetch.
     */
    where?: playertimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playertimes to fetch.
     */
    orderBy?: playertimesOrderByWithRelationInput | playertimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for playertimes.
     */
    cursor?: playertimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playertimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playertimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of playertimes.
     */
    distinct?: PlayertimesScalarFieldEnum | PlayertimesScalarFieldEnum[]
  }

  /**
   * playertimes findMany
   */
  export type playertimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter, which playertimes to fetch.
     */
    where?: playertimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of playertimes to fetch.
     */
    orderBy?: playertimesOrderByWithRelationInput | playertimesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing playertimes.
     */
    cursor?: playertimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` playertimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` playertimes.
     */
    skip?: number
    distinct?: PlayertimesScalarFieldEnum | PlayertimesScalarFieldEnum[]
  }

  /**
   * playertimes create
   */
  export type playertimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * The data needed to create a playertimes.
     */
    data: XOR<playertimesCreateInput, playertimesUncheckedCreateInput>
  }

  /**
   * playertimes createMany
   */
  export type playertimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many playertimes.
     */
    data: playertimesCreateManyInput | playertimesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * playertimes update
   */
  export type playertimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * The data needed to update a playertimes.
     */
    data: XOR<playertimesUpdateInput, playertimesUncheckedUpdateInput>
    /**
     * Choose, which playertimes to update.
     */
    where: playertimesWhereUniqueInput
  }

  /**
   * playertimes updateMany
   */
  export type playertimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update playertimes.
     */
    data: XOR<playertimesUpdateManyMutationInput, playertimesUncheckedUpdateManyInput>
    /**
     * Filter which playertimes to update
     */
    where?: playertimesWhereInput
    /**
     * Limit how many playertimes to update.
     */
    limit?: number
  }

  /**
   * playertimes upsert
   */
  export type playertimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * The filter to search for the playertimes to update in case it exists.
     */
    where: playertimesWhereUniqueInput
    /**
     * In case the playertimes found by the `where` argument doesn't exist, create a new playertimes with this data.
     */
    create: XOR<playertimesCreateInput, playertimesUncheckedCreateInput>
    /**
     * In case the playertimes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<playertimesUpdateInput, playertimesUncheckedUpdateInput>
  }

  /**
   * playertimes delete
   */
  export type playertimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    /**
     * Filter which playertimes to delete.
     */
    where: playertimesWhereUniqueInput
  }

  /**
   * playertimes deleteMany
   */
  export type playertimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which playertimes to delete
     */
    where?: playertimesWhereInput
    /**
     * Limit how many playertimes to delete.
     */
    limit?: number
  }

  /**
   * playertimes.users
   */
  export type playertimes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * playertimes without action
   */
  export type playertimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
  }


  /**
   * Model stagetimespb
   */

  export type AggregateStagetimespb = {
    _count: StagetimespbCountAggregateOutputType | null
    _avg: StagetimespbAvgAggregateOutputType | null
    _sum: StagetimespbSumAggregateOutputType | null
    _min: StagetimespbMinAggregateOutputType | null
    _max: StagetimespbMaxAggregateOutputType | null
  }

  export type StagetimespbAvgAggregateOutputType = {
    style: number | null
    track: number | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimespbSumAggregateOutputType = {
    style: number | null
    track: number | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimespbMinAggregateOutputType = {
    style: number | null
    track: number | null
    map: string | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimespbMaxAggregateOutputType = {
    style: number | null
    track: number | null
    map: string | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimespbCountAggregateOutputType = {
    style: number
    track: number
    map: number
    stage: number
    auth: number
    time: number
    _all: number
  }


  export type StagetimespbAvgAggregateInputType = {
    style?: true
    track?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimespbSumAggregateInputType = {
    style?: true
    track?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimespbMinAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimespbMaxAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimespbCountAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
    _all?: true
  }

  export type StagetimespbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stagetimespb to aggregate.
     */
    where?: stagetimespbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimespbs to fetch.
     */
    orderBy?: stagetimespbOrderByWithRelationInput | stagetimespbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stagetimespbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimespbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimespbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stagetimespbs
    **/
    _count?: true | StagetimespbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StagetimespbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StagetimespbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagetimespbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagetimespbMaxAggregateInputType
  }

  export type GetStagetimespbAggregateType<T extends StagetimespbAggregateArgs> = {
        [P in keyof T & keyof AggregateStagetimespb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStagetimespb[P]>
      : GetScalarType<T[P], AggregateStagetimespb[P]>
  }




  export type stagetimespbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stagetimespbWhereInput
    orderBy?: stagetimespbOrderByWithAggregationInput | stagetimespbOrderByWithAggregationInput[]
    by: StagetimespbScalarFieldEnum[] | StagetimespbScalarFieldEnum
    having?: stagetimespbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagetimespbCountAggregateInputType | true
    _avg?: StagetimespbAvgAggregateInputType
    _sum?: StagetimespbSumAggregateInputType
    _min?: StagetimespbMinAggregateInputType
    _max?: StagetimespbMaxAggregateInputType
  }

  export type StagetimespbGroupByOutputType = {
    style: number
    track: number
    map: string
    stage: number
    auth: number
    time: number
    _count: StagetimespbCountAggregateOutputType | null
    _avg: StagetimespbAvgAggregateOutputType | null
    _sum: StagetimespbSumAggregateOutputType | null
    _min: StagetimespbMinAggregateOutputType | null
    _max: StagetimespbMaxAggregateOutputType | null
  }

  type GetStagetimespbGroupByPayload<T extends stagetimespbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagetimespbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagetimespbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagetimespbGroupByOutputType[P]>
            : GetScalarType<T[P], StagetimespbGroupByOutputType[P]>
        }
      >
    >


  export type stagetimespbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    style?: boolean
    track?: boolean
    map?: boolean
    stage?: boolean
    auth?: boolean
    time?: boolean
  }, ExtArgs["result"]["stagetimespb"]>



  export type stagetimespbSelectScalar = {
    style?: boolean
    track?: boolean
    map?: boolean
    stage?: boolean
    auth?: boolean
    time?: boolean
  }

  export type stagetimespbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"style" | "track" | "map" | "stage" | "auth" | "time", ExtArgs["result"]["stagetimespb"]>

  export type $stagetimespbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stagetimespb"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      style: number
      track: number
      map: string
      stage: number
      auth: number
      time: number
    }, ExtArgs["result"]["stagetimespb"]>
    composites: {}
  }

  type stagetimespbGetPayload<S extends boolean | null | undefined | stagetimespbDefaultArgs> = $Result.GetResult<Prisma.$stagetimespbPayload, S>

  type stagetimespbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stagetimespbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StagetimespbCountAggregateInputType | true
    }

  export interface stagetimespbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stagetimespb'], meta: { name: 'stagetimespb' } }
    /**
     * Find zero or one Stagetimespb that matches the filter.
     * @param {stagetimespbFindUniqueArgs} args - Arguments to find a Stagetimespb
     * @example
     * // Get one Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stagetimespbFindUniqueArgs>(args: SelectSubset<T, stagetimespbFindUniqueArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stagetimespb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stagetimespbFindUniqueOrThrowArgs} args - Arguments to find a Stagetimespb
     * @example
     * // Get one Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stagetimespbFindUniqueOrThrowArgs>(args: SelectSubset<T, stagetimespbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stagetimespb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbFindFirstArgs} args - Arguments to find a Stagetimespb
     * @example
     * // Get one Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stagetimespbFindFirstArgs>(args?: SelectSubset<T, stagetimespbFindFirstArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stagetimespb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbFindFirstOrThrowArgs} args - Arguments to find a Stagetimespb
     * @example
     * // Get one Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stagetimespbFindFirstOrThrowArgs>(args?: SelectSubset<T, stagetimespbFindFirstOrThrowArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stagetimespbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stagetimespbs
     * const stagetimespbs = await prisma.stagetimespb.findMany()
     * 
     * // Get first 10 Stagetimespbs
     * const stagetimespbs = await prisma.stagetimespb.findMany({ take: 10 })
     * 
     * // Only select the `style`
     * const stagetimespbWithStyleOnly = await prisma.stagetimespb.findMany({ select: { style: true } })
     * 
     */
    findMany<T extends stagetimespbFindManyArgs>(args?: SelectSubset<T, stagetimespbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stagetimespb.
     * @param {stagetimespbCreateArgs} args - Arguments to create a Stagetimespb.
     * @example
     * // Create one Stagetimespb
     * const Stagetimespb = await prisma.stagetimespb.create({
     *   data: {
     *     // ... data to create a Stagetimespb
     *   }
     * })
     * 
     */
    create<T extends stagetimespbCreateArgs>(args: SelectSubset<T, stagetimespbCreateArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stagetimespbs.
     * @param {stagetimespbCreateManyArgs} args - Arguments to create many Stagetimespbs.
     * @example
     * // Create many Stagetimespbs
     * const stagetimespb = await prisma.stagetimespb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stagetimespbCreateManyArgs>(args?: SelectSubset<T, stagetimespbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stagetimespb.
     * @param {stagetimespbDeleteArgs} args - Arguments to delete one Stagetimespb.
     * @example
     * // Delete one Stagetimespb
     * const Stagetimespb = await prisma.stagetimespb.delete({
     *   where: {
     *     // ... filter to delete one Stagetimespb
     *   }
     * })
     * 
     */
    delete<T extends stagetimespbDeleteArgs>(args: SelectSubset<T, stagetimespbDeleteArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stagetimespb.
     * @param {stagetimespbUpdateArgs} args - Arguments to update one Stagetimespb.
     * @example
     * // Update one Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stagetimespbUpdateArgs>(args: SelectSubset<T, stagetimespbUpdateArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stagetimespbs.
     * @param {stagetimespbDeleteManyArgs} args - Arguments to filter Stagetimespbs to delete.
     * @example
     * // Delete a few Stagetimespbs
     * const { count } = await prisma.stagetimespb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stagetimespbDeleteManyArgs>(args?: SelectSubset<T, stagetimespbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stagetimespbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stagetimespbs
     * const stagetimespb = await prisma.stagetimespb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stagetimespbUpdateManyArgs>(args: SelectSubset<T, stagetimespbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stagetimespb.
     * @param {stagetimespbUpsertArgs} args - Arguments to update or create a Stagetimespb.
     * @example
     * // Update or create a Stagetimespb
     * const stagetimespb = await prisma.stagetimespb.upsert({
     *   create: {
     *     // ... data to create a Stagetimespb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stagetimespb we want to update
     *   }
     * })
     */
    upsert<T extends stagetimespbUpsertArgs>(args: SelectSubset<T, stagetimespbUpsertArgs<ExtArgs>>): Prisma__stagetimespbClient<$Result.GetResult<Prisma.$stagetimespbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stagetimespbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbCountArgs} args - Arguments to filter Stagetimespbs to count.
     * @example
     * // Count the number of Stagetimespbs
     * const count = await prisma.stagetimespb.count({
     *   where: {
     *     // ... the filter for the Stagetimespbs we want to count
     *   }
     * })
    **/
    count<T extends stagetimespbCountArgs>(
      args?: Subset<T, stagetimespbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagetimespbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stagetimespb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagetimespbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StagetimespbAggregateArgs>(args: Subset<T, StagetimespbAggregateArgs>): Prisma.PrismaPromise<GetStagetimespbAggregateType<T>>

    /**
     * Group by Stagetimespb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimespbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stagetimespbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stagetimespbGroupByArgs['orderBy'] }
        : { orderBy?: stagetimespbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stagetimespbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagetimespbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stagetimespb model
   */
  readonly fields: stagetimespbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stagetimespb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stagetimespbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stagetimespb model
   */
  interface stagetimespbFieldRefs {
    readonly style: FieldRef<"stagetimespb", 'Int'>
    readonly track: FieldRef<"stagetimespb", 'Int'>
    readonly map: FieldRef<"stagetimespb", 'String'>
    readonly stage: FieldRef<"stagetimespb", 'Int'>
    readonly auth: FieldRef<"stagetimespb", 'Int'>
    readonly time: FieldRef<"stagetimespb", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * stagetimespb findUnique
   */
  export type stagetimespbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter, which stagetimespb to fetch.
     */
    where: stagetimespbWhereUniqueInput
  }

  /**
   * stagetimespb findUniqueOrThrow
   */
  export type stagetimespbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter, which stagetimespb to fetch.
     */
    where: stagetimespbWhereUniqueInput
  }

  /**
   * stagetimespb findFirst
   */
  export type stagetimespbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter, which stagetimespb to fetch.
     */
    where?: stagetimespbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimespbs to fetch.
     */
    orderBy?: stagetimespbOrderByWithRelationInput | stagetimespbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stagetimespbs.
     */
    cursor?: stagetimespbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimespbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimespbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stagetimespbs.
     */
    distinct?: StagetimespbScalarFieldEnum | StagetimespbScalarFieldEnum[]
  }

  /**
   * stagetimespb findFirstOrThrow
   */
  export type stagetimespbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter, which stagetimespb to fetch.
     */
    where?: stagetimespbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimespbs to fetch.
     */
    orderBy?: stagetimespbOrderByWithRelationInput | stagetimespbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stagetimespbs.
     */
    cursor?: stagetimespbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimespbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimespbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stagetimespbs.
     */
    distinct?: StagetimespbScalarFieldEnum | StagetimespbScalarFieldEnum[]
  }

  /**
   * stagetimespb findMany
   */
  export type stagetimespbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter, which stagetimespbs to fetch.
     */
    where?: stagetimespbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimespbs to fetch.
     */
    orderBy?: stagetimespbOrderByWithRelationInput | stagetimespbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stagetimespbs.
     */
    cursor?: stagetimespbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimespbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimespbs.
     */
    skip?: number
    distinct?: StagetimespbScalarFieldEnum | StagetimespbScalarFieldEnum[]
  }

  /**
   * stagetimespb create
   */
  export type stagetimespbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * The data needed to create a stagetimespb.
     */
    data: XOR<stagetimespbCreateInput, stagetimespbUncheckedCreateInput>
  }

  /**
   * stagetimespb createMany
   */
  export type stagetimespbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stagetimespbs.
     */
    data: stagetimespbCreateManyInput | stagetimespbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stagetimespb update
   */
  export type stagetimespbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * The data needed to update a stagetimespb.
     */
    data: XOR<stagetimespbUpdateInput, stagetimespbUncheckedUpdateInput>
    /**
     * Choose, which stagetimespb to update.
     */
    where: stagetimespbWhereUniqueInput
  }

  /**
   * stagetimespb updateMany
   */
  export type stagetimespbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stagetimespbs.
     */
    data: XOR<stagetimespbUpdateManyMutationInput, stagetimespbUncheckedUpdateManyInput>
    /**
     * Filter which stagetimespbs to update
     */
    where?: stagetimespbWhereInput
    /**
     * Limit how many stagetimespbs to update.
     */
    limit?: number
  }

  /**
   * stagetimespb upsert
   */
  export type stagetimespbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * The filter to search for the stagetimespb to update in case it exists.
     */
    where: stagetimespbWhereUniqueInput
    /**
     * In case the stagetimespb found by the `where` argument doesn't exist, create a new stagetimespb with this data.
     */
    create: XOR<stagetimespbCreateInput, stagetimespbUncheckedCreateInput>
    /**
     * In case the stagetimespb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stagetimespbUpdateInput, stagetimespbUncheckedUpdateInput>
  }

  /**
   * stagetimespb delete
   */
  export type stagetimespbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
    /**
     * Filter which stagetimespb to delete.
     */
    where: stagetimespbWhereUniqueInput
  }

  /**
   * stagetimespb deleteMany
   */
  export type stagetimespbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stagetimespbs to delete
     */
    where?: stagetimespbWhereInput
    /**
     * Limit how many stagetimespbs to delete.
     */
    limit?: number
  }

  /**
   * stagetimespb without action
   */
  export type stagetimespbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimespb
     */
    select?: stagetimespbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimespb
     */
    omit?: stagetimespbOmit<ExtArgs> | null
  }


  /**
   * Model stagetimeswr
   */

  export type AggregateStagetimeswr = {
    _count: StagetimeswrCountAggregateOutputType | null
    _avg: StagetimeswrAvgAggregateOutputType | null
    _sum: StagetimeswrSumAggregateOutputType | null
    _min: StagetimeswrMinAggregateOutputType | null
    _max: StagetimeswrMaxAggregateOutputType | null
  }

  export type StagetimeswrAvgAggregateOutputType = {
    style: number | null
    track: number | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimeswrSumAggregateOutputType = {
    style: number | null
    track: number | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimeswrMinAggregateOutputType = {
    style: number | null
    track: number | null
    map: string | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimeswrMaxAggregateOutputType = {
    style: number | null
    track: number | null
    map: string | null
    stage: number | null
    auth: number | null
    time: number | null
  }

  export type StagetimeswrCountAggregateOutputType = {
    style: number
    track: number
    map: number
    stage: number
    auth: number
    time: number
    _all: number
  }


  export type StagetimeswrAvgAggregateInputType = {
    style?: true
    track?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimeswrSumAggregateInputType = {
    style?: true
    track?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimeswrMinAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimeswrMaxAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
  }

  export type StagetimeswrCountAggregateInputType = {
    style?: true
    track?: true
    map?: true
    stage?: true
    auth?: true
    time?: true
    _all?: true
  }

  export type StagetimeswrAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stagetimeswr to aggregate.
     */
    where?: stagetimeswrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimeswrs to fetch.
     */
    orderBy?: stagetimeswrOrderByWithRelationInput | stagetimeswrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stagetimeswrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimeswrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimeswrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stagetimeswrs
    **/
    _count?: true | StagetimeswrCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StagetimeswrAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StagetimeswrSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StagetimeswrMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StagetimeswrMaxAggregateInputType
  }

  export type GetStagetimeswrAggregateType<T extends StagetimeswrAggregateArgs> = {
        [P in keyof T & keyof AggregateStagetimeswr]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStagetimeswr[P]>
      : GetScalarType<T[P], AggregateStagetimeswr[P]>
  }




  export type stagetimeswrGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stagetimeswrWhereInput
    orderBy?: stagetimeswrOrderByWithAggregationInput | stagetimeswrOrderByWithAggregationInput[]
    by: StagetimeswrScalarFieldEnum[] | StagetimeswrScalarFieldEnum
    having?: stagetimeswrScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StagetimeswrCountAggregateInputType | true
    _avg?: StagetimeswrAvgAggregateInputType
    _sum?: StagetimeswrSumAggregateInputType
    _min?: StagetimeswrMinAggregateInputType
    _max?: StagetimeswrMaxAggregateInputType
  }

  export type StagetimeswrGroupByOutputType = {
    style: number
    track: number
    map: string
    stage: number
    auth: number
    time: number
    _count: StagetimeswrCountAggregateOutputType | null
    _avg: StagetimeswrAvgAggregateOutputType | null
    _sum: StagetimeswrSumAggregateOutputType | null
    _min: StagetimeswrMinAggregateOutputType | null
    _max: StagetimeswrMaxAggregateOutputType | null
  }

  type GetStagetimeswrGroupByPayload<T extends stagetimeswrGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StagetimeswrGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StagetimeswrGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StagetimeswrGroupByOutputType[P]>
            : GetScalarType<T[P], StagetimeswrGroupByOutputType[P]>
        }
      >
    >


  export type stagetimeswrSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    style?: boolean
    track?: boolean
    map?: boolean
    stage?: boolean
    auth?: boolean
    time?: boolean
  }, ExtArgs["result"]["stagetimeswr"]>



  export type stagetimeswrSelectScalar = {
    style?: boolean
    track?: boolean
    map?: boolean
    stage?: boolean
    auth?: boolean
    time?: boolean
  }

  export type stagetimeswrOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"style" | "track" | "map" | "stage" | "auth" | "time", ExtArgs["result"]["stagetimeswr"]>

  export type $stagetimeswrPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stagetimeswr"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      style: number
      track: number
      map: string
      stage: number
      auth: number
      time: number
    }, ExtArgs["result"]["stagetimeswr"]>
    composites: {}
  }

  type stagetimeswrGetPayload<S extends boolean | null | undefined | stagetimeswrDefaultArgs> = $Result.GetResult<Prisma.$stagetimeswrPayload, S>

  type stagetimeswrCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stagetimeswrFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StagetimeswrCountAggregateInputType | true
    }

  export interface stagetimeswrDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stagetimeswr'], meta: { name: 'stagetimeswr' } }
    /**
     * Find zero or one Stagetimeswr that matches the filter.
     * @param {stagetimeswrFindUniqueArgs} args - Arguments to find a Stagetimeswr
     * @example
     * // Get one Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stagetimeswrFindUniqueArgs>(args: SelectSubset<T, stagetimeswrFindUniqueArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stagetimeswr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stagetimeswrFindUniqueOrThrowArgs} args - Arguments to find a Stagetimeswr
     * @example
     * // Get one Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stagetimeswrFindUniqueOrThrowArgs>(args: SelectSubset<T, stagetimeswrFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stagetimeswr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrFindFirstArgs} args - Arguments to find a Stagetimeswr
     * @example
     * // Get one Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stagetimeswrFindFirstArgs>(args?: SelectSubset<T, stagetimeswrFindFirstArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stagetimeswr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrFindFirstOrThrowArgs} args - Arguments to find a Stagetimeswr
     * @example
     * // Get one Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stagetimeswrFindFirstOrThrowArgs>(args?: SelectSubset<T, stagetimeswrFindFirstOrThrowArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stagetimeswrs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stagetimeswrs
     * const stagetimeswrs = await prisma.stagetimeswr.findMany()
     * 
     * // Get first 10 Stagetimeswrs
     * const stagetimeswrs = await prisma.stagetimeswr.findMany({ take: 10 })
     * 
     * // Only select the `style`
     * const stagetimeswrWithStyleOnly = await prisma.stagetimeswr.findMany({ select: { style: true } })
     * 
     */
    findMany<T extends stagetimeswrFindManyArgs>(args?: SelectSubset<T, stagetimeswrFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stagetimeswr.
     * @param {stagetimeswrCreateArgs} args - Arguments to create a Stagetimeswr.
     * @example
     * // Create one Stagetimeswr
     * const Stagetimeswr = await prisma.stagetimeswr.create({
     *   data: {
     *     // ... data to create a Stagetimeswr
     *   }
     * })
     * 
     */
    create<T extends stagetimeswrCreateArgs>(args: SelectSubset<T, stagetimeswrCreateArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stagetimeswrs.
     * @param {stagetimeswrCreateManyArgs} args - Arguments to create many Stagetimeswrs.
     * @example
     * // Create many Stagetimeswrs
     * const stagetimeswr = await prisma.stagetimeswr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stagetimeswrCreateManyArgs>(args?: SelectSubset<T, stagetimeswrCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stagetimeswr.
     * @param {stagetimeswrDeleteArgs} args - Arguments to delete one Stagetimeswr.
     * @example
     * // Delete one Stagetimeswr
     * const Stagetimeswr = await prisma.stagetimeswr.delete({
     *   where: {
     *     // ... filter to delete one Stagetimeswr
     *   }
     * })
     * 
     */
    delete<T extends stagetimeswrDeleteArgs>(args: SelectSubset<T, stagetimeswrDeleteArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stagetimeswr.
     * @param {stagetimeswrUpdateArgs} args - Arguments to update one Stagetimeswr.
     * @example
     * // Update one Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stagetimeswrUpdateArgs>(args: SelectSubset<T, stagetimeswrUpdateArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stagetimeswrs.
     * @param {stagetimeswrDeleteManyArgs} args - Arguments to filter Stagetimeswrs to delete.
     * @example
     * // Delete a few Stagetimeswrs
     * const { count } = await prisma.stagetimeswr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stagetimeswrDeleteManyArgs>(args?: SelectSubset<T, stagetimeswrDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stagetimeswrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stagetimeswrs
     * const stagetimeswr = await prisma.stagetimeswr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stagetimeswrUpdateManyArgs>(args: SelectSubset<T, stagetimeswrUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stagetimeswr.
     * @param {stagetimeswrUpsertArgs} args - Arguments to update or create a Stagetimeswr.
     * @example
     * // Update or create a Stagetimeswr
     * const stagetimeswr = await prisma.stagetimeswr.upsert({
     *   create: {
     *     // ... data to create a Stagetimeswr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stagetimeswr we want to update
     *   }
     * })
     */
    upsert<T extends stagetimeswrUpsertArgs>(args: SelectSubset<T, stagetimeswrUpsertArgs<ExtArgs>>): Prisma__stagetimeswrClient<$Result.GetResult<Prisma.$stagetimeswrPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stagetimeswrs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrCountArgs} args - Arguments to filter Stagetimeswrs to count.
     * @example
     * // Count the number of Stagetimeswrs
     * const count = await prisma.stagetimeswr.count({
     *   where: {
     *     // ... the filter for the Stagetimeswrs we want to count
     *   }
     * })
    **/
    count<T extends stagetimeswrCountArgs>(
      args?: Subset<T, stagetimeswrCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StagetimeswrCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stagetimeswr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StagetimeswrAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StagetimeswrAggregateArgs>(args: Subset<T, StagetimeswrAggregateArgs>): Prisma.PrismaPromise<GetStagetimeswrAggregateType<T>>

    /**
     * Group by Stagetimeswr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stagetimeswrGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stagetimeswrGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stagetimeswrGroupByArgs['orderBy'] }
        : { orderBy?: stagetimeswrGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stagetimeswrGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStagetimeswrGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stagetimeswr model
   */
  readonly fields: stagetimeswrFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stagetimeswr.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stagetimeswrClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stagetimeswr model
   */
  interface stagetimeswrFieldRefs {
    readonly style: FieldRef<"stagetimeswr", 'Int'>
    readonly track: FieldRef<"stagetimeswr", 'Int'>
    readonly map: FieldRef<"stagetimeswr", 'String'>
    readonly stage: FieldRef<"stagetimeswr", 'Int'>
    readonly auth: FieldRef<"stagetimeswr", 'Int'>
    readonly time: FieldRef<"stagetimeswr", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * stagetimeswr findUnique
   */
  export type stagetimeswrFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter, which stagetimeswr to fetch.
     */
    where: stagetimeswrWhereUniqueInput
  }

  /**
   * stagetimeswr findUniqueOrThrow
   */
  export type stagetimeswrFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter, which stagetimeswr to fetch.
     */
    where: stagetimeswrWhereUniqueInput
  }

  /**
   * stagetimeswr findFirst
   */
  export type stagetimeswrFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter, which stagetimeswr to fetch.
     */
    where?: stagetimeswrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimeswrs to fetch.
     */
    orderBy?: stagetimeswrOrderByWithRelationInput | stagetimeswrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stagetimeswrs.
     */
    cursor?: stagetimeswrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimeswrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimeswrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stagetimeswrs.
     */
    distinct?: StagetimeswrScalarFieldEnum | StagetimeswrScalarFieldEnum[]
  }

  /**
   * stagetimeswr findFirstOrThrow
   */
  export type stagetimeswrFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter, which stagetimeswr to fetch.
     */
    where?: stagetimeswrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimeswrs to fetch.
     */
    orderBy?: stagetimeswrOrderByWithRelationInput | stagetimeswrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stagetimeswrs.
     */
    cursor?: stagetimeswrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimeswrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimeswrs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stagetimeswrs.
     */
    distinct?: StagetimeswrScalarFieldEnum | StagetimeswrScalarFieldEnum[]
  }

  /**
   * stagetimeswr findMany
   */
  export type stagetimeswrFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter, which stagetimeswrs to fetch.
     */
    where?: stagetimeswrWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stagetimeswrs to fetch.
     */
    orderBy?: stagetimeswrOrderByWithRelationInput | stagetimeswrOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stagetimeswrs.
     */
    cursor?: stagetimeswrWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stagetimeswrs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stagetimeswrs.
     */
    skip?: number
    distinct?: StagetimeswrScalarFieldEnum | StagetimeswrScalarFieldEnum[]
  }

  /**
   * stagetimeswr create
   */
  export type stagetimeswrCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * The data needed to create a stagetimeswr.
     */
    data: XOR<stagetimeswrCreateInput, stagetimeswrUncheckedCreateInput>
  }

  /**
   * stagetimeswr createMany
   */
  export type stagetimeswrCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stagetimeswrs.
     */
    data: stagetimeswrCreateManyInput | stagetimeswrCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stagetimeswr update
   */
  export type stagetimeswrUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * The data needed to update a stagetimeswr.
     */
    data: XOR<stagetimeswrUpdateInput, stagetimeswrUncheckedUpdateInput>
    /**
     * Choose, which stagetimeswr to update.
     */
    where: stagetimeswrWhereUniqueInput
  }

  /**
   * stagetimeswr updateMany
   */
  export type stagetimeswrUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stagetimeswrs.
     */
    data: XOR<stagetimeswrUpdateManyMutationInput, stagetimeswrUncheckedUpdateManyInput>
    /**
     * Filter which stagetimeswrs to update
     */
    where?: stagetimeswrWhereInput
    /**
     * Limit how many stagetimeswrs to update.
     */
    limit?: number
  }

  /**
   * stagetimeswr upsert
   */
  export type stagetimeswrUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * The filter to search for the stagetimeswr to update in case it exists.
     */
    where: stagetimeswrWhereUniqueInput
    /**
     * In case the stagetimeswr found by the `where` argument doesn't exist, create a new stagetimeswr with this data.
     */
    create: XOR<stagetimeswrCreateInput, stagetimeswrUncheckedCreateInput>
    /**
     * In case the stagetimeswr was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stagetimeswrUpdateInput, stagetimeswrUncheckedUpdateInput>
  }

  /**
   * stagetimeswr delete
   */
  export type stagetimeswrDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
    /**
     * Filter which stagetimeswr to delete.
     */
    where: stagetimeswrWhereUniqueInput
  }

  /**
   * stagetimeswr deleteMany
   */
  export type stagetimeswrDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stagetimeswrs to delete
     */
    where?: stagetimeswrWhereInput
    /**
     * Limit how many stagetimeswrs to delete.
     */
    limit?: number
  }

  /**
   * stagetimeswr without action
   */
  export type stagetimeswrDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stagetimeswr
     */
    select?: stagetimeswrSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stagetimeswr
     */
    omit?: stagetimeswrOmit<ExtArgs> | null
  }


  /**
   * Model startpositions
   */

  export type AggregateStartpositions = {
    _count: StartpositionsCountAggregateOutputType | null
    _avg: StartpositionsAvgAggregateOutputType | null
    _sum: StartpositionsSumAggregateOutputType | null
    _min: StartpositionsMinAggregateOutputType | null
    _max: StartpositionsMaxAggregateOutputType | null
  }

  export type StartpositionsAvgAggregateOutputType = {
    auth: number | null
    track: number | null
    pos_x: number | null
    pos_y: number | null
    pos_z: number | null
    ang_x: number | null
    ang_y: number | null
    ang_z: number | null
  }

  export type StartpositionsSumAggregateOutputType = {
    auth: number | null
    track: number | null
    pos_x: number | null
    pos_y: number | null
    pos_z: number | null
    ang_x: number | null
    ang_y: number | null
    ang_z: number | null
  }

  export type StartpositionsMinAggregateOutputType = {
    auth: number | null
    track: number | null
    map: string | null
    pos_x: number | null
    pos_y: number | null
    pos_z: number | null
    ang_x: number | null
    ang_y: number | null
    ang_z: number | null
    angles_only: boolean | null
  }

  export type StartpositionsMaxAggregateOutputType = {
    auth: number | null
    track: number | null
    map: string | null
    pos_x: number | null
    pos_y: number | null
    pos_z: number | null
    ang_x: number | null
    ang_y: number | null
    ang_z: number | null
    angles_only: boolean | null
  }

  export type StartpositionsCountAggregateOutputType = {
    auth: number
    track: number
    map: number
    pos_x: number
    pos_y: number
    pos_z: number
    ang_x: number
    ang_y: number
    ang_z: number
    angles_only: number
    _all: number
  }


  export type StartpositionsAvgAggregateInputType = {
    auth?: true
    track?: true
    pos_x?: true
    pos_y?: true
    pos_z?: true
    ang_x?: true
    ang_y?: true
    ang_z?: true
  }

  export type StartpositionsSumAggregateInputType = {
    auth?: true
    track?: true
    pos_x?: true
    pos_y?: true
    pos_z?: true
    ang_x?: true
    ang_y?: true
    ang_z?: true
  }

  export type StartpositionsMinAggregateInputType = {
    auth?: true
    track?: true
    map?: true
    pos_x?: true
    pos_y?: true
    pos_z?: true
    ang_x?: true
    ang_y?: true
    ang_z?: true
    angles_only?: true
  }

  export type StartpositionsMaxAggregateInputType = {
    auth?: true
    track?: true
    map?: true
    pos_x?: true
    pos_y?: true
    pos_z?: true
    ang_x?: true
    ang_y?: true
    ang_z?: true
    angles_only?: true
  }

  export type StartpositionsCountAggregateInputType = {
    auth?: true
    track?: true
    map?: true
    pos_x?: true
    pos_y?: true
    pos_z?: true
    ang_x?: true
    ang_y?: true
    ang_z?: true
    angles_only?: true
    _all?: true
  }

  export type StartpositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startpositions to aggregate.
     */
    where?: startpositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startpositions to fetch.
     */
    orderBy?: startpositionsOrderByWithRelationInput | startpositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: startpositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startpositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startpositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned startpositions
    **/
    _count?: true | StartpositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StartpositionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StartpositionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StartpositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StartpositionsMaxAggregateInputType
  }

  export type GetStartpositionsAggregateType<T extends StartpositionsAggregateArgs> = {
        [P in keyof T & keyof AggregateStartpositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartpositions[P]>
      : GetScalarType<T[P], AggregateStartpositions[P]>
  }




  export type startpositionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: startpositionsWhereInput
    orderBy?: startpositionsOrderByWithAggregationInput | startpositionsOrderByWithAggregationInput[]
    by: StartpositionsScalarFieldEnum[] | StartpositionsScalarFieldEnum
    having?: startpositionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StartpositionsCountAggregateInputType | true
    _avg?: StartpositionsAvgAggregateInputType
    _sum?: StartpositionsSumAggregateInputType
    _min?: StartpositionsMinAggregateInputType
    _max?: StartpositionsMaxAggregateInputType
  }

  export type StartpositionsGroupByOutputType = {
    auth: number
    track: number
    map: string
    pos_x: number | null
    pos_y: number | null
    pos_z: number | null
    ang_x: number | null
    ang_y: number | null
    ang_z: number | null
    angles_only: boolean | null
    _count: StartpositionsCountAggregateOutputType | null
    _avg: StartpositionsAvgAggregateOutputType | null
    _sum: StartpositionsSumAggregateOutputType | null
    _min: StartpositionsMinAggregateOutputType | null
    _max: StartpositionsMaxAggregateOutputType | null
  }

  type GetStartpositionsGroupByPayload<T extends startpositionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartpositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StartpositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StartpositionsGroupByOutputType[P]>
            : GetScalarType<T[P], StartpositionsGroupByOutputType[P]>
        }
      >
    >


  export type startpositionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auth?: boolean
    track?: boolean
    map?: boolean
    pos_x?: boolean
    pos_y?: boolean
    pos_z?: boolean
    ang_x?: boolean
    ang_y?: boolean
    ang_z?: boolean
    angles_only?: boolean
  }, ExtArgs["result"]["startpositions"]>



  export type startpositionsSelectScalar = {
    auth?: boolean
    track?: boolean
    map?: boolean
    pos_x?: boolean
    pos_y?: boolean
    pos_z?: boolean
    ang_x?: boolean
    ang_y?: boolean
    ang_z?: boolean
    angles_only?: boolean
  }

  export type startpositionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"auth" | "track" | "map" | "pos_x" | "pos_y" | "pos_z" | "ang_x" | "ang_y" | "ang_z" | "angles_only", ExtArgs["result"]["startpositions"]>

  export type $startpositionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "startpositions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auth: number
      track: number
      map: string
      pos_x: number | null
      pos_y: number | null
      pos_z: number | null
      ang_x: number | null
      ang_y: number | null
      ang_z: number | null
      angles_only: boolean | null
    }, ExtArgs["result"]["startpositions"]>
    composites: {}
  }

  type startpositionsGetPayload<S extends boolean | null | undefined | startpositionsDefaultArgs> = $Result.GetResult<Prisma.$startpositionsPayload, S>

  type startpositionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<startpositionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StartpositionsCountAggregateInputType | true
    }

  export interface startpositionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['startpositions'], meta: { name: 'startpositions' } }
    /**
     * Find zero or one Startpositions that matches the filter.
     * @param {startpositionsFindUniqueArgs} args - Arguments to find a Startpositions
     * @example
     * // Get one Startpositions
     * const startpositions = await prisma.startpositions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends startpositionsFindUniqueArgs>(args: SelectSubset<T, startpositionsFindUniqueArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Startpositions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {startpositionsFindUniqueOrThrowArgs} args - Arguments to find a Startpositions
     * @example
     * // Get one Startpositions
     * const startpositions = await prisma.startpositions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends startpositionsFindUniqueOrThrowArgs>(args: SelectSubset<T, startpositionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startpositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsFindFirstArgs} args - Arguments to find a Startpositions
     * @example
     * // Get one Startpositions
     * const startpositions = await prisma.startpositions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends startpositionsFindFirstArgs>(args?: SelectSubset<T, startpositionsFindFirstArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Startpositions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsFindFirstOrThrowArgs} args - Arguments to find a Startpositions
     * @example
     * // Get one Startpositions
     * const startpositions = await prisma.startpositions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends startpositionsFindFirstOrThrowArgs>(args?: SelectSubset<T, startpositionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Startpositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Startpositions
     * const startpositions = await prisma.startpositions.findMany()
     * 
     * // Get first 10 Startpositions
     * const startpositions = await prisma.startpositions.findMany({ take: 10 })
     * 
     * // Only select the `auth`
     * const startpositionsWithAuthOnly = await prisma.startpositions.findMany({ select: { auth: true } })
     * 
     */
    findMany<T extends startpositionsFindManyArgs>(args?: SelectSubset<T, startpositionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Startpositions.
     * @param {startpositionsCreateArgs} args - Arguments to create a Startpositions.
     * @example
     * // Create one Startpositions
     * const Startpositions = await prisma.startpositions.create({
     *   data: {
     *     // ... data to create a Startpositions
     *   }
     * })
     * 
     */
    create<T extends startpositionsCreateArgs>(args: SelectSubset<T, startpositionsCreateArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Startpositions.
     * @param {startpositionsCreateManyArgs} args - Arguments to create many Startpositions.
     * @example
     * // Create many Startpositions
     * const startpositions = await prisma.startpositions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends startpositionsCreateManyArgs>(args?: SelectSubset<T, startpositionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Startpositions.
     * @param {startpositionsDeleteArgs} args - Arguments to delete one Startpositions.
     * @example
     * // Delete one Startpositions
     * const Startpositions = await prisma.startpositions.delete({
     *   where: {
     *     // ... filter to delete one Startpositions
     *   }
     * })
     * 
     */
    delete<T extends startpositionsDeleteArgs>(args: SelectSubset<T, startpositionsDeleteArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Startpositions.
     * @param {startpositionsUpdateArgs} args - Arguments to update one Startpositions.
     * @example
     * // Update one Startpositions
     * const startpositions = await prisma.startpositions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends startpositionsUpdateArgs>(args: SelectSubset<T, startpositionsUpdateArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Startpositions.
     * @param {startpositionsDeleteManyArgs} args - Arguments to filter Startpositions to delete.
     * @example
     * // Delete a few Startpositions
     * const { count } = await prisma.startpositions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends startpositionsDeleteManyArgs>(args?: SelectSubset<T, startpositionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Startpositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Startpositions
     * const startpositions = await prisma.startpositions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends startpositionsUpdateManyArgs>(args: SelectSubset<T, startpositionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Startpositions.
     * @param {startpositionsUpsertArgs} args - Arguments to update or create a Startpositions.
     * @example
     * // Update or create a Startpositions
     * const startpositions = await prisma.startpositions.upsert({
     *   create: {
     *     // ... data to create a Startpositions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Startpositions we want to update
     *   }
     * })
     */
    upsert<T extends startpositionsUpsertArgs>(args: SelectSubset<T, startpositionsUpsertArgs<ExtArgs>>): Prisma__startpositionsClient<$Result.GetResult<Prisma.$startpositionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Startpositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsCountArgs} args - Arguments to filter Startpositions to count.
     * @example
     * // Count the number of Startpositions
     * const count = await prisma.startpositions.count({
     *   where: {
     *     // ... the filter for the Startpositions we want to count
     *   }
     * })
    **/
    count<T extends startpositionsCountArgs>(
      args?: Subset<T, startpositionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartpositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Startpositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartpositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StartpositionsAggregateArgs>(args: Subset<T, StartpositionsAggregateArgs>): Prisma.PrismaPromise<GetStartpositionsAggregateType<T>>

    /**
     * Group by Startpositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {startpositionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends startpositionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: startpositionsGroupByArgs['orderBy'] }
        : { orderBy?: startpositionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, startpositionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartpositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the startpositions model
   */
  readonly fields: startpositionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for startpositions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__startpositionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the startpositions model
   */
  interface startpositionsFieldRefs {
    readonly auth: FieldRef<"startpositions", 'Int'>
    readonly track: FieldRef<"startpositions", 'Int'>
    readonly map: FieldRef<"startpositions", 'String'>
    readonly pos_x: FieldRef<"startpositions", 'Float'>
    readonly pos_y: FieldRef<"startpositions", 'Float'>
    readonly pos_z: FieldRef<"startpositions", 'Float'>
    readonly ang_x: FieldRef<"startpositions", 'Float'>
    readonly ang_y: FieldRef<"startpositions", 'Float'>
    readonly ang_z: FieldRef<"startpositions", 'Float'>
    readonly angles_only: FieldRef<"startpositions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * startpositions findUnique
   */
  export type startpositionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter, which startpositions to fetch.
     */
    where: startpositionsWhereUniqueInput
  }

  /**
   * startpositions findUniqueOrThrow
   */
  export type startpositionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter, which startpositions to fetch.
     */
    where: startpositionsWhereUniqueInput
  }

  /**
   * startpositions findFirst
   */
  export type startpositionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter, which startpositions to fetch.
     */
    where?: startpositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startpositions to fetch.
     */
    orderBy?: startpositionsOrderByWithRelationInput | startpositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for startpositions.
     */
    cursor?: startpositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startpositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startpositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of startpositions.
     */
    distinct?: StartpositionsScalarFieldEnum | StartpositionsScalarFieldEnum[]
  }

  /**
   * startpositions findFirstOrThrow
   */
  export type startpositionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter, which startpositions to fetch.
     */
    where?: startpositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startpositions to fetch.
     */
    orderBy?: startpositionsOrderByWithRelationInput | startpositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for startpositions.
     */
    cursor?: startpositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startpositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startpositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of startpositions.
     */
    distinct?: StartpositionsScalarFieldEnum | StartpositionsScalarFieldEnum[]
  }

  /**
   * startpositions findMany
   */
  export type startpositionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter, which startpositions to fetch.
     */
    where?: startpositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of startpositions to fetch.
     */
    orderBy?: startpositionsOrderByWithRelationInput | startpositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing startpositions.
     */
    cursor?: startpositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` startpositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` startpositions.
     */
    skip?: number
    distinct?: StartpositionsScalarFieldEnum | StartpositionsScalarFieldEnum[]
  }

  /**
   * startpositions create
   */
  export type startpositionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * The data needed to create a startpositions.
     */
    data: XOR<startpositionsCreateInput, startpositionsUncheckedCreateInput>
  }

  /**
   * startpositions createMany
   */
  export type startpositionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many startpositions.
     */
    data: startpositionsCreateManyInput | startpositionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * startpositions update
   */
  export type startpositionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * The data needed to update a startpositions.
     */
    data: XOR<startpositionsUpdateInput, startpositionsUncheckedUpdateInput>
    /**
     * Choose, which startpositions to update.
     */
    where: startpositionsWhereUniqueInput
  }

  /**
   * startpositions updateMany
   */
  export type startpositionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update startpositions.
     */
    data: XOR<startpositionsUpdateManyMutationInput, startpositionsUncheckedUpdateManyInput>
    /**
     * Filter which startpositions to update
     */
    where?: startpositionsWhereInput
    /**
     * Limit how many startpositions to update.
     */
    limit?: number
  }

  /**
   * startpositions upsert
   */
  export type startpositionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * The filter to search for the startpositions to update in case it exists.
     */
    where: startpositionsWhereUniqueInput
    /**
     * In case the startpositions found by the `where` argument doesn't exist, create a new startpositions with this data.
     */
    create: XOR<startpositionsCreateInput, startpositionsUncheckedCreateInput>
    /**
     * In case the startpositions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<startpositionsUpdateInput, startpositionsUncheckedUpdateInput>
  }

  /**
   * startpositions delete
   */
  export type startpositionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
    /**
     * Filter which startpositions to delete.
     */
    where: startpositionsWhereUniqueInput
  }

  /**
   * startpositions deleteMany
   */
  export type startpositionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which startpositions to delete
     */
    where?: startpositionsWhereInput
    /**
     * Limit how many startpositions to delete.
     */
    limit?: number
  }

  /**
   * startpositions without action
   */
  export type startpositionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the startpositions
     */
    select?: startpositionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the startpositions
     */
    omit?: startpositionsOmit<ExtArgs> | null
  }


  /**
   * Model styleplaytime
   */

  export type AggregateStyleplaytime = {
    _count: StyleplaytimeCountAggregateOutputType | null
    _avg: StyleplaytimeAvgAggregateOutputType | null
    _sum: StyleplaytimeSumAggregateOutputType | null
    _min: StyleplaytimeMinAggregateOutputType | null
    _max: StyleplaytimeMaxAggregateOutputType | null
  }

  export type StyleplaytimeAvgAggregateOutputType = {
    auth: number | null
    style: number | null
    playtime: number | null
  }

  export type StyleplaytimeSumAggregateOutputType = {
    auth: number | null
    style: number | null
    playtime: number | null
  }

  export type StyleplaytimeMinAggregateOutputType = {
    auth: number | null
    style: number | null
    playtime: number | null
  }

  export type StyleplaytimeMaxAggregateOutputType = {
    auth: number | null
    style: number | null
    playtime: number | null
  }

  export type StyleplaytimeCountAggregateOutputType = {
    auth: number
    style: number
    playtime: number
    _all: number
  }


  export type StyleplaytimeAvgAggregateInputType = {
    auth?: true
    style?: true
    playtime?: true
  }

  export type StyleplaytimeSumAggregateInputType = {
    auth?: true
    style?: true
    playtime?: true
  }

  export type StyleplaytimeMinAggregateInputType = {
    auth?: true
    style?: true
    playtime?: true
  }

  export type StyleplaytimeMaxAggregateInputType = {
    auth?: true
    style?: true
    playtime?: true
  }

  export type StyleplaytimeCountAggregateInputType = {
    auth?: true
    style?: true
    playtime?: true
    _all?: true
  }

  export type StyleplaytimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which styleplaytime to aggregate.
     */
    where?: styleplaytimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styleplaytimes to fetch.
     */
    orderBy?: styleplaytimeOrderByWithRelationInput | styleplaytimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: styleplaytimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styleplaytimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styleplaytimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned styleplaytimes
    **/
    _count?: true | StyleplaytimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StyleplaytimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StyleplaytimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StyleplaytimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StyleplaytimeMaxAggregateInputType
  }

  export type GetStyleplaytimeAggregateType<T extends StyleplaytimeAggregateArgs> = {
        [P in keyof T & keyof AggregateStyleplaytime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStyleplaytime[P]>
      : GetScalarType<T[P], AggregateStyleplaytime[P]>
  }




  export type styleplaytimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: styleplaytimeWhereInput
    orderBy?: styleplaytimeOrderByWithAggregationInput | styleplaytimeOrderByWithAggregationInput[]
    by: StyleplaytimeScalarFieldEnum[] | StyleplaytimeScalarFieldEnum
    having?: styleplaytimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StyleplaytimeCountAggregateInputType | true
    _avg?: StyleplaytimeAvgAggregateInputType
    _sum?: StyleplaytimeSumAggregateInputType
    _min?: StyleplaytimeMinAggregateInputType
    _max?: StyleplaytimeMaxAggregateInputType
  }

  export type StyleplaytimeGroupByOutputType = {
    auth: number
    style: number
    playtime: number
    _count: StyleplaytimeCountAggregateOutputType | null
    _avg: StyleplaytimeAvgAggregateOutputType | null
    _sum: StyleplaytimeSumAggregateOutputType | null
    _min: StyleplaytimeMinAggregateOutputType | null
    _max: StyleplaytimeMaxAggregateOutputType | null
  }

  type GetStyleplaytimeGroupByPayload<T extends styleplaytimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StyleplaytimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StyleplaytimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StyleplaytimeGroupByOutputType[P]>
            : GetScalarType<T[P], StyleplaytimeGroupByOutputType[P]>
        }
      >
    >


  export type styleplaytimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auth?: boolean
    style?: boolean
    playtime?: boolean
  }, ExtArgs["result"]["styleplaytime"]>



  export type styleplaytimeSelectScalar = {
    auth?: boolean
    style?: boolean
    playtime?: boolean
  }

  export type styleplaytimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"auth" | "style" | "playtime", ExtArgs["result"]["styleplaytime"]>

  export type $styleplaytimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "styleplaytime"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      auth: number
      style: number
      playtime: number
    }, ExtArgs["result"]["styleplaytime"]>
    composites: {}
  }

  type styleplaytimeGetPayload<S extends boolean | null | undefined | styleplaytimeDefaultArgs> = $Result.GetResult<Prisma.$styleplaytimePayload, S>

  type styleplaytimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<styleplaytimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StyleplaytimeCountAggregateInputType | true
    }

  export interface styleplaytimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['styleplaytime'], meta: { name: 'styleplaytime' } }
    /**
     * Find zero or one Styleplaytime that matches the filter.
     * @param {styleplaytimeFindUniqueArgs} args - Arguments to find a Styleplaytime
     * @example
     * // Get one Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends styleplaytimeFindUniqueArgs>(args: SelectSubset<T, styleplaytimeFindUniqueArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Styleplaytime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {styleplaytimeFindUniqueOrThrowArgs} args - Arguments to find a Styleplaytime
     * @example
     * // Get one Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends styleplaytimeFindUniqueOrThrowArgs>(args: SelectSubset<T, styleplaytimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Styleplaytime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeFindFirstArgs} args - Arguments to find a Styleplaytime
     * @example
     * // Get one Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends styleplaytimeFindFirstArgs>(args?: SelectSubset<T, styleplaytimeFindFirstArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Styleplaytime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeFindFirstOrThrowArgs} args - Arguments to find a Styleplaytime
     * @example
     * // Get one Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends styleplaytimeFindFirstOrThrowArgs>(args?: SelectSubset<T, styleplaytimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Styleplaytimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Styleplaytimes
     * const styleplaytimes = await prisma.styleplaytime.findMany()
     * 
     * // Get first 10 Styleplaytimes
     * const styleplaytimes = await prisma.styleplaytime.findMany({ take: 10 })
     * 
     * // Only select the `auth`
     * const styleplaytimeWithAuthOnly = await prisma.styleplaytime.findMany({ select: { auth: true } })
     * 
     */
    findMany<T extends styleplaytimeFindManyArgs>(args?: SelectSubset<T, styleplaytimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Styleplaytime.
     * @param {styleplaytimeCreateArgs} args - Arguments to create a Styleplaytime.
     * @example
     * // Create one Styleplaytime
     * const Styleplaytime = await prisma.styleplaytime.create({
     *   data: {
     *     // ... data to create a Styleplaytime
     *   }
     * })
     * 
     */
    create<T extends styleplaytimeCreateArgs>(args: SelectSubset<T, styleplaytimeCreateArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Styleplaytimes.
     * @param {styleplaytimeCreateManyArgs} args - Arguments to create many Styleplaytimes.
     * @example
     * // Create many Styleplaytimes
     * const styleplaytime = await prisma.styleplaytime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends styleplaytimeCreateManyArgs>(args?: SelectSubset<T, styleplaytimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Styleplaytime.
     * @param {styleplaytimeDeleteArgs} args - Arguments to delete one Styleplaytime.
     * @example
     * // Delete one Styleplaytime
     * const Styleplaytime = await prisma.styleplaytime.delete({
     *   where: {
     *     // ... filter to delete one Styleplaytime
     *   }
     * })
     * 
     */
    delete<T extends styleplaytimeDeleteArgs>(args: SelectSubset<T, styleplaytimeDeleteArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Styleplaytime.
     * @param {styleplaytimeUpdateArgs} args - Arguments to update one Styleplaytime.
     * @example
     * // Update one Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends styleplaytimeUpdateArgs>(args: SelectSubset<T, styleplaytimeUpdateArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Styleplaytimes.
     * @param {styleplaytimeDeleteManyArgs} args - Arguments to filter Styleplaytimes to delete.
     * @example
     * // Delete a few Styleplaytimes
     * const { count } = await prisma.styleplaytime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends styleplaytimeDeleteManyArgs>(args?: SelectSubset<T, styleplaytimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Styleplaytimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Styleplaytimes
     * const styleplaytime = await prisma.styleplaytime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends styleplaytimeUpdateManyArgs>(args: SelectSubset<T, styleplaytimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Styleplaytime.
     * @param {styleplaytimeUpsertArgs} args - Arguments to update or create a Styleplaytime.
     * @example
     * // Update or create a Styleplaytime
     * const styleplaytime = await prisma.styleplaytime.upsert({
     *   create: {
     *     // ... data to create a Styleplaytime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Styleplaytime we want to update
     *   }
     * })
     */
    upsert<T extends styleplaytimeUpsertArgs>(args: SelectSubset<T, styleplaytimeUpsertArgs<ExtArgs>>): Prisma__styleplaytimeClient<$Result.GetResult<Prisma.$styleplaytimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Styleplaytimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeCountArgs} args - Arguments to filter Styleplaytimes to count.
     * @example
     * // Count the number of Styleplaytimes
     * const count = await prisma.styleplaytime.count({
     *   where: {
     *     // ... the filter for the Styleplaytimes we want to count
     *   }
     * })
    **/
    count<T extends styleplaytimeCountArgs>(
      args?: Subset<T, styleplaytimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StyleplaytimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Styleplaytime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleplaytimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StyleplaytimeAggregateArgs>(args: Subset<T, StyleplaytimeAggregateArgs>): Prisma.PrismaPromise<GetStyleplaytimeAggregateType<T>>

    /**
     * Group by Styleplaytime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleplaytimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends styleplaytimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: styleplaytimeGroupByArgs['orderBy'] }
        : { orderBy?: styleplaytimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, styleplaytimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStyleplaytimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the styleplaytime model
   */
  readonly fields: styleplaytimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for styleplaytime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__styleplaytimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the styleplaytime model
   */
  interface styleplaytimeFieldRefs {
    readonly auth: FieldRef<"styleplaytime", 'Int'>
    readonly style: FieldRef<"styleplaytime", 'Int'>
    readonly playtime: FieldRef<"styleplaytime", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * styleplaytime findUnique
   */
  export type styleplaytimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter, which styleplaytime to fetch.
     */
    where: styleplaytimeWhereUniqueInput
  }

  /**
   * styleplaytime findUniqueOrThrow
   */
  export type styleplaytimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter, which styleplaytime to fetch.
     */
    where: styleplaytimeWhereUniqueInput
  }

  /**
   * styleplaytime findFirst
   */
  export type styleplaytimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter, which styleplaytime to fetch.
     */
    where?: styleplaytimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styleplaytimes to fetch.
     */
    orderBy?: styleplaytimeOrderByWithRelationInput | styleplaytimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for styleplaytimes.
     */
    cursor?: styleplaytimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styleplaytimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styleplaytimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of styleplaytimes.
     */
    distinct?: StyleplaytimeScalarFieldEnum | StyleplaytimeScalarFieldEnum[]
  }

  /**
   * styleplaytime findFirstOrThrow
   */
  export type styleplaytimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter, which styleplaytime to fetch.
     */
    where?: styleplaytimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styleplaytimes to fetch.
     */
    orderBy?: styleplaytimeOrderByWithRelationInput | styleplaytimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for styleplaytimes.
     */
    cursor?: styleplaytimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styleplaytimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styleplaytimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of styleplaytimes.
     */
    distinct?: StyleplaytimeScalarFieldEnum | StyleplaytimeScalarFieldEnum[]
  }

  /**
   * styleplaytime findMany
   */
  export type styleplaytimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter, which styleplaytimes to fetch.
     */
    where?: styleplaytimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styleplaytimes to fetch.
     */
    orderBy?: styleplaytimeOrderByWithRelationInput | styleplaytimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing styleplaytimes.
     */
    cursor?: styleplaytimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styleplaytimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styleplaytimes.
     */
    skip?: number
    distinct?: StyleplaytimeScalarFieldEnum | StyleplaytimeScalarFieldEnum[]
  }

  /**
   * styleplaytime create
   */
  export type styleplaytimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * The data needed to create a styleplaytime.
     */
    data: XOR<styleplaytimeCreateInput, styleplaytimeUncheckedCreateInput>
  }

  /**
   * styleplaytime createMany
   */
  export type styleplaytimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many styleplaytimes.
     */
    data: styleplaytimeCreateManyInput | styleplaytimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * styleplaytime update
   */
  export type styleplaytimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * The data needed to update a styleplaytime.
     */
    data: XOR<styleplaytimeUpdateInput, styleplaytimeUncheckedUpdateInput>
    /**
     * Choose, which styleplaytime to update.
     */
    where: styleplaytimeWhereUniqueInput
  }

  /**
   * styleplaytime updateMany
   */
  export type styleplaytimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update styleplaytimes.
     */
    data: XOR<styleplaytimeUpdateManyMutationInput, styleplaytimeUncheckedUpdateManyInput>
    /**
     * Filter which styleplaytimes to update
     */
    where?: styleplaytimeWhereInput
    /**
     * Limit how many styleplaytimes to update.
     */
    limit?: number
  }

  /**
   * styleplaytime upsert
   */
  export type styleplaytimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * The filter to search for the styleplaytime to update in case it exists.
     */
    where: styleplaytimeWhereUniqueInput
    /**
     * In case the styleplaytime found by the `where` argument doesn't exist, create a new styleplaytime with this data.
     */
    create: XOR<styleplaytimeCreateInput, styleplaytimeUncheckedCreateInput>
    /**
     * In case the styleplaytime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<styleplaytimeUpdateInput, styleplaytimeUncheckedUpdateInput>
  }

  /**
   * styleplaytime delete
   */
  export type styleplaytimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
    /**
     * Filter which styleplaytime to delete.
     */
    where: styleplaytimeWhereUniqueInput
  }

  /**
   * styleplaytime deleteMany
   */
  export type styleplaytimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which styleplaytimes to delete
     */
    where?: styleplaytimeWhereInput
    /**
     * Limit how many styleplaytimes to delete.
     */
    limit?: number
  }

  /**
   * styleplaytime without action
   */
  export type styleplaytimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the styleplaytime
     */
    select?: styleplaytimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the styleplaytime
     */
    omit?: styleplaytimeOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    auth: number | null
    ip: number | null
    lastlogin: number | null
    points: number | null
    playtime: number | null
  }

  export type UsersSumAggregateOutputType = {
    auth: number | null
    ip: number | null
    lastlogin: number | null
    points: number | null
    playtime: number | null
  }

  export type UsersMinAggregateOutputType = {
    auth: number | null
    name: string | null
    ip: number | null
    lastlogin: number | null
    points: number | null
    playtime: number | null
  }

  export type UsersMaxAggregateOutputType = {
    auth: number | null
    name: string | null
    ip: number | null
    lastlogin: number | null
    points: number | null
    playtime: number | null
  }

  export type UsersCountAggregateOutputType = {
    auth: number
    name: number
    ip: number
    lastlogin: number
    points: number
    playtime: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    auth?: true
    ip?: true
    lastlogin?: true
    points?: true
    playtime?: true
  }

  export type UsersSumAggregateInputType = {
    auth?: true
    ip?: true
    lastlogin?: true
    points?: true
    playtime?: true
  }

  export type UsersMinAggregateInputType = {
    auth?: true
    name?: true
    ip?: true
    lastlogin?: true
    points?: true
    playtime?: true
  }

  export type UsersMaxAggregateInputType = {
    auth?: true
    name?: true
    ip?: true
    lastlogin?: true
    points?: true
    playtime?: true
  }

  export type UsersCountAggregateInputType = {
    auth?: true
    name?: true
    ip?: true
    lastlogin?: true
    points?: true
    playtime?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    auth: number
    name: string | null
    ip: number | null
    lastlogin: number
    points: number
    playtime: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    auth?: boolean
    name?: boolean
    ip?: boolean
    lastlogin?: boolean
    points?: boolean
    playtime?: boolean
    playertimes?: boolean | users$playertimesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    auth?: boolean
    name?: boolean
    ip?: boolean
    lastlogin?: boolean
    points?: boolean
    playtime?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"auth" | "name" | "ip" | "lastlogin" | "points" | "playtime", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playertimes?: boolean | users$playertimesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      playertimes: Prisma.$playertimesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      auth: number
      name: string | null
      ip: number | null
      lastlogin: number
      points: number
      playtime: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `auth`
     * const usersWithAuthOnly = await prisma.users.findMany({ select: { auth: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playertimes<T extends users$playertimesArgs<ExtArgs> = {}>(args?: Subset<T, users$playertimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$playertimesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly auth: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly ip: FieldRef<"users", 'Int'>
    readonly lastlogin: FieldRef<"users", 'Int'>
    readonly points: FieldRef<"users", 'Float'>
    readonly playtime: FieldRef<"users", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.playertimes
   */
  export type users$playertimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the playertimes
     */
    select?: playertimesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the playertimes
     */
    omit?: playertimesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: playertimesInclude<ExtArgs> | null
    where?: playertimesWhereInput
    orderBy?: playertimesOrderByWithRelationInput | playertimesOrderByWithRelationInput[]
    cursor?: playertimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayertimesScalarFieldEnum | PlayertimesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatScalarFieldEnum: {
    auth: 'auth',
    name: 'name',
    ccname: 'ccname',
    message: 'message',
    ccmessage: 'ccmessage',
    ccaccess: 'ccaccess'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MaptiersScalarFieldEnum: {
    map: 'map',
    tier: 'tier',
    possible_on_400vel: 'possible_on_400vel',
    possible_on_scroll: 'possible_on_scroll',
    possible_on_stamina: 'possible_on_stamina'
  };

  export type MaptiersScalarFieldEnum = (typeof MaptiersScalarFieldEnum)[keyof typeof MaptiersScalarFieldEnum]


  export const MapzonesScalarFieldEnum: {
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

  export type MapzonesScalarFieldEnum = (typeof MapzonesScalarFieldEnum)[keyof typeof MapzonesScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    code: 'code'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const PlayertimesScalarFieldEnum: {
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

  export type PlayertimesScalarFieldEnum = (typeof PlayertimesScalarFieldEnum)[keyof typeof PlayertimesScalarFieldEnum]


  export const StagetimespbScalarFieldEnum: {
    style: 'style',
    track: 'track',
    map: 'map',
    stage: 'stage',
    auth: 'auth',
    time: 'time'
  };

  export type StagetimespbScalarFieldEnum = (typeof StagetimespbScalarFieldEnum)[keyof typeof StagetimespbScalarFieldEnum]


  export const StagetimeswrScalarFieldEnum: {
    style: 'style',
    track: 'track',
    map: 'map',
    stage: 'stage',
    auth: 'auth',
    time: 'time'
  };

  export type StagetimeswrScalarFieldEnum = (typeof StagetimeswrScalarFieldEnum)[keyof typeof StagetimeswrScalarFieldEnum]


  export const StartpositionsScalarFieldEnum: {
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

  export type StartpositionsScalarFieldEnum = (typeof StartpositionsScalarFieldEnum)[keyof typeof StartpositionsScalarFieldEnum]


  export const StyleplaytimeScalarFieldEnum: {
    auth: 'auth',
    style: 'style',
    playtime: 'playtime'
  };

  export type StyleplaytimeScalarFieldEnum = (typeof StyleplaytimeScalarFieldEnum)[keyof typeof StyleplaytimeScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    auth: 'auth',
    name: 'name',
    ip: 'ip',
    lastlogin: 'lastlogin',
    points: 'points',
    playtime: 'playtime'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const chatOrderByRelevanceFieldEnum: {
    ccname: 'ccname',
    ccmessage: 'ccmessage'
  };

  export type chatOrderByRelevanceFieldEnum = (typeof chatOrderByRelevanceFieldEnum)[keyof typeof chatOrderByRelevanceFieldEnum]


  export const maptiersOrderByRelevanceFieldEnum: {
    map: 'map'
  };

  export type maptiersOrderByRelevanceFieldEnum = (typeof maptiersOrderByRelevanceFieldEnum)[keyof typeof maptiersOrderByRelevanceFieldEnum]


  export const mapzonesOrderByRelevanceFieldEnum: {
    map: 'map',
    target: 'target'
  };

  export type mapzonesOrderByRelevanceFieldEnum = (typeof mapzonesOrderByRelevanceFieldEnum)[keyof typeof mapzonesOrderByRelevanceFieldEnum]


  export const playertimesOrderByRelevanceFieldEnum: {
    map: 'map'
  };

  export type playertimesOrderByRelevanceFieldEnum = (typeof playertimesOrderByRelevanceFieldEnum)[keyof typeof playertimesOrderByRelevanceFieldEnum]


  export const stagetimespbOrderByRelevanceFieldEnum: {
    map: 'map'
  };

  export type stagetimespbOrderByRelevanceFieldEnum = (typeof stagetimespbOrderByRelevanceFieldEnum)[keyof typeof stagetimespbOrderByRelevanceFieldEnum]


  export const stagetimeswrOrderByRelevanceFieldEnum: {
    map: 'map'
  };

  export type stagetimeswrOrderByRelevanceFieldEnum = (typeof stagetimeswrOrderByRelevanceFieldEnum)[keyof typeof stagetimeswrOrderByRelevanceFieldEnum]


  export const startpositionsOrderByRelevanceFieldEnum: {
    map: 'map'
  };

  export type startpositionsOrderByRelevanceFieldEnum = (typeof startpositionsOrderByRelevanceFieldEnum)[keyof typeof startpositionsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    auth?: IntFilter<"chat"> | number
    name?: IntFilter<"chat"> | number
    ccname?: StringNullableFilter<"chat"> | string | null
    message?: IntFilter<"chat"> | number
    ccmessage?: StringNullableFilter<"chat"> | string | null
    ccaccess?: IntFilter<"chat"> | number
  }

  export type chatOrderByWithRelationInput = {
    auth?: SortOrder
    name?: SortOrder
    ccname?: SortOrderInput | SortOrder
    message?: SortOrder
    ccmessage?: SortOrderInput | SortOrder
    ccaccess?: SortOrder
    _relevance?: chatOrderByRelevanceInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    auth?: number
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    name?: IntFilter<"chat"> | number
    ccname?: StringNullableFilter<"chat"> | string | null
    message?: IntFilter<"chat"> | number
    ccmessage?: StringNullableFilter<"chat"> | string | null
    ccaccess?: IntFilter<"chat"> | number
  }, "auth">

  export type chatOrderByWithAggregationInput = {
    auth?: SortOrder
    name?: SortOrder
    ccname?: SortOrderInput | SortOrder
    message?: SortOrder
    ccmessage?: SortOrderInput | SortOrder
    ccaccess?: SortOrder
    _count?: chatCountOrderByAggregateInput
    _avg?: chatAvgOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
    _sum?: chatSumOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    auth?: IntWithAggregatesFilter<"chat"> | number
    name?: IntWithAggregatesFilter<"chat"> | number
    ccname?: StringNullableWithAggregatesFilter<"chat"> | string | null
    message?: IntWithAggregatesFilter<"chat"> | number
    ccmessage?: StringNullableWithAggregatesFilter<"chat"> | string | null
    ccaccess?: IntWithAggregatesFilter<"chat"> | number
  }

  export type maptiersWhereInput = {
    AND?: maptiersWhereInput | maptiersWhereInput[]
    OR?: maptiersWhereInput[]
    NOT?: maptiersWhereInput | maptiersWhereInput[]
    map?: StringFilter<"maptiers"> | string
    tier?: IntFilter<"maptiers"> | number
    possible_on_400vel?: BoolNullableFilter<"maptiers"> | boolean | null
    possible_on_scroll?: BoolNullableFilter<"maptiers"> | boolean | null
    possible_on_stamina?: BoolNullableFilter<"maptiers"> | boolean | null
  }

  export type maptiersOrderByWithRelationInput = {
    map?: SortOrder
    tier?: SortOrder
    possible_on_400vel?: SortOrderInput | SortOrder
    possible_on_scroll?: SortOrderInput | SortOrder
    possible_on_stamina?: SortOrderInput | SortOrder
    _relevance?: maptiersOrderByRelevanceInput
  }

  export type maptiersWhereUniqueInput = Prisma.AtLeast<{
    map?: string
    AND?: maptiersWhereInput | maptiersWhereInput[]
    OR?: maptiersWhereInput[]
    NOT?: maptiersWhereInput | maptiersWhereInput[]
    tier?: IntFilter<"maptiers"> | number
    possible_on_400vel?: BoolNullableFilter<"maptiers"> | boolean | null
    possible_on_scroll?: BoolNullableFilter<"maptiers"> | boolean | null
    possible_on_stamina?: BoolNullableFilter<"maptiers"> | boolean | null
  }, "map">

  export type maptiersOrderByWithAggregationInput = {
    map?: SortOrder
    tier?: SortOrder
    possible_on_400vel?: SortOrderInput | SortOrder
    possible_on_scroll?: SortOrderInput | SortOrder
    possible_on_stamina?: SortOrderInput | SortOrder
    _count?: maptiersCountOrderByAggregateInput
    _avg?: maptiersAvgOrderByAggregateInput
    _max?: maptiersMaxOrderByAggregateInput
    _min?: maptiersMinOrderByAggregateInput
    _sum?: maptiersSumOrderByAggregateInput
  }

  export type maptiersScalarWhereWithAggregatesInput = {
    AND?: maptiersScalarWhereWithAggregatesInput | maptiersScalarWhereWithAggregatesInput[]
    OR?: maptiersScalarWhereWithAggregatesInput[]
    NOT?: maptiersScalarWhereWithAggregatesInput | maptiersScalarWhereWithAggregatesInput[]
    map?: StringWithAggregatesFilter<"maptiers"> | string
    tier?: IntWithAggregatesFilter<"maptiers"> | number
    possible_on_400vel?: BoolNullableWithAggregatesFilter<"maptiers"> | boolean | null
    possible_on_scroll?: BoolNullableWithAggregatesFilter<"maptiers"> | boolean | null
    possible_on_stamina?: BoolNullableWithAggregatesFilter<"maptiers"> | boolean | null
  }

  export type mapzonesWhereInput = {
    AND?: mapzonesWhereInput | mapzonesWhereInput[]
    OR?: mapzonesWhereInput[]
    NOT?: mapzonesWhereInput | mapzonesWhereInput[]
    id?: IntFilter<"mapzones"> | number
    map?: StringFilter<"mapzones"> | string
    type?: IntNullableFilter<"mapzones"> | number | null
    corner1_x?: FloatNullableFilter<"mapzones"> | number | null
    corner1_y?: FloatNullableFilter<"mapzones"> | number | null
    corner1_z?: FloatNullableFilter<"mapzones"> | number | null
    corner2_x?: FloatNullableFilter<"mapzones"> | number | null
    corner2_y?: FloatNullableFilter<"mapzones"> | number | null
    corner2_z?: FloatNullableFilter<"mapzones"> | number | null
    destination_x?: FloatFilter<"mapzones"> | number
    destination_y?: FloatFilter<"mapzones"> | number
    destination_z?: FloatFilter<"mapzones"> | number
    track?: IntFilter<"mapzones"> | number
    flags?: IntFilter<"mapzones"> | number
    data?: IntFilter<"mapzones"> | number
    form?: IntNullableFilter<"mapzones"> | number | null
    target?: StringNullableFilter<"mapzones"> | string | null
  }

  export type mapzonesOrderByWithRelationInput = {
    id?: SortOrder
    map?: SortOrder
    type?: SortOrderInput | SortOrder
    corner1_x?: SortOrderInput | SortOrder
    corner1_y?: SortOrderInput | SortOrder
    corner1_z?: SortOrderInput | SortOrder
    corner2_x?: SortOrderInput | SortOrder
    corner2_y?: SortOrderInput | SortOrder
    corner2_z?: SortOrderInput | SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    _relevance?: mapzonesOrderByRelevanceInput
  }

  export type mapzonesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mapzonesWhereInput | mapzonesWhereInput[]
    OR?: mapzonesWhereInput[]
    NOT?: mapzonesWhereInput | mapzonesWhereInput[]
    map?: StringFilter<"mapzones"> | string
    type?: IntNullableFilter<"mapzones"> | number | null
    corner1_x?: FloatNullableFilter<"mapzones"> | number | null
    corner1_y?: FloatNullableFilter<"mapzones"> | number | null
    corner1_z?: FloatNullableFilter<"mapzones"> | number | null
    corner2_x?: FloatNullableFilter<"mapzones"> | number | null
    corner2_y?: FloatNullableFilter<"mapzones"> | number | null
    corner2_z?: FloatNullableFilter<"mapzones"> | number | null
    destination_x?: FloatFilter<"mapzones"> | number
    destination_y?: FloatFilter<"mapzones"> | number
    destination_z?: FloatFilter<"mapzones"> | number
    track?: IntFilter<"mapzones"> | number
    flags?: IntFilter<"mapzones"> | number
    data?: IntFilter<"mapzones"> | number
    form?: IntNullableFilter<"mapzones"> | number | null
    target?: StringNullableFilter<"mapzones"> | string | null
  }, "id">

  export type mapzonesOrderByWithAggregationInput = {
    id?: SortOrder
    map?: SortOrder
    type?: SortOrderInput | SortOrder
    corner1_x?: SortOrderInput | SortOrder
    corner1_y?: SortOrderInput | SortOrder
    corner1_z?: SortOrderInput | SortOrder
    corner2_x?: SortOrderInput | SortOrder
    corner2_y?: SortOrderInput | SortOrder
    corner2_z?: SortOrderInput | SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrderInput | SortOrder
    target?: SortOrderInput | SortOrder
    _count?: mapzonesCountOrderByAggregateInput
    _avg?: mapzonesAvgOrderByAggregateInput
    _max?: mapzonesMaxOrderByAggregateInput
    _min?: mapzonesMinOrderByAggregateInput
    _sum?: mapzonesSumOrderByAggregateInput
  }

  export type mapzonesScalarWhereWithAggregatesInput = {
    AND?: mapzonesScalarWhereWithAggregatesInput | mapzonesScalarWhereWithAggregatesInput[]
    OR?: mapzonesScalarWhereWithAggregatesInput[]
    NOT?: mapzonesScalarWhereWithAggregatesInput | mapzonesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mapzones"> | number
    map?: StringWithAggregatesFilter<"mapzones"> | string
    type?: IntNullableWithAggregatesFilter<"mapzones"> | number | null
    corner1_x?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    corner1_y?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    corner1_z?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    corner2_x?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    corner2_y?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    corner2_z?: FloatNullableWithAggregatesFilter<"mapzones"> | number | null
    destination_x?: FloatWithAggregatesFilter<"mapzones"> | number
    destination_y?: FloatWithAggregatesFilter<"mapzones"> | number
    destination_z?: FloatWithAggregatesFilter<"mapzones"> | number
    track?: IntWithAggregatesFilter<"mapzones"> | number
    flags?: IntWithAggregatesFilter<"mapzones"> | number
    data?: IntWithAggregatesFilter<"mapzones"> | number
    form?: IntNullableWithAggregatesFilter<"mapzones"> | number | null
    target?: StringNullableWithAggregatesFilter<"mapzones"> | string | null
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    code?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    code?: SortOrder
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
  }, "code">

  export type migrationsOrderByWithAggregationInput = {
    code?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type playertimesWhereInput = {
    AND?: playertimesWhereInput | playertimesWhereInput[]
    OR?: playertimesWhereInput[]
    NOT?: playertimesWhereInput | playertimesWhereInput[]
    id?: IntFilter<"playertimes"> | number
    style?: IntFilter<"playertimes"> | number
    track?: IntFilter<"playertimes"> | number
    time?: FloatFilter<"playertimes"> | number
    auth?: IntNullableFilter<"playertimes"> | number | null
    map?: StringFilter<"playertimes"> | string
    points?: FloatFilter<"playertimes"> | number
    jumps?: IntNullableFilter<"playertimes"> | number | null
    date?: IntNullableFilter<"playertimes"> | number | null
    strafes?: IntNullableFilter<"playertimes"> | number | null
    sync?: FloatNullableFilter<"playertimes"> | number | null
    perfs?: FloatNullableFilter<"playertimes"> | number | null
    completions?: IntNullableFilter<"playertimes"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type playertimesOrderByWithRelationInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrderInput | SortOrder
    map?: SortOrder
    points?: SortOrder
    jumps?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    strafes?: SortOrderInput | SortOrder
    sync?: SortOrderInput | SortOrder
    perfs?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    _relevance?: playertimesOrderByRelevanceInput
  }

  export type playertimesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: playertimesWhereInput | playertimesWhereInput[]
    OR?: playertimesWhereInput[]
    NOT?: playertimesWhereInput | playertimesWhereInput[]
    style?: IntFilter<"playertimes"> | number
    track?: IntFilter<"playertimes"> | number
    time?: FloatFilter<"playertimes"> | number
    auth?: IntNullableFilter<"playertimes"> | number | null
    map?: StringFilter<"playertimes"> | string
    points?: FloatFilter<"playertimes"> | number
    jumps?: IntNullableFilter<"playertimes"> | number | null
    date?: IntNullableFilter<"playertimes"> | number | null
    strafes?: IntNullableFilter<"playertimes"> | number | null
    sync?: FloatNullableFilter<"playertimes"> | number | null
    perfs?: FloatNullableFilter<"playertimes"> | number | null
    completions?: IntNullableFilter<"playertimes"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type playertimesOrderByWithAggregationInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrderInput | SortOrder
    map?: SortOrder
    points?: SortOrder
    jumps?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    strafes?: SortOrderInput | SortOrder
    sync?: SortOrderInput | SortOrder
    perfs?: SortOrderInput | SortOrder
    completions?: SortOrderInput | SortOrder
    _count?: playertimesCountOrderByAggregateInput
    _avg?: playertimesAvgOrderByAggregateInput
    _max?: playertimesMaxOrderByAggregateInput
    _min?: playertimesMinOrderByAggregateInput
    _sum?: playertimesSumOrderByAggregateInput
  }

  export type playertimesScalarWhereWithAggregatesInput = {
    AND?: playertimesScalarWhereWithAggregatesInput | playertimesScalarWhereWithAggregatesInput[]
    OR?: playertimesScalarWhereWithAggregatesInput[]
    NOT?: playertimesScalarWhereWithAggregatesInput | playertimesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"playertimes"> | number
    style?: IntWithAggregatesFilter<"playertimes"> | number
    track?: IntWithAggregatesFilter<"playertimes"> | number
    time?: FloatWithAggregatesFilter<"playertimes"> | number
    auth?: IntNullableWithAggregatesFilter<"playertimes"> | number | null
    map?: StringWithAggregatesFilter<"playertimes"> | string
    points?: FloatWithAggregatesFilter<"playertimes"> | number
    jumps?: IntNullableWithAggregatesFilter<"playertimes"> | number | null
    date?: IntNullableWithAggregatesFilter<"playertimes"> | number | null
    strafes?: IntNullableWithAggregatesFilter<"playertimes"> | number | null
    sync?: FloatNullableWithAggregatesFilter<"playertimes"> | number | null
    perfs?: FloatNullableWithAggregatesFilter<"playertimes"> | number | null
    completions?: IntNullableWithAggregatesFilter<"playertimes"> | number | null
  }

  export type stagetimespbWhereInput = {
    AND?: stagetimespbWhereInput | stagetimespbWhereInput[]
    OR?: stagetimespbWhereInput[]
    NOT?: stagetimespbWhereInput | stagetimespbWhereInput[]
    style?: IntFilter<"stagetimespb"> | number
    track?: IntFilter<"stagetimespb"> | number
    map?: StringFilter<"stagetimespb"> | string
    stage?: IntFilter<"stagetimespb"> | number
    auth?: IntFilter<"stagetimespb"> | number
    time?: FloatFilter<"stagetimespb"> | number
  }

  export type stagetimespbOrderByWithRelationInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
    _relevance?: stagetimespbOrderByRelevanceInput
  }

  export type stagetimespbWhereUniqueInput = Prisma.AtLeast<{
    style_track_auth_map_stage?: stagetimespbStyleTrackAuthMapStageCompoundUniqueInput
    AND?: stagetimespbWhereInput | stagetimespbWhereInput[]
    OR?: stagetimespbWhereInput[]
    NOT?: stagetimespbWhereInput | stagetimespbWhereInput[]
    style?: IntFilter<"stagetimespb"> | number
    track?: IntFilter<"stagetimespb"> | number
    map?: StringFilter<"stagetimespb"> | string
    stage?: IntFilter<"stagetimespb"> | number
    auth?: IntFilter<"stagetimespb"> | number
    time?: FloatFilter<"stagetimespb"> | number
  }, "style_track_auth_map_stage">

  export type stagetimespbOrderByWithAggregationInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
    _count?: stagetimespbCountOrderByAggregateInput
    _avg?: stagetimespbAvgOrderByAggregateInput
    _max?: stagetimespbMaxOrderByAggregateInput
    _min?: stagetimespbMinOrderByAggregateInput
    _sum?: stagetimespbSumOrderByAggregateInput
  }

  export type stagetimespbScalarWhereWithAggregatesInput = {
    AND?: stagetimespbScalarWhereWithAggregatesInput | stagetimespbScalarWhereWithAggregatesInput[]
    OR?: stagetimespbScalarWhereWithAggregatesInput[]
    NOT?: stagetimespbScalarWhereWithAggregatesInput | stagetimespbScalarWhereWithAggregatesInput[]
    style?: IntWithAggregatesFilter<"stagetimespb"> | number
    track?: IntWithAggregatesFilter<"stagetimespb"> | number
    map?: StringWithAggregatesFilter<"stagetimespb"> | string
    stage?: IntWithAggregatesFilter<"stagetimespb"> | number
    auth?: IntWithAggregatesFilter<"stagetimespb"> | number
    time?: FloatWithAggregatesFilter<"stagetimespb"> | number
  }

  export type stagetimeswrWhereInput = {
    AND?: stagetimeswrWhereInput | stagetimeswrWhereInput[]
    OR?: stagetimeswrWhereInput[]
    NOT?: stagetimeswrWhereInput | stagetimeswrWhereInput[]
    style?: IntFilter<"stagetimeswr"> | number
    track?: IntFilter<"stagetimeswr"> | number
    map?: StringFilter<"stagetimeswr"> | string
    stage?: IntFilter<"stagetimeswr"> | number
    auth?: IntFilter<"stagetimeswr"> | number
    time?: FloatFilter<"stagetimeswr"> | number
  }

  export type stagetimeswrOrderByWithRelationInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
    _relevance?: stagetimeswrOrderByRelevanceInput
  }

  export type stagetimeswrWhereUniqueInput = Prisma.AtLeast<{
    style_track_map_stage?: stagetimeswrStyleTrackMapStageCompoundUniqueInput
    AND?: stagetimeswrWhereInput | stagetimeswrWhereInput[]
    OR?: stagetimeswrWhereInput[]
    NOT?: stagetimeswrWhereInput | stagetimeswrWhereInput[]
    style?: IntFilter<"stagetimeswr"> | number
    track?: IntFilter<"stagetimeswr"> | number
    map?: StringFilter<"stagetimeswr"> | string
    stage?: IntFilter<"stagetimeswr"> | number
    auth?: IntFilter<"stagetimeswr"> | number
    time?: FloatFilter<"stagetimeswr"> | number
  }, "style_track_map_stage">

  export type stagetimeswrOrderByWithAggregationInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
    _count?: stagetimeswrCountOrderByAggregateInput
    _avg?: stagetimeswrAvgOrderByAggregateInput
    _max?: stagetimeswrMaxOrderByAggregateInput
    _min?: stagetimeswrMinOrderByAggregateInput
    _sum?: stagetimeswrSumOrderByAggregateInput
  }

  export type stagetimeswrScalarWhereWithAggregatesInput = {
    AND?: stagetimeswrScalarWhereWithAggregatesInput | stagetimeswrScalarWhereWithAggregatesInput[]
    OR?: stagetimeswrScalarWhereWithAggregatesInput[]
    NOT?: stagetimeswrScalarWhereWithAggregatesInput | stagetimeswrScalarWhereWithAggregatesInput[]
    style?: IntWithAggregatesFilter<"stagetimeswr"> | number
    track?: IntWithAggregatesFilter<"stagetimeswr"> | number
    map?: StringWithAggregatesFilter<"stagetimeswr"> | string
    stage?: IntWithAggregatesFilter<"stagetimeswr"> | number
    auth?: IntWithAggregatesFilter<"stagetimeswr"> | number
    time?: FloatWithAggregatesFilter<"stagetimeswr"> | number
  }

  export type startpositionsWhereInput = {
    AND?: startpositionsWhereInput | startpositionsWhereInput[]
    OR?: startpositionsWhereInput[]
    NOT?: startpositionsWhereInput | startpositionsWhereInput[]
    auth?: IntFilter<"startpositions"> | number
    track?: IntFilter<"startpositions"> | number
    map?: StringFilter<"startpositions"> | string
    pos_x?: FloatNullableFilter<"startpositions"> | number | null
    pos_y?: FloatNullableFilter<"startpositions"> | number | null
    pos_z?: FloatNullableFilter<"startpositions"> | number | null
    ang_x?: FloatNullableFilter<"startpositions"> | number | null
    ang_y?: FloatNullableFilter<"startpositions"> | number | null
    ang_z?: FloatNullableFilter<"startpositions"> | number | null
    angles_only?: BoolNullableFilter<"startpositions"> | boolean | null
  }

  export type startpositionsOrderByWithRelationInput = {
    auth?: SortOrder
    track?: SortOrder
    map?: SortOrder
    pos_x?: SortOrderInput | SortOrder
    pos_y?: SortOrderInput | SortOrder
    pos_z?: SortOrderInput | SortOrder
    ang_x?: SortOrderInput | SortOrder
    ang_y?: SortOrderInput | SortOrder
    ang_z?: SortOrderInput | SortOrder
    angles_only?: SortOrderInput | SortOrder
    _relevance?: startpositionsOrderByRelevanceInput
  }

  export type startpositionsWhereUniqueInput = Prisma.AtLeast<{
    auth_track_map?: startpositionsAuthTrackMapCompoundUniqueInput
    AND?: startpositionsWhereInput | startpositionsWhereInput[]
    OR?: startpositionsWhereInput[]
    NOT?: startpositionsWhereInput | startpositionsWhereInput[]
    auth?: IntFilter<"startpositions"> | number
    track?: IntFilter<"startpositions"> | number
    map?: StringFilter<"startpositions"> | string
    pos_x?: FloatNullableFilter<"startpositions"> | number | null
    pos_y?: FloatNullableFilter<"startpositions"> | number | null
    pos_z?: FloatNullableFilter<"startpositions"> | number | null
    ang_x?: FloatNullableFilter<"startpositions"> | number | null
    ang_y?: FloatNullableFilter<"startpositions"> | number | null
    ang_z?: FloatNullableFilter<"startpositions"> | number | null
    angles_only?: BoolNullableFilter<"startpositions"> | boolean | null
  }, "auth_track_map">

  export type startpositionsOrderByWithAggregationInput = {
    auth?: SortOrder
    track?: SortOrder
    map?: SortOrder
    pos_x?: SortOrderInput | SortOrder
    pos_y?: SortOrderInput | SortOrder
    pos_z?: SortOrderInput | SortOrder
    ang_x?: SortOrderInput | SortOrder
    ang_y?: SortOrderInput | SortOrder
    ang_z?: SortOrderInput | SortOrder
    angles_only?: SortOrderInput | SortOrder
    _count?: startpositionsCountOrderByAggregateInput
    _avg?: startpositionsAvgOrderByAggregateInput
    _max?: startpositionsMaxOrderByAggregateInput
    _min?: startpositionsMinOrderByAggregateInput
    _sum?: startpositionsSumOrderByAggregateInput
  }

  export type startpositionsScalarWhereWithAggregatesInput = {
    AND?: startpositionsScalarWhereWithAggregatesInput | startpositionsScalarWhereWithAggregatesInput[]
    OR?: startpositionsScalarWhereWithAggregatesInput[]
    NOT?: startpositionsScalarWhereWithAggregatesInput | startpositionsScalarWhereWithAggregatesInput[]
    auth?: IntWithAggregatesFilter<"startpositions"> | number
    track?: IntWithAggregatesFilter<"startpositions"> | number
    map?: StringWithAggregatesFilter<"startpositions"> | string
    pos_x?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    pos_y?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    pos_z?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    ang_x?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    ang_y?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    ang_z?: FloatNullableWithAggregatesFilter<"startpositions"> | number | null
    angles_only?: BoolNullableWithAggregatesFilter<"startpositions"> | boolean | null
  }

  export type styleplaytimeWhereInput = {
    AND?: styleplaytimeWhereInput | styleplaytimeWhereInput[]
    OR?: styleplaytimeWhereInput[]
    NOT?: styleplaytimeWhereInput | styleplaytimeWhereInput[]
    auth?: IntFilter<"styleplaytime"> | number
    style?: IntFilter<"styleplaytime"> | number
    playtime?: FloatFilter<"styleplaytime"> | number
  }

  export type styleplaytimeOrderByWithRelationInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type styleplaytimeWhereUniqueInput = Prisma.AtLeast<{
    auth_style?: styleplaytimeAuthStyleCompoundUniqueInput
    AND?: styleplaytimeWhereInput | styleplaytimeWhereInput[]
    OR?: styleplaytimeWhereInput[]
    NOT?: styleplaytimeWhereInput | styleplaytimeWhereInput[]
    auth?: IntFilter<"styleplaytime"> | number
    style?: IntFilter<"styleplaytime"> | number
    playtime?: FloatFilter<"styleplaytime"> | number
  }, "auth_style">

  export type styleplaytimeOrderByWithAggregationInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
    _count?: styleplaytimeCountOrderByAggregateInput
    _avg?: styleplaytimeAvgOrderByAggregateInput
    _max?: styleplaytimeMaxOrderByAggregateInput
    _min?: styleplaytimeMinOrderByAggregateInput
    _sum?: styleplaytimeSumOrderByAggregateInput
  }

  export type styleplaytimeScalarWhereWithAggregatesInput = {
    AND?: styleplaytimeScalarWhereWithAggregatesInput | styleplaytimeScalarWhereWithAggregatesInput[]
    OR?: styleplaytimeScalarWhereWithAggregatesInput[]
    NOT?: styleplaytimeScalarWhereWithAggregatesInput | styleplaytimeScalarWhereWithAggregatesInput[]
    auth?: IntWithAggregatesFilter<"styleplaytime"> | number
    style?: IntWithAggregatesFilter<"styleplaytime"> | number
    playtime?: FloatWithAggregatesFilter<"styleplaytime"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    auth?: IntFilter<"users"> | number
    name?: StringNullableFilter<"users"> | string | null
    ip?: IntNullableFilter<"users"> | number | null
    lastlogin?: IntFilter<"users"> | number
    points?: FloatFilter<"users"> | number
    playtime?: FloatFilter<"users"> | number
    playertimes?: PlayertimesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    auth?: SortOrder
    name?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
    playertimes?: playertimesOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    auth?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    ip?: IntNullableFilter<"users"> | number | null
    lastlogin?: IntFilter<"users"> | number
    points?: FloatFilter<"users"> | number
    playtime?: FloatFilter<"users"> | number
    playertimes?: PlayertimesListRelationFilter
  }, "auth">

  export type usersOrderByWithAggregationInput = {
    auth?: SortOrder
    name?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    auth?: IntWithAggregatesFilter<"users"> | number
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    ip?: IntNullableWithAggregatesFilter<"users"> | number | null
    lastlogin?: IntWithAggregatesFilter<"users"> | number
    points?: FloatWithAggregatesFilter<"users"> | number
    playtime?: FloatWithAggregatesFilter<"users"> | number
  }

  export type chatCreateInput = {
    auth: number
    name?: number
    ccname?: string | null
    message?: number
    ccmessage?: string | null
    ccaccess?: number
  }

  export type chatUncheckedCreateInput = {
    auth: number
    name?: number
    ccname?: string | null
    message?: number
    ccmessage?: string | null
    ccaccess?: number
  }

  export type chatUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
    ccname?: NullableStringFieldUpdateOperationsInput | string | null
    message?: IntFieldUpdateOperationsInput | number
    ccmessage?: NullableStringFieldUpdateOperationsInput | string | null
    ccaccess?: IntFieldUpdateOperationsInput | number
  }

  export type chatUncheckedUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
    ccname?: NullableStringFieldUpdateOperationsInput | string | null
    message?: IntFieldUpdateOperationsInput | number
    ccmessage?: NullableStringFieldUpdateOperationsInput | string | null
    ccaccess?: IntFieldUpdateOperationsInput | number
  }

  export type chatCreateManyInput = {
    auth: number
    name?: number
    ccname?: string | null
    message?: number
    ccmessage?: string | null
    ccaccess?: number
  }

  export type chatUpdateManyMutationInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
    ccname?: NullableStringFieldUpdateOperationsInput | string | null
    message?: IntFieldUpdateOperationsInput | number
    ccmessage?: NullableStringFieldUpdateOperationsInput | string | null
    ccaccess?: IntFieldUpdateOperationsInput | number
  }

  export type chatUncheckedUpdateManyInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: IntFieldUpdateOperationsInput | number
    ccname?: NullableStringFieldUpdateOperationsInput | string | null
    message?: IntFieldUpdateOperationsInput | number
    ccmessage?: NullableStringFieldUpdateOperationsInput | string | null
    ccaccess?: IntFieldUpdateOperationsInput | number
  }

  export type maptiersCreateInput = {
    map: string
    tier?: number
    possible_on_400vel?: boolean | null
    possible_on_scroll?: boolean | null
    possible_on_stamina?: boolean | null
  }

  export type maptiersUncheckedCreateInput = {
    map: string
    tier?: number
    possible_on_400vel?: boolean | null
    possible_on_scroll?: boolean | null
    possible_on_stamina?: boolean | null
  }

  export type maptiersUpdateInput = {
    map?: StringFieldUpdateOperationsInput | string
    tier?: IntFieldUpdateOperationsInput | number
    possible_on_400vel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_scroll?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_stamina?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type maptiersUncheckedUpdateInput = {
    map?: StringFieldUpdateOperationsInput | string
    tier?: IntFieldUpdateOperationsInput | number
    possible_on_400vel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_scroll?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_stamina?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type maptiersCreateManyInput = {
    map: string
    tier?: number
    possible_on_400vel?: boolean | null
    possible_on_scroll?: boolean | null
    possible_on_stamina?: boolean | null
  }

  export type maptiersUpdateManyMutationInput = {
    map?: StringFieldUpdateOperationsInput | string
    tier?: IntFieldUpdateOperationsInput | number
    possible_on_400vel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_scroll?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_stamina?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type maptiersUncheckedUpdateManyInput = {
    map?: StringFieldUpdateOperationsInput | string
    tier?: IntFieldUpdateOperationsInput | number
    possible_on_400vel?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_scroll?: NullableBoolFieldUpdateOperationsInput | boolean | null
    possible_on_stamina?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type mapzonesCreateInput = {
    map: string
    type?: number | null
    corner1_x?: number | null
    corner1_y?: number | null
    corner1_z?: number | null
    corner2_x?: number | null
    corner2_y?: number | null
    corner2_z?: number | null
    destination_x?: number
    destination_y?: number
    destination_z?: number
    track?: number
    flags?: number
    data?: number
    form?: number | null
    target?: string | null
  }

  export type mapzonesUncheckedCreateInput = {
    id?: number
    map: string
    type?: number | null
    corner1_x?: number | null
    corner1_y?: number | null
    corner1_z?: number | null
    corner2_x?: number | null
    corner2_y?: number | null
    corner2_z?: number | null
    destination_x?: number
    destination_y?: number
    destination_z?: number
    track?: number
    flags?: number
    data?: number
    form?: number | null
    target?: string | null
  }

  export type mapzonesUpdateInput = {
    map?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    corner1_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_z?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_z?: NullableFloatFieldUpdateOperationsInput | number | null
    destination_x?: FloatFieldUpdateOperationsInput | number
    destination_y?: FloatFieldUpdateOperationsInput | number
    destination_z?: FloatFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    form?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mapzonesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    corner1_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_z?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_z?: NullableFloatFieldUpdateOperationsInput | number | null
    destination_x?: FloatFieldUpdateOperationsInput | number
    destination_y?: FloatFieldUpdateOperationsInput | number
    destination_z?: FloatFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    form?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mapzonesCreateManyInput = {
    id?: number
    map: string
    type?: number | null
    corner1_x?: number | null
    corner1_y?: number | null
    corner1_z?: number | null
    corner2_x?: number | null
    corner2_y?: number | null
    corner2_z?: number | null
    destination_x?: number
    destination_y?: number
    destination_z?: number
    track?: number
    flags?: number
    data?: number
    form?: number | null
    target?: string | null
  }

  export type mapzonesUpdateManyMutationInput = {
    map?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    corner1_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_z?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_z?: NullableFloatFieldUpdateOperationsInput | number | null
    destination_x?: FloatFieldUpdateOperationsInput | number
    destination_y?: FloatFieldUpdateOperationsInput | number
    destination_z?: FloatFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    form?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mapzonesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    corner1_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner1_z?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_x?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_y?: NullableFloatFieldUpdateOperationsInput | number | null
    corner2_z?: NullableFloatFieldUpdateOperationsInput | number | null
    destination_x?: FloatFieldUpdateOperationsInput | number
    destination_y?: FloatFieldUpdateOperationsInput | number
    destination_z?: FloatFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    flags?: IntFieldUpdateOperationsInput | number
    data?: IntFieldUpdateOperationsInput | number
    form?: NullableIntFieldUpdateOperationsInput | number | null
    target?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type migrationsCreateInput = {
    code: number
  }

  export type migrationsUncheckedCreateInput = {
    code: number
  }

  export type migrationsUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    code: number
  }

  export type migrationsUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
  }

  export type playertimesCreateInput = {
    style?: number
    track?: number
    time: number
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
    users?: usersCreateNestedOneWithoutPlayertimesInput
  }

  export type playertimesUncheckedCreateInput = {
    id?: number
    style?: number
    track?: number
    time: number
    auth?: number | null
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
  }

  export type playertimesUpdateInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
    users?: usersUpdateOneWithoutPlayertimesNestedInput
  }

  export type playertimesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    auth?: NullableIntFieldUpdateOperationsInput | number | null
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playertimesCreateManyInput = {
    id?: number
    style?: number
    track?: number
    time: number
    auth?: number | null
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
  }

  export type playertimesUpdateManyMutationInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playertimesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    auth?: NullableIntFieldUpdateOperationsInput | number | null
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stagetimespbCreateInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimespbUncheckedCreateInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimespbUpdateInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimespbUncheckedUpdateInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimespbCreateManyInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimespbUpdateManyMutationInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimespbUncheckedUpdateManyInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimeswrCreateInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimeswrUncheckedCreateInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimeswrUpdateInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimeswrUncheckedUpdateInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimeswrCreateManyInput = {
    style: number
    track?: number
    map: string
    stage: number
    auth: number
    time: number
  }

  export type stagetimeswrUpdateManyMutationInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type stagetimeswrUncheckedUpdateManyInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    stage?: IntFieldUpdateOperationsInput | number
    auth?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
  }

  export type startpositionsCreateInput = {
    auth: number
    track: number
    map: string
    pos_x?: number | null
    pos_y?: number | null
    pos_z?: number | null
    ang_x?: number | null
    ang_y?: number | null
    ang_z?: number | null
    angles_only?: boolean | null
  }

  export type startpositionsUncheckedCreateInput = {
    auth: number
    track: number
    map: string
    pos_x?: number | null
    pos_y?: number | null
    pos_z?: number | null
    ang_x?: number | null
    ang_y?: number | null
    ang_z?: number | null
    angles_only?: boolean | null
  }

  export type startpositionsUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    pos_x?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_y?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_z?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_x?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_y?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_z?: NullableFloatFieldUpdateOperationsInput | number | null
    angles_only?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type startpositionsUncheckedUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    pos_x?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_y?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_z?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_x?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_y?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_z?: NullableFloatFieldUpdateOperationsInput | number | null
    angles_only?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type startpositionsCreateManyInput = {
    auth: number
    track: number
    map: string
    pos_x?: number | null
    pos_y?: number | null
    pos_z?: number | null
    ang_x?: number | null
    ang_y?: number | null
    ang_z?: number | null
    angles_only?: boolean | null
  }

  export type startpositionsUpdateManyMutationInput = {
    auth?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    pos_x?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_y?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_z?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_x?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_y?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_z?: NullableFloatFieldUpdateOperationsInput | number | null
    angles_only?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type startpositionsUncheckedUpdateManyInput = {
    auth?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    pos_x?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_y?: NullableFloatFieldUpdateOperationsInput | number | null
    pos_z?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_x?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_y?: NullableFloatFieldUpdateOperationsInput | number | null
    ang_z?: NullableFloatFieldUpdateOperationsInput | number | null
    angles_only?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type styleplaytimeCreateInput = {
    auth: number
    style: number
    playtime: number
  }

  export type styleplaytimeUncheckedCreateInput = {
    auth: number
    style: number
    playtime: number
  }

  export type styleplaytimeUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type styleplaytimeUncheckedUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type styleplaytimeCreateManyInput = {
    auth: number
    style: number
    playtime: number
  }

  export type styleplaytimeUpdateManyMutationInput = {
    auth?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type styleplaytimeUncheckedUpdateManyInput = {
    auth?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    auth: number
    name?: string | null
    ip?: number | null
    lastlogin?: number
    points?: number
    playtime?: number
    playertimes?: playertimesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    auth: number
    name?: string | null
    ip?: number | null
    lastlogin?: number
    points?: number
    playtime?: number
    playertimes?: playertimesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
    playertimes?: playertimesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
    playertimes?: playertimesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    auth: number
    name?: string | null
    ip?: number | null
    lastlogin?: number
    points?: number
    playtime?: number
  }

  export type usersUpdateManyMutationInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type chatOrderByRelevanceInput = {
    fields: chatOrderByRelevanceFieldEnum | chatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type chatCountOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ccname?: SortOrder
    message?: SortOrder
    ccmessage?: SortOrder
    ccaccess?: SortOrder
  }

  export type chatAvgOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    message?: SortOrder
    ccaccess?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ccname?: SortOrder
    message?: SortOrder
    ccmessage?: SortOrder
    ccaccess?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ccname?: SortOrder
    message?: SortOrder
    ccmessage?: SortOrder
    ccaccess?: SortOrder
  }

  export type chatSumOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    message?: SortOrder
    ccaccess?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type maptiersOrderByRelevanceInput = {
    fields: maptiersOrderByRelevanceFieldEnum | maptiersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type maptiersCountOrderByAggregateInput = {
    map?: SortOrder
    tier?: SortOrder
    possible_on_400vel?: SortOrder
    possible_on_scroll?: SortOrder
    possible_on_stamina?: SortOrder
  }

  export type maptiersAvgOrderByAggregateInput = {
    tier?: SortOrder
  }

  export type maptiersMaxOrderByAggregateInput = {
    map?: SortOrder
    tier?: SortOrder
    possible_on_400vel?: SortOrder
    possible_on_scroll?: SortOrder
    possible_on_stamina?: SortOrder
  }

  export type maptiersMinOrderByAggregateInput = {
    map?: SortOrder
    tier?: SortOrder
    possible_on_400vel?: SortOrder
    possible_on_scroll?: SortOrder
    possible_on_stamina?: SortOrder
  }

  export type maptiersSumOrderByAggregateInput = {
    tier?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type mapzonesOrderByRelevanceInput = {
    fields: mapzonesOrderByRelevanceFieldEnum | mapzonesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mapzonesCountOrderByAggregateInput = {
    id?: SortOrder
    map?: SortOrder
    type?: SortOrder
    corner1_x?: SortOrder
    corner1_y?: SortOrder
    corner1_z?: SortOrder
    corner2_x?: SortOrder
    corner2_y?: SortOrder
    corner2_z?: SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrder
    target?: SortOrder
  }

  export type mapzonesAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    corner1_x?: SortOrder
    corner1_y?: SortOrder
    corner1_z?: SortOrder
    corner2_x?: SortOrder
    corner2_y?: SortOrder
    corner2_z?: SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrder
  }

  export type mapzonesMaxOrderByAggregateInput = {
    id?: SortOrder
    map?: SortOrder
    type?: SortOrder
    corner1_x?: SortOrder
    corner1_y?: SortOrder
    corner1_z?: SortOrder
    corner2_x?: SortOrder
    corner2_y?: SortOrder
    corner2_z?: SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrder
    target?: SortOrder
  }

  export type mapzonesMinOrderByAggregateInput = {
    id?: SortOrder
    map?: SortOrder
    type?: SortOrder
    corner1_x?: SortOrder
    corner1_y?: SortOrder
    corner1_z?: SortOrder
    corner2_x?: SortOrder
    corner2_y?: SortOrder
    corner2_z?: SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrder
    target?: SortOrder
  }

  export type mapzonesSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    corner1_x?: SortOrder
    corner1_y?: SortOrder
    corner1_z?: SortOrder
    corner2_x?: SortOrder
    corner2_y?: SortOrder
    corner2_z?: SortOrder
    destination_x?: SortOrder
    destination_y?: SortOrder
    destination_z?: SortOrder
    track?: SortOrder
    flags?: SortOrder
    data?: SortOrder
    form?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type migrationsCountOrderByAggregateInput = {
    code?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    code?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    code?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type playertimesOrderByRelevanceInput = {
    fields: playertimesOrderByRelevanceFieldEnum | playertimesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type playertimesCountOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrder
    map?: SortOrder
    points?: SortOrder
    jumps?: SortOrder
    date?: SortOrder
    strafes?: SortOrder
    sync?: SortOrder
    perfs?: SortOrder
    completions?: SortOrder
  }

  export type playertimesAvgOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrder
    points?: SortOrder
    jumps?: SortOrder
    date?: SortOrder
    strafes?: SortOrder
    sync?: SortOrder
    perfs?: SortOrder
    completions?: SortOrder
  }

  export type playertimesMaxOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrder
    map?: SortOrder
    points?: SortOrder
    jumps?: SortOrder
    date?: SortOrder
    strafes?: SortOrder
    sync?: SortOrder
    perfs?: SortOrder
    completions?: SortOrder
  }

  export type playertimesMinOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrder
    map?: SortOrder
    points?: SortOrder
    jumps?: SortOrder
    date?: SortOrder
    strafes?: SortOrder
    sync?: SortOrder
    perfs?: SortOrder
    completions?: SortOrder
  }

  export type playertimesSumOrderByAggregateInput = {
    id?: SortOrder
    style?: SortOrder
    track?: SortOrder
    time?: SortOrder
    auth?: SortOrder
    points?: SortOrder
    jumps?: SortOrder
    date?: SortOrder
    strafes?: SortOrder
    sync?: SortOrder
    perfs?: SortOrder
    completions?: SortOrder
  }

  export type stagetimespbOrderByRelevanceInput = {
    fields: stagetimespbOrderByRelevanceFieldEnum | stagetimespbOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stagetimespbStyleTrackAuthMapStageCompoundUniqueInput = {
    style: number
    track: number
    auth: number
    map: string
    stage: number
  }

  export type stagetimespbCountOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimespbAvgOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimespbMaxOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimespbMinOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimespbSumOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimeswrOrderByRelevanceInput = {
    fields: stagetimeswrOrderByRelevanceFieldEnum | stagetimeswrOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stagetimeswrStyleTrackMapStageCompoundUniqueInput = {
    style: number
    track: number
    map: string
    stage: number
  }

  export type stagetimeswrCountOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimeswrAvgOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimeswrMaxOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimeswrMinOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    map?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type stagetimeswrSumOrderByAggregateInput = {
    style?: SortOrder
    track?: SortOrder
    stage?: SortOrder
    auth?: SortOrder
    time?: SortOrder
  }

  export type startpositionsOrderByRelevanceInput = {
    fields: startpositionsOrderByRelevanceFieldEnum | startpositionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type startpositionsAuthTrackMapCompoundUniqueInput = {
    auth: number
    track: number
    map: string
  }

  export type startpositionsCountOrderByAggregateInput = {
    auth?: SortOrder
    track?: SortOrder
    map?: SortOrder
    pos_x?: SortOrder
    pos_y?: SortOrder
    pos_z?: SortOrder
    ang_x?: SortOrder
    ang_y?: SortOrder
    ang_z?: SortOrder
    angles_only?: SortOrder
  }

  export type startpositionsAvgOrderByAggregateInput = {
    auth?: SortOrder
    track?: SortOrder
    pos_x?: SortOrder
    pos_y?: SortOrder
    pos_z?: SortOrder
    ang_x?: SortOrder
    ang_y?: SortOrder
    ang_z?: SortOrder
  }

  export type startpositionsMaxOrderByAggregateInput = {
    auth?: SortOrder
    track?: SortOrder
    map?: SortOrder
    pos_x?: SortOrder
    pos_y?: SortOrder
    pos_z?: SortOrder
    ang_x?: SortOrder
    ang_y?: SortOrder
    ang_z?: SortOrder
    angles_only?: SortOrder
  }

  export type startpositionsMinOrderByAggregateInput = {
    auth?: SortOrder
    track?: SortOrder
    map?: SortOrder
    pos_x?: SortOrder
    pos_y?: SortOrder
    pos_z?: SortOrder
    ang_x?: SortOrder
    ang_y?: SortOrder
    ang_z?: SortOrder
    angles_only?: SortOrder
  }

  export type startpositionsSumOrderByAggregateInput = {
    auth?: SortOrder
    track?: SortOrder
    pos_x?: SortOrder
    pos_y?: SortOrder
    pos_z?: SortOrder
    ang_x?: SortOrder
    ang_y?: SortOrder
    ang_z?: SortOrder
  }

  export type styleplaytimeAuthStyleCompoundUniqueInput = {
    auth: number
    style: number
  }

  export type styleplaytimeCountOrderByAggregateInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type styleplaytimeAvgOrderByAggregateInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type styleplaytimeMaxOrderByAggregateInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type styleplaytimeMinOrderByAggregateInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type styleplaytimeSumOrderByAggregateInput = {
    auth?: SortOrder
    style?: SortOrder
    playtime?: SortOrder
  }

  export type PlayertimesListRelationFilter = {
    every?: playertimesWhereInput
    some?: playertimesWhereInput
    none?: playertimesWhereInput
  }

  export type playertimesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    auth?: SortOrder
    ip?: SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    auth?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    auth?: SortOrder
    ip?: SortOrder
    lastlogin?: SortOrder
    points?: SortOrder
    playtime?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutPlayertimesInput = {
    create?: XOR<usersCreateWithoutPlayertimesInput, usersUncheckedCreateWithoutPlayertimesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlayertimesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutPlayertimesNestedInput = {
    create?: XOR<usersCreateWithoutPlayertimesInput, usersUncheckedCreateWithoutPlayertimesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlayertimesInput
    upsert?: usersUpsertWithoutPlayertimesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPlayertimesInput, usersUpdateWithoutPlayertimesInput>, usersUncheckedUpdateWithoutPlayertimesInput>
  }

  export type playertimesCreateNestedManyWithoutUsersInput = {
    create?: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput> | playertimesCreateWithoutUsersInput[] | playertimesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playertimesCreateOrConnectWithoutUsersInput | playertimesCreateOrConnectWithoutUsersInput[]
    createMany?: playertimesCreateManyUsersInputEnvelope
    connect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
  }

  export type playertimesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput> | playertimesCreateWithoutUsersInput[] | playertimesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playertimesCreateOrConnectWithoutUsersInput | playertimesCreateOrConnectWithoutUsersInput[]
    createMany?: playertimesCreateManyUsersInputEnvelope
    connect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
  }

  export type playertimesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput> | playertimesCreateWithoutUsersInput[] | playertimesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playertimesCreateOrConnectWithoutUsersInput | playertimesCreateOrConnectWithoutUsersInput[]
    upsert?: playertimesUpsertWithWhereUniqueWithoutUsersInput | playertimesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: playertimesCreateManyUsersInputEnvelope
    set?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    disconnect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    delete?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    connect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    update?: playertimesUpdateWithWhereUniqueWithoutUsersInput | playertimesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: playertimesUpdateManyWithWhereWithoutUsersInput | playertimesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: playertimesScalarWhereInput | playertimesScalarWhereInput[]
  }

  export type playertimesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput> | playertimesCreateWithoutUsersInput[] | playertimesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: playertimesCreateOrConnectWithoutUsersInput | playertimesCreateOrConnectWithoutUsersInput[]
    upsert?: playertimesUpsertWithWhereUniqueWithoutUsersInput | playertimesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: playertimesCreateManyUsersInputEnvelope
    set?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    disconnect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    delete?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    connect?: playertimesWhereUniqueInput | playertimesWhereUniqueInput[]
    update?: playertimesUpdateWithWhereUniqueWithoutUsersInput | playertimesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: playertimesUpdateManyWithWhereWithoutUsersInput | playertimesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: playertimesScalarWhereInput | playertimesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type usersCreateWithoutPlayertimesInput = {
    auth: number
    name?: string | null
    ip?: number | null
    lastlogin?: number
    points?: number
    playtime?: number
  }

  export type usersUncheckedCreateWithoutPlayertimesInput = {
    auth: number
    name?: string | null
    ip?: number | null
    lastlogin?: number
    points?: number
    playtime?: number
  }

  export type usersCreateOrConnectWithoutPlayertimesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlayertimesInput, usersUncheckedCreateWithoutPlayertimesInput>
  }

  export type usersUpsertWithoutPlayertimesInput = {
    update: XOR<usersUpdateWithoutPlayertimesInput, usersUncheckedUpdateWithoutPlayertimesInput>
    create: XOR<usersCreateWithoutPlayertimesInput, usersUncheckedCreateWithoutPlayertimesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPlayertimesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPlayertimesInput, usersUncheckedUpdateWithoutPlayertimesInput>
  }

  export type usersUpdateWithoutPlayertimesInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateWithoutPlayertimesInput = {
    auth?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableIntFieldUpdateOperationsInput | number | null
    lastlogin?: IntFieldUpdateOperationsInput | number
    points?: FloatFieldUpdateOperationsInput | number
    playtime?: FloatFieldUpdateOperationsInput | number
  }

  export type playertimesCreateWithoutUsersInput = {
    style?: number
    track?: number
    time: number
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
  }

  export type playertimesUncheckedCreateWithoutUsersInput = {
    id?: number
    style?: number
    track?: number
    time: number
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
  }

  export type playertimesCreateOrConnectWithoutUsersInput = {
    where: playertimesWhereUniqueInput
    create: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput>
  }

  export type playertimesCreateManyUsersInputEnvelope = {
    data: playertimesCreateManyUsersInput | playertimesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type playertimesUpsertWithWhereUniqueWithoutUsersInput = {
    where: playertimesWhereUniqueInput
    update: XOR<playertimesUpdateWithoutUsersInput, playertimesUncheckedUpdateWithoutUsersInput>
    create: XOR<playertimesCreateWithoutUsersInput, playertimesUncheckedCreateWithoutUsersInput>
  }

  export type playertimesUpdateWithWhereUniqueWithoutUsersInput = {
    where: playertimesWhereUniqueInput
    data: XOR<playertimesUpdateWithoutUsersInput, playertimesUncheckedUpdateWithoutUsersInput>
  }

  export type playertimesUpdateManyWithWhereWithoutUsersInput = {
    where: playertimesScalarWhereInput
    data: XOR<playertimesUpdateManyMutationInput, playertimesUncheckedUpdateManyWithoutUsersInput>
  }

  export type playertimesScalarWhereInput = {
    AND?: playertimesScalarWhereInput | playertimesScalarWhereInput[]
    OR?: playertimesScalarWhereInput[]
    NOT?: playertimesScalarWhereInput | playertimesScalarWhereInput[]
    id?: IntFilter<"playertimes"> | number
    style?: IntFilter<"playertimes"> | number
    track?: IntFilter<"playertimes"> | number
    time?: FloatFilter<"playertimes"> | number
    auth?: IntNullableFilter<"playertimes"> | number | null
    map?: StringFilter<"playertimes"> | string
    points?: FloatFilter<"playertimes"> | number
    jumps?: IntNullableFilter<"playertimes"> | number | null
    date?: IntNullableFilter<"playertimes"> | number | null
    strafes?: IntNullableFilter<"playertimes"> | number | null
    sync?: FloatNullableFilter<"playertimes"> | number | null
    perfs?: FloatNullableFilter<"playertimes"> | number | null
    completions?: IntNullableFilter<"playertimes"> | number | null
  }

  export type playertimesCreateManyUsersInput = {
    id?: number
    style?: number
    track?: number
    time: number
    map: string
    points?: number
    jumps?: number | null
    date?: number | null
    strafes?: number | null
    sync?: number | null
    perfs?: number | null
    completions?: number | null
  }

  export type playertimesUpdateWithoutUsersInput = {
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playertimesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type playertimesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: IntFieldUpdateOperationsInput | number
    track?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    map?: StringFieldUpdateOperationsInput | string
    points?: FloatFieldUpdateOperationsInput | number
    jumps?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableIntFieldUpdateOperationsInput | number | null
    strafes?: NullableIntFieldUpdateOperationsInput | number | null
    sync?: NullableFloatFieldUpdateOperationsInput | number | null
    perfs?: NullableFloatFieldUpdateOperationsInput | number | null
    completions?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
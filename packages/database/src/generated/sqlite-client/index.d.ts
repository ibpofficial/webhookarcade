
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model GuestSession
 * 
 */
export type GuestSession = $Result.DefaultSelection<Prisma.$GuestSessionPayload>
/**
 * Model Endpoint
 * 
 */
export type Endpoint = $Result.DefaultSelection<Prisma.$EndpointPayload>
/**
 * Model ResponseRule
 * 
 */
export type ResponseRule = $Result.DefaultSelection<Prisma.$ResponseRulePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model ReplayJob
 * 
 */
export type ReplayJob = $Result.DefaultSelection<Prisma.$ReplayJobPayload>
/**
 * Model Scenario
 * 
 */
export type Scenario = $Result.DefaultSelection<Prisma.$ScenarioPayload>
/**
 * Model TestRun
 * 
 */
export type TestRun = $Result.DefaultSelection<Prisma.$TestRunPayload>
/**
 * Model TestResult
 * 
 */
export type TestResult = $Result.DefaultSelection<Prisma.$TestResultPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guestSession`: Exposes CRUD operations for the **GuestSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuestSessions
    * const guestSessions = await prisma.guestSession.findMany()
    * ```
    */
  get guestSession(): Prisma.GuestSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpoint`: Exposes CRUD operations for the **Endpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endpoints
    * const endpoints = await prisma.endpoint.findMany()
    * ```
    */
  get endpoint(): Prisma.EndpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responseRule`: Exposes CRUD operations for the **ResponseRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResponseRules
    * const responseRules = await prisma.responseRule.findMany()
    * ```
    */
  get responseRule(): Prisma.ResponseRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.replayJob`: Exposes CRUD operations for the **ReplayJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReplayJobs
    * const replayJobs = await prisma.replayJob.findMany()
    * ```
    */
  get replayJob(): Prisma.ReplayJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scenario`: Exposes CRUD operations for the **Scenario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenarios
    * const scenarios = await prisma.scenario.findMany()
    * ```
    */
  get scenario(): Prisma.ScenarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testRun`: Exposes CRUD operations for the **TestRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestRuns
    * const testRuns = await prisma.testRun.findMany()
    * ```
    */
  get testRun(): Prisma.TestRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testResult`: Exposes CRUD operations for the **TestResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestResults
    * const testResults = await prisma.testResult.findMany()
    * ```
    */
  get testResult(): Prisma.TestResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Workspace: 'Workspace',
    GuestSession: 'GuestSession',
    Endpoint: 'Endpoint',
    ResponseRule: 'ResponseRule',
    Event: 'Event',
    Delivery: 'Delivery',
    ReplayJob: 'ReplayJob',
    Scenario: 'Scenario',
    TestRun: 'TestRun',
    TestResult: 'TestResult',
    Template: 'Template',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "workspace" | "guestSession" | "endpoint" | "responseRule" | "event" | "delivery" | "replayJob" | "scenario" | "testRun" | "testResult" | "template" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      GuestSession: {
        payload: Prisma.$GuestSessionPayload<ExtArgs>
        fields: Prisma.GuestSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          findFirst: {
            args: Prisma.GuestSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          findMany: {
            args: Prisma.GuestSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>[]
          }
          create: {
            args: Prisma.GuestSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          createMany: {
            args: Prisma.GuestSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>[]
          }
          delete: {
            args: Prisma.GuestSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          update: {
            args: Prisma.GuestSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          deleteMany: {
            args: Prisma.GuestSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>[]
          }
          upsert: {
            args: Prisma.GuestSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestSessionPayload>
          }
          aggregate: {
            args: Prisma.GuestSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuestSession>
          }
          groupBy: {
            args: Prisma.GuestSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GuestSessionCountAggregateOutputType> | number
          }
        }
      }
      Endpoint: {
        payload: Prisma.$EndpointPayload<ExtArgs>
        fields: Prisma.EndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findFirst: {
            args: Prisma.EndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findMany: {
            args: Prisma.EndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          create: {
            args: Prisma.EndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          createMany: {
            args: Prisma.EndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          delete: {
            args: Prisma.EndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          update: {
            args: Prisma.EndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          deleteMany: {
            args: Prisma.EndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          upsert: {
            args: Prisma.EndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          aggregate: {
            args: Prisma.EndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpoint>
          }
          groupBy: {
            args: Prisma.EndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndpointCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointCountAggregateOutputType> | number
          }
        }
      }
      ResponseRule: {
        payload: Prisma.$ResponseRulePayload<ExtArgs>
        fields: Prisma.ResponseRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponseRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponseRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          findFirst: {
            args: Prisma.ResponseRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponseRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          findMany: {
            args: Prisma.ResponseRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>[]
          }
          create: {
            args: Prisma.ResponseRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          createMany: {
            args: Prisma.ResponseRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponseRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>[]
          }
          delete: {
            args: Prisma.ResponseRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          update: {
            args: Prisma.ResponseRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          deleteMany: {
            args: Prisma.ResponseRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponseRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponseRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>[]
          }
          upsert: {
            args: Prisma.ResponseRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponseRulePayload>
          }
          aggregate: {
            args: Prisma.ResponseRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponseRule>
          }
          groupBy: {
            args: Prisma.ResponseRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponseRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponseRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ResponseRuleCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      ReplayJob: {
        payload: Prisma.$ReplayJobPayload<ExtArgs>
        fields: Prisma.ReplayJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplayJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplayJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          findFirst: {
            args: Prisma.ReplayJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplayJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          findMany: {
            args: Prisma.ReplayJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>[]
          }
          create: {
            args: Prisma.ReplayJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          createMany: {
            args: Prisma.ReplayJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplayJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>[]
          }
          delete: {
            args: Prisma.ReplayJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          update: {
            args: Prisma.ReplayJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          deleteMany: {
            args: Prisma.ReplayJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplayJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplayJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>[]
          }
          upsert: {
            args: Prisma.ReplayJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplayJobPayload>
          }
          aggregate: {
            args: Prisma.ReplayJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReplayJob>
          }
          groupBy: {
            args: Prisma.ReplayJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplayJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplayJobCountArgs<ExtArgs>
            result: $Utils.Optional<ReplayJobCountAggregateOutputType> | number
          }
        }
      }
      Scenario: {
        payload: Prisma.$ScenarioPayload<ExtArgs>
        fields: Prisma.ScenarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScenarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScenarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findFirst: {
            args: Prisma.ScenarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScenarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          findMany: {
            args: Prisma.ScenarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          create: {
            args: Prisma.ScenarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          createMany: {
            args: Prisma.ScenarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScenarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          delete: {
            args: Prisma.ScenarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          update: {
            args: Prisma.ScenarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          deleteMany: {
            args: Prisma.ScenarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScenarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScenarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>[]
          }
          upsert: {
            args: Prisma.ScenarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenarioPayload>
          }
          aggregate: {
            args: Prisma.ScenarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScenario>
          }
          groupBy: {
            args: Prisma.ScenarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScenarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScenarioCountArgs<ExtArgs>
            result: $Utils.Optional<ScenarioCountAggregateOutputType> | number
          }
        }
      }
      TestRun: {
        payload: Prisma.$TestRunPayload<ExtArgs>
        fields: Prisma.TestRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findFirst: {
            args: Prisma.TestRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findMany: {
            args: Prisma.TestRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          create: {
            args: Prisma.TestRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          createMany: {
            args: Prisma.TestRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          delete: {
            args: Prisma.TestRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          update: {
            args: Prisma.TestRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          deleteMany: {
            args: Prisma.TestRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          upsert: {
            args: Prisma.TestRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          aggregate: {
            args: Prisma.TestRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestRun>
          }
          groupBy: {
            args: Prisma.TestRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestRunCountArgs<ExtArgs>
            result: $Utils.Optional<TestRunCountAggregateOutputType> | number
          }
        }
      }
      TestResult: {
        payload: Prisma.$TestResultPayload<ExtArgs>
        fields: Prisma.TestResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findFirst: {
            args: Prisma.TestResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          findMany: {
            args: Prisma.TestResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          create: {
            args: Prisma.TestResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          createMany: {
            args: Prisma.TestResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          delete: {
            args: Prisma.TestResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          update: {
            args: Prisma.TestResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          deleteMany: {
            args: Prisma.TestResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>[]
          }
          upsert: {
            args: Prisma.TestResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestResultPayload>
          }
          aggregate: {
            args: Prisma.TestResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestResult>
          }
          groupBy: {
            args: Prisma.TestResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestResultCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    workspace?: WorkspaceOmit
    guestSession?: GuestSessionOmit
    endpoint?: EndpointOmit
    responseRule?: ResponseRuleOmit
    event?: EventOmit
    delivery?: DeliveryOmit
    replayJob?: ReplayJobOmit
    scenario?: ScenarioOmit
    testRun?: TestRunOmit
    testResult?: TestResultOmit
    template?: TemplateOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    endpoints: number
    guestSessions: number
    scenarios: number
    testRuns: number
    auditLogs: number
    templates: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | WorkspaceCountOutputTypeCountEndpointsArgs
    guestSessions?: boolean | WorkspaceCountOutputTypeCountGuestSessionsArgs
    scenarios?: boolean | WorkspaceCountOutputTypeCountScenariosArgs
    testRuns?: boolean | WorkspaceCountOutputTypeCountTestRunsArgs
    auditLogs?: boolean | WorkspaceCountOutputTypeCountAuditLogsArgs
    templates?: boolean | WorkspaceCountOutputTypeCountTemplatesArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountGuestSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestSessionWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountScenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTestRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
  }


  /**
   * Count Type EndpointCountOutputType
   */

  export type EndpointCountOutputType = {
    events: number
  }

  export type EndpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EndpointCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointCountOutputType
     */
    select?: EndpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    deliveries: number
    replayJobs: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | EventCountOutputTypeCountDeliveriesArgs
    replayJobs?: boolean | EventCountOutputTypeCountReplayJobsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReplayJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplayJobWhereInput
  }


  /**
   * Count Type ScenarioCountOutputType
   */

  export type ScenarioCountOutputType = {
    testRuns: number
  }

  export type ScenarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRuns?: boolean | ScenarioCountOutputTypeCountTestRunsArgs
  }

  // Custom InputTypes
  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScenarioCountOutputType
     */
    select?: ScenarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScenarioCountOutputType without action
   */
  export type ScenarioCountOutputTypeCountTestRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
  }


  /**
   * Count Type TestRunCountOutputType
   */

  export type TestRunCountOutputType = {
    testResults: number
  }

  export type TestRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testResults?: boolean | TestRunCountOutputTypeCountTestResultsArgs
  }

  // Custom InputTypes
  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRunCountOutputType
     */
    select?: TestRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeCountTestResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    isGuest: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerId: string | null
    isGuest: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    isGuest: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    isGuest?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    ownerId: string | null
    isGuest: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
    endpoints?: boolean | Workspace$endpointsArgs<ExtArgs>
    guestSessions?: boolean | Workspace$guestSessionsArgs<ExtArgs>
    scenarios?: boolean | Workspace$scenariosArgs<ExtArgs>
    testRuns?: boolean | Workspace$testRunsArgs<ExtArgs>
    auditLogs?: boolean | Workspace$auditLogsArgs<ExtArgs>
    templates?: boolean | Workspace$templatesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    isGuest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "isGuest" | "createdAt" | "updatedAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
    endpoints?: boolean | Workspace$endpointsArgs<ExtArgs>
    guestSessions?: boolean | Workspace$guestSessionsArgs<ExtArgs>
    scenarios?: boolean | Workspace$scenariosArgs<ExtArgs>
    testRuns?: boolean | Workspace$testRunsArgs<ExtArgs>
    auditLogs?: boolean | Workspace$auditLogsArgs<ExtArgs>
    templates?: boolean | Workspace$templatesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Workspace$ownerArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      endpoints: Prisma.$EndpointPayload<ExtArgs>[]
      guestSessions: Prisma.$GuestSessionPayload<ExtArgs>[]
      scenarios: Prisma.$ScenarioPayload<ExtArgs>[]
      testRuns: Prisma.$TestRunPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      templates: Prisma.$TemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerId: string | null
      isGuest: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Workspace$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endpoints<T extends Workspace$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guestSessions<T extends Workspace$guestSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$guestSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenarios<T extends Workspace$scenariosArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$scenariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testRuns<T extends Workspace$testRunsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Workspace$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    templates<T extends Workspace$templatesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$templatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly ownerId: FieldRef<"Workspace", 'String'>
    readonly isGuest: FieldRef<"Workspace", 'Boolean'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.owner
   */
  export type Workspace$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Workspace.endpoints
   */
  export type Workspace$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    cursor?: EndpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Workspace.guestSessions
   */
  export type Workspace$guestSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    where?: GuestSessionWhereInput
    orderBy?: GuestSessionOrderByWithRelationInput | GuestSessionOrderByWithRelationInput[]
    cursor?: GuestSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestSessionScalarFieldEnum | GuestSessionScalarFieldEnum[]
  }

  /**
   * Workspace.scenarios
   */
  export type Workspace$scenariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    cursor?: ScenarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Workspace.testRuns
   */
  export type Workspace$testRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    cursor?: TestRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * Workspace.auditLogs
   */
  export type Workspace$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Workspace.templates
   */
  export type Workspace$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    cursor?: TemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model GuestSession
   */

  export type AggregateGuestSession = {
    _count: GuestSessionCountAggregateOutputType | null
    _min: GuestSessionMinAggregateOutputType | null
    _max: GuestSessionMaxAggregateOutputType | null
  }

  export type GuestSessionMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    clientName: string | null
    workspaceId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type GuestSessionMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    clientName: string | null
    workspaceId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type GuestSessionCountAggregateOutputType = {
    id: number
    tokenHash: number
    clientName: number
    workspaceId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type GuestSessionMinAggregateInputType = {
    id?: true
    tokenHash?: true
    clientName?: true
    workspaceId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type GuestSessionMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    clientName?: true
    workspaceId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type GuestSessionCountAggregateInputType = {
    id?: true
    tokenHash?: true
    clientName?: true
    workspaceId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type GuestSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestSession to aggregate.
     */
    where?: GuestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestSessions to fetch.
     */
    orderBy?: GuestSessionOrderByWithRelationInput | GuestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuestSessions
    **/
    _count?: true | GuestSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestSessionMaxAggregateInputType
  }

  export type GetGuestSessionAggregateType<T extends GuestSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGuestSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuestSession[P]>
      : GetScalarType<T[P], AggregateGuestSession[P]>
  }




  export type GuestSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestSessionWhereInput
    orderBy?: GuestSessionOrderByWithAggregationInput | GuestSessionOrderByWithAggregationInput[]
    by: GuestSessionScalarFieldEnum[] | GuestSessionScalarFieldEnum
    having?: GuestSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestSessionCountAggregateInputType | true
    _min?: GuestSessionMinAggregateInputType
    _max?: GuestSessionMaxAggregateInputType
  }

  export type GuestSessionGroupByOutputType = {
    id: string
    tokenHash: string
    clientName: string
    workspaceId: string
    expiresAt: Date
    createdAt: Date
    _count: GuestSessionCountAggregateOutputType | null
    _min: GuestSessionMinAggregateOutputType | null
    _max: GuestSessionMaxAggregateOutputType | null
  }

  type GetGuestSessionGroupByPayload<T extends GuestSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GuestSessionGroupByOutputType[P]>
        }
      >
    >


  export type GuestSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    clientName?: boolean
    workspaceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestSession"]>

  export type GuestSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    clientName?: boolean
    workspaceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestSession"]>

  export type GuestSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    clientName?: boolean
    workspaceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guestSession"]>

  export type GuestSessionSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    clientName?: boolean
    workspaceId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type GuestSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "clientName" | "workspaceId" | "expiresAt" | "createdAt", ExtArgs["result"]["guestSession"]>
  export type GuestSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GuestSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type GuestSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $GuestSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuestSession"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      clientName: string
      workspaceId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["guestSession"]>
    composites: {}
  }

  type GuestSessionGetPayload<S extends boolean | null | undefined | GuestSessionDefaultArgs> = $Result.GetResult<Prisma.$GuestSessionPayload, S>

  type GuestSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestSessionCountAggregateInputType | true
    }

  export interface GuestSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuestSession'], meta: { name: 'GuestSession' } }
    /**
     * Find zero or one GuestSession that matches the filter.
     * @param {GuestSessionFindUniqueArgs} args - Arguments to find a GuestSession
     * @example
     * // Get one GuestSession
     * const guestSession = await prisma.guestSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestSessionFindUniqueArgs>(args: SelectSubset<T, GuestSessionFindUniqueArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuestSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestSessionFindUniqueOrThrowArgs} args - Arguments to find a GuestSession
     * @example
     * // Get one GuestSession
     * const guestSession = await prisma.guestSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionFindFirstArgs} args - Arguments to find a GuestSession
     * @example
     * // Get one GuestSession
     * const guestSession = await prisma.guestSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestSessionFindFirstArgs>(args?: SelectSubset<T, GuestSessionFindFirstArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuestSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionFindFirstOrThrowArgs} args - Arguments to find a GuestSession
     * @example
     * // Get one GuestSession
     * const guestSession = await prisma.guestSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuestSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuestSessions
     * const guestSessions = await prisma.guestSession.findMany()
     * 
     * // Get first 10 GuestSessions
     * const guestSessions = await prisma.guestSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestSessionWithIdOnly = await prisma.guestSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestSessionFindManyArgs>(args?: SelectSubset<T, GuestSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuestSession.
     * @param {GuestSessionCreateArgs} args - Arguments to create a GuestSession.
     * @example
     * // Create one GuestSession
     * const GuestSession = await prisma.guestSession.create({
     *   data: {
     *     // ... data to create a GuestSession
     *   }
     * })
     * 
     */
    create<T extends GuestSessionCreateArgs>(args: SelectSubset<T, GuestSessionCreateArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuestSessions.
     * @param {GuestSessionCreateManyArgs} args - Arguments to create many GuestSessions.
     * @example
     * // Create many GuestSessions
     * const guestSession = await prisma.guestSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestSessionCreateManyArgs>(args?: SelectSubset<T, GuestSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuestSessions and returns the data saved in the database.
     * @param {GuestSessionCreateManyAndReturnArgs} args - Arguments to create many GuestSessions.
     * @example
     * // Create many GuestSessions
     * const guestSession = await prisma.guestSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuestSessions and only return the `id`
     * const guestSessionWithIdOnly = await prisma.guestSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuestSession.
     * @param {GuestSessionDeleteArgs} args - Arguments to delete one GuestSession.
     * @example
     * // Delete one GuestSession
     * const GuestSession = await prisma.guestSession.delete({
     *   where: {
     *     // ... filter to delete one GuestSession
     *   }
     * })
     * 
     */
    delete<T extends GuestSessionDeleteArgs>(args: SelectSubset<T, GuestSessionDeleteArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuestSession.
     * @param {GuestSessionUpdateArgs} args - Arguments to update one GuestSession.
     * @example
     * // Update one GuestSession
     * const guestSession = await prisma.guestSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestSessionUpdateArgs>(args: SelectSubset<T, GuestSessionUpdateArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuestSessions.
     * @param {GuestSessionDeleteManyArgs} args - Arguments to filter GuestSessions to delete.
     * @example
     * // Delete a few GuestSessions
     * const { count } = await prisma.guestSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestSessionDeleteManyArgs>(args?: SelectSubset<T, GuestSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuestSessions
     * const guestSession = await prisma.guestSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestSessionUpdateManyArgs>(args: SelectSubset<T, GuestSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuestSessions and returns the data updated in the database.
     * @param {GuestSessionUpdateManyAndReturnArgs} args - Arguments to update many GuestSessions.
     * @example
     * // Update many GuestSessions
     * const guestSession = await prisma.guestSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuestSessions and only return the `id`
     * const guestSessionWithIdOnly = await prisma.guestSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuestSession.
     * @param {GuestSessionUpsertArgs} args - Arguments to update or create a GuestSession.
     * @example
     * // Update or create a GuestSession
     * const guestSession = await prisma.guestSession.upsert({
     *   create: {
     *     // ... data to create a GuestSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuestSession we want to update
     *   }
     * })
     */
    upsert<T extends GuestSessionUpsertArgs>(args: SelectSubset<T, GuestSessionUpsertArgs<ExtArgs>>): Prisma__GuestSessionClient<$Result.GetResult<Prisma.$GuestSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionCountArgs} args - Arguments to filter GuestSessions to count.
     * @example
     * // Count the number of GuestSessions
     * const count = await prisma.guestSession.count({
     *   where: {
     *     // ... the filter for the GuestSessions we want to count
     *   }
     * })
    **/
    count<T extends GuestSessionCountArgs>(
      args?: Subset<T, GuestSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestSessionAggregateArgs>(args: Subset<T, GuestSessionAggregateArgs>): Prisma.PrismaPromise<GetGuestSessionAggregateType<T>>

    /**
     * Group by GuestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestSessionGroupByArgs} args - Group by arguments.
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
      T extends GuestSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestSessionGroupByArgs['orderBy'] }
        : { orderBy?: GuestSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuestSession model
   */
  readonly fields: GuestSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuestSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GuestSession model
   */
  interface GuestSessionFieldRefs {
    readonly id: FieldRef<"GuestSession", 'String'>
    readonly tokenHash: FieldRef<"GuestSession", 'String'>
    readonly clientName: FieldRef<"GuestSession", 'String'>
    readonly workspaceId: FieldRef<"GuestSession", 'String'>
    readonly expiresAt: FieldRef<"GuestSession", 'DateTime'>
    readonly createdAt: FieldRef<"GuestSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GuestSession findUnique
   */
  export type GuestSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter, which GuestSession to fetch.
     */
    where: GuestSessionWhereUniqueInput
  }

  /**
   * GuestSession findUniqueOrThrow
   */
  export type GuestSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter, which GuestSession to fetch.
     */
    where: GuestSessionWhereUniqueInput
  }

  /**
   * GuestSession findFirst
   */
  export type GuestSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter, which GuestSession to fetch.
     */
    where?: GuestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestSessions to fetch.
     */
    orderBy?: GuestSessionOrderByWithRelationInput | GuestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestSessions.
     */
    cursor?: GuestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestSessions.
     */
    distinct?: GuestSessionScalarFieldEnum | GuestSessionScalarFieldEnum[]
  }

  /**
   * GuestSession findFirstOrThrow
   */
  export type GuestSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter, which GuestSession to fetch.
     */
    where?: GuestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestSessions to fetch.
     */
    orderBy?: GuestSessionOrderByWithRelationInput | GuestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuestSessions.
     */
    cursor?: GuestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuestSessions.
     */
    distinct?: GuestSessionScalarFieldEnum | GuestSessionScalarFieldEnum[]
  }

  /**
   * GuestSession findMany
   */
  export type GuestSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter, which GuestSessions to fetch.
     */
    where?: GuestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuestSessions to fetch.
     */
    orderBy?: GuestSessionOrderByWithRelationInput | GuestSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuestSessions.
     */
    cursor?: GuestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuestSessions.
     */
    skip?: number
    distinct?: GuestSessionScalarFieldEnum | GuestSessionScalarFieldEnum[]
  }

  /**
   * GuestSession create
   */
  export type GuestSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GuestSession.
     */
    data: XOR<GuestSessionCreateInput, GuestSessionUncheckedCreateInput>
  }

  /**
   * GuestSession createMany
   */
  export type GuestSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuestSessions.
     */
    data: GuestSessionCreateManyInput | GuestSessionCreateManyInput[]
  }

  /**
   * GuestSession createManyAndReturn
   */
  export type GuestSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * The data used to create many GuestSessions.
     */
    data: GuestSessionCreateManyInput | GuestSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestSession update
   */
  export type GuestSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GuestSession.
     */
    data: XOR<GuestSessionUpdateInput, GuestSessionUncheckedUpdateInput>
    /**
     * Choose, which GuestSession to update.
     */
    where: GuestSessionWhereUniqueInput
  }

  /**
   * GuestSession updateMany
   */
  export type GuestSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuestSessions.
     */
    data: XOR<GuestSessionUpdateManyMutationInput, GuestSessionUncheckedUpdateManyInput>
    /**
     * Filter which GuestSessions to update
     */
    where?: GuestSessionWhereInput
    /**
     * Limit how many GuestSessions to update.
     */
    limit?: number
  }

  /**
   * GuestSession updateManyAndReturn
   */
  export type GuestSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * The data used to update GuestSessions.
     */
    data: XOR<GuestSessionUpdateManyMutationInput, GuestSessionUncheckedUpdateManyInput>
    /**
     * Filter which GuestSessions to update
     */
    where?: GuestSessionWhereInput
    /**
     * Limit how many GuestSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GuestSession upsert
   */
  export type GuestSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GuestSession to update in case it exists.
     */
    where: GuestSessionWhereUniqueInput
    /**
     * In case the GuestSession found by the `where` argument doesn't exist, create a new GuestSession with this data.
     */
    create: XOR<GuestSessionCreateInput, GuestSessionUncheckedCreateInput>
    /**
     * In case the GuestSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestSessionUpdateInput, GuestSessionUncheckedUpdateInput>
  }

  /**
   * GuestSession delete
   */
  export type GuestSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
    /**
     * Filter which GuestSession to delete.
     */
    where: GuestSessionWhereUniqueInput
  }

  /**
   * GuestSession deleteMany
   */
  export type GuestSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuestSessions to delete
     */
    where?: GuestSessionWhereInput
    /**
     * Limit how many GuestSessions to delete.
     */
    limit?: number
  }

  /**
   * GuestSession without action
   */
  export type GuestSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestSession
     */
    select?: GuestSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuestSession
     */
    omit?: GuestSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestSessionInclude<ExtArgs> | null
  }


  /**
   * Model Endpoint
   */

  export type AggregateEndpoint = {
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  export type EndpointMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    tokenHash: string | null
    tokenPrefix: string | null
    name: string | null
    description: string | null
    signingSecretEnc: string | null
    isPaused: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndpointMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    tokenHash: string | null
    tokenPrefix: string | null
    name: string | null
    description: string | null
    signingSecretEnc: string | null
    isPaused: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EndpointCountAggregateOutputType = {
    id: number
    workspaceId: number
    tokenHash: number
    tokenPrefix: number
    name: number
    description: number
    signingSecretEnc: number
    isPaused: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EndpointMinAggregateInputType = {
    id?: true
    workspaceId?: true
    tokenHash?: true
    tokenPrefix?: true
    name?: true
    description?: true
    signingSecretEnc?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndpointMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    tokenHash?: true
    tokenPrefix?: true
    name?: true
    description?: true
    signingSecretEnc?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EndpointCountAggregateInputType = {
    id?: true
    workspaceId?: true
    tokenHash?: true
    tokenPrefix?: true
    name?: true
    description?: true
    signingSecretEnc?: true
    isPaused?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoint to aggregate.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Endpoints
    **/
    _count?: true | EndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointMaxAggregateInputType
  }

  export type GetEndpointAggregateType<T extends EndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpoint[P]>
      : GetScalarType<T[P], AggregateEndpoint[P]>
  }




  export type EndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithAggregationInput | EndpointOrderByWithAggregationInput[]
    by: EndpointScalarFieldEnum[] | EndpointScalarFieldEnum
    having?: EndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointCountAggregateInputType | true
    _min?: EndpointMinAggregateInputType
    _max?: EndpointMaxAggregateInputType
  }

  export type EndpointGroupByOutputType = {
    id: string
    workspaceId: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description: string | null
    signingSecretEnc: string | null
    isPaused: boolean
    createdAt: Date
    updatedAt: Date
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  type GetEndpointGroupByPayload<T extends EndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointGroupByOutputType[P]>
        }
      >
    >


  export type EndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    tokenHash?: boolean
    tokenPrefix?: boolean
    name?: boolean
    description?: boolean
    signingSecretEnc?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    responseRule?: boolean | Endpoint$responseRuleArgs<ExtArgs>
    events?: boolean | Endpoint$eventsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    tokenHash?: boolean
    tokenPrefix?: boolean
    name?: boolean
    description?: boolean
    signingSecretEnc?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    tokenHash?: boolean
    tokenPrefix?: boolean
    name?: boolean
    description?: boolean
    signingSecretEnc?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    tokenHash?: boolean
    tokenPrefix?: boolean
    name?: boolean
    description?: boolean
    signingSecretEnc?: boolean
    isPaused?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EndpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "tokenHash" | "tokenPrefix" | "name" | "description" | "signingSecretEnc" | "isPaused" | "createdAt" | "updatedAt", ExtArgs["result"]["endpoint"]>
  export type EndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    responseRule?: boolean | Endpoint$responseRuleArgs<ExtArgs>
    events?: boolean | Endpoint$eventsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $EndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endpoint"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      responseRule: Prisma.$ResponseRulePayload<ExtArgs> | null
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      tokenHash: string
      tokenPrefix: string
      name: string
      description: string | null
      signingSecretEnc: string | null
      isPaused: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["endpoint"]>
    composites: {}
  }

  type EndpointGetPayload<S extends boolean | null | undefined | EndpointDefaultArgs> = $Result.GetResult<Prisma.$EndpointPayload, S>

  type EndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointCountAggregateInputType | true
    }

  export interface EndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endpoint'], meta: { name: 'Endpoint' } }
    /**
     * Find zero or one Endpoint that matches the filter.
     * @param {EndpointFindUniqueArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndpointFindUniqueArgs>(args: SelectSubset<T, EndpointFindUniqueArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndpointFindUniqueOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, EndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndpointFindFirstArgs>(args?: SelectSubset<T, EndpointFindFirstArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, EndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endpoints
     * const endpoints = await prisma.endpoint.findMany()
     * 
     * // Get first 10 Endpoints
     * const endpoints = await prisma.endpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endpointWithIdOnly = await prisma.endpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndpointFindManyArgs>(args?: SelectSubset<T, EndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endpoint.
     * @param {EndpointCreateArgs} args - Arguments to create a Endpoint.
     * @example
     * // Create one Endpoint
     * const Endpoint = await prisma.endpoint.create({
     *   data: {
     *     // ... data to create a Endpoint
     *   }
     * })
     * 
     */
    create<T extends EndpointCreateArgs>(args: SelectSubset<T, EndpointCreateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endpoints.
     * @param {EndpointCreateManyArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndpointCreateManyArgs>(args?: SelectSubset<T, EndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endpoints and returns the data saved in the database.
     * @param {EndpointCreateManyAndReturnArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, EndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endpoint.
     * @param {EndpointDeleteArgs} args - Arguments to delete one Endpoint.
     * @example
     * // Delete one Endpoint
     * const Endpoint = await prisma.endpoint.delete({
     *   where: {
     *     // ... filter to delete one Endpoint
     *   }
     * })
     * 
     */
    delete<T extends EndpointDeleteArgs>(args: SelectSubset<T, EndpointDeleteArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endpoint.
     * @param {EndpointUpdateArgs} args - Arguments to update one Endpoint.
     * @example
     * // Update one Endpoint
     * const endpoint = await prisma.endpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndpointUpdateArgs>(args: SelectSubset<T, EndpointUpdateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endpoints.
     * @param {EndpointDeleteManyArgs} args - Arguments to filter Endpoints to delete.
     * @example
     * // Delete a few Endpoints
     * const { count } = await prisma.endpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndpointDeleteManyArgs>(args?: SelectSubset<T, EndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndpointUpdateManyArgs>(args: SelectSubset<T, EndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints and returns the data updated in the database.
     * @param {EndpointUpdateManyAndReturnArgs} args - Arguments to update many Endpoints.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EndpointUpdateManyAndReturnArgs>(args: SelectSubset<T, EndpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endpoint.
     * @param {EndpointUpsertArgs} args - Arguments to update or create a Endpoint.
     * @example
     * // Update or create a Endpoint
     * const endpoint = await prisma.endpoint.upsert({
     *   create: {
     *     // ... data to create a Endpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endpoint we want to update
     *   }
     * })
     */
    upsert<T extends EndpointUpsertArgs>(args: SelectSubset<T, EndpointUpsertArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointCountArgs} args - Arguments to filter Endpoints to count.
     * @example
     * // Count the number of Endpoints
     * const count = await prisma.endpoint.count({
     *   where: {
     *     // ... the filter for the Endpoints we want to count
     *   }
     * })
    **/
    count<T extends EndpointCountArgs>(
      args?: Subset<T, EndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointAggregateArgs>(args: Subset<T, EndpointAggregateArgs>): Prisma.PrismaPromise<GetEndpointAggregateType<T>>

    /**
     * Group by Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointGroupByArgs} args - Group by arguments.
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
      T extends EndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndpointGroupByArgs['orderBy'] }
        : { orderBy?: EndpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endpoint model
   */
  readonly fields: EndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responseRule<T extends Endpoint$responseRuleArgs<ExtArgs> = {}>(args?: Subset<T, Endpoint$responseRuleArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends Endpoint$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Endpoint$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Endpoint model
   */
  interface EndpointFieldRefs {
    readonly id: FieldRef<"Endpoint", 'String'>
    readonly workspaceId: FieldRef<"Endpoint", 'String'>
    readonly tokenHash: FieldRef<"Endpoint", 'String'>
    readonly tokenPrefix: FieldRef<"Endpoint", 'String'>
    readonly name: FieldRef<"Endpoint", 'String'>
    readonly description: FieldRef<"Endpoint", 'String'>
    readonly signingSecretEnc: FieldRef<"Endpoint", 'String'>
    readonly isPaused: FieldRef<"Endpoint", 'Boolean'>
    readonly createdAt: FieldRef<"Endpoint", 'DateTime'>
    readonly updatedAt: FieldRef<"Endpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Endpoint findUnique
   */
  export type EndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findUniqueOrThrow
   */
  export type EndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findFirst
   */
  export type EndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findFirstOrThrow
   */
  export type EndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findMany
   */
  export type EndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoints to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint create
   */
  export type EndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a Endpoint.
     */
    data: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
  }

  /**
   * Endpoint createMany
   */
  export type EndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
  }

  /**
   * Endpoint createManyAndReturn
   */
  export type EndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint update
   */
  export type EndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a Endpoint.
     */
    data: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
    /**
     * Choose, which Endpoint to update.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint updateMany
   */
  export type EndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
  }

  /**
   * Endpoint updateManyAndReturn
   */
  export type EndpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint upsert
   */
  export type EndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the Endpoint to update in case it exists.
     */
    where: EndpointWhereUniqueInput
    /**
     * In case the Endpoint found by the `where` argument doesn't exist, create a new Endpoint with this data.
     */
    create: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
    /**
     * In case the Endpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
  }

  /**
   * Endpoint delete
   */
  export type EndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter which Endpoint to delete.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint deleteMany
   */
  export type EndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoints to delete
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to delete.
     */
    limit?: number
  }

  /**
   * Endpoint.responseRule
   */
  export type Endpoint$responseRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    where?: ResponseRuleWhereInput
  }

  /**
   * Endpoint.events
   */
  export type Endpoint$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Endpoint without action
   */
  export type EndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
  }


  /**
   * Model ResponseRule
   */

  export type AggregateResponseRule = {
    _count: ResponseRuleCountAggregateOutputType | null
    _avg: ResponseRuleAvgAggregateOutputType | null
    _sum: ResponseRuleSumAggregateOutputType | null
    _min: ResponseRuleMinAggregateOutputType | null
    _max: ResponseRuleMaxAggregateOutputType | null
  }

  export type ResponseRuleAvgAggregateOutputType = {
    statusCode: number | null
    delayMs: number | null
    rateLimitPerMin: number | null
  }

  export type ResponseRuleSumAggregateOutputType = {
    statusCode: number | null
    delayMs: number | null
    rateLimitPerMin: number | null
  }

  export type ResponseRuleMinAggregateOutputType = {
    id: string | null
    endpointId: string | null
    statusCode: number | null
    contentType: string | null
    body: string | null
    headersJson: string | null
    delayMs: number | null
    rateLimitPerMin: number | null
    updatedAt: Date | null
  }

  export type ResponseRuleMaxAggregateOutputType = {
    id: string | null
    endpointId: string | null
    statusCode: number | null
    contentType: string | null
    body: string | null
    headersJson: string | null
    delayMs: number | null
    rateLimitPerMin: number | null
    updatedAt: Date | null
  }

  export type ResponseRuleCountAggregateOutputType = {
    id: number
    endpointId: number
    statusCode: number
    contentType: number
    body: number
    headersJson: number
    delayMs: number
    rateLimitPerMin: number
    updatedAt: number
    _all: number
  }


  export type ResponseRuleAvgAggregateInputType = {
    statusCode?: true
    delayMs?: true
    rateLimitPerMin?: true
  }

  export type ResponseRuleSumAggregateInputType = {
    statusCode?: true
    delayMs?: true
    rateLimitPerMin?: true
  }

  export type ResponseRuleMinAggregateInputType = {
    id?: true
    endpointId?: true
    statusCode?: true
    contentType?: true
    body?: true
    headersJson?: true
    delayMs?: true
    rateLimitPerMin?: true
    updatedAt?: true
  }

  export type ResponseRuleMaxAggregateInputType = {
    id?: true
    endpointId?: true
    statusCode?: true
    contentType?: true
    body?: true
    headersJson?: true
    delayMs?: true
    rateLimitPerMin?: true
    updatedAt?: true
  }

  export type ResponseRuleCountAggregateInputType = {
    id?: true
    endpointId?: true
    statusCode?: true
    contentType?: true
    body?: true
    headersJson?: true
    delayMs?: true
    rateLimitPerMin?: true
    updatedAt?: true
    _all?: true
  }

  export type ResponseRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponseRule to aggregate.
     */
    where?: ResponseRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponseRules to fetch.
     */
    orderBy?: ResponseRuleOrderByWithRelationInput | ResponseRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponseRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponseRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponseRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResponseRules
    **/
    _count?: true | ResponseRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponseRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponseRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponseRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponseRuleMaxAggregateInputType
  }

  export type GetResponseRuleAggregateType<T extends ResponseRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateResponseRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponseRule[P]>
      : GetScalarType<T[P], AggregateResponseRule[P]>
  }




  export type ResponseRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponseRuleWhereInput
    orderBy?: ResponseRuleOrderByWithAggregationInput | ResponseRuleOrderByWithAggregationInput[]
    by: ResponseRuleScalarFieldEnum[] | ResponseRuleScalarFieldEnum
    having?: ResponseRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponseRuleCountAggregateInputType | true
    _avg?: ResponseRuleAvgAggregateInputType
    _sum?: ResponseRuleSumAggregateInputType
    _min?: ResponseRuleMinAggregateInputType
    _max?: ResponseRuleMaxAggregateInputType
  }

  export type ResponseRuleGroupByOutputType = {
    id: string
    endpointId: string
    statusCode: number
    contentType: string
    body: string
    headersJson: string
    delayMs: number
    rateLimitPerMin: number
    updatedAt: Date
    _count: ResponseRuleCountAggregateOutputType | null
    _avg: ResponseRuleAvgAggregateOutputType | null
    _sum: ResponseRuleSumAggregateOutputType | null
    _min: ResponseRuleMinAggregateOutputType | null
    _max: ResponseRuleMaxAggregateOutputType | null
  }

  type GetResponseRuleGroupByPayload<T extends ResponseRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponseRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponseRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponseRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ResponseRuleGroupByOutputType[P]>
        }
      >
    >


  export type ResponseRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    statusCode?: boolean
    contentType?: boolean
    body?: boolean
    headersJson?: boolean
    delayMs?: boolean
    rateLimitPerMin?: boolean
    updatedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responseRule"]>

  export type ResponseRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    statusCode?: boolean
    contentType?: boolean
    body?: boolean
    headersJson?: boolean
    delayMs?: boolean
    rateLimitPerMin?: boolean
    updatedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responseRule"]>

  export type ResponseRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    statusCode?: boolean
    contentType?: boolean
    body?: boolean
    headersJson?: boolean
    delayMs?: boolean
    rateLimitPerMin?: boolean
    updatedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responseRule"]>

  export type ResponseRuleSelectScalar = {
    id?: boolean
    endpointId?: boolean
    statusCode?: boolean
    contentType?: boolean
    body?: boolean
    headersJson?: boolean
    delayMs?: boolean
    rateLimitPerMin?: boolean
    updatedAt?: boolean
  }

  export type ResponseRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpointId" | "statusCode" | "contentType" | "body" | "headersJson" | "delayMs" | "rateLimitPerMin" | "updatedAt", ExtArgs["result"]["responseRule"]>
  export type ResponseRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type ResponseRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type ResponseRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }

  export type $ResponseRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResponseRule"
    objects: {
      endpoint: Prisma.$EndpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpointId: string
      statusCode: number
      contentType: string
      body: string
      headersJson: string
      delayMs: number
      rateLimitPerMin: number
      updatedAt: Date
    }, ExtArgs["result"]["responseRule"]>
    composites: {}
  }

  type ResponseRuleGetPayload<S extends boolean | null | undefined | ResponseRuleDefaultArgs> = $Result.GetResult<Prisma.$ResponseRulePayload, S>

  type ResponseRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponseRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponseRuleCountAggregateInputType | true
    }

  export interface ResponseRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResponseRule'], meta: { name: 'ResponseRule' } }
    /**
     * Find zero or one ResponseRule that matches the filter.
     * @param {ResponseRuleFindUniqueArgs} args - Arguments to find a ResponseRule
     * @example
     * // Get one ResponseRule
     * const responseRule = await prisma.responseRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponseRuleFindUniqueArgs>(args: SelectSubset<T, ResponseRuleFindUniqueArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResponseRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponseRuleFindUniqueOrThrowArgs} args - Arguments to find a ResponseRule
     * @example
     * // Get one ResponseRule
     * const responseRule = await prisma.responseRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponseRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponseRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponseRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleFindFirstArgs} args - Arguments to find a ResponseRule
     * @example
     * // Get one ResponseRule
     * const responseRule = await prisma.responseRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponseRuleFindFirstArgs>(args?: SelectSubset<T, ResponseRuleFindFirstArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponseRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleFindFirstOrThrowArgs} args - Arguments to find a ResponseRule
     * @example
     * // Get one ResponseRule
     * const responseRule = await prisma.responseRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponseRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponseRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResponseRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResponseRules
     * const responseRules = await prisma.responseRule.findMany()
     * 
     * // Get first 10 ResponseRules
     * const responseRules = await prisma.responseRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responseRuleWithIdOnly = await prisma.responseRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponseRuleFindManyArgs>(args?: SelectSubset<T, ResponseRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResponseRule.
     * @param {ResponseRuleCreateArgs} args - Arguments to create a ResponseRule.
     * @example
     * // Create one ResponseRule
     * const ResponseRule = await prisma.responseRule.create({
     *   data: {
     *     // ... data to create a ResponseRule
     *   }
     * })
     * 
     */
    create<T extends ResponseRuleCreateArgs>(args: SelectSubset<T, ResponseRuleCreateArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResponseRules.
     * @param {ResponseRuleCreateManyArgs} args - Arguments to create many ResponseRules.
     * @example
     * // Create many ResponseRules
     * const responseRule = await prisma.responseRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponseRuleCreateManyArgs>(args?: SelectSubset<T, ResponseRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResponseRules and returns the data saved in the database.
     * @param {ResponseRuleCreateManyAndReturnArgs} args - Arguments to create many ResponseRules.
     * @example
     * // Create many ResponseRules
     * const responseRule = await prisma.responseRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResponseRules and only return the `id`
     * const responseRuleWithIdOnly = await prisma.responseRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponseRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponseRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResponseRule.
     * @param {ResponseRuleDeleteArgs} args - Arguments to delete one ResponseRule.
     * @example
     * // Delete one ResponseRule
     * const ResponseRule = await prisma.responseRule.delete({
     *   where: {
     *     // ... filter to delete one ResponseRule
     *   }
     * })
     * 
     */
    delete<T extends ResponseRuleDeleteArgs>(args: SelectSubset<T, ResponseRuleDeleteArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResponseRule.
     * @param {ResponseRuleUpdateArgs} args - Arguments to update one ResponseRule.
     * @example
     * // Update one ResponseRule
     * const responseRule = await prisma.responseRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponseRuleUpdateArgs>(args: SelectSubset<T, ResponseRuleUpdateArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResponseRules.
     * @param {ResponseRuleDeleteManyArgs} args - Arguments to filter ResponseRules to delete.
     * @example
     * // Delete a few ResponseRules
     * const { count } = await prisma.responseRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponseRuleDeleteManyArgs>(args?: SelectSubset<T, ResponseRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResponseRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResponseRules
     * const responseRule = await prisma.responseRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponseRuleUpdateManyArgs>(args: SelectSubset<T, ResponseRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResponseRules and returns the data updated in the database.
     * @param {ResponseRuleUpdateManyAndReturnArgs} args - Arguments to update many ResponseRules.
     * @example
     * // Update many ResponseRules
     * const responseRule = await prisma.responseRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResponseRules and only return the `id`
     * const responseRuleWithIdOnly = await prisma.responseRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResponseRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponseRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResponseRule.
     * @param {ResponseRuleUpsertArgs} args - Arguments to update or create a ResponseRule.
     * @example
     * // Update or create a ResponseRule
     * const responseRule = await prisma.responseRule.upsert({
     *   create: {
     *     // ... data to create a ResponseRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResponseRule we want to update
     *   }
     * })
     */
    upsert<T extends ResponseRuleUpsertArgs>(args: SelectSubset<T, ResponseRuleUpsertArgs<ExtArgs>>): Prisma__ResponseRuleClient<$Result.GetResult<Prisma.$ResponseRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResponseRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleCountArgs} args - Arguments to filter ResponseRules to count.
     * @example
     * // Count the number of ResponseRules
     * const count = await prisma.responseRule.count({
     *   where: {
     *     // ... the filter for the ResponseRules we want to count
     *   }
     * })
    **/
    count<T extends ResponseRuleCountArgs>(
      args?: Subset<T, ResponseRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponseRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResponseRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponseRuleAggregateArgs>(args: Subset<T, ResponseRuleAggregateArgs>): Prisma.PrismaPromise<GetResponseRuleAggregateType<T>>

    /**
     * Group by ResponseRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponseRuleGroupByArgs} args - Group by arguments.
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
      T extends ResponseRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponseRuleGroupByArgs['orderBy'] }
        : { orderBy?: ResponseRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponseRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponseRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResponseRule model
   */
  readonly fields: ResponseRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResponseRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponseRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends EndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EndpointDefaultArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResponseRule model
   */
  interface ResponseRuleFieldRefs {
    readonly id: FieldRef<"ResponseRule", 'String'>
    readonly endpointId: FieldRef<"ResponseRule", 'String'>
    readonly statusCode: FieldRef<"ResponseRule", 'Int'>
    readonly contentType: FieldRef<"ResponseRule", 'String'>
    readonly body: FieldRef<"ResponseRule", 'String'>
    readonly headersJson: FieldRef<"ResponseRule", 'String'>
    readonly delayMs: FieldRef<"ResponseRule", 'Int'>
    readonly rateLimitPerMin: FieldRef<"ResponseRule", 'Int'>
    readonly updatedAt: FieldRef<"ResponseRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResponseRule findUnique
   */
  export type ResponseRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter, which ResponseRule to fetch.
     */
    where: ResponseRuleWhereUniqueInput
  }

  /**
   * ResponseRule findUniqueOrThrow
   */
  export type ResponseRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter, which ResponseRule to fetch.
     */
    where: ResponseRuleWhereUniqueInput
  }

  /**
   * ResponseRule findFirst
   */
  export type ResponseRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter, which ResponseRule to fetch.
     */
    where?: ResponseRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponseRules to fetch.
     */
    orderBy?: ResponseRuleOrderByWithRelationInput | ResponseRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponseRules.
     */
    cursor?: ResponseRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponseRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponseRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponseRules.
     */
    distinct?: ResponseRuleScalarFieldEnum | ResponseRuleScalarFieldEnum[]
  }

  /**
   * ResponseRule findFirstOrThrow
   */
  export type ResponseRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter, which ResponseRule to fetch.
     */
    where?: ResponseRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponseRules to fetch.
     */
    orderBy?: ResponseRuleOrderByWithRelationInput | ResponseRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponseRules.
     */
    cursor?: ResponseRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponseRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponseRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponseRules.
     */
    distinct?: ResponseRuleScalarFieldEnum | ResponseRuleScalarFieldEnum[]
  }

  /**
   * ResponseRule findMany
   */
  export type ResponseRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter, which ResponseRules to fetch.
     */
    where?: ResponseRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponseRules to fetch.
     */
    orderBy?: ResponseRuleOrderByWithRelationInput | ResponseRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResponseRules.
     */
    cursor?: ResponseRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponseRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponseRules.
     */
    skip?: number
    distinct?: ResponseRuleScalarFieldEnum | ResponseRuleScalarFieldEnum[]
  }

  /**
   * ResponseRule create
   */
  export type ResponseRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ResponseRule.
     */
    data: XOR<ResponseRuleCreateInput, ResponseRuleUncheckedCreateInput>
  }

  /**
   * ResponseRule createMany
   */
  export type ResponseRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResponseRules.
     */
    data: ResponseRuleCreateManyInput | ResponseRuleCreateManyInput[]
  }

  /**
   * ResponseRule createManyAndReturn
   */
  export type ResponseRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ResponseRules.
     */
    data: ResponseRuleCreateManyInput | ResponseRuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResponseRule update
   */
  export type ResponseRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ResponseRule.
     */
    data: XOR<ResponseRuleUpdateInput, ResponseRuleUncheckedUpdateInput>
    /**
     * Choose, which ResponseRule to update.
     */
    where: ResponseRuleWhereUniqueInput
  }

  /**
   * ResponseRule updateMany
   */
  export type ResponseRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResponseRules.
     */
    data: XOR<ResponseRuleUpdateManyMutationInput, ResponseRuleUncheckedUpdateManyInput>
    /**
     * Filter which ResponseRules to update
     */
    where?: ResponseRuleWhereInput
    /**
     * Limit how many ResponseRules to update.
     */
    limit?: number
  }

  /**
   * ResponseRule updateManyAndReturn
   */
  export type ResponseRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * The data used to update ResponseRules.
     */
    data: XOR<ResponseRuleUpdateManyMutationInput, ResponseRuleUncheckedUpdateManyInput>
    /**
     * Filter which ResponseRules to update
     */
    where?: ResponseRuleWhereInput
    /**
     * Limit how many ResponseRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResponseRule upsert
   */
  export type ResponseRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ResponseRule to update in case it exists.
     */
    where: ResponseRuleWhereUniqueInput
    /**
     * In case the ResponseRule found by the `where` argument doesn't exist, create a new ResponseRule with this data.
     */
    create: XOR<ResponseRuleCreateInput, ResponseRuleUncheckedCreateInput>
    /**
     * In case the ResponseRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponseRuleUpdateInput, ResponseRuleUncheckedUpdateInput>
  }

  /**
   * ResponseRule delete
   */
  export type ResponseRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
    /**
     * Filter which ResponseRule to delete.
     */
    where: ResponseRuleWhereUniqueInput
  }

  /**
   * ResponseRule deleteMany
   */
  export type ResponseRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponseRules to delete
     */
    where?: ResponseRuleWhereInput
    /**
     * Limit how many ResponseRules to delete.
     */
    limit?: number
  }

  /**
   * ResponseRule without action
   */
  export type ResponseRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponseRule
     */
    select?: ResponseRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponseRule
     */
    omit?: ResponseRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponseRuleInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    statusCode: number | null
    sizeBytes: number | null
  }

  export type EventSumAggregateOutputType = {
    statusCode: number | null
    sizeBytes: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    endpointId: string | null
    method: string | null
    path: string | null
    queryJson: string | null
    headersJson: string | null
    rawBody: Bytes | null
    parsedBody: string | null
    statusCode: number | null
    ip: string | null
    sizeBytes: number | null
    isInvalidJson: boolean | null
    redactedHeaders: string | null
    receivedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    endpointId: string | null
    method: string | null
    path: string | null
    queryJson: string | null
    headersJson: string | null
    rawBody: Bytes | null
    parsedBody: string | null
    statusCode: number | null
    ip: string | null
    sizeBytes: number | null
    isInvalidJson: boolean | null
    redactedHeaders: string | null
    receivedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    endpointId: number
    method: number
    path: number
    queryJson: number
    headersJson: number
    rawBody: number
    parsedBody: number
    statusCode: number
    ip: number
    sizeBytes: number
    isInvalidJson: number
    redactedHeaders: number
    receivedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    statusCode?: true
    sizeBytes?: true
  }

  export type EventSumAggregateInputType = {
    statusCode?: true
    sizeBytes?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    endpointId?: true
    method?: true
    path?: true
    queryJson?: true
    headersJson?: true
    rawBody?: true
    parsedBody?: true
    statusCode?: true
    ip?: true
    sizeBytes?: true
    isInvalidJson?: true
    redactedHeaders?: true
    receivedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    endpointId?: true
    method?: true
    path?: true
    queryJson?: true
    headersJson?: true
    rawBody?: true
    parsedBody?: true
    statusCode?: true
    ip?: true
    sizeBytes?: true
    isInvalidJson?: true
    redactedHeaders?: true
    receivedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    endpointId?: true
    method?: true
    path?: true
    queryJson?: true
    headersJson?: true
    rawBody?: true
    parsedBody?: true
    statusCode?: true
    ip?: true
    sizeBytes?: true
    isInvalidJson?: true
    redactedHeaders?: true
    receivedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    endpointId: string
    method: string
    path: string
    queryJson: string
    headersJson: string
    rawBody: Bytes
    parsedBody: string | null
    statusCode: number
    ip: string
    sizeBytes: number
    isInvalidJson: boolean
    redactedHeaders: string
    receivedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    method?: boolean
    path?: boolean
    queryJson?: boolean
    headersJson?: boolean
    rawBody?: boolean
    parsedBody?: boolean
    statusCode?: boolean
    ip?: boolean
    sizeBytes?: boolean
    isInvalidJson?: boolean
    redactedHeaders?: boolean
    receivedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
    deliveries?: boolean | Event$deliveriesArgs<ExtArgs>
    replayJobs?: boolean | Event$replayJobsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    method?: boolean
    path?: boolean
    queryJson?: boolean
    headersJson?: boolean
    rawBody?: boolean
    parsedBody?: boolean
    statusCode?: boolean
    ip?: boolean
    sizeBytes?: boolean
    isInvalidJson?: boolean
    redactedHeaders?: boolean
    receivedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    endpointId?: boolean
    method?: boolean
    path?: boolean
    queryJson?: boolean
    headersJson?: boolean
    rawBody?: boolean
    parsedBody?: boolean
    statusCode?: boolean
    ip?: boolean
    sizeBytes?: boolean
    isInvalidJson?: boolean
    redactedHeaders?: boolean
    receivedAt?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    endpointId?: boolean
    method?: boolean
    path?: boolean
    queryJson?: boolean
    headersJson?: boolean
    rawBody?: boolean
    parsedBody?: boolean
    statusCode?: boolean
    ip?: boolean
    sizeBytes?: boolean
    isInvalidJson?: boolean
    redactedHeaders?: boolean
    receivedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "endpointId" | "method" | "path" | "queryJson" | "headersJson" | "rawBody" | "parsedBody" | "statusCode" | "ip" | "sizeBytes" | "isInvalidJson" | "redactedHeaders" | "receivedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
    deliveries?: boolean | Event$deliveriesArgs<ExtArgs>
    replayJobs?: boolean | Event$replayJobsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      endpoint: Prisma.$EndpointPayload<ExtArgs>
      deliveries: Prisma.$DeliveryPayload<ExtArgs>[]
      replayJobs: Prisma.$ReplayJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      endpointId: string
      method: string
      path: string
      queryJson: string
      headersJson: string
      rawBody: Prisma.Bytes
      parsedBody: string | null
      statusCode: number
      ip: string
      sizeBytes: number
      isInvalidJson: boolean
      redactedHeaders: string
      receivedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends EndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EndpointDefaultArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveries<T extends Event$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Event$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replayJobs<T extends Event$replayJobsArgs<ExtArgs> = {}>(args?: Subset<T, Event$replayJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly endpointId: FieldRef<"Event", 'String'>
    readonly method: FieldRef<"Event", 'String'>
    readonly path: FieldRef<"Event", 'String'>
    readonly queryJson: FieldRef<"Event", 'String'>
    readonly headersJson: FieldRef<"Event", 'String'>
    readonly rawBody: FieldRef<"Event", 'Bytes'>
    readonly parsedBody: FieldRef<"Event", 'String'>
    readonly statusCode: FieldRef<"Event", 'Int'>
    readonly ip: FieldRef<"Event", 'String'>
    readonly sizeBytes: FieldRef<"Event", 'Int'>
    readonly isInvalidJson: FieldRef<"Event", 'Boolean'>
    readonly redactedHeaders: FieldRef<"Event", 'String'>
    readonly receivedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.deliveries
   */
  export type Event$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Event.replayJobs
   */
  export type Event$replayJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    where?: ReplayJobWhereInput
    orderBy?: ReplayJobOrderByWithRelationInput | ReplayJobOrderByWithRelationInput[]
    cursor?: ReplayJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplayJobScalarFieldEnum | ReplayJobScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    statusCode: number | null
    latencyMs: number | null
  }

  export type DeliverySumAggregateOutputType = {
    statusCode: number | null
    latencyMs: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    destinationUrl: string | null
    method: string | null
    statusCode: number | null
    latencyMs: number | null
    headersJson: string | null
    responseBody: string | null
    success: boolean | null
    errorMessage: string | null
    sentAt: Date | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    destinationUrl: string | null
    method: string | null
    statusCode: number | null
    latencyMs: number | null
    headersJson: string | null
    responseBody: string | null
    success: boolean | null
    errorMessage: string | null
    sentAt: Date | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    eventId: number
    destinationUrl: number
    method: number
    statusCode: number
    latencyMs: number
    headersJson: number
    responseBody: number
    success: number
    errorMessage: number
    sentAt: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    statusCode?: true
    latencyMs?: true
  }

  export type DeliverySumAggregateInputType = {
    statusCode?: true
    latencyMs?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    eventId?: true
    destinationUrl?: true
    method?: true
    statusCode?: true
    latencyMs?: true
    headersJson?: true
    responseBody?: true
    success?: true
    errorMessage?: true
    sentAt?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    eventId?: true
    destinationUrl?: true
    method?: true
    statusCode?: true
    latencyMs?: true
    headersJson?: true
    responseBody?: true
    success?: true
    errorMessage?: true
    sentAt?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    eventId?: true
    destinationUrl?: true
    method?: true
    statusCode?: true
    latencyMs?: true
    headersJson?: true
    responseBody?: true
    success?: true
    errorMessage?: true
    sentAt?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: string
    eventId: string
    destinationUrl: string
    method: string
    statusCode: number
    latencyMs: number
    headersJson: string
    responseBody: string
    success: boolean
    errorMessage: string | null
    sentAt: Date
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    destinationUrl?: boolean
    method?: boolean
    statusCode?: boolean
    latencyMs?: boolean
    headersJson?: boolean
    responseBody?: boolean
    success?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    destinationUrl?: boolean
    method?: boolean
    statusCode?: boolean
    latencyMs?: boolean
    headersJson?: boolean
    responseBody?: boolean
    success?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    destinationUrl?: boolean
    method?: boolean
    statusCode?: boolean
    latencyMs?: boolean
    headersJson?: boolean
    responseBody?: boolean
    success?: boolean
    errorMessage?: boolean
    sentAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    eventId?: boolean
    destinationUrl?: boolean
    method?: boolean
    statusCode?: boolean
    latencyMs?: boolean
    headersJson?: boolean
    responseBody?: boolean
    success?: boolean
    errorMessage?: boolean
    sentAt?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "destinationUrl" | "method" | "statusCode" | "latencyMs" | "headersJson" | "responseBody" | "success" | "errorMessage" | "sentAt", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      destinationUrl: string
      method: string
      statusCode: number
      latencyMs: number
      headersJson: string
      responseBody: string
      success: boolean
      errorMessage: string | null
      sentAt: Date
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
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
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'String'>
    readonly eventId: FieldRef<"Delivery", 'String'>
    readonly destinationUrl: FieldRef<"Delivery", 'String'>
    readonly method: FieldRef<"Delivery", 'String'>
    readonly statusCode: FieldRef<"Delivery", 'Int'>
    readonly latencyMs: FieldRef<"Delivery", 'Int'>
    readonly headersJson: FieldRef<"Delivery", 'String'>
    readonly responseBody: FieldRef<"Delivery", 'String'>
    readonly success: FieldRef<"Delivery", 'Boolean'>
    readonly errorMessage: FieldRef<"Delivery", 'String'>
    readonly sentAt: FieldRef<"Delivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model ReplayJob
   */

  export type AggregateReplayJob = {
    _count: ReplayJobCountAggregateOutputType | null
    _min: ReplayJobMinAggregateOutputType | null
    _max: ReplayJobMaxAggregateOutputType | null
  }

  export type ReplayJobMinAggregateOutputType = {
    id: string | null
    originalEventId: string | null
    destinationUrl: string | null
    status: string | null
    resultDiff: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ReplayJobMaxAggregateOutputType = {
    id: string | null
    originalEventId: string | null
    destinationUrl: string | null
    status: string | null
    resultDiff: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type ReplayJobCountAggregateOutputType = {
    id: number
    originalEventId: number
    destinationUrl: number
    status: number
    resultDiff: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type ReplayJobMinAggregateInputType = {
    id?: true
    originalEventId?: true
    destinationUrl?: true
    status?: true
    resultDiff?: true
    createdAt?: true
    completedAt?: true
  }

  export type ReplayJobMaxAggregateInputType = {
    id?: true
    originalEventId?: true
    destinationUrl?: true
    status?: true
    resultDiff?: true
    createdAt?: true
    completedAt?: true
  }

  export type ReplayJobCountAggregateInputType = {
    id?: true
    originalEventId?: true
    destinationUrl?: true
    status?: true
    resultDiff?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type ReplayJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReplayJob to aggregate.
     */
    where?: ReplayJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayJobs to fetch.
     */
    orderBy?: ReplayJobOrderByWithRelationInput | ReplayJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplayJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReplayJobs
    **/
    _count?: true | ReplayJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplayJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplayJobMaxAggregateInputType
  }

  export type GetReplayJobAggregateType<T extends ReplayJobAggregateArgs> = {
        [P in keyof T & keyof AggregateReplayJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReplayJob[P]>
      : GetScalarType<T[P], AggregateReplayJob[P]>
  }




  export type ReplayJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplayJobWhereInput
    orderBy?: ReplayJobOrderByWithAggregationInput | ReplayJobOrderByWithAggregationInput[]
    by: ReplayJobScalarFieldEnum[] | ReplayJobScalarFieldEnum
    having?: ReplayJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplayJobCountAggregateInputType | true
    _min?: ReplayJobMinAggregateInputType
    _max?: ReplayJobMaxAggregateInputType
  }

  export type ReplayJobGroupByOutputType = {
    id: string
    originalEventId: string
    destinationUrl: string
    status: string
    resultDiff: string | null
    createdAt: Date
    completedAt: Date | null
    _count: ReplayJobCountAggregateOutputType | null
    _min: ReplayJobMinAggregateOutputType | null
    _max: ReplayJobMaxAggregateOutputType | null
  }

  type GetReplayJobGroupByPayload<T extends ReplayJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplayJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplayJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplayJobGroupByOutputType[P]>
            : GetScalarType<T[P], ReplayJobGroupByOutputType[P]>
        }
      >
    >


  export type ReplayJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    destinationUrl?: boolean
    status?: boolean
    resultDiff?: boolean
    createdAt?: boolean
    completedAt?: boolean
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["replayJob"]>

  export type ReplayJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    destinationUrl?: boolean
    status?: boolean
    resultDiff?: boolean
    createdAt?: boolean
    completedAt?: boolean
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["replayJob"]>

  export type ReplayJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalEventId?: boolean
    destinationUrl?: boolean
    status?: boolean
    resultDiff?: boolean
    createdAt?: boolean
    completedAt?: boolean
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["replayJob"]>

  export type ReplayJobSelectScalar = {
    id?: boolean
    originalEventId?: boolean
    destinationUrl?: boolean
    status?: boolean
    resultDiff?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type ReplayJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalEventId" | "destinationUrl" | "status" | "resultDiff" | "createdAt" | "completedAt", ExtArgs["result"]["replayJob"]>
  export type ReplayJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReplayJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReplayJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originalEvent?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ReplayJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReplayJob"
    objects: {
      originalEvent: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalEventId: string
      destinationUrl: string
      status: string
      resultDiff: string | null
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["replayJob"]>
    composites: {}
  }

  type ReplayJobGetPayload<S extends boolean | null | undefined | ReplayJobDefaultArgs> = $Result.GetResult<Prisma.$ReplayJobPayload, S>

  type ReplayJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplayJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplayJobCountAggregateInputType | true
    }

  export interface ReplayJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReplayJob'], meta: { name: 'ReplayJob' } }
    /**
     * Find zero or one ReplayJob that matches the filter.
     * @param {ReplayJobFindUniqueArgs} args - Arguments to find a ReplayJob
     * @example
     * // Get one ReplayJob
     * const replayJob = await prisma.replayJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplayJobFindUniqueArgs>(args: SelectSubset<T, ReplayJobFindUniqueArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReplayJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplayJobFindUniqueOrThrowArgs} args - Arguments to find a ReplayJob
     * @example
     * // Get one ReplayJob
     * const replayJob = await prisma.replayJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplayJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplayJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReplayJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobFindFirstArgs} args - Arguments to find a ReplayJob
     * @example
     * // Get one ReplayJob
     * const replayJob = await prisma.replayJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplayJobFindFirstArgs>(args?: SelectSubset<T, ReplayJobFindFirstArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReplayJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobFindFirstOrThrowArgs} args - Arguments to find a ReplayJob
     * @example
     * // Get one ReplayJob
     * const replayJob = await prisma.replayJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplayJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplayJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReplayJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReplayJobs
     * const replayJobs = await prisma.replayJob.findMany()
     * 
     * // Get first 10 ReplayJobs
     * const replayJobs = await prisma.replayJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replayJobWithIdOnly = await prisma.replayJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplayJobFindManyArgs>(args?: SelectSubset<T, ReplayJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReplayJob.
     * @param {ReplayJobCreateArgs} args - Arguments to create a ReplayJob.
     * @example
     * // Create one ReplayJob
     * const ReplayJob = await prisma.replayJob.create({
     *   data: {
     *     // ... data to create a ReplayJob
     *   }
     * })
     * 
     */
    create<T extends ReplayJobCreateArgs>(args: SelectSubset<T, ReplayJobCreateArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReplayJobs.
     * @param {ReplayJobCreateManyArgs} args - Arguments to create many ReplayJobs.
     * @example
     * // Create many ReplayJobs
     * const replayJob = await prisma.replayJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplayJobCreateManyArgs>(args?: SelectSubset<T, ReplayJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReplayJobs and returns the data saved in the database.
     * @param {ReplayJobCreateManyAndReturnArgs} args - Arguments to create many ReplayJobs.
     * @example
     * // Create many ReplayJobs
     * const replayJob = await prisma.replayJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReplayJobs and only return the `id`
     * const replayJobWithIdOnly = await prisma.replayJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplayJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplayJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReplayJob.
     * @param {ReplayJobDeleteArgs} args - Arguments to delete one ReplayJob.
     * @example
     * // Delete one ReplayJob
     * const ReplayJob = await prisma.replayJob.delete({
     *   where: {
     *     // ... filter to delete one ReplayJob
     *   }
     * })
     * 
     */
    delete<T extends ReplayJobDeleteArgs>(args: SelectSubset<T, ReplayJobDeleteArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReplayJob.
     * @param {ReplayJobUpdateArgs} args - Arguments to update one ReplayJob.
     * @example
     * // Update one ReplayJob
     * const replayJob = await prisma.replayJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplayJobUpdateArgs>(args: SelectSubset<T, ReplayJobUpdateArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReplayJobs.
     * @param {ReplayJobDeleteManyArgs} args - Arguments to filter ReplayJobs to delete.
     * @example
     * // Delete a few ReplayJobs
     * const { count } = await prisma.replayJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplayJobDeleteManyArgs>(args?: SelectSubset<T, ReplayJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReplayJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReplayJobs
     * const replayJob = await prisma.replayJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplayJobUpdateManyArgs>(args: SelectSubset<T, ReplayJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReplayJobs and returns the data updated in the database.
     * @param {ReplayJobUpdateManyAndReturnArgs} args - Arguments to update many ReplayJobs.
     * @example
     * // Update many ReplayJobs
     * const replayJob = await prisma.replayJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReplayJobs and only return the `id`
     * const replayJobWithIdOnly = await prisma.replayJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplayJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplayJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReplayJob.
     * @param {ReplayJobUpsertArgs} args - Arguments to update or create a ReplayJob.
     * @example
     * // Update or create a ReplayJob
     * const replayJob = await prisma.replayJob.upsert({
     *   create: {
     *     // ... data to create a ReplayJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReplayJob we want to update
     *   }
     * })
     */
    upsert<T extends ReplayJobUpsertArgs>(args: SelectSubset<T, ReplayJobUpsertArgs<ExtArgs>>): Prisma__ReplayJobClient<$Result.GetResult<Prisma.$ReplayJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReplayJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobCountArgs} args - Arguments to filter ReplayJobs to count.
     * @example
     * // Count the number of ReplayJobs
     * const count = await prisma.replayJob.count({
     *   where: {
     *     // ... the filter for the ReplayJobs we want to count
     *   }
     * })
    **/
    count<T extends ReplayJobCountArgs>(
      args?: Subset<T, ReplayJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplayJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReplayJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReplayJobAggregateArgs>(args: Subset<T, ReplayJobAggregateArgs>): Prisma.PrismaPromise<GetReplayJobAggregateType<T>>

    /**
     * Group by ReplayJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplayJobGroupByArgs} args - Group by arguments.
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
      T extends ReplayJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplayJobGroupByArgs['orderBy'] }
        : { orderBy?: ReplayJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReplayJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplayJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReplayJob model
   */
  readonly fields: ReplayJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReplayJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplayJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    originalEvent<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReplayJob model
   */
  interface ReplayJobFieldRefs {
    readonly id: FieldRef<"ReplayJob", 'String'>
    readonly originalEventId: FieldRef<"ReplayJob", 'String'>
    readonly destinationUrl: FieldRef<"ReplayJob", 'String'>
    readonly status: FieldRef<"ReplayJob", 'String'>
    readonly resultDiff: FieldRef<"ReplayJob", 'String'>
    readonly createdAt: FieldRef<"ReplayJob", 'DateTime'>
    readonly completedAt: FieldRef<"ReplayJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReplayJob findUnique
   */
  export type ReplayJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter, which ReplayJob to fetch.
     */
    where: ReplayJobWhereUniqueInput
  }

  /**
   * ReplayJob findUniqueOrThrow
   */
  export type ReplayJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter, which ReplayJob to fetch.
     */
    where: ReplayJobWhereUniqueInput
  }

  /**
   * ReplayJob findFirst
   */
  export type ReplayJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter, which ReplayJob to fetch.
     */
    where?: ReplayJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayJobs to fetch.
     */
    orderBy?: ReplayJobOrderByWithRelationInput | ReplayJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReplayJobs.
     */
    cursor?: ReplayJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReplayJobs.
     */
    distinct?: ReplayJobScalarFieldEnum | ReplayJobScalarFieldEnum[]
  }

  /**
   * ReplayJob findFirstOrThrow
   */
  export type ReplayJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter, which ReplayJob to fetch.
     */
    where?: ReplayJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayJobs to fetch.
     */
    orderBy?: ReplayJobOrderByWithRelationInput | ReplayJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReplayJobs.
     */
    cursor?: ReplayJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReplayJobs.
     */
    distinct?: ReplayJobScalarFieldEnum | ReplayJobScalarFieldEnum[]
  }

  /**
   * ReplayJob findMany
   */
  export type ReplayJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter, which ReplayJobs to fetch.
     */
    where?: ReplayJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReplayJobs to fetch.
     */
    orderBy?: ReplayJobOrderByWithRelationInput | ReplayJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReplayJobs.
     */
    cursor?: ReplayJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReplayJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReplayJobs.
     */
    skip?: number
    distinct?: ReplayJobScalarFieldEnum | ReplayJobScalarFieldEnum[]
  }

  /**
   * ReplayJob create
   */
  export type ReplayJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ReplayJob.
     */
    data: XOR<ReplayJobCreateInput, ReplayJobUncheckedCreateInput>
  }

  /**
   * ReplayJob createMany
   */
  export type ReplayJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReplayJobs.
     */
    data: ReplayJobCreateManyInput | ReplayJobCreateManyInput[]
  }

  /**
   * ReplayJob createManyAndReturn
   */
  export type ReplayJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * The data used to create many ReplayJobs.
     */
    data: ReplayJobCreateManyInput | ReplayJobCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReplayJob update
   */
  export type ReplayJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ReplayJob.
     */
    data: XOR<ReplayJobUpdateInput, ReplayJobUncheckedUpdateInput>
    /**
     * Choose, which ReplayJob to update.
     */
    where: ReplayJobWhereUniqueInput
  }

  /**
   * ReplayJob updateMany
   */
  export type ReplayJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReplayJobs.
     */
    data: XOR<ReplayJobUpdateManyMutationInput, ReplayJobUncheckedUpdateManyInput>
    /**
     * Filter which ReplayJobs to update
     */
    where?: ReplayJobWhereInput
    /**
     * Limit how many ReplayJobs to update.
     */
    limit?: number
  }

  /**
   * ReplayJob updateManyAndReturn
   */
  export type ReplayJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * The data used to update ReplayJobs.
     */
    data: XOR<ReplayJobUpdateManyMutationInput, ReplayJobUncheckedUpdateManyInput>
    /**
     * Filter which ReplayJobs to update
     */
    where?: ReplayJobWhereInput
    /**
     * Limit how many ReplayJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReplayJob upsert
   */
  export type ReplayJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ReplayJob to update in case it exists.
     */
    where: ReplayJobWhereUniqueInput
    /**
     * In case the ReplayJob found by the `where` argument doesn't exist, create a new ReplayJob with this data.
     */
    create: XOR<ReplayJobCreateInput, ReplayJobUncheckedCreateInput>
    /**
     * In case the ReplayJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplayJobUpdateInput, ReplayJobUncheckedUpdateInput>
  }

  /**
   * ReplayJob delete
   */
  export type ReplayJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
    /**
     * Filter which ReplayJob to delete.
     */
    where: ReplayJobWhereUniqueInput
  }

  /**
   * ReplayJob deleteMany
   */
  export type ReplayJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReplayJobs to delete
     */
    where?: ReplayJobWhereInput
    /**
     * Limit how many ReplayJobs to delete.
     */
    limit?: number
  }

  /**
   * ReplayJob without action
   */
  export type ReplayJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplayJob
     */
    select?: ReplayJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReplayJob
     */
    omit?: ReplayJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplayJobInclude<ExtArgs> | null
  }


  /**
   * Model Scenario
   */

  export type AggregateScenario = {
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  export type ScenarioAvgAggregateOutputType = {
    rngSeed: number | null
  }

  export type ScenarioSumAggregateOutputType = {
    rngSeed: number | null
  }

  export type ScenarioMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    description: string | null
    destinationUrl: string | null
    basePayload: string | null
    baseHeadersJson: string | null
    stepsJson: string | null
    assertionsJson: string | null
    rngSeed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    description: string | null
    destinationUrl: string | null
    basePayload: string | null
    baseHeadersJson: string | null
    stepsJson: string | null
    assertionsJson: string | null
    rngSeed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScenarioCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    description: number
    destinationUrl: number
    basePayload: number
    baseHeadersJson: number
    stepsJson: number
    assertionsJson: number
    rngSeed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScenarioAvgAggregateInputType = {
    rngSeed?: true
  }

  export type ScenarioSumAggregateInputType = {
    rngSeed?: true
  }

  export type ScenarioMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    destinationUrl?: true
    basePayload?: true
    baseHeadersJson?: true
    stepsJson?: true
    assertionsJson?: true
    rngSeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    destinationUrl?: true
    basePayload?: true
    baseHeadersJson?: true
    stepsJson?: true
    assertionsJson?: true
    rngSeed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScenarioCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    description?: true
    destinationUrl?: true
    basePayload?: true
    baseHeadersJson?: true
    stepsJson?: true
    assertionsJson?: true
    rngSeed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScenarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenario to aggregate.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenarios
    **/
    _count?: true | ScenarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScenarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScenarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScenarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScenarioMaxAggregateInputType
  }

  export type GetScenarioAggregateType<T extends ScenarioAggregateArgs> = {
        [P in keyof T & keyof AggregateScenario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScenario[P]>
      : GetScalarType<T[P], AggregateScenario[P]>
  }




  export type ScenarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScenarioWhereInput
    orderBy?: ScenarioOrderByWithAggregationInput | ScenarioOrderByWithAggregationInput[]
    by: ScenarioScalarFieldEnum[] | ScenarioScalarFieldEnum
    having?: ScenarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScenarioCountAggregateInputType | true
    _avg?: ScenarioAvgAggregateInputType
    _sum?: ScenarioSumAggregateInputType
    _min?: ScenarioMinAggregateInputType
    _max?: ScenarioMaxAggregateInputType
  }

  export type ScenarioGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    description: string | null
    destinationUrl: string
    basePayload: string
    baseHeadersJson: string
    stepsJson: string
    assertionsJson: string
    rngSeed: number | null
    createdAt: Date
    updatedAt: Date
    _count: ScenarioCountAggregateOutputType | null
    _avg: ScenarioAvgAggregateOutputType | null
    _sum: ScenarioSumAggregateOutputType | null
    _min: ScenarioMinAggregateOutputType | null
    _max: ScenarioMaxAggregateOutputType | null
  }

  type GetScenarioGroupByPayload<T extends ScenarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScenarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScenarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
            : GetScalarType<T[P], ScenarioGroupByOutputType[P]>
        }
      >
    >


  export type ScenarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    destinationUrl?: boolean
    basePayload?: boolean
    baseHeadersJson?: boolean
    stepsJson?: boolean
    assertionsJson?: boolean
    rngSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    testRuns?: boolean | Scenario$testRunsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    destinationUrl?: boolean
    basePayload?: boolean
    baseHeadersJson?: boolean
    stepsJson?: boolean
    assertionsJson?: boolean
    rngSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    destinationUrl?: boolean
    basePayload?: boolean
    baseHeadersJson?: boolean
    stepsJson?: boolean
    assertionsJson?: boolean
    rngSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scenario"]>

  export type ScenarioSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    description?: boolean
    destinationUrl?: boolean
    basePayload?: boolean
    baseHeadersJson?: boolean
    stepsJson?: boolean
    assertionsJson?: boolean
    rngSeed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScenarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "name" | "description" | "destinationUrl" | "basePayload" | "baseHeadersJson" | "stepsJson" | "assertionsJson" | "rngSeed" | "createdAt" | "updatedAt", ExtArgs["result"]["scenario"]>
  export type ScenarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    testRuns?: boolean | Scenario$testRunsArgs<ExtArgs>
    _count?: boolean | ScenarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type ScenarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $ScenarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scenario"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      testRuns: Prisma.$TestRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      description: string | null
      destinationUrl: string
      basePayload: string
      baseHeadersJson: string
      stepsJson: string
      assertionsJson: string
      rngSeed: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scenario"]>
    composites: {}
  }

  type ScenarioGetPayload<S extends boolean | null | undefined | ScenarioDefaultArgs> = $Result.GetResult<Prisma.$ScenarioPayload, S>

  type ScenarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScenarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScenarioCountAggregateInputType | true
    }

  export interface ScenarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scenario'], meta: { name: 'Scenario' } }
    /**
     * Find zero or one Scenario that matches the filter.
     * @param {ScenarioFindUniqueArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScenarioFindUniqueArgs>(args: SelectSubset<T, ScenarioFindUniqueArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scenario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScenarioFindUniqueOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScenarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ScenarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScenarioFindFirstArgs>(args?: SelectSubset<T, ScenarioFindFirstArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scenario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindFirstOrThrowArgs} args - Arguments to find a Scenario
     * @example
     * // Get one Scenario
     * const scenario = await prisma.scenario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScenarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ScenarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenarios
     * const scenarios = await prisma.scenario.findMany()
     * 
     * // Get first 10 Scenarios
     * const scenarios = await prisma.scenario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scenarioWithIdOnly = await prisma.scenario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScenarioFindManyArgs>(args?: SelectSubset<T, ScenarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scenario.
     * @param {ScenarioCreateArgs} args - Arguments to create a Scenario.
     * @example
     * // Create one Scenario
     * const Scenario = await prisma.scenario.create({
     *   data: {
     *     // ... data to create a Scenario
     *   }
     * })
     * 
     */
    create<T extends ScenarioCreateArgs>(args: SelectSubset<T, ScenarioCreateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenarios.
     * @param {ScenarioCreateManyArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScenarioCreateManyArgs>(args?: SelectSubset<T, ScenarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenarios and returns the data saved in the database.
     * @param {ScenarioCreateManyAndReturnArgs} args - Arguments to create many Scenarios.
     * @example
     * // Create many Scenarios
     * const scenario = await prisma.scenario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScenarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ScenarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scenario.
     * @param {ScenarioDeleteArgs} args - Arguments to delete one Scenario.
     * @example
     * // Delete one Scenario
     * const Scenario = await prisma.scenario.delete({
     *   where: {
     *     // ... filter to delete one Scenario
     *   }
     * })
     * 
     */
    delete<T extends ScenarioDeleteArgs>(args: SelectSubset<T, ScenarioDeleteArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scenario.
     * @param {ScenarioUpdateArgs} args - Arguments to update one Scenario.
     * @example
     * // Update one Scenario
     * const scenario = await prisma.scenario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScenarioUpdateArgs>(args: SelectSubset<T, ScenarioUpdateArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenarios.
     * @param {ScenarioDeleteManyArgs} args - Arguments to filter Scenarios to delete.
     * @example
     * // Delete a few Scenarios
     * const { count } = await prisma.scenario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScenarioDeleteManyArgs>(args?: SelectSubset<T, ScenarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScenarioUpdateManyArgs>(args: SelectSubset<T, ScenarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenarios and returns the data updated in the database.
     * @param {ScenarioUpdateManyAndReturnArgs} args - Arguments to update many Scenarios.
     * @example
     * // Update many Scenarios
     * const scenario = await prisma.scenario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenarios and only return the `id`
     * const scenarioWithIdOnly = await prisma.scenario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScenarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ScenarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scenario.
     * @param {ScenarioUpsertArgs} args - Arguments to update or create a Scenario.
     * @example
     * // Update or create a Scenario
     * const scenario = await prisma.scenario.upsert({
     *   create: {
     *     // ... data to create a Scenario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scenario we want to update
     *   }
     * })
     */
    upsert<T extends ScenarioUpsertArgs>(args: SelectSubset<T, ScenarioUpsertArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioCountArgs} args - Arguments to filter Scenarios to count.
     * @example
     * // Count the number of Scenarios
     * const count = await prisma.scenario.count({
     *   where: {
     *     // ... the filter for the Scenarios we want to count
     *   }
     * })
    **/
    count<T extends ScenarioCountArgs>(
      args?: Subset<T, ScenarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScenarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScenarioAggregateArgs>(args: Subset<T, ScenarioAggregateArgs>): Prisma.PrismaPromise<GetScenarioAggregateType<T>>

    /**
     * Group by Scenario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScenarioGroupByArgs} args - Group by arguments.
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
      T extends ScenarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScenarioGroupByArgs['orderBy'] }
        : { orderBy?: ScenarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScenarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScenarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scenario model
   */
  readonly fields: ScenarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scenario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScenarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testRuns<T extends Scenario$testRunsArgs<ExtArgs> = {}>(args?: Subset<T, Scenario$testRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scenario model
   */
  interface ScenarioFieldRefs {
    readonly id: FieldRef<"Scenario", 'String'>
    readonly workspaceId: FieldRef<"Scenario", 'String'>
    readonly name: FieldRef<"Scenario", 'String'>
    readonly description: FieldRef<"Scenario", 'String'>
    readonly destinationUrl: FieldRef<"Scenario", 'String'>
    readonly basePayload: FieldRef<"Scenario", 'String'>
    readonly baseHeadersJson: FieldRef<"Scenario", 'String'>
    readonly stepsJson: FieldRef<"Scenario", 'String'>
    readonly assertionsJson: FieldRef<"Scenario", 'String'>
    readonly rngSeed: FieldRef<"Scenario", 'Int'>
    readonly createdAt: FieldRef<"Scenario", 'DateTime'>
    readonly updatedAt: FieldRef<"Scenario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scenario findUnique
   */
  export type ScenarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findUniqueOrThrow
   */
  export type ScenarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario findFirst
   */
  export type ScenarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findFirstOrThrow
   */
  export type ScenarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenario to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenarios.
     */
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario findMany
   */
  export type ScenarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter, which Scenarios to fetch.
     */
    where?: ScenarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenarios to fetch.
     */
    orderBy?: ScenarioOrderByWithRelationInput | ScenarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenarios.
     */
    cursor?: ScenarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenarios.
     */
    skip?: number
    distinct?: ScenarioScalarFieldEnum | ScenarioScalarFieldEnum[]
  }

  /**
   * Scenario create
   */
  export type ScenarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Scenario.
     */
    data: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
  }

  /**
   * Scenario createMany
   */
  export type ScenarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
  }

  /**
   * Scenario createManyAndReturn
   */
  export type ScenarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to create many Scenarios.
     */
    data: ScenarioCreateManyInput | ScenarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario update
   */
  export type ScenarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Scenario.
     */
    data: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
    /**
     * Choose, which Scenario to update.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario updateMany
   */
  export type ScenarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
  }

  /**
   * Scenario updateManyAndReturn
   */
  export type ScenarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * The data used to update Scenarios.
     */
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyInput>
    /**
     * Filter which Scenarios to update
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scenario upsert
   */
  export type ScenarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Scenario to update in case it exists.
     */
    where: ScenarioWhereUniqueInput
    /**
     * In case the Scenario found by the `where` argument doesn't exist, create a new Scenario with this data.
     */
    create: XOR<ScenarioCreateInput, ScenarioUncheckedCreateInput>
    /**
     * In case the Scenario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScenarioUpdateInput, ScenarioUncheckedUpdateInput>
  }

  /**
   * Scenario delete
   */
  export type ScenarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
    /**
     * Filter which Scenario to delete.
     */
    where: ScenarioWhereUniqueInput
  }

  /**
   * Scenario deleteMany
   */
  export type ScenarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenarios to delete
     */
    where?: ScenarioWhereInput
    /**
     * Limit how many Scenarios to delete.
     */
    limit?: number
  }

  /**
   * Scenario.testRuns
   */
  export type Scenario$testRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    cursor?: TestRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * Scenario without action
   */
  export type ScenarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scenario
     */
    select?: ScenarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scenario
     */
    omit?: ScenarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScenarioInclude<ExtArgs> | null
  }


  /**
   * Model TestRun
   */

  export type AggregateTestRun = {
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  export type TestRunAvgAggregateOutputType = {
    durationMs: number | null
    totalDeliveries: number | null
    successfulDeliveries: number | null
    failedDeliveries: number | null
    latencyMin: number | null
    latencyAvg: number | null
    latencyP95: number | null
    latencyMax: number | null
  }

  export type TestRunSumAggregateOutputType = {
    durationMs: number | null
    totalDeliveries: number | null
    successfulDeliveries: number | null
    failedDeliveries: number | null
    latencyMin: number | null
    latencyAvg: number | null
    latencyP95: number | null
    latencyMax: number | null
  }

  export type TestRunMinAggregateOutputType = {
    id: string | null
    scenarioId: string | null
    workspaceId: string | null
    startedAt: Date | null
    finishedAt: Date | null
    durationMs: number | null
    totalDeliveries: number | null
    successfulDeliveries: number | null
    failedDeliveries: number | null
    latencyMin: number | null
    latencyAvg: number | null
    latencyP95: number | null
    latencyMax: number | null
    allPassed: boolean | null
    reportJson: string | null
  }

  export type TestRunMaxAggregateOutputType = {
    id: string | null
    scenarioId: string | null
    workspaceId: string | null
    startedAt: Date | null
    finishedAt: Date | null
    durationMs: number | null
    totalDeliveries: number | null
    successfulDeliveries: number | null
    failedDeliveries: number | null
    latencyMin: number | null
    latencyAvg: number | null
    latencyP95: number | null
    latencyMax: number | null
    allPassed: boolean | null
    reportJson: string | null
  }

  export type TestRunCountAggregateOutputType = {
    id: number
    scenarioId: number
    workspaceId: number
    startedAt: number
    finishedAt: number
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: number
    reportJson: number
    _all: number
  }


  export type TestRunAvgAggregateInputType = {
    durationMs?: true
    totalDeliveries?: true
    successfulDeliveries?: true
    failedDeliveries?: true
    latencyMin?: true
    latencyAvg?: true
    latencyP95?: true
    latencyMax?: true
  }

  export type TestRunSumAggregateInputType = {
    durationMs?: true
    totalDeliveries?: true
    successfulDeliveries?: true
    failedDeliveries?: true
    latencyMin?: true
    latencyAvg?: true
    latencyP95?: true
    latencyMax?: true
  }

  export type TestRunMinAggregateInputType = {
    id?: true
    scenarioId?: true
    workspaceId?: true
    startedAt?: true
    finishedAt?: true
    durationMs?: true
    totalDeliveries?: true
    successfulDeliveries?: true
    failedDeliveries?: true
    latencyMin?: true
    latencyAvg?: true
    latencyP95?: true
    latencyMax?: true
    allPassed?: true
    reportJson?: true
  }

  export type TestRunMaxAggregateInputType = {
    id?: true
    scenarioId?: true
    workspaceId?: true
    startedAt?: true
    finishedAt?: true
    durationMs?: true
    totalDeliveries?: true
    successfulDeliveries?: true
    failedDeliveries?: true
    latencyMin?: true
    latencyAvg?: true
    latencyP95?: true
    latencyMax?: true
    allPassed?: true
    reportJson?: true
  }

  export type TestRunCountAggregateInputType = {
    id?: true
    scenarioId?: true
    workspaceId?: true
    startedAt?: true
    finishedAt?: true
    durationMs?: true
    totalDeliveries?: true
    successfulDeliveries?: true
    failedDeliveries?: true
    latencyMin?: true
    latencyAvg?: true
    latencyP95?: true
    latencyMax?: true
    allPassed?: true
    reportJson?: true
    _all?: true
  }

  export type TestRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRun to aggregate.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestRuns
    **/
    _count?: true | TestRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestRunMaxAggregateInputType
  }

  export type GetTestRunAggregateType<T extends TestRunAggregateArgs> = {
        [P in keyof T & keyof AggregateTestRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestRun[P]>
      : GetScalarType<T[P], AggregateTestRun[P]>
  }




  export type TestRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithAggregationInput | TestRunOrderByWithAggregationInput[]
    by: TestRunScalarFieldEnum[] | TestRunScalarFieldEnum
    having?: TestRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestRunCountAggregateInputType | true
    _avg?: TestRunAvgAggregateInputType
    _sum?: TestRunSumAggregateInputType
    _min?: TestRunMinAggregateInputType
    _max?: TestRunMaxAggregateInputType
  }

  export type TestRunGroupByOutputType = {
    id: string
    scenarioId: string
    workspaceId: string
    startedAt: Date
    finishedAt: Date
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  type GetTestRunGroupByPayload<T extends TestRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestRunGroupByOutputType[P]>
            : GetScalarType<T[P], TestRunGroupByOutputType[P]>
        }
      >
    >


  export type TestRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scenarioId?: boolean
    workspaceId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    durationMs?: boolean
    totalDeliveries?: boolean
    successfulDeliveries?: boolean
    failedDeliveries?: boolean
    latencyMin?: boolean
    latencyAvg?: boolean
    latencyP95?: boolean
    latencyMax?: boolean
    allPassed?: boolean
    reportJson?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    testResults?: boolean | TestRun$testResultsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scenarioId?: boolean
    workspaceId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    durationMs?: boolean
    totalDeliveries?: boolean
    successfulDeliveries?: boolean
    failedDeliveries?: boolean
    latencyMin?: boolean
    latencyAvg?: boolean
    latencyP95?: boolean
    latencyMax?: boolean
    allPassed?: boolean
    reportJson?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scenarioId?: boolean
    workspaceId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    durationMs?: boolean
    totalDeliveries?: boolean
    successfulDeliveries?: boolean
    failedDeliveries?: boolean
    latencyMin?: boolean
    latencyAvg?: boolean
    latencyP95?: boolean
    latencyMax?: boolean
    allPassed?: boolean
    reportJson?: boolean
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>

  export type TestRunSelectScalar = {
    id?: boolean
    scenarioId?: boolean
    workspaceId?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    durationMs?: boolean
    totalDeliveries?: boolean
    successfulDeliveries?: boolean
    failedDeliveries?: boolean
    latencyMin?: boolean
    latencyAvg?: boolean
    latencyP95?: boolean
    latencyMax?: boolean
    allPassed?: boolean
    reportJson?: boolean
  }

  export type TestRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scenarioId" | "workspaceId" | "startedAt" | "finishedAt" | "durationMs" | "totalDeliveries" | "successfulDeliveries" | "failedDeliveries" | "latencyMin" | "latencyAvg" | "latencyP95" | "latencyMax" | "allPassed" | "reportJson", ExtArgs["result"]["testRun"]>
  export type TestRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    testResults?: boolean | TestRun$testResultsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TestRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scenario?: boolean | ScenarioDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $TestRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestRun"
    objects: {
      scenario: Prisma.$ScenarioPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      testResults: Prisma.$TestResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scenarioId: string
      workspaceId: string
      startedAt: Date
      finishedAt: Date
      durationMs: number
      totalDeliveries: number
      successfulDeliveries: number
      failedDeliveries: number
      latencyMin: number
      latencyAvg: number
      latencyP95: number
      latencyMax: number
      allPassed: boolean
      reportJson: string
    }, ExtArgs["result"]["testRun"]>
    composites: {}
  }

  type TestRunGetPayload<S extends boolean | null | undefined | TestRunDefaultArgs> = $Result.GetResult<Prisma.$TestRunPayload, S>

  type TestRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestRunCountAggregateInputType | true
    }

  export interface TestRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestRun'], meta: { name: 'TestRun' } }
    /**
     * Find zero or one TestRun that matches the filter.
     * @param {TestRunFindUniqueArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestRunFindUniqueArgs>(args: SelectSubset<T, TestRunFindUniqueArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestRunFindUniqueOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestRunFindUniqueOrThrowArgs>(args: SelectSubset<T, TestRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestRunFindFirstArgs>(args?: SelectSubset<T, TestRunFindFirstArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestRunFindFirstOrThrowArgs>(args?: SelectSubset<T, TestRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestRuns
     * const testRuns = await prisma.testRun.findMany()
     * 
     * // Get first 10 TestRuns
     * const testRuns = await prisma.testRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testRunWithIdOnly = await prisma.testRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestRunFindManyArgs>(args?: SelectSubset<T, TestRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestRun.
     * @param {TestRunCreateArgs} args - Arguments to create a TestRun.
     * @example
     * // Create one TestRun
     * const TestRun = await prisma.testRun.create({
     *   data: {
     *     // ... data to create a TestRun
     *   }
     * })
     * 
     */
    create<T extends TestRunCreateArgs>(args: SelectSubset<T, TestRunCreateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestRuns.
     * @param {TestRunCreateManyArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestRunCreateManyArgs>(args?: SelectSubset<T, TestRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestRuns and returns the data saved in the database.
     * @param {TestRunCreateManyAndReturnArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestRuns and only return the `id`
     * const testRunWithIdOnly = await prisma.testRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestRunCreateManyAndReturnArgs>(args?: SelectSubset<T, TestRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestRun.
     * @param {TestRunDeleteArgs} args - Arguments to delete one TestRun.
     * @example
     * // Delete one TestRun
     * const TestRun = await prisma.testRun.delete({
     *   where: {
     *     // ... filter to delete one TestRun
     *   }
     * })
     * 
     */
    delete<T extends TestRunDeleteArgs>(args: SelectSubset<T, TestRunDeleteArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestRun.
     * @param {TestRunUpdateArgs} args - Arguments to update one TestRun.
     * @example
     * // Update one TestRun
     * const testRun = await prisma.testRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestRunUpdateArgs>(args: SelectSubset<T, TestRunUpdateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestRuns.
     * @param {TestRunDeleteManyArgs} args - Arguments to filter TestRuns to delete.
     * @example
     * // Delete a few TestRuns
     * const { count } = await prisma.testRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestRunDeleteManyArgs>(args?: SelectSubset<T, TestRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestRunUpdateManyArgs>(args: SelectSubset<T, TestRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns and returns the data updated in the database.
     * @param {TestRunUpdateManyAndReturnArgs} args - Arguments to update many TestRuns.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestRuns and only return the `id`
     * const testRunWithIdOnly = await prisma.testRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestRunUpdateManyAndReturnArgs>(args: SelectSubset<T, TestRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestRun.
     * @param {TestRunUpsertArgs} args - Arguments to update or create a TestRun.
     * @example
     * // Update or create a TestRun
     * const testRun = await prisma.testRun.upsert({
     *   create: {
     *     // ... data to create a TestRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestRun we want to update
     *   }
     * })
     */
    upsert<T extends TestRunUpsertArgs>(args: SelectSubset<T, TestRunUpsertArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunCountArgs} args - Arguments to filter TestRuns to count.
     * @example
     * // Count the number of TestRuns
     * const count = await prisma.testRun.count({
     *   where: {
     *     // ... the filter for the TestRuns we want to count
     *   }
     * })
    **/
    count<T extends TestRunCountArgs>(
      args?: Subset<T, TestRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestRunAggregateArgs>(args: Subset<T, TestRunAggregateArgs>): Prisma.PrismaPromise<GetTestRunAggregateType<T>>

    /**
     * Group by TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunGroupByArgs} args - Group by arguments.
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
      T extends TestRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestRunGroupByArgs['orderBy'] }
        : { orderBy?: TestRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestRun model
   */
  readonly fields: TestRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scenario<T extends ScenarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScenarioDefaultArgs<ExtArgs>>): Prisma__ScenarioClient<$Result.GetResult<Prisma.$ScenarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testResults<T extends TestRun$testResultsArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$testResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TestRun model
   */
  interface TestRunFieldRefs {
    readonly id: FieldRef<"TestRun", 'String'>
    readonly scenarioId: FieldRef<"TestRun", 'String'>
    readonly workspaceId: FieldRef<"TestRun", 'String'>
    readonly startedAt: FieldRef<"TestRun", 'DateTime'>
    readonly finishedAt: FieldRef<"TestRun", 'DateTime'>
    readonly durationMs: FieldRef<"TestRun", 'Int'>
    readonly totalDeliveries: FieldRef<"TestRun", 'Int'>
    readonly successfulDeliveries: FieldRef<"TestRun", 'Int'>
    readonly failedDeliveries: FieldRef<"TestRun", 'Int'>
    readonly latencyMin: FieldRef<"TestRun", 'Int'>
    readonly latencyAvg: FieldRef<"TestRun", 'Int'>
    readonly latencyP95: FieldRef<"TestRun", 'Int'>
    readonly latencyMax: FieldRef<"TestRun", 'Int'>
    readonly allPassed: FieldRef<"TestRun", 'Boolean'>
    readonly reportJson: FieldRef<"TestRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestRun findUnique
   */
  export type TestRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findUniqueOrThrow
   */
  export type TestRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findFirst
   */
  export type TestRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findFirstOrThrow
   */
  export type TestRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findMany
   */
  export type TestRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRuns to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun create
   */
  export type TestRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to create a TestRun.
     */
    data: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
  }

  /**
   * TestRun createMany
   */
  export type TestRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
  }

  /**
   * TestRun createManyAndReturn
   */
  export type TestRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestRun update
   */
  export type TestRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to update a TestRun.
     */
    data: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
    /**
     * Choose, which TestRun to update.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun updateMany
   */
  export type TestRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to update.
     */
    limit?: number
  }

  /**
   * TestRun updateManyAndReturn
   */
  export type TestRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestRun upsert
   */
  export type TestRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The filter to search for the TestRun to update in case it exists.
     */
    where: TestRunWhereUniqueInput
    /**
     * In case the TestRun found by the `where` argument doesn't exist, create a new TestRun with this data.
     */
    create: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
    /**
     * In case the TestRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
  }

  /**
   * TestRun delete
   */
  export type TestRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter which TestRun to delete.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun deleteMany
   */
  export type TestRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRuns to delete
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to delete.
     */
    limit?: number
  }

  /**
   * TestRun.testResults
   */
  export type TestRun$testResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    cursor?: TestResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestRun without action
   */
  export type TestRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
  }


  /**
   * Model TestResult
   */

  export type AggregateTestResult = {
    _count: TestResultCountAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  export type TestResultMinAggregateOutputType = {
    id: string | null
    testRunId: string | null
    assertionId: string | null
    assertionType: string | null
    description: string | null
    passed: boolean | null
    expected: string | null
    actual: string | null
    errorMessage: string | null
  }

  export type TestResultMaxAggregateOutputType = {
    id: string | null
    testRunId: string | null
    assertionId: string | null
    assertionType: string | null
    description: string | null
    passed: boolean | null
    expected: string | null
    actual: string | null
    errorMessage: string | null
  }

  export type TestResultCountAggregateOutputType = {
    id: number
    testRunId: number
    assertionId: number
    assertionType: number
    description: number
    passed: number
    expected: number
    actual: number
    errorMessage: number
    _all: number
  }


  export type TestResultMinAggregateInputType = {
    id?: true
    testRunId?: true
    assertionId?: true
    assertionType?: true
    description?: true
    passed?: true
    expected?: true
    actual?: true
    errorMessage?: true
  }

  export type TestResultMaxAggregateInputType = {
    id?: true
    testRunId?: true
    assertionId?: true
    assertionType?: true
    description?: true
    passed?: true
    expected?: true
    actual?: true
    errorMessage?: true
  }

  export type TestResultCountAggregateInputType = {
    id?: true
    testRunId?: true
    assertionId?: true
    assertionType?: true
    description?: true
    passed?: true
    expected?: true
    actual?: true
    errorMessage?: true
    _all?: true
  }

  export type TestResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResult to aggregate.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestResults
    **/
    _count?: true | TestResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestResultMaxAggregateInputType
  }

  export type GetTestResultAggregateType<T extends TestResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestResult[P]>
      : GetScalarType<T[P], AggregateTestResult[P]>
  }




  export type TestResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestResultWhereInput
    orderBy?: TestResultOrderByWithAggregationInput | TestResultOrderByWithAggregationInput[]
    by: TestResultScalarFieldEnum[] | TestResultScalarFieldEnum
    having?: TestResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestResultCountAggregateInputType | true
    _min?: TestResultMinAggregateInputType
    _max?: TestResultMaxAggregateInputType
  }

  export type TestResultGroupByOutputType = {
    id: string
    testRunId: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected: string | null
    actual: string | null
    errorMessage: string | null
    _count: TestResultCountAggregateOutputType | null
    _min: TestResultMinAggregateOutputType | null
    _max: TestResultMaxAggregateOutputType | null
  }

  type GetTestResultGroupByPayload<T extends TestResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestResultGroupByOutputType[P]>
        }
      >
    >


  export type TestResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    assertionId?: boolean
    assertionType?: boolean
    description?: boolean
    passed?: boolean
    expected?: boolean
    actual?: boolean
    errorMessage?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    assertionId?: boolean
    assertionType?: boolean
    description?: boolean
    passed?: boolean
    expected?: boolean
    actual?: boolean
    errorMessage?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    assertionId?: boolean
    assertionType?: boolean
    description?: boolean
    passed?: boolean
    expected?: boolean
    actual?: boolean
    errorMessage?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testResult"]>

  export type TestResultSelectScalar = {
    id?: boolean
    testRunId?: boolean
    assertionId?: boolean
    assertionType?: boolean
    description?: boolean
    passed?: boolean
    expected?: boolean
    actual?: boolean
    errorMessage?: boolean
  }

  export type TestResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "assertionId" | "assertionType" | "description" | "passed" | "expected" | "actual" | "errorMessage", ExtArgs["result"]["testResult"]>
  export type TestResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }
  export type TestResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestResult"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testRunId: string
      assertionId: string
      assertionType: string
      description: string
      passed: boolean
      expected: string | null
      actual: string | null
      errorMessage: string | null
    }, ExtArgs["result"]["testResult"]>
    composites: {}
  }

  type TestResultGetPayload<S extends boolean | null | undefined | TestResultDefaultArgs> = $Result.GetResult<Prisma.$TestResultPayload, S>

  type TestResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestResultCountAggregateInputType | true
    }

  export interface TestResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestResult'], meta: { name: 'TestResult' } }
    /**
     * Find zero or one TestResult that matches the filter.
     * @param {TestResultFindUniqueArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestResultFindUniqueArgs>(args: SelectSubset<T, TestResultFindUniqueArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestResultFindUniqueOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestResultFindFirstArgs>(args?: SelectSubset<T, TestResultFindFirstArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindFirstOrThrowArgs} args - Arguments to find a TestResult
     * @example
     * // Get one TestResult
     * const testResult = await prisma.testResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestResults
     * const testResults = await prisma.testResult.findMany()
     * 
     * // Get first 10 TestResults
     * const testResults = await prisma.testResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testResultWithIdOnly = await prisma.testResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestResultFindManyArgs>(args?: SelectSubset<T, TestResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestResult.
     * @param {TestResultCreateArgs} args - Arguments to create a TestResult.
     * @example
     * // Create one TestResult
     * const TestResult = await prisma.testResult.create({
     *   data: {
     *     // ... data to create a TestResult
     *   }
     * })
     * 
     */
    create<T extends TestResultCreateArgs>(args: SelectSubset<T, TestResultCreateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestResults.
     * @param {TestResultCreateManyArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestResultCreateManyArgs>(args?: SelectSubset<T, TestResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestResults and returns the data saved in the database.
     * @param {TestResultCreateManyAndReturnArgs} args - Arguments to create many TestResults.
     * @example
     * // Create many TestResults
     * const testResult = await prisma.testResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestResult.
     * @param {TestResultDeleteArgs} args - Arguments to delete one TestResult.
     * @example
     * // Delete one TestResult
     * const TestResult = await prisma.testResult.delete({
     *   where: {
     *     // ... filter to delete one TestResult
     *   }
     * })
     * 
     */
    delete<T extends TestResultDeleteArgs>(args: SelectSubset<T, TestResultDeleteArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestResult.
     * @param {TestResultUpdateArgs} args - Arguments to update one TestResult.
     * @example
     * // Update one TestResult
     * const testResult = await prisma.testResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestResultUpdateArgs>(args: SelectSubset<T, TestResultUpdateArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestResults.
     * @param {TestResultDeleteManyArgs} args - Arguments to filter TestResults to delete.
     * @example
     * // Delete a few TestResults
     * const { count } = await prisma.testResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestResultDeleteManyArgs>(args?: SelectSubset<T, TestResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestResultUpdateManyArgs>(args: SelectSubset<T, TestResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestResults and returns the data updated in the database.
     * @param {TestResultUpdateManyAndReturnArgs} args - Arguments to update many TestResults.
     * @example
     * // Update many TestResults
     * const testResult = await prisma.testResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestResults and only return the `id`
     * const testResultWithIdOnly = await prisma.testResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestResult.
     * @param {TestResultUpsertArgs} args - Arguments to update or create a TestResult.
     * @example
     * // Update or create a TestResult
     * const testResult = await prisma.testResult.upsert({
     *   create: {
     *     // ... data to create a TestResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestResult we want to update
     *   }
     * })
     */
    upsert<T extends TestResultUpsertArgs>(args: SelectSubset<T, TestResultUpsertArgs<ExtArgs>>): Prisma__TestResultClient<$Result.GetResult<Prisma.$TestResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultCountArgs} args - Arguments to filter TestResults to count.
     * @example
     * // Count the number of TestResults
     * const count = await prisma.testResult.count({
     *   where: {
     *     // ... the filter for the TestResults we want to count
     *   }
     * })
    **/
    count<T extends TestResultCountArgs>(
      args?: Subset<T, TestResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestResultAggregateArgs>(args: Subset<T, TestResultAggregateArgs>): Prisma.PrismaPromise<GetTestResultAggregateType<T>>

    /**
     * Group by TestResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestResultGroupByArgs} args - Group by arguments.
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
      T extends TestResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestResultGroupByArgs['orderBy'] }
        : { orderBy?: TestResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestResult model
   */
  readonly fields: TestResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestResult model
   */
  interface TestResultFieldRefs {
    readonly id: FieldRef<"TestResult", 'String'>
    readonly testRunId: FieldRef<"TestResult", 'String'>
    readonly assertionId: FieldRef<"TestResult", 'String'>
    readonly assertionType: FieldRef<"TestResult", 'String'>
    readonly description: FieldRef<"TestResult", 'String'>
    readonly passed: FieldRef<"TestResult", 'Boolean'>
    readonly expected: FieldRef<"TestResult", 'String'>
    readonly actual: FieldRef<"TestResult", 'String'>
    readonly errorMessage: FieldRef<"TestResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestResult findUnique
   */
  export type TestResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findUniqueOrThrow
   */
  export type TestResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult findFirst
   */
  export type TestResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findFirstOrThrow
   */
  export type TestResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResult to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestResults.
     */
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult findMany
   */
  export type TestResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter, which TestResults to fetch.
     */
    where?: TestResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestResults to fetch.
     */
    orderBy?: TestResultOrderByWithRelationInput | TestResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestResults.
     */
    cursor?: TestResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestResults.
     */
    skip?: number
    distinct?: TestResultScalarFieldEnum | TestResultScalarFieldEnum[]
  }

  /**
   * TestResult create
   */
  export type TestResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestResult.
     */
    data: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
  }

  /**
   * TestResult createMany
   */
  export type TestResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
  }

  /**
   * TestResult createManyAndReturn
   */
  export type TestResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestResults.
     */
    data: TestResultCreateManyInput | TestResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult update
   */
  export type TestResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestResult.
     */
    data: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
    /**
     * Choose, which TestResult to update.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult updateMany
   */
  export type TestResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
  }

  /**
   * TestResult updateManyAndReturn
   */
  export type TestResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * The data used to update TestResults.
     */
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyInput>
    /**
     * Filter which TestResults to update
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestResult upsert
   */
  export type TestResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestResult to update in case it exists.
     */
    where: TestResultWhereUniqueInput
    /**
     * In case the TestResult found by the `where` argument doesn't exist, create a new TestResult with this data.
     */
    create: XOR<TestResultCreateInput, TestResultUncheckedCreateInput>
    /**
     * In case the TestResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestResultUpdateInput, TestResultUncheckedUpdateInput>
  }

  /**
   * TestResult delete
   */
  export type TestResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
    /**
     * Filter which TestResult to delete.
     */
    where: TestResultWhereUniqueInput
  }

  /**
   * TestResult deleteMany
   */
  export type TestResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestResults to delete
     */
    where?: TestResultWhereInput
    /**
     * Limit how many TestResults to delete.
     */
    limit?: number
  }

  /**
   * TestResult without action
   */
  export type TestResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestResult
     */
    select?: TestResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestResult
     */
    omit?: TestResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestResultInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    provider: string | null
    description: string | null
    method: string | null
    defaultHeadersJson: string | null
    payload: string | null
    isBuiltIn: boolean | null
    workspaceId: string | null
    createdAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    provider: string | null
    description: string | null
    method: string | null
    defaultHeadersJson: string | null
    payload: string | null
    isBuiltIn: boolean | null
    workspaceId: string | null
    createdAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    category: number
    provider: number
    description: number
    method: number
    defaultHeadersJson: number
    payload: number
    isBuiltIn: number
    workspaceId: number
    createdAt: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    provider?: true
    description?: true
    method?: true
    defaultHeadersJson?: true
    payload?: true
    isBuiltIn?: true
    workspaceId?: true
    createdAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    provider?: true
    description?: true
    method?: true
    defaultHeadersJson?: true
    payload?: true
    isBuiltIn?: true
    workspaceId?: true
    createdAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    provider?: true
    description?: true
    method?: true
    defaultHeadersJson?: true
    payload?: true
    isBuiltIn?: true
    workspaceId?: true
    createdAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    category: string
    provider: string
    description: string
    method: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn: boolean
    workspaceId: string | null
    createdAt: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    provider?: boolean
    description?: boolean
    method?: boolean
    defaultHeadersJson?: boolean
    payload?: boolean
    isBuiltIn?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    provider?: boolean
    description?: boolean
    method?: boolean
    defaultHeadersJson?: boolean
    payload?: boolean
    isBuiltIn?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    provider?: boolean
    description?: boolean
    method?: boolean
    defaultHeadersJson?: boolean
    payload?: boolean
    isBuiltIn?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    provider?: boolean
    description?: boolean
    method?: boolean
    defaultHeadersJson?: boolean
    payload?: boolean
    isBuiltIn?: boolean
    workspaceId?: boolean
    createdAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "provider" | "description" | "method" | "defaultHeadersJson" | "payload" | "isBuiltIn" | "workspaceId" | "createdAt", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | Template$workspaceArgs<ExtArgs>
  }

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      provider: string
      description: string
      method: string
      defaultHeadersJson: string
      payload: string
      isBuiltIn: boolean
      workspaceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends Template$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, Template$workspaceArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
    readonly provider: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly method: FieldRef<"Template", 'String'>
    readonly defaultHeadersJson: FieldRef<"Template", 'String'>
    readonly payload: FieldRef<"Template", 'String'>
    readonly isBuiltIn: FieldRef<"Template", 'Boolean'>
    readonly workspaceId: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.workspace
   */
  export type Template$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    actorId: string | null
    actorType: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    detailsJson: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    actorId: string | null
    actorType: string | null
    action: string | null
    targetType: string | null
    targetId: string | null
    detailsJson: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    workspaceId: number
    actorId: number
    actorType: number
    action: number
    targetType: number
    targetId: number
    detailsJson: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    detailsJson?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    detailsJson?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    actorType?: true
    action?: true
    targetType?: true
    targetId?: true
    detailsJson?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    workspaceId: string
    actorId: string
    actorType: string
    action: string
    targetType: string
    targetId: string
    detailsJson: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detailsJson?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detailsJson?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detailsJson?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    actorType?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    detailsJson?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "actorId" | "actorType" | "action" | "targetType" | "targetId" | "detailsJson" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      actorId: string
      actorType: string
      action: string
      targetType: string
      targetId: string
      detailsJson: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly workspaceId: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly actorType: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly targetType: FieldRef<"AuditLog", 'String'>
    readonly targetId: FieldRef<"AuditLog", 'String'>
    readonly detailsJson: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    isGuest: 'isGuest',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const GuestSessionScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    clientName: 'clientName',
    workspaceId: 'workspaceId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type GuestSessionScalarFieldEnum = (typeof GuestSessionScalarFieldEnum)[keyof typeof GuestSessionScalarFieldEnum]


  export const EndpointScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    tokenHash: 'tokenHash',
    tokenPrefix: 'tokenPrefix',
    name: 'name',
    description: 'description',
    signingSecretEnc: 'signingSecretEnc',
    isPaused: 'isPaused',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EndpointScalarFieldEnum = (typeof EndpointScalarFieldEnum)[keyof typeof EndpointScalarFieldEnum]


  export const ResponseRuleScalarFieldEnum: {
    id: 'id',
    endpointId: 'endpointId',
    statusCode: 'statusCode',
    contentType: 'contentType',
    body: 'body',
    headersJson: 'headersJson',
    delayMs: 'delayMs',
    rateLimitPerMin: 'rateLimitPerMin',
    updatedAt: 'updatedAt'
  };

  export type ResponseRuleScalarFieldEnum = (typeof ResponseRuleScalarFieldEnum)[keyof typeof ResponseRuleScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    endpointId: 'endpointId',
    method: 'method',
    path: 'path',
    queryJson: 'queryJson',
    headersJson: 'headersJson',
    rawBody: 'rawBody',
    parsedBody: 'parsedBody',
    statusCode: 'statusCode',
    ip: 'ip',
    sizeBytes: 'sizeBytes',
    isInvalidJson: 'isInvalidJson',
    redactedHeaders: 'redactedHeaders',
    receivedAt: 'receivedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    destinationUrl: 'destinationUrl',
    method: 'method',
    statusCode: 'statusCode',
    latencyMs: 'latencyMs',
    headersJson: 'headersJson',
    responseBody: 'responseBody',
    success: 'success',
    errorMessage: 'errorMessage',
    sentAt: 'sentAt'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const ReplayJobScalarFieldEnum: {
    id: 'id',
    originalEventId: 'originalEventId',
    destinationUrl: 'destinationUrl',
    status: 'status',
    resultDiff: 'resultDiff',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type ReplayJobScalarFieldEnum = (typeof ReplayJobScalarFieldEnum)[keyof typeof ReplayJobScalarFieldEnum]


  export const ScenarioScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    description: 'description',
    destinationUrl: 'destinationUrl',
    basePayload: 'basePayload',
    baseHeadersJson: 'baseHeadersJson',
    stepsJson: 'stepsJson',
    assertionsJson: 'assertionsJson',
    rngSeed: 'rngSeed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScenarioScalarFieldEnum = (typeof ScenarioScalarFieldEnum)[keyof typeof ScenarioScalarFieldEnum]


  export const TestRunScalarFieldEnum: {
    id: 'id',
    scenarioId: 'scenarioId',
    workspaceId: 'workspaceId',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    durationMs: 'durationMs',
    totalDeliveries: 'totalDeliveries',
    successfulDeliveries: 'successfulDeliveries',
    failedDeliveries: 'failedDeliveries',
    latencyMin: 'latencyMin',
    latencyAvg: 'latencyAvg',
    latencyP95: 'latencyP95',
    latencyMax: 'latencyMax',
    allPassed: 'allPassed',
    reportJson: 'reportJson'
  };

  export type TestRunScalarFieldEnum = (typeof TestRunScalarFieldEnum)[keyof typeof TestRunScalarFieldEnum]


  export const TestResultScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    assertionId: 'assertionId',
    assertionType: 'assertionType',
    description: 'description',
    passed: 'passed',
    expected: 'expected',
    actual: 'actual',
    errorMessage: 'errorMessage'
  };

  export type TestResultScalarFieldEnum = (typeof TestResultScalarFieldEnum)[keyof typeof TestResultScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    provider: 'provider',
    description: 'description',
    method: 'method',
    defaultHeadersJson: 'defaultHeadersJson',
    payload: 'payload',
    isBuiltIn: 'isBuiltIn',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    actorId: 'actorId',
    actorType: 'actorType',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    detailsJson: 'detailsJson',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workspaces?: WorkspaceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    ownerId?: StringNullableFilter<"Workspace"> | string | null
    isGuest?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    endpoints?: EndpointListRelationFilter
    guestSessions?: GuestSessionListRelationFilter
    scenarios?: ScenarioListRelationFilter
    testRuns?: TestRunListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    templates?: TemplateListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    endpoints?: EndpointOrderByRelationAggregateInput
    guestSessions?: GuestSessionOrderByRelationAggregateInput
    scenarios?: ScenarioOrderByRelationAggregateInput
    testRuns?: TestRunOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    templates?: TemplateOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    ownerId?: StringNullableFilter<"Workspace"> | string | null
    isGuest?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    endpoints?: EndpointListRelationFilter
    guestSessions?: GuestSessionListRelationFilter
    scenarios?: ScenarioListRelationFilter
    testRuns?: TestRunListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    templates?: TemplateListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    ownerId?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    isGuest?: BoolWithAggregatesFilter<"Workspace"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type GuestSessionWhereInput = {
    AND?: GuestSessionWhereInput | GuestSessionWhereInput[]
    OR?: GuestSessionWhereInput[]
    NOT?: GuestSessionWhereInput | GuestSessionWhereInput[]
    id?: StringFilter<"GuestSession"> | string
    tokenHash?: StringFilter<"GuestSession"> | string
    clientName?: StringFilter<"GuestSession"> | string
    workspaceId?: StringFilter<"GuestSession"> | string
    expiresAt?: DateTimeFilter<"GuestSession"> | Date | string
    createdAt?: DateTimeFilter<"GuestSession"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type GuestSessionOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    clientName?: SortOrder
    workspaceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type GuestSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: GuestSessionWhereInput | GuestSessionWhereInput[]
    OR?: GuestSessionWhereInput[]
    NOT?: GuestSessionWhereInput | GuestSessionWhereInput[]
    clientName?: StringFilter<"GuestSession"> | string
    workspaceId?: StringFilter<"GuestSession"> | string
    expiresAt?: DateTimeFilter<"GuestSession"> | Date | string
    createdAt?: DateTimeFilter<"GuestSession"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id" | "tokenHash">

  export type GuestSessionOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    clientName?: SortOrder
    workspaceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: GuestSessionCountOrderByAggregateInput
    _max?: GuestSessionMaxOrderByAggregateInput
    _min?: GuestSessionMinOrderByAggregateInput
  }

  export type GuestSessionScalarWhereWithAggregatesInput = {
    AND?: GuestSessionScalarWhereWithAggregatesInput | GuestSessionScalarWhereWithAggregatesInput[]
    OR?: GuestSessionScalarWhereWithAggregatesInput[]
    NOT?: GuestSessionScalarWhereWithAggregatesInput | GuestSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuestSession"> | string
    tokenHash?: StringWithAggregatesFilter<"GuestSession"> | string
    clientName?: StringWithAggregatesFilter<"GuestSession"> | string
    workspaceId?: StringWithAggregatesFilter<"GuestSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"GuestSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"GuestSession"> | Date | string
  }

  export type EndpointWhereInput = {
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    id?: StringFilter<"Endpoint"> | string
    workspaceId?: StringFilter<"Endpoint"> | string
    tokenHash?: StringFilter<"Endpoint"> | string
    tokenPrefix?: StringFilter<"Endpoint"> | string
    name?: StringFilter<"Endpoint"> | string
    description?: StringNullableFilter<"Endpoint"> | string | null
    signingSecretEnc?: StringNullableFilter<"Endpoint"> | string | null
    isPaused?: BoolFilter<"Endpoint"> | boolean
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    responseRule?: XOR<ResponseRuleNullableScalarRelationFilter, ResponseRuleWhereInput> | null
    events?: EventListRelationFilter
  }

  export type EndpointOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    tokenHash?: SortOrder
    tokenPrefix?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    signingSecretEnc?: SortOrderInput | SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    responseRule?: ResponseRuleOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
  }

  export type EndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    workspaceId?: StringFilter<"Endpoint"> | string
    tokenPrefix?: StringFilter<"Endpoint"> | string
    name?: StringFilter<"Endpoint"> | string
    description?: StringNullableFilter<"Endpoint"> | string | null
    signingSecretEnc?: StringNullableFilter<"Endpoint"> | string | null
    isPaused?: BoolFilter<"Endpoint"> | boolean
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    responseRule?: XOR<ResponseRuleNullableScalarRelationFilter, ResponseRuleWhereInput> | null
    events?: EventListRelationFilter
  }, "id" | "tokenHash">

  export type EndpointOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    tokenHash?: SortOrder
    tokenPrefix?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    signingSecretEnc?: SortOrderInput | SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EndpointCountOrderByAggregateInput
    _max?: EndpointMaxOrderByAggregateInput
    _min?: EndpointMinOrderByAggregateInput
  }

  export type EndpointScalarWhereWithAggregatesInput = {
    AND?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    OR?: EndpointScalarWhereWithAggregatesInput[]
    NOT?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endpoint"> | string
    workspaceId?: StringWithAggregatesFilter<"Endpoint"> | string
    tokenHash?: StringWithAggregatesFilter<"Endpoint"> | string
    tokenPrefix?: StringWithAggregatesFilter<"Endpoint"> | string
    name?: StringWithAggregatesFilter<"Endpoint"> | string
    description?: StringNullableWithAggregatesFilter<"Endpoint"> | string | null
    signingSecretEnc?: StringNullableWithAggregatesFilter<"Endpoint"> | string | null
    isPaused?: BoolWithAggregatesFilter<"Endpoint"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Endpoint"> | Date | string
  }

  export type ResponseRuleWhereInput = {
    AND?: ResponseRuleWhereInput | ResponseRuleWhereInput[]
    OR?: ResponseRuleWhereInput[]
    NOT?: ResponseRuleWhereInput | ResponseRuleWhereInput[]
    id?: StringFilter<"ResponseRule"> | string
    endpointId?: StringFilter<"ResponseRule"> | string
    statusCode?: IntFilter<"ResponseRule"> | number
    contentType?: StringFilter<"ResponseRule"> | string
    body?: StringFilter<"ResponseRule"> | string
    headersJson?: StringFilter<"ResponseRule"> | string
    delayMs?: IntFilter<"ResponseRule"> | number
    rateLimitPerMin?: IntFilter<"ResponseRule"> | number
    updatedAt?: DateTimeFilter<"ResponseRule"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }

  export type ResponseRuleOrderByWithRelationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    statusCode?: SortOrder
    contentType?: SortOrder
    body?: SortOrder
    headersJson?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
    updatedAt?: SortOrder
    endpoint?: EndpointOrderByWithRelationInput
  }

  export type ResponseRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    endpointId?: string
    AND?: ResponseRuleWhereInput | ResponseRuleWhereInput[]
    OR?: ResponseRuleWhereInput[]
    NOT?: ResponseRuleWhereInput | ResponseRuleWhereInput[]
    statusCode?: IntFilter<"ResponseRule"> | number
    contentType?: StringFilter<"ResponseRule"> | string
    body?: StringFilter<"ResponseRule"> | string
    headersJson?: StringFilter<"ResponseRule"> | string
    delayMs?: IntFilter<"ResponseRule"> | number
    rateLimitPerMin?: IntFilter<"ResponseRule"> | number
    updatedAt?: DateTimeFilter<"ResponseRule"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }, "id" | "endpointId">

  export type ResponseRuleOrderByWithAggregationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    statusCode?: SortOrder
    contentType?: SortOrder
    body?: SortOrder
    headersJson?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
    updatedAt?: SortOrder
    _count?: ResponseRuleCountOrderByAggregateInput
    _avg?: ResponseRuleAvgOrderByAggregateInput
    _max?: ResponseRuleMaxOrderByAggregateInput
    _min?: ResponseRuleMinOrderByAggregateInput
    _sum?: ResponseRuleSumOrderByAggregateInput
  }

  export type ResponseRuleScalarWhereWithAggregatesInput = {
    AND?: ResponseRuleScalarWhereWithAggregatesInput | ResponseRuleScalarWhereWithAggregatesInput[]
    OR?: ResponseRuleScalarWhereWithAggregatesInput[]
    NOT?: ResponseRuleScalarWhereWithAggregatesInput | ResponseRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResponseRule"> | string
    endpointId?: StringWithAggregatesFilter<"ResponseRule"> | string
    statusCode?: IntWithAggregatesFilter<"ResponseRule"> | number
    contentType?: StringWithAggregatesFilter<"ResponseRule"> | string
    body?: StringWithAggregatesFilter<"ResponseRule"> | string
    headersJson?: StringWithAggregatesFilter<"ResponseRule"> | string
    delayMs?: IntWithAggregatesFilter<"ResponseRule"> | number
    rateLimitPerMin?: IntWithAggregatesFilter<"ResponseRule"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"ResponseRule"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    endpointId?: StringFilter<"Event"> | string
    method?: StringFilter<"Event"> | string
    path?: StringFilter<"Event"> | string
    queryJson?: StringFilter<"Event"> | string
    headersJson?: StringFilter<"Event"> | string
    rawBody?: BytesFilter<"Event"> | Bytes
    parsedBody?: StringNullableFilter<"Event"> | string | null
    statusCode?: IntFilter<"Event"> | number
    ip?: StringFilter<"Event"> | string
    sizeBytes?: IntFilter<"Event"> | number
    isInvalidJson?: BoolFilter<"Event"> | boolean
    redactedHeaders?: StringFilter<"Event"> | string
    receivedAt?: DateTimeFilter<"Event"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
    deliveries?: DeliveryListRelationFilter
    replayJobs?: ReplayJobListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    queryJson?: SortOrder
    headersJson?: SortOrder
    rawBody?: SortOrder
    parsedBody?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    ip?: SortOrder
    sizeBytes?: SortOrder
    isInvalidJson?: SortOrder
    redactedHeaders?: SortOrder
    receivedAt?: SortOrder
    endpoint?: EndpointOrderByWithRelationInput
    deliveries?: DeliveryOrderByRelationAggregateInput
    replayJobs?: ReplayJobOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    endpointId?: StringFilter<"Event"> | string
    method?: StringFilter<"Event"> | string
    path?: StringFilter<"Event"> | string
    queryJson?: StringFilter<"Event"> | string
    headersJson?: StringFilter<"Event"> | string
    rawBody?: BytesFilter<"Event"> | Bytes
    parsedBody?: StringNullableFilter<"Event"> | string | null
    statusCode?: IntFilter<"Event"> | number
    ip?: StringFilter<"Event"> | string
    sizeBytes?: IntFilter<"Event"> | number
    isInvalidJson?: BoolFilter<"Event"> | boolean
    redactedHeaders?: StringFilter<"Event"> | string
    receivedAt?: DateTimeFilter<"Event"> | Date | string
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
    deliveries?: DeliveryListRelationFilter
    replayJobs?: ReplayJobListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    endpointId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    queryJson?: SortOrder
    headersJson?: SortOrder
    rawBody?: SortOrder
    parsedBody?: SortOrderInput | SortOrder
    statusCode?: SortOrder
    ip?: SortOrder
    sizeBytes?: SortOrder
    isInvalidJson?: SortOrder
    redactedHeaders?: SortOrder
    receivedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    endpointId?: StringWithAggregatesFilter<"Event"> | string
    method?: StringWithAggregatesFilter<"Event"> | string
    path?: StringWithAggregatesFilter<"Event"> | string
    queryJson?: StringWithAggregatesFilter<"Event"> | string
    headersJson?: StringWithAggregatesFilter<"Event"> | string
    rawBody?: BytesWithAggregatesFilter<"Event"> | Bytes
    parsedBody?: StringNullableWithAggregatesFilter<"Event"> | string | null
    statusCode?: IntWithAggregatesFilter<"Event"> | number
    ip?: StringWithAggregatesFilter<"Event"> | string
    sizeBytes?: IntWithAggregatesFilter<"Event"> | number
    isInvalidJson?: BoolWithAggregatesFilter<"Event"> | boolean
    redactedHeaders?: StringWithAggregatesFilter<"Event"> | string
    receivedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: StringFilter<"Delivery"> | string
    eventId?: StringFilter<"Delivery"> | string
    destinationUrl?: StringFilter<"Delivery"> | string
    method?: StringFilter<"Delivery"> | string
    statusCode?: IntFilter<"Delivery"> | number
    latencyMs?: IntFilter<"Delivery"> | number
    headersJson?: StringFilter<"Delivery"> | string
    responseBody?: StringFilter<"Delivery"> | string
    success?: BoolFilter<"Delivery"> | boolean
    errorMessage?: StringNullableFilter<"Delivery"> | string | null
    sentAt?: DateTimeFilter<"Delivery"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    destinationUrl?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    latencyMs?: SortOrder
    headersJson?: SortOrder
    responseBody?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    eventId?: StringFilter<"Delivery"> | string
    destinationUrl?: StringFilter<"Delivery"> | string
    method?: StringFilter<"Delivery"> | string
    statusCode?: IntFilter<"Delivery"> | number
    latencyMs?: IntFilter<"Delivery"> | number
    headersJson?: StringFilter<"Delivery"> | string
    responseBody?: StringFilter<"Delivery"> | string
    success?: BoolFilter<"Delivery"> | boolean
    errorMessage?: StringNullableFilter<"Delivery"> | string | null
    sentAt?: DateTimeFilter<"Delivery"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    destinationUrl?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    latencyMs?: SortOrder
    headersJson?: SortOrder
    responseBody?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delivery"> | string
    eventId?: StringWithAggregatesFilter<"Delivery"> | string
    destinationUrl?: StringWithAggregatesFilter<"Delivery"> | string
    method?: StringWithAggregatesFilter<"Delivery"> | string
    statusCode?: IntWithAggregatesFilter<"Delivery"> | number
    latencyMs?: IntWithAggregatesFilter<"Delivery"> | number
    headersJson?: StringWithAggregatesFilter<"Delivery"> | string
    responseBody?: StringWithAggregatesFilter<"Delivery"> | string
    success?: BoolWithAggregatesFilter<"Delivery"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"Delivery"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
  }

  export type ReplayJobWhereInput = {
    AND?: ReplayJobWhereInput | ReplayJobWhereInput[]
    OR?: ReplayJobWhereInput[]
    NOT?: ReplayJobWhereInput | ReplayJobWhereInput[]
    id?: StringFilter<"ReplayJob"> | string
    originalEventId?: StringFilter<"ReplayJob"> | string
    destinationUrl?: StringFilter<"ReplayJob"> | string
    status?: StringFilter<"ReplayJob"> | string
    resultDiff?: StringNullableFilter<"ReplayJob"> | string | null
    createdAt?: DateTimeFilter<"ReplayJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ReplayJob"> | Date | string | null
    originalEvent?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type ReplayJobOrderByWithRelationInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    destinationUrl?: SortOrder
    status?: SortOrder
    resultDiff?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    originalEvent?: EventOrderByWithRelationInput
  }

  export type ReplayJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReplayJobWhereInput | ReplayJobWhereInput[]
    OR?: ReplayJobWhereInput[]
    NOT?: ReplayJobWhereInput | ReplayJobWhereInput[]
    originalEventId?: StringFilter<"ReplayJob"> | string
    destinationUrl?: StringFilter<"ReplayJob"> | string
    status?: StringFilter<"ReplayJob"> | string
    resultDiff?: StringNullableFilter<"ReplayJob"> | string | null
    createdAt?: DateTimeFilter<"ReplayJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ReplayJob"> | Date | string | null
    originalEvent?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type ReplayJobOrderByWithAggregationInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    destinationUrl?: SortOrder
    status?: SortOrder
    resultDiff?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: ReplayJobCountOrderByAggregateInput
    _max?: ReplayJobMaxOrderByAggregateInput
    _min?: ReplayJobMinOrderByAggregateInput
  }

  export type ReplayJobScalarWhereWithAggregatesInput = {
    AND?: ReplayJobScalarWhereWithAggregatesInput | ReplayJobScalarWhereWithAggregatesInput[]
    OR?: ReplayJobScalarWhereWithAggregatesInput[]
    NOT?: ReplayJobScalarWhereWithAggregatesInput | ReplayJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReplayJob"> | string
    originalEventId?: StringWithAggregatesFilter<"ReplayJob"> | string
    destinationUrl?: StringWithAggregatesFilter<"ReplayJob"> | string
    status?: StringWithAggregatesFilter<"ReplayJob"> | string
    resultDiff?: StringNullableWithAggregatesFilter<"ReplayJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReplayJob"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ReplayJob"> | Date | string | null
  }

  export type ScenarioWhereInput = {
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    id?: StringFilter<"Scenario"> | string
    workspaceId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    description?: StringNullableFilter<"Scenario"> | string | null
    destinationUrl?: StringFilter<"Scenario"> | string
    basePayload?: StringFilter<"Scenario"> | string
    baseHeadersJson?: StringFilter<"Scenario"> | string
    stepsJson?: StringFilter<"Scenario"> | string
    assertionsJson?: StringFilter<"Scenario"> | string
    rngSeed?: IntNullableFilter<"Scenario"> | number | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    testRuns?: TestRunListRelationFilter
  }

  export type ScenarioOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    destinationUrl?: SortOrder
    basePayload?: SortOrder
    baseHeadersJson?: SortOrder
    stepsJson?: SortOrder
    assertionsJson?: SortOrder
    rngSeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    testRuns?: TestRunOrderByRelationAggregateInput
  }

  export type ScenarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScenarioWhereInput | ScenarioWhereInput[]
    OR?: ScenarioWhereInput[]
    NOT?: ScenarioWhereInput | ScenarioWhereInput[]
    workspaceId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    description?: StringNullableFilter<"Scenario"> | string | null
    destinationUrl?: StringFilter<"Scenario"> | string
    basePayload?: StringFilter<"Scenario"> | string
    baseHeadersJson?: StringFilter<"Scenario"> | string
    stepsJson?: StringFilter<"Scenario"> | string
    assertionsJson?: StringFilter<"Scenario"> | string
    rngSeed?: IntNullableFilter<"Scenario"> | number | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    testRuns?: TestRunListRelationFilter
  }, "id">

  export type ScenarioOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    destinationUrl?: SortOrder
    basePayload?: SortOrder
    baseHeadersJson?: SortOrder
    stepsJson?: SortOrder
    assertionsJson?: SortOrder
    rngSeed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScenarioCountOrderByAggregateInput
    _avg?: ScenarioAvgOrderByAggregateInput
    _max?: ScenarioMaxOrderByAggregateInput
    _min?: ScenarioMinOrderByAggregateInput
    _sum?: ScenarioSumOrderByAggregateInput
  }

  export type ScenarioScalarWhereWithAggregatesInput = {
    AND?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    OR?: ScenarioScalarWhereWithAggregatesInput[]
    NOT?: ScenarioScalarWhereWithAggregatesInput | ScenarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scenario"> | string
    workspaceId?: StringWithAggregatesFilter<"Scenario"> | string
    name?: StringWithAggregatesFilter<"Scenario"> | string
    description?: StringNullableWithAggregatesFilter<"Scenario"> | string | null
    destinationUrl?: StringWithAggregatesFilter<"Scenario"> | string
    basePayload?: StringWithAggregatesFilter<"Scenario"> | string
    baseHeadersJson?: StringWithAggregatesFilter<"Scenario"> | string
    stepsJson?: StringWithAggregatesFilter<"Scenario"> | string
    assertionsJson?: StringWithAggregatesFilter<"Scenario"> | string
    rngSeed?: IntNullableWithAggregatesFilter<"Scenario"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scenario"> | Date | string
  }

  export type TestRunWhereInput = {
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    id?: StringFilter<"TestRun"> | string
    scenarioId?: StringFilter<"TestRun"> | string
    workspaceId?: StringFilter<"TestRun"> | string
    startedAt?: DateTimeFilter<"TestRun"> | Date | string
    finishedAt?: DateTimeFilter<"TestRun"> | Date | string
    durationMs?: IntFilter<"TestRun"> | number
    totalDeliveries?: IntFilter<"TestRun"> | number
    successfulDeliveries?: IntFilter<"TestRun"> | number
    failedDeliveries?: IntFilter<"TestRun"> | number
    latencyMin?: IntFilter<"TestRun"> | number
    latencyAvg?: IntFilter<"TestRun"> | number
    latencyP95?: IntFilter<"TestRun"> | number
    latencyMax?: IntFilter<"TestRun"> | number
    allPassed?: BoolFilter<"TestRun"> | boolean
    reportJson?: StringFilter<"TestRun"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    testResults?: TestResultListRelationFilter
  }

  export type TestRunOrderByWithRelationInput = {
    id?: SortOrder
    scenarioId?: SortOrder
    workspaceId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
    allPassed?: SortOrder
    reportJson?: SortOrder
    scenario?: ScenarioOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    testResults?: TestResultOrderByRelationAggregateInput
  }

  export type TestRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    scenarioId?: StringFilter<"TestRun"> | string
    workspaceId?: StringFilter<"TestRun"> | string
    startedAt?: DateTimeFilter<"TestRun"> | Date | string
    finishedAt?: DateTimeFilter<"TestRun"> | Date | string
    durationMs?: IntFilter<"TestRun"> | number
    totalDeliveries?: IntFilter<"TestRun"> | number
    successfulDeliveries?: IntFilter<"TestRun"> | number
    failedDeliveries?: IntFilter<"TestRun"> | number
    latencyMin?: IntFilter<"TestRun"> | number
    latencyAvg?: IntFilter<"TestRun"> | number
    latencyP95?: IntFilter<"TestRun"> | number
    latencyMax?: IntFilter<"TestRun"> | number
    allPassed?: BoolFilter<"TestRun"> | boolean
    reportJson?: StringFilter<"TestRun"> | string
    scenario?: XOR<ScenarioScalarRelationFilter, ScenarioWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    testResults?: TestResultListRelationFilter
  }, "id">

  export type TestRunOrderByWithAggregationInput = {
    id?: SortOrder
    scenarioId?: SortOrder
    workspaceId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
    allPassed?: SortOrder
    reportJson?: SortOrder
    _count?: TestRunCountOrderByAggregateInput
    _avg?: TestRunAvgOrderByAggregateInput
    _max?: TestRunMaxOrderByAggregateInput
    _min?: TestRunMinOrderByAggregateInput
    _sum?: TestRunSumOrderByAggregateInput
  }

  export type TestRunScalarWhereWithAggregatesInput = {
    AND?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    OR?: TestRunScalarWhereWithAggregatesInput[]
    NOT?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestRun"> | string
    scenarioId?: StringWithAggregatesFilter<"TestRun"> | string
    workspaceId?: StringWithAggregatesFilter<"TestRun"> | string
    startedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    finishedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    durationMs?: IntWithAggregatesFilter<"TestRun"> | number
    totalDeliveries?: IntWithAggregatesFilter<"TestRun"> | number
    successfulDeliveries?: IntWithAggregatesFilter<"TestRun"> | number
    failedDeliveries?: IntWithAggregatesFilter<"TestRun"> | number
    latencyMin?: IntWithAggregatesFilter<"TestRun"> | number
    latencyAvg?: IntWithAggregatesFilter<"TestRun"> | number
    latencyP95?: IntWithAggregatesFilter<"TestRun"> | number
    latencyMax?: IntWithAggregatesFilter<"TestRun"> | number
    allPassed?: BoolWithAggregatesFilter<"TestRun"> | boolean
    reportJson?: StringWithAggregatesFilter<"TestRun"> | string
  }

  export type TestResultWhereInput = {
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    id?: StringFilter<"TestResult"> | string
    testRunId?: StringFilter<"TestResult"> | string
    assertionId?: StringFilter<"TestResult"> | string
    assertionType?: StringFilter<"TestResult"> | string
    description?: StringFilter<"TestResult"> | string
    passed?: BoolFilter<"TestResult"> | boolean
    expected?: StringNullableFilter<"TestResult"> | string | null
    actual?: StringNullableFilter<"TestResult"> | string | null
    errorMessage?: StringNullableFilter<"TestResult"> | string | null
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type TestResultOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    assertionId?: SortOrder
    assertionType?: SortOrder
    description?: SortOrder
    passed?: SortOrder
    expected?: SortOrderInput | SortOrder
    actual?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    testRun?: TestRunOrderByWithRelationInput
  }

  export type TestResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestResultWhereInput | TestResultWhereInput[]
    OR?: TestResultWhereInput[]
    NOT?: TestResultWhereInput | TestResultWhereInput[]
    testRunId?: StringFilter<"TestResult"> | string
    assertionId?: StringFilter<"TestResult"> | string
    assertionType?: StringFilter<"TestResult"> | string
    description?: StringFilter<"TestResult"> | string
    passed?: BoolFilter<"TestResult"> | boolean
    expected?: StringNullableFilter<"TestResult"> | string | null
    actual?: StringNullableFilter<"TestResult"> | string | null
    errorMessage?: StringNullableFilter<"TestResult"> | string | null
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id">

  export type TestResultOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    assertionId?: SortOrder
    assertionType?: SortOrder
    description?: SortOrder
    passed?: SortOrder
    expected?: SortOrderInput | SortOrder
    actual?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    _count?: TestResultCountOrderByAggregateInput
    _max?: TestResultMaxOrderByAggregateInput
    _min?: TestResultMinOrderByAggregateInput
  }

  export type TestResultScalarWhereWithAggregatesInput = {
    AND?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    OR?: TestResultScalarWhereWithAggregatesInput[]
    NOT?: TestResultScalarWhereWithAggregatesInput | TestResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestResult"> | string
    testRunId?: StringWithAggregatesFilter<"TestResult"> | string
    assertionId?: StringWithAggregatesFilter<"TestResult"> | string
    assertionType?: StringWithAggregatesFilter<"TestResult"> | string
    description?: StringWithAggregatesFilter<"TestResult"> | string
    passed?: BoolWithAggregatesFilter<"TestResult"> | boolean
    expected?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    actual?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"TestResult"> | string | null
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    provider?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    method?: StringFilter<"Template"> | string
    defaultHeadersJson?: StringFilter<"Template"> | string
    payload?: StringFilter<"Template"> | string
    isBuiltIn?: BoolFilter<"Template"> | boolean
    workspaceId?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    workspace?: XOR<WorkspaceNullableScalarRelationFilter, WorkspaceWhereInput> | null
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    method?: SortOrder
    defaultHeadersJson?: SortOrder
    payload?: SortOrder
    isBuiltIn?: SortOrder
    workspaceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    provider?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    method?: StringFilter<"Template"> | string
    defaultHeadersJson?: StringFilter<"Template"> | string
    payload?: StringFilter<"Template"> | string
    isBuiltIn?: BoolFilter<"Template"> | boolean
    workspaceId?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    workspace?: XOR<WorkspaceNullableScalarRelationFilter, WorkspaceWhereInput> | null
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    method?: SortOrder
    defaultHeadersJson?: SortOrder
    payload?: SortOrder
    isBuiltIn?: SortOrder
    workspaceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    category?: StringWithAggregatesFilter<"Template"> | string
    provider?: StringWithAggregatesFilter<"Template"> | string
    description?: StringWithAggregatesFilter<"Template"> | string
    method?: StringWithAggregatesFilter<"Template"> | string
    defaultHeadersJson?: StringWithAggregatesFilter<"Template"> | string
    payload?: StringWithAggregatesFilter<"Template"> | string
    isBuiltIn?: BoolWithAggregatesFilter<"Template"> | boolean
    workspaceId?: StringNullableWithAggregatesFilter<"Template"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringFilter<"AuditLog"> | string
    detailsJson?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detailsJson?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringFilter<"AuditLog"> | string
    detailsJson?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detailsJson?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    workspaceId?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    actorType?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    targetType?: StringWithAggregatesFilter<"AuditLog"> | string
    targetId?: StringWithAggregatesFilter<"AuditLog"> | string
    detailsJson?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionCreateInput = {
    id?: string
    tokenHash: string
    clientName?: string
    expiresAt: Date | string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutGuestSessionsInput
  }

  export type GuestSessionUncheckedCreateInput = {
    id?: string
    tokenHash: string
    clientName?: string
    workspaceId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GuestSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutGuestSessionsNestedInput
  }

  export type GuestSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionCreateManyInput = {
    id?: string
    tokenHash: string
    clientName?: string
    workspaceId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GuestSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointCreateInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEndpointsInput
    responseRule?: ResponseRuleCreateNestedOneWithoutEndpointInput
    events?: EventCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateInput = {
    id?: string
    workspaceId: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responseRule?: ResponseRuleUncheckedCreateNestedOneWithoutEndpointInput
    events?: EventUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEndpointsNestedInput
    responseRule?: ResponseRuleUpdateOneWithoutEndpointNestedInput
    events?: EventUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseRule?: ResponseRuleUncheckedUpdateOneWithoutEndpointNestedInput
    events?: EventUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointCreateManyInput = {
    id?: string
    workspaceId: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EndpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseRuleCreateInput = {
    id?: string
    statusCode?: number
    contentType?: string
    body?: string
    headersJson?: string
    delayMs?: number
    rateLimitPerMin?: number
    updatedAt?: Date | string
    endpoint: EndpointCreateNestedOneWithoutResponseRuleInput
  }

  export type ResponseRuleUncheckedCreateInput = {
    id?: string
    endpointId: string
    statusCode?: number
    contentType?: string
    body?: string
    headersJson?: string
    delayMs?: number
    rateLimitPerMin?: number
    updatedAt?: Date | string
  }

  export type ResponseRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: EndpointUpdateOneRequiredWithoutResponseRuleNestedInput
  }

  export type ResponseRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseRuleCreateManyInput = {
    id?: string
    endpointId: string
    statusCode?: number
    contentType?: string
    body?: string
    headersJson?: string
    delayMs?: number
    rateLimitPerMin?: number
    updatedAt?: Date | string
  }

  export type ResponseRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    endpoint: EndpointCreateNestedOneWithoutEventsInput
    deliveries?: DeliveryCreateNestedManyWithoutEventInput
    replayJobs?: ReplayJobCreateNestedManyWithoutOriginalEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    endpointId: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutEventInput
    replayJobs?: ReplayJobUncheckedCreateNestedManyWithoutOriginalEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: EndpointUpdateOneRequiredWithoutEventsNestedInput
    deliveries?: DeliveryUpdateManyWithoutEventNestedInput
    replayJobs?: ReplayJobUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutEventNestedInput
    replayJobs?: ReplayJobUncheckedUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    endpointId: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    id?: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
    event: EventCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: string
    eventId: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
  }

  export type DeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyInput = {
    id?: string
    eventId: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
  }

  export type DeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayJobCreateInput = {
    id?: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
    originalEvent: EventCreateNestedOneWithoutReplayJobsInput
  }

  export type ReplayJobUncheckedCreateInput = {
    id?: string
    originalEventId: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReplayJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originalEvent?: EventUpdateOneRequiredWithoutReplayJobsNestedInput
  }

  export type ReplayJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReplayJobCreateManyInput = {
    id?: string
    originalEventId: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReplayJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReplayJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalEventId?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScenarioCreateInput = {
    id?: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutScenariosInput
    testRuns?: TestRunCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutScenariosNestedInput
    testRuns?: TestRunUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunCreateInput = {
    id?: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    scenario: ScenarioCreateNestedOneWithoutTestRunsInput
    workspace: WorkspaceCreateNestedOneWithoutTestRunsInput
    testResults?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateInput = {
    id?: string
    scenarioId: string
    workspaceId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutTestRunsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutTestRunsNestedInput
    testResults?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    testResults?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateManyInput = {
    id?: string
    scenarioId: string
    workspaceId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
  }

  export type TestRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
  }

  export type TestRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
  }

  export type TestResultCreateInput = {
    id?: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
    testRun: TestRunCreateNestedOneWithoutTestResultsInput
  }

  export type TestResultUncheckedCreateInput = {
    id?: string
    testRunId: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
  }

  export type TestResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    testRun?: TestRunUpdateOneRequiredWithoutTestResultsNestedInput
  }

  export type TestResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestResultCreateManyInput = {
    id?: string
    testRunId: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
  }

  export type TestResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testRunId?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    createdAt?: Date | string
    workspace?: WorkspaceCreateNestedOneWithoutTemplatesInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    workspaceId?: string | null
    createdAt?: Date | string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneWithoutTemplatesNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    workspaceId?: string | null
    createdAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    workspaceId: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    workspaceId: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EndpointListRelationFilter = {
    every?: EndpointWhereInput
    some?: EndpointWhereInput
    none?: EndpointWhereInput
  }

  export type GuestSessionListRelationFilter = {
    every?: GuestSessionWhereInput
    some?: GuestSessionWhereInput
    none?: GuestSessionWhereInput
  }

  export type ScenarioListRelationFilter = {
    every?: ScenarioWhereInput
    some?: ScenarioWhereInput
    none?: ScenarioWhereInput
  }

  export type TestRunListRelationFilter = {
    every?: TestRunWhereInput
    some?: TestRunWhereInput
    none?: TestRunWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type TemplateListRelationFilter = {
    every?: TemplateWhereInput
    some?: TemplateWhereInput
    none?: TemplateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EndpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScenarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type GuestSessionCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    clientName?: SortOrder
    workspaceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    clientName?: SortOrder
    workspaceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type GuestSessionMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    clientName?: SortOrder
    workspaceId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponseRuleNullableScalarRelationFilter = {
    is?: ResponseRuleWhereInput | null
    isNot?: ResponseRuleWhereInput | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EndpointCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    tokenHash?: SortOrder
    tokenPrefix?: SortOrder
    name?: SortOrder
    description?: SortOrder
    signingSecretEnc?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    tokenHash?: SortOrder
    tokenPrefix?: SortOrder
    name?: SortOrder
    description?: SortOrder
    signingSecretEnc?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EndpointMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    tokenHash?: SortOrder
    tokenPrefix?: SortOrder
    name?: SortOrder
    description?: SortOrder
    signingSecretEnc?: SortOrder
    isPaused?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EndpointScalarRelationFilter = {
    is?: EndpointWhereInput
    isNot?: EndpointWhereInput
  }

  export type ResponseRuleCountOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    statusCode?: SortOrder
    contentType?: SortOrder
    body?: SortOrder
    headersJson?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponseRuleAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
  }

  export type ResponseRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    statusCode?: SortOrder
    contentType?: SortOrder
    body?: SortOrder
    headersJson?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponseRuleMinOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    statusCode?: SortOrder
    contentType?: SortOrder
    body?: SortOrder
    headersJson?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponseRuleSumOrderByAggregateInput = {
    statusCode?: SortOrder
    delayMs?: SortOrder
    rateLimitPerMin?: SortOrder
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

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type ReplayJobListRelationFilter = {
    every?: ReplayJobWhereInput
    some?: ReplayJobWhereInput
    none?: ReplayJobWhereInput
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplayJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    queryJson?: SortOrder
    headersJson?: SortOrder
    rawBody?: SortOrder
    parsedBody?: SortOrder
    statusCode?: SortOrder
    ip?: SortOrder
    sizeBytes?: SortOrder
    isInvalidJson?: SortOrder
    redactedHeaders?: SortOrder
    receivedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    sizeBytes?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    queryJson?: SortOrder
    headersJson?: SortOrder
    rawBody?: SortOrder
    parsedBody?: SortOrder
    statusCode?: SortOrder
    ip?: SortOrder
    sizeBytes?: SortOrder
    isInvalidJson?: SortOrder
    redactedHeaders?: SortOrder
    receivedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    queryJson?: SortOrder
    headersJson?: SortOrder
    rawBody?: SortOrder
    parsedBody?: SortOrder
    statusCode?: SortOrder
    ip?: SortOrder
    sizeBytes?: SortOrder
    isInvalidJson?: SortOrder
    redactedHeaders?: SortOrder
    receivedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    statusCode?: SortOrder
    sizeBytes?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    destinationUrl?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    latencyMs?: SortOrder
    headersJson?: SortOrder
    responseBody?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    statusCode?: SortOrder
    latencyMs?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    destinationUrl?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    latencyMs?: SortOrder
    headersJson?: SortOrder
    responseBody?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    destinationUrl?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    latencyMs?: SortOrder
    headersJson?: SortOrder
    responseBody?: SortOrder
    success?: SortOrder
    errorMessage?: SortOrder
    sentAt?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    statusCode?: SortOrder
    latencyMs?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReplayJobCountOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    destinationUrl?: SortOrder
    status?: SortOrder
    resultDiff?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReplayJobMaxOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    destinationUrl?: SortOrder
    status?: SortOrder
    resultDiff?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ReplayJobMinOrderByAggregateInput = {
    id?: SortOrder
    originalEventId?: SortOrder
    destinationUrl?: SortOrder
    status?: SortOrder
    resultDiff?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ScenarioCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    destinationUrl?: SortOrder
    basePayload?: SortOrder
    baseHeadersJson?: SortOrder
    stepsJson?: SortOrder
    assertionsJson?: SortOrder
    rngSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioAvgOrderByAggregateInput = {
    rngSeed?: SortOrder
  }

  export type ScenarioMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    destinationUrl?: SortOrder
    basePayload?: SortOrder
    baseHeadersJson?: SortOrder
    stepsJson?: SortOrder
    assertionsJson?: SortOrder
    rngSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    destinationUrl?: SortOrder
    basePayload?: SortOrder
    baseHeadersJson?: SortOrder
    stepsJson?: SortOrder
    assertionsJson?: SortOrder
    rngSeed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScenarioSumOrderByAggregateInput = {
    rngSeed?: SortOrder
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

  export type ScenarioScalarRelationFilter = {
    is?: ScenarioWhereInput
    isNot?: ScenarioWhereInput
  }

  export type TestResultListRelationFilter = {
    every?: TestResultWhereInput
    some?: TestResultWhereInput
    none?: TestResultWhereInput
  }

  export type TestResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestRunCountOrderByAggregateInput = {
    id?: SortOrder
    scenarioId?: SortOrder
    workspaceId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
    allPassed?: SortOrder
    reportJson?: SortOrder
  }

  export type TestRunAvgOrderByAggregateInput = {
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
  }

  export type TestRunMaxOrderByAggregateInput = {
    id?: SortOrder
    scenarioId?: SortOrder
    workspaceId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
    allPassed?: SortOrder
    reportJson?: SortOrder
  }

  export type TestRunMinOrderByAggregateInput = {
    id?: SortOrder
    scenarioId?: SortOrder
    workspaceId?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
    allPassed?: SortOrder
    reportJson?: SortOrder
  }

  export type TestRunSumOrderByAggregateInput = {
    durationMs?: SortOrder
    totalDeliveries?: SortOrder
    successfulDeliveries?: SortOrder
    failedDeliveries?: SortOrder
    latencyMin?: SortOrder
    latencyAvg?: SortOrder
    latencyP95?: SortOrder
    latencyMax?: SortOrder
  }

  export type TestRunScalarRelationFilter = {
    is?: TestRunWhereInput
    isNot?: TestRunWhereInput
  }

  export type TestResultCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    assertionId?: SortOrder
    assertionType?: SortOrder
    description?: SortOrder
    passed?: SortOrder
    expected?: SortOrder
    actual?: SortOrder
    errorMessage?: SortOrder
  }

  export type TestResultMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    assertionId?: SortOrder
    assertionType?: SortOrder
    description?: SortOrder
    passed?: SortOrder
    expected?: SortOrder
    actual?: SortOrder
    errorMessage?: SortOrder
  }

  export type TestResultMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    assertionId?: SortOrder
    assertionType?: SortOrder
    description?: SortOrder
    passed?: SortOrder
    expected?: SortOrder
    actual?: SortOrder
    errorMessage?: SortOrder
  }

  export type WorkspaceNullableScalarRelationFilter = {
    is?: WorkspaceWhereInput | null
    isNot?: WorkspaceWhereInput | null
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    method?: SortOrder
    defaultHeadersJson?: SortOrder
    payload?: SortOrder
    isBuiltIn?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    method?: SortOrder
    defaultHeadersJson?: SortOrder
    payload?: SortOrder
    isBuiltIn?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    description?: SortOrder
    method?: SortOrder
    defaultHeadersJson?: SortOrder
    payload?: SortOrder
    isBuiltIn?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detailsJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detailsJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    actorType?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    detailsJson?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkspaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type EndpointCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput> | EndpointCreateWithoutWorkspaceInput[] | EndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutWorkspaceInput | EndpointCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EndpointCreateManyWorkspaceInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type GuestSessionCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput> | GuestSessionCreateWithoutWorkspaceInput[] | GuestSessionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GuestSessionCreateOrConnectWithoutWorkspaceInput | GuestSessionCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GuestSessionCreateManyWorkspaceInputEnvelope
    connect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
  }

  export type ScenarioCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput> | ScenarioCreateWithoutWorkspaceInput[] | ScenarioUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutWorkspaceInput | ScenarioCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ScenarioCreateManyWorkspaceInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type TestRunCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput> | TestRunCreateWithoutWorkspaceInput[] | TestRunUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutWorkspaceInput | TestRunCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TestRunCreateManyWorkspaceInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TemplateCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput> | TemplateCreateWithoutWorkspaceInput[] | TemplateUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutWorkspaceInput | TemplateCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TemplateCreateManyWorkspaceInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type EndpointUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput> | EndpointCreateWithoutWorkspaceInput[] | EndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutWorkspaceInput | EndpointCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EndpointCreateManyWorkspaceInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput> | GuestSessionCreateWithoutWorkspaceInput[] | GuestSessionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GuestSessionCreateOrConnectWithoutWorkspaceInput | GuestSessionCreateOrConnectWithoutWorkspaceInput[]
    createMany?: GuestSessionCreateManyWorkspaceInputEnvelope
    connect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
  }

  export type ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput> | ScenarioCreateWithoutWorkspaceInput[] | ScenarioUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutWorkspaceInput | ScenarioCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ScenarioCreateManyWorkspaceInputEnvelope
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
  }

  export type TestRunUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput> | TestRunCreateWithoutWorkspaceInput[] | TestRunUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutWorkspaceInput | TestRunCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TestRunCreateManyWorkspaceInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TemplateUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput> | TemplateCreateWithoutWorkspaceInput[] | TemplateUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutWorkspaceInput | TemplateCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TemplateCreateManyWorkspaceInputEnvelope
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type EndpointUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput> | EndpointCreateWithoutWorkspaceInput[] | EndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutWorkspaceInput | EndpointCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutWorkspaceInput | EndpointUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EndpointCreateManyWorkspaceInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutWorkspaceInput | EndpointUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutWorkspaceInput | EndpointUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type GuestSessionUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput> | GuestSessionCreateWithoutWorkspaceInput[] | GuestSessionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GuestSessionCreateOrConnectWithoutWorkspaceInput | GuestSessionCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GuestSessionUpsertWithWhereUniqueWithoutWorkspaceInput | GuestSessionUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GuestSessionCreateManyWorkspaceInputEnvelope
    set?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    disconnect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    delete?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    connect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    update?: GuestSessionUpdateWithWhereUniqueWithoutWorkspaceInput | GuestSessionUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GuestSessionUpdateManyWithWhereWithoutWorkspaceInput | GuestSessionUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GuestSessionScalarWhereInput | GuestSessionScalarWhereInput[]
  }

  export type ScenarioUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput> | ScenarioCreateWithoutWorkspaceInput[] | ScenarioUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutWorkspaceInput | ScenarioCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutWorkspaceInput | ScenarioUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ScenarioCreateManyWorkspaceInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutWorkspaceInput | ScenarioUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutWorkspaceInput | ScenarioUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type TestRunUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput> | TestRunCreateWithoutWorkspaceInput[] | TestRunUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutWorkspaceInput | TestRunCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutWorkspaceInput | TestRunUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TestRunCreateManyWorkspaceInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutWorkspaceInput | TestRunUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutWorkspaceInput | TestRunUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput | AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput | AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkspaceInput | AuditLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TemplateUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput> | TemplateCreateWithoutWorkspaceInput[] | TemplateUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutWorkspaceInput | TemplateCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutWorkspaceInput | TemplateUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TemplateCreateManyWorkspaceInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutWorkspaceInput | TemplateUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutWorkspaceInput | TemplateUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput> | EndpointCreateWithoutWorkspaceInput[] | EndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutWorkspaceInput | EndpointCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutWorkspaceInput | EndpointUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EndpointCreateManyWorkspaceInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutWorkspaceInput | EndpointUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutWorkspaceInput | EndpointUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput> | GuestSessionCreateWithoutWorkspaceInput[] | GuestSessionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: GuestSessionCreateOrConnectWithoutWorkspaceInput | GuestSessionCreateOrConnectWithoutWorkspaceInput[]
    upsert?: GuestSessionUpsertWithWhereUniqueWithoutWorkspaceInput | GuestSessionUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: GuestSessionCreateManyWorkspaceInputEnvelope
    set?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    disconnect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    delete?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    connect?: GuestSessionWhereUniqueInput | GuestSessionWhereUniqueInput[]
    update?: GuestSessionUpdateWithWhereUniqueWithoutWorkspaceInput | GuestSessionUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: GuestSessionUpdateManyWithWhereWithoutWorkspaceInput | GuestSessionUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: GuestSessionScalarWhereInput | GuestSessionScalarWhereInput[]
  }

  export type ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput> | ScenarioCreateWithoutWorkspaceInput[] | ScenarioUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ScenarioCreateOrConnectWithoutWorkspaceInput | ScenarioCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ScenarioUpsertWithWhereUniqueWithoutWorkspaceInput | ScenarioUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ScenarioCreateManyWorkspaceInputEnvelope
    set?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    disconnect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    delete?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    connect?: ScenarioWhereUniqueInput | ScenarioWhereUniqueInput[]
    update?: ScenarioUpdateWithWhereUniqueWithoutWorkspaceInput | ScenarioUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ScenarioUpdateManyWithWhereWithoutWorkspaceInput | ScenarioUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
  }

  export type TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput> | TestRunCreateWithoutWorkspaceInput[] | TestRunUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutWorkspaceInput | TestRunCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutWorkspaceInput | TestRunUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TestRunCreateManyWorkspaceInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutWorkspaceInput | TestRunUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutWorkspaceInput | TestRunUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput | AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput | AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkspaceInput | AuditLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput> | TemplateCreateWithoutWorkspaceInput[] | TemplateUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TemplateCreateOrConnectWithoutWorkspaceInput | TemplateCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TemplateUpsertWithWhereUniqueWithoutWorkspaceInput | TemplateUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TemplateCreateManyWorkspaceInputEnvelope
    set?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    disconnect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    delete?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    connect?: TemplateWhereUniqueInput | TemplateWhereUniqueInput[]
    update?: TemplateUpdateWithWhereUniqueWithoutWorkspaceInput | TemplateUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TemplateUpdateManyWithWhereWithoutWorkspaceInput | TemplateUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutGuestSessionsInput = {
    create?: XOR<WorkspaceCreateWithoutGuestSessionsInput, WorkspaceUncheckedCreateWithoutGuestSessionsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGuestSessionsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutGuestSessionsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutGuestSessionsInput, WorkspaceUncheckedCreateWithoutGuestSessionsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutGuestSessionsInput
    upsert?: WorkspaceUpsertWithoutGuestSessionsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutGuestSessionsInput, WorkspaceUpdateWithoutGuestSessionsInput>, WorkspaceUncheckedUpdateWithoutGuestSessionsInput>
  }

  export type WorkspaceCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<WorkspaceCreateWithoutEndpointsInput, WorkspaceUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEndpointsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ResponseRuleCreateNestedOneWithoutEndpointInput = {
    create?: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
    connectOrCreate?: ResponseRuleCreateOrConnectWithoutEndpointInput
    connect?: ResponseRuleWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutEndpointInput = {
    create?: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput> | EventCreateWithoutEndpointInput[] | EventUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEndpointInput | EventCreateOrConnectWithoutEndpointInput[]
    createMany?: EventCreateManyEndpointInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ResponseRuleUncheckedCreateNestedOneWithoutEndpointInput = {
    create?: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
    connectOrCreate?: ResponseRuleCreateOrConnectWithoutEndpointInput
    connect?: ResponseRuleWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput> | EventCreateWithoutEndpointInput[] | EventUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEndpointInput | EventCreateOrConnectWithoutEndpointInput[]
    createMany?: EventCreateManyEndpointInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutEndpointsInput, WorkspaceUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEndpointsInput
    upsert?: WorkspaceUpsertWithoutEndpointsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutEndpointsInput, WorkspaceUpdateWithoutEndpointsInput>, WorkspaceUncheckedUpdateWithoutEndpointsInput>
  }

  export type ResponseRuleUpdateOneWithoutEndpointNestedInput = {
    create?: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
    connectOrCreate?: ResponseRuleCreateOrConnectWithoutEndpointInput
    upsert?: ResponseRuleUpsertWithoutEndpointInput
    disconnect?: ResponseRuleWhereInput | boolean
    delete?: ResponseRuleWhereInput | boolean
    connect?: ResponseRuleWhereUniqueInput
    update?: XOR<XOR<ResponseRuleUpdateToOneWithWhereWithoutEndpointInput, ResponseRuleUpdateWithoutEndpointInput>, ResponseRuleUncheckedUpdateWithoutEndpointInput>
  }

  export type EventUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput> | EventCreateWithoutEndpointInput[] | EventUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEndpointInput | EventCreateOrConnectWithoutEndpointInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEndpointInput | EventUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: EventCreateManyEndpointInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEndpointInput | EventUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEndpointInput | EventUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ResponseRuleUncheckedUpdateOneWithoutEndpointNestedInput = {
    create?: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
    connectOrCreate?: ResponseRuleCreateOrConnectWithoutEndpointInput
    upsert?: ResponseRuleUpsertWithoutEndpointInput
    disconnect?: ResponseRuleWhereInput | boolean
    delete?: ResponseRuleWhereInput | boolean
    connect?: ResponseRuleWhereUniqueInput
    update?: XOR<XOR<ResponseRuleUpdateToOneWithWhereWithoutEndpointInput, ResponseRuleUpdateWithoutEndpointInput>, ResponseRuleUncheckedUpdateWithoutEndpointInput>
  }

  export type EventUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput> | EventCreateWithoutEndpointInput[] | EventUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEndpointInput | EventCreateOrConnectWithoutEndpointInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEndpointInput | EventUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: EventCreateManyEndpointInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEndpointInput | EventUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEndpointInput | EventUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EndpointCreateNestedOneWithoutResponseRuleInput = {
    create?: XOR<EndpointCreateWithoutResponseRuleInput, EndpointUncheckedCreateWithoutResponseRuleInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutResponseRuleInput
    connect?: EndpointWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EndpointUpdateOneRequiredWithoutResponseRuleNestedInput = {
    create?: XOR<EndpointCreateWithoutResponseRuleInput, EndpointUncheckedCreateWithoutResponseRuleInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutResponseRuleInput
    upsert?: EndpointUpsertWithoutResponseRuleInput
    connect?: EndpointWhereUniqueInput
    update?: XOR<XOR<EndpointUpdateToOneWithWhereWithoutResponseRuleInput, EndpointUpdateWithoutResponseRuleInput>, EndpointUncheckedUpdateWithoutResponseRuleInput>
  }

  export type EndpointCreateNestedOneWithoutEventsInput = {
    create?: XOR<EndpointCreateWithoutEventsInput, EndpointUncheckedCreateWithoutEventsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutEventsInput
    connect?: EndpointWhereUniqueInput
  }

  export type DeliveryCreateNestedManyWithoutEventInput = {
    create?: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput> | DeliveryCreateWithoutEventInput[] | DeliveryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutEventInput | DeliveryCreateOrConnectWithoutEventInput[]
    createMany?: DeliveryCreateManyEventInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ReplayJobCreateNestedManyWithoutOriginalEventInput = {
    create?: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput> | ReplayJobCreateWithoutOriginalEventInput[] | ReplayJobUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: ReplayJobCreateOrConnectWithoutOriginalEventInput | ReplayJobCreateOrConnectWithoutOriginalEventInput[]
    createMany?: ReplayJobCreateManyOriginalEventInputEnvelope
    connect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput> | DeliveryCreateWithoutEventInput[] | DeliveryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutEventInput | DeliveryCreateOrConnectWithoutEventInput[]
    createMany?: DeliveryCreateManyEventInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ReplayJobUncheckedCreateNestedManyWithoutOriginalEventInput = {
    create?: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput> | ReplayJobCreateWithoutOriginalEventInput[] | ReplayJobUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: ReplayJobCreateOrConnectWithoutOriginalEventInput | ReplayJobCreateOrConnectWithoutOriginalEventInput[]
    createMany?: ReplayJobCreateManyOriginalEventInputEnvelope
    connect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type EndpointUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<EndpointCreateWithoutEventsInput, EndpointUncheckedCreateWithoutEventsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutEventsInput
    upsert?: EndpointUpsertWithoutEventsInput
    connect?: EndpointWhereUniqueInput
    update?: XOR<XOR<EndpointUpdateToOneWithWhereWithoutEventsInput, EndpointUpdateWithoutEventsInput>, EndpointUncheckedUpdateWithoutEventsInput>
  }

  export type DeliveryUpdateManyWithoutEventNestedInput = {
    create?: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput> | DeliveryCreateWithoutEventInput[] | DeliveryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutEventInput | DeliveryCreateOrConnectWithoutEventInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutEventInput | DeliveryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DeliveryCreateManyEventInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutEventInput | DeliveryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutEventInput | DeliveryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ReplayJobUpdateManyWithoutOriginalEventNestedInput = {
    create?: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput> | ReplayJobCreateWithoutOriginalEventInput[] | ReplayJobUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: ReplayJobCreateOrConnectWithoutOriginalEventInput | ReplayJobCreateOrConnectWithoutOriginalEventInput[]
    upsert?: ReplayJobUpsertWithWhereUniqueWithoutOriginalEventInput | ReplayJobUpsertWithWhereUniqueWithoutOriginalEventInput[]
    createMany?: ReplayJobCreateManyOriginalEventInputEnvelope
    set?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    disconnect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    delete?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    connect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    update?: ReplayJobUpdateWithWhereUniqueWithoutOriginalEventInput | ReplayJobUpdateWithWhereUniqueWithoutOriginalEventInput[]
    updateMany?: ReplayJobUpdateManyWithWhereWithoutOriginalEventInput | ReplayJobUpdateManyWithWhereWithoutOriginalEventInput[]
    deleteMany?: ReplayJobScalarWhereInput | ReplayJobScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput> | DeliveryCreateWithoutEventInput[] | DeliveryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutEventInput | DeliveryCreateOrConnectWithoutEventInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutEventInput | DeliveryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DeliveryCreateManyEventInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutEventInput | DeliveryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutEventInput | DeliveryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ReplayJobUncheckedUpdateManyWithoutOriginalEventNestedInput = {
    create?: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput> | ReplayJobCreateWithoutOriginalEventInput[] | ReplayJobUncheckedCreateWithoutOriginalEventInput[]
    connectOrCreate?: ReplayJobCreateOrConnectWithoutOriginalEventInput | ReplayJobCreateOrConnectWithoutOriginalEventInput[]
    upsert?: ReplayJobUpsertWithWhereUniqueWithoutOriginalEventInput | ReplayJobUpsertWithWhereUniqueWithoutOriginalEventInput[]
    createMany?: ReplayJobCreateManyOriginalEventInputEnvelope
    set?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    disconnect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    delete?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    connect?: ReplayJobWhereUniqueInput | ReplayJobWhereUniqueInput[]
    update?: ReplayJobUpdateWithWhereUniqueWithoutOriginalEventInput | ReplayJobUpdateWithWhereUniqueWithoutOriginalEventInput[]
    updateMany?: ReplayJobUpdateManyWithWhereWithoutOriginalEventInput | ReplayJobUpdateManyWithWhereWithoutOriginalEventInput[]
    deleteMany?: ReplayJobScalarWhereInput | ReplayJobScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<EventCreateWithoutDeliveriesInput, EventUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutDeliveriesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<EventCreateWithoutDeliveriesInput, EventUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutDeliveriesInput
    upsert?: EventUpsertWithoutDeliveriesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutDeliveriesInput, EventUpdateWithoutDeliveriesInput>, EventUncheckedUpdateWithoutDeliveriesInput>
  }

  export type EventCreateNestedOneWithoutReplayJobsInput = {
    create?: XOR<EventCreateWithoutReplayJobsInput, EventUncheckedCreateWithoutReplayJobsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReplayJobsInput
    connect?: EventWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateOneRequiredWithoutReplayJobsNestedInput = {
    create?: XOR<EventCreateWithoutReplayJobsInput, EventUncheckedCreateWithoutReplayJobsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReplayJobsInput
    upsert?: EventUpsertWithoutReplayJobsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReplayJobsInput, EventUpdateWithoutReplayJobsInput>, EventUncheckedUpdateWithoutReplayJobsInput>
  }

  export type WorkspaceCreateNestedOneWithoutScenariosInput = {
    create?: XOR<WorkspaceCreateWithoutScenariosInput, WorkspaceUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutScenariosInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TestRunCreateNestedManyWithoutScenarioInput = {
    create?: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput> | TestRunCreateWithoutScenarioInput[] | TestRunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutScenarioInput | TestRunCreateOrConnectWithoutScenarioInput[]
    createMany?: TestRunCreateManyScenarioInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type TestRunUncheckedCreateNestedManyWithoutScenarioInput = {
    create?: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput> | TestRunCreateWithoutScenarioInput[] | TestRunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutScenarioInput | TestRunCreateOrConnectWithoutScenarioInput[]
    createMany?: TestRunCreateManyScenarioInputEnvelope
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkspaceUpdateOneRequiredWithoutScenariosNestedInput = {
    create?: XOR<WorkspaceCreateWithoutScenariosInput, WorkspaceUncheckedCreateWithoutScenariosInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutScenariosInput
    upsert?: WorkspaceUpsertWithoutScenariosInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutScenariosInput, WorkspaceUpdateWithoutScenariosInput>, WorkspaceUncheckedUpdateWithoutScenariosInput>
  }

  export type TestRunUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput> | TestRunCreateWithoutScenarioInput[] | TestRunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutScenarioInput | TestRunCreateOrConnectWithoutScenarioInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutScenarioInput | TestRunUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: TestRunCreateManyScenarioInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutScenarioInput | TestRunUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutScenarioInput | TestRunUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type TestRunUncheckedUpdateManyWithoutScenarioNestedInput = {
    create?: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput> | TestRunCreateWithoutScenarioInput[] | TestRunUncheckedCreateWithoutScenarioInput[]
    connectOrCreate?: TestRunCreateOrConnectWithoutScenarioInput | TestRunCreateOrConnectWithoutScenarioInput[]
    upsert?: TestRunUpsertWithWhereUniqueWithoutScenarioInput | TestRunUpsertWithWhereUniqueWithoutScenarioInput[]
    createMany?: TestRunCreateManyScenarioInputEnvelope
    set?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    disconnect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    delete?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    connect?: TestRunWhereUniqueInput | TestRunWhereUniqueInput[]
    update?: TestRunUpdateWithWhereUniqueWithoutScenarioInput | TestRunUpdateWithWhereUniqueWithoutScenarioInput[]
    updateMany?: TestRunUpdateManyWithWhereWithoutScenarioInput | TestRunUpdateManyWithWhereWithoutScenarioInput[]
    deleteMany?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
  }

  export type ScenarioCreateNestedOneWithoutTestRunsInput = {
    create?: XOR<ScenarioCreateWithoutTestRunsInput, ScenarioUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutTestRunsInput
    connect?: ScenarioWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutTestRunsInput = {
    create?: XOR<WorkspaceCreateWithoutTestRunsInput, WorkspaceUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTestRunsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TestResultCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type TestResultUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
  }

  export type ScenarioUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: XOR<ScenarioCreateWithoutTestRunsInput, ScenarioUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: ScenarioCreateOrConnectWithoutTestRunsInput
    upsert?: ScenarioUpsertWithoutTestRunsInput
    connect?: ScenarioWhereUniqueInput
    update?: XOR<XOR<ScenarioUpdateToOneWithWhereWithoutTestRunsInput, ScenarioUpdateWithoutTestRunsInput>, ScenarioUncheckedUpdateWithoutTestRunsInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutTestRunsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTestRunsInput, WorkspaceUncheckedCreateWithoutTestRunsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTestRunsInput
    upsert?: WorkspaceUpsertWithoutTestRunsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTestRunsInput, WorkspaceUpdateWithoutTestRunsInput>, WorkspaceUncheckedUpdateWithoutTestRunsInput>
  }

  export type TestResultUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutTestRunInput | TestResultUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutTestRunInput | TestResultUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutTestRunInput | TestResultUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type TestResultUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput> | TestResultCreateWithoutTestRunInput[] | TestResultUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestResultCreateOrConnectWithoutTestRunInput | TestResultCreateOrConnectWithoutTestRunInput[]
    upsert?: TestResultUpsertWithWhereUniqueWithoutTestRunInput | TestResultUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestResultCreateManyTestRunInputEnvelope
    set?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    disconnect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    delete?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    connect?: TestResultWhereUniqueInput | TestResultWhereUniqueInput[]
    update?: TestResultUpdateWithWhereUniqueWithoutTestRunInput | TestResultUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestResultUpdateManyWithWhereWithoutTestRunInput | TestResultUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
  }

  export type TestRunCreateNestedOneWithoutTestResultsInput = {
    create?: XOR<TestRunCreateWithoutTestResultsInput, TestRunUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestResultsInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutTestResultsNestedInput = {
    create?: XOR<TestRunCreateWithoutTestResultsInput, TestRunUncheckedCreateWithoutTestResultsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestResultsInput
    upsert?: TestRunUpsertWithoutTestResultsInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutTestResultsInput, TestRunUpdateWithoutTestResultsInput>, TestRunUncheckedUpdateWithoutTestResultsInput>
  }

  export type WorkspaceCreateNestedOneWithoutTemplatesInput = {
    create?: XOR<WorkspaceCreateWithoutTemplatesInput, WorkspaceUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTemplatesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneWithoutTemplatesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTemplatesInput, WorkspaceUncheckedCreateWithoutTemplatesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTemplatesInput
    upsert?: WorkspaceUpsertWithoutTemplatesInput
    disconnect?: WorkspaceWhereInput | boolean
    delete?: WorkspaceWhereInput | boolean
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTemplatesInput, WorkspaceUpdateWithoutTemplatesInput>, WorkspaceUncheckedUpdateWithoutTemplatesInput>
  }

  export type WorkspaceCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAuditLogsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAuditLogsInput
    upsert?: WorkspaceUpsertWithoutAuditLogsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutAuditLogsInput, WorkspaceUpdateWithoutAuditLogsInput>, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type WorkspaceCreateWithoutOwnerInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceCreateManyOwnerInputEnvelope = {
    data: WorkspaceCreateManyOwnerInput | WorkspaceCreateManyOwnerInput[]
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    ownerId?: StringNullableFilter<"Workspace"> | string | null
    isGuest?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type EndpointCreateWithoutWorkspaceInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responseRule?: ResponseRuleCreateNestedOneWithoutEndpointInput
    events?: EventCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responseRule?: ResponseRuleUncheckedCreateNestedOneWithoutEndpointInput
    events?: EventUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutWorkspaceInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput>
  }

  export type EndpointCreateManyWorkspaceInputEnvelope = {
    data: EndpointCreateManyWorkspaceInput | EndpointCreateManyWorkspaceInput[]
  }

  export type GuestSessionCreateWithoutWorkspaceInput = {
    id?: string
    tokenHash: string
    clientName?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GuestSessionUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    tokenHash: string
    clientName?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type GuestSessionCreateOrConnectWithoutWorkspaceInput = {
    where: GuestSessionWhereUniqueInput
    create: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput>
  }

  export type GuestSessionCreateManyWorkspaceInputEnvelope = {
    data: GuestSessionCreateManyWorkspaceInput | GuestSessionCreateManyWorkspaceInput[]
  }

  export type ScenarioCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testRuns?: TestRunUncheckedCreateNestedManyWithoutScenarioInput
  }

  export type ScenarioCreateOrConnectWithoutWorkspaceInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput>
  }

  export type ScenarioCreateManyWorkspaceInputEnvelope = {
    data: ScenarioCreateManyWorkspaceInput | ScenarioCreateManyWorkspaceInput[]
  }

  export type TestRunCreateWithoutWorkspaceInput = {
    id?: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    scenario: ScenarioCreateNestedOneWithoutTestRunsInput
    testResults?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    scenarioId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutWorkspaceInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput>
  }

  export type TestRunCreateManyWorkspaceInputEnvelope = {
    data: TestRunCreateManyWorkspaceInput | TestRunCreateManyWorkspaceInput[]
  }

  export type AuditLogCreateWithoutWorkspaceInput = {
    id?: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type AuditLogCreateManyWorkspaceInputEnvelope = {
    data: AuditLogCreateManyWorkspaceInput | AuditLogCreateManyWorkspaceInput[]
  }

  export type TemplateCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    createdAt?: Date | string
  }

  export type TemplateUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    createdAt?: Date | string
  }

  export type TemplateCreateOrConnectWithoutWorkspaceInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput>
  }

  export type TemplateCreateManyWorkspaceInputEnvelope = {
    data: TemplateCreateManyWorkspaceInput | TemplateCreateManyWorkspaceInput[]
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: EndpointWhereUniqueInput
    update: XOR<EndpointUpdateWithoutWorkspaceInput, EndpointUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<EndpointCreateWithoutWorkspaceInput, EndpointUncheckedCreateWithoutWorkspaceInput>
  }

  export type EndpointUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: EndpointWhereUniqueInput
    data: XOR<EndpointUpdateWithoutWorkspaceInput, EndpointUncheckedUpdateWithoutWorkspaceInput>
  }

  export type EndpointUpdateManyWithWhereWithoutWorkspaceInput = {
    where: EndpointScalarWhereInput
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type EndpointScalarWhereInput = {
    AND?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    OR?: EndpointScalarWhereInput[]
    NOT?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    id?: StringFilter<"Endpoint"> | string
    workspaceId?: StringFilter<"Endpoint"> | string
    tokenHash?: StringFilter<"Endpoint"> | string
    tokenPrefix?: StringFilter<"Endpoint"> | string
    name?: StringFilter<"Endpoint"> | string
    description?: StringNullableFilter<"Endpoint"> | string | null
    signingSecretEnc?: StringNullableFilter<"Endpoint"> | string | null
    isPaused?: BoolFilter<"Endpoint"> | boolean
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
  }

  export type GuestSessionUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: GuestSessionWhereUniqueInput
    update: XOR<GuestSessionUpdateWithoutWorkspaceInput, GuestSessionUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<GuestSessionCreateWithoutWorkspaceInput, GuestSessionUncheckedCreateWithoutWorkspaceInput>
  }

  export type GuestSessionUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: GuestSessionWhereUniqueInput
    data: XOR<GuestSessionUpdateWithoutWorkspaceInput, GuestSessionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type GuestSessionUpdateManyWithWhereWithoutWorkspaceInput = {
    where: GuestSessionScalarWhereInput
    data: XOR<GuestSessionUpdateManyMutationInput, GuestSessionUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type GuestSessionScalarWhereInput = {
    AND?: GuestSessionScalarWhereInput | GuestSessionScalarWhereInput[]
    OR?: GuestSessionScalarWhereInput[]
    NOT?: GuestSessionScalarWhereInput | GuestSessionScalarWhereInput[]
    id?: StringFilter<"GuestSession"> | string
    tokenHash?: StringFilter<"GuestSession"> | string
    clientName?: StringFilter<"GuestSession"> | string
    workspaceId?: StringFilter<"GuestSession"> | string
    expiresAt?: DateTimeFilter<"GuestSession"> | Date | string
    createdAt?: DateTimeFilter<"GuestSession"> | Date | string
  }

  export type ScenarioUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ScenarioWhereUniqueInput
    update: XOR<ScenarioUpdateWithoutWorkspaceInput, ScenarioUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ScenarioCreateWithoutWorkspaceInput, ScenarioUncheckedCreateWithoutWorkspaceInput>
  }

  export type ScenarioUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ScenarioWhereUniqueInput
    data: XOR<ScenarioUpdateWithoutWorkspaceInput, ScenarioUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ScenarioUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ScenarioScalarWhereInput
    data: XOR<ScenarioUpdateManyMutationInput, ScenarioUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ScenarioScalarWhereInput = {
    AND?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    OR?: ScenarioScalarWhereInput[]
    NOT?: ScenarioScalarWhereInput | ScenarioScalarWhereInput[]
    id?: StringFilter<"Scenario"> | string
    workspaceId?: StringFilter<"Scenario"> | string
    name?: StringFilter<"Scenario"> | string
    description?: StringNullableFilter<"Scenario"> | string | null
    destinationUrl?: StringFilter<"Scenario"> | string
    basePayload?: StringFilter<"Scenario"> | string
    baseHeadersJson?: StringFilter<"Scenario"> | string
    stepsJson?: StringFilter<"Scenario"> | string
    assertionsJson?: StringFilter<"Scenario"> | string
    rngSeed?: IntNullableFilter<"Scenario"> | number | null
    createdAt?: DateTimeFilter<"Scenario"> | Date | string
    updatedAt?: DateTimeFilter<"Scenario"> | Date | string
  }

  export type TestRunUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TestRunWhereUniqueInput
    update: XOR<TestRunUpdateWithoutWorkspaceInput, TestRunUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TestRunCreateWithoutWorkspaceInput, TestRunUncheckedCreateWithoutWorkspaceInput>
  }

  export type TestRunUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TestRunWhereUniqueInput
    data: XOR<TestRunUpdateWithoutWorkspaceInput, TestRunUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TestRunUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TestRunScalarWhereInput
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TestRunScalarWhereInput = {
    AND?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    OR?: TestRunScalarWhereInput[]
    NOT?: TestRunScalarWhereInput | TestRunScalarWhereInput[]
    id?: StringFilter<"TestRun"> | string
    scenarioId?: StringFilter<"TestRun"> | string
    workspaceId?: StringFilter<"TestRun"> | string
    startedAt?: DateTimeFilter<"TestRun"> | Date | string
    finishedAt?: DateTimeFilter<"TestRun"> | Date | string
    durationMs?: IntFilter<"TestRun"> | number
    totalDeliveries?: IntFilter<"TestRun"> | number
    successfulDeliveries?: IntFilter<"TestRun"> | number
    failedDeliveries?: IntFilter<"TestRun"> | number
    latencyMin?: IntFilter<"TestRun"> | number
    latencyAvg?: IntFilter<"TestRun"> | number
    latencyP95?: IntFilter<"TestRun"> | number
    latencyMax?: IntFilter<"TestRun"> | number
    allPassed?: BoolFilter<"TestRun"> | boolean
    reportJson?: StringFilter<"TestRun"> | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutWorkspaceInput, AuditLogUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutWorkspaceInput, AuditLogUncheckedUpdateWithoutWorkspaceInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutWorkspaceInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    actorType?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    targetType?: StringFilter<"AuditLog"> | string
    targetId?: StringFilter<"AuditLog"> | string
    detailsJson?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type TemplateUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TemplateWhereUniqueInput
    update: XOR<TemplateUpdateWithoutWorkspaceInput, TemplateUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TemplateCreateWithoutWorkspaceInput, TemplateUncheckedCreateWithoutWorkspaceInput>
  }

  export type TemplateUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TemplateWhereUniqueInput
    data: XOR<TemplateUpdateWithoutWorkspaceInput, TemplateUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TemplateUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TemplateScalarWhereInput
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TemplateScalarWhereInput = {
    AND?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    OR?: TemplateScalarWhereInput[]
    NOT?: TemplateScalarWhereInput | TemplateScalarWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    category?: StringFilter<"Template"> | string
    provider?: StringFilter<"Template"> | string
    description?: StringFilter<"Template"> | string
    method?: StringFilter<"Template"> | string
    defaultHeadersJson?: StringFilter<"Template"> | string
    payload?: StringFilter<"Template"> | string
    isBuiltIn?: BoolFilter<"Template"> | boolean
    workspaceId?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type WorkspaceCreateWithoutGuestSessionsInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutGuestSessionsInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutGuestSessionsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutGuestSessionsInput, WorkspaceUncheckedCreateWithoutGuestSessionsInput>
  }

  export type WorkspaceUpsertWithoutGuestSessionsInput = {
    update: XOR<WorkspaceUpdateWithoutGuestSessionsInput, WorkspaceUncheckedUpdateWithoutGuestSessionsInput>
    create: XOR<WorkspaceCreateWithoutGuestSessionsInput, WorkspaceUncheckedCreateWithoutGuestSessionsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutGuestSessionsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutGuestSessionsInput, WorkspaceUncheckedUpdateWithoutGuestSessionsInput>
  }

  export type WorkspaceUpdateWithoutGuestSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutGuestSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutEndpointsInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutEndpointsInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutEndpointsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutEndpointsInput, WorkspaceUncheckedCreateWithoutEndpointsInput>
  }

  export type ResponseRuleCreateWithoutEndpointInput = {
    id?: string
    statusCode?: number
    contentType?: string
    body?: string
    headersJson?: string
    delayMs?: number
    rateLimitPerMin?: number
    updatedAt?: Date | string
  }

  export type ResponseRuleUncheckedCreateWithoutEndpointInput = {
    id?: string
    statusCode?: number
    contentType?: string
    body?: string
    headersJson?: string
    delayMs?: number
    rateLimitPerMin?: number
    updatedAt?: Date | string
  }

  export type ResponseRuleCreateOrConnectWithoutEndpointInput = {
    where: ResponseRuleWhereUniqueInput
    create: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
  }

  export type EventCreateWithoutEndpointInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    deliveries?: DeliveryCreateNestedManyWithoutEventInput
    replayJobs?: ReplayJobCreateNestedManyWithoutOriginalEventInput
  }

  export type EventUncheckedCreateWithoutEndpointInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutEventInput
    replayJobs?: ReplayJobUncheckedCreateNestedManyWithoutOriginalEventInput
  }

  export type EventCreateOrConnectWithoutEndpointInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput>
  }

  export type EventCreateManyEndpointInputEnvelope = {
    data: EventCreateManyEndpointInput | EventCreateManyEndpointInput[]
  }

  export type WorkspaceUpsertWithoutEndpointsInput = {
    update: XOR<WorkspaceUpdateWithoutEndpointsInput, WorkspaceUncheckedUpdateWithoutEndpointsInput>
    create: XOR<WorkspaceCreateWithoutEndpointsInput, WorkspaceUncheckedCreateWithoutEndpointsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutEndpointsInput, WorkspaceUncheckedUpdateWithoutEndpointsInput>
  }

  export type WorkspaceUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ResponseRuleUpsertWithoutEndpointInput = {
    update: XOR<ResponseRuleUpdateWithoutEndpointInput, ResponseRuleUncheckedUpdateWithoutEndpointInput>
    create: XOR<ResponseRuleCreateWithoutEndpointInput, ResponseRuleUncheckedCreateWithoutEndpointInput>
    where?: ResponseRuleWhereInput
  }

  export type ResponseRuleUpdateToOneWithWhereWithoutEndpointInput = {
    where?: ResponseRuleWhereInput
    data: XOR<ResponseRuleUpdateWithoutEndpointInput, ResponseRuleUncheckedUpdateWithoutEndpointInput>
  }

  export type ResponseRuleUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponseRuleUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    contentType?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    delayMs?: IntFieldUpdateOperationsInput | number
    rateLimitPerMin?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutEndpointInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEndpointInput, EventUncheckedUpdateWithoutEndpointInput>
    create: XOR<EventCreateWithoutEndpointInput, EventUncheckedCreateWithoutEndpointInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEndpointInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEndpointInput, EventUncheckedUpdateWithoutEndpointInput>
  }

  export type EventUpdateManyWithWhereWithoutEndpointInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEndpointInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    endpointId?: StringFilter<"Event"> | string
    method?: StringFilter<"Event"> | string
    path?: StringFilter<"Event"> | string
    queryJson?: StringFilter<"Event"> | string
    headersJson?: StringFilter<"Event"> | string
    rawBody?: BytesFilter<"Event"> | Bytes
    parsedBody?: StringNullableFilter<"Event"> | string | null
    statusCode?: IntFilter<"Event"> | number
    ip?: StringFilter<"Event"> | string
    sizeBytes?: IntFilter<"Event"> | number
    isInvalidJson?: BoolFilter<"Event"> | boolean
    redactedHeaders?: StringFilter<"Event"> | string
    receivedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EndpointCreateWithoutResponseRuleInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEndpointsInput
    events?: EventCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutResponseRuleInput = {
    id?: string
    workspaceId: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutResponseRuleInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutResponseRuleInput, EndpointUncheckedCreateWithoutResponseRuleInput>
  }

  export type EndpointUpsertWithoutResponseRuleInput = {
    update: XOR<EndpointUpdateWithoutResponseRuleInput, EndpointUncheckedUpdateWithoutResponseRuleInput>
    create: XOR<EndpointCreateWithoutResponseRuleInput, EndpointUncheckedCreateWithoutResponseRuleInput>
    where?: EndpointWhereInput
  }

  export type EndpointUpdateToOneWithWhereWithoutResponseRuleInput = {
    where?: EndpointWhereInput
    data: XOR<EndpointUpdateWithoutResponseRuleInput, EndpointUncheckedUpdateWithoutResponseRuleInput>
  }

  export type EndpointUpdateWithoutResponseRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEndpointsNestedInput
    events?: EventUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutResponseRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointCreateWithoutEventsInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEndpointsInput
    responseRule?: ResponseRuleCreateNestedOneWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutEventsInput = {
    id?: string
    workspaceId: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    responseRule?: ResponseRuleUncheckedCreateNestedOneWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutEventsInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutEventsInput, EndpointUncheckedCreateWithoutEventsInput>
  }

  export type DeliveryCreateWithoutEventInput = {
    id?: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
  }

  export type DeliveryUncheckedCreateWithoutEventInput = {
    id?: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
  }

  export type DeliveryCreateOrConnectWithoutEventInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput>
  }

  export type DeliveryCreateManyEventInputEnvelope = {
    data: DeliveryCreateManyEventInput | DeliveryCreateManyEventInput[]
  }

  export type ReplayJobCreateWithoutOriginalEventInput = {
    id?: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReplayJobUncheckedCreateWithoutOriginalEventInput = {
    id?: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type ReplayJobCreateOrConnectWithoutOriginalEventInput = {
    where: ReplayJobWhereUniqueInput
    create: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput>
  }

  export type ReplayJobCreateManyOriginalEventInputEnvelope = {
    data: ReplayJobCreateManyOriginalEventInput | ReplayJobCreateManyOriginalEventInput[]
  }

  export type EndpointUpsertWithoutEventsInput = {
    update: XOR<EndpointUpdateWithoutEventsInput, EndpointUncheckedUpdateWithoutEventsInput>
    create: XOR<EndpointCreateWithoutEventsInput, EndpointUncheckedCreateWithoutEventsInput>
    where?: EndpointWhereInput
  }

  export type EndpointUpdateToOneWithWhereWithoutEventsInput = {
    where?: EndpointWhereInput
    data: XOR<EndpointUpdateWithoutEventsInput, EndpointUncheckedUpdateWithoutEventsInput>
  }

  export type EndpointUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEndpointsNestedInput
    responseRule?: ResponseRuleUpdateOneWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseRule?: ResponseRuleUncheckedUpdateOneWithoutEndpointNestedInput
  }

  export type DeliveryUpsertWithWhereUniqueWithoutEventInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutEventInput, DeliveryUncheckedUpdateWithoutEventInput>
    create: XOR<DeliveryCreateWithoutEventInput, DeliveryUncheckedCreateWithoutEventInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutEventInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutEventInput, DeliveryUncheckedUpdateWithoutEventInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutEventInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutEventInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: StringFilter<"Delivery"> | string
    eventId?: StringFilter<"Delivery"> | string
    destinationUrl?: StringFilter<"Delivery"> | string
    method?: StringFilter<"Delivery"> | string
    statusCode?: IntFilter<"Delivery"> | number
    latencyMs?: IntFilter<"Delivery"> | number
    headersJson?: StringFilter<"Delivery"> | string
    responseBody?: StringFilter<"Delivery"> | string
    success?: BoolFilter<"Delivery"> | boolean
    errorMessage?: StringNullableFilter<"Delivery"> | string | null
    sentAt?: DateTimeFilter<"Delivery"> | Date | string
  }

  export type ReplayJobUpsertWithWhereUniqueWithoutOriginalEventInput = {
    where: ReplayJobWhereUniqueInput
    update: XOR<ReplayJobUpdateWithoutOriginalEventInput, ReplayJobUncheckedUpdateWithoutOriginalEventInput>
    create: XOR<ReplayJobCreateWithoutOriginalEventInput, ReplayJobUncheckedCreateWithoutOriginalEventInput>
  }

  export type ReplayJobUpdateWithWhereUniqueWithoutOriginalEventInput = {
    where: ReplayJobWhereUniqueInput
    data: XOR<ReplayJobUpdateWithoutOriginalEventInput, ReplayJobUncheckedUpdateWithoutOriginalEventInput>
  }

  export type ReplayJobUpdateManyWithWhereWithoutOriginalEventInput = {
    where: ReplayJobScalarWhereInput
    data: XOR<ReplayJobUpdateManyMutationInput, ReplayJobUncheckedUpdateManyWithoutOriginalEventInput>
  }

  export type ReplayJobScalarWhereInput = {
    AND?: ReplayJobScalarWhereInput | ReplayJobScalarWhereInput[]
    OR?: ReplayJobScalarWhereInput[]
    NOT?: ReplayJobScalarWhereInput | ReplayJobScalarWhereInput[]
    id?: StringFilter<"ReplayJob"> | string
    originalEventId?: StringFilter<"ReplayJob"> | string
    destinationUrl?: StringFilter<"ReplayJob"> | string
    status?: StringFilter<"ReplayJob"> | string
    resultDiff?: StringNullableFilter<"ReplayJob"> | string | null
    createdAt?: DateTimeFilter<"ReplayJob"> | Date | string
    completedAt?: DateTimeNullableFilter<"ReplayJob"> | Date | string | null
  }

  export type EventCreateWithoutDeliveriesInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    endpoint: EndpointCreateNestedOneWithoutEventsInput
    replayJobs?: ReplayJobCreateNestedManyWithoutOriginalEventInput
  }

  export type EventUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    endpointId: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    replayJobs?: ReplayJobUncheckedCreateNestedManyWithoutOriginalEventInput
  }

  export type EventCreateOrConnectWithoutDeliveriesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDeliveriesInput, EventUncheckedCreateWithoutDeliveriesInput>
  }

  export type EventUpsertWithoutDeliveriesInput = {
    update: XOR<EventUpdateWithoutDeliveriesInput, EventUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<EventCreateWithoutDeliveriesInput, EventUncheckedCreateWithoutDeliveriesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutDeliveriesInput, EventUncheckedUpdateWithoutDeliveriesInput>
  }

  export type EventUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: EndpointUpdateOneRequiredWithoutEventsNestedInput
    replayJobs?: ReplayJobUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replayJobs?: ReplayJobUncheckedUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventCreateWithoutReplayJobsInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    endpoint: EndpointCreateNestedOneWithoutEventsInput
    deliveries?: DeliveryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReplayJobsInput = {
    id?: string
    endpointId: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
    deliveries?: DeliveryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReplayJobsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReplayJobsInput, EventUncheckedCreateWithoutReplayJobsInput>
  }

  export type EventUpsertWithoutReplayJobsInput = {
    update: XOR<EventUpdateWithoutReplayJobsInput, EventUncheckedUpdateWithoutReplayJobsInput>
    create: XOR<EventCreateWithoutReplayJobsInput, EventUncheckedCreateWithoutReplayJobsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReplayJobsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReplayJobsInput, EventUncheckedUpdateWithoutReplayJobsInput>
  }

  export type EventUpdateWithoutReplayJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoint?: EndpointUpdateOneRequiredWithoutEventsNestedInput
    deliveries?: DeliveryUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReplayJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpointId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type WorkspaceCreateWithoutScenariosInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutScenariosInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutScenariosInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutScenariosInput, WorkspaceUncheckedCreateWithoutScenariosInput>
  }

  export type TestRunCreateWithoutScenarioInput = {
    id?: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    workspace: WorkspaceCreateNestedOneWithoutTestRunsInput
    testResults?: TestResultCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateWithoutScenarioInput = {
    id?: string
    workspaceId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    testResults?: TestResultUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunCreateOrConnectWithoutScenarioInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput>
  }

  export type TestRunCreateManyScenarioInputEnvelope = {
    data: TestRunCreateManyScenarioInput | TestRunCreateManyScenarioInput[]
  }

  export type WorkspaceUpsertWithoutScenariosInput = {
    update: XOR<WorkspaceUpdateWithoutScenariosInput, WorkspaceUncheckedUpdateWithoutScenariosInput>
    create: XOR<WorkspaceCreateWithoutScenariosInput, WorkspaceUncheckedCreateWithoutScenariosInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutScenariosInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutScenariosInput, WorkspaceUncheckedUpdateWithoutScenariosInput>
  }

  export type WorkspaceUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutScenariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TestRunUpsertWithWhereUniqueWithoutScenarioInput = {
    where: TestRunWhereUniqueInput
    update: XOR<TestRunUpdateWithoutScenarioInput, TestRunUncheckedUpdateWithoutScenarioInput>
    create: XOR<TestRunCreateWithoutScenarioInput, TestRunUncheckedCreateWithoutScenarioInput>
  }

  export type TestRunUpdateWithWhereUniqueWithoutScenarioInput = {
    where: TestRunWhereUniqueInput
    data: XOR<TestRunUpdateWithoutScenarioInput, TestRunUncheckedUpdateWithoutScenarioInput>
  }

  export type TestRunUpdateManyWithWhereWithoutScenarioInput = {
    where: TestRunScalarWhereInput
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyWithoutScenarioInput>
  }

  export type ScenarioCreateWithoutTestRunsInput = {
    id?: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutScenariosInput
  }

  export type ScenarioUncheckedCreateWithoutTestRunsInput = {
    id?: string
    workspaceId: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScenarioCreateOrConnectWithoutTestRunsInput = {
    where: ScenarioWhereUniqueInput
    create: XOR<ScenarioCreateWithoutTestRunsInput, ScenarioUncheckedCreateWithoutTestRunsInput>
  }

  export type WorkspaceCreateWithoutTestRunsInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTestRunsInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTestRunsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTestRunsInput, WorkspaceUncheckedCreateWithoutTestRunsInput>
  }

  export type TestResultCreateWithoutTestRunInput = {
    id?: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
  }

  export type TestResultUncheckedCreateWithoutTestRunInput = {
    id?: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
  }

  export type TestResultCreateOrConnectWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
  }

  export type TestResultCreateManyTestRunInputEnvelope = {
    data: TestResultCreateManyTestRunInput | TestResultCreateManyTestRunInput[]
  }

  export type ScenarioUpsertWithoutTestRunsInput = {
    update: XOR<ScenarioUpdateWithoutTestRunsInput, ScenarioUncheckedUpdateWithoutTestRunsInput>
    create: XOR<ScenarioCreateWithoutTestRunsInput, ScenarioUncheckedCreateWithoutTestRunsInput>
    where?: ScenarioWhereInput
  }

  export type ScenarioUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: ScenarioWhereInput
    data: XOR<ScenarioUpdateWithoutTestRunsInput, ScenarioUncheckedUpdateWithoutTestRunsInput>
  }

  export type ScenarioUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutScenariosNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUpsertWithoutTestRunsInput = {
    update: XOR<WorkspaceUpdateWithoutTestRunsInput, WorkspaceUncheckedUpdateWithoutTestRunsInput>
    create: XOR<WorkspaceCreateWithoutTestRunsInput, WorkspaceUncheckedCreateWithoutTestRunsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTestRunsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTestRunsInput, WorkspaceUncheckedUpdateWithoutTestRunsInput>
  }

  export type WorkspaceUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTestRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TestResultUpsertWithWhereUniqueWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    update: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestResultCreateWithoutTestRunInput, TestResultUncheckedCreateWithoutTestRunInput>
  }

  export type TestResultUpdateWithWhereUniqueWithoutTestRunInput = {
    where: TestResultWhereUniqueInput
    data: XOR<TestResultUpdateWithoutTestRunInput, TestResultUncheckedUpdateWithoutTestRunInput>
  }

  export type TestResultUpdateManyWithWhereWithoutTestRunInput = {
    where: TestResultScalarWhereInput
    data: XOR<TestResultUpdateManyMutationInput, TestResultUncheckedUpdateManyWithoutTestRunInput>
  }

  export type TestResultScalarWhereInput = {
    AND?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    OR?: TestResultScalarWhereInput[]
    NOT?: TestResultScalarWhereInput | TestResultScalarWhereInput[]
    id?: StringFilter<"TestResult"> | string
    testRunId?: StringFilter<"TestResult"> | string
    assertionId?: StringFilter<"TestResult"> | string
    assertionType?: StringFilter<"TestResult"> | string
    description?: StringFilter<"TestResult"> | string
    passed?: BoolFilter<"TestResult"> | boolean
    expected?: StringNullableFilter<"TestResult"> | string | null
    actual?: StringNullableFilter<"TestResult"> | string | null
    errorMessage?: StringNullableFilter<"TestResult"> | string | null
  }

  export type TestRunCreateWithoutTestResultsInput = {
    id?: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
    scenario: ScenarioCreateNestedOneWithoutTestRunsInput
    workspace: WorkspaceCreateNestedOneWithoutTestRunsInput
  }

  export type TestRunUncheckedCreateWithoutTestResultsInput = {
    id?: string
    scenarioId: string
    workspaceId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
  }

  export type TestRunCreateOrConnectWithoutTestResultsInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutTestResultsInput, TestRunUncheckedCreateWithoutTestResultsInput>
  }

  export type TestRunUpsertWithoutTestResultsInput = {
    update: XOR<TestRunUpdateWithoutTestResultsInput, TestRunUncheckedUpdateWithoutTestResultsInput>
    create: XOR<TestRunCreateWithoutTestResultsInput, TestRunUncheckedCreateWithoutTestResultsInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutTestResultsInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutTestResultsInput, TestRunUncheckedUpdateWithoutTestResultsInput>
  }

  export type TestRunUpdateWithoutTestResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutTestRunsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutTestRunsNestedInput
  }

  export type TestRunUncheckedUpdateWithoutTestResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceCreateWithoutTemplatesInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTemplatesInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTemplatesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTemplatesInput, WorkspaceUncheckedCreateWithoutTemplatesInput>
  }

  export type WorkspaceUpsertWithoutTemplatesInput = {
    update: XOR<WorkspaceUpdateWithoutTemplatesInput, WorkspaceUncheckedUpdateWithoutTemplatesInput>
    create: XOR<WorkspaceCreateWithoutTemplatesInput, WorkspaceUncheckedCreateWithoutTemplatesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTemplatesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTemplatesInput, WorkspaceUncheckedUpdateWithoutTemplatesInput>
  }

  export type WorkspaceUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner?: UserCreateNestedOneWithoutWorkspacesInput
    endpoints?: EndpointCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    ownerId?: string | null
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    guestSessions?: GuestSessionUncheckedCreateNestedManyWithoutWorkspaceInput
    scenarios?: ScenarioUncheckedCreateNestedManyWithoutWorkspaceInput
    testRuns?: TestRunUncheckedCreateNestedManyWithoutWorkspaceInput
    templates?: TemplateUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutAuditLogsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
  }

  export type WorkspaceUpsertWithoutAuditLogsInput = {
    update: XOR<WorkspaceUpdateWithoutAuditLogsInput, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutAuditLogsInput, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
  }

  export type WorkspaceUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutWorkspacesNestedInput
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyOwnerInput = {
    id?: string
    name: string
    isGuest?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    guestSessions?: GuestSessionUncheckedUpdateManyWithoutWorkspaceNestedInput
    scenarios?: ScenarioUncheckedUpdateManyWithoutWorkspaceNestedInput
    testRuns?: TestRunUncheckedUpdateManyWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
    templates?: TemplateUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointCreateManyWorkspaceInput = {
    id?: string
    tokenHash: string
    tokenPrefix: string
    name: string
    description?: string | null
    signingSecretEnc?: string | null
    isPaused?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestSessionCreateManyWorkspaceInput = {
    id?: string
    tokenHash: string
    clientName?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ScenarioCreateManyWorkspaceInput = {
    id?: string
    name: string
    description?: string | null
    destinationUrl: string
    basePayload?: string
    baseHeadersJson?: string
    stepsJson: string
    assertionsJson: string
    rngSeed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunCreateManyWorkspaceInput = {
    id?: string
    scenarioId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
  }

  export type AuditLogCreateManyWorkspaceInput = {
    id?: string
    actorId: string
    actorType?: string
    action: string
    targetType: string
    targetId: string
    detailsJson?: string
    createdAt?: Date | string
  }

  export type TemplateCreateManyWorkspaceInput = {
    id?: string
    name: string
    category: string
    provider: string
    description: string
    method?: string
    defaultHeadersJson: string
    payload: string
    isBuiltIn?: boolean
    createdAt?: Date | string
  }

  export type EndpointUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseRule?: ResponseRuleUpdateOneWithoutEndpointNestedInput
    events?: EventUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseRule?: ResponseRuleUncheckedUpdateOneWithoutEndpointNestedInput
    events?: EventUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenPrefix?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    signingSecretEnc?: NullableStringFieldUpdateOperationsInput | string | null
    isPaused?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestSessionUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScenarioUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRuns?: TestRunUncheckedUpdateManyWithoutScenarioNestedInput
  }

  export type ScenarioUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    destinationUrl?: StringFieldUpdateOperationsInput | string
    basePayload?: StringFieldUpdateOperationsInput | string
    baseHeadersJson?: StringFieldUpdateOperationsInput | string
    stepsJson?: StringFieldUpdateOperationsInput | string
    assertionsJson?: StringFieldUpdateOperationsInput | string
    rngSeed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    scenario?: ScenarioUpdateOneRequiredWithoutTestRunsNestedInput
    testResults?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    testResults?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    scenarioId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    defaultHeadersJson?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    isBuiltIn?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyEndpointInput = {
    id?: string
    method: string
    path: string
    queryJson?: string
    headersJson: string
    rawBody: Bytes
    parsedBody?: string | null
    statusCode?: number
    ip?: string
    sizeBytes?: number
    isInvalidJson?: boolean
    redactedHeaders?: string
    receivedAt?: Date | string
  }

  export type EventUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUpdateManyWithoutEventNestedInput
    replayJobs?: ReplayJobUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: DeliveryUncheckedUpdateManyWithoutEventNestedInput
    replayJobs?: ReplayJobUncheckedUpdateManyWithoutOriginalEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEndpointInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    queryJson?: StringFieldUpdateOperationsInput | string
    headersJson?: StringFieldUpdateOperationsInput | string
    rawBody?: BytesFieldUpdateOperationsInput | Bytes
    parsedBody?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    isInvalidJson?: BoolFieldUpdateOperationsInput | boolean
    redactedHeaders?: StringFieldUpdateOperationsInput | string
    receivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyEventInput = {
    id?: string
    destinationUrl: string
    method?: string
    statusCode: number
    latencyMs: number
    headersJson?: string
    responseBody?: string
    success?: boolean
    errorMessage?: string | null
    sentAt?: Date | string
  }

  export type ReplayJobCreateManyOriginalEventInput = {
    id?: string
    destinationUrl: string
    status?: string
    resultDiff?: string | null
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type DeliveryUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    latencyMs?: IntFieldUpdateOperationsInput | number
    headersJson?: StringFieldUpdateOperationsInput | string
    responseBody?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplayJobUpdateWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReplayJobUncheckedUpdateWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReplayJobUncheckedUpdateManyWithoutOriginalEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    resultDiff?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TestRunCreateManyScenarioInput = {
    id?: string
    workspaceId: string
    startedAt?: Date | string
    finishedAt?: Date | string
    durationMs: number
    totalDeliveries: number
    successfulDeliveries: number
    failedDeliveries: number
    latencyMin: number
    latencyAvg: number
    latencyP95: number
    latencyMax: number
    allPassed: boolean
    reportJson: string
  }

  export type TestRunUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTestRunsNestedInput
    testResults?: TestResultUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
    testResults?: TestResultUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateManyWithoutScenarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    durationMs?: IntFieldUpdateOperationsInput | number
    totalDeliveries?: IntFieldUpdateOperationsInput | number
    successfulDeliveries?: IntFieldUpdateOperationsInput | number
    failedDeliveries?: IntFieldUpdateOperationsInput | number
    latencyMin?: IntFieldUpdateOperationsInput | number
    latencyAvg?: IntFieldUpdateOperationsInput | number
    latencyP95?: IntFieldUpdateOperationsInput | number
    latencyMax?: IntFieldUpdateOperationsInput | number
    allPassed?: BoolFieldUpdateOperationsInput | boolean
    reportJson?: StringFieldUpdateOperationsInput | string
  }

  export type TestResultCreateManyTestRunInput = {
    id?: string
    assertionId: string
    assertionType: string
    description: string
    passed: boolean
    expected?: string | null
    actual?: string | null
    errorMessage?: string | null
  }

  export type TestResultUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestResultUncheckedUpdateWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestResultUncheckedUpdateManyWithoutTestRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    assertionId?: StringFieldUpdateOperationsInput | string
    assertionType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    passed?: BoolFieldUpdateOperationsInput | boolean
    expected?: NullableStringFieldUpdateOperationsInput | string | null
    actual?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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
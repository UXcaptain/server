
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
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model ParticipantProfile
 * 
 */
export type ParticipantProfile = $Result.DefaultSelection<Prisma.$ParticipantProfilePayload>
/**
 * Model ParticipantRating
 * 
 */
export type ParticipantRating = $Result.DefaultSelection<Prisma.$ParticipantRatingPayload>
/**
 * Model CustomerProfile
 * 
 */
export type CustomerProfile = $Result.DefaultSelection<Prisma.$CustomerProfilePayload>
/**
 * Model PasswordResetTokens
 * 
 */
export type PasswordResetTokens = $Result.DefaultSelection<Prisma.$PasswordResetTokensPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Analysis
 * 
 */
export type Analysis = $Result.DefaultSelection<Prisma.$AnalysisPayload>
/**
 * Model AnalysisEntry
 * 
 */
export type AnalysisEntry = $Result.DefaultSelection<Prisma.$AnalysisEntryPayload>
/**
 * Model TranscriptionJob
 * 
 */
export type TranscriptionJob = $Result.DefaultSelection<Prisma.$TranscriptionJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TranscriptionJobStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type TranscriptionJobStatus = (typeof TranscriptionJobStatus)[keyof typeof TranscriptionJobStatus]


export const Genders: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY',
  ANY: 'ANY'
};

export type Genders = (typeof Genders)[keyof typeof Genders]


export const EducationLevel: {
  NO_EDUCATION: 'NO_EDUCATION',
  PRIMARY_EDUCATION: 'PRIMARY_EDUCATION',
  SECONDARY_EDUCATION: 'SECONDARY_EDUCATION',
  UNIVERSITY_DEGREE: 'UNIVERSITY_DEGREE',
  MASTERS_THESIS: 'MASTERS_THESIS',
  ANY: 'ANY'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const ParentalStatus: {
  YES_CHILDREN: 'YES_CHILDREN',
  NO_CHILDREN: 'NO_CHILDREN',
  ANY: 'ANY'
};

export type ParentalStatus = (typeof ParentalStatus)[keyof typeof ParentalStatus]


export const TechnicalProficiency: {
  BASIC: 'BASIC',
  INTERMEDIATE: 'INTERMEDIATE',
  EXPERT: 'EXPERT',
  ANY: 'ANY'
};

export type TechnicalProficiency = (typeof TechnicalProficiency)[keyof typeof TechnicalProficiency]


export const RecruitmentType: {
  USER_PROVIDER: 'USER_PROVIDER',
  PANEL_PROVIDED: 'PANEL_PROVIDED'
};

export type RecruitmentType = (typeof RecruitmentType)[keyof typeof RecruitmentType]


export const UserRoles: {
  customer: 'customer',
  admin: 'admin',
  participant: 'participant'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]


export const DeviceType: {
  COMPUTER: 'COMPUTER',
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  ANY: 'ANY'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const Country: {
  ES: 'ES',
  ANY: 'ANY'
};

export type Country = (typeof Country)[keyof typeof Country]


export const AnalysisStatus: {
  draft: 'draft',
  published: 'published',
  completed: 'completed'
};

export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus]


export const AnalysisEntryCompletionStatus: {
  in_progress: 'in_progress',
  cancelled: 'cancelled',
  submitted: 'submitted',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type AnalysisEntryCompletionStatus = (typeof AnalysisEntryCompletionStatus)[keyof typeof AnalysisEntryCompletionStatus]

}

export type TranscriptionJobStatus = $Enums.TranscriptionJobStatus

export const TranscriptionJobStatus: typeof $Enums.TranscriptionJobStatus

export type Genders = $Enums.Genders

export const Genders: typeof $Enums.Genders

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type ParentalStatus = $Enums.ParentalStatus

export const ParentalStatus: typeof $Enums.ParentalStatus

export type TechnicalProficiency = $Enums.TechnicalProficiency

export const TechnicalProficiency: typeof $Enums.TechnicalProficiency

export type RecruitmentType = $Enums.RecruitmentType

export const RecruitmentType: typeof $Enums.RecruitmentType

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type Country = $Enums.Country

export const Country: typeof $Enums.Country

export type AnalysisStatus = $Enums.AnalysisStatus

export const AnalysisStatus: typeof $Enums.AnalysisStatus

export type AnalysisEntryCompletionStatus = $Enums.AnalysisEntryCompletionStatus

export const AnalysisEntryCompletionStatus: typeof $Enums.AnalysisEntryCompletionStatus

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
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantProfile`: Exposes CRUD operations for the **ParticipantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantProfiles
    * const participantProfiles = await prisma.participantProfile.findMany()
    * ```
    */
  get participantProfile(): Prisma.ParticipantProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantRating`: Exposes CRUD operations for the **ParticipantRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantRatings
    * const participantRatings = await prisma.participantRating.findMany()
    * ```
    */
  get participantRating(): Prisma.ParticipantRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerProfile`: Exposes CRUD operations for the **CustomerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerProfiles
    * const customerProfiles = await prisma.customerProfile.findMany()
    * ```
    */
  get customerProfile(): Prisma.CustomerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetTokens`: Exposes CRUD operations for the **PasswordResetTokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetTokens.findMany()
    * ```
    */
  get passwordResetTokens(): Prisma.PasswordResetTokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **Analysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analysis.findMany()
    * ```
    */
  get analysis(): Prisma.AnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisEntry`: Exposes CRUD operations for the **AnalysisEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisEntries
    * const analysisEntries = await prisma.analysisEntry.findMany()
    * ```
    */
  get analysisEntry(): Prisma.AnalysisEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transcriptionJob`: Exposes CRUD operations for the **TranscriptionJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranscriptionJobs
    * const transcriptionJobs = await prisma.transcriptionJob.findMany()
    * ```
    */
  get transcriptionJob(): Prisma.TranscriptionJobDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
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
    Company: 'Company',
    ParticipantProfile: 'ParticipantProfile',
    ParticipantRating: 'ParticipantRating',
    CustomerProfile: 'CustomerProfile',
    PasswordResetTokens: 'PasswordResetTokens',
    Session: 'Session',
    Subscription: 'Subscription',
    Analysis: 'Analysis',
    AnalysisEntry: 'AnalysisEntry',
    TranscriptionJob: 'TranscriptionJob'
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
      modelProps: "user" | "company" | "participantProfile" | "participantRating" | "customerProfile" | "passwordResetTokens" | "session" | "subscription" | "analysis" | "analysisEntry" | "transcriptionJob"
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
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      ParticipantProfile: {
        payload: Prisma.$ParticipantProfilePayload<ExtArgs>
        fields: Prisma.ParticipantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          findFirst: {
            args: Prisma.ParticipantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          findMany: {
            args: Prisma.ParticipantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>[]
          }
          create: {
            args: Prisma.ParticipantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          createMany: {
            args: Prisma.ParticipantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>[]
          }
          delete: {
            args: Prisma.ParticipantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          update: {
            args: Prisma.ParticipantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          deleteMany: {
            args: Prisma.ParticipantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>[]
          }
          upsert: {
            args: Prisma.ParticipantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantProfilePayload>
          }
          aggregate: {
            args: Prisma.ParticipantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantProfile>
          }
          groupBy: {
            args: Prisma.ParticipantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantProfileCountAggregateOutputType> | number
          }
        }
      }
      ParticipantRating: {
        payload: Prisma.$ParticipantRatingPayload<ExtArgs>
        fields: Prisma.ParticipantRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          findFirst: {
            args: Prisma.ParticipantRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          findMany: {
            args: Prisma.ParticipantRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>[]
          }
          create: {
            args: Prisma.ParticipantRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          createMany: {
            args: Prisma.ParticipantRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>[]
          }
          delete: {
            args: Prisma.ParticipantRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          update: {
            args: Prisma.ParticipantRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantRatingPayload>
          }
          aggregate: {
            args: Prisma.ParticipantRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantRating>
          }
          groupBy: {
            args: Prisma.ParticipantRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantRatingCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantRatingCountAggregateOutputType> | number
          }
        }
      }
      CustomerProfile: {
        payload: Prisma.$CustomerProfilePayload<ExtArgs>
        fields: Prisma.CustomerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          findFirst: {
            args: Prisma.CustomerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          findMany: {
            args: Prisma.CustomerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>[]
          }
          create: {
            args: Prisma.CustomerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          createMany: {
            args: Prisma.CustomerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>[]
          }
          delete: {
            args: Prisma.CustomerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          update: {
            args: Prisma.CustomerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          deleteMany: {
            args: Prisma.CustomerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>[]
          }
          upsert: {
            args: Prisma.CustomerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerProfilePayload>
          }
          aggregate: {
            args: Prisma.CustomerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerProfile>
          }
          groupBy: {
            args: Prisma.CustomerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerProfileCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetTokens: {
        payload: Prisma.$PasswordResetTokensPayload<ExtArgs>
        fields: Prisma.PasswordResetTokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          update: {
            args: Prisma.PasswordResetTokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokensPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetTokens>
          }
          groupBy: {
            args: Prisma.PasswordResetTokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokensCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokensCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Analysis: {
        payload: Prisma.$AnalysisPayload<ExtArgs>
        fields: Prisma.AnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findFirst: {
            args: Prisma.AnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findMany: {
            args: Prisma.AnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          create: {
            args: Prisma.AnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          createMany: {
            args: Prisma.AnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          delete: {
            args: Prisma.AnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          update: {
            args: Prisma.AnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysis>
          }
          groupBy: {
            args: Prisma.AnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number
          }
        }
      }
      AnalysisEntry: {
        payload: Prisma.$AnalysisEntryPayload<ExtArgs>
        fields: Prisma.AnalysisEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          findFirst: {
            args: Prisma.AnalysisEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          findMany: {
            args: Prisma.AnalysisEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>[]
          }
          create: {
            args: Prisma.AnalysisEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          createMany: {
            args: Prisma.AnalysisEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>[]
          }
          delete: {
            args: Prisma.AnalysisEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          update: {
            args: Prisma.AnalysisEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisEntryPayload>
          }
          aggregate: {
            args: Prisma.AnalysisEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisEntry>
          }
          groupBy: {
            args: Prisma.AnalysisEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisEntryCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisEntryCountAggregateOutputType> | number
          }
        }
      }
      TranscriptionJob: {
        payload: Prisma.$TranscriptionJobPayload<ExtArgs>
        fields: Prisma.TranscriptionJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranscriptionJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranscriptionJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          findFirst: {
            args: Prisma.TranscriptionJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranscriptionJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          findMany: {
            args: Prisma.TranscriptionJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>[]
          }
          create: {
            args: Prisma.TranscriptionJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          createMany: {
            args: Prisma.TranscriptionJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranscriptionJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>[]
          }
          delete: {
            args: Prisma.TranscriptionJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          update: {
            args: Prisma.TranscriptionJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          deleteMany: {
            args: Prisma.TranscriptionJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranscriptionJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranscriptionJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>[]
          }
          upsert: {
            args: Prisma.TranscriptionJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranscriptionJobPayload>
          }
          aggregate: {
            args: Prisma.TranscriptionJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranscriptionJob>
          }
          groupBy: {
            args: Prisma.TranscriptionJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranscriptionJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranscriptionJobCountArgs<ExtArgs>
            result: $Utils.Optional<TranscriptionJobCountAggregateOutputType> | number
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
    company?: CompanyOmit
    participantProfile?: ParticipantProfileOmit
    participantRating?: ParticipantRatingOmit
    customerProfile?: CustomerProfileOmit
    passwordResetTokens?: PasswordResetTokensOmit
    session?: SessionOmit
    subscription?: SubscriptionOmit
    analysis?: AnalysisOmit
    analysisEntry?: AnalysisEntryOmit
    transcriptionJob?: TranscriptionJobOmit
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
    PasswordResetTokens: number
    Analysis: number
    ParticipantProfile: number
    CustomerProfile: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PasswordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
    Analysis?: boolean | UserCountOutputTypeCountAnalysisArgs
    ParticipantProfile?: boolean | UserCountOutputTypeCountParticipantProfileArgs
    CustomerProfile?: boolean | UserCountOutputTypeCountCustomerProfileArgs
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
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokensWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerProfileWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    Analysis: number
    User: number
    Subscription: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analysis?: boolean | CompanyCountOutputTypeCountAnalysisArgs
    User?: boolean | CompanyCountOutputTypeCountUserArgs
    Subscription?: boolean | CompanyCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type ParticipantProfileCountOutputType
   */

  export type ParticipantProfileCountOutputType = {
    AnalysisEntry: number
    ParticipantRating: number
  }

  export type ParticipantProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | ParticipantProfileCountOutputTypeCountAnalysisEntryArgs
    ParticipantRating?: boolean | ParticipantProfileCountOutputTypeCountParticipantRatingArgs
  }

  // Custom InputTypes
  /**
   * ParticipantProfileCountOutputType without action
   */
  export type ParticipantProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfileCountOutputType
     */
    select?: ParticipantProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantProfileCountOutputType without action
   */
  export type ParticipantProfileCountOutputTypeCountAnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisEntryWhereInput
  }

  /**
   * ParticipantProfileCountOutputType without action
   */
  export type ParticipantProfileCountOutputTypeCountParticipantRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantRatingWhereInput
  }


  /**
   * Count Type ParticipantRatingCountOutputType
   */

  export type ParticipantRatingCountOutputType = {
    AnalysisEntry: number
  }

  export type ParticipantRatingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | ParticipantRatingCountOutputTypeCountAnalysisEntryArgs
  }

  // Custom InputTypes
  /**
   * ParticipantRatingCountOutputType without action
   */
  export type ParticipantRatingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRatingCountOutputType
     */
    select?: ParticipantRatingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantRatingCountOutputType without action
   */
  export type ParticipantRatingCountOutputTypeCountAnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisEntryWhereInput
  }


  /**
   * Count Type AnalysisCountOutputType
   */

  export type AnalysisCountOutputType = {
    AnalysisEntry: number
  }

  export type AnalysisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | AnalysisCountOutputTypeCountAnalysisEntryArgs
  }

  // Custom InputTypes
  /**
   * AnalysisCountOutputType without action
   */
  export type AnalysisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCountOutputType
     */
    select?: AnalysisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisCountOutputType without action
   */
  export type AnalysisCountOutputTypeCountAnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisEntryWhereInput
  }


  /**
   * Count Type AnalysisEntryCountOutputType
   */

  export type AnalysisEntryCountOutputType = {
    transcriptionJob: number
  }

  export type AnalysisEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transcriptionJob?: boolean | AnalysisEntryCountOutputTypeCountTranscriptionJobArgs
  }

  // Custom InputTypes
  /**
   * AnalysisEntryCountOutputType without action
   */
  export type AnalysisEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntryCountOutputType
     */
    select?: AnalysisEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnalysisEntryCountOutputType without action
   */
  export type AnalysisEntryCountOutputTypeCountTranscriptionJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptionJobWhereInput
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
    password: string | null
    role: $Enums.UserRoles | null
    created_at: Date | null
    last_updated_at: Date | null
    last_login_at: Date | null
    company_id: string | null
    utm_source: string | null
    utm_medium: string | null
    utm_campaign: string | null
    utm_content: string | null
    utm_term: string | null
    gclid: string | null
    fbclid: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRoles | null
    created_at: Date | null
    last_updated_at: Date | null
    last_login_at: Date | null
    company_id: string | null
    utm_source: string | null
    utm_medium: string | null
    utm_campaign: string | null
    utm_content: string | null
    utm_term: string | null
    gclid: string | null
    fbclid: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    created_at: number
    last_updated_at: number
    last_login_at: number
    company_id: number
    utm_source: number
    utm_medium: number
    utm_campaign: number
    utm_content: number
    utm_term: number
    gclid: number
    fbclid: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_updated_at?: true
    last_login_at?: true
    company_id?: true
    utm_source?: true
    utm_medium?: true
    utm_campaign?: true
    utm_content?: true
    utm_term?: true
    gclid?: true
    fbclid?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_updated_at?: true
    last_login_at?: true
    company_id?: true
    utm_source?: true
    utm_medium?: true
    utm_campaign?: true
    utm_content?: true
    utm_term?: true
    gclid?: true
    fbclid?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    last_updated_at?: true
    last_login_at?: true
    company_id?: true
    utm_source?: true
    utm_medium?: true
    utm_campaign?: true
    utm_content?: true
    utm_term?: true
    gclid?: true
    fbclid?: true
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
    password: string
    role: $Enums.UserRoles
    created_at: Date
    last_updated_at: Date
    last_login_at: Date | null
    company_id: string | null
    utm_source: string | null
    utm_medium: string | null
    utm_campaign: string | null
    utm_content: string | null
    utm_term: string | null
    gclid: string | null
    fbclid: string | null
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
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_updated_at?: boolean
    last_login_at?: boolean
    company_id?: boolean
    utm_source?: boolean
    utm_medium?: boolean
    utm_campaign?: boolean
    utm_content?: boolean
    utm_term?: boolean
    gclid?: boolean
    fbclid?: boolean
    Company?: boolean | User$CompanyArgs<ExtArgs>
    PasswordResetTokens?: boolean | User$PasswordResetTokensArgs<ExtArgs>
    Analysis?: boolean | User$AnalysisArgs<ExtArgs>
    ParticipantProfile?: boolean | User$ParticipantProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_updated_at?: boolean
    last_login_at?: boolean
    company_id?: boolean
    utm_source?: boolean
    utm_medium?: boolean
    utm_campaign?: boolean
    utm_content?: boolean
    utm_term?: boolean
    gclid?: boolean
    fbclid?: boolean
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_updated_at?: boolean
    last_login_at?: boolean
    company_id?: boolean
    utm_source?: boolean
    utm_medium?: boolean
    utm_campaign?: boolean
    utm_content?: boolean
    utm_term?: boolean
    gclid?: boolean
    fbclid?: boolean
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    last_updated_at?: boolean
    last_login_at?: boolean
    company_id?: boolean
    utm_source?: boolean
    utm_medium?: boolean
    utm_campaign?: boolean
    utm_content?: boolean
    utm_term?: boolean
    gclid?: boolean
    fbclid?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "created_at" | "last_updated_at" | "last_login_at" | "company_id" | "utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term" | "gclid" | "fbclid", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | User$CompanyArgs<ExtArgs>
    PasswordResetTokens?: boolean | User$PasswordResetTokensArgs<ExtArgs>
    Analysis?: boolean | User$AnalysisArgs<ExtArgs>
    ParticipantProfile?: boolean | User$ParticipantProfileArgs<ExtArgs>
    CustomerProfile?: boolean | User$CustomerProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs> | null
      PasswordResetTokens: Prisma.$PasswordResetTokensPayload<ExtArgs>[]
      Analysis: Prisma.$AnalysisPayload<ExtArgs>[]
      ParticipantProfile: Prisma.$ParticipantProfilePayload<ExtArgs>[]
      CustomerProfile: Prisma.$CustomerProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRoles
      created_at: Date
      last_updated_at: Date
      last_login_at: Date | null
      company_id: string | null
      utm_source: string | null
      utm_medium: string | null
      utm_campaign: string | null
      utm_content: string | null
      utm_term: string | null
      gclid: string | null
      fbclid: string | null
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
    Company<T extends User$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, User$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PasswordResetTokens<T extends User$PasswordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$PasswordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Analysis<T extends User$AnalysisArgs<ExtArgs> = {}>(args?: Subset<T, User$AnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipantProfile<T extends User$ParticipantProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$ParticipantProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CustomerProfile<T extends User$CustomerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$CustomerProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly last_updated_at: FieldRef<"User", 'DateTime'>
    readonly last_login_at: FieldRef<"User", 'DateTime'>
    readonly company_id: FieldRef<"User", 'String'>
    readonly utm_source: FieldRef<"User", 'String'>
    readonly utm_medium: FieldRef<"User", 'String'>
    readonly utm_campaign: FieldRef<"User", 'String'>
    readonly utm_content: FieldRef<"User", 'String'>
    readonly utm_term: FieldRef<"User", 'String'>
    readonly gclid: FieldRef<"User", 'String'>
    readonly fbclid: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.Company
   */
  export type User$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.PasswordResetTokens
   */
  export type User$PasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    where?: PasswordResetTokensWhereInput
    orderBy?: PasswordResetTokensOrderByWithRelationInput | PasswordResetTokensOrderByWithRelationInput[]
    cursor?: PasswordResetTokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokensScalarFieldEnum | PasswordResetTokensScalarFieldEnum[]
  }

  /**
   * User.Analysis
   */
  export type User$AnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * User.ParticipantProfile
   */
  export type User$ParticipantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    where?: ParticipantProfileWhereInput
    orderBy?: ParticipantProfileOrderByWithRelationInput | ParticipantProfileOrderByWithRelationInput[]
    cursor?: ParticipantProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantProfileScalarFieldEnum | ParticipantProfileScalarFieldEnum[]
  }

  /**
   * User.CustomerProfile
   */
  export type User$CustomerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    where?: CustomerProfileWhereInput
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    cursor?: CustomerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
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
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    stripe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stripe_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    stripe_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    stripe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    stripe_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    stripe_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string | null
    stripe_id: string | null
    created_at: Date
    updated_at: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Analysis?: boolean | Company$AnalysisArgs<ExtArgs>
    User?: boolean | Company$UserArgs<ExtArgs>
    Subscription?: boolean | Company$SubscriptionArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    stripe_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stripe_id" | "created_at" | "updated_at", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analysis?: boolean | Company$AnalysisArgs<ExtArgs>
    User?: boolean | Company$UserArgs<ExtArgs>
    Subscription?: boolean | Company$SubscriptionArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Analysis: Prisma.$AnalysisPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      stripe_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Analysis<T extends Company$AnalysisArgs<ExtArgs> = {}>(args?: Subset<T, Company$AnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Company$UserArgs<ExtArgs> = {}>(args?: Subset<T, Company$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Subscription<T extends Company$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Company$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly stripe_id: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
    readonly updated_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data?: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.Analysis
   */
  export type Company$AnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Company.User
   */
  export type Company$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.Subscription
   */
  export type Company$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantProfile
   */

  export type AggregateParticipantProfile = {
    _count: ParticipantProfileCountAggregateOutputType | null
    _avg: ParticipantProfileAvgAggregateOutputType | null
    _sum: ParticipantProfileSumAggregateOutputType | null
    _min: ParticipantProfileMinAggregateOutputType | null
    _max: ParticipantProfileMaxAggregateOutputType | null
  }

  export type ParticipantProfileAvgAggregateOutputType = {
    id: number | null
    yearly_income: number | null
  }

  export type ParticipantProfileSumAggregateOutputType = {
    id: number | null
    yearly_income: number | null
  }

  export type ParticipantProfileMinAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    nif: string | null
    payment_address: string | null
    birth_date: Date | null
    gender: $Enums.Genders | null
    country: $Enums.Country | null
    education_level: $Enums.EducationLevel | null
    yearly_income: number | null
    parental_status: $Enums.ParentalStatus | null
    technical_proficiency: $Enums.TechnicalProficiency | null
    approved: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ParticipantProfileMaxAggregateOutputType = {
    id: number | null
    name: string | null
    last_name: string | null
    nif: string | null
    payment_address: string | null
    birth_date: Date | null
    gender: $Enums.Genders | null
    country: $Enums.Country | null
    education_level: $Enums.EducationLevel | null
    yearly_income: number | null
    parental_status: $Enums.ParentalStatus | null
    technical_proficiency: $Enums.TechnicalProficiency | null
    approved: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ParticipantProfileCountAggregateOutputType = {
    id: number
    name: number
    last_name: number
    nif: number
    payment_address: number
    birth_date: number
    gender: number
    country: number
    available_devices: number
    education_level: number
    yearly_income: number
    parental_status: number
    technical_proficiency: number
    approved: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ParticipantProfileAvgAggregateInputType = {
    id?: true
    yearly_income?: true
  }

  export type ParticipantProfileSumAggregateInputType = {
    id?: true
    yearly_income?: true
  }

  export type ParticipantProfileMinAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    nif?: true
    payment_address?: true
    birth_date?: true
    gender?: true
    country?: true
    education_level?: true
    yearly_income?: true
    parental_status?: true
    technical_proficiency?: true
    approved?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ParticipantProfileMaxAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    nif?: true
    payment_address?: true
    birth_date?: true
    gender?: true
    country?: true
    education_level?: true
    yearly_income?: true
    parental_status?: true
    technical_proficiency?: true
    approved?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ParticipantProfileCountAggregateInputType = {
    id?: true
    name?: true
    last_name?: true
    nif?: true
    payment_address?: true
    birth_date?: true
    gender?: true
    country?: true
    available_devices?: true
    education_level?: true
    yearly_income?: true
    parental_status?: true
    technical_proficiency?: true
    approved?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ParticipantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantProfile to aggregate.
     */
    where?: ParticipantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantProfiles to fetch.
     */
    orderBy?: ParticipantProfileOrderByWithRelationInput | ParticipantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantProfiles
    **/
    _count?: true | ParticipantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantProfileMaxAggregateInputType
  }

  export type GetParticipantProfileAggregateType<T extends ParticipantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantProfile[P]>
      : GetScalarType<T[P], AggregateParticipantProfile[P]>
  }




  export type ParticipantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantProfileWhereInput
    orderBy?: ParticipantProfileOrderByWithAggregationInput | ParticipantProfileOrderByWithAggregationInput[]
    by: ParticipantProfileScalarFieldEnum[] | ParticipantProfileScalarFieldEnum
    having?: ParticipantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantProfileCountAggregateInputType | true
    _avg?: ParticipantProfileAvgAggregateInputType
    _sum?: ParticipantProfileSumAggregateInputType
    _min?: ParticipantProfileMinAggregateInputType
    _max?: ParticipantProfileMaxAggregateInputType
  }

  export type ParticipantProfileGroupByOutputType = {
    id: number
    name: string | null
    last_name: string | null
    nif: string | null
    payment_address: string | null
    birth_date: Date | null
    gender: $Enums.Genders | null
    country: $Enums.Country | null
    available_devices: $Enums.DeviceType[]
    education_level: $Enums.EducationLevel | null
    yearly_income: number | null
    parental_status: $Enums.ParentalStatus | null
    technical_proficiency: $Enums.TechnicalProficiency | null
    approved: boolean
    created_at: Date
    updated_at: Date
    user_id: string
    _count: ParticipantProfileCountAggregateOutputType | null
    _avg: ParticipantProfileAvgAggregateOutputType | null
    _sum: ParticipantProfileSumAggregateOutputType | null
    _min: ParticipantProfileMinAggregateOutputType | null
    _max: ParticipantProfileMaxAggregateOutputType | null
  }

  type GetParticipantProfileGroupByPayload<T extends ParticipantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantProfileGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    nif?: boolean
    payment_address?: boolean
    birth_date?: boolean
    gender?: boolean
    country?: boolean
    available_devices?: boolean
    education_level?: boolean
    yearly_income?: boolean
    parental_status?: boolean
    technical_proficiency?: boolean
    approved?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | ParticipantProfile$AnalysisEntryArgs<ExtArgs>
    ParticipantRating?: boolean | ParticipantProfile$ParticipantRatingArgs<ExtArgs>
    _count?: boolean | ParticipantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantProfile"]>

  export type ParticipantProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    nif?: boolean
    payment_address?: boolean
    birth_date?: boolean
    gender?: boolean
    country?: boolean
    available_devices?: boolean
    education_level?: boolean
    yearly_income?: boolean
    parental_status?: boolean
    technical_proficiency?: boolean
    approved?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantProfile"]>

  export type ParticipantProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    last_name?: boolean
    nif?: boolean
    payment_address?: boolean
    birth_date?: boolean
    gender?: boolean
    country?: boolean
    available_devices?: boolean
    education_level?: boolean
    yearly_income?: boolean
    parental_status?: boolean
    technical_proficiency?: boolean
    approved?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantProfile"]>

  export type ParticipantProfileSelectScalar = {
    id?: boolean
    name?: boolean
    last_name?: boolean
    nif?: boolean
    payment_address?: boolean
    birth_date?: boolean
    gender?: boolean
    country?: boolean
    available_devices?: boolean
    education_level?: boolean
    yearly_income?: boolean
    parental_status?: boolean
    technical_proficiency?: boolean
    approved?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type ParticipantProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "last_name" | "nif" | "payment_address" | "birth_date" | "gender" | "country" | "available_devices" | "education_level" | "yearly_income" | "parental_status" | "technical_proficiency" | "approved" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["participantProfile"]>
  export type ParticipantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | ParticipantProfile$AnalysisEntryArgs<ExtArgs>
    ParticipantRating?: boolean | ParticipantProfile$ParticipantRatingArgs<ExtArgs>
    _count?: boolean | ParticipantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipantProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantProfile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      AnalysisEntry: Prisma.$AnalysisEntryPayload<ExtArgs>[]
      ParticipantRating: Prisma.$ParticipantRatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      last_name: string | null
      nif: string | null
      payment_address: string | null
      birth_date: Date | null
      gender: $Enums.Genders | null
      country: $Enums.Country | null
      available_devices: $Enums.DeviceType[]
      education_level: $Enums.EducationLevel | null
      yearly_income: number | null
      parental_status: $Enums.ParentalStatus | null
      technical_proficiency: $Enums.TechnicalProficiency | null
      approved: boolean
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["participantProfile"]>
    composites: {}
  }

  type ParticipantProfileGetPayload<S extends boolean | null | undefined | ParticipantProfileDefaultArgs> = $Result.GetResult<Prisma.$ParticipantProfilePayload, S>

  type ParticipantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantProfileCountAggregateInputType | true
    }

  export interface ParticipantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantProfile'], meta: { name: 'ParticipantProfile' } }
    /**
     * Find zero or one ParticipantProfile that matches the filter.
     * @param {ParticipantProfileFindUniqueArgs} args - Arguments to find a ParticipantProfile
     * @example
     * // Get one ParticipantProfile
     * const participantProfile = await prisma.participantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantProfileFindUniqueArgs>(args: SelectSubset<T, ParticipantProfileFindUniqueArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantProfileFindUniqueOrThrowArgs} args - Arguments to find a ParticipantProfile
     * @example
     * // Get one ParticipantProfile
     * const participantProfile = await prisma.participantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileFindFirstArgs} args - Arguments to find a ParticipantProfile
     * @example
     * // Get one ParticipantProfile
     * const participantProfile = await prisma.participantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantProfileFindFirstArgs>(args?: SelectSubset<T, ParticipantProfileFindFirstArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileFindFirstOrThrowArgs} args - Arguments to find a ParticipantProfile
     * @example
     * // Get one ParticipantProfile
     * const participantProfile = await prisma.participantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantProfiles
     * const participantProfiles = await prisma.participantProfile.findMany()
     * 
     * // Get first 10 ParticipantProfiles
     * const participantProfiles = await prisma.participantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantProfileWithIdOnly = await prisma.participantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantProfileFindManyArgs>(args?: SelectSubset<T, ParticipantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantProfile.
     * @param {ParticipantProfileCreateArgs} args - Arguments to create a ParticipantProfile.
     * @example
     * // Create one ParticipantProfile
     * const ParticipantProfile = await prisma.participantProfile.create({
     *   data: {
     *     // ... data to create a ParticipantProfile
     *   }
     * })
     * 
     */
    create<T extends ParticipantProfileCreateArgs>(args: SelectSubset<T, ParticipantProfileCreateArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantProfiles.
     * @param {ParticipantProfileCreateManyArgs} args - Arguments to create many ParticipantProfiles.
     * @example
     * // Create many ParticipantProfiles
     * const participantProfile = await prisma.participantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantProfileCreateManyArgs>(args?: SelectSubset<T, ParticipantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantProfiles and returns the data saved in the database.
     * @param {ParticipantProfileCreateManyAndReturnArgs} args - Arguments to create many ParticipantProfiles.
     * @example
     * // Create many ParticipantProfiles
     * const participantProfile = await prisma.participantProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantProfiles and only return the `id`
     * const participantProfileWithIdOnly = await prisma.participantProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantProfile.
     * @param {ParticipantProfileDeleteArgs} args - Arguments to delete one ParticipantProfile.
     * @example
     * // Delete one ParticipantProfile
     * const ParticipantProfile = await prisma.participantProfile.delete({
     *   where: {
     *     // ... filter to delete one ParticipantProfile
     *   }
     * })
     * 
     */
    delete<T extends ParticipantProfileDeleteArgs>(args: SelectSubset<T, ParticipantProfileDeleteArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantProfile.
     * @param {ParticipantProfileUpdateArgs} args - Arguments to update one ParticipantProfile.
     * @example
     * // Update one ParticipantProfile
     * const participantProfile = await prisma.participantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantProfileUpdateArgs>(args: SelectSubset<T, ParticipantProfileUpdateArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantProfiles.
     * @param {ParticipantProfileDeleteManyArgs} args - Arguments to filter ParticipantProfiles to delete.
     * @example
     * // Delete a few ParticipantProfiles
     * const { count } = await prisma.participantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantProfileDeleteManyArgs>(args?: SelectSubset<T, ParticipantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantProfiles
     * const participantProfile = await prisma.participantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantProfileUpdateManyArgs>(args: SelectSubset<T, ParticipantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantProfiles and returns the data updated in the database.
     * @param {ParticipantProfileUpdateManyAndReturnArgs} args - Arguments to update many ParticipantProfiles.
     * @example
     * // Update many ParticipantProfiles
     * const participantProfile = await prisma.participantProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantProfiles and only return the `id`
     * const participantProfileWithIdOnly = await prisma.participantProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantProfile.
     * @param {ParticipantProfileUpsertArgs} args - Arguments to update or create a ParticipantProfile.
     * @example
     * // Update or create a ParticipantProfile
     * const participantProfile = await prisma.participantProfile.upsert({
     *   create: {
     *     // ... data to create a ParticipantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantProfile we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantProfileUpsertArgs>(args: SelectSubset<T, ParticipantProfileUpsertArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileCountArgs} args - Arguments to filter ParticipantProfiles to count.
     * @example
     * // Count the number of ParticipantProfiles
     * const count = await prisma.participantProfile.count({
     *   where: {
     *     // ... the filter for the ParticipantProfiles we want to count
     *   }
     * })
    **/
    count<T extends ParticipantProfileCountArgs>(
      args?: Subset<T, ParticipantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantProfileAggregateArgs>(args: Subset<T, ParticipantProfileAggregateArgs>): Prisma.PrismaPromise<GetParticipantProfileAggregateType<T>>

    /**
     * Group by ParticipantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantProfileGroupByArgs} args - Group by arguments.
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
      T extends ParticipantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantProfileGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantProfile model
   */
  readonly fields: ParticipantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AnalysisEntry<T extends ParticipantProfile$AnalysisEntryArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantProfile$AnalysisEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipantRating<T extends ParticipantProfile$ParticipantRatingArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantProfile$ParticipantRatingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParticipantProfile model
   */
  interface ParticipantProfileFieldRefs {
    readonly id: FieldRef<"ParticipantProfile", 'Int'>
    readonly name: FieldRef<"ParticipantProfile", 'String'>
    readonly last_name: FieldRef<"ParticipantProfile", 'String'>
    readonly nif: FieldRef<"ParticipantProfile", 'String'>
    readonly payment_address: FieldRef<"ParticipantProfile", 'String'>
    readonly birth_date: FieldRef<"ParticipantProfile", 'DateTime'>
    readonly gender: FieldRef<"ParticipantProfile", 'Genders'>
    readonly country: FieldRef<"ParticipantProfile", 'Country'>
    readonly available_devices: FieldRef<"ParticipantProfile", 'DeviceType[]'>
    readonly education_level: FieldRef<"ParticipantProfile", 'EducationLevel'>
    readonly yearly_income: FieldRef<"ParticipantProfile", 'Int'>
    readonly parental_status: FieldRef<"ParticipantProfile", 'ParentalStatus'>
    readonly technical_proficiency: FieldRef<"ParticipantProfile", 'TechnicalProficiency'>
    readonly approved: FieldRef<"ParticipantProfile", 'Boolean'>
    readonly created_at: FieldRef<"ParticipantProfile", 'DateTime'>
    readonly updated_at: FieldRef<"ParticipantProfile", 'DateTime'>
    readonly user_id: FieldRef<"ParticipantProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantProfile findUnique
   */
  export type ParticipantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantProfile to fetch.
     */
    where: ParticipantProfileWhereUniqueInput
  }

  /**
   * ParticipantProfile findUniqueOrThrow
   */
  export type ParticipantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantProfile to fetch.
     */
    where: ParticipantProfileWhereUniqueInput
  }

  /**
   * ParticipantProfile findFirst
   */
  export type ParticipantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantProfile to fetch.
     */
    where?: ParticipantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantProfiles to fetch.
     */
    orderBy?: ParticipantProfileOrderByWithRelationInput | ParticipantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantProfiles.
     */
    cursor?: ParticipantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantProfiles.
     */
    distinct?: ParticipantProfileScalarFieldEnum | ParticipantProfileScalarFieldEnum[]
  }

  /**
   * ParticipantProfile findFirstOrThrow
   */
  export type ParticipantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantProfile to fetch.
     */
    where?: ParticipantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantProfiles to fetch.
     */
    orderBy?: ParticipantProfileOrderByWithRelationInput | ParticipantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantProfiles.
     */
    cursor?: ParticipantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantProfiles.
     */
    distinct?: ParticipantProfileScalarFieldEnum | ParticipantProfileScalarFieldEnum[]
  }

  /**
   * ParticipantProfile findMany
   */
  export type ParticipantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantProfiles to fetch.
     */
    where?: ParticipantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantProfiles to fetch.
     */
    orderBy?: ParticipantProfileOrderByWithRelationInput | ParticipantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantProfiles.
     */
    cursor?: ParticipantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantProfiles.
     */
    skip?: number
    distinct?: ParticipantProfileScalarFieldEnum | ParticipantProfileScalarFieldEnum[]
  }

  /**
   * ParticipantProfile create
   */
  export type ParticipantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantProfile.
     */
    data: XOR<ParticipantProfileCreateInput, ParticipantProfileUncheckedCreateInput>
  }

  /**
   * ParticipantProfile createMany
   */
  export type ParticipantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantProfiles.
     */
    data: ParticipantProfileCreateManyInput | ParticipantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantProfile createManyAndReturn
   */
  export type ParticipantProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantProfiles.
     */
    data: ParticipantProfileCreateManyInput | ParticipantProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantProfile update
   */
  export type ParticipantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantProfile.
     */
    data: XOR<ParticipantProfileUpdateInput, ParticipantProfileUncheckedUpdateInput>
    /**
     * Choose, which ParticipantProfile to update.
     */
    where: ParticipantProfileWhereUniqueInput
  }

  /**
   * ParticipantProfile updateMany
   */
  export type ParticipantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantProfiles.
     */
    data: XOR<ParticipantProfileUpdateManyMutationInput, ParticipantProfileUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantProfiles to update
     */
    where?: ParticipantProfileWhereInput
    /**
     * Limit how many ParticipantProfiles to update.
     */
    limit?: number
  }

  /**
   * ParticipantProfile updateManyAndReturn
   */
  export type ParticipantProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantProfiles.
     */
    data: XOR<ParticipantProfileUpdateManyMutationInput, ParticipantProfileUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantProfiles to update
     */
    where?: ParticipantProfileWhereInput
    /**
     * Limit how many ParticipantProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantProfile upsert
   */
  export type ParticipantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantProfile to update in case it exists.
     */
    where: ParticipantProfileWhereUniqueInput
    /**
     * In case the ParticipantProfile found by the `where` argument doesn't exist, create a new ParticipantProfile with this data.
     */
    create: XOR<ParticipantProfileCreateInput, ParticipantProfileUncheckedCreateInput>
    /**
     * In case the ParticipantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantProfileUpdateInput, ParticipantProfileUncheckedUpdateInput>
  }

  /**
   * ParticipantProfile delete
   */
  export type ParticipantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    /**
     * Filter which ParticipantProfile to delete.
     */
    where: ParticipantProfileWhereUniqueInput
  }

  /**
   * ParticipantProfile deleteMany
   */
  export type ParticipantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantProfiles to delete
     */
    where?: ParticipantProfileWhereInput
    /**
     * Limit how many ParticipantProfiles to delete.
     */
    limit?: number
  }

  /**
   * ParticipantProfile.AnalysisEntry
   */
  export type ParticipantProfile$AnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    where?: AnalysisEntryWhereInput
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    cursor?: AnalysisEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * ParticipantProfile.ParticipantRating
   */
  export type ParticipantProfile$ParticipantRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    where?: ParticipantRatingWhereInput
    orderBy?: ParticipantRatingOrderByWithRelationInput | ParticipantRatingOrderByWithRelationInput[]
    cursor?: ParticipantRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantRatingScalarFieldEnum | ParticipantRatingScalarFieldEnum[]
  }

  /**
   * ParticipantProfile without action
   */
  export type ParticipantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantRating
   */

  export type AggregateParticipantRating = {
    _count: ParticipantRatingCountAggregateOutputType | null
    _avg: ParticipantRatingAvgAggregateOutputType | null
    _sum: ParticipantRatingSumAggregateOutputType | null
    _min: ParticipantRatingMinAggregateOutputType | null
    _max: ParticipantRatingMaxAggregateOutputType | null
  }

  export type ParticipantRatingAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    score: number | null
  }

  export type ParticipantRatingSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    score: number | null
  }

  export type ParticipantRatingMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    score: number | null
  }

  export type ParticipantRatingMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: number | null
    score: number | null
  }

  export type ParticipantRatingCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    user_id: number
    score: number
    _all: number
  }


  export type ParticipantRatingAvgAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type ParticipantRatingSumAggregateInputType = {
    id?: true
    user_id?: true
    score?: true
  }

  export type ParticipantRatingMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    score?: true
  }

  export type ParticipantRatingMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    score?: true
  }

  export type ParticipantRatingCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    score?: true
    _all?: true
  }

  export type ParticipantRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantRating to aggregate.
     */
    where?: ParticipantRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantRatings to fetch.
     */
    orderBy?: ParticipantRatingOrderByWithRelationInput | ParticipantRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantRatings
    **/
    _count?: true | ParticipantRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantRatingMaxAggregateInputType
  }

  export type GetParticipantRatingAggregateType<T extends ParticipantRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantRating[P]>
      : GetScalarType<T[P], AggregateParticipantRating[P]>
  }




  export type ParticipantRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantRatingWhereInput
    orderBy?: ParticipantRatingOrderByWithAggregationInput | ParticipantRatingOrderByWithAggregationInput[]
    by: ParticipantRatingScalarFieldEnum[] | ParticipantRatingScalarFieldEnum
    having?: ParticipantRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantRatingCountAggregateInputType | true
    _avg?: ParticipantRatingAvgAggregateInputType
    _sum?: ParticipantRatingSumAggregateInputType
    _min?: ParticipantRatingMinAggregateInputType
    _max?: ParticipantRatingMaxAggregateInputType
  }

  export type ParticipantRatingGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    user_id: number
    score: number
    _count: ParticipantRatingCountAggregateOutputType | null
    _avg: ParticipantRatingAvgAggregateOutputType | null
    _sum: ParticipantRatingSumAggregateOutputType | null
    _min: ParticipantRatingMinAggregateOutputType | null
    _max: ParticipantRatingMaxAggregateOutputType | null
  }

  type GetParticipantRatingGroupByPayload<T extends ParticipantRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantRatingGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantRatingGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    score?: boolean
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | ParticipantRating$AnalysisEntryArgs<ExtArgs>
    _count?: boolean | ParticipantRatingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantRating"]>

  export type ParticipantRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    score?: boolean
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantRating"]>

  export type ParticipantRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    score?: boolean
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participantRating"]>

  export type ParticipantRatingSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    score?: boolean
  }

  export type ParticipantRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "user_id" | "score", ExtArgs["result"]["participantRating"]>
  export type ParticipantRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | ParticipantRating$AnalysisEntryArgs<ExtArgs>
    _count?: boolean | ParticipantRatingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipantRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
  }
  export type ParticipantRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantProfile?: boolean | ParticipantProfileDefaultArgs<ExtArgs>
  }

  export type $ParticipantRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantRating"
    objects: {
      participantProfile: Prisma.$ParticipantProfilePayload<ExtArgs>
      AnalysisEntry: Prisma.$AnalysisEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      updated_at: Date
      user_id: number
      score: number
    }, ExtArgs["result"]["participantRating"]>
    composites: {}
  }

  type ParticipantRatingGetPayload<S extends boolean | null | undefined | ParticipantRatingDefaultArgs> = $Result.GetResult<Prisma.$ParticipantRatingPayload, S>

  type ParticipantRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantRatingCountAggregateInputType | true
    }

  export interface ParticipantRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantRating'], meta: { name: 'ParticipantRating' } }
    /**
     * Find zero or one ParticipantRating that matches the filter.
     * @param {ParticipantRatingFindUniqueArgs} args - Arguments to find a ParticipantRating
     * @example
     * // Get one ParticipantRating
     * const participantRating = await prisma.participantRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantRatingFindUniqueArgs>(args: SelectSubset<T, ParticipantRatingFindUniqueArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantRatingFindUniqueOrThrowArgs} args - Arguments to find a ParticipantRating
     * @example
     * // Get one ParticipantRating
     * const participantRating = await prisma.participantRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingFindFirstArgs} args - Arguments to find a ParticipantRating
     * @example
     * // Get one ParticipantRating
     * const participantRating = await prisma.participantRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantRatingFindFirstArgs>(args?: SelectSubset<T, ParticipantRatingFindFirstArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingFindFirstOrThrowArgs} args - Arguments to find a ParticipantRating
     * @example
     * // Get one ParticipantRating
     * const participantRating = await prisma.participantRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantRatings
     * const participantRatings = await prisma.participantRating.findMany()
     * 
     * // Get first 10 ParticipantRatings
     * const participantRatings = await prisma.participantRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantRatingWithIdOnly = await prisma.participantRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantRatingFindManyArgs>(args?: SelectSubset<T, ParticipantRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantRating.
     * @param {ParticipantRatingCreateArgs} args - Arguments to create a ParticipantRating.
     * @example
     * // Create one ParticipantRating
     * const ParticipantRating = await prisma.participantRating.create({
     *   data: {
     *     // ... data to create a ParticipantRating
     *   }
     * })
     * 
     */
    create<T extends ParticipantRatingCreateArgs>(args: SelectSubset<T, ParticipantRatingCreateArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantRatings.
     * @param {ParticipantRatingCreateManyArgs} args - Arguments to create many ParticipantRatings.
     * @example
     * // Create many ParticipantRatings
     * const participantRating = await prisma.participantRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantRatingCreateManyArgs>(args?: SelectSubset<T, ParticipantRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantRatings and returns the data saved in the database.
     * @param {ParticipantRatingCreateManyAndReturnArgs} args - Arguments to create many ParticipantRatings.
     * @example
     * // Create many ParticipantRatings
     * const participantRating = await prisma.participantRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantRatings and only return the `id`
     * const participantRatingWithIdOnly = await prisma.participantRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantRating.
     * @param {ParticipantRatingDeleteArgs} args - Arguments to delete one ParticipantRating.
     * @example
     * // Delete one ParticipantRating
     * const ParticipantRating = await prisma.participantRating.delete({
     *   where: {
     *     // ... filter to delete one ParticipantRating
     *   }
     * })
     * 
     */
    delete<T extends ParticipantRatingDeleteArgs>(args: SelectSubset<T, ParticipantRatingDeleteArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantRating.
     * @param {ParticipantRatingUpdateArgs} args - Arguments to update one ParticipantRating.
     * @example
     * // Update one ParticipantRating
     * const participantRating = await prisma.participantRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantRatingUpdateArgs>(args: SelectSubset<T, ParticipantRatingUpdateArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantRatings.
     * @param {ParticipantRatingDeleteManyArgs} args - Arguments to filter ParticipantRatings to delete.
     * @example
     * // Delete a few ParticipantRatings
     * const { count } = await prisma.participantRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantRatingDeleteManyArgs>(args?: SelectSubset<T, ParticipantRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantRatings
     * const participantRating = await prisma.participantRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantRatingUpdateManyArgs>(args: SelectSubset<T, ParticipantRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantRatings and returns the data updated in the database.
     * @param {ParticipantRatingUpdateManyAndReturnArgs} args - Arguments to update many ParticipantRatings.
     * @example
     * // Update many ParticipantRatings
     * const participantRating = await prisma.participantRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantRatings and only return the `id`
     * const participantRatingWithIdOnly = await prisma.participantRating.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantRating.
     * @param {ParticipantRatingUpsertArgs} args - Arguments to update or create a ParticipantRating.
     * @example
     * // Update or create a ParticipantRating
     * const participantRating = await prisma.participantRating.upsert({
     *   create: {
     *     // ... data to create a ParticipantRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantRating we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantRatingUpsertArgs>(args: SelectSubset<T, ParticipantRatingUpsertArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingCountArgs} args - Arguments to filter ParticipantRatings to count.
     * @example
     * // Count the number of ParticipantRatings
     * const count = await prisma.participantRating.count({
     *   where: {
     *     // ... the filter for the ParticipantRatings we want to count
     *   }
     * })
    **/
    count<T extends ParticipantRatingCountArgs>(
      args?: Subset<T, ParticipantRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantRatingAggregateArgs>(args: Subset<T, ParticipantRatingAggregateArgs>): Prisma.PrismaPromise<GetParticipantRatingAggregateType<T>>

    /**
     * Group by ParticipantRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantRatingGroupByArgs} args - Group by arguments.
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
      T extends ParticipantRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantRatingGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantRating model
   */
  readonly fields: ParticipantRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participantProfile<T extends ParticipantProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantProfileDefaultArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AnalysisEntry<T extends ParticipantRating$AnalysisEntryArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantRating$AnalysisEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParticipantRating model
   */
  interface ParticipantRatingFieldRefs {
    readonly id: FieldRef<"ParticipantRating", 'Int'>
    readonly created_at: FieldRef<"ParticipantRating", 'DateTime'>
    readonly updated_at: FieldRef<"ParticipantRating", 'DateTime'>
    readonly user_id: FieldRef<"ParticipantRating", 'Int'>
    readonly score: FieldRef<"ParticipantRating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantRating findUnique
   */
  export type ParticipantRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantRating to fetch.
     */
    where: ParticipantRatingWhereUniqueInput
  }

  /**
   * ParticipantRating findUniqueOrThrow
   */
  export type ParticipantRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantRating to fetch.
     */
    where: ParticipantRatingWhereUniqueInput
  }

  /**
   * ParticipantRating findFirst
   */
  export type ParticipantRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantRating to fetch.
     */
    where?: ParticipantRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantRatings to fetch.
     */
    orderBy?: ParticipantRatingOrderByWithRelationInput | ParticipantRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantRatings.
     */
    cursor?: ParticipantRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantRatings.
     */
    distinct?: ParticipantRatingScalarFieldEnum | ParticipantRatingScalarFieldEnum[]
  }

  /**
   * ParticipantRating findFirstOrThrow
   */
  export type ParticipantRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantRating to fetch.
     */
    where?: ParticipantRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantRatings to fetch.
     */
    orderBy?: ParticipantRatingOrderByWithRelationInput | ParticipantRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantRatings.
     */
    cursor?: ParticipantRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantRatings.
     */
    distinct?: ParticipantRatingScalarFieldEnum | ParticipantRatingScalarFieldEnum[]
  }

  /**
   * ParticipantRating findMany
   */
  export type ParticipantRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter, which ParticipantRatings to fetch.
     */
    where?: ParticipantRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantRatings to fetch.
     */
    orderBy?: ParticipantRatingOrderByWithRelationInput | ParticipantRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantRatings.
     */
    cursor?: ParticipantRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantRatings.
     */
    skip?: number
    distinct?: ParticipantRatingScalarFieldEnum | ParticipantRatingScalarFieldEnum[]
  }

  /**
   * ParticipantRating create
   */
  export type ParticipantRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipantRating.
     */
    data: XOR<ParticipantRatingCreateInput, ParticipantRatingUncheckedCreateInput>
  }

  /**
   * ParticipantRating createMany
   */
  export type ParticipantRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantRatings.
     */
    data: ParticipantRatingCreateManyInput | ParticipantRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantRating createManyAndReturn
   */
  export type ParticipantRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantRatings.
     */
    data: ParticipantRatingCreateManyInput | ParticipantRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantRating update
   */
  export type ParticipantRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipantRating.
     */
    data: XOR<ParticipantRatingUpdateInput, ParticipantRatingUncheckedUpdateInput>
    /**
     * Choose, which ParticipantRating to update.
     */
    where: ParticipantRatingWhereUniqueInput
  }

  /**
   * ParticipantRating updateMany
   */
  export type ParticipantRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantRatings.
     */
    data: XOR<ParticipantRatingUpdateManyMutationInput, ParticipantRatingUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantRatings to update
     */
    where?: ParticipantRatingWhereInput
    /**
     * Limit how many ParticipantRatings to update.
     */
    limit?: number
  }

  /**
   * ParticipantRating updateManyAndReturn
   */
  export type ParticipantRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantRatings.
     */
    data: XOR<ParticipantRatingUpdateManyMutationInput, ParticipantRatingUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantRatings to update
     */
    where?: ParticipantRatingWhereInput
    /**
     * Limit how many ParticipantRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipantRating upsert
   */
  export type ParticipantRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipantRating to update in case it exists.
     */
    where: ParticipantRatingWhereUniqueInput
    /**
     * In case the ParticipantRating found by the `where` argument doesn't exist, create a new ParticipantRating with this data.
     */
    create: XOR<ParticipantRatingCreateInput, ParticipantRatingUncheckedCreateInput>
    /**
     * In case the ParticipantRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantRatingUpdateInput, ParticipantRatingUncheckedUpdateInput>
  }

  /**
   * ParticipantRating delete
   */
  export type ParticipantRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    /**
     * Filter which ParticipantRating to delete.
     */
    where: ParticipantRatingWhereUniqueInput
  }

  /**
   * ParticipantRating deleteMany
   */
  export type ParticipantRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantRatings to delete
     */
    where?: ParticipantRatingWhereInput
    /**
     * Limit how many ParticipantRatings to delete.
     */
    limit?: number
  }

  /**
   * ParticipantRating.AnalysisEntry
   */
  export type ParticipantRating$AnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    where?: AnalysisEntryWhereInput
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    cursor?: AnalysisEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * ParticipantRating without action
   */
  export type ParticipantRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
  }


  /**
   * Model CustomerProfile
   */

  export type AggregateCustomerProfile = {
    _count: CustomerProfileCountAggregateOutputType | null
    _avg: CustomerProfileAvgAggregateOutputType | null
    _sum: CustomerProfileSumAggregateOutputType | null
    _min: CustomerProfileMinAggregateOutputType | null
    _max: CustomerProfileMaxAggregateOutputType | null
  }

  export type CustomerProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerProfileSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerProfileMinAggregateOutputType = {
    id: number | null
    company_name: string | null
    position: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerProfileMaxAggregateOutputType = {
    id: number | null
    company_name: string | null
    position: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerProfileCountAggregateOutputType = {
    id: number
    company_name: number
    position: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomerProfileAvgAggregateInputType = {
    id?: true
  }

  export type CustomerProfileSumAggregateInputType = {
    id?: true
  }

  export type CustomerProfileMinAggregateInputType = {
    id?: true
    company_name?: true
    position?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerProfileMaxAggregateInputType = {
    id?: true
    company_name?: true
    position?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerProfileCountAggregateInputType = {
    id?: true
    company_name?: true
    position?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfile to aggregate.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerProfiles
    **/
    _count?: true | CustomerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerProfileMaxAggregateInputType
  }

  export type GetCustomerProfileAggregateType<T extends CustomerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerProfile[P]>
      : GetScalarType<T[P], AggregateCustomerProfile[P]>
  }




  export type CustomerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerProfileWhereInput
    orderBy?: CustomerProfileOrderByWithAggregationInput | CustomerProfileOrderByWithAggregationInput[]
    by: CustomerProfileScalarFieldEnum[] | CustomerProfileScalarFieldEnum
    having?: CustomerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerProfileCountAggregateInputType | true
    _avg?: CustomerProfileAvgAggregateInputType
    _sum?: CustomerProfileSumAggregateInputType
    _min?: CustomerProfileMinAggregateInputType
    _max?: CustomerProfileMaxAggregateInputType
  }

  export type CustomerProfileGroupByOutputType = {
    id: number
    company_name: string | null
    position: string | null
    user_id: string
    created_at: Date
    updated_at: Date
    _count: CustomerProfileCountAggregateOutputType | null
    _avg: CustomerProfileAvgAggregateOutputType | null
    _sum: CustomerProfileSumAggregateOutputType | null
    _min: CustomerProfileMinAggregateOutputType | null
    _max: CustomerProfileMaxAggregateOutputType | null
  }

  type GetCustomerProfileGroupByPayload<T extends CustomerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerProfileGroupByOutputType[P]>
        }
      >
    >


  export type CustomerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    position?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerProfile"]>

  export type CustomerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    position?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerProfile"]>

  export type CustomerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    position?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerProfile"]>

  export type CustomerProfileSelectScalar = {
    id?: boolean
    company_name?: boolean
    position?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CustomerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "position" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["customerProfile"]>
  export type CustomerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerProfile"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      company_name: string | null
      position: string | null
      user_id: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customerProfile"]>
    composites: {}
  }

  type CustomerProfileGetPayload<S extends boolean | null | undefined | CustomerProfileDefaultArgs> = $Result.GetResult<Prisma.$CustomerProfilePayload, S>

  type CustomerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerProfileCountAggregateInputType | true
    }

  export interface CustomerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerProfile'], meta: { name: 'CustomerProfile' } }
    /**
     * Find zero or one CustomerProfile that matches the filter.
     * @param {CustomerProfileFindUniqueArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerProfileFindUniqueArgs>(args: SelectSubset<T, CustomerProfileFindUniqueArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerProfileFindUniqueOrThrowArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindFirstArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerProfileFindFirstArgs>(args?: SelectSubset<T, CustomerProfileFindFirstArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindFirstOrThrowArgs} args - Arguments to find a CustomerProfile
     * @example
     * // Get one CustomerProfile
     * const customerProfile = await prisma.customerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerProfiles
     * const customerProfiles = await prisma.customerProfile.findMany()
     * 
     * // Get first 10 CustomerProfiles
     * const customerProfiles = await prisma.customerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerProfileWithIdOnly = await prisma.customerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerProfileFindManyArgs>(args?: SelectSubset<T, CustomerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerProfile.
     * @param {CustomerProfileCreateArgs} args - Arguments to create a CustomerProfile.
     * @example
     * // Create one CustomerProfile
     * const CustomerProfile = await prisma.customerProfile.create({
     *   data: {
     *     // ... data to create a CustomerProfile
     *   }
     * })
     * 
     */
    create<T extends CustomerProfileCreateArgs>(args: SelectSubset<T, CustomerProfileCreateArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerProfiles.
     * @param {CustomerProfileCreateManyArgs} args - Arguments to create many CustomerProfiles.
     * @example
     * // Create many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerProfileCreateManyArgs>(args?: SelectSubset<T, CustomerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerProfiles and returns the data saved in the database.
     * @param {CustomerProfileCreateManyAndReturnArgs} args - Arguments to create many CustomerProfiles.
     * @example
     * // Create many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerProfiles and only return the `id`
     * const customerProfileWithIdOnly = await prisma.customerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerProfile.
     * @param {CustomerProfileDeleteArgs} args - Arguments to delete one CustomerProfile.
     * @example
     * // Delete one CustomerProfile
     * const CustomerProfile = await prisma.customerProfile.delete({
     *   where: {
     *     // ... filter to delete one CustomerProfile
     *   }
     * })
     * 
     */
    delete<T extends CustomerProfileDeleteArgs>(args: SelectSubset<T, CustomerProfileDeleteArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerProfile.
     * @param {CustomerProfileUpdateArgs} args - Arguments to update one CustomerProfile.
     * @example
     * // Update one CustomerProfile
     * const customerProfile = await prisma.customerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerProfileUpdateArgs>(args: SelectSubset<T, CustomerProfileUpdateArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerProfiles.
     * @param {CustomerProfileDeleteManyArgs} args - Arguments to filter CustomerProfiles to delete.
     * @example
     * // Delete a few CustomerProfiles
     * const { count } = await prisma.customerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerProfileDeleteManyArgs>(args?: SelectSubset<T, CustomerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerProfileUpdateManyArgs>(args: SelectSubset<T, CustomerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerProfiles and returns the data updated in the database.
     * @param {CustomerProfileUpdateManyAndReturnArgs} args - Arguments to update many CustomerProfiles.
     * @example
     * // Update many CustomerProfiles
     * const customerProfile = await prisma.customerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerProfiles and only return the `id`
     * const customerProfileWithIdOnly = await prisma.customerProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerProfile.
     * @param {CustomerProfileUpsertArgs} args - Arguments to update or create a CustomerProfile.
     * @example
     * // Update or create a CustomerProfile
     * const customerProfile = await prisma.customerProfile.upsert({
     *   create: {
     *     // ... data to create a CustomerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerProfile we want to update
     *   }
     * })
     */
    upsert<T extends CustomerProfileUpsertArgs>(args: SelectSubset<T, CustomerProfileUpsertArgs<ExtArgs>>): Prisma__CustomerProfileClient<$Result.GetResult<Prisma.$CustomerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileCountArgs} args - Arguments to filter CustomerProfiles to count.
     * @example
     * // Count the number of CustomerProfiles
     * const count = await prisma.customerProfile.count({
     *   where: {
     *     // ... the filter for the CustomerProfiles we want to count
     *   }
     * })
    **/
    count<T extends CustomerProfileCountArgs>(
      args?: Subset<T, CustomerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerProfileAggregateArgs>(args: Subset<T, CustomerProfileAggregateArgs>): Prisma.PrismaPromise<GetCustomerProfileAggregateType<T>>

    /**
     * Group by CustomerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerProfileGroupByArgs} args - Group by arguments.
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
      T extends CustomerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerProfileGroupByArgs['orderBy'] }
        : { orderBy?: CustomerProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerProfile model
   */
  readonly fields: CustomerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomerProfile model
   */
  interface CustomerProfileFieldRefs {
    readonly id: FieldRef<"CustomerProfile", 'Int'>
    readonly company_name: FieldRef<"CustomerProfile", 'String'>
    readonly position: FieldRef<"CustomerProfile", 'String'>
    readonly user_id: FieldRef<"CustomerProfile", 'String'>
    readonly created_at: FieldRef<"CustomerProfile", 'DateTime'>
    readonly updated_at: FieldRef<"CustomerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerProfile findUnique
   */
  export type CustomerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile findUniqueOrThrow
   */
  export type CustomerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile findFirst
   */
  export type CustomerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile findFirstOrThrow
   */
  export type CustomerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfile to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerProfiles.
     */
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile findMany
   */
  export type CustomerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter, which CustomerProfiles to fetch.
     */
    where?: CustomerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerProfiles to fetch.
     */
    orderBy?: CustomerProfileOrderByWithRelationInput | CustomerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerProfiles.
     */
    cursor?: CustomerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerProfiles.
     */
    skip?: number
    distinct?: CustomerProfileScalarFieldEnum | CustomerProfileScalarFieldEnum[]
  }

  /**
   * CustomerProfile create
   */
  export type CustomerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerProfile.
     */
    data: XOR<CustomerProfileCreateInput, CustomerProfileUncheckedCreateInput>
  }

  /**
   * CustomerProfile createMany
   */
  export type CustomerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerProfiles.
     */
    data: CustomerProfileCreateManyInput | CustomerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerProfile createManyAndReturn
   */
  export type CustomerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerProfiles.
     */
    data: CustomerProfileCreateManyInput | CustomerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerProfile update
   */
  export type CustomerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerProfile.
     */
    data: XOR<CustomerProfileUpdateInput, CustomerProfileUncheckedUpdateInput>
    /**
     * Choose, which CustomerProfile to update.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile updateMany
   */
  export type CustomerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerProfiles.
     */
    data: XOR<CustomerProfileUpdateManyMutationInput, CustomerProfileUncheckedUpdateManyInput>
    /**
     * Filter which CustomerProfiles to update
     */
    where?: CustomerProfileWhereInput
    /**
     * Limit how many CustomerProfiles to update.
     */
    limit?: number
  }

  /**
   * CustomerProfile updateManyAndReturn
   */
  export type CustomerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * The data used to update CustomerProfiles.
     */
    data: XOR<CustomerProfileUpdateManyMutationInput, CustomerProfileUncheckedUpdateManyInput>
    /**
     * Filter which CustomerProfiles to update
     */
    where?: CustomerProfileWhereInput
    /**
     * Limit how many CustomerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerProfile upsert
   */
  export type CustomerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerProfile to update in case it exists.
     */
    where: CustomerProfileWhereUniqueInput
    /**
     * In case the CustomerProfile found by the `where` argument doesn't exist, create a new CustomerProfile with this data.
     */
    create: XOR<CustomerProfileCreateInput, CustomerProfileUncheckedCreateInput>
    /**
     * In case the CustomerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerProfileUpdateInput, CustomerProfileUncheckedUpdateInput>
  }

  /**
   * CustomerProfile delete
   */
  export type CustomerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
    /**
     * Filter which CustomerProfile to delete.
     */
    where: CustomerProfileWhereUniqueInput
  }

  /**
   * CustomerProfile deleteMany
   */
  export type CustomerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerProfiles to delete
     */
    where?: CustomerProfileWhereInput
    /**
     * Limit how many CustomerProfiles to delete.
     */
    limit?: number
  }

  /**
   * CustomerProfile without action
   */
  export type CustomerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerProfile
     */
    select?: CustomerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerProfile
     */
    omit?: CustomerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerProfileInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetTokens
   */

  export type AggregatePasswordResetTokens = {
    _count: PasswordResetTokensCountAggregateOutputType | null
    _min: PasswordResetTokensMinAggregateOutputType | null
    _max: PasswordResetTokensMaxAggregateOutputType | null
  }

  export type PasswordResetTokensMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_expires: Date | null
    created_at: Date | null
  }

  export type PasswordResetTokensMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    token_expires: Date | null
    created_at: Date | null
  }

  export type PasswordResetTokensCountAggregateOutputType = {
    id: number
    user_id: number
    token_expires: number
    created_at: number
    _all: number
  }


  export type PasswordResetTokensMinAggregateInputType = {
    id?: true
    user_id?: true
    token_expires?: true
    created_at?: true
  }

  export type PasswordResetTokensMaxAggregateInputType = {
    id?: true
    user_id?: true
    token_expires?: true
    created_at?: true
  }

  export type PasswordResetTokensCountAggregateInputType = {
    id?: true
    user_id?: true
    token_expires?: true
    created_at?: true
    _all?: true
  }

  export type PasswordResetTokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to aggregate.
     */
    where?: PasswordResetTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokensOrderByWithRelationInput | PasswordResetTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokensMaxAggregateInputType
  }

  export type GetPasswordResetTokensAggregateType<T extends PasswordResetTokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetTokens[P]>
      : GetScalarType<T[P], AggregatePasswordResetTokens[P]>
  }




  export type PasswordResetTokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokensWhereInput
    orderBy?: PasswordResetTokensOrderByWithAggregationInput | PasswordResetTokensOrderByWithAggregationInput[]
    by: PasswordResetTokensScalarFieldEnum[] | PasswordResetTokensScalarFieldEnum
    having?: PasswordResetTokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokensCountAggregateInputType | true
    _min?: PasswordResetTokensMinAggregateInputType
    _max?: PasswordResetTokensMaxAggregateInputType
  }

  export type PasswordResetTokensGroupByOutputType = {
    id: string
    user_id: string
    token_expires: Date
    created_at: Date
    _count: PasswordResetTokensCountAggregateOutputType | null
    _min: PasswordResetTokensMinAggregateOutputType | null
    _max: PasswordResetTokensMaxAggregateOutputType | null
  }

  type GetPasswordResetTokensGroupByPayload<T extends PasswordResetTokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokensGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokensGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_expires?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetTokens"]>

  export type PasswordResetTokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_expires?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetTokens"]>

  export type PasswordResetTokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token_expires?: boolean
    created_at?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetTokens"]>

  export type PasswordResetTokensSelectScalar = {
    id?: boolean
    user_id?: boolean
    token_expires?: boolean
    created_at?: boolean
  }

  export type PasswordResetTokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token_expires" | "created_at", ExtArgs["result"]["passwordResetTokens"]>
  export type PasswordResetTokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetTokens"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      token_expires: Date
      created_at: Date
    }, ExtArgs["result"]["passwordResetTokens"]>
    composites: {}
  }

  type PasswordResetTokensGetPayload<S extends boolean | null | undefined | PasswordResetTokensDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokensPayload, S>

  type PasswordResetTokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokensCountAggregateInputType | true
    }

  export interface PasswordResetTokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetTokens'], meta: { name: 'PasswordResetTokens' } }
    /**
     * Find zero or one PasswordResetTokens that matches the filter.
     * @param {PasswordResetTokensFindUniqueArgs} args - Arguments to find a PasswordResetTokens
     * @example
     * // Get one PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokensFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokensFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetTokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokensFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetTokens
     * @example
     * // Get one PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokensFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensFindFirstArgs} args - Arguments to find a PasswordResetTokens
     * @example
     * // Get one PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokensFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokensFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetTokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensFindFirstOrThrowArgs} args - Arguments to find a PasswordResetTokens
     * @example
     * // Get one PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokensFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokensWithIdOnly = await prisma.passwordResetTokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokensFindManyArgs>(args?: SelectSubset<T, PasswordResetTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetTokens.
     * @param {PasswordResetTokensCreateArgs} args - Arguments to create a PasswordResetTokens.
     * @example
     * // Create one PasswordResetTokens
     * const PasswordResetTokens = await prisma.passwordResetTokens.create({
     *   data: {
     *     // ... data to create a PasswordResetTokens
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokensCreateArgs>(args: SelectSubset<T, PasswordResetTokensCreateArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokensCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokensCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokensCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokensWithIdOnly = await prisma.passwordResetTokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokensCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetTokens.
     * @param {PasswordResetTokensDeleteArgs} args - Arguments to delete one PasswordResetTokens.
     * @example
     * // Delete one PasswordResetTokens
     * const PasswordResetTokens = await prisma.passwordResetTokens.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetTokens
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokensDeleteArgs>(args: SelectSubset<T, PasswordResetTokensDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetTokens.
     * @param {PasswordResetTokensUpdateArgs} args - Arguments to update one PasswordResetTokens.
     * @example
     * // Update one PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokensUpdateArgs>(args: SelectSubset<T, PasswordResetTokensUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokensDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetTokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokensDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokensUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokensUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokensWithIdOnly = await prisma.passwordResetTokens.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetTokensUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetTokens.
     * @param {PasswordResetTokensUpsertArgs} args - Arguments to update or create a PasswordResetTokens.
     * @example
     * // Update or create a PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetTokens.upsert({
     *   create: {
     *     // ... data to create a PasswordResetTokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokensUpsertArgs>(args: SelectSubset<T, PasswordResetTokensUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokensClient<$Result.GetResult<Prisma.$PasswordResetTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetTokens.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokensCountArgs>(
      args?: Subset<T, PasswordResetTokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokensAggregateArgs>(args: Subset<T, PasswordResetTokensAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokensAggregateType<T>>

    /**
     * Group by PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokensGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokensGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetTokens model
   */
  readonly fields: PasswordResetTokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetTokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PasswordResetTokens model
   */
  interface PasswordResetTokensFieldRefs {
    readonly id: FieldRef<"PasswordResetTokens", 'String'>
    readonly user_id: FieldRef<"PasswordResetTokens", 'String'>
    readonly token_expires: FieldRef<"PasswordResetTokens", 'DateTime'>
    readonly created_at: FieldRef<"PasswordResetTokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetTokens findUnique
   */
  export type PasswordResetTokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where: PasswordResetTokensWhereUniqueInput
  }

  /**
   * PasswordResetTokens findUniqueOrThrow
   */
  export type PasswordResetTokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where: PasswordResetTokensWhereUniqueInput
  }

  /**
   * PasswordResetTokens findFirst
   */
  export type PasswordResetTokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokensOrderByWithRelationInput | PasswordResetTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokensScalarFieldEnum | PasswordResetTokensScalarFieldEnum[]
  }

  /**
   * PasswordResetTokens findFirstOrThrow
   */
  export type PasswordResetTokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokensOrderByWithRelationInput | PasswordResetTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokensScalarFieldEnum | PasswordResetTokensScalarFieldEnum[]
  }

  /**
   * PasswordResetTokens findMany
   */
  export type PasswordResetTokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokensOrderByWithRelationInput | PasswordResetTokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokensScalarFieldEnum | PasswordResetTokensScalarFieldEnum[]
  }

  /**
   * PasswordResetTokens create
   */
  export type PasswordResetTokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetTokens.
     */
    data: XOR<PasswordResetTokensCreateInput, PasswordResetTokensUncheckedCreateInput>
  }

  /**
   * PasswordResetTokens createMany
   */
  export type PasswordResetTokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokensCreateManyInput | PasswordResetTokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetTokens createManyAndReturn
   */
  export type PasswordResetTokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokensCreateManyInput | PasswordResetTokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetTokens update
   */
  export type PasswordResetTokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetTokens.
     */
    data: XOR<PasswordResetTokensUpdateInput, PasswordResetTokensUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetTokens to update.
     */
    where: PasswordResetTokensWhereUniqueInput
  }

  /**
   * PasswordResetTokens updateMany
   */
  export type PasswordResetTokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokensUpdateManyMutationInput, PasswordResetTokensUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokensWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetTokens updateManyAndReturn
   */
  export type PasswordResetTokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokensUpdateManyMutationInput, PasswordResetTokensUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokensWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetTokens upsert
   */
  export type PasswordResetTokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetTokens to update in case it exists.
     */
    where: PasswordResetTokensWhereUniqueInput
    /**
     * In case the PasswordResetTokens found by the `where` argument doesn't exist, create a new PasswordResetTokens with this data.
     */
    create: XOR<PasswordResetTokensCreateInput, PasswordResetTokensUncheckedCreateInput>
    /**
     * In case the PasswordResetTokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokensUpdateInput, PasswordResetTokensUncheckedUpdateInput>
  }

  /**
   * PasswordResetTokens delete
   */
  export type PasswordResetTokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetTokens to delete.
     */
    where: PasswordResetTokensWhereUniqueInput
  }

  /**
   * PasswordResetTokens deleteMany
   */
  export type PasswordResetTokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokensWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetTokens without action
   */
  export type PasswordResetTokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetTokens
     */
    select?: PasswordResetTokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetTokens
     */
    omit?: PasswordResetTokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokensInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    created_at: Date | null
    updated_at: Date | null
    expires_at: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    created_at: Date | null
    updated_at: Date | null
    expires_at: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    company_id: number
    created_at: number
    updated_at: number
    expires_at: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    company_id?: true
    created_at?: true
    updated_at?: true
    expires_at?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    company_id?: true
    created_at?: true
    updated_at?: true
    expires_at?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    company_id?: true
    created_at?: true
    updated_at?: true
    expires_at?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    company_id: string
    created_at: Date
    updated_at: Date
    expires_at: Date | null
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    expires_at?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    expires_at?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    expires_at?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    company_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    expires_at?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "created_at" | "updated_at" | "expires_at", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      created_at: Date
      updated_at: Date
      expires_at: Date | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly company_id: FieldRef<"Subscription", 'String'>
    readonly created_at: FieldRef<"Subscription", 'DateTime'>
    readonly updated_at: FieldRef<"Subscription", 'DateTime'>
    readonly expires_at: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  export type AnalysisAvgAggregateOutputType = {
    max_number_of_participants: number | null
    min_age: number | null
    max_age: number | null
    min_yearly_income: number | null
    max_yearly_income: number | null
    available_spots: number | null
  }

  export type AnalysisSumAggregateOutputType = {
    max_number_of_participants: number | null
    min_age: number | null
    max_age: number | null
    min_yearly_income: number | null
    max_yearly_income: number | null
    available_spots: number | null
  }

  export type AnalysisMinAggregateOutputType = {
    id: string | null
    owner_company_id: string | null
    device: $Enums.DeviceType | null
    name: string | null
    scenario: string | null
    created_by: string | null
    url: string | null
    status: $Enums.AnalysisStatus | null
    created_at: Date | null
    updated_at: Date | null
    max_number_of_participants: number | null
    recruitment_type: $Enums.RecruitmentType | null
    min_age: number | null
    max_age: number | null
    gender: $Enums.Genders | null
    country: $Enums.Country | null
    education_level: $Enums.EducationLevel | null
    min_yearly_income: number | null
    max_yearly_income: number | null
    technical_proficiency: $Enums.TechnicalProficiency | null
    parental_status: $Enums.ParentalStatus | null
    available_spots: number | null
  }

  export type AnalysisMaxAggregateOutputType = {
    id: string | null
    owner_company_id: string | null
    device: $Enums.DeviceType | null
    name: string | null
    scenario: string | null
    created_by: string | null
    url: string | null
    status: $Enums.AnalysisStatus | null
    created_at: Date | null
    updated_at: Date | null
    max_number_of_participants: number | null
    recruitment_type: $Enums.RecruitmentType | null
    min_age: number | null
    max_age: number | null
    gender: $Enums.Genders | null
    country: $Enums.Country | null
    education_level: $Enums.EducationLevel | null
    min_yearly_income: number | null
    max_yearly_income: number | null
    technical_proficiency: $Enums.TechnicalProficiency | null
    parental_status: $Enums.ParentalStatus | null
    available_spots: number | null
  }

  export type AnalysisCountAggregateOutputType = {
    id: number
    owner_company_id: number
    device: number
    name: number
    scenario: number
    created_by: number
    tasks: number
    url: number
    status: number
    created_at: number
    updated_at: number
    max_number_of_participants: number
    recruitment_type: number
    min_age: number
    max_age: number
    gender: number
    country: number
    education_level: number
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: number
    parental_status: number
    available_spots: number
    _all: number
  }


  export type AnalysisAvgAggregateInputType = {
    max_number_of_participants?: true
    min_age?: true
    max_age?: true
    min_yearly_income?: true
    max_yearly_income?: true
    available_spots?: true
  }

  export type AnalysisSumAggregateInputType = {
    max_number_of_participants?: true
    min_age?: true
    max_age?: true
    min_yearly_income?: true
    max_yearly_income?: true
    available_spots?: true
  }

  export type AnalysisMinAggregateInputType = {
    id?: true
    owner_company_id?: true
    device?: true
    name?: true
    scenario?: true
    created_by?: true
    url?: true
    status?: true
    created_at?: true
    updated_at?: true
    max_number_of_participants?: true
    recruitment_type?: true
    min_age?: true
    max_age?: true
    gender?: true
    country?: true
    education_level?: true
    min_yearly_income?: true
    max_yearly_income?: true
    technical_proficiency?: true
    parental_status?: true
    available_spots?: true
  }

  export type AnalysisMaxAggregateInputType = {
    id?: true
    owner_company_id?: true
    device?: true
    name?: true
    scenario?: true
    created_by?: true
    url?: true
    status?: true
    created_at?: true
    updated_at?: true
    max_number_of_participants?: true
    recruitment_type?: true
    min_age?: true
    max_age?: true
    gender?: true
    country?: true
    education_level?: true
    min_yearly_income?: true
    max_yearly_income?: true
    technical_proficiency?: true
    parental_status?: true
    available_spots?: true
  }

  export type AnalysisCountAggregateInputType = {
    id?: true
    owner_company_id?: true
    device?: true
    name?: true
    scenario?: true
    created_by?: true
    tasks?: true
    url?: true
    status?: true
    created_at?: true
    updated_at?: true
    max_number_of_participants?: true
    recruitment_type?: true
    min_age?: true
    max_age?: true
    gender?: true
    country?: true
    education_level?: true
    min_yearly_income?: true
    max_yearly_income?: true
    technical_proficiency?: true
    parental_status?: true
    available_spots?: true
    _all?: true
  }

  export type AnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analysis to aggregate.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisMaxAggregateInputType
  }

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>
  }




  export type AnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithAggregationInput | AnalysisOrderByWithAggregationInput[]
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum
    having?: AnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCountAggregateInputType | true
    _avg?: AnalysisAvgAggregateInputType
    _sum?: AnalysisSumAggregateInputType
    _min?: AnalysisMinAggregateInputType
    _max?: AnalysisMaxAggregateInputType
  }

  export type AnalysisGroupByOutputType = {
    id: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario: string | null
    created_by: string
    tasks: JsonValue
    url: string
    status: $Enums.AnalysisStatus
    created_at: Date
    updated_at: Date
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  type GetAnalysisGroupByPayload<T extends AnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_company_id?: boolean
    device?: boolean
    name?: boolean
    scenario?: boolean
    created_by?: boolean
    tasks?: boolean
    url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    max_number_of_participants?: boolean
    recruitment_type?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    country?: boolean
    education_level?: boolean
    min_yearly_income?: boolean
    max_yearly_income?: boolean
    technical_proficiency?: boolean
    parental_status?: boolean
    available_spots?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | Analysis$AnalysisEntryArgs<ExtArgs>
    _count?: boolean | AnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_company_id?: boolean
    device?: boolean
    name?: boolean
    scenario?: boolean
    created_by?: boolean
    tasks?: boolean
    url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    max_number_of_participants?: boolean
    recruitment_type?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    country?: boolean
    education_level?: boolean
    min_yearly_income?: boolean
    max_yearly_income?: boolean
    technical_proficiency?: boolean
    parental_status?: boolean
    available_spots?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_company_id?: boolean
    device?: boolean
    name?: boolean
    scenario?: boolean
    created_by?: boolean
    tasks?: boolean
    url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    max_number_of_participants?: boolean
    recruitment_type?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    country?: boolean
    education_level?: boolean
    min_yearly_income?: boolean
    max_yearly_income?: boolean
    technical_proficiency?: boolean
    parental_status?: boolean
    available_spots?: boolean
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectScalar = {
    id?: boolean
    owner_company_id?: boolean
    device?: boolean
    name?: boolean
    scenario?: boolean
    created_by?: boolean
    tasks?: boolean
    url?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    max_number_of_participants?: boolean
    recruitment_type?: boolean
    min_age?: boolean
    max_age?: boolean
    gender?: boolean
    country?: boolean
    education_level?: boolean
    min_yearly_income?: boolean
    max_yearly_income?: boolean
    technical_proficiency?: boolean
    parental_status?: boolean
    available_spots?: boolean
  }

  export type AnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_company_id" | "device" | "name" | "scenario" | "created_by" | "tasks" | "url" | "status" | "created_at" | "updated_at" | "max_number_of_participants" | "recruitment_type" | "min_age" | "max_age" | "gender" | "country" | "education_level" | "min_yearly_income" | "max_yearly_income" | "technical_proficiency" | "parental_status" | "available_spots", ExtArgs["result"]["analysis"]>
  export type AnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    AnalysisEntry?: boolean | Analysis$AnalysisEntryArgs<ExtArgs>
    _count?: boolean | AnalysisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analysis"
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      AnalysisEntry: Prisma.$AnalysisEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_company_id: string
      device: $Enums.DeviceType
      name: string
      scenario: string | null
      created_by: string
      tasks: Prisma.JsonValue
      url: string
      status: $Enums.AnalysisStatus
      created_at: Date
      updated_at: Date
      max_number_of_participants: number
      recruitment_type: $Enums.RecruitmentType
      min_age: number
      max_age: number
      gender: $Enums.Genders
      country: $Enums.Country
      education_level: $Enums.EducationLevel
      min_yearly_income: number
      max_yearly_income: number
      technical_proficiency: $Enums.TechnicalProficiency
      parental_status: $Enums.ParentalStatus
      available_spots: number
    }, ExtArgs["result"]["analysis"]>
    composites: {}
  }

  type AnalysisGetPayload<S extends boolean | null | undefined | AnalysisDefaultArgs> = $Result.GetResult<Prisma.$AnalysisPayload, S>

  type AnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisCountAggregateInputType | true
    }

  export interface AnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analysis'], meta: { name: 'Analysis' } }
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {AnalysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisFindUniqueArgs>(args: SelectSubset<T, AnalysisFindUniqueArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisFindFirstArgs>(args?: SelectSubset<T, AnalysisFindFirstArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisFindManyArgs>(args?: SelectSubset<T, AnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analysis.
     * @param {AnalysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     * 
     */
    create<T extends AnalysisCreateArgs>(args: SelectSubset<T, AnalysisCreateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analyses.
     * @param {AnalysisCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCreateManyArgs>(args?: SelectSubset<T, AnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysisCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analysis.
     * @param {AnalysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     * 
     */
    delete<T extends AnalysisDeleteArgs>(args: SelectSubset<T, AnalysisDeleteArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analysis.
     * @param {AnalysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisUpdateArgs>(args: SelectSubset<T, AnalysisUpdateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analyses.
     * @param {AnalysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisDeleteManyArgs>(args?: SelectSubset<T, AnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisUpdateManyArgs>(args: SelectSubset<T, AnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses and returns the data updated in the database.
     * @param {AnalysisUpdateManyAndReturnArgs} args - Arguments to update many Analyses.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analysis.
     * @param {AnalysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisUpsertArgs>(args: SelectSubset<T, AnalysisUpsertArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCountArgs>(
      args?: Subset<T, AnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisAggregateArgs>(args: Subset<T, AnalysisAggregateArgs>): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisGroupByArgs} args - Group by arguments.
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
      T extends AnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analysis model
   */
  readonly fields: AnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    AnalysisEntry<T extends Analysis$AnalysisEntryArgs<ExtArgs> = {}>(args?: Subset<T, Analysis$AnalysisEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Analysis model
   */
  interface AnalysisFieldRefs {
    readonly id: FieldRef<"Analysis", 'String'>
    readonly owner_company_id: FieldRef<"Analysis", 'String'>
    readonly device: FieldRef<"Analysis", 'DeviceType'>
    readonly name: FieldRef<"Analysis", 'String'>
    readonly scenario: FieldRef<"Analysis", 'String'>
    readonly created_by: FieldRef<"Analysis", 'String'>
    readonly tasks: FieldRef<"Analysis", 'Json'>
    readonly url: FieldRef<"Analysis", 'String'>
    readonly status: FieldRef<"Analysis", 'AnalysisStatus'>
    readonly created_at: FieldRef<"Analysis", 'DateTime'>
    readonly updated_at: FieldRef<"Analysis", 'DateTime'>
    readonly max_number_of_participants: FieldRef<"Analysis", 'Int'>
    readonly recruitment_type: FieldRef<"Analysis", 'RecruitmentType'>
    readonly min_age: FieldRef<"Analysis", 'Int'>
    readonly max_age: FieldRef<"Analysis", 'Int'>
    readonly gender: FieldRef<"Analysis", 'Genders'>
    readonly country: FieldRef<"Analysis", 'Country'>
    readonly education_level: FieldRef<"Analysis", 'EducationLevel'>
    readonly min_yearly_income: FieldRef<"Analysis", 'Int'>
    readonly max_yearly_income: FieldRef<"Analysis", 'Int'>
    readonly technical_proficiency: FieldRef<"Analysis", 'TechnicalProficiency'>
    readonly parental_status: FieldRef<"Analysis", 'ParentalStatus'>
    readonly available_spots: FieldRef<"Analysis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Analysis findUnique
   */
  export type AnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findUniqueOrThrow
   */
  export type AnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findFirst
   */
  export type AnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findFirstOrThrow
   */
  export type AnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findMany
   */
  export type AnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis create
   */
  export type AnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a Analysis.
     */
    data: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
  }

  /**
   * Analysis createMany
   */
  export type AnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analysis createManyAndReturn
   */
  export type AnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis update
   */
  export type AnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a Analysis.
     */
    data: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
    /**
     * Choose, which Analysis to update.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis updateMany
   */
  export type AnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
  }

  /**
   * Analysis updateManyAndReturn
   */
  export type AnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis upsert
   */
  export type AnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the Analysis to update in case it exists.
     */
    where: AnalysisWhereUniqueInput
    /**
     * In case the Analysis found by the `where` argument doesn't exist, create a new Analysis with this data.
     */
    create: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
    /**
     * In case the Analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
  }

  /**
   * Analysis delete
   */
  export type AnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter which Analysis to delete.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis deleteMany
   */
  export type AnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysisWhereInput
    /**
     * Limit how many Analyses to delete.
     */
    limit?: number
  }

  /**
   * Analysis.AnalysisEntry
   */
  export type Analysis$AnalysisEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    where?: AnalysisEntryWhereInput
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    cursor?: AnalysisEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * Analysis without action
   */
  export type AnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analysis
     */
    omit?: AnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisEntry
   */

  export type AggregateAnalysisEntry = {
    _count: AnalysisEntryCountAggregateOutputType | null
    _avg: AnalysisEntryAvgAggregateOutputType | null
    _sum: AnalysisEntrySumAggregateOutputType | null
    _min: AnalysisEntryMinAggregateOutputType | null
    _max: AnalysisEntryMaxAggregateOutputType | null
  }

  export type AnalysisEntryAvgAggregateOutputType = {
    ratingsId: number | null
  }

  export type AnalysisEntrySumAggregateOutputType = {
    ratingsId: number | null
  }

  export type AnalysisEntryMinAggregateOutputType = {
    id: string | null
    analysis_id: string | null
    user_id: string | null
    status: $Enums.AnalysisEntryCompletionStatus | null
    created_at: Date | null
    updated_at: Date | null
    full_transcript: string | null
    ratingsId: number | null
  }

  export type AnalysisEntryMaxAggregateOutputType = {
    id: string | null
    analysis_id: string | null
    user_id: string | null
    status: $Enums.AnalysisEntryCompletionStatus | null
    created_at: Date | null
    updated_at: Date | null
    full_transcript: string | null
    ratingsId: number | null
  }

  export type AnalysisEntryCountAggregateOutputType = {
    id: number
    analysis_id: number
    user_id: number
    status: number
    created_at: number
    updated_at: number
    transcription_segments: number
    full_transcript: number
    ratingsId: number
    _all: number
  }


  export type AnalysisEntryAvgAggregateInputType = {
    ratingsId?: true
  }

  export type AnalysisEntrySumAggregateInputType = {
    ratingsId?: true
  }

  export type AnalysisEntryMinAggregateInputType = {
    id?: true
    analysis_id?: true
    user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    full_transcript?: true
    ratingsId?: true
  }

  export type AnalysisEntryMaxAggregateInputType = {
    id?: true
    analysis_id?: true
    user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    full_transcript?: true
    ratingsId?: true
  }

  export type AnalysisEntryCountAggregateInputType = {
    id?: true
    analysis_id?: true
    user_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    transcription_segments?: true
    full_transcript?: true
    ratingsId?: true
    _all?: true
  }

  export type AnalysisEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisEntry to aggregate.
     */
    where?: AnalysisEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisEntries to fetch.
     */
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisEntries
    **/
    _count?: true | AnalysisEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisEntryMaxAggregateInputType
  }

  export type GetAnalysisEntryAggregateType<T extends AnalysisEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisEntry[P]>
      : GetScalarType<T[P], AggregateAnalysisEntry[P]>
  }




  export type AnalysisEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisEntryWhereInput
    orderBy?: AnalysisEntryOrderByWithAggregationInput | AnalysisEntryOrderByWithAggregationInput[]
    by: AnalysisEntryScalarFieldEnum[] | AnalysisEntryScalarFieldEnum
    having?: AnalysisEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisEntryCountAggregateInputType | true
    _avg?: AnalysisEntryAvgAggregateInputType
    _sum?: AnalysisEntrySumAggregateInputType
    _min?: AnalysisEntryMinAggregateInputType
    _max?: AnalysisEntryMaxAggregateInputType
  }

  export type AnalysisEntryGroupByOutputType = {
    id: string
    analysis_id: string
    user_id: string | null
    status: $Enums.AnalysisEntryCompletionStatus
    created_at: Date
    updated_at: Date
    transcription_segments: JsonValue | null
    full_transcript: string | null
    ratingsId: number | null
    _count: AnalysisEntryCountAggregateOutputType | null
    _avg: AnalysisEntryAvgAggregateOutputType | null
    _sum: AnalysisEntrySumAggregateOutputType | null
    _min: AnalysisEntryMinAggregateOutputType | null
    _max: AnalysisEntryMaxAggregateOutputType | null
  }

  type GetAnalysisEntryGroupByPayload<T extends AnalysisEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisEntryGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisEntryGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_id?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcription_segments?: boolean
    full_transcript?: boolean
    ratingsId?: boolean
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    transcriptionJob?: boolean | AnalysisEntry$transcriptionJobArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
    _count?: boolean | AnalysisEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisEntry"]>

  export type AnalysisEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_id?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcription_segments?: boolean
    full_transcript?: boolean
    ratingsId?: boolean
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
  }, ExtArgs["result"]["analysisEntry"]>

  export type AnalysisEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_id?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcription_segments?: boolean
    full_transcript?: boolean
    ratingsId?: boolean
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
  }, ExtArgs["result"]["analysisEntry"]>

  export type AnalysisEntrySelectScalar = {
    id?: boolean
    analysis_id?: boolean
    user_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcription_segments?: boolean
    full_transcript?: boolean
    ratingsId?: boolean
  }

  export type AnalysisEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "analysis_id" | "user_id" | "status" | "created_at" | "updated_at" | "transcription_segments" | "full_transcript" | "ratingsId", ExtArgs["result"]["analysisEntry"]>
  export type AnalysisEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    transcriptionJob?: boolean | AnalysisEntry$transcriptionJobArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
    _count?: boolean | AnalysisEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnalysisEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
  }
  export type AnalysisEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Analysis?: boolean | AnalysisDefaultArgs<ExtArgs>
    ParticipantProfile?: boolean | AnalysisEntry$ParticipantProfileArgs<ExtArgs>
    ratings?: boolean | AnalysisEntry$ratingsArgs<ExtArgs>
  }

  export type $AnalysisEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisEntry"
    objects: {
      Analysis: Prisma.$AnalysisPayload<ExtArgs>
      ParticipantProfile: Prisma.$ParticipantProfilePayload<ExtArgs> | null
      transcriptionJob: Prisma.$TranscriptionJobPayload<ExtArgs>[]
      ratings: Prisma.$ParticipantRatingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      analysis_id: string
      user_id: string | null
      status: $Enums.AnalysisEntryCompletionStatus
      created_at: Date
      updated_at: Date
      transcription_segments: Prisma.JsonValue | null
      full_transcript: string | null
      ratingsId: number | null
    }, ExtArgs["result"]["analysisEntry"]>
    composites: {}
  }

  type AnalysisEntryGetPayload<S extends boolean | null | undefined | AnalysisEntryDefaultArgs> = $Result.GetResult<Prisma.$AnalysisEntryPayload, S>

  type AnalysisEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisEntryCountAggregateInputType | true
    }

  export interface AnalysisEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisEntry'], meta: { name: 'AnalysisEntry' } }
    /**
     * Find zero or one AnalysisEntry that matches the filter.
     * @param {AnalysisEntryFindUniqueArgs} args - Arguments to find a AnalysisEntry
     * @example
     * // Get one AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisEntryFindUniqueArgs>(args: SelectSubset<T, AnalysisEntryFindUniqueArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisEntryFindUniqueOrThrowArgs} args - Arguments to find a AnalysisEntry
     * @example
     * // Get one AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryFindFirstArgs} args - Arguments to find a AnalysisEntry
     * @example
     * // Get one AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisEntryFindFirstArgs>(args?: SelectSubset<T, AnalysisEntryFindFirstArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryFindFirstOrThrowArgs} args - Arguments to find a AnalysisEntry
     * @example
     * // Get one AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisEntries
     * const analysisEntries = await prisma.analysisEntry.findMany()
     * 
     * // Get first 10 AnalysisEntries
     * const analysisEntries = await prisma.analysisEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisEntryWithIdOnly = await prisma.analysisEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisEntryFindManyArgs>(args?: SelectSubset<T, AnalysisEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisEntry.
     * @param {AnalysisEntryCreateArgs} args - Arguments to create a AnalysisEntry.
     * @example
     * // Create one AnalysisEntry
     * const AnalysisEntry = await prisma.analysisEntry.create({
     *   data: {
     *     // ... data to create a AnalysisEntry
     *   }
     * })
     * 
     */
    create<T extends AnalysisEntryCreateArgs>(args: SelectSubset<T, AnalysisEntryCreateArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisEntries.
     * @param {AnalysisEntryCreateManyArgs} args - Arguments to create many AnalysisEntries.
     * @example
     * // Create many AnalysisEntries
     * const analysisEntry = await prisma.analysisEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisEntryCreateManyArgs>(args?: SelectSubset<T, AnalysisEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisEntries and returns the data saved in the database.
     * @param {AnalysisEntryCreateManyAndReturnArgs} args - Arguments to create many AnalysisEntries.
     * @example
     * // Create many AnalysisEntries
     * const analysisEntry = await prisma.analysisEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisEntries and only return the `id`
     * const analysisEntryWithIdOnly = await prisma.analysisEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisEntry.
     * @param {AnalysisEntryDeleteArgs} args - Arguments to delete one AnalysisEntry.
     * @example
     * // Delete one AnalysisEntry
     * const AnalysisEntry = await prisma.analysisEntry.delete({
     *   where: {
     *     // ... filter to delete one AnalysisEntry
     *   }
     * })
     * 
     */
    delete<T extends AnalysisEntryDeleteArgs>(args: SelectSubset<T, AnalysisEntryDeleteArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisEntry.
     * @param {AnalysisEntryUpdateArgs} args - Arguments to update one AnalysisEntry.
     * @example
     * // Update one AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisEntryUpdateArgs>(args: SelectSubset<T, AnalysisEntryUpdateArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisEntries.
     * @param {AnalysisEntryDeleteManyArgs} args - Arguments to filter AnalysisEntries to delete.
     * @example
     * // Delete a few AnalysisEntries
     * const { count } = await prisma.analysisEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisEntryDeleteManyArgs>(args?: SelectSubset<T, AnalysisEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisEntries
     * const analysisEntry = await prisma.analysisEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisEntryUpdateManyArgs>(args: SelectSubset<T, AnalysisEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisEntries and returns the data updated in the database.
     * @param {AnalysisEntryUpdateManyAndReturnArgs} args - Arguments to update many AnalysisEntries.
     * @example
     * // Update many AnalysisEntries
     * const analysisEntry = await prisma.analysisEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisEntries and only return the `id`
     * const analysisEntryWithIdOnly = await prisma.analysisEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalysisEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisEntry.
     * @param {AnalysisEntryUpsertArgs} args - Arguments to update or create a AnalysisEntry.
     * @example
     * // Update or create a AnalysisEntry
     * const analysisEntry = await prisma.analysisEntry.upsert({
     *   create: {
     *     // ... data to create a AnalysisEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisEntry we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisEntryUpsertArgs>(args: SelectSubset<T, AnalysisEntryUpsertArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryCountArgs} args - Arguments to filter AnalysisEntries to count.
     * @example
     * // Count the number of AnalysisEntries
     * const count = await prisma.analysisEntry.count({
     *   where: {
     *     // ... the filter for the AnalysisEntries we want to count
     *   }
     * })
    **/
    count<T extends AnalysisEntryCountArgs>(
      args?: Subset<T, AnalysisEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisEntryAggregateArgs>(args: Subset<T, AnalysisEntryAggregateArgs>): Prisma.PrismaPromise<GetAnalysisEntryAggregateType<T>>

    /**
     * Group by AnalysisEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisEntryGroupByArgs} args - Group by arguments.
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
      T extends AnalysisEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisEntryGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisEntry model
   */
  readonly fields: AnalysisEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Analysis<T extends AnalysisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisDefaultArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ParticipantProfile<T extends AnalysisEntry$ParticipantProfileArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisEntry$ParticipantProfileArgs<ExtArgs>>): Prisma__ParticipantProfileClient<$Result.GetResult<Prisma.$ParticipantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transcriptionJob<T extends AnalysisEntry$transcriptionJobArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisEntry$transcriptionJobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends AnalysisEntry$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisEntry$ratingsArgs<ExtArgs>>): Prisma__ParticipantRatingClient<$Result.GetResult<Prisma.$ParticipantRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnalysisEntry model
   */
  interface AnalysisEntryFieldRefs {
    readonly id: FieldRef<"AnalysisEntry", 'String'>
    readonly analysis_id: FieldRef<"AnalysisEntry", 'String'>
    readonly user_id: FieldRef<"AnalysisEntry", 'String'>
    readonly status: FieldRef<"AnalysisEntry", 'AnalysisEntryCompletionStatus'>
    readonly created_at: FieldRef<"AnalysisEntry", 'DateTime'>
    readonly updated_at: FieldRef<"AnalysisEntry", 'DateTime'>
    readonly transcription_segments: FieldRef<"AnalysisEntry", 'Json'>
    readonly full_transcript: FieldRef<"AnalysisEntry", 'String'>
    readonly ratingsId: FieldRef<"AnalysisEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisEntry findUnique
   */
  export type AnalysisEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisEntry to fetch.
     */
    where: AnalysisEntryWhereUniqueInput
  }

  /**
   * AnalysisEntry findUniqueOrThrow
   */
  export type AnalysisEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisEntry to fetch.
     */
    where: AnalysisEntryWhereUniqueInput
  }

  /**
   * AnalysisEntry findFirst
   */
  export type AnalysisEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisEntry to fetch.
     */
    where?: AnalysisEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisEntries to fetch.
     */
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisEntries.
     */
    cursor?: AnalysisEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisEntries.
     */
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * AnalysisEntry findFirstOrThrow
   */
  export type AnalysisEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisEntry to fetch.
     */
    where?: AnalysisEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisEntries to fetch.
     */
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisEntries.
     */
    cursor?: AnalysisEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisEntries.
     */
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * AnalysisEntry findMany
   */
  export type AnalysisEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisEntries to fetch.
     */
    where?: AnalysisEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisEntries to fetch.
     */
    orderBy?: AnalysisEntryOrderByWithRelationInput | AnalysisEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisEntries.
     */
    cursor?: AnalysisEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisEntries.
     */
    skip?: number
    distinct?: AnalysisEntryScalarFieldEnum | AnalysisEntryScalarFieldEnum[]
  }

  /**
   * AnalysisEntry create
   */
  export type AnalysisEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisEntry.
     */
    data: XOR<AnalysisEntryCreateInput, AnalysisEntryUncheckedCreateInput>
  }

  /**
   * AnalysisEntry createMany
   */
  export type AnalysisEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisEntries.
     */
    data: AnalysisEntryCreateManyInput | AnalysisEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisEntry createManyAndReturn
   */
  export type AnalysisEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisEntries.
     */
    data: AnalysisEntryCreateManyInput | AnalysisEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisEntry update
   */
  export type AnalysisEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisEntry.
     */
    data: XOR<AnalysisEntryUpdateInput, AnalysisEntryUncheckedUpdateInput>
    /**
     * Choose, which AnalysisEntry to update.
     */
    where: AnalysisEntryWhereUniqueInput
  }

  /**
   * AnalysisEntry updateMany
   */
  export type AnalysisEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisEntries.
     */
    data: XOR<AnalysisEntryUpdateManyMutationInput, AnalysisEntryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisEntries to update
     */
    where?: AnalysisEntryWhereInput
    /**
     * Limit how many AnalysisEntries to update.
     */
    limit?: number
  }

  /**
   * AnalysisEntry updateManyAndReturn
   */
  export type AnalysisEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisEntries.
     */
    data: XOR<AnalysisEntryUpdateManyMutationInput, AnalysisEntryUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisEntries to update
     */
    where?: AnalysisEntryWhereInput
    /**
     * Limit how many AnalysisEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisEntry upsert
   */
  export type AnalysisEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisEntry to update in case it exists.
     */
    where: AnalysisEntryWhereUniqueInput
    /**
     * In case the AnalysisEntry found by the `where` argument doesn't exist, create a new AnalysisEntry with this data.
     */
    create: XOR<AnalysisEntryCreateInput, AnalysisEntryUncheckedCreateInput>
    /**
     * In case the AnalysisEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisEntryUpdateInput, AnalysisEntryUncheckedUpdateInput>
  }

  /**
   * AnalysisEntry delete
   */
  export type AnalysisEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
    /**
     * Filter which AnalysisEntry to delete.
     */
    where: AnalysisEntryWhereUniqueInput
  }

  /**
   * AnalysisEntry deleteMany
   */
  export type AnalysisEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisEntries to delete
     */
    where?: AnalysisEntryWhereInput
    /**
     * Limit how many AnalysisEntries to delete.
     */
    limit?: number
  }

  /**
   * AnalysisEntry.ParticipantProfile
   */
  export type AnalysisEntry$ParticipantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantProfile
     */
    select?: ParticipantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantProfile
     */
    omit?: ParticipantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantProfileInclude<ExtArgs> | null
    where?: ParticipantProfileWhereInput
  }

  /**
   * AnalysisEntry.transcriptionJob
   */
  export type AnalysisEntry$transcriptionJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    where?: TranscriptionJobWhereInput
    orderBy?: TranscriptionJobOrderByWithRelationInput | TranscriptionJobOrderByWithRelationInput[]
    cursor?: TranscriptionJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranscriptionJobScalarFieldEnum | TranscriptionJobScalarFieldEnum[]
  }

  /**
   * AnalysisEntry.ratings
   */
  export type AnalysisEntry$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantRating
     */
    select?: ParticipantRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantRating
     */
    omit?: ParticipantRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantRatingInclude<ExtArgs> | null
    where?: ParticipantRatingWhereInput
  }

  /**
   * AnalysisEntry without action
   */
  export type AnalysisEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisEntry
     */
    select?: AnalysisEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisEntry
     */
    omit?: AnalysisEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisEntryInclude<ExtArgs> | null
  }


  /**
   * Model TranscriptionJob
   */

  export type AggregateTranscriptionJob = {
    _count: TranscriptionJobCountAggregateOutputType | null
    _avg: TranscriptionJobAvgAggregateOutputType | null
    _sum: TranscriptionJobSumAggregateOutputType | null
    _min: TranscriptionJobMinAggregateOutputType | null
    _max: TranscriptionJobMaxAggregateOutputType | null
  }

  export type TranscriptionJobAvgAggregateOutputType = {
    id: number | null
  }

  export type TranscriptionJobSumAggregateOutputType = {
    id: number | null
  }

  export type TranscriptionJobMinAggregateOutputType = {
    id: number | null
    analysis_entry_id: string | null
    status: $Enums.TranscriptionJobStatus | null
    created_at: Date | null
    updated_at: Date | null
    language_code: string | null
  }

  export type TranscriptionJobMaxAggregateOutputType = {
    id: number | null
    analysis_entry_id: string | null
    status: $Enums.TranscriptionJobStatus | null
    created_at: Date | null
    updated_at: Date | null
    language_code: string | null
  }

  export type TranscriptionJobCountAggregateOutputType = {
    id: number
    analysis_entry_id: number
    status: number
    created_at: number
    updated_at: number
    language_code: number
    _all: number
  }


  export type TranscriptionJobAvgAggregateInputType = {
    id?: true
  }

  export type TranscriptionJobSumAggregateInputType = {
    id?: true
  }

  export type TranscriptionJobMinAggregateInputType = {
    id?: true
    analysis_entry_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    language_code?: true
  }

  export type TranscriptionJobMaxAggregateInputType = {
    id?: true
    analysis_entry_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    language_code?: true
  }

  export type TranscriptionJobCountAggregateInputType = {
    id?: true
    analysis_entry_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    language_code?: true
    _all?: true
  }

  export type TranscriptionJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptionJob to aggregate.
     */
    where?: TranscriptionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionJobs to fetch.
     */
    orderBy?: TranscriptionJobOrderByWithRelationInput | TranscriptionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranscriptionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranscriptionJobs
    **/
    _count?: true | TranscriptionJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranscriptionJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranscriptionJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranscriptionJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranscriptionJobMaxAggregateInputType
  }

  export type GetTranscriptionJobAggregateType<T extends TranscriptionJobAggregateArgs> = {
        [P in keyof T & keyof AggregateTranscriptionJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranscriptionJob[P]>
      : GetScalarType<T[P], AggregateTranscriptionJob[P]>
  }




  export type TranscriptionJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranscriptionJobWhereInput
    orderBy?: TranscriptionJobOrderByWithAggregationInput | TranscriptionJobOrderByWithAggregationInput[]
    by: TranscriptionJobScalarFieldEnum[] | TranscriptionJobScalarFieldEnum
    having?: TranscriptionJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranscriptionJobCountAggregateInputType | true
    _avg?: TranscriptionJobAvgAggregateInputType
    _sum?: TranscriptionJobSumAggregateInputType
    _min?: TranscriptionJobMinAggregateInputType
    _max?: TranscriptionJobMaxAggregateInputType
  }

  export type TranscriptionJobGroupByOutputType = {
    id: number
    analysis_entry_id: string
    status: $Enums.TranscriptionJobStatus
    created_at: Date
    updated_at: Date
    language_code: string
    _count: TranscriptionJobCountAggregateOutputType | null
    _avg: TranscriptionJobAvgAggregateOutputType | null
    _sum: TranscriptionJobSumAggregateOutputType | null
    _min: TranscriptionJobMinAggregateOutputType | null
    _max: TranscriptionJobMaxAggregateOutputType | null
  }

  type GetTranscriptionJobGroupByPayload<T extends TranscriptionJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranscriptionJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranscriptionJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranscriptionJobGroupByOutputType[P]>
            : GetScalarType<T[P], TranscriptionJobGroupByOutputType[P]>
        }
      >
    >


  export type TranscriptionJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_entry_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    language_code?: boolean
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptionJob"]>

  export type TranscriptionJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_entry_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    language_code?: boolean
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptionJob"]>

  export type TranscriptionJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    analysis_entry_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    language_code?: boolean
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transcriptionJob"]>

  export type TranscriptionJobSelectScalar = {
    id?: boolean
    analysis_entry_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    language_code?: boolean
  }

  export type TranscriptionJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "analysis_entry_id" | "status" | "created_at" | "updated_at" | "language_code", ExtArgs["result"]["transcriptionJob"]>
  export type TranscriptionJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }
  export type TranscriptionJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }
  export type TranscriptionJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AnalysisEntry?: boolean | AnalysisEntryDefaultArgs<ExtArgs>
  }

  export type $TranscriptionJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranscriptionJob"
    objects: {
      AnalysisEntry: Prisma.$AnalysisEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      analysis_entry_id: string
      status: $Enums.TranscriptionJobStatus
      created_at: Date
      updated_at: Date
      language_code: string
    }, ExtArgs["result"]["transcriptionJob"]>
    composites: {}
  }

  type TranscriptionJobGetPayload<S extends boolean | null | undefined | TranscriptionJobDefaultArgs> = $Result.GetResult<Prisma.$TranscriptionJobPayload, S>

  type TranscriptionJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranscriptionJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranscriptionJobCountAggregateInputType | true
    }

  export interface TranscriptionJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranscriptionJob'], meta: { name: 'TranscriptionJob' } }
    /**
     * Find zero or one TranscriptionJob that matches the filter.
     * @param {TranscriptionJobFindUniqueArgs} args - Arguments to find a TranscriptionJob
     * @example
     * // Get one TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranscriptionJobFindUniqueArgs>(args: SelectSubset<T, TranscriptionJobFindUniqueArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranscriptionJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranscriptionJobFindUniqueOrThrowArgs} args - Arguments to find a TranscriptionJob
     * @example
     * // Get one TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranscriptionJobFindUniqueOrThrowArgs>(args: SelectSubset<T, TranscriptionJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptionJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobFindFirstArgs} args - Arguments to find a TranscriptionJob
     * @example
     * // Get one TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranscriptionJobFindFirstArgs>(args?: SelectSubset<T, TranscriptionJobFindFirstArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranscriptionJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobFindFirstOrThrowArgs} args - Arguments to find a TranscriptionJob
     * @example
     * // Get one TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranscriptionJobFindFirstOrThrowArgs>(args?: SelectSubset<T, TranscriptionJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranscriptionJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranscriptionJobs
     * const transcriptionJobs = await prisma.transcriptionJob.findMany()
     * 
     * // Get first 10 TranscriptionJobs
     * const transcriptionJobs = await prisma.transcriptionJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transcriptionJobWithIdOnly = await prisma.transcriptionJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranscriptionJobFindManyArgs>(args?: SelectSubset<T, TranscriptionJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranscriptionJob.
     * @param {TranscriptionJobCreateArgs} args - Arguments to create a TranscriptionJob.
     * @example
     * // Create one TranscriptionJob
     * const TranscriptionJob = await prisma.transcriptionJob.create({
     *   data: {
     *     // ... data to create a TranscriptionJob
     *   }
     * })
     * 
     */
    create<T extends TranscriptionJobCreateArgs>(args: SelectSubset<T, TranscriptionJobCreateArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranscriptionJobs.
     * @param {TranscriptionJobCreateManyArgs} args - Arguments to create many TranscriptionJobs.
     * @example
     * // Create many TranscriptionJobs
     * const transcriptionJob = await prisma.transcriptionJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranscriptionJobCreateManyArgs>(args?: SelectSubset<T, TranscriptionJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranscriptionJobs and returns the data saved in the database.
     * @param {TranscriptionJobCreateManyAndReturnArgs} args - Arguments to create many TranscriptionJobs.
     * @example
     * // Create many TranscriptionJobs
     * const transcriptionJob = await prisma.transcriptionJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranscriptionJobs and only return the `id`
     * const transcriptionJobWithIdOnly = await prisma.transcriptionJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranscriptionJobCreateManyAndReturnArgs>(args?: SelectSubset<T, TranscriptionJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranscriptionJob.
     * @param {TranscriptionJobDeleteArgs} args - Arguments to delete one TranscriptionJob.
     * @example
     * // Delete one TranscriptionJob
     * const TranscriptionJob = await prisma.transcriptionJob.delete({
     *   where: {
     *     // ... filter to delete one TranscriptionJob
     *   }
     * })
     * 
     */
    delete<T extends TranscriptionJobDeleteArgs>(args: SelectSubset<T, TranscriptionJobDeleteArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranscriptionJob.
     * @param {TranscriptionJobUpdateArgs} args - Arguments to update one TranscriptionJob.
     * @example
     * // Update one TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranscriptionJobUpdateArgs>(args: SelectSubset<T, TranscriptionJobUpdateArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranscriptionJobs.
     * @param {TranscriptionJobDeleteManyArgs} args - Arguments to filter TranscriptionJobs to delete.
     * @example
     * // Delete a few TranscriptionJobs
     * const { count } = await prisma.transcriptionJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranscriptionJobDeleteManyArgs>(args?: SelectSubset<T, TranscriptionJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranscriptionJobs
     * const transcriptionJob = await prisma.transcriptionJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranscriptionJobUpdateManyArgs>(args: SelectSubset<T, TranscriptionJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranscriptionJobs and returns the data updated in the database.
     * @param {TranscriptionJobUpdateManyAndReturnArgs} args - Arguments to update many TranscriptionJobs.
     * @example
     * // Update many TranscriptionJobs
     * const transcriptionJob = await prisma.transcriptionJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranscriptionJobs and only return the `id`
     * const transcriptionJobWithIdOnly = await prisma.transcriptionJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends TranscriptionJobUpdateManyAndReturnArgs>(args: SelectSubset<T, TranscriptionJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranscriptionJob.
     * @param {TranscriptionJobUpsertArgs} args - Arguments to update or create a TranscriptionJob.
     * @example
     * // Update or create a TranscriptionJob
     * const transcriptionJob = await prisma.transcriptionJob.upsert({
     *   create: {
     *     // ... data to create a TranscriptionJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranscriptionJob we want to update
     *   }
     * })
     */
    upsert<T extends TranscriptionJobUpsertArgs>(args: SelectSubset<T, TranscriptionJobUpsertArgs<ExtArgs>>): Prisma__TranscriptionJobClient<$Result.GetResult<Prisma.$TranscriptionJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranscriptionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobCountArgs} args - Arguments to filter TranscriptionJobs to count.
     * @example
     * // Count the number of TranscriptionJobs
     * const count = await prisma.transcriptionJob.count({
     *   where: {
     *     // ... the filter for the TranscriptionJobs we want to count
     *   }
     * })
    **/
    count<T extends TranscriptionJobCountArgs>(
      args?: Subset<T, TranscriptionJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranscriptionJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranscriptionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranscriptionJobAggregateArgs>(args: Subset<T, TranscriptionJobAggregateArgs>): Prisma.PrismaPromise<GetTranscriptionJobAggregateType<T>>

    /**
     * Group by TranscriptionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranscriptionJobGroupByArgs} args - Group by arguments.
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
      T extends TranscriptionJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranscriptionJobGroupByArgs['orderBy'] }
        : { orderBy?: TranscriptionJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranscriptionJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranscriptionJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranscriptionJob model
   */
  readonly fields: TranscriptionJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranscriptionJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranscriptionJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AnalysisEntry<T extends AnalysisEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnalysisEntryDefaultArgs<ExtArgs>>): Prisma__AnalysisEntryClient<$Result.GetResult<Prisma.$AnalysisEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TranscriptionJob model
   */
  interface TranscriptionJobFieldRefs {
    readonly id: FieldRef<"TranscriptionJob", 'Int'>
    readonly analysis_entry_id: FieldRef<"TranscriptionJob", 'String'>
    readonly status: FieldRef<"TranscriptionJob", 'TranscriptionJobStatus'>
    readonly created_at: FieldRef<"TranscriptionJob", 'DateTime'>
    readonly updated_at: FieldRef<"TranscriptionJob", 'DateTime'>
    readonly language_code: FieldRef<"TranscriptionJob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TranscriptionJob findUnique
   */
  export type TranscriptionJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptionJob to fetch.
     */
    where: TranscriptionJobWhereUniqueInput
  }

  /**
   * TranscriptionJob findUniqueOrThrow
   */
  export type TranscriptionJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptionJob to fetch.
     */
    where: TranscriptionJobWhereUniqueInput
  }

  /**
   * TranscriptionJob findFirst
   */
  export type TranscriptionJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptionJob to fetch.
     */
    where?: TranscriptionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionJobs to fetch.
     */
    orderBy?: TranscriptionJobOrderByWithRelationInput | TranscriptionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptionJobs.
     */
    cursor?: TranscriptionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptionJobs.
     */
    distinct?: TranscriptionJobScalarFieldEnum | TranscriptionJobScalarFieldEnum[]
  }

  /**
   * TranscriptionJob findFirstOrThrow
   */
  export type TranscriptionJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptionJob to fetch.
     */
    where?: TranscriptionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionJobs to fetch.
     */
    orderBy?: TranscriptionJobOrderByWithRelationInput | TranscriptionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranscriptionJobs.
     */
    cursor?: TranscriptionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranscriptionJobs.
     */
    distinct?: TranscriptionJobScalarFieldEnum | TranscriptionJobScalarFieldEnum[]
  }

  /**
   * TranscriptionJob findMany
   */
  export type TranscriptionJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter, which TranscriptionJobs to fetch.
     */
    where?: TranscriptionJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranscriptionJobs to fetch.
     */
    orderBy?: TranscriptionJobOrderByWithRelationInput | TranscriptionJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranscriptionJobs.
     */
    cursor?: TranscriptionJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranscriptionJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranscriptionJobs.
     */
    skip?: number
    distinct?: TranscriptionJobScalarFieldEnum | TranscriptionJobScalarFieldEnum[]
  }

  /**
   * TranscriptionJob create
   */
  export type TranscriptionJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * The data needed to create a TranscriptionJob.
     */
    data: XOR<TranscriptionJobCreateInput, TranscriptionJobUncheckedCreateInput>
  }

  /**
   * TranscriptionJob createMany
   */
  export type TranscriptionJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranscriptionJobs.
     */
    data: TranscriptionJobCreateManyInput | TranscriptionJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranscriptionJob createManyAndReturn
   */
  export type TranscriptionJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * The data used to create many TranscriptionJobs.
     */
    data: TranscriptionJobCreateManyInput | TranscriptionJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscriptionJob update
   */
  export type TranscriptionJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * The data needed to update a TranscriptionJob.
     */
    data: XOR<TranscriptionJobUpdateInput, TranscriptionJobUncheckedUpdateInput>
    /**
     * Choose, which TranscriptionJob to update.
     */
    where: TranscriptionJobWhereUniqueInput
  }

  /**
   * TranscriptionJob updateMany
   */
  export type TranscriptionJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranscriptionJobs.
     */
    data: XOR<TranscriptionJobUpdateManyMutationInput, TranscriptionJobUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptionJobs to update
     */
    where?: TranscriptionJobWhereInput
    /**
     * Limit how many TranscriptionJobs to update.
     */
    limit?: number
  }

  /**
   * TranscriptionJob updateManyAndReturn
   */
  export type TranscriptionJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * The data used to update TranscriptionJobs.
     */
    data: XOR<TranscriptionJobUpdateManyMutationInput, TranscriptionJobUncheckedUpdateManyInput>
    /**
     * Filter which TranscriptionJobs to update
     */
    where?: TranscriptionJobWhereInput
    /**
     * Limit how many TranscriptionJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranscriptionJob upsert
   */
  export type TranscriptionJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * The filter to search for the TranscriptionJob to update in case it exists.
     */
    where: TranscriptionJobWhereUniqueInput
    /**
     * In case the TranscriptionJob found by the `where` argument doesn't exist, create a new TranscriptionJob with this data.
     */
    create: XOR<TranscriptionJobCreateInput, TranscriptionJobUncheckedCreateInput>
    /**
     * In case the TranscriptionJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranscriptionJobUpdateInput, TranscriptionJobUncheckedUpdateInput>
  }

  /**
   * TranscriptionJob delete
   */
  export type TranscriptionJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
    /**
     * Filter which TranscriptionJob to delete.
     */
    where: TranscriptionJobWhereUniqueInput
  }

  /**
   * TranscriptionJob deleteMany
   */
  export type TranscriptionJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranscriptionJobs to delete
     */
    where?: TranscriptionJobWhereInput
    /**
     * Limit how many TranscriptionJobs to delete.
     */
    limit?: number
  }

  /**
   * TranscriptionJob without action
   */
  export type TranscriptionJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranscriptionJob
     */
    select?: TranscriptionJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranscriptionJob
     */
    omit?: TranscriptionJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranscriptionJobInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    last_updated_at: 'last_updated_at',
    last_login_at: 'last_login_at',
    company_id: 'company_id',
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_content: 'utm_content',
    utm_term: 'utm_term',
    gclid: 'gclid',
    fbclid: 'fbclid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stripe_id: 'stripe_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ParticipantProfileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    last_name: 'last_name',
    nif: 'nif',
    payment_address: 'payment_address',
    birth_date: 'birth_date',
    gender: 'gender',
    country: 'country',
    available_devices: 'available_devices',
    education_level: 'education_level',
    yearly_income: 'yearly_income',
    parental_status: 'parental_status',
    technical_proficiency: 'technical_proficiency',
    approved: 'approved',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ParticipantProfileScalarFieldEnum = (typeof ParticipantProfileScalarFieldEnum)[keyof typeof ParticipantProfileScalarFieldEnum]


  export const ParticipantRatingScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    score: 'score'
  };

  export type ParticipantRatingScalarFieldEnum = (typeof ParticipantRatingScalarFieldEnum)[keyof typeof ParticipantRatingScalarFieldEnum]


  export const CustomerProfileScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    position: 'position',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomerProfileScalarFieldEnum = (typeof CustomerProfileScalarFieldEnum)[keyof typeof CustomerProfileScalarFieldEnum]


  export const PasswordResetTokensScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token_expires: 'token_expires',
    created_at: 'created_at'
  };

  export type PasswordResetTokensScalarFieldEnum = (typeof PasswordResetTokensScalarFieldEnum)[keyof typeof PasswordResetTokensScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    expires_at: 'expires_at'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const AnalysisScalarFieldEnum: {
    id: 'id',
    owner_company_id: 'owner_company_id',
    device: 'device',
    name: 'name',
    scenario: 'scenario',
    created_by: 'created_by',
    tasks: 'tasks',
    url: 'url',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    max_number_of_participants: 'max_number_of_participants',
    recruitment_type: 'recruitment_type',
    min_age: 'min_age',
    max_age: 'max_age',
    gender: 'gender',
    country: 'country',
    education_level: 'education_level',
    min_yearly_income: 'min_yearly_income',
    max_yearly_income: 'max_yearly_income',
    technical_proficiency: 'technical_proficiency',
    parental_status: 'parental_status',
    available_spots: 'available_spots'
  };

  export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum]


  export const AnalysisEntryScalarFieldEnum: {
    id: 'id',
    analysis_id: 'analysis_id',
    user_id: 'user_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    transcription_segments: 'transcription_segments',
    full_transcript: 'full_transcript',
    ratingsId: 'ratingsId'
  };

  export type AnalysisEntryScalarFieldEnum = (typeof AnalysisEntryScalarFieldEnum)[keyof typeof AnalysisEntryScalarFieldEnum]


  export const TranscriptionJobScalarFieldEnum: {
    id: 'id',
    analysis_entry_id: 'analysis_entry_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    language_code: 'language_code'
  };

  export type TranscriptionJobScalarFieldEnum = (typeof TranscriptionJobScalarFieldEnum)[keyof typeof TranscriptionJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'UserRoles[]'
   */
  export type ListEnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Genders'
   */
  export type EnumGendersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genders'>
    


  /**
   * Reference to a field of type 'Genders[]'
   */
  export type ListEnumGendersFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genders[]'>
    


  /**
   * Reference to a field of type 'Country'
   */
  export type EnumCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Country'>
    


  /**
   * Reference to a field of type 'Country[]'
   */
  export type ListEnumCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Country[]'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'ParentalStatus'
   */
  export type EnumParentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentalStatus'>
    


  /**
   * Reference to a field of type 'ParentalStatus[]'
   */
  export type ListEnumParentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParentalStatus[]'>
    


  /**
   * Reference to a field of type 'TechnicalProficiency'
   */
  export type EnumTechnicalProficiencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicalProficiency'>
    


  /**
   * Reference to a field of type 'TechnicalProficiency[]'
   */
  export type ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnicalProficiency[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AnalysisStatus'
   */
  export type EnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus'>
    


  /**
   * Reference to a field of type 'AnalysisStatus[]'
   */
  export type ListEnumAnalysisStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisStatus[]'>
    


  /**
   * Reference to a field of type 'RecruitmentType'
   */
  export type EnumRecruitmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecruitmentType'>
    


  /**
   * Reference to a field of type 'RecruitmentType[]'
   */
  export type ListEnumRecruitmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecruitmentType[]'>
    


  /**
   * Reference to a field of type 'AnalysisEntryCompletionStatus'
   */
  export type EnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisEntryCompletionStatus'>
    


  /**
   * Reference to a field of type 'AnalysisEntryCompletionStatus[]'
   */
  export type ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnalysisEntryCompletionStatus[]'>
    


  /**
   * Reference to a field of type 'TranscriptionJobStatus'
   */
  export type EnumTranscriptionJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranscriptionJobStatus'>
    


  /**
   * Reference to a field of type 'TranscriptionJobStatus[]'
   */
  export type ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TranscriptionJobStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeFilter<"User"> | Date | string
    last_updated_at?: DateTimeFilter<"User"> | Date | string
    last_login_at?: DateTimeNullableFilter<"User"> | Date | string | null
    company_id?: StringNullableFilter<"User"> | string | null
    utm_source?: StringNullableFilter<"User"> | string | null
    utm_medium?: StringNullableFilter<"User"> | string | null
    utm_campaign?: StringNullableFilter<"User"> | string | null
    utm_content?: StringNullableFilter<"User"> | string | null
    utm_term?: StringNullableFilter<"User"> | string | null
    gclid?: StringNullableFilter<"User"> | string | null
    fbclid?: StringNullableFilter<"User"> | string | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    PasswordResetTokens?: PasswordResetTokensListRelationFilter
    Analysis?: AnalysisListRelationFilter
    ParticipantProfile?: ParticipantProfileListRelationFilter
    CustomerProfile?: CustomerProfileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_updated_at?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    utm_source?: SortOrderInput | SortOrder
    utm_medium?: SortOrderInput | SortOrder
    utm_campaign?: SortOrderInput | SortOrder
    utm_content?: SortOrderInput | SortOrder
    utm_term?: SortOrderInput | SortOrder
    gclid?: SortOrderInput | SortOrder
    fbclid?: SortOrderInput | SortOrder
    Company?: CompanyOrderByWithRelationInput
    PasswordResetTokens?: PasswordResetTokensOrderByRelationAggregateInput
    Analysis?: AnalysisOrderByRelationAggregateInput
    ParticipantProfile?: ParticipantProfileOrderByRelationAggregateInput
    CustomerProfile?: CustomerProfileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeFilter<"User"> | Date | string
    last_updated_at?: DateTimeFilter<"User"> | Date | string
    last_login_at?: DateTimeNullableFilter<"User"> | Date | string | null
    company_id?: StringNullableFilter<"User"> | string | null
    utm_source?: StringNullableFilter<"User"> | string | null
    utm_medium?: StringNullableFilter<"User"> | string | null
    utm_campaign?: StringNullableFilter<"User"> | string | null
    utm_content?: StringNullableFilter<"User"> | string | null
    utm_term?: StringNullableFilter<"User"> | string | null
    gclid?: StringNullableFilter<"User"> | string | null
    fbclid?: StringNullableFilter<"User"> | string | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    PasswordResetTokens?: PasswordResetTokensListRelationFilter
    Analysis?: AnalysisListRelationFilter
    ParticipantProfile?: ParticipantProfileListRelationFilter
    CustomerProfile?: CustomerProfileListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_updated_at?: SortOrder
    last_login_at?: SortOrderInput | SortOrder
    company_id?: SortOrderInput | SortOrder
    utm_source?: SortOrderInput | SortOrder
    utm_medium?: SortOrderInput | SortOrder
    utm_campaign?: SortOrderInput | SortOrder
    utm_content?: SortOrderInput | SortOrder
    utm_term?: SortOrderInput | SortOrder
    gclid?: SortOrderInput | SortOrder
    fbclid?: SortOrderInput | SortOrder
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
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_login_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    company_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    utm_source?: StringNullableWithAggregatesFilter<"User"> | string | null
    utm_medium?: StringNullableWithAggregatesFilter<"User"> | string | null
    utm_campaign?: StringNullableWithAggregatesFilter<"User"> | string | null
    utm_content?: StringNullableWithAggregatesFilter<"User"> | string | null
    utm_term?: StringNullableWithAggregatesFilter<"User"> | string | null
    gclid?: StringNullableWithAggregatesFilter<"User"> | string | null
    fbclid?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringNullableFilter<"Company"> | string | null
    stripe_id?: StringNullableFilter<"Company"> | string | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    Analysis?: AnalysisListRelationFilter
    User?: UserListRelationFilter
    Subscription?: SubscriptionListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    stripe_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Analysis?: AnalysisOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    Subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripe_id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringNullableFilter<"Company"> | string | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    Analysis?: AnalysisListRelationFilter
    User?: UserListRelationFilter
    Subscription?: SubscriptionListRelationFilter
  }, "id" | "stripe_id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    stripe_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringNullableWithAggregatesFilter<"Company"> | string | null
    stripe_id?: StringNullableWithAggregatesFilter<"Company"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ParticipantProfileWhereInput = {
    AND?: ParticipantProfileWhereInput | ParticipantProfileWhereInput[]
    OR?: ParticipantProfileWhereInput[]
    NOT?: ParticipantProfileWhereInput | ParticipantProfileWhereInput[]
    id?: IntFilter<"ParticipantProfile"> | number
    name?: StringNullableFilter<"ParticipantProfile"> | string | null
    last_name?: StringNullableFilter<"ParticipantProfile"> | string | null
    nif?: StringNullableFilter<"ParticipantProfile"> | string | null
    payment_address?: StringNullableFilter<"ParticipantProfile"> | string | null
    birth_date?: DateTimeNullableFilter<"ParticipantProfile"> | Date | string | null
    gender?: EnumGendersNullableFilter<"ParticipantProfile"> | $Enums.Genders | null
    country?: EnumCountryNullableFilter<"ParticipantProfile"> | $Enums.Country | null
    available_devices?: EnumDeviceTypeNullableListFilter<"ParticipantProfile">
    education_level?: EnumEducationLevelNullableFilter<"ParticipantProfile"> | $Enums.EducationLevel | null
    yearly_income?: IntNullableFilter<"ParticipantProfile"> | number | null
    parental_status?: EnumParentalStatusNullableFilter<"ParticipantProfile"> | $Enums.ParentalStatus | null
    technical_proficiency?: EnumTechnicalProficiencyNullableFilter<"ParticipantProfile"> | $Enums.TechnicalProficiency | null
    approved?: BoolFilter<"ParticipantProfile"> | boolean
    created_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    user_id?: StringFilter<"ParticipantProfile"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
    ParticipantRating?: ParticipantRatingListRelationFilter
  }

  export type ParticipantProfileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    nif?: SortOrderInput | SortOrder
    payment_address?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    available_devices?: SortOrder
    education_level?: SortOrderInput | SortOrder
    yearly_income?: SortOrderInput | SortOrder
    parental_status?: SortOrderInput | SortOrder
    technical_proficiency?: SortOrderInput | SortOrder
    approved?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    User?: UserOrderByWithRelationInput
    AnalysisEntry?: AnalysisEntryOrderByRelationAggregateInput
    ParticipantRating?: ParticipantRatingOrderByRelationAggregateInput
  }

  export type ParticipantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: ParticipantProfileWhereInput | ParticipantProfileWhereInput[]
    OR?: ParticipantProfileWhereInput[]
    NOT?: ParticipantProfileWhereInput | ParticipantProfileWhereInput[]
    name?: StringNullableFilter<"ParticipantProfile"> | string | null
    last_name?: StringNullableFilter<"ParticipantProfile"> | string | null
    nif?: StringNullableFilter<"ParticipantProfile"> | string | null
    payment_address?: StringNullableFilter<"ParticipantProfile"> | string | null
    birth_date?: DateTimeNullableFilter<"ParticipantProfile"> | Date | string | null
    gender?: EnumGendersNullableFilter<"ParticipantProfile"> | $Enums.Genders | null
    country?: EnumCountryNullableFilter<"ParticipantProfile"> | $Enums.Country | null
    available_devices?: EnumDeviceTypeNullableListFilter<"ParticipantProfile">
    education_level?: EnumEducationLevelNullableFilter<"ParticipantProfile"> | $Enums.EducationLevel | null
    yearly_income?: IntNullableFilter<"ParticipantProfile"> | number | null
    parental_status?: EnumParentalStatusNullableFilter<"ParticipantProfile"> | $Enums.ParentalStatus | null
    technical_proficiency?: EnumTechnicalProficiencyNullableFilter<"ParticipantProfile"> | $Enums.TechnicalProficiency | null
    approved?: BoolFilter<"ParticipantProfile"> | boolean
    created_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
    ParticipantRating?: ParticipantRatingListRelationFilter
  }, "id" | "user_id">

  export type ParticipantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    nif?: SortOrderInput | SortOrder
    payment_address?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    available_devices?: SortOrder
    education_level?: SortOrderInput | SortOrder
    yearly_income?: SortOrderInput | SortOrder
    parental_status?: SortOrderInput | SortOrder
    technical_proficiency?: SortOrderInput | SortOrder
    approved?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: ParticipantProfileCountOrderByAggregateInput
    _avg?: ParticipantProfileAvgOrderByAggregateInput
    _max?: ParticipantProfileMaxOrderByAggregateInput
    _min?: ParticipantProfileMinOrderByAggregateInput
    _sum?: ParticipantProfileSumOrderByAggregateInput
  }

  export type ParticipantProfileScalarWhereWithAggregatesInput = {
    AND?: ParticipantProfileScalarWhereWithAggregatesInput | ParticipantProfileScalarWhereWithAggregatesInput[]
    OR?: ParticipantProfileScalarWhereWithAggregatesInput[]
    NOT?: ParticipantProfileScalarWhereWithAggregatesInput | ParticipantProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantProfile"> | number
    name?: StringNullableWithAggregatesFilter<"ParticipantProfile"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"ParticipantProfile"> | string | null
    nif?: StringNullableWithAggregatesFilter<"ParticipantProfile"> | string | null
    payment_address?: StringNullableWithAggregatesFilter<"ParticipantProfile"> | string | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"ParticipantProfile"> | Date | string | null
    gender?: EnumGendersNullableWithAggregatesFilter<"ParticipantProfile"> | $Enums.Genders | null
    country?: EnumCountryNullableWithAggregatesFilter<"ParticipantProfile"> | $Enums.Country | null
    available_devices?: EnumDeviceTypeNullableListFilter<"ParticipantProfile">
    education_level?: EnumEducationLevelNullableWithAggregatesFilter<"ParticipantProfile"> | $Enums.EducationLevel | null
    yearly_income?: IntNullableWithAggregatesFilter<"ParticipantProfile"> | number | null
    parental_status?: EnumParentalStatusNullableWithAggregatesFilter<"ParticipantProfile"> | $Enums.ParentalStatus | null
    technical_proficiency?: EnumTechnicalProficiencyNullableWithAggregatesFilter<"ParticipantProfile"> | $Enums.TechnicalProficiency | null
    approved?: BoolWithAggregatesFilter<"ParticipantProfile"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ParticipantProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ParticipantProfile"> | Date | string
    user_id?: StringWithAggregatesFilter<"ParticipantProfile"> | string
  }

  export type ParticipantRatingWhereInput = {
    AND?: ParticipantRatingWhereInput | ParticipantRatingWhereInput[]
    OR?: ParticipantRatingWhereInput[]
    NOT?: ParticipantRatingWhereInput | ParticipantRatingWhereInput[]
    id?: IntFilter<"ParticipantRating"> | number
    created_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    user_id?: IntFilter<"ParticipantRating"> | number
    score?: IntFilter<"ParticipantRating"> | number
    participantProfile?: XOR<ParticipantProfileScalarRelationFilter, ParticipantProfileWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
  }

  export type ParticipantRatingOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
    participantProfile?: ParticipantProfileOrderByWithRelationInput
    AnalysisEntry?: AnalysisEntryOrderByRelationAggregateInput
  }

  export type ParticipantRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: number
    AND?: ParticipantRatingWhereInput | ParticipantRatingWhereInput[]
    OR?: ParticipantRatingWhereInput[]
    NOT?: ParticipantRatingWhereInput | ParticipantRatingWhereInput[]
    created_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    score?: IntFilter<"ParticipantRating"> | number
    participantProfile?: XOR<ParticipantProfileScalarRelationFilter, ParticipantProfileWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
  }, "id" | "user_id">

  export type ParticipantRatingOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
    _count?: ParticipantRatingCountOrderByAggregateInput
    _avg?: ParticipantRatingAvgOrderByAggregateInput
    _max?: ParticipantRatingMaxOrderByAggregateInput
    _min?: ParticipantRatingMinOrderByAggregateInput
    _sum?: ParticipantRatingSumOrderByAggregateInput
  }

  export type ParticipantRatingScalarWhereWithAggregatesInput = {
    AND?: ParticipantRatingScalarWhereWithAggregatesInput | ParticipantRatingScalarWhereWithAggregatesInput[]
    OR?: ParticipantRatingScalarWhereWithAggregatesInput[]
    NOT?: ParticipantRatingScalarWhereWithAggregatesInput | ParticipantRatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantRating"> | number
    created_at?: DateTimeWithAggregatesFilter<"ParticipantRating"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ParticipantRating"> | Date | string
    user_id?: IntWithAggregatesFilter<"ParticipantRating"> | number
    score?: IntWithAggregatesFilter<"ParticipantRating"> | number
  }

  export type CustomerProfileWhereInput = {
    AND?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    OR?: CustomerProfileWhereInput[]
    NOT?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    id?: IntFilter<"CustomerProfile"> | number
    company_name?: StringNullableFilter<"CustomerProfile"> | string | null
    position?: StringNullableFilter<"CustomerProfile"> | string | null
    user_id?: StringFilter<"CustomerProfile"> | string
    created_at?: DateTimeFilter<"CustomerProfile"> | Date | string
    updated_at?: DateTimeFilter<"CustomerProfile"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomerProfileOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CustomerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    OR?: CustomerProfileWhereInput[]
    NOT?: CustomerProfileWhereInput | CustomerProfileWhereInput[]
    company_name?: StringNullableFilter<"CustomerProfile"> | string | null
    position?: StringNullableFilter<"CustomerProfile"> | string | null
    created_at?: DateTimeFilter<"CustomerProfile"> | Date | string
    updated_at?: DateTimeFilter<"CustomerProfile"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id">

  export type CustomerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CustomerProfileCountOrderByAggregateInput
    _avg?: CustomerProfileAvgOrderByAggregateInput
    _max?: CustomerProfileMaxOrderByAggregateInput
    _min?: CustomerProfileMinOrderByAggregateInput
    _sum?: CustomerProfileSumOrderByAggregateInput
  }

  export type CustomerProfileScalarWhereWithAggregatesInput = {
    AND?: CustomerProfileScalarWhereWithAggregatesInput | CustomerProfileScalarWhereWithAggregatesInput[]
    OR?: CustomerProfileScalarWhereWithAggregatesInput[]
    NOT?: CustomerProfileScalarWhereWithAggregatesInput | CustomerProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerProfile"> | number
    company_name?: StringNullableWithAggregatesFilter<"CustomerProfile"> | string | null
    position?: StringNullableWithAggregatesFilter<"CustomerProfile"> | string | null
    user_id?: StringWithAggregatesFilter<"CustomerProfile"> | string
    created_at?: DateTimeWithAggregatesFilter<"CustomerProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CustomerProfile"> | Date | string
  }

  export type PasswordResetTokensWhereInput = {
    AND?: PasswordResetTokensWhereInput | PasswordResetTokensWhereInput[]
    OR?: PasswordResetTokensWhereInput[]
    NOT?: PasswordResetTokensWhereInput | PasswordResetTokensWhereInput[]
    id?: StringFilter<"PasswordResetTokens"> | string
    user_id?: StringFilter<"PasswordResetTokens"> | string
    token_expires?: DateTimeFilter<"PasswordResetTokens"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetTokens"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokensOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_expires?: SortOrder
    created_at?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PasswordResetTokensWhereInput | PasswordResetTokensWhereInput[]
    OR?: PasswordResetTokensWhereInput[]
    NOT?: PasswordResetTokensWhereInput | PasswordResetTokensWhereInput[]
    user_id?: StringFilter<"PasswordResetTokens"> | string
    token_expires?: DateTimeFilter<"PasswordResetTokens"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetTokens"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type PasswordResetTokensOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_expires?: SortOrder
    created_at?: SortOrder
    _count?: PasswordResetTokensCountOrderByAggregateInput
    _max?: PasswordResetTokensMaxOrderByAggregateInput
    _min?: PasswordResetTokensMinOrderByAggregateInput
  }

  export type PasswordResetTokensScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokensScalarWhereWithAggregatesInput | PasswordResetTokensScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokensScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokensScalarWhereWithAggregatesInput | PasswordResetTokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetTokens"> | string
    user_id?: StringWithAggregatesFilter<"PasswordResetTokens"> | string
    token_expires?: DateTimeWithAggregatesFilter<"PasswordResetTokens"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"PasswordResetTokens"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    company_id?: StringFilter<"Subscription"> | string
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    expires_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    Company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    Company?: CompanyOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    company_id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    expires_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    Company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "id" | "company_id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    company_id?: StringWithAggregatesFilter<"Subscription"> | string
    created_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
  }

  export type AnalysisWhereInput = {
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    id?: StringFilter<"Analysis"> | string
    owner_company_id?: StringFilter<"Analysis"> | string
    device?: EnumDeviceTypeFilter<"Analysis"> | $Enums.DeviceType
    name?: StringFilter<"Analysis"> | string
    scenario?: StringNullableFilter<"Analysis"> | string | null
    created_by?: StringFilter<"Analysis"> | string
    tasks?: JsonFilter<"Analysis">
    url?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    created_at?: DateTimeFilter<"Analysis"> | Date | string
    updated_at?: DateTimeFilter<"Analysis"> | Date | string
    max_number_of_participants?: IntFilter<"Analysis"> | number
    recruitment_type?: EnumRecruitmentTypeFilter<"Analysis"> | $Enums.RecruitmentType
    min_age?: IntFilter<"Analysis"> | number
    max_age?: IntFilter<"Analysis"> | number
    gender?: EnumGendersFilter<"Analysis"> | $Enums.Genders
    country?: EnumCountryFilter<"Analysis"> | $Enums.Country
    education_level?: EnumEducationLevelFilter<"Analysis"> | $Enums.EducationLevel
    min_yearly_income?: IntFilter<"Analysis"> | number
    max_yearly_income?: IntFilter<"Analysis"> | number
    technical_proficiency?: EnumTechnicalProficiencyFilter<"Analysis"> | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFilter<"Analysis"> | $Enums.ParentalStatus
    available_spots?: IntFilter<"Analysis"> | number
    Company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
  }

  export type AnalysisOrderByWithRelationInput = {
    id?: SortOrder
    owner_company_id?: SortOrder
    device?: SortOrder
    name?: SortOrder
    scenario?: SortOrderInput | SortOrder
    created_by?: SortOrder
    tasks?: SortOrder
    url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    max_number_of_participants?: SortOrder
    recruitment_type?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    technical_proficiency?: SortOrder
    parental_status?: SortOrder
    available_spots?: SortOrder
    Company?: CompanyOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    AnalysisEntry?: AnalysisEntryOrderByRelationAggregateInput
  }

  export type AnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    owner_company_id?: StringFilter<"Analysis"> | string
    device?: EnumDeviceTypeFilter<"Analysis"> | $Enums.DeviceType
    name?: StringFilter<"Analysis"> | string
    scenario?: StringNullableFilter<"Analysis"> | string | null
    created_by?: StringFilter<"Analysis"> | string
    tasks?: JsonFilter<"Analysis">
    url?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    created_at?: DateTimeFilter<"Analysis"> | Date | string
    updated_at?: DateTimeFilter<"Analysis"> | Date | string
    max_number_of_participants?: IntFilter<"Analysis"> | number
    recruitment_type?: EnumRecruitmentTypeFilter<"Analysis"> | $Enums.RecruitmentType
    min_age?: IntFilter<"Analysis"> | number
    max_age?: IntFilter<"Analysis"> | number
    gender?: EnumGendersFilter<"Analysis"> | $Enums.Genders
    country?: EnumCountryFilter<"Analysis"> | $Enums.Country
    education_level?: EnumEducationLevelFilter<"Analysis"> | $Enums.EducationLevel
    min_yearly_income?: IntFilter<"Analysis"> | number
    max_yearly_income?: IntFilter<"Analysis"> | number
    technical_proficiency?: EnumTechnicalProficiencyFilter<"Analysis"> | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFilter<"Analysis"> | $Enums.ParentalStatus
    available_spots?: IntFilter<"Analysis"> | number
    Company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    AnalysisEntry?: AnalysisEntryListRelationFilter
  }, "id">

  export type AnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    owner_company_id?: SortOrder
    device?: SortOrder
    name?: SortOrder
    scenario?: SortOrderInput | SortOrder
    created_by?: SortOrder
    tasks?: SortOrder
    url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    max_number_of_participants?: SortOrder
    recruitment_type?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    technical_proficiency?: SortOrder
    parental_status?: SortOrder
    available_spots?: SortOrder
    _count?: AnalysisCountOrderByAggregateInput
    _avg?: AnalysisAvgOrderByAggregateInput
    _max?: AnalysisMaxOrderByAggregateInput
    _min?: AnalysisMinOrderByAggregateInput
    _sum?: AnalysisSumOrderByAggregateInput
  }

  export type AnalysisScalarWhereWithAggregatesInput = {
    AND?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    OR?: AnalysisScalarWhereWithAggregatesInput[]
    NOT?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analysis"> | string
    owner_company_id?: StringWithAggregatesFilter<"Analysis"> | string
    device?: EnumDeviceTypeWithAggregatesFilter<"Analysis"> | $Enums.DeviceType
    name?: StringWithAggregatesFilter<"Analysis"> | string
    scenario?: StringNullableWithAggregatesFilter<"Analysis"> | string | null
    created_by?: StringWithAggregatesFilter<"Analysis"> | string
    tasks?: JsonWithAggregatesFilter<"Analysis">
    url?: StringWithAggregatesFilter<"Analysis"> | string
    status?: EnumAnalysisStatusWithAggregatesFilter<"Analysis"> | $Enums.AnalysisStatus
    created_at?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
    max_number_of_participants?: IntWithAggregatesFilter<"Analysis"> | number
    recruitment_type?: EnumRecruitmentTypeWithAggregatesFilter<"Analysis"> | $Enums.RecruitmentType
    min_age?: IntWithAggregatesFilter<"Analysis"> | number
    max_age?: IntWithAggregatesFilter<"Analysis"> | number
    gender?: EnumGendersWithAggregatesFilter<"Analysis"> | $Enums.Genders
    country?: EnumCountryWithAggregatesFilter<"Analysis"> | $Enums.Country
    education_level?: EnumEducationLevelWithAggregatesFilter<"Analysis"> | $Enums.EducationLevel
    min_yearly_income?: IntWithAggregatesFilter<"Analysis"> | number
    max_yearly_income?: IntWithAggregatesFilter<"Analysis"> | number
    technical_proficiency?: EnumTechnicalProficiencyWithAggregatesFilter<"Analysis"> | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusWithAggregatesFilter<"Analysis"> | $Enums.ParentalStatus
    available_spots?: IntWithAggregatesFilter<"Analysis"> | number
  }

  export type AnalysisEntryWhereInput = {
    AND?: AnalysisEntryWhereInput | AnalysisEntryWhereInput[]
    OR?: AnalysisEntryWhereInput[]
    NOT?: AnalysisEntryWhereInput | AnalysisEntryWhereInput[]
    id?: StringFilter<"AnalysisEntry"> | string
    analysis_id?: StringFilter<"AnalysisEntry"> | string
    user_id?: StringNullableFilter<"AnalysisEntry"> | string | null
    status?: EnumAnalysisEntryCompletionStatusFilter<"AnalysisEntry"> | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    updated_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    transcription_segments?: JsonNullableFilter<"AnalysisEntry">
    full_transcript?: StringNullableFilter<"AnalysisEntry"> | string | null
    ratingsId?: IntNullableFilter<"AnalysisEntry"> | number | null
    Analysis?: XOR<AnalysisScalarRelationFilter, AnalysisWhereInput>
    ParticipantProfile?: XOR<ParticipantProfileNullableScalarRelationFilter, ParticipantProfileWhereInput> | null
    transcriptionJob?: TranscriptionJobListRelationFilter
    ratings?: XOR<ParticipantRatingNullableScalarRelationFilter, ParticipantRatingWhereInput> | null
  }

  export type AnalysisEntryOrderByWithRelationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcription_segments?: SortOrderInput | SortOrder
    full_transcript?: SortOrderInput | SortOrder
    ratingsId?: SortOrderInput | SortOrder
    Analysis?: AnalysisOrderByWithRelationInput
    ParticipantProfile?: ParticipantProfileOrderByWithRelationInput
    transcriptionJob?: TranscriptionJobOrderByRelationAggregateInput
    ratings?: ParticipantRatingOrderByWithRelationInput
  }

  export type AnalysisEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisEntryWhereInput | AnalysisEntryWhereInput[]
    OR?: AnalysisEntryWhereInput[]
    NOT?: AnalysisEntryWhereInput | AnalysisEntryWhereInput[]
    analysis_id?: StringFilter<"AnalysisEntry"> | string
    user_id?: StringNullableFilter<"AnalysisEntry"> | string | null
    status?: EnumAnalysisEntryCompletionStatusFilter<"AnalysisEntry"> | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    updated_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    transcription_segments?: JsonNullableFilter<"AnalysisEntry">
    full_transcript?: StringNullableFilter<"AnalysisEntry"> | string | null
    ratingsId?: IntNullableFilter<"AnalysisEntry"> | number | null
    Analysis?: XOR<AnalysisScalarRelationFilter, AnalysisWhereInput>
    ParticipantProfile?: XOR<ParticipantProfileNullableScalarRelationFilter, ParticipantProfileWhereInput> | null
    transcriptionJob?: TranscriptionJobListRelationFilter
    ratings?: XOR<ParticipantRatingNullableScalarRelationFilter, ParticipantRatingWhereInput> | null
  }, "id">

  export type AnalysisEntryOrderByWithAggregationInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcription_segments?: SortOrderInput | SortOrder
    full_transcript?: SortOrderInput | SortOrder
    ratingsId?: SortOrderInput | SortOrder
    _count?: AnalysisEntryCountOrderByAggregateInput
    _avg?: AnalysisEntryAvgOrderByAggregateInput
    _max?: AnalysisEntryMaxOrderByAggregateInput
    _min?: AnalysisEntryMinOrderByAggregateInput
    _sum?: AnalysisEntrySumOrderByAggregateInput
  }

  export type AnalysisEntryScalarWhereWithAggregatesInput = {
    AND?: AnalysisEntryScalarWhereWithAggregatesInput | AnalysisEntryScalarWhereWithAggregatesInput[]
    OR?: AnalysisEntryScalarWhereWithAggregatesInput[]
    NOT?: AnalysisEntryScalarWhereWithAggregatesInput | AnalysisEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisEntry"> | string
    analysis_id?: StringWithAggregatesFilter<"AnalysisEntry"> | string
    user_id?: StringNullableWithAggregatesFilter<"AnalysisEntry"> | string | null
    status?: EnumAnalysisEntryCompletionStatusWithAggregatesFilter<"AnalysisEntry"> | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeWithAggregatesFilter<"AnalysisEntry"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AnalysisEntry"> | Date | string
    transcription_segments?: JsonNullableWithAggregatesFilter<"AnalysisEntry">
    full_transcript?: StringNullableWithAggregatesFilter<"AnalysisEntry"> | string | null
    ratingsId?: IntNullableWithAggregatesFilter<"AnalysisEntry"> | number | null
  }

  export type TranscriptionJobWhereInput = {
    AND?: TranscriptionJobWhereInput | TranscriptionJobWhereInput[]
    OR?: TranscriptionJobWhereInput[]
    NOT?: TranscriptionJobWhereInput | TranscriptionJobWhereInput[]
    id?: IntFilter<"TranscriptionJob"> | number
    analysis_entry_id?: StringFilter<"TranscriptionJob"> | string
    status?: EnumTranscriptionJobStatusFilter<"TranscriptionJob"> | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    language_code?: StringFilter<"TranscriptionJob"> | string
    AnalysisEntry?: XOR<AnalysisEntryScalarRelationFilter, AnalysisEntryWhereInput>
  }

  export type TranscriptionJobOrderByWithRelationInput = {
    id?: SortOrder
    analysis_entry_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    language_code?: SortOrder
    AnalysisEntry?: AnalysisEntryOrderByWithRelationInput
  }

  export type TranscriptionJobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TranscriptionJobWhereInput | TranscriptionJobWhereInput[]
    OR?: TranscriptionJobWhereInput[]
    NOT?: TranscriptionJobWhereInput | TranscriptionJobWhereInput[]
    analysis_entry_id?: StringFilter<"TranscriptionJob"> | string
    status?: EnumTranscriptionJobStatusFilter<"TranscriptionJob"> | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    language_code?: StringFilter<"TranscriptionJob"> | string
    AnalysisEntry?: XOR<AnalysisEntryScalarRelationFilter, AnalysisEntryWhereInput>
  }, "id" | "id">

  export type TranscriptionJobOrderByWithAggregationInput = {
    id?: SortOrder
    analysis_entry_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    language_code?: SortOrder
    _count?: TranscriptionJobCountOrderByAggregateInput
    _avg?: TranscriptionJobAvgOrderByAggregateInput
    _max?: TranscriptionJobMaxOrderByAggregateInput
    _min?: TranscriptionJobMinOrderByAggregateInput
    _sum?: TranscriptionJobSumOrderByAggregateInput
  }

  export type TranscriptionJobScalarWhereWithAggregatesInput = {
    AND?: TranscriptionJobScalarWhereWithAggregatesInput | TranscriptionJobScalarWhereWithAggregatesInput[]
    OR?: TranscriptionJobScalarWhereWithAggregatesInput[]
    NOT?: TranscriptionJobScalarWhereWithAggregatesInput | TranscriptionJobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TranscriptionJob"> | number
    analysis_entry_id?: StringWithAggregatesFilter<"TranscriptionJob"> | string
    status?: EnumTranscriptionJobStatusWithAggregatesFilter<"TranscriptionJob"> | $Enums.TranscriptionJobStatus
    created_at?: DateTimeWithAggregatesFilter<"TranscriptionJob"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TranscriptionJob"> | Date | string
    language_code?: StringWithAggregatesFilter<"TranscriptionJob"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Company?: CompanyCreateNestedOneWithoutUserInput
    PasswordResetTokens?: PasswordResetTokensCreateNestedManyWithoutUserInput
    Analysis?: AnalysisCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileUncheckedCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Company?: CompanyUpdateOneWithoutUserNestedInput
    PasswordResetTokens?: PasswordResetTokensUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisCreateNestedManyWithoutCompanyInput
    User?: UserCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutCompanyInput
    User?: UserUncheckedCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUpdateManyWithoutCompanyNestedInput
    User?: UserUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUncheckedUpdateManyWithoutCompanyNestedInput
    User?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantProfileCreateInput = {
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutParticipantProfileInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutParticipantProfileInput
    ParticipantRating?: ParticipantRatingCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileUncheckedCreateInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutParticipantProfileInput
    ParticipantRating?: ParticipantRatingUncheckedCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutParticipantProfileNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutParticipantProfileNestedInput
    ParticipantRating?: ParticipantRatingUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileNestedInput
    ParticipantRating?: ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileCreateManyInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type ParticipantProfileUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipantRatingCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    score: number
    participantProfile: ParticipantProfileCreateNestedOneWithoutParticipantRatingInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutRatingsInput
  }

  export type ParticipantRatingUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    score: number
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutRatingsInput
  }

  export type ParticipantRatingUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    participantProfile?: ParticipantProfileUpdateOneRequiredWithoutParticipantRatingNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutRatingsNestedInput
  }

  export type ParticipantRatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutRatingsNestedInput
  }

  export type ParticipantRatingCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    score: number
  }

  export type ParticipantRatingUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantRatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerProfileCreateInput = {
    company_name?: string | null
    position?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutCustomerProfileInput
  }

  export type CustomerProfileUncheckedCreateInput = {
    id?: number
    company_name?: string | null
    position?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfileUpdateInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutCustomerProfileNestedInput
  }

  export type CustomerProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileCreateManyInput = {
    id?: number
    company_name?: string | null
    position?: string | null
    user_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfileUpdateManyMutationInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokensCreateInput = {
    id?: string
    token_expires: Date | string
    created_at?: Date | string
    User: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokensUncheckedCreateInput = {
    id?: string
    user_id: string
    token_expires: Date | string
    created_at?: Date | string
  }

  export type PasswordResetTokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokensCreateManyInput = {
    id?: string
    user_id: string
    token_expires: Date | string
    created_at?: Date | string
  }

  export type PasswordResetTokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
    Company: CompanyCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    company_id: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Company?: CompanyUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    company_id: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalysisCreateInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    Company: CompanyCreateNestedOneWithoutAnalysisInput
    User: UserCreateNestedOneWithoutAnalysisInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisUncheckedCreateInput = {
    id?: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    created_by: string
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneRequiredWithoutAnalysisNestedInput
    User?: UserUpdateOneRequiredWithoutAnalysisNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_company_id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisCreateManyInput = {
    id?: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    created_by: string
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
  }

  export type AnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_company_id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisEntryCreateInput = {
    id?: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    Analysis: AnalysisCreateNestedOneWithoutAnalysisEntryInput
    ParticipantProfile?: ParticipantProfileCreateNestedOneWithoutAnalysisEntryInput
    transcriptionJob?: TranscriptionJobCreateNestedManyWithoutAnalysisEntryInput
    ratings?: ParticipantRatingCreateNestedOneWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUncheckedCreateInput = {
    id?: string
    analysis_id: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
    transcriptionJob?: TranscriptionJobUncheckedCreateNestedManyWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    Analysis?: AnalysisUpdateOneRequiredWithoutAnalysisEntryNestedInput
    ParticipantProfile?: ParticipantProfileUpdateOneWithoutAnalysisEntryNestedInput
    transcriptionJob?: TranscriptionJobUpdateManyWithoutAnalysisEntryNestedInput
    ratings?: ParticipantRatingUpdateOneWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptionJob?: TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryCreateManyInput = {
    id?: string
    analysis_id: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
  }

  export type AnalysisEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranscriptionJobCreateInput = {
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
    AnalysisEntry: AnalysisEntryCreateNestedOneWithoutTranscriptionJobInput
  }

  export type TranscriptionJobUncheckedCreateInput = {
    id?: number
    analysis_entry_id: string
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
  }

  export type TranscriptionJobUpdateInput = {
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
    AnalysisEntry?: AnalysisEntryUpdateOneRequiredWithoutTranscriptionJobNestedInput
  }

  export type TranscriptionJobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_entry_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
  }

  export type TranscriptionJobCreateManyInput = {
    id?: number
    analysis_entry_id: string
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
  }

  export type TranscriptionJobUpdateManyMutationInput = {
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
  }

  export type TranscriptionJobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    analysis_entry_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type PasswordResetTokensListRelationFilter = {
    every?: PasswordResetTokensWhereInput
    some?: PasswordResetTokensWhereInput
    none?: PasswordResetTokensWhereInput
  }

  export type AnalysisListRelationFilter = {
    every?: AnalysisWhereInput
    some?: AnalysisWhereInput
    none?: AnalysisWhereInput
  }

  export type ParticipantProfileListRelationFilter = {
    every?: ParticipantProfileWhereInput
    some?: ParticipantProfileWhereInput
    none?: ParticipantProfileWhereInput
  }

  export type CustomerProfileListRelationFilter = {
    every?: CustomerProfileWhereInput
    some?: CustomerProfileWhereInput
    none?: CustomerProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PasswordResetTokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_updated_at?: SortOrder
    last_login_at?: SortOrder
    company_id?: SortOrder
    utm_source?: SortOrder
    utm_medium?: SortOrder
    utm_campaign?: SortOrder
    utm_content?: SortOrder
    utm_term?: SortOrder
    gclid?: SortOrder
    fbclid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_updated_at?: SortOrder
    last_login_at?: SortOrder
    company_id?: SortOrder
    utm_source?: SortOrder
    utm_medium?: SortOrder
    utm_campaign?: SortOrder
    utm_content?: SortOrder
    utm_term?: SortOrder
    gclid?: SortOrder
    fbclid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_updated_at?: SortOrder
    last_login_at?: SortOrder
    company_id?: SortOrder
    utm_source?: SortOrder
    utm_medium?: SortOrder
    utm_campaign?: SortOrder
    utm_content?: SortOrder
    utm_term?: SortOrder
    gclid?: SortOrder
    fbclid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripe_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGendersNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGendersNullableFilter<$PrismaModel> | $Enums.Genders | null
  }

  export type EnumCountryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryNullableFilter<$PrismaModel> | $Enums.Country | null
  }

  export type EnumDeviceTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumParentalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumParentalStatusNullableFilter<$PrismaModel> | $Enums.ParentalStatus | null
  }

  export type EnumTechnicalProficiencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel> | $Enums.TechnicalProficiency | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AnalysisEntryListRelationFilter = {
    every?: AnalysisEntryWhereInput
    some?: AnalysisEntryWhereInput
    none?: AnalysisEntryWhereInput
  }

  export type ParticipantRatingListRelationFilter = {
    every?: ParticipantRatingWhereInput
    some?: ParticipantRatingWhereInput
    none?: ParticipantRatingWhereInput
  }

  export type AnalysisEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    nif?: SortOrder
    payment_address?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    available_devices?: SortOrder
    education_level?: SortOrder
    yearly_income?: SortOrder
    parental_status?: SortOrder
    technical_proficiency?: SortOrder
    approved?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ParticipantProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    yearly_income?: SortOrder
  }

  export type ParticipantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    nif?: SortOrder
    payment_address?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    yearly_income?: SortOrder
    parental_status?: SortOrder
    technical_proficiency?: SortOrder
    approved?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ParticipantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    last_name?: SortOrder
    nif?: SortOrder
    payment_address?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    yearly_income?: SortOrder
    parental_status?: SortOrder
    technical_proficiency?: SortOrder
    approved?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ParticipantProfileSumOrderByAggregateInput = {
    id?: SortOrder
    yearly_income?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumGendersNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGendersNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genders | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGendersNullableFilter<$PrismaModel>
    _max?: NestedEnumGendersNullableFilter<$PrismaModel>
  }

  export type EnumCountryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Country | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCountryNullableFilter<$PrismaModel>
    _max?: NestedEnumCountryNullableFilter<$PrismaModel>
  }

  export type EnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumParentalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumParentalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ParentalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumParentalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumParentalStatusNullableFilter<$PrismaModel>
  }

  export type EnumTechnicalProficiencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTechnicalProficiencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TechnicalProficiency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParticipantProfileScalarRelationFilter = {
    is?: ParticipantProfileWhereInput
    isNot?: ParticipantProfileWhereInput
  }

  export type ParticipantRatingCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type ParticipantRatingAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type ParticipantRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type ParticipantRatingMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type ParticipantRatingSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    score?: SortOrder
  }

  export type CustomerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    position?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    position?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    position?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasswordResetTokensCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_expires?: SortOrder
    created_at?: SortOrder
  }

  export type PasswordResetTokensMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_expires?: SortOrder
    created_at?: SortOrder
  }

  export type PasswordResetTokensMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token_expires?: SortOrder
    created_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expires_at?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expires_at?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    expires_at?: SortOrder
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type EnumRecruitmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecruitmentType | EnumRecruitmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecruitmentTypeFilter<$PrismaModel> | $Enums.RecruitmentType
  }

  export type EnumGendersFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersFilter<$PrismaModel> | $Enums.Genders
  }

  export type EnumCountryFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel>
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryFilter<$PrismaModel> | $Enums.Country
  }

  export type EnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type EnumTechnicalProficiencyFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicalProficiencyFilter<$PrismaModel> | $Enums.TechnicalProficiency
  }

  export type EnumParentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentalStatusFilter<$PrismaModel> | $Enums.ParentalStatus
  }

  export type AnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    owner_company_id?: SortOrder
    device?: SortOrder
    name?: SortOrder
    scenario?: SortOrder
    created_by?: SortOrder
    tasks?: SortOrder
    url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    max_number_of_participants?: SortOrder
    recruitment_type?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    technical_proficiency?: SortOrder
    parental_status?: SortOrder
    available_spots?: SortOrder
  }

  export type AnalysisAvgOrderByAggregateInput = {
    max_number_of_participants?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    available_spots?: SortOrder
  }

  export type AnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_company_id?: SortOrder
    device?: SortOrder
    name?: SortOrder
    scenario?: SortOrder
    created_by?: SortOrder
    url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    max_number_of_participants?: SortOrder
    recruitment_type?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    technical_proficiency?: SortOrder
    parental_status?: SortOrder
    available_spots?: SortOrder
  }

  export type AnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    owner_company_id?: SortOrder
    device?: SortOrder
    name?: SortOrder
    scenario?: SortOrder
    created_by?: SortOrder
    url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    max_number_of_participants?: SortOrder
    recruitment_type?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    education_level?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    technical_proficiency?: SortOrder
    parental_status?: SortOrder
    available_spots?: SortOrder
  }

  export type AnalysisSumOrderByAggregateInput = {
    max_number_of_participants?: SortOrder
    min_age?: SortOrder
    max_age?: SortOrder
    min_yearly_income?: SortOrder
    max_yearly_income?: SortOrder
    available_spots?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type EnumRecruitmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecruitmentType | EnumRecruitmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecruitmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecruitmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecruitmentTypeFilter<$PrismaModel>
    _max?: NestedEnumRecruitmentTypeFilter<$PrismaModel>
  }

  export type EnumGendersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersWithAggregatesFilter<$PrismaModel> | $Enums.Genders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGendersFilter<$PrismaModel>
    _max?: NestedEnumGendersFilter<$PrismaModel>
  }

  export type EnumCountryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel>
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryWithAggregatesFilter<$PrismaModel> | $Enums.Country
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryFilter<$PrismaModel>
    _max?: NestedEnumCountryFilter<$PrismaModel>
  }

  export type EnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type EnumTechnicalProficiencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicalProficiencyWithAggregatesFilter<$PrismaModel> | $Enums.TechnicalProficiency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicalProficiencyFilter<$PrismaModel>
    _max?: NestedEnumTechnicalProficiencyFilter<$PrismaModel>
  }

  export type EnumParentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentalStatusFilter<$PrismaModel>
    _max?: NestedEnumParentalStatusFilter<$PrismaModel>
  }

  export type EnumAnalysisEntryCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisEntryCompletionStatus | EnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel> | $Enums.AnalysisEntryCompletionStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AnalysisScalarRelationFilter = {
    is?: AnalysisWhereInput
    isNot?: AnalysisWhereInput
  }

  export type ParticipantProfileNullableScalarRelationFilter = {
    is?: ParticipantProfileWhereInput | null
    isNot?: ParticipantProfileWhereInput | null
  }

  export type TranscriptionJobListRelationFilter = {
    every?: TranscriptionJobWhereInput
    some?: TranscriptionJobWhereInput
    none?: TranscriptionJobWhereInput
  }

  export type ParticipantRatingNullableScalarRelationFilter = {
    is?: ParticipantRatingWhereInput | null
    isNot?: ParticipantRatingWhereInput | null
  }

  export type TranscriptionJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisEntryCountOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcription_segments?: SortOrder
    full_transcript?: SortOrder
    ratingsId?: SortOrder
  }

  export type AnalysisEntryAvgOrderByAggregateInput = {
    ratingsId?: SortOrder
  }

  export type AnalysisEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    full_transcript?: SortOrder
    ratingsId?: SortOrder
  }

  export type AnalysisEntryMinOrderByAggregateInput = {
    id?: SortOrder
    analysis_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    full_transcript?: SortOrder
    ratingsId?: SortOrder
  }

  export type AnalysisEntrySumOrderByAggregateInput = {
    ratingsId?: SortOrder
  }

  export type EnumAnalysisEntryCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisEntryCompletionStatus | EnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisEntryCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisEntryCompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTranscriptionJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TranscriptionJobStatus | EnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel> | $Enums.TranscriptionJobStatus
  }

  export type AnalysisEntryScalarRelationFilter = {
    is?: AnalysisEntryWhereInput
    isNot?: AnalysisEntryWhereInput
  }

  export type TranscriptionJobCountOrderByAggregateInput = {
    id?: SortOrder
    analysis_entry_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    language_code?: SortOrder
  }

  export type TranscriptionJobAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TranscriptionJobMaxOrderByAggregateInput = {
    id?: SortOrder
    analysis_entry_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    language_code?: SortOrder
  }

  export type TranscriptionJobMinOrderByAggregateInput = {
    id?: SortOrder
    analysis_entry_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    language_code?: SortOrder
  }

  export type TranscriptionJobSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTranscriptionJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranscriptionJobStatus | EnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranscriptionJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.TranscriptionJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel>
    _max?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type PasswordResetTokensCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput> | PasswordResetTokensCreateWithoutUserInput[] | PasswordResetTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokensCreateOrConnectWithoutUserInput | PasswordResetTokensCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokensCreateManyUserInputEnvelope
    connect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
  }

  export type AnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type ParticipantProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput> | ParticipantProfileCreateWithoutUserInput[] | ParticipantProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutUserInput | ParticipantProfileCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantProfileCreateManyUserInputEnvelope
    connect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
  }

  export type CustomerProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput> | CustomerProfileCreateWithoutUserInput[] | CustomerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput | CustomerProfileCreateOrConnectWithoutUserInput[]
    createMany?: CustomerProfileCreateManyUserInputEnvelope
    connect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
  }

  export type PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput> | PasswordResetTokensCreateWithoutUserInput[] | PasswordResetTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokensCreateOrConnectWithoutUserInput | PasswordResetTokensCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokensCreateManyUserInputEnvelope
    connect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
  }

  export type AnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type ParticipantProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput> | ParticipantProfileCreateWithoutUserInput[] | ParticipantProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutUserInput | ParticipantProfileCreateOrConnectWithoutUserInput[]
    createMany?: ParticipantProfileCreateManyUserInputEnvelope
    connect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
  }

  export type CustomerProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput> | CustomerProfileCreateWithoutUserInput[] | CustomerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput | CustomerProfileCreateOrConnectWithoutUserInput[]
    createMany?: CustomerProfileCreateManyUserInputEnvelope
    connect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput> | PasswordResetTokensCreateWithoutUserInput[] | PasswordResetTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokensCreateOrConnectWithoutUserInput | PasswordResetTokensCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokensUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokensCreateManyUserInputEnvelope
    set?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    disconnect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    delete?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    connect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    update?: PasswordResetTokensUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokensUpdateManyWithWhereWithoutUserInput | PasswordResetTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokensScalarWhereInput | PasswordResetTokensScalarWhereInput[]
  }

  export type AnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type ParticipantProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput> | ParticipantProfileCreateWithoutUserInput[] | ParticipantProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutUserInput | ParticipantProfileCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantProfileUpsertWithWhereUniqueWithoutUserInput | ParticipantProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantProfileCreateManyUserInputEnvelope
    set?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    disconnect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    delete?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    connect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    update?: ParticipantProfileUpdateWithWhereUniqueWithoutUserInput | ParticipantProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantProfileUpdateManyWithWhereWithoutUserInput | ParticipantProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantProfileScalarWhereInput | ParticipantProfileScalarWhereInput[]
  }

  export type CustomerProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput> | CustomerProfileCreateWithoutUserInput[] | CustomerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput | CustomerProfileCreateOrConnectWithoutUserInput[]
    upsert?: CustomerProfileUpsertWithWhereUniqueWithoutUserInput | CustomerProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerProfileCreateManyUserInputEnvelope
    set?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    disconnect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    delete?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    connect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    update?: CustomerProfileUpdateWithWhereUniqueWithoutUserInput | CustomerProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerProfileUpdateManyWithWhereWithoutUserInput | CustomerProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerProfileScalarWhereInput | CustomerProfileScalarWhereInput[]
  }

  export type PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput> | PasswordResetTokensCreateWithoutUserInput[] | PasswordResetTokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokensCreateOrConnectWithoutUserInput | PasswordResetTokensCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokensUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokensCreateManyUserInputEnvelope
    set?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    disconnect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    delete?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    connect?: PasswordResetTokensWhereUniqueInput | PasswordResetTokensWhereUniqueInput[]
    update?: PasswordResetTokensUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokensUpdateManyWithWhereWithoutUserInput | PasswordResetTokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokensScalarWhereInput | PasswordResetTokensScalarWhereInput[]
  }

  export type AnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput> | ParticipantProfileCreateWithoutUserInput[] | ParticipantProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutUserInput | ParticipantProfileCreateOrConnectWithoutUserInput[]
    upsert?: ParticipantProfileUpsertWithWhereUniqueWithoutUserInput | ParticipantProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipantProfileCreateManyUserInputEnvelope
    set?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    disconnect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    delete?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    connect?: ParticipantProfileWhereUniqueInput | ParticipantProfileWhereUniqueInput[]
    update?: ParticipantProfileUpdateWithWhereUniqueWithoutUserInput | ParticipantProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipantProfileUpdateManyWithWhereWithoutUserInput | ParticipantProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipantProfileScalarWhereInput | ParticipantProfileScalarWhereInput[]
  }

  export type CustomerProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput> | CustomerProfileCreateWithoutUserInput[] | CustomerProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerProfileCreateOrConnectWithoutUserInput | CustomerProfileCreateOrConnectWithoutUserInput[]
    upsert?: CustomerProfileUpsertWithWhereUniqueWithoutUserInput | CustomerProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerProfileCreateManyUserInputEnvelope
    set?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    disconnect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    delete?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    connect?: CustomerProfileWhereUniqueInput | CustomerProfileWhereUniqueInput[]
    update?: CustomerProfileUpdateWithWhereUniqueWithoutUserInput | CustomerProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerProfileUpdateManyWithWhereWithoutUserInput | CustomerProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerProfileScalarWhereInput | CustomerProfileScalarWhereInput[]
  }

  export type AnalysisCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput> | AnalysisCreateWithoutCompanyInput[] | AnalysisUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutCompanyInput | AnalysisCreateOrConnectWithoutCompanyInput[]
    createMany?: AnalysisCreateManyCompanyInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput> | SubscriptionCreateWithoutCompanyInput[] | SubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCompanyInput | SubscriptionCreateOrConnectWithoutCompanyInput[]
    createMany?: SubscriptionCreateManyCompanyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AnalysisUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput> | AnalysisCreateWithoutCompanyInput[] | AnalysisUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutCompanyInput | AnalysisCreateOrConnectWithoutCompanyInput[]
    createMany?: AnalysisCreateManyCompanyInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput> | SubscriptionCreateWithoutCompanyInput[] | SubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCompanyInput | SubscriptionCreateOrConnectWithoutCompanyInput[]
    createMany?: SubscriptionCreateManyCompanyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AnalysisUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput> | AnalysisCreateWithoutCompanyInput[] | AnalysisUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutCompanyInput | AnalysisCreateOrConnectWithoutCompanyInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutCompanyInput | AnalysisUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AnalysisCreateManyCompanyInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutCompanyInput | AnalysisUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutCompanyInput | AnalysisUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput> | SubscriptionCreateWithoutCompanyInput[] | SubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCompanyInput | SubscriptionCreateOrConnectWithoutCompanyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCompanyInput | SubscriptionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SubscriptionCreateManyCompanyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCompanyInput | SubscriptionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCompanyInput | SubscriptionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AnalysisUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput> | AnalysisCreateWithoutCompanyInput[] | AnalysisUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutCompanyInput | AnalysisCreateOrConnectWithoutCompanyInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutCompanyInput | AnalysisUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: AnalysisCreateManyCompanyInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutCompanyInput | AnalysisUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutCompanyInput | AnalysisUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput> | SubscriptionCreateWithoutCompanyInput[] | SubscriptionUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCompanyInput | SubscriptionCreateOrConnectWithoutCompanyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutCompanyInput | SubscriptionUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SubscriptionCreateManyCompanyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutCompanyInput | SubscriptionUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutCompanyInput | SubscriptionUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ParticipantProfileCreateavailable_devicesInput = {
    set: $Enums.DeviceType[]
  }

  export type UserCreateNestedOneWithoutParticipantProfileInput = {
    create?: XOR<UserCreateWithoutParticipantProfileInput, UserUncheckedCreateWithoutParticipantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AnalysisEntryCreateNestedManyWithoutParticipantProfileInput = {
    create?: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput> | AnalysisEntryCreateWithoutParticipantProfileInput[] | AnalysisEntryUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutParticipantProfileInput | AnalysisEntryCreateOrConnectWithoutParticipantProfileInput[]
    createMany?: AnalysisEntryCreateManyParticipantProfileInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type ParticipantRatingCreateNestedManyWithoutParticipantProfileInput = {
    create?: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput> | ParticipantRatingCreateWithoutParticipantProfileInput[] | ParticipantRatingUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutParticipantProfileInput | ParticipantRatingCreateOrConnectWithoutParticipantProfileInput[]
    createMany?: ParticipantRatingCreateManyParticipantProfileInputEnvelope
    connect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
  }

  export type AnalysisEntryUncheckedCreateNestedManyWithoutParticipantProfileInput = {
    create?: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput> | AnalysisEntryCreateWithoutParticipantProfileInput[] | AnalysisEntryUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutParticipantProfileInput | AnalysisEntryCreateOrConnectWithoutParticipantProfileInput[]
    createMany?: AnalysisEntryCreateManyParticipantProfileInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type ParticipantRatingUncheckedCreateNestedManyWithoutParticipantProfileInput = {
    create?: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput> | ParticipantRatingCreateWithoutParticipantProfileInput[] | ParticipantRatingUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutParticipantProfileInput | ParticipantRatingCreateOrConnectWithoutParticipantProfileInput[]
    createMany?: ParticipantRatingCreateManyParticipantProfileInputEnvelope
    connect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
  }

  export type NullableEnumGendersFieldUpdateOperationsInput = {
    set?: $Enums.Genders | null
  }

  export type NullableEnumCountryFieldUpdateOperationsInput = {
    set?: $Enums.Country | null
  }

  export type ParticipantProfileUpdateavailable_devicesInput = {
    set?: $Enums.DeviceType[]
    push?: $Enums.DeviceType | $Enums.DeviceType[]
  }

  export type NullableEnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumParentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParentalStatus | null
  }

  export type NullableEnumTechnicalProficiencyFieldUpdateOperationsInput = {
    set?: $Enums.TechnicalProficiency | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutParticipantProfileNestedInput = {
    create?: XOR<UserCreateWithoutParticipantProfileInput, UserUncheckedCreateWithoutParticipantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipantProfileInput
    upsert?: UserUpsertWithoutParticipantProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipantProfileInput, UserUpdateWithoutParticipantProfileInput>, UserUncheckedUpdateWithoutParticipantProfileInput>
  }

  export type AnalysisEntryUpdateManyWithoutParticipantProfileNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput> | AnalysisEntryCreateWithoutParticipantProfileInput[] | AnalysisEntryUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutParticipantProfileInput | AnalysisEntryCreateOrConnectWithoutParticipantProfileInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutParticipantProfileInput | AnalysisEntryUpsertWithWhereUniqueWithoutParticipantProfileInput[]
    createMany?: AnalysisEntryCreateManyParticipantProfileInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutParticipantProfileInput | AnalysisEntryUpdateWithWhereUniqueWithoutParticipantProfileInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutParticipantProfileInput | AnalysisEntryUpdateManyWithWhereWithoutParticipantProfileInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type ParticipantRatingUpdateManyWithoutParticipantProfileNestedInput = {
    create?: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput> | ParticipantRatingCreateWithoutParticipantProfileInput[] | ParticipantRatingUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutParticipantProfileInput | ParticipantRatingCreateOrConnectWithoutParticipantProfileInput[]
    upsert?: ParticipantRatingUpsertWithWhereUniqueWithoutParticipantProfileInput | ParticipantRatingUpsertWithWhereUniqueWithoutParticipantProfileInput[]
    createMany?: ParticipantRatingCreateManyParticipantProfileInputEnvelope
    set?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    disconnect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    delete?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    connect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    update?: ParticipantRatingUpdateWithWhereUniqueWithoutParticipantProfileInput | ParticipantRatingUpdateWithWhereUniqueWithoutParticipantProfileInput[]
    updateMany?: ParticipantRatingUpdateManyWithWhereWithoutParticipantProfileInput | ParticipantRatingUpdateManyWithWhereWithoutParticipantProfileInput[]
    deleteMany?: ParticipantRatingScalarWhereInput | ParticipantRatingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput> | AnalysisEntryCreateWithoutParticipantProfileInput[] | AnalysisEntryUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutParticipantProfileInput | AnalysisEntryCreateOrConnectWithoutParticipantProfileInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutParticipantProfileInput | AnalysisEntryUpsertWithWhereUniqueWithoutParticipantProfileInput[]
    createMany?: AnalysisEntryCreateManyParticipantProfileInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutParticipantProfileInput | AnalysisEntryUpdateWithWhereUniqueWithoutParticipantProfileInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutParticipantProfileInput | AnalysisEntryUpdateManyWithWhereWithoutParticipantProfileInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileNestedInput = {
    create?: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput> | ParticipantRatingCreateWithoutParticipantProfileInput[] | ParticipantRatingUncheckedCreateWithoutParticipantProfileInput[]
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutParticipantProfileInput | ParticipantRatingCreateOrConnectWithoutParticipantProfileInput[]
    upsert?: ParticipantRatingUpsertWithWhereUniqueWithoutParticipantProfileInput | ParticipantRatingUpsertWithWhereUniqueWithoutParticipantProfileInput[]
    createMany?: ParticipantRatingCreateManyParticipantProfileInputEnvelope
    set?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    disconnect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    delete?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    connect?: ParticipantRatingWhereUniqueInput | ParticipantRatingWhereUniqueInput[]
    update?: ParticipantRatingUpdateWithWhereUniqueWithoutParticipantProfileInput | ParticipantRatingUpdateWithWhereUniqueWithoutParticipantProfileInput[]
    updateMany?: ParticipantRatingUpdateManyWithWhereWithoutParticipantProfileInput | ParticipantRatingUpdateManyWithWhereWithoutParticipantProfileInput[]
    deleteMany?: ParticipantRatingScalarWhereInput | ParticipantRatingScalarWhereInput[]
  }

  export type ParticipantProfileCreateNestedOneWithoutParticipantRatingInput = {
    create?: XOR<ParticipantProfileCreateWithoutParticipantRatingInput, ParticipantProfileUncheckedCreateWithoutParticipantRatingInput>
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutParticipantRatingInput
    connect?: ParticipantProfileWhereUniqueInput
  }

  export type AnalysisEntryCreateNestedManyWithoutRatingsInput = {
    create?: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput> | AnalysisEntryCreateWithoutRatingsInput[] | AnalysisEntryUncheckedCreateWithoutRatingsInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutRatingsInput | AnalysisEntryCreateOrConnectWithoutRatingsInput[]
    createMany?: AnalysisEntryCreateManyRatingsInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type AnalysisEntryUncheckedCreateNestedManyWithoutRatingsInput = {
    create?: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput> | AnalysisEntryCreateWithoutRatingsInput[] | AnalysisEntryUncheckedCreateWithoutRatingsInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutRatingsInput | AnalysisEntryCreateOrConnectWithoutRatingsInput[]
    createMany?: AnalysisEntryCreateManyRatingsInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type ParticipantProfileUpdateOneRequiredWithoutParticipantRatingNestedInput = {
    create?: XOR<ParticipantProfileCreateWithoutParticipantRatingInput, ParticipantProfileUncheckedCreateWithoutParticipantRatingInput>
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutParticipantRatingInput
    upsert?: ParticipantProfileUpsertWithoutParticipantRatingInput
    connect?: ParticipantProfileWhereUniqueInput
    update?: XOR<XOR<ParticipantProfileUpdateToOneWithWhereWithoutParticipantRatingInput, ParticipantProfileUpdateWithoutParticipantRatingInput>, ParticipantProfileUncheckedUpdateWithoutParticipantRatingInput>
  }

  export type AnalysisEntryUpdateManyWithoutRatingsNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput> | AnalysisEntryCreateWithoutRatingsInput[] | AnalysisEntryUncheckedCreateWithoutRatingsInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutRatingsInput | AnalysisEntryCreateOrConnectWithoutRatingsInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutRatingsInput | AnalysisEntryUpsertWithWhereUniqueWithoutRatingsInput[]
    createMany?: AnalysisEntryCreateManyRatingsInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutRatingsInput | AnalysisEntryUpdateWithWhereUniqueWithoutRatingsInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutRatingsInput | AnalysisEntryUpdateManyWithWhereWithoutRatingsInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutRatingsNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput> | AnalysisEntryCreateWithoutRatingsInput[] | AnalysisEntryUncheckedCreateWithoutRatingsInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutRatingsInput | AnalysisEntryCreateOrConnectWithoutRatingsInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutRatingsInput | AnalysisEntryUpsertWithWhereUniqueWithoutRatingsInput[]
    createMany?: AnalysisEntryCreateManyRatingsInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutRatingsInput | AnalysisEntryUpdateWithWhereUniqueWithoutRatingsInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutRatingsInput | AnalysisEntryUpdateManyWithWhereWithoutRatingsInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomerProfileInput = {
    create?: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCustomerProfileNestedInput = {
    create?: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomerProfileInput
    upsert?: UserUpsertWithoutCustomerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomerProfileInput, UserUpdateWithoutCustomerProfileInput>, UserUncheckedUpdateWithoutCustomerProfileInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type CompanyCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionInput, CompanyUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<CompanyCreateWithoutSubscriptionInput, CompanyUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSubscriptionInput
    upsert?: CompanyUpsertWithoutSubscriptionInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSubscriptionInput, CompanyUpdateWithoutSubscriptionInput>, CompanyUncheckedUpdateWithoutSubscriptionInput>
  }

  export type CompanyCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<CompanyCreateWithoutAnalysisInput, CompanyUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAnalysisInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<UserCreateWithoutAnalysisInput, UserUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisInput
    connect?: UserWhereUniqueInput
  }

  export type AnalysisEntryCreateNestedManyWithoutAnalysisInput = {
    create?: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput> | AnalysisEntryCreateWithoutAnalysisInput[] | AnalysisEntryUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutAnalysisInput | AnalysisEntryCreateOrConnectWithoutAnalysisInput[]
    createMany?: AnalysisEntryCreateManyAnalysisInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type AnalysisEntryUncheckedCreateNestedManyWithoutAnalysisInput = {
    create?: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput> | AnalysisEntryCreateWithoutAnalysisInput[] | AnalysisEntryUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutAnalysisInput | AnalysisEntryCreateOrConnectWithoutAnalysisInput[]
    createMany?: AnalysisEntryCreateManyAnalysisInputEnvelope
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type EnumAnalysisStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisStatus
  }

  export type EnumRecruitmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecruitmentType
  }

  export type EnumGendersFieldUpdateOperationsInput = {
    set?: $Enums.Genders
  }

  export type EnumCountryFieldUpdateOperationsInput = {
    set?: $Enums.Country
  }

  export type EnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel
  }

  export type EnumTechnicalProficiencyFieldUpdateOperationsInput = {
    set?: $Enums.TechnicalProficiency
  }

  export type EnumParentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParentalStatus
  }

  export type CompanyUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<CompanyCreateWithoutAnalysisInput, CompanyUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutAnalysisInput
    upsert?: CompanyUpsertWithoutAnalysisInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutAnalysisInput, CompanyUpdateWithoutAnalysisInput>, CompanyUncheckedUpdateWithoutAnalysisInput>
  }

  export type UserUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<UserCreateWithoutAnalysisInput, UserUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisInput
    upsert?: UserUpsertWithoutAnalysisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysisInput, UserUpdateWithoutAnalysisInput>, UserUncheckedUpdateWithoutAnalysisInput>
  }

  export type AnalysisEntryUpdateManyWithoutAnalysisNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput> | AnalysisEntryCreateWithoutAnalysisInput[] | AnalysisEntryUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutAnalysisInput | AnalysisEntryCreateOrConnectWithoutAnalysisInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutAnalysisInput | AnalysisEntryUpsertWithWhereUniqueWithoutAnalysisInput[]
    createMany?: AnalysisEntryCreateManyAnalysisInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutAnalysisInput | AnalysisEntryUpdateWithWhereUniqueWithoutAnalysisInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutAnalysisInput | AnalysisEntryUpdateManyWithWhereWithoutAnalysisInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutAnalysisNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput> | AnalysisEntryCreateWithoutAnalysisInput[] | AnalysisEntryUncheckedCreateWithoutAnalysisInput[]
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutAnalysisInput | AnalysisEntryCreateOrConnectWithoutAnalysisInput[]
    upsert?: AnalysisEntryUpsertWithWhereUniqueWithoutAnalysisInput | AnalysisEntryUpsertWithWhereUniqueWithoutAnalysisInput[]
    createMany?: AnalysisEntryCreateManyAnalysisInputEnvelope
    set?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    disconnect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    delete?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    connect?: AnalysisEntryWhereUniqueInput | AnalysisEntryWhereUniqueInput[]
    update?: AnalysisEntryUpdateWithWhereUniqueWithoutAnalysisInput | AnalysisEntryUpdateWithWhereUniqueWithoutAnalysisInput[]
    updateMany?: AnalysisEntryUpdateManyWithWhereWithoutAnalysisInput | AnalysisEntryUpdateManyWithWhereWithoutAnalysisInput[]
    deleteMany?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
  }

  export type AnalysisCreateNestedOneWithoutAnalysisEntryInput = {
    create?: XOR<AnalysisCreateWithoutAnalysisEntryInput, AnalysisUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: AnalysisCreateOrConnectWithoutAnalysisEntryInput
    connect?: AnalysisWhereUniqueInput
  }

  export type ParticipantProfileCreateNestedOneWithoutAnalysisEntryInput = {
    create?: XOR<ParticipantProfileCreateWithoutAnalysisEntryInput, ParticipantProfileUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutAnalysisEntryInput
    connect?: ParticipantProfileWhereUniqueInput
  }

  export type TranscriptionJobCreateNestedManyWithoutAnalysisEntryInput = {
    create?: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput> | TranscriptionJobCreateWithoutAnalysisEntryInput[] | TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput[]
    connectOrCreate?: TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput | TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput[]
    createMany?: TranscriptionJobCreateManyAnalysisEntryInputEnvelope
    connect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
  }

  export type ParticipantRatingCreateNestedOneWithoutAnalysisEntryInput = {
    create?: XOR<ParticipantRatingCreateWithoutAnalysisEntryInput, ParticipantRatingUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutAnalysisEntryInput
    connect?: ParticipantRatingWhereUniqueInput
  }

  export type TranscriptionJobUncheckedCreateNestedManyWithoutAnalysisEntryInput = {
    create?: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput> | TranscriptionJobCreateWithoutAnalysisEntryInput[] | TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput[]
    connectOrCreate?: TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput | TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput[]
    createMany?: TranscriptionJobCreateManyAnalysisEntryInputEnvelope
    connect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
  }

  export type EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnalysisEntryCompletionStatus
  }

  export type AnalysisUpdateOneRequiredWithoutAnalysisEntryNestedInput = {
    create?: XOR<AnalysisCreateWithoutAnalysisEntryInput, AnalysisUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: AnalysisCreateOrConnectWithoutAnalysisEntryInput
    upsert?: AnalysisUpsertWithoutAnalysisEntryInput
    connect?: AnalysisWhereUniqueInput
    update?: XOR<XOR<AnalysisUpdateToOneWithWhereWithoutAnalysisEntryInput, AnalysisUpdateWithoutAnalysisEntryInput>, AnalysisUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type ParticipantProfileUpdateOneWithoutAnalysisEntryNestedInput = {
    create?: XOR<ParticipantProfileCreateWithoutAnalysisEntryInput, ParticipantProfileUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: ParticipantProfileCreateOrConnectWithoutAnalysisEntryInput
    upsert?: ParticipantProfileUpsertWithoutAnalysisEntryInput
    disconnect?: ParticipantProfileWhereInput | boolean
    delete?: ParticipantProfileWhereInput | boolean
    connect?: ParticipantProfileWhereUniqueInput
    update?: XOR<XOR<ParticipantProfileUpdateToOneWithWhereWithoutAnalysisEntryInput, ParticipantProfileUpdateWithoutAnalysisEntryInput>, ParticipantProfileUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobUpdateManyWithoutAnalysisEntryNestedInput = {
    create?: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput> | TranscriptionJobCreateWithoutAnalysisEntryInput[] | TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput[]
    connectOrCreate?: TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput | TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput[]
    upsert?: TranscriptionJobUpsertWithWhereUniqueWithoutAnalysisEntryInput | TranscriptionJobUpsertWithWhereUniqueWithoutAnalysisEntryInput[]
    createMany?: TranscriptionJobCreateManyAnalysisEntryInputEnvelope
    set?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    disconnect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    delete?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    connect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    update?: TranscriptionJobUpdateWithWhereUniqueWithoutAnalysisEntryInput | TranscriptionJobUpdateWithWhereUniqueWithoutAnalysisEntryInput[]
    updateMany?: TranscriptionJobUpdateManyWithWhereWithoutAnalysisEntryInput | TranscriptionJobUpdateManyWithWhereWithoutAnalysisEntryInput[]
    deleteMany?: TranscriptionJobScalarWhereInput | TranscriptionJobScalarWhereInput[]
  }

  export type ParticipantRatingUpdateOneWithoutAnalysisEntryNestedInput = {
    create?: XOR<ParticipantRatingCreateWithoutAnalysisEntryInput, ParticipantRatingUncheckedCreateWithoutAnalysisEntryInput>
    connectOrCreate?: ParticipantRatingCreateOrConnectWithoutAnalysisEntryInput
    upsert?: ParticipantRatingUpsertWithoutAnalysisEntryInput
    disconnect?: ParticipantRatingWhereInput | boolean
    delete?: ParticipantRatingWhereInput | boolean
    connect?: ParticipantRatingWhereUniqueInput
    update?: XOR<XOR<ParticipantRatingUpdateToOneWithWhereWithoutAnalysisEntryInput, ParticipantRatingUpdateWithoutAnalysisEntryInput>, ParticipantRatingUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryNestedInput = {
    create?: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput> | TranscriptionJobCreateWithoutAnalysisEntryInput[] | TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput[]
    connectOrCreate?: TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput | TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput[]
    upsert?: TranscriptionJobUpsertWithWhereUniqueWithoutAnalysisEntryInput | TranscriptionJobUpsertWithWhereUniqueWithoutAnalysisEntryInput[]
    createMany?: TranscriptionJobCreateManyAnalysisEntryInputEnvelope
    set?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    disconnect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    delete?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    connect?: TranscriptionJobWhereUniqueInput | TranscriptionJobWhereUniqueInput[]
    update?: TranscriptionJobUpdateWithWhereUniqueWithoutAnalysisEntryInput | TranscriptionJobUpdateWithWhereUniqueWithoutAnalysisEntryInput[]
    updateMany?: TranscriptionJobUpdateManyWithWhereWithoutAnalysisEntryInput | TranscriptionJobUpdateManyWithWhereWithoutAnalysisEntryInput[]
    deleteMany?: TranscriptionJobScalarWhereInput | TranscriptionJobScalarWhereInput[]
  }

  export type AnalysisEntryCreateNestedOneWithoutTranscriptionJobInput = {
    create?: XOR<AnalysisEntryCreateWithoutTranscriptionJobInput, AnalysisEntryUncheckedCreateWithoutTranscriptionJobInput>
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutTranscriptionJobInput
    connect?: AnalysisEntryWhereUniqueInput
  }

  export type EnumTranscriptionJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.TranscriptionJobStatus
  }

  export type AnalysisEntryUpdateOneRequiredWithoutTranscriptionJobNestedInput = {
    create?: XOR<AnalysisEntryCreateWithoutTranscriptionJobInput, AnalysisEntryUncheckedCreateWithoutTranscriptionJobInput>
    connectOrCreate?: AnalysisEntryCreateOrConnectWithoutTranscriptionJobInput
    upsert?: AnalysisEntryUpsertWithoutTranscriptionJobInput
    connect?: AnalysisEntryWhereUniqueInput
    update?: XOR<XOR<AnalysisEntryUpdateToOneWithWhereWithoutTranscriptionJobInput, AnalysisEntryUpdateWithoutTranscriptionJobInput>, AnalysisEntryUncheckedUpdateWithoutTranscriptionJobInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumGendersNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGendersNullableFilter<$PrismaModel> | $Enums.Genders | null
  }

  export type NestedEnumCountryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryNullableFilter<$PrismaModel> | $Enums.Country | null
  }

  export type NestedEnumEducationLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableFilter<$PrismaModel> | $Enums.EducationLevel | null
  }

  export type NestedEnumParentalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumParentalStatusNullableFilter<$PrismaModel> | $Enums.ParentalStatus | null
  }

  export type NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel> | $Enums.TechnicalProficiency | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGendersNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel> | null
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGendersNullableWithAggregatesFilter<$PrismaModel> | $Enums.Genders | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGendersNullableFilter<$PrismaModel>
    _max?: NestedEnumGendersNullableFilter<$PrismaModel>
  }

  export type NestedEnumCountryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel> | null
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCountryNullableWithAggregatesFilter<$PrismaModel> | $Enums.Country | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCountryNullableFilter<$PrismaModel>
    _max?: NestedEnumCountryNullableFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEducationLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParentalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumParentalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ParentalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumParentalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumParentalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumTechnicalProficiencyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTechnicalProficiencyNullableWithAggregatesFilter<$PrismaModel> | $Enums.TechnicalProficiency | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel>
    _max?: NestedEnumTechnicalProficiencyNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumAnalysisStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusFilter<$PrismaModel> | $Enums.AnalysisStatus
  }

  export type NestedEnumRecruitmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RecruitmentType | EnumRecruitmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecruitmentTypeFilter<$PrismaModel> | $Enums.RecruitmentType
  }

  export type NestedEnumGendersFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersFilter<$PrismaModel> | $Enums.Genders
  }

  export type NestedEnumCountryFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel>
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryFilter<$PrismaModel> | $Enums.Country
  }

  export type NestedEnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type NestedEnumTechnicalProficiencyFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicalProficiencyFilter<$PrismaModel> | $Enums.TechnicalProficiency
  }

  export type NestedEnumParentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentalStatusFilter<$PrismaModel> | $Enums.ParentalStatus
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisStatus | EnumAnalysisStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisStatus[] | ListEnumAnalysisStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisStatusFilter<$PrismaModel>
  }

  export type NestedEnumRecruitmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecruitmentType | EnumRecruitmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecruitmentType[] | ListEnumRecruitmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRecruitmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.RecruitmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecruitmentTypeFilter<$PrismaModel>
    _max?: NestedEnumRecruitmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumGendersWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genders | EnumGendersFieldRefInput<$PrismaModel>
    in?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genders[] | ListEnumGendersFieldRefInput<$PrismaModel>
    not?: NestedEnumGendersWithAggregatesFilter<$PrismaModel> | $Enums.Genders
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGendersFilter<$PrismaModel>
    _max?: NestedEnumGendersFilter<$PrismaModel>
  }

  export type NestedEnumCountryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Country | EnumCountryFieldRefInput<$PrismaModel>
    in?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Country[] | ListEnumCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryWithAggregatesFilter<$PrismaModel> | $Enums.Country
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryFilter<$PrismaModel>
    _max?: NestedEnumCountryFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type NestedEnumTechnicalProficiencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnicalProficiency | EnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    in?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TechnicalProficiency[] | ListEnumTechnicalProficiencyFieldRefInput<$PrismaModel>
    not?: NestedEnumTechnicalProficiencyWithAggregatesFilter<$PrismaModel> | $Enums.TechnicalProficiency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTechnicalProficiencyFilter<$PrismaModel>
    _max?: NestedEnumTechnicalProficiencyFilter<$PrismaModel>
  }

  export type NestedEnumParentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParentalStatus | EnumParentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParentalStatus[] | ListEnumParentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParentalStatusFilter<$PrismaModel>
    _max?: NestedEnumParentalStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisEntryCompletionStatus | EnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel> | $Enums.AnalysisEntryCompletionStatus
  }

  export type NestedEnumAnalysisEntryCompletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnalysisEntryCompletionStatus | EnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnalysisEntryCompletionStatus[] | ListEnumAnalysisEntryCompletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnalysisEntryCompletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnalysisEntryCompletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel>
    _max?: NestedEnumAnalysisEntryCompletionStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTranscriptionJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TranscriptionJobStatus | EnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel> | $Enums.TranscriptionJobStatus
  }

  export type NestedEnumTranscriptionJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TranscriptionJobStatus | EnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TranscriptionJobStatus[] | ListEnumTranscriptionJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTranscriptionJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.TranscriptionJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel>
    _max?: NestedEnumTranscriptionJobStatusFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUserInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokensCreateWithoutUserInput = {
    id?: string
    token_expires: Date | string
    created_at?: Date | string
  }

  export type PasswordResetTokensUncheckedCreateWithoutUserInput = {
    id?: string
    token_expires: Date | string
    created_at?: Date | string
  }

  export type PasswordResetTokensCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokensWhereUniqueInput
    create: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokensCreateManyUserInputEnvelope = {
    data: PasswordResetTokensCreateManyUserInput | PasswordResetTokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisCreateWithoutUserInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    Company: CompanyCreateNestedOneWithoutAnalysisInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisCreateOrConnectWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisCreateManyUserInputEnvelope = {
    data: AnalysisCreateManyUserInput | AnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantProfileCreateWithoutUserInput = {
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutParticipantProfileInput
    ParticipantRating?: ParticipantRatingCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutParticipantProfileInput
    ParticipantRating?: ParticipantRatingUncheckedCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileCreateOrConnectWithoutUserInput = {
    where: ParticipantProfileWhereUniqueInput
    create: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput>
  }

  export type ParticipantProfileCreateManyUserInputEnvelope = {
    data: ParticipantProfileCreateManyUserInput | ParticipantProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerProfileCreateWithoutUserInput = {
    company_name?: string | null
    position?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfileUncheckedCreateWithoutUserInput = {
    id?: number
    company_name?: string | null
    position?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfileCreateOrConnectWithoutUserInput = {
    where: CustomerProfileWhereUniqueInput
    create: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
  }

  export type CustomerProfileCreateManyUserInputEnvelope = {
    data: CustomerProfileCreateManyUserInput | CustomerProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUncheckedUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type PasswordResetTokensUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokensWhereUniqueInput
    update: XOR<PasswordResetTokensUpdateWithoutUserInput, PasswordResetTokensUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokensCreateWithoutUserInput, PasswordResetTokensUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokensUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokensWhereUniqueInput
    data: XOR<PasswordResetTokensUpdateWithoutUserInput, PasswordResetTokensUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokensUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokensScalarWhereInput
    data: XOR<PasswordResetTokensUpdateManyMutationInput, PasswordResetTokensUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokensScalarWhereInput = {
    AND?: PasswordResetTokensScalarWhereInput | PasswordResetTokensScalarWhereInput[]
    OR?: PasswordResetTokensScalarWhereInput[]
    NOT?: PasswordResetTokensScalarWhereInput | PasswordResetTokensScalarWhereInput[]
    id?: StringFilter<"PasswordResetTokens"> | string
    user_id?: StringFilter<"PasswordResetTokens"> | string
    token_expires?: DateTimeFilter<"PasswordResetTokens"> | Date | string
    created_at?: DateTimeFilter<"PasswordResetTokens"> | Date | string
  }

  export type AnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisScalarWhereInput = {
    AND?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    OR?: AnalysisScalarWhereInput[]
    NOT?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    id?: StringFilter<"Analysis"> | string
    owner_company_id?: StringFilter<"Analysis"> | string
    device?: EnumDeviceTypeFilter<"Analysis"> | $Enums.DeviceType
    name?: StringFilter<"Analysis"> | string
    scenario?: StringNullableFilter<"Analysis"> | string | null
    created_by?: StringFilter<"Analysis"> | string
    tasks?: JsonFilter<"Analysis">
    url?: StringFilter<"Analysis"> | string
    status?: EnumAnalysisStatusFilter<"Analysis"> | $Enums.AnalysisStatus
    created_at?: DateTimeFilter<"Analysis"> | Date | string
    updated_at?: DateTimeFilter<"Analysis"> | Date | string
    max_number_of_participants?: IntFilter<"Analysis"> | number
    recruitment_type?: EnumRecruitmentTypeFilter<"Analysis"> | $Enums.RecruitmentType
    min_age?: IntFilter<"Analysis"> | number
    max_age?: IntFilter<"Analysis"> | number
    gender?: EnumGendersFilter<"Analysis"> | $Enums.Genders
    country?: EnumCountryFilter<"Analysis"> | $Enums.Country
    education_level?: EnumEducationLevelFilter<"Analysis"> | $Enums.EducationLevel
    min_yearly_income?: IntFilter<"Analysis"> | number
    max_yearly_income?: IntFilter<"Analysis"> | number
    technical_proficiency?: EnumTechnicalProficiencyFilter<"Analysis"> | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFilter<"Analysis"> | $Enums.ParentalStatus
    available_spots?: IntFilter<"Analysis"> | number
  }

  export type ParticipantProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipantProfileWhereUniqueInput
    update: XOR<ParticipantProfileUpdateWithoutUserInput, ParticipantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipantProfileCreateWithoutUserInput, ParticipantProfileUncheckedCreateWithoutUserInput>
  }

  export type ParticipantProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipantProfileWhereUniqueInput
    data: XOR<ParticipantProfileUpdateWithoutUserInput, ParticipantProfileUncheckedUpdateWithoutUserInput>
  }

  export type ParticipantProfileUpdateManyWithWhereWithoutUserInput = {
    where: ParticipantProfileScalarWhereInput
    data: XOR<ParticipantProfileUpdateManyMutationInput, ParticipantProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipantProfileScalarWhereInput = {
    AND?: ParticipantProfileScalarWhereInput | ParticipantProfileScalarWhereInput[]
    OR?: ParticipantProfileScalarWhereInput[]
    NOT?: ParticipantProfileScalarWhereInput | ParticipantProfileScalarWhereInput[]
    id?: IntFilter<"ParticipantProfile"> | number
    name?: StringNullableFilter<"ParticipantProfile"> | string | null
    last_name?: StringNullableFilter<"ParticipantProfile"> | string | null
    nif?: StringNullableFilter<"ParticipantProfile"> | string | null
    payment_address?: StringNullableFilter<"ParticipantProfile"> | string | null
    birth_date?: DateTimeNullableFilter<"ParticipantProfile"> | Date | string | null
    gender?: EnumGendersNullableFilter<"ParticipantProfile"> | $Enums.Genders | null
    country?: EnumCountryNullableFilter<"ParticipantProfile"> | $Enums.Country | null
    available_devices?: EnumDeviceTypeNullableListFilter<"ParticipantProfile">
    education_level?: EnumEducationLevelNullableFilter<"ParticipantProfile"> | $Enums.EducationLevel | null
    yearly_income?: IntNullableFilter<"ParticipantProfile"> | number | null
    parental_status?: EnumParentalStatusNullableFilter<"ParticipantProfile"> | $Enums.ParentalStatus | null
    technical_proficiency?: EnumTechnicalProficiencyNullableFilter<"ParticipantProfile"> | $Enums.TechnicalProficiency | null
    approved?: BoolFilter<"ParticipantProfile"> | boolean
    created_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantProfile"> | Date | string
    user_id?: StringFilter<"ParticipantProfile"> | string
  }

  export type CustomerProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerProfileWhereUniqueInput
    update: XOR<CustomerProfileUpdateWithoutUserInput, CustomerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerProfileCreateWithoutUserInput, CustomerProfileUncheckedCreateWithoutUserInput>
  }

  export type CustomerProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerProfileWhereUniqueInput
    data: XOR<CustomerProfileUpdateWithoutUserInput, CustomerProfileUncheckedUpdateWithoutUserInput>
  }

  export type CustomerProfileUpdateManyWithWhereWithoutUserInput = {
    where: CustomerProfileScalarWhereInput
    data: XOR<CustomerProfileUpdateManyMutationInput, CustomerProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerProfileScalarWhereInput = {
    AND?: CustomerProfileScalarWhereInput | CustomerProfileScalarWhereInput[]
    OR?: CustomerProfileScalarWhereInput[]
    NOT?: CustomerProfileScalarWhereInput | CustomerProfileScalarWhereInput[]
    id?: IntFilter<"CustomerProfile"> | number
    company_name?: StringNullableFilter<"CustomerProfile"> | string | null
    position?: StringNullableFilter<"CustomerProfile"> | string | null
    user_id?: StringFilter<"CustomerProfile"> | string
    created_at?: DateTimeFilter<"CustomerProfile"> | Date | string
    updated_at?: DateTimeFilter<"CustomerProfile"> | Date | string
  }

  export type AnalysisCreateWithoutCompanyInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    User: UserCreateNestedOneWithoutAnalysisInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisUncheckedCreateWithoutCompanyInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    created_by: string
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutAnalysisInput
  }

  export type AnalysisCreateOrConnectWithoutCompanyInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput>
  }

  export type AnalysisCreateManyCompanyInputEnvelope = {
    data: AnalysisCreateManyCompanyInput | AnalysisCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensCreateNestedManyWithoutUserInput
    Analysis?: AnalysisCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileUncheckedCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
  }

  export type SubscriptionUncheckedCreateWithoutCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
  }

  export type SubscriptionCreateOrConnectWithoutCompanyInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput>
  }

  export type SubscriptionCreateManyCompanyInputEnvelope = {
    data: SubscriptionCreateManyCompanyInput | SubscriptionCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisUpsertWithWhereUniqueWithoutCompanyInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutCompanyInput, AnalysisUncheckedUpdateWithoutCompanyInput>
    create: XOR<AnalysisCreateWithoutCompanyInput, AnalysisUncheckedCreateWithoutCompanyInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutCompanyInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutCompanyInput, AnalysisUncheckedUpdateWithoutCompanyInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutCompanyInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    created_at?: DateTimeFilter<"User"> | Date | string
    last_updated_at?: DateTimeFilter<"User"> | Date | string
    last_login_at?: DateTimeNullableFilter<"User"> | Date | string | null
    company_id?: StringNullableFilter<"User"> | string | null
    utm_source?: StringNullableFilter<"User"> | string | null
    utm_medium?: StringNullableFilter<"User"> | string | null
    utm_campaign?: StringNullableFilter<"User"> | string | null
    utm_content?: StringNullableFilter<"User"> | string | null
    utm_term?: StringNullableFilter<"User"> | string | null
    gclid?: StringNullableFilter<"User"> | string | null
    fbclid?: StringNullableFilter<"User"> | string | null
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutCompanyInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutCompanyInput, SubscriptionUncheckedUpdateWithoutCompanyInput>
    create: XOR<SubscriptionCreateWithoutCompanyInput, SubscriptionUncheckedCreateWithoutCompanyInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutCompanyInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutCompanyInput, SubscriptionUncheckedUpdateWithoutCompanyInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutCompanyInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutCompanyInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    company_id?: StringFilter<"Subscription"> | string
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    expires_at?: DateTimeNullableFilter<"Subscription"> | Date | string | null
  }

  export type UserCreateWithoutParticipantProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Company?: CompanyCreateNestedOneWithoutUserInput
    PasswordResetTokens?: PasswordResetTokensCreateNestedManyWithoutUserInput
    Analysis?: AnalysisCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipantProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipantProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipantProfileInput, UserUncheckedCreateWithoutParticipantProfileInput>
  }

  export type AnalysisEntryCreateWithoutParticipantProfileInput = {
    id?: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    Analysis: AnalysisCreateNestedOneWithoutAnalysisEntryInput
    transcriptionJob?: TranscriptionJobCreateNestedManyWithoutAnalysisEntryInput
    ratings?: ParticipantRatingCreateNestedOneWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUncheckedCreateWithoutParticipantProfileInput = {
    id?: string
    analysis_id: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
    transcriptionJob?: TranscriptionJobUncheckedCreateNestedManyWithoutAnalysisEntryInput
  }

  export type AnalysisEntryCreateOrConnectWithoutParticipantProfileInput = {
    where: AnalysisEntryWhereUniqueInput
    create: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput>
  }

  export type AnalysisEntryCreateManyParticipantProfileInputEnvelope = {
    data: AnalysisEntryCreateManyParticipantProfileInput | AnalysisEntryCreateManyParticipantProfileInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantRatingCreateWithoutParticipantProfileInput = {
    created_at?: Date | string
    updated_at?: Date | string
    score: number
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutRatingsInput
  }

  export type ParticipantRatingUncheckedCreateWithoutParticipantProfileInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    score: number
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutRatingsInput
  }

  export type ParticipantRatingCreateOrConnectWithoutParticipantProfileInput = {
    where: ParticipantRatingWhereUniqueInput
    create: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput>
  }

  export type ParticipantRatingCreateManyParticipantProfileInputEnvelope = {
    data: ParticipantRatingCreateManyParticipantProfileInput | ParticipantRatingCreateManyParticipantProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutParticipantProfileInput = {
    update: XOR<UserUpdateWithoutParticipantProfileInput, UserUncheckedUpdateWithoutParticipantProfileInput>
    create: XOR<UserCreateWithoutParticipantProfileInput, UserUncheckedCreateWithoutParticipantProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipantProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipantProfileInput, UserUncheckedUpdateWithoutParticipantProfileInput>
  }

  export type UserUpdateWithoutParticipantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Company?: CompanyUpdateOneWithoutUserNestedInput
    PasswordResetTokens?: PasswordResetTokensUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisEntryUpsertWithWhereUniqueWithoutParticipantProfileInput = {
    where: AnalysisEntryWhereUniqueInput
    update: XOR<AnalysisEntryUpdateWithoutParticipantProfileInput, AnalysisEntryUncheckedUpdateWithoutParticipantProfileInput>
    create: XOR<AnalysisEntryCreateWithoutParticipantProfileInput, AnalysisEntryUncheckedCreateWithoutParticipantProfileInput>
  }

  export type AnalysisEntryUpdateWithWhereUniqueWithoutParticipantProfileInput = {
    where: AnalysisEntryWhereUniqueInput
    data: XOR<AnalysisEntryUpdateWithoutParticipantProfileInput, AnalysisEntryUncheckedUpdateWithoutParticipantProfileInput>
  }

  export type AnalysisEntryUpdateManyWithWhereWithoutParticipantProfileInput = {
    where: AnalysisEntryScalarWhereInput
    data: XOR<AnalysisEntryUpdateManyMutationInput, AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileInput>
  }

  export type AnalysisEntryScalarWhereInput = {
    AND?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
    OR?: AnalysisEntryScalarWhereInput[]
    NOT?: AnalysisEntryScalarWhereInput | AnalysisEntryScalarWhereInput[]
    id?: StringFilter<"AnalysisEntry"> | string
    analysis_id?: StringFilter<"AnalysisEntry"> | string
    user_id?: StringNullableFilter<"AnalysisEntry"> | string | null
    status?: EnumAnalysisEntryCompletionStatusFilter<"AnalysisEntry"> | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    updated_at?: DateTimeFilter<"AnalysisEntry"> | Date | string
    transcription_segments?: JsonNullableFilter<"AnalysisEntry">
    full_transcript?: StringNullableFilter<"AnalysisEntry"> | string | null
    ratingsId?: IntNullableFilter<"AnalysisEntry"> | number | null
  }

  export type ParticipantRatingUpsertWithWhereUniqueWithoutParticipantProfileInput = {
    where: ParticipantRatingWhereUniqueInput
    update: XOR<ParticipantRatingUpdateWithoutParticipantProfileInput, ParticipantRatingUncheckedUpdateWithoutParticipantProfileInput>
    create: XOR<ParticipantRatingCreateWithoutParticipantProfileInput, ParticipantRatingUncheckedCreateWithoutParticipantProfileInput>
  }

  export type ParticipantRatingUpdateWithWhereUniqueWithoutParticipantProfileInput = {
    where: ParticipantRatingWhereUniqueInput
    data: XOR<ParticipantRatingUpdateWithoutParticipantProfileInput, ParticipantRatingUncheckedUpdateWithoutParticipantProfileInput>
  }

  export type ParticipantRatingUpdateManyWithWhereWithoutParticipantProfileInput = {
    where: ParticipantRatingScalarWhereInput
    data: XOR<ParticipantRatingUpdateManyMutationInput, ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileInput>
  }

  export type ParticipantRatingScalarWhereInput = {
    AND?: ParticipantRatingScalarWhereInput | ParticipantRatingScalarWhereInput[]
    OR?: ParticipantRatingScalarWhereInput[]
    NOT?: ParticipantRatingScalarWhereInput | ParticipantRatingScalarWhereInput[]
    id?: IntFilter<"ParticipantRating"> | number
    created_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    updated_at?: DateTimeFilter<"ParticipantRating"> | Date | string
    user_id?: IntFilter<"ParticipantRating"> | number
    score?: IntFilter<"ParticipantRating"> | number
  }

  export type ParticipantProfileCreateWithoutParticipantRatingInput = {
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutParticipantProfileInput
    AnalysisEntry?: AnalysisEntryCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileUncheckedCreateWithoutParticipantRatingInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    AnalysisEntry?: AnalysisEntryUncheckedCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileCreateOrConnectWithoutParticipantRatingInput = {
    where: ParticipantProfileWhereUniqueInput
    create: XOR<ParticipantProfileCreateWithoutParticipantRatingInput, ParticipantProfileUncheckedCreateWithoutParticipantRatingInput>
  }

  export type AnalysisEntryCreateWithoutRatingsInput = {
    id?: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    Analysis: AnalysisCreateNestedOneWithoutAnalysisEntryInput
    ParticipantProfile?: ParticipantProfileCreateNestedOneWithoutAnalysisEntryInput
    transcriptionJob?: TranscriptionJobCreateNestedManyWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUncheckedCreateWithoutRatingsInput = {
    id?: string
    analysis_id: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    transcriptionJob?: TranscriptionJobUncheckedCreateNestedManyWithoutAnalysisEntryInput
  }

  export type AnalysisEntryCreateOrConnectWithoutRatingsInput = {
    where: AnalysisEntryWhereUniqueInput
    create: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput>
  }

  export type AnalysisEntryCreateManyRatingsInputEnvelope = {
    data: AnalysisEntryCreateManyRatingsInput | AnalysisEntryCreateManyRatingsInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantProfileUpsertWithoutParticipantRatingInput = {
    update: XOR<ParticipantProfileUpdateWithoutParticipantRatingInput, ParticipantProfileUncheckedUpdateWithoutParticipantRatingInput>
    create: XOR<ParticipantProfileCreateWithoutParticipantRatingInput, ParticipantProfileUncheckedCreateWithoutParticipantRatingInput>
    where?: ParticipantProfileWhereInput
  }

  export type ParticipantProfileUpdateToOneWithWhereWithoutParticipantRatingInput = {
    where?: ParticipantProfileWhereInput
    data: XOR<ParticipantProfileUpdateWithoutParticipantRatingInput, ParticipantProfileUncheckedUpdateWithoutParticipantRatingInput>
  }

  export type ParticipantProfileUpdateWithoutParticipantRatingInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutParticipantProfileNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileUncheckedUpdateWithoutParticipantRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileNestedInput
  }

  export type AnalysisEntryUpsertWithWhereUniqueWithoutRatingsInput = {
    where: AnalysisEntryWhereUniqueInput
    update: XOR<AnalysisEntryUpdateWithoutRatingsInput, AnalysisEntryUncheckedUpdateWithoutRatingsInput>
    create: XOR<AnalysisEntryCreateWithoutRatingsInput, AnalysisEntryUncheckedCreateWithoutRatingsInput>
  }

  export type AnalysisEntryUpdateWithWhereUniqueWithoutRatingsInput = {
    where: AnalysisEntryWhereUniqueInput
    data: XOR<AnalysisEntryUpdateWithoutRatingsInput, AnalysisEntryUncheckedUpdateWithoutRatingsInput>
  }

  export type AnalysisEntryUpdateManyWithWhereWithoutRatingsInput = {
    where: AnalysisEntryScalarWhereInput
    data: XOR<AnalysisEntryUpdateManyMutationInput, AnalysisEntryUncheckedUpdateManyWithoutRatingsInput>
  }

  export type UserCreateWithoutCustomerProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Company?: CompanyCreateNestedOneWithoutUserInput
    PasswordResetTokens?: PasswordResetTokensCreateNestedManyWithoutUserInput
    Analysis?: AnalysisCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomerProfileInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
  }

  export type UserUpsertWithoutCustomerProfileInput = {
    update: XOR<UserUpdateWithoutCustomerProfileInput, UserUncheckedUpdateWithoutCustomerProfileInput>
    create: XOR<UserCreateWithoutCustomerProfileInput, UserUncheckedCreateWithoutCustomerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomerProfileInput, UserUncheckedUpdateWithoutCustomerProfileInput>
  }

  export type UserUpdateWithoutCustomerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Company?: CompanyUpdateOneWithoutUserNestedInput
    PasswordResetTokens?: PasswordResetTokensUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Company?: CompanyCreateNestedOneWithoutUserInput
    Analysis?: AnalysisCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileUncheckedCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Company?: CompanyUpdateOneWithoutUserNestedInput
    Analysis?: AnalysisUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Analysis?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisCreateNestedManyWithoutCompanyInput
    User?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Analysis?: AnalysisUncheckedCreateNestedManyWithoutCompanyInput
    User?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutSubscriptionInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSubscriptionInput, CompanyUncheckedCreateWithoutSubscriptionInput>
  }

  export type CompanyUpsertWithoutSubscriptionInput = {
    update: XOR<CompanyUpdateWithoutSubscriptionInput, CompanyUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<CompanyCreateWithoutSubscriptionInput, CompanyUncheckedCreateWithoutSubscriptionInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSubscriptionInput, CompanyUncheckedUpdateWithoutSubscriptionInput>
  }

  export type CompanyUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUpdateManyWithoutCompanyNestedInput
    User?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Analysis?: AnalysisUncheckedUpdateManyWithoutCompanyNestedInput
    User?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateWithoutAnalysisInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAnalysisInput = {
    id?: string
    name?: string | null
    stripe_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutCompanyInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutAnalysisInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAnalysisInput, CompanyUncheckedCreateWithoutAnalysisInput>
  }

  export type UserCreateWithoutAnalysisInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    Company?: CompanyCreateNestedOneWithoutUserInput
    PasswordResetTokens?: PasswordResetTokensCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysisInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    company_id?: string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedCreateNestedManyWithoutUserInput
    ParticipantProfile?: ParticipantProfileUncheckedCreateNestedManyWithoutUserInput
    CustomerProfile?: CustomerProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysisInput, UserUncheckedCreateWithoutAnalysisInput>
  }

  export type AnalysisEntryCreateWithoutAnalysisInput = {
    id?: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ParticipantProfile?: ParticipantProfileCreateNestedOneWithoutAnalysisEntryInput
    transcriptionJob?: TranscriptionJobCreateNestedManyWithoutAnalysisEntryInput
    ratings?: ParticipantRatingCreateNestedOneWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUncheckedCreateWithoutAnalysisInput = {
    id?: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
    transcriptionJob?: TranscriptionJobUncheckedCreateNestedManyWithoutAnalysisEntryInput
  }

  export type AnalysisEntryCreateOrConnectWithoutAnalysisInput = {
    where: AnalysisEntryWhereUniqueInput
    create: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput>
  }

  export type AnalysisEntryCreateManyAnalysisInputEnvelope = {
    data: AnalysisEntryCreateManyAnalysisInput | AnalysisEntryCreateManyAnalysisInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutAnalysisInput = {
    update: XOR<CompanyUpdateWithoutAnalysisInput, CompanyUncheckedUpdateWithoutAnalysisInput>
    create: XOR<CompanyCreateWithoutAnalysisInput, CompanyUncheckedCreateWithoutAnalysisInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutAnalysisInput, CompanyUncheckedUpdateWithoutAnalysisInput>
  }

  export type CompanyUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutAnalysisInput = {
    update: XOR<UserUpdateWithoutAnalysisInput, UserUncheckedUpdateWithoutAnalysisInput>
    create: XOR<UserCreateWithoutAnalysisInput, UserUncheckedCreateWithoutAnalysisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysisInput, UserUncheckedUpdateWithoutAnalysisInput>
  }

  export type UserUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    Company?: CompanyUpdateOneWithoutUserNestedInput
    PasswordResetTokens?: PasswordResetTokensUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisEntryUpsertWithWhereUniqueWithoutAnalysisInput = {
    where: AnalysisEntryWhereUniqueInput
    update: XOR<AnalysisEntryUpdateWithoutAnalysisInput, AnalysisEntryUncheckedUpdateWithoutAnalysisInput>
    create: XOR<AnalysisEntryCreateWithoutAnalysisInput, AnalysisEntryUncheckedCreateWithoutAnalysisInput>
  }

  export type AnalysisEntryUpdateWithWhereUniqueWithoutAnalysisInput = {
    where: AnalysisEntryWhereUniqueInput
    data: XOR<AnalysisEntryUpdateWithoutAnalysisInput, AnalysisEntryUncheckedUpdateWithoutAnalysisInput>
  }

  export type AnalysisEntryUpdateManyWithWhereWithoutAnalysisInput = {
    where: AnalysisEntryScalarWhereInput
    data: XOR<AnalysisEntryUpdateManyMutationInput, AnalysisEntryUncheckedUpdateManyWithoutAnalysisInput>
  }

  export type AnalysisCreateWithoutAnalysisEntryInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
    Company: CompanyCreateNestedOneWithoutAnalysisInput
    User: UserCreateNestedOneWithoutAnalysisInput
  }

  export type AnalysisUncheckedCreateWithoutAnalysisEntryInput = {
    id?: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    created_by: string
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
  }

  export type AnalysisCreateOrConnectWithoutAnalysisEntryInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutAnalysisEntryInput, AnalysisUncheckedCreateWithoutAnalysisEntryInput>
  }

  export type ParticipantProfileCreateWithoutAnalysisEntryInput = {
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    User: UserCreateNestedOneWithoutParticipantProfileInput
    ParticipantRating?: ParticipantRatingCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileUncheckedCreateWithoutAnalysisEntryInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    ParticipantRating?: ParticipantRatingUncheckedCreateNestedManyWithoutParticipantProfileInput
  }

  export type ParticipantProfileCreateOrConnectWithoutAnalysisEntryInput = {
    where: ParticipantProfileWhereUniqueInput
    create: XOR<ParticipantProfileCreateWithoutAnalysisEntryInput, ParticipantProfileUncheckedCreateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobCreateWithoutAnalysisEntryInput = {
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
  }

  export type TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput = {
    id?: number
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
  }

  export type TranscriptionJobCreateOrConnectWithoutAnalysisEntryInput = {
    where: TranscriptionJobWhereUniqueInput
    create: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobCreateManyAnalysisEntryInputEnvelope = {
    data: TranscriptionJobCreateManyAnalysisEntryInput | TranscriptionJobCreateManyAnalysisEntryInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantRatingCreateWithoutAnalysisEntryInput = {
    created_at?: Date | string
    updated_at?: Date | string
    score: number
    participantProfile: ParticipantProfileCreateNestedOneWithoutParticipantRatingInput
  }

  export type ParticipantRatingUncheckedCreateWithoutAnalysisEntryInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: number
    score: number
  }

  export type ParticipantRatingCreateOrConnectWithoutAnalysisEntryInput = {
    where: ParticipantRatingWhereUniqueInput
    create: XOR<ParticipantRatingCreateWithoutAnalysisEntryInput, ParticipantRatingUncheckedCreateWithoutAnalysisEntryInput>
  }

  export type AnalysisUpsertWithoutAnalysisEntryInput = {
    update: XOR<AnalysisUpdateWithoutAnalysisEntryInput, AnalysisUncheckedUpdateWithoutAnalysisEntryInput>
    create: XOR<AnalysisCreateWithoutAnalysisEntryInput, AnalysisUncheckedCreateWithoutAnalysisEntryInput>
    where?: AnalysisWhereInput
  }

  export type AnalysisUpdateToOneWithWhereWithoutAnalysisEntryInput = {
    where?: AnalysisWhereInput
    data: XOR<AnalysisUpdateWithoutAnalysisEntryInput, AnalysisUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type AnalysisUpdateWithoutAnalysisEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneRequiredWithoutAnalysisNestedInput
    User?: UserUpdateOneRequiredWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateWithoutAnalysisEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_company_id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantProfileUpsertWithoutAnalysisEntryInput = {
    update: XOR<ParticipantProfileUpdateWithoutAnalysisEntryInput, ParticipantProfileUncheckedUpdateWithoutAnalysisEntryInput>
    create: XOR<ParticipantProfileCreateWithoutAnalysisEntryInput, ParticipantProfileUncheckedCreateWithoutAnalysisEntryInput>
    where?: ParticipantProfileWhereInput
  }

  export type ParticipantProfileUpdateToOneWithWhereWithoutAnalysisEntryInput = {
    where?: ParticipantProfileWhereInput
    data: XOR<ParticipantProfileUpdateWithoutAnalysisEntryInput, ParticipantProfileUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type ParticipantProfileUpdateWithoutAnalysisEntryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutParticipantProfileNestedInput
    ParticipantRating?: ParticipantRatingUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileUncheckedUpdateWithoutAnalysisEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    ParticipantRating?: ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileNestedInput
  }

  export type TranscriptionJobUpsertWithWhereUniqueWithoutAnalysisEntryInput = {
    where: TranscriptionJobWhereUniqueInput
    update: XOR<TranscriptionJobUpdateWithoutAnalysisEntryInput, TranscriptionJobUncheckedUpdateWithoutAnalysisEntryInput>
    create: XOR<TranscriptionJobCreateWithoutAnalysisEntryInput, TranscriptionJobUncheckedCreateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobUpdateWithWhereUniqueWithoutAnalysisEntryInput = {
    where: TranscriptionJobWhereUniqueInput
    data: XOR<TranscriptionJobUpdateWithoutAnalysisEntryInput, TranscriptionJobUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobUpdateManyWithWhereWithoutAnalysisEntryInput = {
    where: TranscriptionJobScalarWhereInput
    data: XOR<TranscriptionJobUpdateManyMutationInput, TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryInput>
  }

  export type TranscriptionJobScalarWhereInput = {
    AND?: TranscriptionJobScalarWhereInput | TranscriptionJobScalarWhereInput[]
    OR?: TranscriptionJobScalarWhereInput[]
    NOT?: TranscriptionJobScalarWhereInput | TranscriptionJobScalarWhereInput[]
    id?: IntFilter<"TranscriptionJob"> | number
    analysis_entry_id?: StringFilter<"TranscriptionJob"> | string
    status?: EnumTranscriptionJobStatusFilter<"TranscriptionJob"> | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    updated_at?: DateTimeFilter<"TranscriptionJob"> | Date | string
    language_code?: StringFilter<"TranscriptionJob"> | string
  }

  export type ParticipantRatingUpsertWithoutAnalysisEntryInput = {
    update: XOR<ParticipantRatingUpdateWithoutAnalysisEntryInput, ParticipantRatingUncheckedUpdateWithoutAnalysisEntryInput>
    create: XOR<ParticipantRatingCreateWithoutAnalysisEntryInput, ParticipantRatingUncheckedCreateWithoutAnalysisEntryInput>
    where?: ParticipantRatingWhereInput
  }

  export type ParticipantRatingUpdateToOneWithWhereWithoutAnalysisEntryInput = {
    where?: ParticipantRatingWhereInput
    data: XOR<ParticipantRatingUpdateWithoutAnalysisEntryInput, ParticipantRatingUncheckedUpdateWithoutAnalysisEntryInput>
  }

  export type ParticipantRatingUpdateWithoutAnalysisEntryInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    participantProfile?: ParticipantProfileUpdateOneRequiredWithoutParticipantRatingNestedInput
  }

  export type ParticipantRatingUncheckedUpdateWithoutAnalysisEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisEntryCreateWithoutTranscriptionJobInput = {
    id?: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    Analysis: AnalysisCreateNestedOneWithoutAnalysisEntryInput
    ParticipantProfile?: ParticipantProfileCreateNestedOneWithoutAnalysisEntryInput
    ratings?: ParticipantRatingCreateNestedOneWithoutAnalysisEntryInput
  }

  export type AnalysisEntryUncheckedCreateWithoutTranscriptionJobInput = {
    id?: string
    analysis_id: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
  }

  export type AnalysisEntryCreateOrConnectWithoutTranscriptionJobInput = {
    where: AnalysisEntryWhereUniqueInput
    create: XOR<AnalysisEntryCreateWithoutTranscriptionJobInput, AnalysisEntryUncheckedCreateWithoutTranscriptionJobInput>
  }

  export type AnalysisEntryUpsertWithoutTranscriptionJobInput = {
    update: XOR<AnalysisEntryUpdateWithoutTranscriptionJobInput, AnalysisEntryUncheckedUpdateWithoutTranscriptionJobInput>
    create: XOR<AnalysisEntryCreateWithoutTranscriptionJobInput, AnalysisEntryUncheckedCreateWithoutTranscriptionJobInput>
    where?: AnalysisEntryWhereInput
  }

  export type AnalysisEntryUpdateToOneWithWhereWithoutTranscriptionJobInput = {
    where?: AnalysisEntryWhereInput
    data: XOR<AnalysisEntryUpdateWithoutTranscriptionJobInput, AnalysisEntryUncheckedUpdateWithoutTranscriptionJobInput>
  }

  export type AnalysisEntryUpdateWithoutTranscriptionJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    Analysis?: AnalysisUpdateOneRequiredWithoutAnalysisEntryNestedInput
    ParticipantProfile?: ParticipantProfileUpdateOneWithoutAnalysisEntryNestedInput
    ratings?: ParticipantRatingUpdateOneWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateWithoutTranscriptionJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PasswordResetTokensCreateManyUserInput = {
    id?: string
    token_expires: Date | string
    created_at?: Date | string
  }

  export type AnalysisCreateManyUserInput = {
    id?: string
    owner_company_id: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
  }

  export type ParticipantProfileCreateManyUserInput = {
    id?: number
    name?: string | null
    last_name?: string | null
    nif?: string | null
    payment_address?: string | null
    birth_date?: Date | string | null
    gender?: $Enums.Genders | null
    country?: $Enums.Country | null
    available_devices?: ParticipantProfileCreateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: $Enums.EducationLevel | null
    yearly_income?: number | null
    parental_status?: $Enums.ParentalStatus | null
    technical_proficiency?: $Enums.TechnicalProficiency | null
    approved?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerProfileCreateManyUserInput = {
    id?: number
    company_name?: string | null
    position?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PasswordResetTokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_expires?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    Company?: CompanyUpdateOneRequiredWithoutAnalysisNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_company_id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_company_id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipantProfileUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutParticipantProfileNestedInput
    ParticipantRating?: ParticipantRatingUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileNestedInput
    ParticipantRating?: ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileNestedInput
  }

  export type ParticipantProfileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    payment_address?: NullableStringFieldUpdateOperationsInput | string | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGendersFieldUpdateOperationsInput | $Enums.Genders | null
    country?: NullableEnumCountryFieldUpdateOperationsInput | $Enums.Country | null
    available_devices?: ParticipantProfileUpdateavailable_devicesInput | $Enums.DeviceType[]
    education_level?: NullableEnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel | null
    yearly_income?: NullableIntFieldUpdateOperationsInput | number | null
    parental_status?: NullableEnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus | null
    technical_proficiency?: NullableEnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency | null
    approved?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUpdateWithoutUserInput = {
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerProfileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyCompanyInput = {
    id?: string
    device: $Enums.DeviceType
    name: string
    scenario?: string | null
    created_by: string
    tasks: JsonNullValueInput | InputJsonValue
    url: string
    status?: $Enums.AnalysisStatus
    created_at?: Date | string
    updated_at?: Date | string
    max_number_of_participants: number
    recruitment_type: $Enums.RecruitmentType
    min_age: number
    max_age: number
    gender: $Enums.Genders
    country: $Enums.Country
    education_level: $Enums.EducationLevel
    min_yearly_income: number
    max_yearly_income: number
    technical_proficiency: $Enums.TechnicalProficiency
    parental_status: $Enums.ParentalStatus
    available_spots: number
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRoles
    created_at?: Date | string
    last_updated_at?: Date | string
    last_login_at?: Date | string | null
    utm_source?: string | null
    utm_medium?: string | null
    utm_campaign?: string | null
    utm_content?: string | null
    utm_term?: string | null
    gclid?: string | null
    fbclid?: string | null
  }

  export type SubscriptionCreateManyCompanyInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    expires_at?: Date | string | null
  }

  export type AnalysisUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutAnalysisNestedInput
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutAnalysisNestedInput
  }

  export type AnalysisUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    name?: StringFieldUpdateOperationsInput | string
    scenario?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: StringFieldUpdateOperationsInput | string
    tasks?: JsonNullValueInput | InputJsonValue
    url?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisStatusFieldUpdateOperationsInput | $Enums.AnalysisStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    max_number_of_participants?: IntFieldUpdateOperationsInput | number
    recruitment_type?: EnumRecruitmentTypeFieldUpdateOperationsInput | $Enums.RecruitmentType
    min_age?: IntFieldUpdateOperationsInput | number
    max_age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGendersFieldUpdateOperationsInput | $Enums.Genders
    country?: EnumCountryFieldUpdateOperationsInput | $Enums.Country
    education_level?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    min_yearly_income?: IntFieldUpdateOperationsInput | number
    max_yearly_income?: IntFieldUpdateOperationsInput | number
    technical_proficiency?: EnumTechnicalProficiencyFieldUpdateOperationsInput | $Enums.TechnicalProficiency
    parental_status?: EnumParentalStatusFieldUpdateOperationsInput | $Enums.ParentalStatus
    available_spots?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
    PasswordResetTokens?: PasswordResetTokensUncheckedUpdateManyWithoutUserNestedInput
    Analysis?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    ParticipantProfile?: ParticipantProfileUncheckedUpdateManyWithoutUserNestedInput
    CustomerProfile?: CustomerProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    utm_source?: NullableStringFieldUpdateOperationsInput | string | null
    utm_medium?: NullableStringFieldUpdateOperationsInput | string | null
    utm_campaign?: NullableStringFieldUpdateOperationsInput | string | null
    utm_content?: NullableStringFieldUpdateOperationsInput | string | null
    utm_term?: NullableStringFieldUpdateOperationsInput | string | null
    gclid?: NullableStringFieldUpdateOperationsInput | string | null
    fbclid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnalysisEntryCreateManyParticipantProfileInput = {
    id?: string
    analysis_id: string
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
  }

  export type ParticipantRatingCreateManyParticipantProfileInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    score: number
  }

  export type AnalysisEntryUpdateWithoutParticipantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    Analysis?: AnalysisUpdateOneRequiredWithoutAnalysisEntryNestedInput
    transcriptionJob?: TranscriptionJobUpdateManyWithoutAnalysisEntryNestedInput
    ratings?: ParticipantRatingUpdateOneWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateWithoutParticipantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptionJob?: TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutParticipantProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ParticipantRatingUpdateWithoutParticipantProfileInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUpdateManyWithoutRatingsNestedInput
  }

  export type ParticipantRatingUncheckedUpdateWithoutParticipantProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    AnalysisEntry?: AnalysisEntryUncheckedUpdateManyWithoutRatingsNestedInput
  }

  export type ParticipantRatingUncheckedUpdateManyWithoutParticipantProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type AnalysisEntryCreateManyRatingsInput = {
    id?: string
    analysis_id: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
  }

  export type AnalysisEntryUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    Analysis?: AnalysisUpdateOneRequiredWithoutAnalysisEntryNestedInput
    ParticipantProfile?: ParticipantProfileUpdateOneWithoutAnalysisEntryNestedInput
    transcriptionJob?: TranscriptionJobUpdateManyWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    transcriptionJob?: TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysis_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnalysisEntryCreateManyAnalysisInput = {
    id?: string
    user_id?: string | null
    status?: $Enums.AnalysisEntryCompletionStatus
    created_at?: Date | string
    updated_at?: Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: string | null
    ratingsId?: number | null
  }

  export type AnalysisEntryUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ParticipantProfile?: ParticipantProfileUpdateOneWithoutAnalysisEntryNestedInput
    transcriptionJob?: TranscriptionJobUpdateManyWithoutAnalysisEntryNestedInput
    ratings?: ParticipantRatingUpdateOneWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
    transcriptionJob?: TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryNestedInput
  }

  export type AnalysisEntryUncheckedUpdateManyWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAnalysisEntryCompletionStatusFieldUpdateOperationsInput | $Enums.AnalysisEntryCompletionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcription_segments?: NullableJsonNullValueInput | InputJsonValue
    full_transcript?: NullableStringFieldUpdateOperationsInput | string | null
    ratingsId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranscriptionJobCreateManyAnalysisEntryInput = {
    id?: number
    status?: $Enums.TranscriptionJobStatus
    created_at?: Date | string
    updated_at?: Date | string
    language_code: string
  }

  export type TranscriptionJobUpdateWithoutAnalysisEntryInput = {
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
  }

  export type TranscriptionJobUncheckedUpdateWithoutAnalysisEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
  }

  export type TranscriptionJobUncheckedUpdateManyWithoutAnalysisEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumTranscriptionJobStatusFieldUpdateOperationsInput | $Enums.TranscriptionJobStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    language_code?: StringFieldUpdateOperationsInput | string
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
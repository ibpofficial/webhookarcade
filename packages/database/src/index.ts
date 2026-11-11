import { PrismaClient as PostgresPrismaClient } from '@prisma/client';
// @ts-ignore - conditionally generated SQLite client for zero-dependency dev/test mode
import { PrismaClient as SqlitePrismaClient } from './generated/sqlite-client/index.js';

export * from './crypto.js';
export * from './seed.js';

// Unified client type
export type AppDatabaseClient = PostgresPrismaClient | SqlitePrismaClient;

let globalDb: AppDatabaseClient | undefined;

export function getPrismaClient(): AppDatabaseClient {
  if (!globalDb) {
    const isExplicitSqlite = process.env.USE_SQLITE === 'true' || process.env.NODE_ENV === 'test' || !process.env.DATABASE_URL?.startsWith('postgresql');
    
    if (isExplicitSqlite) {
      const sqliteUrl = process.env.SQLITE_DATABASE_URL || 'file:./dev.db';
      globalDb = new SqlitePrismaClient({
        datasources: {
          db: { url: sqliteUrl },
        },
      });
    } else {
      globalDb = new PostgresPrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
      });
    }
  }
  return globalDb;
}

export { PostgresPrismaClient, SqlitePrismaClient };

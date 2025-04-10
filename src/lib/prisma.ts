// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Ensure that the 'prisma' variable is preserved during hot-reloads in development.
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

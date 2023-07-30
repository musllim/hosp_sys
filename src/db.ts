import { PrismaClient } from "@prisma/client";

const globalForprisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForprisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForprisma.prisma = prisma;

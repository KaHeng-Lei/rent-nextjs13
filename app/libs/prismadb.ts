import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

//globalThis provides a standard way for accessing the global scope which can be used across different environments.
//next.js 13 hot reloading can cause a bunch of this new prisma client instances to be created giving us a warning in terminal
//so we assign the Prisma client to a globalThis variable which is not affected by hot reload

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
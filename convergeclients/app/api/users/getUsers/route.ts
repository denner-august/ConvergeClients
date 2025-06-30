import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allUsers = await prisma.users.findMany();

  return Response.json(allUsers, { status: 200 });
}

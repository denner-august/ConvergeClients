import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const user = await prisma.users.findFirst({
    where: {
      ClientNome: "denner",
    },
  });

  if (user) {
    return Response.json(user);
  }

  return Response.json({ message: "usuario não encontrado" });
}

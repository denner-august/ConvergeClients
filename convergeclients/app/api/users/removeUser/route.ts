import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return Response.json(
      { message: "ID do usuario não foi informado." },
      { status: 400 }
    );
  }

  const usuario = await prisma.users.findUnique({ where: { id } });

  if (!usuario) {
    return Response.json(
      { message: "Usuário não encontrado." },
      { status: 404 }
    );
  }

  await prisma.users.delete({ where: { id } });
  return new Response(null, { status: 204 });
}

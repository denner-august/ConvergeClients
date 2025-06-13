import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const data = await request.json();

  const { titulo, name, descrição, modeloNegocio, valorContrato, dataInicio } =
    data;

  const create = await prisma.users.create({
    data: {
      titulo: titulo,
      ClientNome: name,
      descrição: descrição,
      modeloDeNegocio: modeloNegocio,
      dataInicio: new Date(dataInicio),
      valorAtualDoContrato: Number(valorContrato),
    },
  });

  if (create) {
    return Response.json({ message: "usuario criado" }, { status: 200 });
  }

  return Response.json({ message: "Erro ao criar cliente" }, { status: 400 });
}

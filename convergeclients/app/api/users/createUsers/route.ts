import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      titulo,
      name,
      descrição,
      modeloNegocio,
      valorContrato,
      dataInicio,
    } = data;

    const create = await prisma.users.create({
      data: {
        titulo: titulo,
        ClientNome: name,
        descrição: descrição,
        modeloDeNegocio: modeloNegocio,
        dataInicio:
          isNaN(new Date(dataInicio).getTime()) === true
            ? new Date()
            : new Date(dataInicio),
        valorAtualDoContrato: Number(valorContrato),
      },
    });

    if (create) {
      return Response.json({ message: "usuario criado" }, { status: 200 });
    }
  } catch (error) {
    return Response.json(
      { message: "Erro ao criar cliente", error: error.message },
      { status: 500 }
    );
  }
}

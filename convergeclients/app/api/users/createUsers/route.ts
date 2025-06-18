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
      valorDoContrato,
      dataInicio,
    } = data;

    if (!titulo || !name) {
      return Response.json(
        { message: "erro ao preencher formulario" },
        { status: 400 }
      );
    }

    const user = await prisma.users.create({
      data: {
        titulo: titulo,
        ClientNome: name,
        descrição: descrição,
        modeloDeNegocio: modeloNegocio,
        valorAtualDoContrato: Number(valorDoContrato),
        dataInicio: isNaN(new Date(dataInicio).getTime())
          ? new Date()
          : new Date(dataInicio),
      },
    });

    return Response.json(user, { status: 201 });
  } catch (error) {
    console.error("error", error);
    return Response.json({ message: "erro ao criar usuario" }, { status: 500 });
  }
}

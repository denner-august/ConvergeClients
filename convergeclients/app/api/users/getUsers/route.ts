import type { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const allUsers = await prisma.users.findMany();

  if (allUsers) {
    return Response.json(allUsers, {
      status: 200,
    });
  }

  return Response.json(
    { message: "usuarios não encontrado" },
    {
      status: 400,
    }
  );
}

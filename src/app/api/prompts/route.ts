import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/seed";

{
  /* ОТРИМАННЯ ВСІХ ПРОМПТІВ */
}

export async function GET() {
  const allPrompts = await prisma.prompt.findMany();
  return NextResponse.json(allPrompts);
}

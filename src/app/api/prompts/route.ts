import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/seed";

{
  /* ОТРИМАННЯ ВСІХ ПРОМПТІВ */
}

export async function GET() {
  try {
    const allPrompts = await prisma.prompt.findMany();
    return NextResponse.json(allPrompts);
  } catch (error) {
    return NextResponse.json(
      { error: "Помилка отримання промптів" },
      { status: 500 }
    );
  }
}

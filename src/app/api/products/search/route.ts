import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const startsWith = searchParams.get("starts_with");

  console.log("startsWith", startsWith);

  const res = await prisma.product.findMany({
    where: {
      title: {
        startsWith: startsWith || undefined
      }
    }
  });

  return NextResponse.json(res);
}

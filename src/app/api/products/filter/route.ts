import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const res = await prisma.product.groupBy({
    by: ["category", "brand", "color", "size", "price"]
  });

  return NextResponse.json(res);
};

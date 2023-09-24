import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const res = await prisma.product.findMany();

  return NextResponse.json(res);
};

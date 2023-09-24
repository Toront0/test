import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const category = req.url.slice(req.url.lastIndexOf("/") + 1);

  console.log("category", category);

  const res = await prisma.product.findMany({
    where: {
      category: category
    }
  });

  return NextResponse.json(res);
};

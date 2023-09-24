import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);

  console.log("id", id);

  const res = await prisma.product.findFirst({
    where: {
      id: +id
    }
  });

  return NextResponse.json(res);
};

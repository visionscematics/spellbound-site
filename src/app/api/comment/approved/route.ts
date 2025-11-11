// /api/comments/approved.ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const comments = await prisma.approvedComment.findMany({
    orderBy: { approvedAt: "desc" },
  });
  console.log("comment",comments)

  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

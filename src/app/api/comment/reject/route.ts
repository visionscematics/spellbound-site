import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("id");

    if (!commentId) {
      return new Response(JSON.stringify({ message: "Comment ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const pendingComment = await prisma.pendingComment.findUnique({
      where: { id: commentId },
    });

    if (!pendingComment) {
      return new Response(JSON.stringify({ message: "Comment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.pendingComment.delete({ where: { id: commentId } });

    return new Response(
      JSON.stringify({ message: "Comment rejected and deleted successfully!" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error rejecting comment:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
}

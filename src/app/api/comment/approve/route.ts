import { prisma } from "@/lib/prisma"; 

import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("id");
    

    console.log('Approve Comments ~ commentId: 1', commentId)

    if (!commentId) {
      return new Response(JSON.stringify({ message: "Comment ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log('Approve Comments ~ commentId:', commentId)

    console.log("Fetching pending comment...");
    const pendingComment = await prisma.pendingComment.findUnique({
      where: { id: Number(commentId) },

    });

    if (!pendingComment) {
      return new Response(JSON.stringify({ message: "Comment not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // ✅ Enable CORS
        },
      });
    }

    console.log("Approving comment...");
  //  await prisma.approvedComment.create({
  //     data: {
  //       name: pendingComment.name,
  //       email: pendingComment.email,
  //       comment: pendingComment.comment,
  //       pageName:pendingComment.pageName,
  //       approvedAt: new Date(),
  //       projectId: pendingComment.projectId  
  //     },
  //   });
await prisma.approvedComment.create({
  data: {
    name: pendingComment.name,
    email: pendingComment.email,
    comment: pendingComment.comment,
    pageName: pendingComment.pageName,
    projectId: pendingComment.projectId,
    approvedAt: new Date(),
  },
});



    console.log("Deleting pending comment...");
await prisma.pendingComment.delete({
  where: { id: Number(commentId) },

});

    console.log("Comment successfully moved!");

    return new Response(JSON.stringify({ message: "Comment approved and moved successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // ✅ Allow requests from any domain
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error approving comment:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
}

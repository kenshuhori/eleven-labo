"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createComment(formData: FormData) {
  const { commentId } = {
    commentId: formData.get("commentId"),
  };

  if (commentId === "") {
    return new Error("Invalid form data");
  }

  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  try {
    console.log("commentId", commentId);
    // const existingRecord = prisma.commentLikeHistory.findUnique({
    //   where: {
    //     commentId: 0,
    //   },
    // });
    // await prisma.commentLikeHistory.delete({
    //   data: {
    //     commentId: Number(commentId),
    //     userId: userId,
    //   },
    // });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}

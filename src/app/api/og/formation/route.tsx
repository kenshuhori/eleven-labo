import { getPost } from "@/app/actions";
import { colorCode } from "@/constants";
import { EyeCatchImage } from "@public/ogp/eyeCatchImage";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import type { CSSProperties } from "react";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hasPostId = searchParams.has("postId");
    const postId = hasPostId ? searchParams.get("postId") : null;

    if (postId === null) {
      return new ImageResponse(
        <div style={baseStyle}>
          <EyeCatchImage />
        </div>,
        {
          width: 400,
          height: 400,
        },
      );
    }

    const post = await getPost(`/posts/${postId}`);
    console.log("post", post);

    return new ImageResponse(
      <div style={baseStyle}>
        <EyeCatchImage />
      </div>,
      {
        width: 400,
        height: 4000,
      },
    );
  } catch (e) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}

const baseStyle: CSSProperties = {
  alignItems: "center",
  background: colorCode.green,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
};

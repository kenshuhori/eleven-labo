import { getPost } from "@/app/actions";
import { serviceDescriptionShort, serviceTitle } from "@/constants";
import { EyeCatchImage } from "@public/ogp/eyeCatchImage";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hasPostId = searchParams.has("postId");
    const postId = hasPostId ? searchParams.get("postId") : null;

    if (postId === null) {
      return new ImageResponse(
        <div>
          <EyeCatchImage />
        </div>,
        {
          width: 1200,
          height: 630,
        },
      );
    }

    const post = await getPost(`/posts/${postId}`);
    console.log("post", post);

    return new ImageResponse(
      <div>
        <EyeCatchImage />
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}

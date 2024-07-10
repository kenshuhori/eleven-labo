import { EyeCatchOgp } from "@public/eyeCatchOgp";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import type { CSSProperties } from "react";

export const config = {
  runtime: "edge",
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "23-24のプレミアリーグベスト11を考えよう！！";

    return new ImageResponse(
      <div style={baseStyle}>
        <div style={mainStyle}>
          <div style={titleStyle}>{title}</div>
          <EyeCatchOgp />
        </div>
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

const baseStyle: CSSProperties = {
  alignItems: "center",
  background: "#289A0B",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
};

const mainStyle: CSSProperties = {
  background: "#FFF6C5",
  borderRadius: "20px",
  boxShadow: "0 0 8px #777777",
  display: "flex",
  gap: "30px",
  height: "570px",
  justifyContent: "space-between",
  padding: "80px 50px 80px 50px",
  width: "1140px",
};

const titleStyle: CSSProperties = {
  fontSize: "60px",
  fontFamily: "Roboto",
  fontWeight: "bold",
};

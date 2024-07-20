import { serviceDescriptionShort, serviceTitle } from "@/constants";
import { colorCode } from "@/constants";
import { EyeCatchImage } from "@public/ogp/eyeCatchImage";
import { ServiceLogo } from "@public/ogp/serviceLogo";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import type { CSSProperties } from "react";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : `${serviceTitle} ${serviceDescriptionShort}`;

    return new ImageResponse(
      <div style={baseStyle}>
        <div style={mainStyle}>
          <div style={titleStyle}>{title}</div>
          <EyeCatchImage />
        </div>
        <div style={logoStyle}>
          <ServiceLogo />
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
  background: colorCode.green,
  display: "flex",
  height: "100%",
  justifyContent: "center",
  width: "100%",
};

const mainStyle: CSSProperties = {
  background: colorCode.creme,
  borderRadius: "20px",
  boxShadow: `0 0 8px ${colorCode.darkGray}`,
  display: "flex",
  gap: "30px",
  height: "570px",
  justifyContent: "space-between",
  padding: "80px 50px 80px 50px",
  width: "1140px",
};

const titleStyle: CSSProperties = {
  fontSize: "60px",
  fontWeight: "bold",
};

const logoStyle: CSSProperties = {
  bottom: "80px",
  display: "flex",
  left: "80px",
  position: "absolute",
};

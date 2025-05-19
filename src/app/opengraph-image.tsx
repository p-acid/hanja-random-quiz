import { ImageResponse } from "next/og";

export const alt = "HRQ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "black",
        }}
      >
        <h1
          style={{
            fontSize: 30,
            lineHeight: 1.2,
            fontWeight: "bold",
            letterSpacing: "-0.05em",
            color: "white",
          }}
        >
          한랜퀴🐼
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}

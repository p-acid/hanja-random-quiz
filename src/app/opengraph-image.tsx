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
          gap: "12px",
        }}
      >
        <h1
          style={{
            fontSize: 120,
            lineHeight: 1.2,
            fontWeight: "black",
            letterSpacing: "-0.15em",
            color: "white",
          }}
        >
          랜덤 한자 퀴즈
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 120,
            lineHeight: 1.2,
            fontWeight: "black",
            color: "white",
            width: "170px",
            height: "170px",
            paddingRight: "12px",
            paddingBottom: "12px",
            borderRadius: "16px",
            background: "#2b2b2b",
            transform: "rotate(6deg) translateY(12px)",
          }}
        >
          漢
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

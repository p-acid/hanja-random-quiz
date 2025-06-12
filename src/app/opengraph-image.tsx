import { ImageResponse } from "next/og";

export const alt = "VOCA QUIZ";
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
          VOCA QUIZ
        </h1>
      </div>
    ),
    {
      ...size,
    },
  );
}

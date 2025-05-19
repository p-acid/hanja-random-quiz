import { ImageResponse } from "next/og";

export const alt = "HRQ";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div className="h-full w-full bg-zinc-950">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-50">
          한랜퀴🐼
        </h1>
      </div>
    ),
  );
}

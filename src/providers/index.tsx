import { PropsWithChildren } from "react";
import { JotaiProvider } from "./jotai-provider";

export function Providers({ children }: PropsWithChildren) {
  return <JotaiProvider>{children}</JotaiProvider>;
}

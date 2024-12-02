import {
  ScrollArea as _ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";
import type { ReactNode } from "react";

export default function ScrollArea({
  children,
}: {
  children: ReactNode | JSX.Element;
}) {
  return (
    <_ScrollArea>
      {children}
      <ScrollBar />
    </_ScrollArea>
  );
}

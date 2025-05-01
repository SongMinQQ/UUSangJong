import AppHeader from "@/components/common/AppHeader";
import { Fragment, ReactNode } from "react";

export default function BoardLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <Fragment>
      <AppHeader isSticky={true} />
      {children}
    </Fragment>
  );
}

import AppHeader from "@/components/common/AppHeader";
import Footer from "@/components/main/Footer";
import { Fragment, ReactNode } from "react";

export default function BoardLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <Fragment>
      <AppHeader isSticky={true} />
      {children}
      <Footer />
    </Fragment>
  );
}

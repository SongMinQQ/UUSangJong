import BoardHeader from "@/components/common/board/BoardHeader";
import Footer from "@/components/main/Footer";
import { Fragment, ReactNode } from "react";

export default function BoardLayout({ children }: { children: Readonly<ReactNode> }) {
  return (
    <Fragment>
      <BoardHeader />
      {children}
      <Footer />
    </Fragment>
  );
}

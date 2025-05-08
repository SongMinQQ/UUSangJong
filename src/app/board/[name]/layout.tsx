import BoardHeader from '@/components/common/board/BoardHeader';
import React, { Fragment, ReactNode } from 'react';

const ContentDetailLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <Fragment>
      <BoardHeader />
      {children}
    </Fragment>
  );
};

export default ContentDetailLayout;
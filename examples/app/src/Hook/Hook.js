import React from 'react';
import { useIsScrolled } from 'is-scrolled';

import Table from '../Table'

function Hook({ n }) {
  const {
    containerRef,
    contentRef,
    isScrolledTo
  } = useIsScrolled();

  return (
    <Table
      title="Hook"
      containerRef={containerRef}
      contentRef={contentRef}
      isScrolledTo={isScrolledTo}
      n={n}
    />
  )
}

export default Hook;

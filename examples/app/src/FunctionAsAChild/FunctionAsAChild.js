import React from 'react';
import IsScrolled from 'is-scrolled';

import Table from '../Table'

function FunctionAsAChild({ n }) {
  return (
    <IsScrolled>
      {({
        isScrolledTo,
        containerRef,
        contentRef
      }) => (
        <Table
          title="FAAC"
          containerRef={containerRef}
          contentRef={contentRef}
          isScrolledTo={isScrolledTo}
          n={n}
        />
      )}
    </IsScrolled>
  )
}

export default FunctionAsAChild;

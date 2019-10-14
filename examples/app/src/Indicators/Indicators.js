import React from 'react';
import { IndicatorsElementX, IndicatorsElementY } from './Elements'

const Indicators = ({
  isScrolledTo: {
    left,
    top,
    right,
    bottom,
  },
}) => (
  <div>
    <IndicatorsElementX
      left={left}
      right={right}
    />
    <IndicatorsElementY
      top={top}
      bottom={bottom}
    />
  </div>
);

export default Indicators;

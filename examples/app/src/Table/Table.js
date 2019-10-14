import React from 'react';

import { Container, Table, Td } from '../Components';

import Indicators from '../Indicators';

const PlaceholderTable = ({
  title = "Element",
  isScrolledTo,
  containerRef,
  contentRef,
  n
}) => {
  return (
    <div>
      <Indicators isScrolledTo={isScrolledTo} />
      <Container ref={containerRef}>
        <Table ref={contentRef}>
          <tbody>
            {new Array(n).fill(null).map((_, i) => (
              <tr key={i}>
                {new Array(n).fill(null).map((_, j) => (
                  <Td key={j}>{title}<br />{i + 1}x{j + 1}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PlaceholderTable;

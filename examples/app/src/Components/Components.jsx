import styled from "styled-components";

const tableTextColor = 'rgba(255, 255, 255, 0.5)';
const tableBorder = '1px solid rgba(255, 255, 255, 0.33)';

export const Container = styled.div`
  position: relative;
  max-height: 100vh;
  overflow: auto;
  max-width: 100vw;
`

export const Table = styled.table`
  border-collapse: collapse;
  color: ${tableTextColor};
`

export const Td = styled.td`
  border: ${tableBorder};
  padding: 2rem;
  text-align: center;
`

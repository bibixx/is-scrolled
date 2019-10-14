import React from 'react';
import styled from "styled-components";

const humanReadable = {
  'faac': 'Function as a child',
  'hook': 'Hook'
}

const NavElement = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 3rem;
  z-index: 4;
`

const Nav = ({
  n,
  setN,
  demo,
  setDemo,
}) => (
  <NavElement>
    <p>{humanReadable[demo]}</p>
    <p>
      {Object.entries(humanReadable).map(([key, title]) => (
        <button key={key} onClick={() => setDemo(key)} disabled={key === demo}>{title}</button>
      ))}
    </p>
    <p>
      <input type="range" value={n} onChange={e => setN(+e.target.value)} min={1} max={30} /> {n}
    </p>
  </NavElement>
);

export default Nav;

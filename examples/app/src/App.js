import React, { useState } from 'react';

import Nav from './Nav';

import FunctionAsAChild from './FunctionAsAChild';
import Hook from './Hook';

const components = {
  'faac': FunctionAsAChild,
  'hook': Hook
}

function App() {
  const [n, setN] = useState(20);
  const [demo, setDemo] = useState('faac');

  const Component = components[demo];

  return (
    <>
      <Nav
        n={n}
        setN={setN}
        demo={demo}
        setDemo={setDemo}
      />
      <Component n={n} />
    </>
  )
};

export default App;

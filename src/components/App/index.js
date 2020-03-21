// == Import : npm
import React from 'react';
// import Button from 'src/components/Button';
import Button from 'src/containers/Button';
// import Counter from 'src/components/Counter';
import Counter from 'src/containers/Counter';
// == Import : local
import './app.scss';

// == Composant

const App = () => (
  <div id="app">
    <h1 className="question">Aimez vous les crêpes ?</h1>
    <Counter />
    <Button name="oui" />
    <Button name="non" />
  </div>
);

// == Export
export default App;

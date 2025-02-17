// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { CodonSelector } from './components/BaseSelector';

function App() {
  return (
    <>
      <p>Pick 3 bases to translate codon to amino acid.</p>
      <CodonSelector />
    </>
  );
}

export default App;

import './App.css';
import { CompareAAs } from './components/CompareAAs';
import Blob from './components/Blob';

function App() {
  return (
    <>
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <Blob size={100} color="var(--gray-300)" />
      </div>
      <CompareAAs />
    </>
  );
}

export default App;

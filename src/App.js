import { useState } from 'react';
import Dropdown from './components/Dropdown';

function App() {

  const [selection, setSelection] = useState(null);
  const handleSelection = (option) => {
    setSelection(option)
  }

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return (
    <div className='flex'>
    <Dropdown options={options} value={selection} OnChange={handleSelection} />
    <Dropdown options={options} value={selection} OnChange={handleSelection} />
    </div>
  );
}

export default App;

import './App.css';
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import Dashboard from './components/dashboard';

export const Button = styled.button`color:hotpink;`

function App() {
  useEffect(()=>{
    var grid = GridStack.init();
  });
  return (
    <>
    <div className="grid-stack">
     <div className='grid-stack-item'>
      <div className='grid-stack-item-content'>
        <Button>Click Name</Button>
      </div>
     </div>
     <div className='grid-stack-item' gs-w="2">
      <div className='grid-stack-item-content'>
        Items2
      </div>
     </div>
    </div>
    <Dashboard/>
    </>
  );
}

export default App;
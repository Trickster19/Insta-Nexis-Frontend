import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { useStore } from './store/store'

interface CountState {
  count: number,
  increase: () => void
}
function App() {
  const count = useStore((state: CountState) => state.count);
  const increase = useStore((state: CountState) => state.increase);
  return (
    <div style={{ display: 'flex', 
       justifyContent: 'center',
       alignItems: 'center',
       height: '100vh'
    }}>
    <Button onClick={increase}>
      Count {count}
    </Button>
    </div>
  )
}

export default App

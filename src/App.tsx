
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { Button } from './components/ui/button'
import  useStore  from '@/store'
import { router } from './routes';

interface CountState {
  count: number,
  increase: () => void
}
function App() {
  const count = useStore((state: CountState) => state.count);
  const increase = useStore((state: CountState) => state.increase);
  return (
   
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App

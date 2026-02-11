
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'

function App() {

  return (
    
    <div className='w-full h-screen bg-blue-300'>
      <div className='w-[600px] h-[600px] bg-black flex justify-evenly'>
        <div className ='w-[75px] h-[75px] bg-red-500' />
        <div className ='w-[75px] h-[75px] bg-green-500' />
        <div className ='w-[75px] h-[75px] bg-yellow-500' />
        <div className ='w-[75px] h-[75px] bg-purple-500' />
        <div className ='w-[75px] h-[75px] bg-pink-500' />
        <div className ='w-[75px] h-[75px] bg-gray-500' />
      </div>
      <SuperProduct/>
      
    </div>
    
  )
}

export default App

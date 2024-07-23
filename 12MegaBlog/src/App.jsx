import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authservice from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import { Footer,Header } from './components'
function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading? (
    <>
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400' >
      <div className='w-full block'>
        <Header/>
          <main>
            {/* <Outlet/> */}
          </main>
          <Footer/>
        
      </div>
    </div>

      
    </>
  ):null
}

export default App

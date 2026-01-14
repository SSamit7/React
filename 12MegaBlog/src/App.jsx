import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import authService from './appwrite/auth'
import './App.css'
import {login , logout } from './store/authSlice'
import {Header , Footer } from './components'


function App() {
  const [loading , setLoading ] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }
      else 
      {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))

  },[dispatch])
  return !loading  ? ( 
    <div className='min-h-screen flex flew-warp content-between bg-grey-400'>
      <div className='w-full block'> <Header/>
      <main>
        {<Outlet/>}
      </main>
      <Footer/></div>
     
      </div>
  ) : null
}

export default App

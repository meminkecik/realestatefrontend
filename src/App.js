import React, { useState } from 'react'
import AppRouter from './router'
import { useDispatch} from "react-redux"
import { getMe } from "../src/api/auth-service";
import { useEffect } from 'react';
import { login, logout } from './store/slices/auth-slice';
import LoadingSpinner from './components/common/loading-spinner';
import { getLocalStorage, removeLocalStorage } from './helpers/encrypted-storage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const loadData = async () =>{
    try {
      const token = getLocalStorage("token");
      if(!token) throw new Error("No token");
      const user = await getMe();
      dispatch(login(user));
    } catch (error) {
      console.log(error);
      dispatch(logout());
      removeLocalStorage("token");
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    loadData();
  }, [])
  
    if(loading) return <LoadingSpinner/>
    return <AppRouter/>

    
  
}

export default App
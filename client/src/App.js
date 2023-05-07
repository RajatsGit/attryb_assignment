
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/HomePage/Home';
import AddCar from './Pages/AddCar/AddCar';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import { useSelector } from "react-redux";
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import DealerProfile from './Pages/DealerProfile/DealerProfile';
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
   {
     loading ? 
     <Spinner />
    : <Routes>
      <Route exact path="/" element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
      } />
       <Route exact path="/signup" element={
         <PublicRoute>
       <Signup />      
       </PublicRoute>
  } />
      <Route exact path="/login" element={
        <PublicRoute>
        <Login />        
      </PublicRoute>
      } />
      <Route exact path="/addcar" element={
      <ProtectedRoute>
        <AddCar />
      </ProtectedRoute>
      } />
      <Route exact path="/profile" element={
      <ProtectedRoute>
        <DealerProfile />
      </ProtectedRoute>
      } />
    </Routes>}
      </>
  );
}

export default App;

import React, { useState } from 'react'
import './Login.css'
import axios from "axios";
import {toast} from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, TextField, Typography } from '@mui/material'
// import { Toast } from 'react-toastify/dist/components';
import { useNavigate } from 'react-router-dom';
// import { showLoading, hideLoading } from '.../redux/features/SpinnerSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate();
    // const dispatch = useDispatch();

const handleLogin = async(e)=>{
    e.preventDefault();

        try {
          // dispatch(showLoading());
          const response = await axios.post('http://localhost:8080/api/v1/user/login',{email,password});
          window.location.reload();
          // dispatch(hideLoading());
          if(response.data.success){
            localStorage.setItem('token',response.data.token);
            toast.success('Login Successfully');
            navigate('/')
          }else{
            toast.error(response.data.message);
          }
        } catch (error) {
        //   dispatch(hideLoading());
          console.log(error);
          toast.error('something went wrong');
        }
        
      }


  return (
    <div className='login'>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            mt:'15rem'
        }}>
             <TextField
             type='email'
             required
             onChange={(e)=>setEmail(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Email'
        sx={{
            width:{md:'24.699rem',lg:'40rem',xl:'40rem'},
            height:{md:'2.5rem',lg:'4rem',xl:'4rem'},
            mt:'1rem',
            p:'0rem 1rem',
            boxSizing:'border-box',
            background:'rgba(10, 38, 64, 0.05)',
            border:' 0.404908px solid rgba(10, 38, 64, 0.5)',
            borderRadius:'0.506rem',
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'center',
            "& input::placeholder": {
                fontSize: {lg:'1.2rem',xl:'1.2rem'},
                
              }
        }} />
             <TextField
             type='text'
             required
        onChange={(e)=>setPassword(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Password'
        sx={{
            width:{md:'24.699rem',lg:'40rem',xl:'40rem'},
            height:{md:'2.5rem',lg:'4rem',xl:'4rem'},
            mt:'1rem',
            p:'0rem 1rem',
            boxSizing:'border-box',
            background:'rgba(10, 38, 64, 0.05)',
            border:' 0.404908px solid rgba(10, 38, 64, 0.5)',
            borderRadius:'0.506rem',
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'center',
            "& input::placeholder": {
                fontSize: {lg:'1.2rem',xl:'1.2rem'},
                
              }
        }} />
            <Button
            type='submit'
            onClick={handleLogin}
            sx={{
                boxSizing:'border-box',
                p:{md:'0.76rem 1.923rem 0.76rem 0.962rem',lg:'1rem',xl:'1rem 1rem 1rem 1rem'},
                border:' 0.404908px solid rgba(10, 38, 64, 0.5)',
                boxShadow:'0px 3.23926px 4.04908px rgba(0, 0, 0, 0.15)',
                borderRadius:'8px',
                color:'white',
                textTransform: "none",
                fontFamily:'Larken Demo',
                fontWeight:'400',
                lineHeight:'110%',
                textAlign:'center',
                mt:'1.5rem',
                fontSize:{xl:'1.5rem'},
                bgcolor:'#0A2640',
                '&:hover': {
                    bgcolor: 'white', 
                    color: 'black',
                    border:'1px solid black',
                  },
            }}
            >Login</Button>
        <Typography sx={{
            mt:'3rem'
        }}>Not Registered?
            </Typography>
         <div  onClick={()=> navigate('/signup')} style={{cursor:'pointer', color:'blue',marginTop:'1rem'}}>
            Sign Up
            </div>
        </Box>
    </div>
  )
}

export default Login
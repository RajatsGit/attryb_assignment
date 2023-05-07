import React, { useState } from 'react'
import './Signup.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import axios from 'axios';
const Signup = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[isDealer,setIsDealer] = useState('');
    const navigate=useNavigate();
    // const handledealer = (e)=>{
    //     if(e.target.value){
    //         setIsDealer(prev => !prev);
    //     }
    // }


    const handleSignUp = async(e)=>{
        e.preventDefault();
        try {
            // const body = {name,email,password,isDealer:dealer};
            const response = await axios.post('http://localhost:8080/api/v1/user/register',{name,email,password,isDealer});
            if(response.data.success){
                toast('Registered Successfully')
                navigate('/login');
            }else{
                toast.success(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error('Something Went Wrong')
        }
    }

  return (
    <div className='signup'>
         <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            mt:'10rem'
        }}>
            <TextField
            required
             onChange={(e)=>setName(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='name'
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
             required
             onChange={(e)=>setEmail(e.target.value)}
             type='email'
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
        <FormControl fullWidth>
  <InputLabel shrink={false} id="demo-simple-select-label">Are You A dealer ?</InputLabel>
  <Select
  required
  sx={{
    mt:'3rem'
  }}
  defaultValue=''
    value={isDealer}
    onChange={(e)=>setIsDealer(e.target.value)}
  > 
    <MenuItem value=''>Select</MenuItem>
    <MenuItem value={true}>Yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
   
  </Select>
</FormControl>
            <Button
            type='submit'
            onClick={handleSignUp}
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
            >Sign Up</Button>
            <Typography sx={{
            mt:'3rem'
        }}>Already Registered?
            </Typography>
         <div  onClick={()=> navigate('/login')} style={{cursor:'pointer', color:'blue',marginTop:'1rem'}}>
            LogIn
            </div>
        </Box>
    </div>
  )
}

export default Signup
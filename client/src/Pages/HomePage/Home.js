import React from 'react'
import './Home.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (

    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10rem'}}>
        
        Home
        
    <Button 
    onClick={()=>navigate('/addcar')}
    sx={{bgcolor:'blue',  color:'black'}}>Add Car Details</Button>
    <Button 
    onClick={()=>navigate('/profile')}
    sx={{bgcolor:'blue' ,color:'black'}}> Profile Page to Edit the details</Button>
        </div>

        <TextField
            required
            //  onChange={(e)=>setName(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Search'
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
    </>
  )
}

export default Home
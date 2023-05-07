import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';

const DealerProfile = () => {

    const[oem,setOEM] = useState([]);
    const[fileName,setFileName] = useState('');
    const[inventory,setInventory] = useState(null);
    const[km,setKMs] = useState(0);
    const[majorScratches,setMajorScratches] = useState(0);
    const[originalPaint,setOP] = useState(false);
    const[noOfAccidentsReported,setAccidentsReported] = useState(0);
    const[noOfPreviousBuyers,setNumberOfPreviousBuyers] = useState(0);
    const[registrationPlace,setRegistrationPlace] = useState('');
    const[description1,setDescription1] = useState('');
    const[description2,setDescription2] = useState('');
    const[description3,setDescription3] = useState('');
    const[description4,setDescription4] = useState('');
    const[description5,setDescription5] = useState('');



const postDetails = async()=>{
    try {
        const description = `${description1}&${description2}&${description3}&${description4}&${description5}&`
        const oem_id = inventory;
        console.log(inventory);
        const response = await axios.post('http://localhost:8080/api/v1/dealer/postinventory',
        {
            km,majorScratches,originalPaint,noOfAccidentsReported,noOfPreviousBuyers,
            registrationPlace,description,oem_id
        },
        
        {
            headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
    },
    );
    if(response.data.success){
        toast.success(response.data.message);
        window.location.reload();

    }else{
        toast.error(response.data.message);
    }


}
     catch (error) {
        console.log(error);
            toast.error('Something Went Wrong')    
    }
}
const fetchOEMDetails = async()=>{
    try {
        const response = await axios.get('http://localhost:8080/api/v1/dealer/getoem',
{
    headers: {
  Authorization: "Bearer " + localStorage.getItem("token"),
}
},
);

if(response.data.success){
    setOEM(response.data.data);
}

    } catch (error) {
        console.log(error);
    }
}
    useEffect(()=>{
        fetchOEMDetails();
    },[])



  return (
  <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

<Typography sx={{
    fontSize:'2rem'
}}>
        ADD YOUR CAR DETAILS
</Typography>
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        mt:'2rem',
       
    }}>
        <FormControl fullWidth>
                <InputLabel shrink={false} id="demo-simple-select-label">Select Your Inventory</InputLabel>
                <Select
                required
                sx={{
                    
                    mt:'3rem'
                }}
                defaultValue=''
                    // value={inventory}
                    onChange={(e)=>setInventory(e.target.value)}
                > 

                        {oem ?.map((data)=>{
                            return(
                                <MenuItem value={data._id}>{data.nameOfTheModel} {data.yearOfTheModel}</MenuItem>     
                            )
                        })}
                   
   
            </Select>
            </FormControl>
            <TextField
            required
             onChange={(e)=>setKMs(e.target.value)}
        variant='standard'
        type='number'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='KMs in OdoMeter'
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
             onChange={(e)=>setMajorScratches(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Major Scratches'
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
  <InputLabel shrink={false} id="demo-simple-select-label">Original Paint</InputLabel>
  <Select
  required
  sx={{
    width:{md:'24.699rem',lg:'40rem',xl:'40rem'},
    mt:'3rem'
  }}
  defaultValue=''
    // value={isDealer}
    onChange={(e)=>setOP(e.target.value)}
  > 
    <MenuItem value=''>Select</MenuItem>
    <MenuItem value={true}>Yes</MenuItem>
    <MenuItem value={false}>No</MenuItem>
   
  </Select>
</FormControl>

<TextField
            required
             onChange={(e)=>setAccidentsReported(e.target.value)}
            type='number'
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='AccidentsReported'
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
             onChange={(e)=>setNumberOfPreviousBuyers(e.target.value)}
        variant='standard'
        type='number'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='NoofPreviousBuyers'
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
             onChange={(e)=>setRegistrationPlace(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Registration Place'
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
         <Button variant="contained" component="label"
                    translate='none'
                    sx={{
                      textTransform:'none',
                        fontFamily:'Larken Demo',
                        fontWeight:'400',
                        boxSizing:'border-box',
                        padding:{md:'1.5rem 2.375rem'},
                        gap:'0.938rem',
                        border:' 1px solid #0A2640',
                        borderRadius:'0.625rem',
                        bgcolor:'white',
                        width:{md:'17.25rem',xl:'30rem'},
                        height:{md:'2.5rem',xl:'5rem'},
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-evenly',
                        mt:'2.5rem',
                        mr:'1.3rem',
                        opacity:0.5,
                        cursor:'pointer',
                        
                        bgcolor:fileName === '' ? 'white' : '#000336',
                        color: fileName === '' ? 'black' : 'white'

                    }}>
                     Upload Image OF the Vehicle
                    <input type="file" hidden required onChange={(e)=>setFileName(e.target.files[0].name)} />
                     
                     </Button> 


                    <InputLabel sx={{
                        mt:'2rem'
                    }}>Description of the car ADD 5 points to it</InputLabel>

                      <TextField
            required
             onChange={(e)=>setDescription1(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Description 1'
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
             onChange={(e)=>setDescription2(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Description 2'
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
             onChange={(e)=>setDescription3(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Description 3'
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
             onChange={(e)=>setDescription4(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Description 4'
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
             onChange={(e)=>setDescription5(e.target.value)}
        variant='standard'
        InputProps={{
            disableUnderline: true,
        }}
        placeholder='Description 5'
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
            onClick={postDetails}
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
            >
                Post Details
            </Button>
    </Box>
    </div>

  )
            }

export default DealerProfile
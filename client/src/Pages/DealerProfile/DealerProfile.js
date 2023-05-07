import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const DealerProfile = () => {
  const[carDetails,setCarDetails] = useState([]);
  
  const getcarDetails = async()=>{
    try {
        const response = await axios.get('http://localhost:8080/api/v1/dealer/getcardetails',
{
    headers: {
  Authorization: "Bearer " + localStorage.getItem("token"),
}
},
);

if(response.data.success){
    setCarDetails(response.data.data);
    console.log(response.data.data);
}

    } catch (error) {
        console.log(error);
    }
}
  
const handleEdit = async()=>{

}
const handleDelete = async()=>{
  try {
    const response = await axios.post('http://localhost:8080/api/v1/dealer/deletecardetails',
{
headers: {
Authorization: "Bearer " + localStorage.getItem("token"),
}
},
);

if(response.data.success){
setCarDetails(response.data.data);
console.log(response.data.data);
}

} catch (error) {
    console.log(error);
} 
}

  useEffect(()=>{  
  getcarDetails();
  },[])

  
  
    return (
    <>
      <Typography>
        Your all added Cars: ----
      </Typography>
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    }}>
      
      {carDetails ? carDetails.map((car)=>{
       const description = car.description.split("&");
       return(
          <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexWrap:'wrap',
            width:'20%'
          }}>
            <div> Kms in OdoMeter: {car.km}</div>
            <div>Major Scratches : {car.majorScratches}</div>
            <div>Original Paint{car.originalPaint && "Yes"}</div>
            <div>No. Of Accident reported: {car.noOfAccidentsReported}</div>
            <div>No. of Buyers : {car.noOfPreviousBuyers}</div>
            <div>Registration Place: {car.registrationPlace}</div>
            <div>Description:
              {description.map((data)=>{
                return(
                  <li>{data}</li>
                )
              })}
               </div>
               <Button onClick={handleEdit}>Edit your Details</Button>
               <Button onClick={handleDelete}>Delete your Details</Button>
          </Box>
        )
      }):
       <>
       </>
       }

    </Box>
    </>
  )
}

export default DealerProfile
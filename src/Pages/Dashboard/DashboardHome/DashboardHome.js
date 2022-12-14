import React from 'react';
import { Grid } from "@mui/material";
import Calendar from '../../Shared/Calendar/Calendar';
import ReviewAppointments from '../ReviewAppointments/ReviewAppointments';


const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    
    return (
      
       <div>
         <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Calendar date={ date} setDate={setDate}></Calendar>
          
        </Grid>
        <Grid item xs={12} md={7}>
          <ReviewAppointments date={date}></ReviewAppointments>
        </Grid>
      </Grid>
          
       </div>
    );
};

export default DashboardHome;
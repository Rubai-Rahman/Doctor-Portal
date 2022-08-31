import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        fetch('https://boiling-bastion-80849.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h2 style={{ color: "#19D3AE", fontWeight: 600, m: 5,fontSize:30 }}>Our Doctors </h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor =><Doctor 
                        key={doctor._id}
                        doctor={doctor}></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;
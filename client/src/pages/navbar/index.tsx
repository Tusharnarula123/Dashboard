import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from './../../components/FlexBetween';

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme(); 
    const [selected,setSelected]=useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]} 
        style={{justifyContent:'space-between'}}>
            

        <FlexBetween gap="0.75rem" >
        <AcUnitIcon sx={{fontSize:"28px"}}/> 
        <Typography variant='h4' fontSize="18px">
            FinanceSack
        </Typography>
        </FlexBetween>


        {/*RIght SIde */}
        <FlexBetween gap="2rem">
    <Box sx={{"&:hover":{color:palette.primary[100]}}}>
        <Link 
            to="/" 
            onClick={()=>setSelected("dashboard")}
            style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
            }}
        >
             <Typography variant='h4' fontSize="15px">Dashboard</Typography>
        </Link>
    </Box>
    <Box sx={{"&:hover":{color:palette.primary[100]}}}>
        <Link 
            to="/predictions" 
            onClick={()=>setSelected("predictions")}
            style={{
                color: selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit"
            }}
        >
       <Typography variant='h4' fontSize="15px"></Typography>
        </Link>
    </Box>
</FlexBetween>
</FlexBetween>
    );
}

export default Navbar;

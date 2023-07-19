'use client'

import { Grid, TextField } from "@mui/material";
import { useState } from "react";

function Footer()  {
    const [isOpen, setisOpen] = useState(true);
     
            return         <>
            <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={11} className='m4'>
                    <h1>Mob Studios </h1>
                    <p>Develop and Design all types of games and art for your IOS and Android stores with all of the features involved
and lunch it in the real world and make your games with your full control, customization, and Art

</p>

<h3>Sign up to our newletter</h3>
<TextField />
<h4>2023 Mob Studios, Inc</h4>

                </Grid>
                    
                <Grid item lg={3} md={6} sm={11} className='m2'>
                    
                </Grid>
                <Grid item lg={3} md={6} sm={11} className='m2'>

                        
                    
                    </Grid>
            </Grid>

            </>
}
export default Footer ;
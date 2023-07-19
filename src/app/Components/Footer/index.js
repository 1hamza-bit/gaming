'use client'

import { Grid } from "@mui/material";

function Footer()  {
    const [isOpen, setisOpen] = useState(true);
     
            return         <>
            <Grid container spacing={2}>
            <Grid item lg={5} md={6} sm={11} className='m7'>

                </Grid>
                    
                <Grid item lg={4} md={6} sm={11} className='m7'>
                    
                </Grid>
                <Grid item lg={3} md={6} sm={11} className='m7'>
                    
                    </Grid>
            </Grid>

            </>
}
export default Footer ;
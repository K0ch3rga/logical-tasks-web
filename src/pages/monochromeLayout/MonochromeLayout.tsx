import React from "react";
import {Box} from "@mui/material";

export const MonochromeLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <Box component='main' sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#C7C7C5'
            }}>
                {children}
            </Box>
        </div>
    )
}

import React from 'react';
import {Box, Button} from "@mui/material";

export const PrimaryButton = ({children,sx,...props}) => {
    return (
        <Button variant={'outlined'} sx={{
            fontFamily: "Montserrat",
            fontSize: '13px',
            fontWeight: 600,
            py: '8px',
            borderRadius: '1.2rem',
            textTransform: 'capitalize',
            transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            border: '1px solid #c4c4c4',
            color: "#1a1a1a",
            background: '#fce38a',
            px: '2rem',
            '&:hover': {
              background: '#000',
                color: '#fff',
                border: '1px solid #ffc720',
            },
            ...sx,
        }}
                {...props}
        >
            {children}
        </Button>
    );
};

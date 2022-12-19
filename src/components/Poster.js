import React from 'react'
import {Box, Button, Card, CardContent, CardMedia, Typography} from '@mui/material'

const Poster = () => {
  return (
    <Box sx={{position:'relative'}}>
      <Card className={'s'}>
      <CardMedia
        component="img"
        height="500"
        image={
          'https://static-cse.canva.com/blob/931447/1131w-jpUdye0-K50.jpg'
        }
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
       
        <Button className={'buttonStyles'}>Play Movie</Button>
      </CardContent>
    </Card>
    </Box>
  )   
}

export default Poster
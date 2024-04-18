import { Avatar, Button, Link } from '@mui/material'
import React from 'react'

const Dash = () => {
  return (
    <div>
         <Button variant='text'>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                    <Avatar alt="Remy Sharp" src="https://github.com/abhiraj6/img/blob/main/RESTO%20(1).jpg?raw=true" />
                </Link>
              </Button>
    </div>
  )
}

export default Dash
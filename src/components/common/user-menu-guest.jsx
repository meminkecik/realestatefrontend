import React from 'react'
import { Button } from 'react-bootstrap'
import { AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const UserMenuGuest = () => {
    
  return (
    <Button
              as={Link}
              to={"/login"}
              className="btn btn-outline-secondary"
            >
              <AiFillLock /> Login
  </Button>
  )
}

export default UserMenuGuest
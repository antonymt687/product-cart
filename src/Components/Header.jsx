import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
          <i class="fa-solid fa-cart-plus fa-bounce fs-2 me-2"></i>
            Product Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

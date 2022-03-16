import { Navbar, Container, Form, FormControl, Button, Nav } from "react-bootstrap"

export function Header() {
    return <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand>Погода</Navbar.Brand>
    <Nav className='me-auto'>
    <Nav.Item>
        <Nav.Link style={{color:'white'}}>Местоположение: Москва</Nav.Link>
    </Nav.Item> 
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Поиск"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Поиск</Button>{' '}
      </Form>
    </Container>
  </Navbar>
}
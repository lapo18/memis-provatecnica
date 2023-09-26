import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Col, Row } from 'react-bootstrap';
function App() {

  return (
    <>
    <style type="text/css">
        {`
    .bg-body-primary {
      background-color: #0F0700;
    }
    .bg-body-tertiary {
      background-color: #38312F!important;
    }
    .navbar-brand{
      color: white;
    }
    .nav-link{
      color: #e7c2c2;
      text-transform: uppercase;
    }
    `}
      </style>

    <Navbar collapseOnSelect expand="lg" className="bg-body-primary">
      <Container>
        <Navbar.Brand href="#home">//</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Design</Nav.Link>
            <Nav.Link href="#pricing">Code</Nav.Link>
            <Nav.Link href="#pricing">Photography</Nav.Link>
            <Nav.Link href="#pricing">Travel</Nav.Link>
           
          </Nav>
          <Nav style={{flexDirection:'row', gap:'15px'}}>
            <Nav.Link href="#deets"><i className="bi-facebook"></i>
</Nav.Link>
            <Nav.Link href="#deets"><i className="bi-twitter"></i></Nav.Link>
            <Nav.Link href="#deets"><i className="bi-instagram"></i></Nav.Link>
            <Nav.Link href="#deets"><i className="bi-github"></i></Nav.Link>
            <Nav.Link href="#deets"><i className="bi-rss"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    <Navbar style={{height:'9rem'}}className="bg-body-tertiary">
      <Container>
        <Row>
          <Col xs={12} lg={6} >
            <Container>
              <Row>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
              </Row>  
              <Row>
                <Navbar.Brand href="#home">Intercept programs playground</Navbar.Brand>
              </Row>  
            </Container>
          </Col>          
          <Col xs={12} lg={6}>
            <Nav style={{width:'100%',flexDirection:'row', gap:'15px', flexWrap:'wrap'}}>
                <Nav.Link href="#deets">Home
                </Nav.Link>
                <Nav.Link href="#deets">Links</Nav.Link>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Contact</Nav.Link> 
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <main>
      <Container fluid>
        <Row>
          <Col  lg={3} className='bg-body-secondary'>sa</Col>
          <Col lg={9}>das</Col>
        </Row>
      </Container>
    </main>
    

    
    </>
  )
}

export default App

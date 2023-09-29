import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Col, Row, Button, Form, Card } from 'react-bootstrap'
import survey from './components/Form'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sessionId, setSessionId] = useState(null)
  const validUsers = [
    { username: 'usuario1', password: 'contraseña1', id: 'AAAA123' },
    { username: 'usuario2', password: 'contraseña2', id: 'BBBB456' },
    { username: 'usuario3', password: 'contraseña3', id: 'CCCC789' },
  ]

  const handleLogin = () => {
    // Simula la lógica de inicio de sesión
    const user = validUsers.find(
      (user) =>
        user.username === username && user.password === password
    )
    if (user) {
      setSessionId(user.id)
      setIsLoggedIn(true)
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body-primary"
          >
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
                <Nav style={{ flexDirection: 'row', gap: '15px' }}>
                  <Nav.Link href="#deets">
                    <i className="bi-facebook"></i>
                  </Nav.Link>
                  <Nav.Link href="#deets">
                    <i className="bi-twitter"></i>
                  </Nav.Link>
                  <Nav.Link href="#deets">
                    <i className="bi-instagram"></i>
                  </Nav.Link>
                  <Nav.Link href="#deets">
                    <i className="bi-github"></i>
                  </Nav.Link>
                  <Nav.Link href="#deets">
                    <i className="bi-rss"></i>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar
            style={{ height: '9rem' }}
            className="bg-body-tertiary"
          >
            <Container>
              <Container>
                <Row>
                  <Navbar.Brand
                    className="text-uppercase"
                    href="#home"
                  >
                    Digital Feedback
                  </Navbar.Brand>
                </Row>
                <Row>
                  <Navbar.Brand href="#home">
                    Intercept programs playground
                  </Navbar.Brand>
                </Row>
              </Container>

              <Nav
                style={{
                  width: '30rem',
                  flexDirection: 'row',
                  gap: '15px',
                  flexWrap: 'wrap',
                }}
              >
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">Links</Nav.Link>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <main>
            <Container fluid>
              <Row>
                <Col lg={5} className="text-center bg-body-secondary">
                  <span>05 november / / Design </span>
                  <h1 className="text-uppercase">
                    This is Standar Post
                  </h1>
                  <p>
                    This is what an ordinary post looks like and
                    you're reading a custom excerpt right now. Have
                    fun looking around the theme and don't forget to
                    check it out on your phone!
                  </p>

                  <a className="text-uppercase" href="">
                    Read the post
                  </a>
                  <style type="text/css">
                    {`
                    .cf-navigation-next, .cf-navigation-ok {
                      background: black;
                    }
                    }
                  `}
                  </style>
                  <iframe
                    style={{ display: 'block' }}
                    src={`https://survey.euro.confirmit.com/wix/4/p805779578144.aspx?clientID=${sessionId}`}
                    border="0"
                    height={'500rem'}
                    width={'100%'}
                  ></iframe>
                  <Form></Form>
                </Col>
                <Col
                  style={{
                    backgroundImage: 'url(./src/assets/bg-woods.jpg)',
                  }}
                  lg={7}
                ></Col>
              </Row>
            </Container>
          </main>

          <style type="text/css">
            {`
        body{
            background-color: #38312F;

        }
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
    a{
      color:#38312F;
      text-decoration:none;
      font-weight:700;
    }
    `}
          </style>
        </>
      ) : (
        <Row className="vh-100 align-items-center bg-body-secondary">
          <Container style={{ maxWidth: '25rem' }}>
            <Card className="px-5 py-5">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Usuario"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  className="w-100"
                  onClick={handleLogin}
                  variant="secondary"
                  type="submit"
                >
                  Accedi
                </Button>
              </Form>
            </Card>
          </Container>
        </Row>
      )}
    </>
  )
}

export default App

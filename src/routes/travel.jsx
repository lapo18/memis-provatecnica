import { Container, Row, Col, Dropdown, Button,Card } from 'react-bootstrap'
import milano from '../assets/milano.webp'
function travel() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="text-center" xs={12}>
              <div>
                <h1 style={{ display: 'inline-block' }}>
                  Trova le migliori offerte da
                </h1>
                <Dropdown style={{ display: 'inline-block' }}>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                  >
                    Roma
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div>
                <h1 style={{ display: 'inline-block' }}>Verso</h1>
                <Dropdown style={{ display: 'inline-block' }}>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                  >
                    Qualsiasi destinazione
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              className="text-center d-flex justify-content-between"
              xs={12}
            >
              <Button variant="outline-primary">
                <i className="bi-filter"></i>
                <span className="ps-2">Filtri</span>
              </Button>
              <div className="container-grey-line">
                <div className="grey-line"></div>
              </div>
              <Button variant="outline-secondary">
                Romanticismo
              </Button>
              <Button variant="outline-secondary">City Break</Button>{' '}
              <Button variant="outline-secondary">Cultura</Button>
              <Button variant="outline-secondary">Mare</Button>
              <Button variant="outline-secondary">
                Food and Wine
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={'shadow mb-4'} style={{ width: '18rem',margin:'auto' }}>
                <Card.Img variant="top" src={milano} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>Andata e Ritorno</Card.Text>
                  <div className="price">da 121$</div>
                </Card.Body>
              </Card>
            </Col>
            
            
            
          </Row>
        </Container>
      </section>

      <style>
        {`
          body{
            background-color:white;
          }
          .btn.dropdown-toggle {
            color:blue;
            border:0;
            padding:0;
            padding-left:10px;
            font-size: calc(1.375rem + 1.5vw);
            vertical-align:baseline;
          }
          .btn.dropdown-toggle:hover{
            color:blue;
          }
          .container-grey-line {
            width: 45px;
            height: 49px;
            margin-right: 0px;
            display: inline-block;
            
            text-align: center;
          }
          .grey-line {
            width: 1px;
            height: 57px;
            border-right: 1px solid #c2c2c2;
            display: inline-block;
            position: relative;
            
            padding-left: 0px;
          }
          .price {
            color:#0171CF;
            float: right;
            position: relative;
            margin-top: -58px;
            font-weight:700;
            font-size:1rem;
          }


          

									
									

											@media ( max-width: 480px) {
												.offersBgImage {
												background-size: cover;
												height: 100%!important;
												padding: 41px!important;
   												 border-radius: 8px 0px 0px 8px!important;
												}
											}

											.offersBgImage {
												background-size: cover;
												height: 169px;
												padding: 30px;
											}

										


        `}
      </style>
    </>
  )
}

export default travel
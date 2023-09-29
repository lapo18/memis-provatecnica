import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  Card,
} from 'react-bootstrap'
import { useState } from 'react'
import { CustomModal } from '/src/components/customModal'
function Travel() {
   const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState({
    city: '',
    price: -1,
    categories: [],
     type: '',
   })

   const handleClose = () => setShow(false)

   // Función para abrir el modal con los datos específicos
   const handleShow = (city, price,categories) => {
     setModalData({ city, price,categories })
     setShow(true)
   }

  const [selectedCategories, setSelectedCategories] = useState([])
  const cities = [
    {
      name: 'New York',
      price: 383,
      imgUrl:
        'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=96b8d7008ff5f1d15724b17c17736f1c',
      categories: ['City Break', 'Cultura'],
    },
    {
      name: 'Bruxelles',
      price: 1221,
      imgUrl:
        'https://a.cdn-hotels.com/gdcs/production178/d1699/8f999c57-cf7b-47cf-9252-8e3513ef570d.jpg',
      categories: ['City Break', 'Cultura'],
    },
    {
      name: 'Amsterdam',
      price: 169,
      imgUrl:
        'https://www.amsterdam.net/it/wp-content/uploads/sites/20/amsterdam-canali-ponti-hd.jpg',
      categories: ['Romanticismo', 'Cultura'],
    },
    {
      name: 'Tel Aviv',
      price: 229,
      imgUrl:
        'https://amicidivaligiaviaggi.it/wp-content/uploads/2023/08/00.tel-aviv-cosa-vedere_fb.jpg',
      categories: ['City Break'],
    },
    {
      name: 'Venezia',
      price: 123,
      imgUrl:
        'https://www.veneto.info/wp-content/uploads/sites/114/venezia-canal-grande-notte-hd.jpg',
      categories: ['Romanticismo', 'Cultura'],
    },
    {
      name: 'Catania',
      price: 84,
      imgUrl:
        'https://villatravellers-prod.s3.amazonaws.com/thumbs/guide_page_hero/image/guide/surrounding/a/5e39c9a83285c.jpeg',
      categories: ['City Break', 'Mare'],
    },
  ]
  const categories = [
    'Romanticismo',
    'City Break',
    'Cultura',
    'Mare',
    'Food and Wine',
  ]
  const filteredCities = cities.filter((city) => {
    if (selectedCategories.length === 0) {
      // mostra tutte le citta
      return true
    }
    // Mostrar citta se lameno una categoria coincide
    for (const category of city.categories) {
      if (selectedCategories.includes(category)) {
        return true
      }
    }
    return false
  })

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      )
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  return (
    <>
      <section>
        <Container className="mt-5">
          <Row>
            <Col className="text-center" xs={12}>
              <div className="mb-3">
                <h1
                  className={'fw-bold'}
                  style={{ display: 'inline-block' }}
                >
                  Trova le migliori offerte da
                </h1>
                <Dropdown style={{ display: 'inline-block' }}>
                  <Dropdown.Toggle
                    className="fw-bold"
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
              <div className="mb-3">
                <h1
                  className="fw-bold"
                  style={{ display: 'inline-block' }}
                >
                  Verso
                </h1>
                <Dropdown style={{ display: 'inline-block' }}>
                  <Dropdown.Toggle
                    className="fw-bold"
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
          <Row className="justify-content-center mb-5">
            <Col className="d-flex justify-content-center" xs={12}>
              <Button variant="outline-primary">
                <i className="bi-filter"></i>
                <span className="ps-2">Filtri</span>
              </Button>
              <div className="container-grey-line">
                <div className="grey-line"></div>
              </div>
              <div className="d-flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategories.includes(category)
                        ? 'primary'
                        : 'outline-secondary'
                    }
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row xs={1} lg={2} xxl={3}>
            {filteredCities.map((city) => (
              <Col key={city.name}>
                <Button
                  variant="transparent"
                  onClick={() =>
                    handleShow(
                      city.name,
                      city.price,city.categories,
                    )
                  }
                >
                  <Card
                    className={'shadow mb-4'}
                    style={{ width: '25rem', margin: 'auto' }}
                  >
                    <Card.Img
                      style={{ maxHeight: '12rem' }}
                      className="ratio-16x9"
                      variant="top"
                      src={city.imgUrl}
                    />
                    <Card.Body>
                      <Card.Title>{city.name}</Card.Title>
                      <Card.Text>Andata e Ritorno</Card.Text>
                      <div className="price">da {city.price}€</div>
                    </Card.Body>
                  </Card>
                </Button>
                <CustomModal
                  show={show}
                  handleClose={handleClose}
                  city={modalData.city}
                  price={modalData.price}
                  categories={modalData.categories}
                  type={'Andata e Ritorno'}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style>
        {`
          :root{
          }
          body{
            font-family: 'Lato', sans-serif;
            background-color:white;
          }
          .btn{
            font-weight:700;
          }
          .btn.btn-primary{
            background:#0C2440;
            border:2px solid#0C2440;
          }
          .btn.btn-outline-secondary{
            color:#0C2440;
            border:2px solid#0C2440;
          }
          .btn.btn-outline-secondary:hover{
            background:#0C2440;
            color:white;
          }

          .btn.dropdown-toggle {
            color:#0971CF;
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



										


        `}
      </style>
    </>
  )
}

export default Travel

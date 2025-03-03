import { ImageParallax } from 'react-easy-components'
import useFetchData from '../../hooks/useFetchData'

import { Row, Col } from 'react-bootstrap'

import MarchingBand1 from '../../assets/MarchingBand1.jpg'
import MarchingBand2 from '../../assets/MarchingBand2.jpg'
import MarchingBand3 from '../../assets/MarchingBand3.jpg'

import './HomePage.css'
import '../../../node_modules/react-easy-components/dist/index.css'

const HomePage = () => {
  const images = [MarchingBand1, MarchingBand2, MarchingBand3]

  const { data } = useFetchData('home.json')

  console.log(data)

  return (
    <>
      <h1 className="landingTitle">Stickley Designs</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id
        venenatis a condimentum vitae. Egestas pretium aenean pharetra magna ac
        placerat. Nullam eget felis eget nunc lobortis mattis aliquam faucibus
        purus.
      </p>
      <div className="homeParallax mb-5">
        <ImageParallax images={images} />
      </div>
      <Row>
        <Col className="text-center" md={4} sm={12}>
          <i className="bi bi-boombox" />
          <h4>Nisl condimentum id venenatis a condimentum vitae.</h4>
        </Col>
        <Col className="text-center" md={4} sm={12}>
          <i className="bi bi-boombox"></i>
          <h4>Nisl condimentum id venenatis a condimentum vitae.</h4>
        </Col>
        <Col className="text-center" md={4} sm={12}>
          <i className="bi bi-boombox"></i>
          <h4>Nisl condimentum id venenatis a condimentum vitae.</h4>
        </Col>
      </Row>
    </>
  )
}

export default HomePage

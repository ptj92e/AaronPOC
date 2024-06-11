import ImageParallax from '../../components/ImageParallax/ImageParallax'
import useFetchData from '../../hooks/useFetchData'

import MarchingBand1 from '../../assets/MarchingBand1.jpg'
import MarchingBand2 from '../../assets/MarchingBand2.jpg'
import MarchingBand3 from '../../assets/MarchingBand3.jpg'

import './HomePage.css'

const HomePage = () => {
  const images = [MarchingBand1, MarchingBand2, MarchingBand3]

  const { data, loading, error } = useFetchData('home.json')

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
      <div className="homeParallax">
        <ImageParallax images={images} />
      </div>
    </>
  )
}

export default HomePage

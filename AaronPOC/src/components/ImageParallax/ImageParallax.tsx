import { useEffect, useState } from 'react'

import './ImageParallax.css'

const ImageParallax = ({ images }: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const startImageFade = () => {
    const imageDivs = Array.from(document.querySelectorAll('.image'))

    setNextActiveImage(imageDivs)
  }

  const setNextActiveImage = (imageDivs: Element[]) => {
    const activeImageIndex = imageDivs.indexOf(
      document.querySelector('.image.active') as Element
    )
    const nextActiveImageIndex =
      activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1

    imageDivs[activeImageIndex].className = ''
    imageDivs[activeImageIndex].classList.add('image', 'fadeOut')
    imageDivs[nextActiveImageIndex].classList.remove('fadeOut')
    imageDivs[nextActiveImageIndex].classList.add('active', 'fadeIn')

    setImageIndex(nextActiveImageIndex)
  }

  useEffect(() => {
    setTimeout(() => {
      startImageFade()
    }, 6000)
  }, [imageIndex])

  return (
    <div id="parallax">
      {images.map((img, index) => {
        return index === 0 ? (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className="image active"
          />
        ) : (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className="image"
          />
        )
      })}
    </div>
  )
}

export default ImageParallax

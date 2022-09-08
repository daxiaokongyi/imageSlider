import React, {useState} from 'react'
import dataSlider from './dataSlider';
import SliderBtn from '../SliderBtn/SliderBtn';
import './imageSlider.css';

const ImageSliders = () => {
  const imgUrl = 'http://localhost:3000/images/';

  const [slideIndex, setSlideIndex] = useState(1);

  const preSlide = () => {
    console.log(slideIndex);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  }

  const nextSlide = () => {
    console.log(slideIndex);
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);  
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  }

  return (
    <div className='sliders-container'>
      {dataSlider.map((each, index) => {
        return (
          <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={each.id}>
            <img src={`${imgUrl}img${index+1}.jpeg`} alt=''/>
          </div>
        )
      })}
      <SliderBtn moveSlide={preSlide} direction={'prev'}/>
      <SliderBtn moveSlide={nextSlide} direction={'next'}/>

      <div className='dots-container'>
        {Array.from({length:dataSlider.length}).map((each, index) => (
          <div key={index}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            onClick={() => setSlideIndex(index + 1)}
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSliders;

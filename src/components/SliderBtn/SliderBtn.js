import React from 'react'
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';
import './SliderBtn.css';

const SliderBtn = ({moveSlide, direction}) => {
  return (
    <button 
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={moveSlide}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="" />
    </button>
  )
}

export default SliderBtn;
import React, {useState} from 'react';

import arrowRight from '../Imgs/rightArrow.svg';
import arrowLeft from '../Imgs/leftArrow.svg';
import '../Styles/Carousel.css'

export default function Carousel(props) {

    // const nextSlide = nextSlide.bind(this);
    // const prevSlide = prevSlide.bind(this);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const arrowNext = arrowRight;
    const arrowPrev = arrowLeft;
    const name = [
      'Theme 1',
      'Theme 2',
      'Theme 3',
      'Theme 4',
      'Theme 5',
      'Theme 6',
    ];

  const goPrevSlide = () => {
    const lastIndex = name.length - 1;
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;
    
    setCurrentImageIndex(index);
  }

  const goNextSlide = () => {

    const lastIndex = name.length - 1;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;
    
    setCurrentImageIndex(index);
  }

  const onChatStart = e => {
    props.onSelect(e.target.innerText);
    props.open();
  }

  const index = currentImageIndex;
  let firstFiveNames = name.slice(index, index + 5);

  return (
    <div className='main' >
      <img className={index === 0 ? 'leftArrow hide' : 'leftArrow'} src={arrowPrev} alt='' onClick={goPrevSlide} />
      {firstFiveNames.map((name, index) =>
        <button className='elements' key={index} onClick={onChatStart} >{name}</button>
      )}
      <img className={index === name.length - 5 ? 'rightArrow hide' : 'rightArrow'} src={arrowNext} alt='' onClick={goNextSlide} />
    </div>
    );
}
import React from 'react';

import arrowRight from '../Imgs/rightArrow.svg';
import arrowLeft from '../Imgs/leftArrow.svg';
import '../Styles/Carousel.css'

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  
    this.state = {
      currentImageIndex: 0,
      name: [
        'Theme 1',
        'Theme 2',
        'Theme 3',
        'Theme 4',
        'Theme 5',
        'Theme 6',
      ],
      arrowNext: arrowRight,
      arrowPrev: arrowLeft
    };
  }

  prevSlide() {

    const lastIndex = this.state.name.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide() {

    const lastIndex = this.state.name.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  onChatStart = e => {
    this.props.onSelect(e.target.innerText);
    this.props.open();
  }

  render() {
    const index = this.state.currentImageIndex;
    let firstFiveNames = this.state.name.slice(index, index + 5);

   return (
      <div className='main' >
        <img className={index === 0 ? 'leftArrow hide' : 'leftArrow'} src={this.state.arrowPrev} alt='' onClick={this.prevSlide} />
        {firstFiveNames.map((name, index) =>
          <button className='elements' key={index} onClick={this.onChatStart} >{name}</button>
        )}
        <img className={index === this.state.name.length - 5 ? 'rightArrow hide' : 'rightArrow'} src={this.state.arrowNext} alt='' onClick={this.nextSlide} />
      </div>
     );
   }
}
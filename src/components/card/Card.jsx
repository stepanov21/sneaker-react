import React from 'react';
import img from '../../assets/image5.jpg'

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <img className='card__img' src={img} alt="" />
        <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="price">
          <div className='price__item'>
            <span className='price__text'>Цена:</span>
            <b className='price__num'>12 999 руб.</b>
          </div>
          <button className='price__button'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
import React from 'react';
import '../styles/CategoryCard.css'

function CategoryCard(props) {
  return (
    <div className='categoryCardContainer'>
      {props.state.map((single, index) => (
        <div className="categoryCard">
          <img className='categordCardImg' src={single.image} />
          <h4>{single.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard

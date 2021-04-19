import React from 'react';
import '../styles/CategoryCard.css'

function CategoryCard(props) {
  return (
    <div className='categoryCardContainer'>
      {props.state.map((single, index) => (
        <div className="categoryCard">
          <img className='categordCardImg' src={single.image} />
          <div className='categoryTitle'>
            {single.title.length<30 ? single.title : `${single.title.slice(0,12)}...`}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard

import React from 'react';
import '../styles/PageCard.css'
import CategoryCard from './CategoryCard';

export default function PageCard(props) {
  return (
    <div className="pageCard">
      <div className="titleHeader titleCard">
        <div className="pageCardTitle">{props.state.title}</div>
      </div>
      <CategoryCard state={props.state.arr} />
    </div>
  )
}
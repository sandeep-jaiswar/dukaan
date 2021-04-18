import React from 'react';
import '../styles/PageCard.css'
import CategoryCard from './CategoryCard';

export default function PageCard(props) {
  return (
    <div className="pageCard">
      <div className="titleHeader titleCard">
        {props.state.title}
      </div>
      <CategoryCard state={props.state.arr} />
    </div>
  )
}
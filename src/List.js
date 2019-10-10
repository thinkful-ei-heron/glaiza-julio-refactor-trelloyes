import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            title={card.title}
            key={card.id}
            id={card.id}
            content={card.content}    
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}
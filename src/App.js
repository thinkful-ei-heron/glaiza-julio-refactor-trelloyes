import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  // static defaultProps = {
    store = {
      lists: [
            {
              id: '1',
              header: 'First list',
              cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
            },
            {
              id: '2',
              header: 'Second list',
              cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
            },
            {
              id: '3',
              header: 'Third list',
              cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
            },
            {
              id: '4',
              header: 'Fourth list',
              cardIds: [ 'l', 'm' ],
            },
          ],
        allCards: {
              'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
              'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
              'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
              'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
              'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
              'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
              'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },                'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
              'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
              'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
              'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
              'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
              'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
              },
    }
  // };
  
  deleteCard = (index) => {
    console.log('delete card runs');
  };

  addRandomCard = () => {
    const newCard = {
      id : Math.ceil(Math.random * 15),
      header : 'example',
      cardIds : 'example',
    };
    console.log(this);
    this.setState({lists: [...this.store.lists, newCard]});
  }

  render() {
    const store = this.store.lists
    const events = this.store.allCards
    console.log(events);
    console.log(store);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => events[id])}
              handleDelete={this.deleteCard}
              addCard={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

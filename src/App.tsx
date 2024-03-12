import './styles/reset.css';
import React from 'react';
import { cardsData } from './constants/card';
import CardList from './components/cards/CardList';

function App() {
  return (
    <div className="App">
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;

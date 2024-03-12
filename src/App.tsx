import './styles/reset.css';
import './styles/common.css';
import React from 'react';
import { cardsData } from './constants/card';
import CardList from './components/cards/CardList';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <main>
        <h1>과제 1</h1>
        <CardList cards={cardsData} />
        <h1>과제 2</h1>
        <TextField
          initialText="[default] 초깃값이 있을 수 있습니다."
          maxLength={500}
          disabled={false}
        />
        <TextField
          initialText=""
          disabledPlaceholder={'[disable] 주문 요청사항을 입력해 주세요.'}
          maxLength={500}
          disabled={true}
        />
        <TextField
          initialText="[readonly] 읽기 전용 상태"
          maxLength={500}
          readOnly={true}
        />
      </main>
    </div>
  );
}

export default App;

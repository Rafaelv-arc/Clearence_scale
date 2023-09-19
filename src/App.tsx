import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Events from './events';

import './Sample.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function App() {

  return (
    <div className="Sample">
      <header>
        <h1 className='titulo'>Escala de Folgas</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Events />
        </main>
      </div>
    </div>
  );
}

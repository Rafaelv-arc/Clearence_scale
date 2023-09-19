/* eslint-disable no-undef */
import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importe os estilos do react-calendar

function Events() {
  // Passo 1: Defina o estado para armazenar os eventos
  const [eventos, setEventos] = useState([]);

  // Passo 4: Defina a função para personalizar a aparência dos dias com eventos
  const tileContent = ({ date, view }) => {
    // Verifique se a visualização é 'month' (mês) e se a data tem um evento
    if (
      view === "month" &&
      eventos.some((evento) => isSameDay(evento.date, date))
    ) {
      return <div className="evento">•</div>; // Exibe um ponto nos dias com eventos
    }
    return null;
  };

  // Passo 5: Função para adicionar um novo evento
  const adicionarEvento = (data, titulo) => {
    const novoEvento = {
      date: data,
      title: titulo,
    };
    setEventos([...eventos, novoEvento]);
  };

  return (
    <div>
      <Calendar
        value={eventos.map((evento) => evento.date)}
        tileContent={tileContent}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new Date(e.target.data.value);
          const titulo = e.target.titulo.value;
          adicionarEvento(data, titulo);
          e.target.reset();
        }}
      >
        <label htmlFor="data">Data:</label>
        <input type="date" id="data" required />
        <br />
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" required />
        <br />
        <button type="submit">Adicionar Evento</button>
      </form>

      <div>
        <h2>Eventos</h2>
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>
              {evento.title} - {evento.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Events;

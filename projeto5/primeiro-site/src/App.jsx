import image from './assets/react.png'

export default function App() {
  return (
    <div>

      <img src={image} alt="" />

      <h1>React</h1>

      <p>biblioteca para interfaces de usuários web e nativas.</p>

      <button>Aprenda React</button>

      <button>Referência da API</button>

      <hr />

      <h2>Crie interfaces de usuário de componentes</h2>

      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>

      <hr />

      <h2>Escreva componentes com código e marcação</h2>

      <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React.</p>

      <hr />

      <h2>Próximos passos</h2>

      <ul>

      <li><p>Uso de dados dinâmicos no JSX</p></li>
      <li><p>Criação de novos componentes</p></li>
      <li><p>Estlização de componentes</p></li>
      <li><p>Reutilização de componentes</p></li>
      <li><p>Uso de props e children</p></li>
      <li><p>Uso de eventos do JavaScript</p></li>

      </ul>

    </div>
  )
}
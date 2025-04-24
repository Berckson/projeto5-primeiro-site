import imagem from '../public/react.png'
export default function App() {


  return (
    <div>
      <img src={imagem} alt="" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuários web e nativas

      </p>
      <button>Aprenda React</button>

      <button>Referência da API</button> <hr />

      <h1>Crie interfaces de usuários de componenes </h1>
      <p>
        React permite que você construa interfaces de usuários a partir de pedaços individuais chamaddos componentes
      </p><hr />
      <h1>Escreva componentes com codigo e marcação</h1>
      <p>
        componentes react são funções JavaScript.A sintaxe de marcação é chamada de JSX.É uma extensão da sintaxe JavaScript popularizada pelo react
      </p> <hr />
      <h1>Próximos passos</h1>
      <ul>
        <li>Uso  de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>



      </ul>

    </div>
  )
}
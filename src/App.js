import './App.css';
import logo from './logo.png';

export default function App() {
  const introducao = "Gourmet Express é um cardápio online para clientes em estabelecimentos.";

  function logoGourmetExpress() {
    return logo
  }

  return (
    <div className="App">
      <h1>Gourmet Express</h1>
      <img src={logoGourmetExpress()} alt="Logo do Gourmet express"/>
      <p>{introducao}</p>
      <p>Seu objetivo é facilitar ações para clientes e funcionários, automatizando ações como</p>
      <h2>Para <strong>Clientes</strong>:</h2>
      <ul>
        <li>Realizar pedidos;</li>
        <li>Fazer pagamentos;</li>
        <li>Acessar cardápio com antecedência;</li>
      </ul>
      <h2>Para <strong>Funcionários</strong>:</h2>
      <ul>
        <li>Receber pedidos e entregá-los;</li>
        <li>Fazer confirmação de entrega de pedidos via código (QR COde ou token);</li>
        <li>Ter acesso a gráficos que mostrem a quantia de vendas dos pratos;</li>
      </ul>
    </div>
  );
}
import "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <ul>
            <li>
              Compra <strong>100% segura </strong>
            </li>
            <li>
              <span>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </li>
            <li>
              <span>
                <strong>Parcele</strong> suas compras
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img src="@/assets/images/logo.svg" alt="Econverse" />
          <div>
            <input type="text" />
            <button>Pesquisar</button>
          </div>
          <div></div>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Todas Categorias</a>
              </li>
              <li>
                <a href="#">Supermercado</a>
              </li>
              <li>
                <a href="#">Livros</a>
              </li>
              <li>
                <a href="#">Moda</a>
              </li>
              <li>
                <a href="#">Lançamentos</a>
              </li>
              <li>
                <a href="#">Ofertas do dia</a>
              </li>
              <li>
                <a href="#">Assinatura</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

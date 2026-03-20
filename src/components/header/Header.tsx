import TopBar from "@/components/top-bar/TopBar";
import LogoUrl from "@/assets/images/logo.svg?url";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="header">
        <div className="container">
          <a href="">
            <img src={LogoUrl} alt="Econverse" />
          </a>
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

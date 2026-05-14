import TopBar from "@/components/top-bar/TopBar";
import TopBarItem from "../top-bar/TopBarItem";
import ShieldCheckIcon from "@/assets/icons/shield-check.svg";
import TruckIcon from "@/assets/icons/truck.svg";
import CreditCardIcon from "@/assets/icons/credit-card.svg";

import LogoUrl from "@/assets/images/logo.svg?url";

export default function Header() {
  return (
    <>
      <div className="container">
        <TopBar>
          <TopBarItem>
            <ShieldCheckIcon />
            <span>
              Compra <strong>100% segura </strong>
            </span>
          </TopBarItem>
          <TopBarItem>
            <TruckIcon />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </TopBarItem>
          <TopBarItem>
            <CreditCardIcon />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </TopBarItem>
        </TopBar>
      </div>
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

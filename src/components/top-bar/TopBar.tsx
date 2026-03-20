import ShieldCheckIcon from "@/assets/icons/shield-check.svg";
import TruckIcon from "@/assets/icons/truck.svg";
import CreditCardIcon from "@/assets/icons/credit-card.svg";
import "./TopBar.scss";

function TopBar() {
  return (
    <div className="container">
      <div className="top-bar">
        <ul className="top-bar__list">
          <li className="top-bar__item">
            <ShieldCheckIcon />
            <span>
              Compra <strong>100% segura </strong>
            </span>
          </li>
          <li className="top-bar__item">
            <TruckIcon />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </li>
          <li className="top-bar__item">
            <CreditCardIcon />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;

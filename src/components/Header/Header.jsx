import dncLogo from "../../assets/dnclogo.png";
import "./index.scss";

const Header = () => {
  return (
    // Block
    <div className="header">
      <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
  );
};

export default Header;

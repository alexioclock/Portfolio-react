import { stack as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import "./sidebar.scss";

export default (props) => {




  return (
    <Menu   {...props}>
      <Link to="home" spy={true} smooth={true} duration={1000}>
        Home
      </Link>

      <Link to="a-propos" spy={true} smooth={true} duration={1000}>
        À propos
      </Link>

      <Link to="technology" spy={true} smooth={true} duration={1000}>
        Technologies
      </Link>

      <Link to="contact" spy={true} smooth={true} duration={1000}>
        Contact
      </Link>
    </Menu>
  );
};

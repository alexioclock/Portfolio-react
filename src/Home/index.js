import "./home.scss";
import Logo from "../Logo";
import Network from "../Network";
import ReactLogo from "../ReactLogo";
import {Link} from 'react-scroll'

function Home({lightTheme}) {

  
  
  return (
    <div className={lightTheme ? "lighthome" : "home"} id="home">
        <ReactLogo lightTheme={lightTheme}/>
        <div className="home-content">
            <h4 className="intro-title">I Am</h4>
            <h1 className="home-title">Alexis</h1>
            <Logo/>
            <img className="" src="" alt=""/>
        </div>
        <div className="home-pic"></div>
        <Network />  
        <Link to="a-propos" spy={true} smooth={true} duration={1000}>
        <svg 
        className="arrow" 
        fill="white" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        cursor="pointer"
        viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>   
        </Link>   
    </div>
  );
}

export default Home;

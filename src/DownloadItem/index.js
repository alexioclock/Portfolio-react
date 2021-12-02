import "./downloadItem.scss";
import cv from "../data/cv-dev-web.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function DownloadItem() {

  useEffect(() => {
    Aos.init({duration:2000});
}, []);

  return (
    <div 
    data-aos="fade-up" 
    data-aos-anchor-placement="bottom-bottom" 
    className="download-content">
      <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
        Mon CV
      </a>
    </div>
  );
}

export default DownloadItem;

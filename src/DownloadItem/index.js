import "./downloadItem.scss";
import cv from "../data/cv-dev-web.pdf";

function DownloadItem() {
  return (
    <div className="download-content">
      <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
        Mon CV
      </a>
    </div>
  );
}

export default DownloadItem;

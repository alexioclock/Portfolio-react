import "./technologies.scss";

function Techologies() {
  return (
    <div className="technologies-container" id="technology">
      <div className="technologies-container-text">
        <p>
          Les technologies utilisées
        </p>
        <div className="list-container">
            <div className="circle"><img className="skill-logo" src="https://img.icons8.com/ios/500/000000/html-5--v1.png" alt=""/></div>
            <div className="circle"><img className="skill-logo" src="https://img.icons8.com/ios/500/000000/css3.png" alt=""/></div>
            <div className="circle"><img className="skill-logo" src="https://img.icons8.com/ios/500/000000/react-native--v1.png" alt=""/></div>
            <div className="circle"><img className="skill-logo" src="https://img.icons8.com/ios/500/000000/git.png" alt=""/></div>
            <div className="circle"><img className="skill-logo" src="https://img.icons8.com/ios-glyphs/480/000000/github.png" alt=""/></div>
            <div className="circle"><img  className="skill-logo" src="https://img.icons8.com/windows/512/000000/redux.png" alt=""/></div>
        </div>
      </div>
    </div>
  );
}

export default Techologies;

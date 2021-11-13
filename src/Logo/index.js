import "./logo.scss";
import Typewriter from "typewriter-effect";

function Logo() {
  return (
    <div className="logo">
      <Typewriter
        className="typewriter"
        onInit={(Typewriter) => {
          Typewriter.typeString("Developer React / Redux ")
            .start();
        }}
      />
    </div>
  );
}

export default Logo;

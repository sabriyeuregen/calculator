import iconHistory from "../assets/iconHistory.png"
import iconLigth from "../assets/iconLigth.png";
import iconDark from "../assets/iconDark.png";
import "./Screen.css";
const Screen = (props) => {
  
  return (
    <div className="screen">
       <div className="screen__history-icon">
       <img src={iconHistory} alt=""/>
       </div>
       <div className="screen__toggle">
       <div className="screentoggle__ligth-icon">
        <img src={iconLigth} alt="" />
      </div>
      <div className="screentoggle__dark-icon">
        <img src={iconDark} alt="" />
      </div>
       </div>
       <div className="screen__output">
        <div className="screen__input">{props.input}</div>
        <div className="screen__result">{props.result}</div>
       </div>
  </div>)
};
export default Screen;

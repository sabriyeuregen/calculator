import "./Buttons.css";
const Buttons = (props) => {
  return (
    <div>
      <button
        className="buttons__value"
        onClick={() => props.handleClick(props.symbol)}
      >
        {props.symbol}
      </button>
    </div>
  );
};
export default Buttons;

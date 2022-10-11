import "./card.css";

function Card({ children, remove }) {
	return (
		<div className="card_wrapper">
      <span className="card_close" onClick={remove}>
        X
      </span>
			<div className="card">{children}</div>
		</div>
	);
}

export default Card;

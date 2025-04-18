import TotalItem from "./TotalItem";
import React from "react";

export default function Footer({
	onClickCompleteOrder,
	items,
	onClickRemove,
	...rest
}) {
	let total = 0;
	const totalItemElements = Object.keys(items).map((key) => {
		const item = items[key][0];
		total += items[key].length * Number(item.price);
		return (
			<TotalItem
				className="total-item"
				key={key}
				item={item}
				quantity={items[key].length}
			/>
		);
	});

	return (
		<footer className="footer">
			<h3>Your Order</h3>
			{totalItemElements}
			<div className="div-total large-text">
				<p className="extra-large-text">Total</p>
				<p className="large-text">{total}</p>
			</div>
			<button className="complete-order-btn" onClick={onClickCompleteOrder}>
				Complete order
			</button>
		</footer>
	);
}

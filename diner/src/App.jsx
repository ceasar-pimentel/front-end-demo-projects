import React from "react";
import "./App.css";
import DinerItem from "./components/DinerItem";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	const [items, setItems] = React.useState();
	const [cart, setCart] = React.useState({});

	function onAddToCard(item) {
		setCart((prevCart) => {
			if (!Object.keys(prevCart).includes(item.name)) {
				return { ...prevCart, [item.name]: [item] };
			}
			return { ...prevCart, [item.name]: [...prevCart[item.name], item] };
		});
	}

	function onClickCompleteOrder() {}

	function onClickRemove() {}

	console.log(cart);

	React.useEffect(() => {
		fetch("/api/items")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItems(data.items);
			});
	}, []);

	const itemElements = items
		? items.map((item) => {
				return <DinerItem onClick={onAddToCard} key={item.id} item={item} />;
		  })
		: null;

	return (
		<>
			<Header />
			<Main>{itemElements}</Main>
			{Object.keys(cart).length > 0 ? (
				<Footer
					items={cart}
					onClickComplete={onClickCompleteOrder}
					onClickRemove={onClickRemove}
				/>
			) : undefined}
		</>
	);
}

export default App;

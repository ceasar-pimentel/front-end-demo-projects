import MenuNav from "../../features/menu/components/MenuNav/MenuNav";
import styles from "./Menu.module.css";
import ItemList from "../../features/menu/components/ItemList/ItemLIst";
export default function Menu() {
	return (
		<section className={styles["menu-section"]}>
			<MenuNav className={styles["menu-nav"]}></MenuNav>
			<ItemList />
		</section>
	);
}

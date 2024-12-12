import { useState } from "react";
import styles from "./App.module.css";

export const List = (props) => {
	return (
		<>
			<p className={styles["no-margin-text"]}>
				Нет добавленных элементов
			</p>
			<ul className={styles["list"]}>
				<li className={styles["list-item"]}>Первый элемент</li>
			</ul>
		</>
	);
};

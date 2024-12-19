// import "./App.css";
import styles from "./App.module.css";
import { useState } from "react";
// import { List } from "./List";

const timeOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [id, setId] = useState(1);
  const [date, setDate] = useState(
    new Date().toLocaleDateString("ru-Ru", timeOptions)
  );

  const onInputButtonClick = () => {
    const promptValue = prompt("Введите новое значение");
    let errorMessage = "";

    if (promptValue.length > 2) {
      setValue(promptValue);
    } else {
      errorMessage = "Введенное значение должно содержать минимум 3 символа";
    }

    setError(errorMessage);
  };

  const onAddButtonClick = () => {
    setId(id + 1);
    setDate(new Date().toLocaleDateString("ru-Ru", timeOptions));
    const updatedList = [...list, { id, value, date }];
    setList(updatedList);
    setValue("");
    setError("");
  };

  const errorMessage = <div className={styles["error"]}>{error}</div>;
  return (
    <div className={styles["app"]}>
      <h1 className={styles["page-heading"]}>Ввод значения</h1>
      <p className={styles["no-margin-text"]}>
        Текущее значение <code>value</code>: "
        <output className={styles["current-value"]}>{value}</output>"
      </p>
      {error === "Введенное значение должно содержать минимум 3 символа" &&
        errorMessage}
      <div className={styles["buttons-container"]}>
        <button className={styles["button"]} onClick={onInputButtonClick}>
          Ввести новое
        </button>
        <button
          className={styles["button"]}
          disabled={value === ""}
          onClick={onAddButtonClick}
        >
          Добавить в список
        </button>
      </div>
      <div className={styles["list-container"]}>
        <h2 className={styles["list-heading"]}>Список:</h2>
        {!list.length > 0 && (
          <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
        )}
        <ul className={styles["list"]}>
          {list.map(({ id, value, date }) => {
            return (
              <li className={styles["list-item"]} key={id}>
                {value} {date}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

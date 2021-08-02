import { useState } from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query.trim() === "") {
            return alert("Enter a value to search.", {
            });
        }
        onSubmit(query);
        setQuery("");
    };

    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}> Search
                    </span>
                </button>

                <input className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query} onChange={handleChange} />
            </form>
        </header>
    );
}

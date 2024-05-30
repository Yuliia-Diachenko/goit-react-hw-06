import css from "./SearchBox.module.css";
import { useId } from "react";
function SearchBox({value, onFilter}) {
    const boxId = useId();
    return (
        <form className={css.form}>
            <label htmlFor={boxId}>Find contacts by name</label>
            <input type="text" id={boxId} value={value} onChange={e => onFilter(e.target.value)}/>
        </form>
    )
}
export default SearchBox;
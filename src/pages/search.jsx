import {observer} from "mobx-react";
import {booksStore} from "../components/booksStore";
import {Input} from "../components/input";

const Search = () => {
    const {
        osLoading,
        query,
        setQuery,
        searchingbyAuthor,
        onSearch,
    } = booksStore

    return (
        <>
           <Input />
            <input
                id="searchingbyAuther"
                type="checkbox"
                checked={searchingbyAuthor.value}
                onChange={searchingbyAuthor.toggle}
            />
            <label htmlFor="searchingbyAuther">Searching by Author</label>
        </>
    )
}

export default observer(Search)
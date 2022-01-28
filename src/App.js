import React from "react";
import './App.css';
import { observer } from "mobx-react";
import {booksStore} from "./pages/books/store";


import {Spin} from "./components/Spin";
import Search from "./pages/books/Search";



const App = () => {
    const { isLoading, books } = booksStore

    return (
        <div>
            <Search />

            <Spin isLoading={isLoading} />

            {books.map(({ key, cover, title, author }) => (
                <div key={key}>
                    <img
                        src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
                        className="cover"
                        alt=""
                    />

                    <div>
                        {title}
                        <br />
                        <i>{author}</i>
                    </div>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default observer(App)

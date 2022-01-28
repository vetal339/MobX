import React from "react";
import './App.css';
import { observer } from "mobx-react";
import { booksStore } from "./components/booksStore";
import {Input} from "./components/input";


function App(){
    const { isLoading, search, books } = bookStore
    return (
        <div>
            <Input isLoading = {isLoading} onSearch={search} />

            <Spin isLoading={isLoading}  />

            {books.map(({ key, cover, title, author }) (
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

export default App;

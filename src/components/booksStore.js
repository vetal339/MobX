import { makeAutoObservable } from "mobx";
import api from "../api";
import {WithBooleanFlag} from "../core/WithBooleanFlag";


class Store{
    constructor() {
        makeAutoObservable(this)
    }


    Store.searchingbyAuthor: WithBooleanFlag

    searchingbyAuthor = new WithBooleanFlag()
    query = ""




    setQuery = (value) => {
        this.query = value
    }

    search = async (query) => {
        try {
            this.isLoading = true
            const result = await api.searchBook(query)
            if (result === null) return alert("Server Error")

            this.books = result.filter(item => item.cover)
            this.books.forEach((item) => {
                item.title = item.title.toUpperCase()
            })
        } finally {
            this.isLoading = false
        }
    }
}

const booksStore = new Store()

export { booksStore }
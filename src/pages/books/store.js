import { makeAutoObservable } from "mobx"
import api from "../../api"
import {WithBooleanFlag} from "../../core/WithBooleanFlag";


class Store {
    constructor() {
        makeAutoObservable(this)
    }

    isLoading = false
    searchingbyAuthor = new WithBooleanFlag()
    query = ""

    setQuery = (value) => {
        this.query = value
    }

    onSearch = async () => {
        try {
            this.isLoading = true
            const result = await api.searchBook(
                this.query,
                this.searchingbyAuthor.value,
            )
            if (result === null) return alert("Server error")

            this.books = result.filter((item) => item.cover)
        } finally {
            this.isLoading = false
        }
    }
}

export const booksStore = new Store()

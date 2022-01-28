import React from "react";
import axios from "axios";


const url = "https://openlibrary.org/search.json"


async function searchBook (q): Books {
    try {
        const { data } = await axios({url, params: { q }})

        return data.docs.map(({key, title, author_name, cover_i}) => {
            key,
            title,
            author: author_name?.join(","),
            cover: cover_i,
        })
    } catch (error) {
        console.error("searchBook", error)
        return null
    }
}

export default { searchBook }
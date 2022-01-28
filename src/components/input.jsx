import { useState } from "react"


export const  Input = ({isLoading, onSearch,}) => {
    const [query, setQuery] = useState("")

    return (
        <input
            placeholder="Search"
            value={query}
            disabled={isLoading}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? onSearch(query) : undefined)}
        />
    )
}
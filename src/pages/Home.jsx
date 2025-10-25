import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: 'gadar1', release_date: '2021' },
        { id: 2, title: 'matrix', release_date: '2022' },
        { id: 3, title: 'KNPH', release_date: '2023' },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }
    return (<>
        <div className="Home">
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button className="search-btn" type="submit">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery)  && (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    </>)
}

export default Home
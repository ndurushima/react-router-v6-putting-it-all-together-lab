// import { setupDirect } from "@testing-library/user-event/dist/cjs/setup/setup.js";
import { Outlet, Link, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
    const { directors, setDirectors } = useOutletContext()
    const { id } = useParams()
    const director = directors.find((d) => d.id.toString() === id);


    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add a New Movie</Link>
        <Outlet context={{ director, directors, setDirectors }}/>
        </div>
    )
}

export default DirectorCard

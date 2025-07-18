import DirectorForm from "./DirectorForm"
import MovieCard from "./MovieCard"
import MovieForm from "./MovieForm"

function DirectorCard() {
    // Replace me
    const director = null

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
                <a>{movie.title}</a>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        <DirectorForm />
        <MovieCard />
        <MovieForm />
        </div>
    )
}

export default DirectorCard

import React from "react";

export default function MovieDisplay({ movie }) {
    const loaded = () => {
        return (
            <div className="movie-container">
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="movie-poster"
                />
                <h2>{movie.Year}</h2>
            </div>
        );
    };

    const loading = () => {
        return <h1>No Movie to Display</h1>;
    };

    return movie ? loaded() : loading();
}

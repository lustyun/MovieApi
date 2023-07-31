import styled from "styled-components";

export const GlobalStyles = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

    .App {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        font-family: "Roboto";
    }
    
    /* Styling for the container that holds movie information */
    .movie-container {
        background-color: #333;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        text-align: center;
    }

    /* Styling for the movie poster */
    .movie-poster {
        width: 300px;
        height: 450px;
        object-fit: cover;
        margin: 10px auto;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    /* Styling for the movie title */
    .movie-container h1 {
        color: #fff;
    }

    /* Styling for the movie genre and year */
    .movie-container h2 {
        color: #ccc;
    }
    /* Styling for the form container */
    .form-container {
        margin: 10px auto;
        text-align: center;
    }

    /* Styling for the search form */
    .search-form {
        display: inline-block;
        background-color: #333;
        padding: 10px 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    /* Styling for the search input */
    .search-input {
        padding: 8px;
        font-size: 16px;
        background-color: #444;
        color: #fff;
        border: none;
        border-radius: 4px;
        outline: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    /* Styling for the search button */
    .search-button {
        padding: 8px 16px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    /* Hover effect for the search button */
    .search-button:hover {
        background-color: #0056b3;
    }
`;

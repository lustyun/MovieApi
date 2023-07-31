import React, { useState } from "react";

export default function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.moviesearch(formData.searchterm);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                    className="search-input"
                    placeholder="Search for a movie..."
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </div>
    );
}

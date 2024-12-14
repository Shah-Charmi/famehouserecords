import React, { useEffect, useState } from "react";
import api from "../api";  // Ensure your axios instance is correctly set up

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/artists")
      .then((response) => {
        console.log("Artists data:", response.data);  // Log data to check
        setArtists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
        setError("Failed to load artists.");
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Meet Our Team</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message if any */}
      <div className="row">
        {artists.map((artist) => (
          <div key={artist.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={artist.imageUrl || 'https://via.placeholder.com/300x200'}  // Placeholder image
                alt={artist.name}
                className="card-img-top"
                style={{ height: "280px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <p className="card-text">{artist.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;

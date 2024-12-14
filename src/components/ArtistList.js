// import React, { useEffect, useState } from "react";
// import api from "../api";  // Ensure your axios instance is correctly set up

// const ArtistList = () => {
//   const [artists, setArtists] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     api.get("/artists")
//       .then((response) => {
//         console.log("Artists data:", response.data);  // Log data to check
//         setArtists(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching artists:", error);
//         setError("Failed to load artists.");
//       });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Meet Our Team</h1>
//       {error && <div className="alert alert-danger">{error}</div>} {/* Display error message if any */}
//       <div className="row">
//         {artists.map((artist) => (
//           <div key={artist.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <img
//                 src={artist.imageUrl || 'https://via.placeholder.com/300x200'}  // Placeholder image
//                 alt={artist.name}
//                 className="card-img-top"
//                 style={{ height: "280px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{artist.name}</h5>
//                 <p className="card-text">{artist.bio}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React from "react";

const ArtistList = () => {

  const artists = [
    {
      id: 1,
      name: "Arya .C. Parikh",
      imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_4a7af36e-6a70-4655-8c3f-f43f684f3247-273bb7bf-c1a2e6df-5090cb29.jpg", 
      bio: "Chief Executive officer & Founder"
    },
    {
      id: 2,
      name: "Utkarsh Jha",
      imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_f572b402-de69-4b9f-8424-2b72b3261d93-338aee95-fcd50d8f.jpg", 
      bio: "Music Producer"
    },
    {
      id: 3,
      name: "Shubham Sharma",
      imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_459aac0a-28a1-40e9-a5e6-48fb6bc7ce8f-c9a30493-68666780-d127458b.jpg", 
      bio: "Chief Executive officer & Founder"
    },
    {
        id:4 ,
        name: "Yudit khandelwal",
        imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_8babb83a-812c-4aa5-b92f-1a4ac579b6f3-07e26fa1.jpg", 
        bio:"SINGER /ARTIST(Hindi)" 
      },
      {
        id:5 ,
        name: "Krish",
        imageUrl:"https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_9021db3e-a391-4c94-93b7-6219fedec959-e6e393b1.jpg" ,
        bio: "SINGER /ARTIST(Hindi)"
      },
      {
        id:6 ,
        name:"Deepak Lohan" ,
        imageUrl:"https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749071_ce0cf1fc-b451-4fc0-afd2-9c5f1af08a2c.jpg" , 
        bio: "SINGER /ARTIST(Haryanvi)"
      },
      {
        id: 7,
        name:"Menemp" ,
        imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/WhatsApp+Image+2024-09-16+at+11.52.29-7c568906.jpeg", 
        bio: "SINGER /ARTIST(Desi hip hop)"
      },
      {
        id: 8,
        name:"Anand" ,
        imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/WhatsApp+Image+2024-09-18+at+00.46.07.jpeg", 
        bio: "Video edit,visual effects, video production"
      },
      {
        id:9 ,
        name: "Ruhh",
        imageUrl: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/20241001_000500-1ecbf375.jpg", 
        bio: "SINGER / ARTIST(Desi hip hop)"
      },
      {
        id:10 ,
        name: "Rohan Parida" ,
        imageUrl:"https://irp.cdn-website.com/59e2739c/dms3rep/multi/WhatsApp-Image-2024-11-28-at-00.59.18.jpeg" , 
        bio: "SINGER / ARTIST(contemporary Classical music)"
      },
      {
        id: 11,
        name:"Bhav Chaddha" ,
        imageUrl:"https://irp.cdn-website.com/59e2739c/dms3rep/multi/IMG_0066.jpg" ,
        bio: "SINGER / ARTIST(Punjabi Lyricist/Singer)"
      }

  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Artists</h1>
      <div className="row">
        {artists.map((artist) => (
          <div key={artist.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                {/* Display artist image */}
                <img
                  src={artist.imageUrl || 'https://via.placeholder.com/300x200'}  
                  alt={artist.name}
                  className="img-fluid rounded border"  
                  style={{ height: "280px", objectFit: "cover" }}
                />
                {/* Display artist name */}
                <h5 className="card-title">{artist.name}</h5>
                {/* Display artist bio */}
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

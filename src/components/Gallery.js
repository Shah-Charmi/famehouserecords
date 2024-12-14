import React from "react";

const ImageGrid = () => {
  const images = [
    {
      src: "https://lirp.cdn-website.com/59e2739c/dms3rep/multi/opt/4749073_0781ef2e-2fd9-44c7-83f4-ed7f8b1f076d-f21791c0-ff61ae0f-abbb96f7-a5ebdd34-1652ad8d-96ca24fc-1000h.jpg", 
      alt: "Image 1",
      link: "https://www.youtube.com/watch?v=_UnABH0q9d4",
    },
    {
      src: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/4749073_f581adad-616e-4c44-bc2f-9b83f0c7c99e-fe891b6f-7b139d5c.jpg", // Replace with your image URL
      alt: "Image 2",
      link: "https://www.youtube.com/watch?v=ghWsVNx4-L4",
    },
    {
      src: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/20241001_000500.jpg", 
      alt: "Image 3",
      link: "https://www.youtube.com/watch?v=Mh1WnP_wyok",
    },
    {
      src: "https://irp.cdn-website.com/59e2739c/dms3rep/multi/Red+and+Yellow+Modern+Rap+Music+Music+Album+Cover+%287%29.jpg", // Replace with your image URL
      alt: "Image 4",
      link: "https://www.youtube.com/watch?v=92n56bYOr1g",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid rounded border"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

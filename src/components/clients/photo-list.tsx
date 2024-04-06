import React from 'react';

const PhotoList = ({ photos }: any) => {
  return (
    <div className="photo-container">
      {photos.map(photo => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>Album ID: {photo.albumId}</p>
          <p>ID: {photo.id}</p>
          <p>
            URL: <a href={photo.url}>{photo.url}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;

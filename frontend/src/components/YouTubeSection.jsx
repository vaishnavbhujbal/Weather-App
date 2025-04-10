
import React from 'react';

const YouTubeSection = ({ videos }) => {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Videos about this place</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video, idx) => (
          <iframe
            key={idx}
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSection;

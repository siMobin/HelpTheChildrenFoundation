"use client";

import React, { useState } from "react";

interface DocumentaryProps {
  url: string;
}

const Documentary: React.FC<DocumentaryProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (link: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
      {!isPlaying && videoId ? (
        <>
          {/* Auto Thumbnail */}
          <img
            src={thumbnail}
            alt="Documentary Video"
            className="w-full h-full object-cover"
          />

          {/* Custom Play Button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </>
      ) : (
        // YouTube iframe
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default Documentary;

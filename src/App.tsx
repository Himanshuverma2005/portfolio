import React, { useState } from 'react';

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    console.log('Profile image loaded successfully');
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (error: any) => {
    console.error('Error loading profile image:', error);
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {imageError && (
        <div className="text-red-500 mb-4">Error loading image</div>
      )}
      {imageLoaded && (
        <div className="text-green-500 mb-4">Image loaded successfully!</div>
      )}
      <img
        src="/IMG-20240224-WA0037.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover mb-4"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Your Name</h1>
      <p className="text-gray-600">Start prompting (or editing) to see magic happen :)</p>
    </div>
  );
}

export default App; 
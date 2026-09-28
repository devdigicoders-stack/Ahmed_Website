import React, { useState } from 'react';

export default function SafeImage({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
  aspectRatio = '',
  loading = 'lazy'
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#EBE5DA]/50 ${aspectRatio} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#EBE5DA]/60 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#5B132B] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt || 'Ahmed Facility Services'}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}

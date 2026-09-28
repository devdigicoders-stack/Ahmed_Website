import React, { useState, useEffect } from 'react';

export default function SafeImage({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85',
  aspectRatio = '',
  loading = 'lazy',
  objectFit = 'object-cover',
  objectPosition = 'object-center'
}) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (src) {
      setImgSrc(src);
      setHasError(false);
      setIsLoading(true);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#EBE5DA]/40 w-full h-full ${aspectRatio} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#EBE5DA]/60 animate-pulse flex items-center justify-center z-10">
          <div className="w-7 h-7 border-2 border-[#5B132B] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt || 'Ahmed Facility Services'}
        loading={loading}
        onLoad={() => setIsLoading(false)}
        onError={handleError}
        className={`w-full h-full ${objectFit} ${objectPosition} block transition-all duration-500 ${imgClassName} ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      />
    </div>
  );
}

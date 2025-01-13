import React from 'react';

const DownloadSection = () => {
  return (
    <div className="download-container">
      <a 
        href="https://apps.apple.com/your-app-link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="app-store-button"
      >
        <img 
          src="/images/app-store-badge.png" 
          alt="Download on the App Store" 
          className="app-store-image"
        />
      </a>
    </div>
  );
};

export default DownloadSection;
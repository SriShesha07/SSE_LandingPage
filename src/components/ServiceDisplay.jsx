import './ServiceDisplay.css';

const ServiceDisplay = ({ images, description, title, onImageClick }) => {
  // Smart wrapping: Display ~6 images alongside description (2x3 grid)
  // Remaining images go to full-width grid below
  const imagesAlongside = Math.min(images.length, 6);
  const leftImages = images.slice(0, imagesAlongside);
  const remainingImages = images.slice(imagesAlongside);

  return (
    <div className="service-display-container">
      {title && <h3 className="service-display-title">{title}</h3>}
      
      {/* Main 4-column grid: Images (2 cols) + Description (2 cols) */}
      <div className="service-display-grid">
        {/* Left side: Images in 2-column grid */}
        <div className="images-left">
          {leftImages.map((image, index) => (
            <div 
              key={index} 
              className="image-item"
              onClick={() => onImageClick(image)}
            >
              <img src={image} alt={`${title || 'Service'} ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Right side: Description */}
        <div className="description-right">
          <div className="description-content">
            {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
        </div>
      </div>

      {/* Remaining images in full-width 4-column grid */}
      {remainingImages.length > 0 && (
        <div className="images-full-width">
          {remainingImages.map((image, index) => (
            <div 
              key={index + imagesAlongside} 
              className="image-item"
              onClick={() => onImageClick(image)}
            >
              <img src={image} alt={`${title || 'Service'} ${index + imagesAlongside + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDisplay;

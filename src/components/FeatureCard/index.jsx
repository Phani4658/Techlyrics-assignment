import "./index.css";

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ imageUrl, headingText, shortDescription }) => {
  return (
    <li className="feature-card-container">
      <div className="feature-card">
        <img className="feature-image" src={imageUrl} />
        <h3 className="feature-text">{headingText}</h3>
        <p>{shortDescription}</p>
      </div>
    </li>
  );
};

export default FeatureCard;

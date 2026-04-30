//vigan demiri 132831
const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} style={{width: '150px'}} />
            <h3>{photo.title}</h3>
            {/* Kushtet ekzakte nga image.png */}
            {photo.saved === true && <p>✅ Saved</p>}
            {photo.category === "Architecture" && <p>🏛️ Architecture</p>}
        </div>
    );
};

export default PhotoCard;
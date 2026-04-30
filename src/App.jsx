import { useState, useMemo } from 'react';
import RegisterPhoto from './components/RegisterPhoto';
import PhotoCard from './components/PhotoCard';

function App() {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (photo) => {
    setPhotos([...photos, { ...photo, id: Date.now() }]);
  };

  const photoCount = useMemo(() => {
    return photos.length;
  }, [photos]);

  return (
      <div>
        <h1>Total Photos: {photoCount}</h1>
        <RegisterPhoto addPhoto={addPhoto} />
        <div className="list">
          {photos.map(p => (
              <PhotoCard key={p.id} photo={p} />
          ))}
        </div>
      </div>
  );
}

export default App;
import { useState } from 'react';

const RegisterPhoto = ({ addPhoto }) => {
    const [formData, setFormData] = useState({
        title: '',
        albumId: '',
        url: '',
        saved: false,
        category: 'Nature'
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            setError('The title field must not be empty.');
            return;
        }
        if (Number(formData.albumId) <= 0) {
            setError('The albumId must be a positive number greater than zero.');
            return;
        }

        addPhoto({ ...formData, albumId: Number(formData.albumId) });
        setFormData({ title: '', albumId: '', url: '', saved: false, category: 'Nature' });
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
            <input type="number" placeholder="Album ID" value={formData.albumId} onChange={(e) => setFormData({...formData, albumId: e.target.value})} />
            <input type="text" placeholder="URL" value={formData.url} onChange={(e) => setFormData({...formData, url: e.target.value})} />
            <input type="checkbox" checked={formData.saved} onChange={(e) => setFormData({...formData, saved: e.target.checked})} /> Saved
            <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                <option value="Nature">Nature</option>
                <option value="Architecture">Architecture</option>
                <option value="People">People</option>
            </select>
            <button type="submit">Register</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    );
};

export default RegisterPhoto;
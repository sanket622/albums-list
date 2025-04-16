import { useState, useEffect } from 'react';

export default function AlbumForm({ onSubmit, initialData, editMode, cancelEdit }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editMode && initialData) {
      setTitle(initialData.title);
    }
  }, [initialData, editMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, userId: 1, id: initialData?.id });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="album-form">
      <input
        type="text"
        placeholder="Album Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">{editMode ? 'Update' : 'Add'} Album</button>
      {editMode && <button type="button" onClick={cancelEdit}>Cancel</button>}
    </form>
  );
}

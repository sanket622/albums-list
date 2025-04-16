import { useEffect, useState } from 'react';
import {
  getAlbums,
  addAlbum,
  updateAlbum,
  deleteAlbum
} from './api';
import AlbumList from './components/AlbumList';
import AlbumForm from './components/AlbumForm';

function App() {
  const [albums, setAlbums] = useState([]);
  const [editAlbum, setEditAlbum] = useState(null);

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  const handleAdd = async (album) => {
    const newAlbum = await addAlbum(album);
    setAlbums([newAlbum, ...albums]);
  };

  const handleUpdate = async (updated) => {
    const result = await updateAlbum(updated.id, updated);
    setAlbums(
      albums.map((album) =>
        album.id === result.id ? result : album
      )
    );
    setEditAlbum(null);
  };

  const handleDelete = async (id) => {
    await deleteAlbum(id);
    setAlbums(albums.filter((album) => album.id !== id));
  };

  const handleEdit = (album) => {
    setEditAlbum(album);
  };

  const cancelEdit = () => setEditAlbum(null);

  return (
    <div className="App">
      <h1>Album Manager</h1>
      <AlbumForm
        onSubmit={editAlbum ? handleUpdate : handleAdd}
        initialData={editAlbum}
        editMode={!!editAlbum}
        cancelEdit={cancelEdit}
      />
      <AlbumList albums={albums} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;

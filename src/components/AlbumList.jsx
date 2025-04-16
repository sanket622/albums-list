// AlbumList.jsx
import './AlbumList.css';

export default function AlbumList({ albums, onDelete, onEdit }) {
  return (
    <ul className="album-list">
      {albums.map((album) => (
        <li key={album.id} className="album-item">
          <span className="album-title">{album.title}</span>
          <div className="button-group">
            <button onClick={() => onEdit(album)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(album.id)} className="delete-btn">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

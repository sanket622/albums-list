export default function AlbumList({ albums, onDelete, onEdit }) {
    return (
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <button onClick={() => onEdit(album)}>Edit</button>
            <button onClick={() => onDelete(album.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
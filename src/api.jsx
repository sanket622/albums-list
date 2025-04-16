const BASE_URL = 'https://jsonplaceholder.typicode.com/albums';

export const getAlbums = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addAlbum = async (album) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(album),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return res.json();
};

export const updateAlbum = async (id, album) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(album),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return res.json();
};

export const deleteAlbum = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};

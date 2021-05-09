import EditPhotos from './EditPhotos';
const { Fragment, useState, useEffect } = require("react")

const PhotosList = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch("http://localhost:5000/photos");
      //parse the data
      const jsonData = await response.json();
      setPhotos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getPhotos();
  }, []);

  const deletePhoto = async (id) => {
    try {
      const deletePhoto = await fetch(`http://localhost:5000/photos/${id}`, {
        method: "DELETE"
      });
      //returns all photos except one with id to be deleted
      setPhotos(photos.filter(photo => photo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <table className="table text-center mt-5">
        <thead>
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Photo</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {photos.map(photo => (
           <tr key={photo.id}>
            <td>{photo.title}</td>
            <td><a href={photo.url} target="_blank">Image link here</a></td>
            <td><img src={photo.url}></img></td>
            <td>
              <EditPhotos 
                photo={photo}
              />
            </td>
            <td><button className="btn btn-danger" onClick={() => deletePhoto(photo.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default PhotosList

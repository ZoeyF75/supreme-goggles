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

  const deletePhoto = async(id) => {
    console.log(id);
    try {
      console.log(id);
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
      <table class="table text-center mt-5">
        <tr>
          <th>Title</th>
          <th>link</th>
          <th>Photo</th>
        </tr>
       
        {photos.map(photo => (
           <tr key={photo.id}>
            <td>{photo.title}</td>
            <td><a>{photo.url}</a></td>
            <td><img src={photo.url}></img></td>
            <td>Edit</td>
            <button className="btn btn-danger" onClick={() => deletePhoto(photo.id)}>Delete</button>
          </tr>
        ))}
      </table>
    </Fragment>
  )
}

export default PhotosList

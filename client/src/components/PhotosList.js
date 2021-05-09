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

  return (
    <Fragment>
      <table class="table text-center mt-5">
        <tr>
          <th>Title</th>
          <th>link</th>
          <th>Photo</th>
        </tr>
       
        {photos.map(photo => (
           <tr>
            <td>{photo.title}</td>
            <td><a>{photo.url}</a></td>
            <td><img src={photo.url}></img></td>
          </tr>
        ))}
      </table>
    </Fragment>
  )
}

export default PhotosList

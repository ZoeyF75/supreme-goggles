import { Fragment, useState } from "react"

const EditPhotos = ( { photo }) => {
  const [title, setTitle] = useState(photo.title);
  const [url, setURL] = useState(photo.url);

  const updateData = async e => {
    e.preventDefault();
    try {
      const body = { title, url };
      const response = await fetch(`http://localhost:5000/photos/${photo.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  const set = () => {
    setTitle(photo.title);
    setURL(photo.url);
  }

  return (
    <Fragment>
      <button 
        type="button" 
        className="btn btn-warning"   
        data-toggle="modal" 
        data-target={`#id${photo.id}`}>
        Edit
      </button>

      <div className="modal" id={`id${photo.id}`} onClick={() => set()}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">
                <input  
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <small className="form-text text-muted">Rename picture here</small>
              </h4>
              <button type="button" className="close" onClick={() => set()} data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input 
                type="text"
                value={url} 
                onChange={e => setURL(e.target.value)}
                className="form-control"
              />
              <small className="form-text text-muted">Change image adress here</small>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-warning" 
                data-dismiss="modal"
                onClick={(e) => updateData(e)}
              >
                Edit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditPhotos

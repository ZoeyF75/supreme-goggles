const { Fragment, useState } = require("react")

const Input = () => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async e => {
   //prevent refresh
    e.preventDefault();
    if (title && url) {
      try {
        const body = { title, url }
        const response = await fetch("http://localhost:5000/photos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">My Photo Repository</h1>
      {error ? <div class="alert alert-danger" role="alert">Please ensure you have filled out the required fields!</div> : null }
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <input 
          type="text" 
          className="form-control" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter the title of the photo"
        />
        <input 
          type="text" 
          className="form-control" 
          value={url} 
          onChange={e => setURL(e.target.value)}
          placeholder="Enter the image address"
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default Input;

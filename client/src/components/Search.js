const { Fragment, useState } = require("react")

const Search = () => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("http:sample");

  const onSubmit = async e => {
   //prevent refresh
    e.preventDefault();
    try {
      const body = { title, url }
      const response = await fetch("http://localhost:5000/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">My Photo Repository</h1>
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <input 
          type="text" 
          className="form-control" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default Search

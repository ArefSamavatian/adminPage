import { useState } from 'react';

function MainCategoryForm() {


  const [height, setHeight] = useState(50);


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 >Add New Category</h1>
      <div >
        <label htmlFor="name" >Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div >
        <label htmlFor="slug" >Slug</label>
        <input type="text" id="slug" name="slug" required />
      </div>
      <div>
        <div
          style={{
            height: height + "px",
            border: "1px solid black",
            resize: "vertical",
            overflow: "auto",
            width: "200px"
          }}
          onDrag={(event) => {
            setHeight(event.clientY);
          }}
        >

          <input id="sortDesc" name="sortDesc" required />
        </div>
        <label htmlFor="sortDesc" >Sort Description</label>
      </div>
      <div>
        <div
          style={{
            height: height + "px",
            border: "1px solid black",
            resize: "vertical",
            overflow: "auto",
            width: "200px"
          }}
          onDrag={(event) => {
            setHeight(event.clientY);
          }}
        >

          <input id="fullDesc" name="fullDesc" />
         
        </div>
        <label htmlFor="fullDesc" >Full Description</label>
      </div>
      <div >
        <label htmlFor="tags" >Product Tags</label>
        <input type="text" id="tags" name="tags" />
      </div>
      <button type="submit" c>Submit</button>

      <input type="text" />




    </form>

  );
}

export default MainCategoryForm;
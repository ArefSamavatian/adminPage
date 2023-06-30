import { useState } from 'react';
import classes from './MainCategoryFrom.module.css'

function MainCategoryForm() {


  const [height, setHeight] = useState(50);


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <h1 className='title'>اضافه کردن دسته بندی</h1>
      <div >
        <label className='name' htmlFor="name" >نام</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className='inputContainer' >
        <label className='label slugLabel' htmlFor="slug" >اسلاگ</label>
        <div>https://example.com/category/</div>
        <input className='input inputLabel ' type="text" id="slug" name="slug" required />
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

          className='inputContainer'
        >

          <input id="sortDesc" name="sortDesc" required />
        </div>
        <label htmlFor="sortDesc" >توضیحات</label>
      </div>

      <div >
        {/* parent  categorty selecto */}
      </div>
      <div>
        {/* put image */}
      </div>
      <div>
        {/* search engine optimize */}
      </div>
      <button type="submit">Submit</button>

      <input type="text" />




    </form>

  );
}

export default MainCategoryForm;
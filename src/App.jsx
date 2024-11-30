import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"

function App() {
  const [bookmarks,setBookmarks] = useState ([])
  const handleBookMark =(b)=>{
   const newBookMarks = [...bookmarks,b];
   setBookmarks(newBookMarks);
  }

  return (
    <>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs 
      handleBookMark={handleBookMark }
      ></Blogs>
      <Bookmarks
       bookmarks={bookmarks}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogsdata,setBlogsdata] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogsdata(data))
    },[])
    return (
        <div className="w-2/3">
            <h1>Blogs here {blogsdata.length} </h1>
            {
                blogsdata.map((blog,idx)=><Blog
                 key={idx}
                blog = {blog}>

                </Blog>)
            }
        </div>
    );
};

export default Blogs;
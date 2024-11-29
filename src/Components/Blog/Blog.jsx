
const Blog = ({blog}) => {
    const {cover,title,id,author_img,author,reading_time,hashtags,posted_date} = blog;
    console.log(blog);
    return (
        <div>
            <img src= {cover} alt="" />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl "> {author} </h3>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min Read </span>
                </div>
            </div>
            <h3 className="text-4xl"> {title} </h3>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href=""> #{hash} </a> </span> )
                }
            </p>
        </div>
    );
};

export default Blog;
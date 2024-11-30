import React from 'react';

const Bookmark = ({bookmark}) => {
    const {cover,title,id,author_img,author,reading_time,hashtags,posted_date} = bookmark;
    return (
        <div className='bg-orange-300 my-4 p-4 rounded-lg'>
            <h1 className='text-2xl '>bookmarks title {title} </h1>
        </div>
    );
};

export default Bookmark;
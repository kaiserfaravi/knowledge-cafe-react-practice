import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='w-1/3 bg-gray-400 ml-4'>
            <h3 className='m-auto p-4 m-4'>Bookmarks Here {bookmarks.length} </h3>
            {
                bookmarks.map(bookmark=> <Bookmark bookmark ={bookmark} key={bookmark.id} ></Bookmark> )
            }
        </div>
    );
};

export default Bookmarks;
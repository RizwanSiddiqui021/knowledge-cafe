import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className='text-center text-2xl font-bold text-[#6047EC] bg-[#6047EC1A] my-10
                px-12 py-5 border border-[#6047EC] rounded-lg'>Spent Time on Read: {readingTime}</h3>
            </div>

            <div className=' bg-[#1111110D] p-4 rounded-lg'>
            <h2 className='text-2xl font-bold pb-5'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;
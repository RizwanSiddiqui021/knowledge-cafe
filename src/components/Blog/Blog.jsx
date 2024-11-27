import PropTypes from 'prop-types';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='my-10'>
            <img className=' w-[850px] h-[450px] rounded-lg mb-6' src={cover} alt={`cover picture for ${title}`} />
            <div className='flex justify-between items-start'>
                <div className='flex items-start gap-6 mb-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-sm text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-[#11111199]'>{reading_time} min read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='text-lg text-[#11111199]'><BsFillBookmarkCheckFill /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-1">{title}</h2>
            <p className='text-indigo-800 mb-4'>
                {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button className='text-[#6047EC] px-5 py-2 bg-[#6047EC1A] border border-[#6047EC] rounded-lg font-bold'
            onClick={()=>handleMarkAsRead(id, reading_time)}>Mark As Read</button>
            <hr className='my-12' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
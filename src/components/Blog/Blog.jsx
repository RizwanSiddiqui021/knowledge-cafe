import PropTypes from 'prop-types';
import { BsBookmarkPlusFill } from "react-icons/bs";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-[850px] h-[450px] rounded-lg mb-6' src={cover} alt={`cover picture for ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='text-lg'><BsBookmarkPlusFill /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
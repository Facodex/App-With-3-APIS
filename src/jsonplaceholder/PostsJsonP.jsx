import React, { useState }from 'react'
import { useFetchPosts } from '../hooks/useFetchPosts';
import CardPost from './CardPost';
import SpinnerLittle from '../components/SpinnerLittle';
import {AiOutlineArrowDown} from 'react-icons/ai';
import GoTop from '../components/GoTop';

export const PostsJsonP = () => {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3 className='fw-light mb-3'>Request 100 posts to API...</h3>
            {count <= 0 && <button className='btn btn-primary' onClick={() => useFetchPosts(setPosts, setLoading, setCount)}>Consulta Aqui</button>}

            <div className='d-flex flex-wrap justify-content-around'>
                {posts?.slice(0, count).map((post) => <CardPost key={post.id} postItem={post} />)}
            </div>
            {(count >= 9 && count <= 99) && <button className='btn btn-primary' onClick={() => setCount(count + 10)}>Ver mas <AiOutlineArrowDown /> </button>}
            {loading && <SpinnerLittle />}
            {count > 99 && <GoTop />}
        </div>
    )
}

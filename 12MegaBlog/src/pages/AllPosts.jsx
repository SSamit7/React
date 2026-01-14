import React ,{ useState, useEffect} from 'react'
import appwriteServices from '../appwrite/config'
import { Container , PostCard } from '../components'

function AllPosts() {
    const [posts , setPosts] = useState([])
    useEffect(() => {
    
    }, [])
    appwriteServices.getPosts([]).then((posts)=>{
        if (posts) {
         setPosts(posts.documents)   
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
           <div className='flex flex-warp'>
            {posts.map((post) =>(
                <div key={post.$id} className='p-4 w-1/4'>
                    <PostCard post ={post}/>
                </div>
            )
        )}
           </div>
        </Container>
        </div>
  )
}

export default AllPosts




//  {posts.map((post)=>
//             (
//                 <PostCard  key={posts.$id} post={post}/>
//             )
//             )}
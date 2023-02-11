import { MyBlogContext } from '../context/myBlogContext'
//import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'
import { useContext } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'


const styles = {
   postList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
   
   container: `max-w-7xl flex-1`,
   
   main: `flex justify-center p-20`,

   wrapper: `mx-auto`,
 }
export default function Home() {
  const { posts, users } = useContext(MyBlogContext);


  console.log(posts, "testing" )

  return (

    <div className={styles.wrapper}>
   
    <Navbar/>
    <Banner />
      <div className={styles.main}>
      <div className={styles.container}>
       <div className={styles.postsList}>
       {posts.map(post => (
        <PostCard post={post} key={post.id} />
        
       ))}
          </div>
          </div>
         </div>   
         <Footer />  
       </div>
    
      )
    }
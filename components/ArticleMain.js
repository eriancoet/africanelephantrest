import Image from "next/image";
import Logo from '../static/logo.jpg';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { BiBookmarks } from 'react-icons/bi';
import { HiOutlineLink } from 'react-icons/hi';
import { GrLinkedin } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import Banner from '../static/banner.png'

const styles = {
  wrapper: 'flex items-center justify-center flex-[3] boder-1 boder-r',
  content: 'h-screen w-full p-[2rem]',
  postHeaderContainer: `flex justify-between itmes-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[1.2rem] text-[#787878]`,
  listButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  image: `object-cover`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,



}
const ArticleMain = ({post, author}) => {
  console.log(post, author, 'SMILE')
  console.log(post, "testing auth")
  
  return (
   <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.postHeaderContainer}>
        <div className={styles.authorContainer}>
       
          <div classnName={styles.column}>
            <div>{author?.data?.name}</div>
          </div>
        </div>
        <div className={styles.socials}>
        <IoLogoTwitter/>
        <FaFacebook/>
        <GrLinkedin/>
        <HiOutlineLink/>
        <div className={styles.space}/>
        <BiBookmarks/>
        <FiMoreHorizontal/>

        </div>
      </div>
      <div className={styles.articleMainContainer}>
        <div className={styles.bannerContainer}>
        <Image 
          className={styles.image}
          src={`http://res.cloudinary.com/demo/image/fetch/${post.data?.bannerImage}`}
          height={100}
          width={300}
          />
        </div>
        <h1 className={styles.title}>{post?.data?.title}</h1>

        <h4 className={styles.subtitle}></h4>
          <div>
          
            <div>
            <span> {post.data?.postLength} min read </span> 
            </div>

             <div className={styles.subtitle}>{post?.data?.brief}</div>
    
         
        <div className={styles.articleText}>
       {post?.data?.body}
        </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default ArticleMain;
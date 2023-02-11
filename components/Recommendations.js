import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import Logo from '../static/logo.jpg'

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: 'flex itmes-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full `,
  searchInput: `border-none outline-none bg-none w-full bg-[#FFFF] text-text`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorname: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorAction: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm m-[.3rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full  overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 itmes-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
  articleContentWrapper: `flex itmes-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-4`
  
}

const Recommendations = ({ author }) => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.accentedButton}>About The African Elephant Restaurant</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder='Search'
          type='text'
        />
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={Logo}
            width={100}
            hieght={100}
          />
        </div>
        <div className={styles.authorname}>The African Elephant</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>
            Follow</button>
          <button className={styles.actionButton}><MdMarkEmailUnread /></button>
        </div>
      </div>
      
      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More Information</div>
        <div className={styles.articleContainer}> 
        {recommendedPosts.map(post => ( 
        <div className={styles.articleContentWrapper}>
          <div className={styles.articleContent}>
          <div className={styles.recommendationAuthorContainer}>
          <div className={styles.recommendationAuthorProfileImageContainer}>
          <Image src={post.author.image}  height={100} width={100} />
            </div>
            <div className={styles.recommendationAuthorName}>
              {post.author.name}
            </div>
            </div>
            <div className={styles.recommendationTitle}>{post.title}</div>
          
             </div>
          <div className={styles.recommendationThumbnailContainer}> 
       
          </div>
        </div>
        ))} 
      </div>
     </div>
    </div>
  )
}


export default Recommendations

const recommendedPosts = [

  {
    title: 'The Food Experience',
    image: Logo,
    author: {
      name: 'The African Elephant',
      image: Logo
    }
  },
  {
    title: 'Our specialities',
    image: Logo,
    author: {
      name: 'The African Elephant',
      image: Logo
    }
  },
]

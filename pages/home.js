import Navbar from '../components/Navbar'
import Image from 'next/image';
import author from '../static/author.jpg'
import jsLogo from '../static/jsLogo.jpg'
import Specialities from '../components/Special'
import Footer from '../components/Footer'

const styles = {
  
   postList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
   
   container: `max-w-7xl flex-1`,
   
   main: `flex justify-center p-20`,
   
   wrapper: `mx-auto`,
   content: `flex items-center justify-center flex-[3] boder-1 boder-r w-full p-[2rem]`,

   title: 'font-bold text-3xl',
   paragraph: `flex items-center justify-center p-[.5rem]`,
   image: `flex items-center justify-center w-full`,
   sideImage: `flex items-right justify-center p-[2rem] w-[65%] rounded-full`

 }
export default function About() {
     return (

    <div className={styles.wrapper}>
   
    <Navbar />
    <div>
    <Image
           className={styles.image}
           src={author}
           />
    </div>
  
    <div class="grid grid-cols-2 gap-1">

  <div class="m-8">
  <div className={styles.content}>
    <div className={styles.title}>Welcome to the African Elephant Restaurant</div>
    </div>
    <div className={styles.paragraph}>
    The African Elephant Restaurant in Sabie is an experience like no other. Imagine dining among the majestic giants of the African savannah, as you enjoy a delicious meal surrounded by the natural beauty of the region. The restaurant is situated in the heart of Sabie, surrounded by lush greenery and the sounds of nature. The menu is an eclectic mix of traditional African and international cuisine, with a focus on locally sourced ingredients. The restaurant is also dedicated to promoting conservation and education about elephants, with proceeds from the restaurant going towards elephant conservation efforts in the area. With its unique atmosphere, delicious food, and dedication to conservation, the African Elephant Restaurant is the perfect destination for anyone looking for a truly memorable dining experience.
    </div>
    </div>
     <div class="m-8">
     <Image 
      src={jsLogo}
      className={styles.sideImage}
      width={300}
      height={100}
      /> 
    </div>
  </div>
 <div>
 <Specialities/>
 </div>
 <Footer />
  </div>
      )
    }
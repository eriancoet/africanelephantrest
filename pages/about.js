import { MyBlogContext } from '../context/myBlogContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image';
import author from '../static/author.jpg'
import aer from '../static/aer.png'


const styles = {
   postList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
   
   container: `max-w-7xl flex-1`,

   imgTop: `flex items-center justify-center flex-[3]`,

   main: `flex justify-center p-20`,
   
   wrapper: `mx-auto`,
   content: `flex items-center justify-center flex-[3] boder-1 boder-r w-full p-[2rem]`,
   imgTop: `flex items-center justify-center flex-[3]`,

   title: 'font-bold text-3xl',
   paragraph: `flex items-center justify-center p-[.5rem]`,
   image: `flex items-center justify-center w-full`
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
    <div className={styles.imgTop}>
    <Image
           class={"scale-75 content-center"}
           src={aer}
           />
    </div>
    <div className={styles.content}>
  
    <div className={styles.title}>
    <div class="text-center">
    About the African Elephant Restaurant
    </div>
    </div>

    </div>
    <div className={styles.paragraph}>

    <div class="max-w-md text-center text-lg">
    At the African Elephant Restaurant, we believe that dining should be a memorable experience, 
    and that's why we take great pride in serving good food and providing friendly service. Our menu 
    features a wide range of dishes, including both traditional South African fare and international favorites. 
    Whether you're in the mood for something familiar or want to try something new, we have something to suit every taste. 
    Come visit us and discover why we're a local favorite for delicious food and warm hospitality.
    </div>

   
    </div>
    <Footer />
     </div>
      )
    }
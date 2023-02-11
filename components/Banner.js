import Image from 'next/image'
import Logo from '../static/banner.png'
import author from '../static/author.jpg'
const styles = {
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  content: `max-w-7xl flex-1 flex items-center`,
  wrapper: `h-max-[10rem] flex itmes-center justify-center bg-[#3399ff] border-y border-black`,
  slogan: 'text-[1.7rem] font-[Brush Script MT]',
  image: `flex items-center justify-center w-full`
}

const Banner = () => {
  return (
  

    <Image
           className={styles.image}
           src={author}
           />
    

    
      
    
    
  )
}

export default Banner
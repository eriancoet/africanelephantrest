import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../static/logo.jpg';
import {MyBlogContext} from '../context/myBlogContext'
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import PostModal from './PostModal';

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translated(-50%, -50%)',

    padding: '0', 
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgb(10, 11, 13, 0.75)',
  }
  
}
const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#ffe6b3]', 
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: 'flex items-center flex-start justify-between gap-60',
  logo: 'cursor-pointer h=[30] w=[67]',
  bannerNav: 'flex cursor-pointer items-center space-x-5 justify-end ',
  PostModel: 'justify-center items-center',
  navbar: `flex justify-center gap-10 p-5`,
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
      document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 20;
          if (isTop !== true) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      });
  }, []);

  const router = useRouter()
 const { loggedInUser, handleUserAuth} = useContext(MyBlogContext)
  
 return (
      <nav className={scrolled ? 'navbar fixed' : 'navbar'}>
          <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 65px;
  
          z-index: 99;
          overflow: hidden;
        }
      `}</style>
            <div className={styles.wrapper}>

<div className={styles.content}>
 
  <div className={styles.logoContainer}>
  <Image
    className={styles.logo}
    src={Logo}
    height={30}
    width={67}
    />
    </div>
    {loggedInUser ?
    ( <div className={styles.bannerNav}>
      <Link href={'/home'}>
      <div className={active === 'home' ? 'active' : ''}
       onClick={() => setActive('home')}>
      Home
      </div>
      </Link>   
      <Link href={'/about'}>
      <div className={active === 'about' ? 'active' : ''}
      onClick={() => setActive('about')}>
        About Us
        </div>
      </Link>
     <Link href="/direction">
     <div className={active === 'direction' ? 'active' : ''}
     onClick={() => setActive('direction')}>
      Directions
      </div>
     </Link>
   

      <Link href={'/'}>
      <div className={active === 'blog' ? 'active' : ''}
      onClick={() => setActive('blog')}>
      Blog
      </div>
      </Link>
      <Link href={'/?addNew=1'}>
      <div className={active === 'write' ? 'active' : ''}
       onClick={() => setActive('write')}>Write</div>
      </Link>
      <Link href={'/gallery'}>
      <div className={active === 'gallery' ? 'active' : ''}onClick={() => setActive('gallery')}>  
        Gallery
        </div>
        </Link>
    </div>)
    : (
     ( <div className={styles.bannerNav}>
         <Link href={'/home'}>
      <div  className={active === 'home' ? 'active' : ''}
       onClick={() => setActive('home')}>
        Home
        </div>
      </Link>   
      <Link href={'/about'}>
      <div className={active === 'about' ? 'active' : ''}
       onClick={() => setActive('about')}>
        About Us
        </div>
      </Link>
     
       <Link href='/direction'> 
       <div className={active === 'directions' ? 'active' : ''}
       onClick={() => setActive('directions')}>Directions</div>
       </Link>
       <Link href={'/'}>
      <div className={active === 'blog' ? 'active' : ''}
       onClick={() => setActive('blog')}>Blog</div>
      </Link>
      
     
       <div onClick={handleUserAuth} className={active === 'signin' ? 'active' : ''}
       >Sign in</div>

      <Link href={'/gallery'}>
      <div className={active === 'gallery' ? 'active' : ''}
       onClick={() => setActive('gallery')}>Gallery</div>
       </Link>
   
     </div>)
    )
    }
  </div>
  
  <Modal className="flex flex-col items-center justify-center  w-[60%]"
   isOpen={Boolean(router.query.addNew)}
   onRequestClose={() => router.push('/')}
   style={customStyles}
   >
     

      <PostModal />
   
     
  </Modal>
    
</div>
<style jsx>
        {`
          .active {
            text-decoration: underline
          }

        `}
      </style>

      </nav>
  );
}

export default Navbar;

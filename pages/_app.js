import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { MyBlogProvider } from '../context/myBlogContext'



function MyApp({ Component, pageProps }) {
  return (
    <MyBlogProvider>
    <Component {...pageProps} />
    </MyBlogProvider>
  )
}

export default MyApp

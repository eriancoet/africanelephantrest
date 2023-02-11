import Navbar from '../components/Navbar';
import Image from 'next/image';
import Banner from '../components/Banner'
import mapImg from '../static/mapImg.png'
import GoogleMap from './googleMap.js'
import Footer from '../components/Footer'

const styles = {
     title: 'font-bold text-3xl',
}
export default function Direction() {
  console.log(GoogleMap)
 return (
  <div>
     <Navbar />
     <Banner />
            <div class="flex justify-center pt-6 m-8">
           <div class="grid grid-cols-4 gap-6 flex justify-center">
           <div class="col-span-1"> 
  
    </div>
           <div class="col-span-1 m-8"> 
           <div className={styles.title}>The African Elephant</div>
       <div class="text-2xl">Phone: 013 764 1909</div>
       <div class="text-2xl">Address: 8 Trichardt Str, Sabie, Mpumalanga</div>
    </div>
  <div class="scale-150 m-8"> 

  <GoogleMap />

</div>
</div>
</div>
<Footer />
</div>
     
  );
}

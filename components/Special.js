import Image from 'next/image';
import potjie from '../static/potjie.jpg'
import tomahawk from '../static/tomahawk.jpg'
import eisbein from '../static/eisbein.jpg'
import ribs from '../static/ribs.jpg'

const styles = {
img: `w-[15rem] rounded-md`,
title: `flex items-center justify-center font-bold text-3xl`
}
export default function Special() {

    return (

    <div class="bg-[#000000]">
        <div col-span-2 m-8 text-2xl>
           
            <div className={styles.title}>
            <div class="m-6">
                <h1 class="text-[#fff7e6]">Specialities</h1>
                
                </div>
            </div>
            </div>

     
      <div class="m=8 bg-[#fff]">&nbsp;  </div>
      <div class="grid grid-cols-3 gap-4 bg-[#fff7e6]">

      <div class="m-8 drop-shadow-lg">  
    
         <Image 
            className={styles.img}
            src={potjie}
            w={30}
            h={40}
            />
            </div>
      <div class="col-span-2 ..."> <div class="col-span-2 my-3">
            
            <div class='text-xl my-4'>
            Oxtail Potjie, served with Rice, Pap, Mash and Vegetables
            </div>
            
            <div class="text-lg pr-4">
                Indulge in the authentic flavors of South Africa with our Oxtail Potjie! Slow-cooked to perfection over 
            an open fire, the oxtail is infused with a blend of spices and vegetables, resulting in a rich and satisfying stew. 
            Served with fluffy rice, traditional pap, creamy mash, and perfectly cooked vegetables, every bite is a 
            celebration of South African cuisine. Perfect for gatherings with friends and family, this complete meal is 
            sure to become a new favorite. Experience the comfort and warmth of a traditional South African home-cooked 
            meal with our Oxtail Potjie.
            </div> 
            </div></div>
    </div> 

    <div class="m=8 bg-[#fff]">&nbsp;  </div>
      <div class="grid grid-cols-3 gap-4 bg-[#fff7e6]">

      <div class="m-8 drop-shadow-lg">  
    
         <Image 
            className={styles.img}
            src={tomahawk}
            w={30}
            h={40}
            />
            </div>
      <div class="col-span-2 ..."> <div class="col-span-2 my-3">
            
            <div class='text-xl my-4'>
            Tomahawk (700g) Steak served with Chips
            </div>
            
            <div class="text-lg pr-4">
            Satisfy your carnivorous cravings with our 700 gram Tomahawk Steak! This massive cut of meat is 
            expertly seasoned and grilled to perfection, resulting in a juicy and tender steak that will make 
            your taste buds dance with delight. Served with crispy and golden chips, this hearty meal is perfect 
            for any special occasion or celebration. Whether you're looking for a romantic dinner for two or a feast 
            for a large group of friends, our 700 gram Tomahawk Steak is sure to impress. 
            Don't miss out on this incredible dish, book your table today!
            </div> 
            </div></div>
    </div> 
    <div class="m=8 bg-[#fff]">&nbsp;  </div>
      <div class="grid grid-cols-3 gap-4 bg-[#fff7e6]">

      <div class="m-8 drop-shadow-lg">  
    
         <Image 
            className={styles.img}
            src={ribs}
            w={30}
            h={40}
            />
            </div>
      <div class="col-span-2 ..."> <div class="col-span-2 my-3">
            
            <div class='text-xl my-4'>
            Rack of Ribs served with Chips 
            </div>
            
            <div class="text-lg pr-4">
            Satisfy your cravings with our succulent and mouth-watering ribs! Each 1 kg serving is slow-cooked to 
            perfection and coated with a secret blend of spices and sauces, making it the perfect dish for any occasion. 
            Whether you're looking for a hearty meal or want to share a delicious appetizer with friends, our ribs are 
            sure to impress. So come on down to our restaurant and treat yourself to a plate of the best ribs in town. 
            Order now and experience the unforgettable flavor of our signature ribs! #RibsToRemember
            </div> 
            </div></div>
    </div> 
    <div class="m=8 bg-[#fff]">&nbsp;  </div>
      <div class="grid grid-cols-3 gap-4 bg-[#fff7e6]">

      <div class="m-8 drop-shadow-lg">  
    
         <Image 
            className={styles.img}
            src={eisbein}
            w={30}
            h={40}
            />
            </div>
      <div class="col-span-2"> <div class="col-span-2 my-3">
            
            <div class='text-xl my-4'>
           Eisbein served with Chips, Mash or Pap
            </div>
            
            <div class="text-lg pr-4">
            Bring the flavors of South Africa to your table with our Eisbein, cooked the traditional way! 
            This succulent pork knuckle is slow-cooked until tender and infused with the flavors of spices and herbs. 
             Whether you're looking for a comforting meal for a cold winter night or a feast for a
             large gathering, our Eisbein is the perfect choice. Don't miss out on this authentic and delicious dish, 
             book your table today!
            </div> 
          </div>
        </div>

        
    </div> 
</div>


    )
}
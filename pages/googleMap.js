import React from 'react'
import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import { API_KEY } from "../constant";

const styles = {
    map: `h-[100%] w-[auto]`
}
    function GoogleMap() {
        const googlemap = useRef(null);
       
        useEffect(() => {
          const loader = new Loader({
            apiKey: API_KEY,
            version: 'weekly',
          });
          let map;
          loader.load().then(() => {
            const google = window.google;
            map = new google.maps.Map(googlemap.current, {
              center: {lat: -25.1001, lng: 30.7794},
              zoom: 18,
            });
          });
        });
        return (
          <div className={styles.map} ref={googlemap} />
        
        );
      }
      export default GoogleMap;

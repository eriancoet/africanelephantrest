import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryContainer = styled.div`
  .image-gallery-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-gallery-image {
    max-width: 100%;
    max-height: 90vh;
  }

  .image-gallery-thumbnail-container {
    display: flex;
    justify-content: center;

    .image-gallery-thumbnail {
      width: 70px;
      height: 70px;
      margin: 0 10px;
      object-fit: cover;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
    }

    .image-gallery-thumbnail.active {
      border: 2px solid #333;
    }
  }
`;

const images = [  {    original: "/static/aer.png",    thumbnail: "/static/aer.png"  },  {    original: "/static/potjie.jpg",    thumbnail: "/static/potjie.jpg"  },  {    original: "/static/eisbein.jpg",    thumbnail: "/static/eisbein.jpg"  },  {    original: "/static/ribs.jpg",    thumbnail: "/static/ribs.jpg"  },  {    original: "/static/tomahawk.jpg",    thumbnail: "/static/tomahawk.jpg"  }];

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div class="my-4">

      <GalleryContainer>
      <ImageGallery items={images} />
    </GalleryContainer>
      </div>

    <Footer />
    </div>
 
  );
};

export default Gallery;

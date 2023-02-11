import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Photo = ({ path, title }) => {
    return (
      <div>
        <Image src={`/images/${path}`} alt={title} />
        <p>{title}</p>
      </div>
    );
  };

  export default Photo;
  
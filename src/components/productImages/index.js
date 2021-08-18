import { useState } from 'react';
export default function ProductImages({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className='flex w-full justify-around px-5 py-5'>
      <section className='w-2/6 sm:block hidden px-5'>
        {images.map((image, idx) => {
          return (
            <img
              onClick={() => setCurrentImage(image)}
              src={image.src}
              className='py-5 cursor-pointer'
              key={idx}
              alt={image.alt}
            />
          );
        })}
      </section>
      <section>
        <img className='py-5' src={currentImage.src} alt={currentImage.alt} />
      </section>
    </div>
  );
}

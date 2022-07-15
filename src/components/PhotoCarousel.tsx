import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type PhotoCarouselProps = {
  photos: string[];
};

const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {
  return (
    <Carousel
      thumbWidth={50}
      showIndicators={false}
      showStatus={false}
      infiniteLoop>
      {photos.map((item, index) => (
        <div key={index} style={{ height: '500px', width: '100%' }}>
          <img
            src={item}
            style={{
              objectFit: 'scale-down',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;

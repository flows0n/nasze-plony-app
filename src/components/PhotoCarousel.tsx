import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

type PhotoCarouselProps = {
  photos: string[];
};

const CarouselContainer = styled.div`
  align-self: center;
  width: 90%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const PhotoContainer = styled.div`
  height: 500px;
  @media (max-width: 600px) {
    height: 200px;
  }
  background-color: rgba(0, 0, 0, 0.3);
`;
const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {
  return (
    <CarouselContainer>
      <Carousel
        thumbWidth={50}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        preventMovementUntilSwipeScrollTolerance>
        {photos.map((item, index) => (
          <PhotoContainer key={index}>
            <img
              src={item}
              style={{
                objectFit: 'scale-down',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </PhotoContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default PhotoCarousel;

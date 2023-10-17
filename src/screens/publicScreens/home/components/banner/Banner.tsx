import React from 'react';
import { Image, Carousel } from 'antd';

import BANNER_IMAGE from 'src/assets/images/store-image.jpg';
import BANNER_IMAGE_1 from 'src/assets/images/store-image1.png';
import BANNER_IMAGE_2 from 'src/assets/images/store-image2.jpeg';
import BANNER_IMAGE_3 from 'src/assets/images/store-image3.jpg';

const Banner: React.FC = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image src={BANNER_IMAGE} alt="banner-img" preview={false} />
      </div>
      <div>
        <Image src={BANNER_IMAGE_1} alt="banner-img" preview={false} />
      </div>
      <div>
        <Image src={BANNER_IMAGE_2} alt="banner-img" preview={false} />
      </div>
      <div>
        <Image src={BANNER_IMAGE_3} alt="banner-img" preview={false} />
      </div>
    </Carousel>
  );
};

export default Banner;

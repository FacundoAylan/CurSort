import React from "react";
import {Box, Image} from "@chakra-ui/react";
import Carousel from 'nuka-carousel';

function Carrucel () {
  return(
      <Carousel wrapAround={true} slidesToShow={1} slideWidth={20} autoplay={true} cellAlign='center' adaptiveHeightAnimation={false}>
          <Image src="https://mujeresxmas.com/wp-content/uploads/2021/12/Soy-Henry-y-MujerexMas-1536x864.png.webp"  mt='3%'/>
          <Image src="https://edteam-media.s3.amazonaws.com/courses/original/440bf729-4f2b-49a6-a0c7-7cf65a8bd31b.png" mt='3%'/>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
          <Image src="https://i.ytimg.com/vi/okHy95wG484/maxresdefault.jpg"  mt='3%'/>
      </Carousel>
  )
};

export default Carrucel;
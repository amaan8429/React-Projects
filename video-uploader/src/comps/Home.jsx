import React from 'react';
import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Center,
  Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'60vw'} minH={'100vh'} mt={'8'}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          alignItems={'center'}
          h={'full'}
          p={4}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['20', '200']}></Image>
          <Text letterSpacing={'wildest'} lineHeight={'190%'} p={[0, 16]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            amet magnam laudantium animi assumenda inventore porro dolores est
            id? Voluptas facere, veniam possimus consequatur omnis amet aperiam
            aliquid accusantium sed?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Fix typo and use 'transform'
  textTransform: 'uppercase', // Fix typo and use 'uppercase'
  p: '4',
  size: '3xl',
};

function MyCarousel() {
  return (
    <Carousel
      infiniteLoop
      autoPlay={false}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
      interval={1000}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Hello World
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          It's your day
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Beat the Heat
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Get Up
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Cease the Day
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img5}></Image>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Try Again
        </Heading>
      </Box>
    </Carousel>
  );
}

export default Home;

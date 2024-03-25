import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import bannerImage from "../../../assests/images/banner.jpg";

const Banner = () => {
  return (
    <Box position="relative" height="550px" className="mb-16" >
      <Box
        backgroundImage={`url(${bannerImage})`} // Use the imported image
        backgroundSize="cover"
        height="100%"
        position="relative"
        className="opacity-65"
      >
        {/* Blur effect at the bottom */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="200px" // Adjust the height of the blur effect
          background="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"
          zIndex={1}
        />
      </Box>
      <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex={5}
        flexDirection="column"
      >
        <Text fontSize="6xl" textColor={"gold"} fontWeight="bold" >
          HungryHub
        </Text>
        <Text fontSize="2xl" fontWeight={"bold"} color="white" mt={4}>
          Connecting cravings to your doorstep !
        </Text>
      </Flex>
    </Box>
  );
};

export default Banner;
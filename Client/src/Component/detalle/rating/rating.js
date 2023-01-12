import { Box, Flex } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating2({ number, setNumber, hoverStar, setHoverStar  }) {

  return (
      <Flex maxW="200%" h="50px">
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <Box h='50px' w='5%'fontSize={25} >
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "yellow" }}
                      onClick={() => setNumber(index + 1)}
                    />
                  </Box>
                ) : (
                  <Box h='50px' w='5%' fontSize={25}>
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "yellow" }}
                      onClick={() => setNumber(index + 1)}
                    />
                  </Box>
                )
              )}
          </Flex>
  );
}
export default Rating2;

import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Cards from './Card'

function Home() {
  const videoGames = [1, 2 , 3, 4, 5, 6];
  return (
    <Grid
      templateColumns="repeat(3, 0.3fr)"
      gap={9}
      templateRows="repeat(2, 0.1fr)"
      pt={4}
      pl={20}
      m={0}
    >
      {videoGames.map((value) => {
          return (
            <GridItem>
              <Cards/>
            </GridItem>
          );
        })}

    </Grid>

  )
};

export default Home;
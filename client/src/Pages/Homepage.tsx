import React, { useContext } from 'react';
import {
  Text,
  Box,
  Button,
  Flex,
  Image,
  Grid,
  GridItem,
  Link
} from '@chakra-ui/react';
import logo from './loutrelogo.png';
import Layout from './layout/Layout';
import { myContext } from './Context';

export default function Homepage() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box>
        <Box py={[4, 40]} mx={40}>
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={8}
            ml="10rem"
          >
            <GridItem rowSpan={6} colSpan={2} textAlign="center">
              <Box>
                <Text textStyle="h2" color="simplyAlgo">
                  Apprends un langage <br />
                  informatique gratuitement <br />
                  tout en t'amusant.
                </Text>
                <Button my={10} variant="orange">
                  <Link textStyle="h6" href={ctx ? '/choose' : '/login'}>
                    {' '}
                    C'est parti
                  </Link>
                </Button>
              </Box>
            </GridItem>
            <GridItem colSpan={3} ml="5rem">
              <Box>
                <Flex
                  flexDirection={[
                    'column',
                    'column',
                    'column',
                    'column',
                    'row'
                  ]}
                >
                  <Image
                    src={logo}
                    boxSize="140px"
                    objectFit="cover"
                    alt="Segun Adebayo"
                  />
                  <Box
                    ml={4}
                    border="3px solid orange"
                    borderRadius="10px"
                    p={3}
                    w={190}
                    h={20}
                    textAlign="center"
                  >
                    <Text
                      textStyle="rf-text"
                      fontWeight="700"
                      color="simplyAlgo"
                    >
                      Hello je m'appelle Loudev
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box Box w="100%" py={[4, 20]} bg="#F5F5F5">
          <Box ml="10rem">
            <Text textStyle="h2" color="simplyAlgo">
              La meilleure façon d'apprendre un langage.
            </Text>
            <br />
            <Text textStyle="rf-text" letterSpacing={2} lineHeight={2}>
              Apprendre avec SimplyAlgo, c'est amusant et captivant. <br />
              Nos leçons sont à la fois courtes et efficaces, et on a la preuve
              que ça marche.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

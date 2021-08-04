import React, { useContext } from 'react';
import Layout from '../layout/Layout';
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Container,
  CircularProgress
} from '@chakra-ui/react';
import { myContext } from '../Context';

export default function Choose() {
  const ctx = useContext(myContext);

  return (
    <Layout>
      <Box>
        <Text textStyle="h2" textAlign="center" mt={10}>
          Choisir son cours :
        </Text>
        <Container
          w="17%"
          mt={20}
          border="1px solid #EEEEEE"
          p={12}
          borderRadius="4px"
          boxShadow="6px 6px 23px -15px"
          transition="1s"
          _hover={{ boxShadow: '6px 6px 23px -5px', transition: '1s' }}
        >
          <Link href="js">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              w="150px"
              h="150px"
            />
            <Box textAlign="center">
              <Text mt={5} textStyle="h4">
                JavaScript
              </Text>
              <Text mt={5} textStyle="h6" fontWeight="500">
                10,000 apprenants
              </Text>
              <CircularProgress
                value={ctx.level}
                mt={5}
                h="20px"
                color="pute"
              />
            </Box>
          </Link>
        </Container>
      </Box>
    </Layout>
  );
}

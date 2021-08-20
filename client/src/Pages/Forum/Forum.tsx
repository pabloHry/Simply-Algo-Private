import React, { useContext } from 'react';
import Layout from '../layout/Layout';
import { Box, Text, Flex, Image, Link } from '@chakra-ui/react';
import { Feather, Message } from '../../theme/components/icons';
import logo from '../loutrelogo.png';

export default function Forum() {
  return (
    <Layout>
      <Box height="80ch">
        <Box p={10} ml={20}>
          <Text textStyle="h2">Forum</Text>
        </Box>
        <Flex justifyContent="center">
          <Link href="/javascript">
            <Box bg="white" p={10} border="2px dashed #73493f">
              <Text>JavaScript</Text>
            </Box>
          </Link>
          <Link href="/javascript" ml={20}>
            <Box bg="white" p={10} border="2px dashed #73493f">
              <Text>JavaScript</Text>
            </Box>
          </Link>
          <Link href="/javascript" ml={20}>
            <Box bg="white" p={10} border="2px dashed #73493f">
              <Text>JavaScript</Text>
            </Box>
          </Link>
          <Link href="/javascript" ml={20}>
            <Box bg="white" p={10} border="2px dashed #73493f">
              <Text>JavaScript</Text>
            </Box>
          </Link>
        </Flex>
      </Box>
    </Layout>
  );
}

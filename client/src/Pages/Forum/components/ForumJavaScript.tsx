import React, { useContext } from 'react';
import Layout from '../../layout/Layout';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { Feather, Message, Pencil } from '../../../theme/components/icons';
import logo from '../loutrelogo.png';

export default function ForumJavaScript() {
  return (
    <Layout>
      <Box height="80ch">
        <Box p={7} textAlign="center" bg="#FBFBFB">
          <Text textStyle="h2" fontWeight="700">
            JAVASCRIPT
          </Text>
        </Box>
        <Flex
          border="2px solid #FD9800"
          w="15%"
          mx={20}
          borderRadius="4px"
          mt={10}
          p={2}
        >
          <Text mx={2} textStyle="h6" color="pute" flex="1">
            Nouveau sujet
          </Text>
          <Pencil mt="5px" color="simplyAlgo" mr={3} />
        </Flex>
        <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
          <Flex textStyle="h6">
            <Text flex="1" color="simplyAlgo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
            <Text color="pute">9999 messages</Text>
          </Flex>
        </Box>
        <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
          <Flex textStyle="h6">
            <Text flex="1" color="simplyAlgo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
            <Text color="pute">9999 messages</Text>
          </Flex>
        </Box>
        <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
          <Flex textStyle="h6">
            <Text flex="1" color="simplyAlgo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
            <Text color="pute">9999 messages</Text>
          </Flex>
        </Box>
        <Box p={7} border="2px dashed #000000" mx={20} mt={10} w="80%">
          <Flex textStyle="h6">
            <Text flex="1" color="simplyAlgo">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Text>
            <Text color="pute">9999 messages</Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
}

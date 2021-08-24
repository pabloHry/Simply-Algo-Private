import React, { useContext, useState } from 'react';
import Layout from '../../layout/Layout';
import {
  Box,
  Text,
  Flex,
  Image,
  useToast,
  Link,
  FormControl,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';

export default function CreateMessages() {
  const [msg, setMsg] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const toast = useToast();

  const forum = () => {
    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }
    axios
      .post(
        'http://localhost:4000/forum',
        {
          msg,
          subject
        },
        {
          withCredentials: true
        }
      )
      .then(async (res: AxiosResponse) => {
        if (res.data === 'success') {
          toast({
            title: 'Compte crée.',
            description: 'Nous avons créé votre compte pour vous.',
            status: 'success',
            isClosable: true
          });
          await timeout(3000);
          window.location.href = '/login';
        } else {
          toast({
            title: "Une erreur s'est produite..",
            description: 'Impossible de créer votre compte.',
            status: 'error',
            duration: 2000,
            isClosable: true
          });
        }
      });
  };
  return (
    <Layout>
      <Box>
        <Text mx={2} textStyle="h6" color="pute">
          Envoyer
        </Text>
        <Box
          h={['600px', '200px', '200px', '200px']}
          flexDirection={['column', 'row', 'row', 'row', 'row']}
          justifyContent={['none', 'center', 'center', 'center', 'center']}
          textAlign="center"
        >
          <FormControl isRequired color="simplyAlgo">
            <FormLabel
              fontWeight="700"
              textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
            >
              Sujet
            </FormLabel>
            <Input
              textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              type="text"
              placeholder="Sujet"
              onChange={(e: any) => setSubject(e.target.value)}
            />
            <FormLabel
              fontWeight="700"
              textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
            >
              Message
            </FormLabel>
            <Textarea
              textAlign={['center', 'unset', 'unset', 'unset', 'unset']}
              type="text"
              onChange={(e: any) => setMsg(e.target.value)}
            />
          </FormControl>
        </Box>
      </Box>
    </Layout>
  );
}

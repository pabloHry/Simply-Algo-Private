import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
  Text
} from '@chakra-ui/react';
import Layout from './layout/Layout';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {
    axios
      .post(
        'http://localhost:4000/login',
        {
          username,
          password
        },
        {
          withCredentials: true
        }
      )
      .then(
        (res: AxiosResponse) => {
          if (res.data === 'success') {
            window.location.href = '/choose';
          }
        },
        () => {
          console.log('Failure');
        }
      );
  };

  return (
    <Layout>
      <Box w="100%" py={[4, 20]} textAlign="center">
        <Container>
          <Text textStyle="h4">Connexion</Text>
          <Box w="100%" mt={5} ml={2}>
            <FormControl isRequired>
              <FormLabel textAlign="center">Nom d'utilisateur</FormLabel>
              <Input
                type="text"
                placeholder="nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormLabel textAlign="center" mt={5}>
                Mot de passe
              </FormLabel>
              <Input
                type="text"
                placeholder="mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button onClick={login} variant="orange" mt={5}>
                Connexion
              </Button>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react';
import Layout from './layout/Layout';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [nom, setNom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [classe, setClasse] = useState<string>('');

  const register = () => {
    axios
      .post(
        'http://localhost:4000/register',
        {
          username,
          password,
          prenom,
          nom,
          email,
          classe
        },
        {
          withCredentials: true
        }
      )
      .then((res: AxiosResponse) => {
        if (res.data === 'success') {
          window.location.href = '/login';
        }
      });
  };

  return (
    <Layout>
      <Box w="100%" py={[4, 20]} textAlign="center">
        <Text textStyle="h4" mb={10}>
          Inscription
        </Text>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={8}
          ml="10rem"
        >
          <GridItem rowSpan={6} colSpan={2} textAlign="center">
            <FormControl isRequired>
              <FormLabel>Prenom</FormLabel>
              <Input
                type="text"
                placeholder="prenom"
                onChange={(e: any) => setPrenom(e.target.value)}
              />
              <FormLabel mt={5}>Nom</FormLabel>
              <Input
                type="text"
                placeholder="nom"
                onChange={(e: any) => setNom(e.target.value)}
              />
              <FormLabel mt={5}>Email</FormLabel>
              <Input
                type="text"
                placeholder="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <FormLabel mt={5}>Classe</FormLabel>
              <Input
                type="text"
                placeholder="classe"
                onChange={(e: any) => setClasse(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem rowSpan={6} colSpan={2} textAlign="center">
            <FormControl isRequired>
              <FormLabel>Nom d'utilisateur</FormLabel>
              <Input
                type="text"
                placeholder="nom d'utilisateur"
                onChange={(e: any) => setUsername(e.target.value)}
              />
              <FormLabel mt={5}>Mot de passe</FormLabel>
              <Input
                type="text"
                placeholder="mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Button onClick={register} variant="orange">
          Login
        </Button>
      </Box>
    </Layout>
  );
}

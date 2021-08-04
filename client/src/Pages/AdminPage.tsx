import React, { useEffect, useState, useContext } from 'react';
import Axios, { AxiosResponse } from 'axios';
import { myContext } from './Context';
import { UserInterface } from '../Interfaces/Interfaces';
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Grid,
  Text
} from '@chakra-ui/react';
import Layout from './layout/Layout';

export default function AdminPage() {
  const ctx = useContext(myContext);

  const [data, setData] = useState<UserInterface[]>();
  const [selectedUser, setSelectedUser] = useState<string>();
  useEffect(() => {
    Axios.get('http://localhost:4000/getallusers', {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      setData(
        res.data.filter((item: UserInterface) => {
          return item.username !== ctx.username;
        })
      );
    });
  }, [ctx]);
  if (!data) {
    return null;
  }

  const deleteUser = () => {
    let userid: string;
    data.forEach((item: UserInterface) => {
      if (item.username === selectedUser) {
        userid = item.id;
      }
    });

    Axios.post(
      'http://localhost:4000/deleteuser',
      {
        id: userid!
      },
      {
        withCredentials: true
      }
    );
  };

  const updateUser = () => {
    console.log('fdp');
    let userid: string;
    data.forEach((item: UserInterface) => {
      if (item.username === selectedUser) {
        userid = item.username;
      }
    });
    Axios.put(
      'http://localhost:4000/updateuser',
      {
        id: userid!,
        isAdmin: true
      },
      {
        withCredentials: true
      }
    );
  };

  return (
    <Layout>
      <Box mt={5} textAlign="center">
        <Text textStyle="h2" mb={5}>
          Page Admin
        </Text>
        <select
          onChange={(e) => setSelectedUser(e.target.value)}
          name="deleteuser"
          id="deleteuser"
        >
          <option id="Select a user">Selectionner un utilisateur </option>
          {data.map((item: UserInterface) => {
            return (
              <option key={item.username} id={item.username}>
                {item.username}
              </option>
            );
          })}
        </select>
        <Button ml={5} variant="orange" onClick={deleteUser}>
          Suprimer l'utilisateur
        </Button>
        <Button ml={5} variant="orange" onClick={updateUser}>
          Update l'utilisateur
        </Button>
      </Box>
    </Layout>
  );
}

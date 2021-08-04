import React, { useContext } from 'react';
import { myContext } from './Context';
import Layout from './layout/Layout';
import {
  Text,
  Box,
  Table,
  TableCaption,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Tfoot
} from '@chakra-ui/react';

export default function Profile() {
  const ctx = useContext(myContext);
  return (
    <Layout>
      <Box pt={5}>
        <Text textStyle="h4" color="simplyalgo" ml={5}>
          Profile
        </Text>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Nom</Td>
              {/* <Td>{ctx.prenom}</Td> */}
              <Td>millimetres (mm)</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Layout>
  );
}

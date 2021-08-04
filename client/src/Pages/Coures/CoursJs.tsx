import React, { useState } from 'react';
import Layout from '../layout/Layout';
import {
  Box,
  Flex,
  Text,
  Image,
  Alert,
  AlertIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  ModalFooter,
  Progress,
  ModalBody
} from '@chakra-ui/react';

import AccordionComponents from './AccordionComponents';
import StarComponents from './StarComponent';
import { DoubleQuotes, Trophy, Feather } from '../../theme/components/icons';

export default function CoursJs() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Flex p={4} bg="#FBFBFB" justifyContent="center">
        <Image
          src="https://blog.oxiane.com/wp-content/uploads/2018/01/js.png"
          w="150px"
          h="150px"
        />
      </Flex>
      <Flex mx={10} h="100%">
        <Box w="20%" p={5}>
          <AccordionComponents />
        </Box>
        <Box p={5} w="62%" textAlign="justify">
          <Text textStyle="h4" textAlign="center" id="Prérequis">
            Prérequis :
          </Text>
          <Text mt={10}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
            perspiciatis! Minima, voluptates. Atque magni animi quisquam.
            Eligendi at quas laboriosam.
          </Text>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero maiores unde culpa minima explicabo qui earum, ab accusamus
            voluptatem nobis laborum eum atque totam facere adipisci natus
            aspernatur doloremque temporibus consequatur nemo nesciunt molestias
            repellat? Est consequatur architecto quod praesentium eius explicabo
            odit cumque atque distinctio! Laudantium eaque inventore deserunt
            error. Ipsa praesentium dignissimos rerum sequi, impedit eius
            aliquam.
          </Text>
          <Alert status="success" mt={10} p={5}>
            <AlertIcon />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          </Alert>
          <Text mt={10}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
            perspiciatis! Minima, voluptates. Atque magni animi quisquam.
            Eligendi at quas laboriosam.
          </Text>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero maiores unde culpa minima explicabo qui earum, ab accusamus
            voluptatem nobis laborum eum atque totam facere adipisci natus
            aspernatur doloremque temporibus consequatur nemo nesciunt molestias
            repellat? Est consequatur architecto quod praesentium eius explicabo
            odit cumque atque distinctio! Laudantium eaque inventore deserunt
            error. Ipsa praesentium dignissimos rerum sequi, impedit eius
            aliquam.
          </Text>
          <Alert status="error" mt={10} p={5}>
            <AlertIcon />
            There was an error processing your request
          </Alert>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero maiores unde culpa minima explicabo qui earum, ab accusamus
            voluptatem nobis laborum eum atque totam facere adipisci natus
            aspernatur doloremque temporibus consequatur nemo nesciunt molestias
            repellat? Est consequatur architecto quod praesentium eius explicabo
            odit cumque atque distinctio! Laudantium eaque inventore deserunt
            error. Ipsa praesentium dignissimos rerum sequi, impedit eius
            aliquam.
          </Text>
          <Text mt={10}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
            possimus sed doloremque earum fugiat voluptas amet placeat quas? Hic
            corporis ipsum nobis esse aperiam, vel doloremque neque officiis
            molestiae quisquam facilis veniam placeat id, cumque explicabo
            repellendus ducimus, porro voluptate.
          </Text>
          <Button
            onClick={onOpen}
            variant="orange"
            mt={10}
            id="Exercice"
            display="block"
            mx="auto"
            w="30%"
            fontWeight="700"
          >
            Exercice
          </Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Exercice JS</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, labore?
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Fermer</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Box bg="#FBFBFB" p={5} my={10}>
            <Flex p={5}>
              <Image
                src="https://www.debarra-speed-grandest.fr/wp-content/uploads/2020/04/avatar-default-icon.png"
                w="150px"
                h="150px"
              />
              <Text
                alignSelf="center"
                textAlign="justify"
                ml={5}
                fontSize="20px"
              >
                <Box mb={5}>
                  <DoubleQuotes w="20px" h="20px" />
                </Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident temporibus hic animi neque reiciendis aliquam
                doloribus a officiis nam maiores.l
              </Text>
            </Flex>
            <Text textStyle="h6" color="info" ml={10}>
              Salope pute
            </Text>
            <Flex mt={1} ml={10}>
              <StarComponents />
            </Flex>
          </Box>
        </Box>
        <Box w="20%" p={5}>
          <Box position="sticky" top="0">
            <Flex justifyContent="center">
              <Trophy w="30px" h="30px" />
            </Flex>
            <Progress value={20} size="xs" colorScheme="orange" mt={10} />
            <Button variant="orange">
              <Feather w="20x" h="20px" />
              <Text>Avis</Text>
            </Button>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

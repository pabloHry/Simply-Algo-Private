import React, { useContext, useEffect, useState } from 'react';
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
  ModalBody
} from '@chakra-ui/react';
import AccordionComponents from './AccordionComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoubleQuotes, Star } from '../../theme/components/icons';
import FeedBack from './FeedBack';
import axios, { AxiosResponse } from 'axios';
import { FeedBackInterface } from '../../Interfaces/FeedInterface';
import { myContext } from '../Context';
import { Carousel } from 'react-bootstrap';

export default function CoursJs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [feed, setFeed] = useState([]);
  const ctx = useContext(myContext);
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (e: any, index: any) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/feed', {
        withCredentials: true
      })
      .then((res: AxiosResponse) => {
        setFeed(
          res.data.filter((item: FeedBackInterface) => {
            return item.firstname;
          })
        );
      });
  }, [ctx]);
  if (!feed) {
    return null;
  }

  const newLevel = {
    level: 20
  };

  const progression = () => {
    if (newLevel.level === 20) {
      window.location.reload();
      axios
        .put(`http://localhost:4000/user/${ctx.id}`, newLevel)
        .then(async (res: AxiosResponse) => {
          if (res.data === 'success') {
          }
        });
    } else {
      console.log('');
    }
  };
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
        <Box w={['0', '0', '0', '20%']} p={[0, 0, 0, 5]}>
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
          <Alert status="success" mt={10} p={5} fontWeight="700">
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
          <Alert status="error" mt={10} p={5} fontWeight="700">
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
                <Button variant="success" onClick={progression}>
                  Done
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Carousel>
            {feed.map((item: FeedBackInterface) => {
              return (
                <Carousel.Item>
                  <Box bg="#FBFBFB" p={5} my={10} key={item.id} id={item.id}>
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
                        {item.msg}
                      </Text>
                    </Flex>
                    <Flex mt={1} ml={10}>
                      <Star
                        onClick={(e: any) => handleStarClick(e, 0)}
                        color={item.star1 ? 'pute' : null}
                      />
                      <Star color={item.star2 ? 'pute' : null} />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 2)}
                        color={item.star3 ? 'pute' : null}
                      />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 3)}
                        color={item.star4 ? 'pute' : null}
                      />
                      <Star
                        onClick={(e: any) => handleStarClick(e, 4)}
                        color={item.star5 ? 'pute' : null}
                      />
                    </Flex>
                    <Box display="flex" justifyContent="center">
                      <Text color="info" textStyle="h6">
                        {item.firstname}
                      </Text>
                    </Box>
                  </Box>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
        <Box w="20%" p={5}>
          <Box position="sticky" top="0">
            <FeedBack />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

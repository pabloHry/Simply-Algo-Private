import React from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Link
} from '@chakra-ui/react';

export default function AccordionComponents() {
  return (
    <Box position="sticky" top="0">
      <Text textStyle="h6" fontSize={['0', '0', '0', '16px']}>
        Sommaire :{' '}
      </Text>
      <Accordion allowMultiple>
        <AccordionItem mt={5}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={['0', '0', '0', '16px']}>
              Etape 1
            </Box>
            <AccordionIcon w={['0', '0', '0']} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <List stylePosition="inside">
              <ListItem py={1}>
                <Link href={'#Prérequis'} variant="summary">
                  {' '}
                  <strong>1.</strong> Prérequis
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link href={'#Exercice'} variant="summary">
                  <strong>2.</strong> Exercice
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link href={'#en-academie'} variant="summary">
                  <strong>3.</strong> Vous travaillez en académie
                </Link>
              </ListItem>
              <ListItem py={1}>
                <Link href={'#journal'} variant="summary">
                  <strong>4.</strong> Journal des modifications
                </Link>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={['0', '0', '0', '16px']}>
              Etape 2
            </Box>
            <AccordionIcon w={['0', '0', '0']} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={['0', '0', '0', '16px']}>
              Etape 3
            </Box>
            <AccordionIcon w={['0', '0', '0']} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

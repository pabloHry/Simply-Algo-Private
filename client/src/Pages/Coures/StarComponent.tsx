import React, { useState } from 'react';
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { Star } from '../../theme/components/icons/';

export default function StarComponents() {
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
  return (
    <Box>
      <Star
        _hover={{ color: 'pute' }}
        onClick={(e: any) => handleStarClick(e, 0)}
        color={clicked[0] ? 'pute' : null}
      />
      <Star
        _hover={{ color: 'pute' }}
        onClick={(e: any) => handleStarClick(e, 1)}
        color={clicked[1] ? 'pute' : null}
      />
      <Star
        _hover={{ color: 'pute' }}
        onClick={(e: any) => handleStarClick(e, 2)}
        color={clicked[2] ? 'pute' : null}
      />
      <Star
        _hover={{ color: 'pute' }}
        onClick={(e: any) => handleStarClick(e, 3)}
        color={clicked[3] ? 'pute' : null}
      />
      <Star
        _hover={{ color: 'pute' }}
        onClick={(e: any) => handleStarClick(e, 4)}
        color={clicked[4] ? 'pute' : null}
      />
    </Box>
  );
}

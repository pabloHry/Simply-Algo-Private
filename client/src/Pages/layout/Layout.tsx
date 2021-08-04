import React from 'react';
import { Box } from '@chakra-ui/react';

import { NavBar, Footer } from './components/index';

const Layout = ({ children, ...rest }: any) => {
  return (
    <Box>
      <NavBar />
      <Box minH={'85vh'}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;

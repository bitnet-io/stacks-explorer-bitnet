'use client';

import { useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IncidentImpact } from 'statuspage.io';

import { AddNetworkModal } from '../../common/components/modals/AddNetwork';
import { TokenPrice } from '../../common/types/tokenPrice';
import { Flex } from '../../ui/Flex';
import { Text } from '../../ui/Text';
import { TextLink } from '../../ui/TextLink';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { NetworkModeToast } from './NetworkModeToast';
import { IncidentsStatusBarWithErrorBoundary } from './StatusBar';
import { StatusBarBase } from './StatusBar/StatusBarBase';
import { getColor } from './StatusBar/utils';

function WrapperWithBg({ children }: { children: ReactNode }) {
  return (
    <Flex
      maxWidth="100vw"
      minHeight="100vh"
      overflowX="hidden"
      direction="column"
      position="relative"
      overflow="hidden"
      bg={useColorModeValue(
	 `linear-gradient(
                 29.53deg,
                 #9528F7 2.94%, 
                 #1ec0ff 39.91%
                 #1ec0ff 76.87%, 
                 #0F102B 93.08%
               ),
               black`,
        `linear-gradient(
                 29.53deg,
                 #9528F7 2.94%, 
                 #1ec0ff 39.91%
                 #1ec0ff 76.87%, 
                 #0F102B 93.08%
               ),
               black`
      )}
      bgRepeat="no-repeat, repeat"
      bgSize="100% 530px, 100% 100%"
    >
      {children}
    </Flex>
  );
}

export function PageWrapper({
  tokenPrice,
  children,
}: {
  tokenPrice: TokenPrice;
  children: ReactNode;
}) {
  return (
    <>
      <WrapperWithBg>
        <Flex mx="auto" width="full" maxWidth="container.xl" flexDirection="column" p={6}>
          <NavBar tokenPrice={tokenPrice} />
          <Flex direction={'column'} mt={10} gap={7}>
            {children}
          </Flex>
          <Footer />
        </Flex>
      </WrapperWithBg>
      <AddNetworkModal />
      <NetworkModeToast />
    </>
  );
}

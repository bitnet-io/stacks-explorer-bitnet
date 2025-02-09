'use client';

import { useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { PiMoon, PiSunDim } from 'react-icons/pi';
import { TbSun, TbSunOff } from 'react-icons/tb';

import { IconButton, IconButtonProps } from '../../../ui/IconButton';

export const ColorModeButton: FC<IconButtonProps> = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const Icon = colorMode === 'dark' ? PiSunDim : PiMoon;
  return (
    <IconButton
      icon={<Icon />}
      onClick={useColorMode}
      color="black"
      title="Toggle color mode"
      {...props}
    />
  );
};

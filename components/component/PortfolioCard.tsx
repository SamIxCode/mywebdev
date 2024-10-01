'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface ProtfolioCardProps{
    text : string
    heading : string
    image: string,
    type: string
}

export default function PortfolioCard(
    {
    text,
    heading,
    image,
    type
    }:  ProtfolioCardProps 
) {
  return (
    <Center py={6} >
      <Box
        
        w={{base:'20rem',lg:"505px",md:"450px",sm:"400px"}}
        h={{base:'40rem',lg:"600px",md:"600px",sm:"600px"}}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'310px'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={
             image      }
          fill
             // width={"210"}
            // height={"300"}
            alt="Example"
            // placeholder="blur"
            style={{objectFit: "contain"}}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'md'}
            letterSpacing={1.1}>
            {type}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'3xl'}
            fontFamily={'body'}>
           {heading}
          </Heading>
          <Text color={'gray.500'}>
           {text} </Text>
        </Stack>
        
      </Box>
    </Center>
  )
}
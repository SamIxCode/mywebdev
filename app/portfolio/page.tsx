"use client"
import PortfolioCard from '@/components/component/PortfolioCard'
import { Box, Center, Flex, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <>
    <Center mt={"7rem"}>
         <Heading>Na toto sme hrdý</Heading>
     </Center>
      <Box mx={'auto'} px={5}>
        <Wrap spacing={'50px'} maxW={"full"} maxWidth={'full'} align={'center'} justify={'center'}>
            <WrapItem>
            < PortfolioCard heading='Luxx Optik' text=' on ption descriptiondescription description description descriptiondescription description description descriptiondescription des
            cription description descriptiondescri
       ription description descriptiondescriription description descriptiondescri
            description about the website' type='Landing Page' image='/webdev_ilu_2.png' />
            </WrapItem>
            <WrapItem>
            < PortfolioCard heading='Aider' text='description about the website' type='Landing Page' image='/webdev_ilu_2.png' />
            </WrapItem>
            <WrapItem>
            < PortfolioCard heading='InnoGrowLabs' text='description about the website' type='Landing Page' image='/webdev_ilu_2.png' />
            </WrapItem>
        </Wrap>
      </Box>
        
    </>
  )
}

export default page
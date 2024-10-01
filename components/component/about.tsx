'use client'

import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    )
}

export default function SplitWithImage() {
    return (
        <Container maxW={'5xl'} py={12} paddingY={"120px"}  pt={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} bg='gray.600' mt={'100px'} p={6} rounded={'lg'} boxShadow='2xl'>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.200'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.500', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Náš príbeh
                    </Text>
                    <Heading>Digitálna Web a Marketing Agentúra</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Feature
                            icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Návrh Webu a tvorba'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Návrh Marketingovej Stratégie'}
                        />
                        <Feature
                            icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Analýza potrieb'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            '/undraw_portfolio_website_re_jsdd.svg'}
                        // objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    )
}




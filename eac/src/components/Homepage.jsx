import { Center } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  import { Grid, GridItem } from '@chakra-ui/react'
  import { CloseIcon } from '@chakra-ui/icons'




import {
    Heading,
    Avatar,
    
    
    
    
    Button,
    
    
    useColorModeValue,
  } from '@chakra-ui/react';

// import peter from '../images/peter.png'

function Homepage() {
    return (
        <div>
            <Center width="100vw" height='100%'>
                <Box >
                 <Box display= 'flex' justifyContent="space-between"
                 p='4' m='4' width ='80vw'>
                    <Image 
                        boxSize='45px'
                        borderRadius='full'
                        src='/images/peter.png'
                    />
                    <Text>HELLO, Peter</Text>
                  </Box>
                <Box p='4' m='4' bg='#281E63' color='white'>
                    <Text>Total Access Request</Text>
                    <h2>10</h2>
                </Box>
                <h2> Access Request</h2>
                <Box>
                    <Input type='text' placeholder='Search for code or name'>


                    </Input>
    
                </Box>
                <Box display ='flex'>
                    <Text>Tue, 12 Oct 2021</Text>
                    <Box>
                    <Text>Icons</Text>
                    <span /> 
                    <Text>Icons</Text>
                    </Box>
                    
                </Box>
                <Grid templateColumns='repeat(3, 1fr)' gap={4}>
  <GridItem w='100%' h='10' bg='blue.500'>
      
        </GridItem> 
  <GridItem w='100%' h='10' bg='blue.500'>jOHN</GridItem> 
  <GridItem w='100%' h='10' bg='blue.500'>jOHN</GridItem> 
  <GridItem w='100%' h='10' bg='blue.500'>jOHN</GridItem> 
  <GridItem w='100%' h='10' bg='blue.500'>jOHN</GridItem> 
</Grid>
                <Box width='100%' height='80%'>
        <OrderedList width='100%' display='flex' justifyContent='space-around' alignItems='center'>
  <ListItem>Home</ListItem>
  <ListItem>Access</ListItem>
  <ListItem>Residents</ListItem>
  <ListItem>Accounts</ListItem>
   </OrderedList>
            </Box>
                

                
                
                
            {/* <Image
  
  boxSize='450px'
  borderRadius='full'
  src='/images/peter.png'
  alt='welcome'
  objectFit='cover'
  justifyContent='left'
  alignItems='left'
  pl='60px'
  

  objectPosition='left'

/> */}
        
            </Box>
            </Center>
        </div>
    )
}

export default Homepage

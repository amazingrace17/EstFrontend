import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'




import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    
    Button,
    
    
    useColorModeValue,
  } from '@chakra-ui/react';
  
  function Filter() {
    return (
      <Center py={6} p='4' m='4'>
        <Box
          maxW={'420px'}
          w='70%'
          h= '70%'
          m='4'
          
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
              <Box display='flex' justifyContent='space-between'>
              <Text fontSize= '30' fontWeight= 'bold'>Filter</Text>
                    <CloseIcon />
              </Box>
              <Box m='4' > 
              <Input placeholder='Start Date'  type='date'/>  

              </Box>
              <Box m='4'>
              <Input placeholder='End Date'  type='date'/>  

              </Box>
              <Box m='4'>
              <Select placeholder='Visitor Type'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                    </Select>
              </Box>
          
          

          
          
  
          
  
              <Box bg = '#281E63' m='4'>
              <Button
              bg = '#281E63'
              color= '#FFFFFF'
              >
              Apply
            </Button>
              </Box>
              <Box bg = '#EFEFEF' m='4'>
              <Button
              fontSize={'sm'}
              color={'black'}
              >
              Clear
            </Button>
              </Box>
            
            
        </Box>
      </Center>
    );
  }
  export default Filter
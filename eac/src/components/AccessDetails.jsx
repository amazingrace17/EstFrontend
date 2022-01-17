import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'




import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    
    Button,
    
    
    useColorModeValue,
  } from '@chakra-ui/react';
  
  function AccessDetails() {
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
              <Text fontSize= '30' fontWeight= 'bold'>Access Details </Text>
                    <CloseIcon />
              </Box>
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            Ibrahim Saka
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            PHIL809VS
          </Text>
          <Box display= 'flex' justifyContent="space-between" p='4'> 
              <Box p='2'>
                <small>Visitor type</small>
                <Text>Regular</Text>
              </Box>
              <Box>
                <small> Date Created</small>
                <Text>20-10-2021/ 3.00PM</Text>
              </Box>
          </Box>

          <Box display= 'flex' justifyContent="space-between">
              <Box p='2'>
                <small>Created by</small>
                <Text>John Osaka</Text>
              </Box>
              <Box>
                <small> Status</small>
                <Text color='#DE9230'>PENDING</Text>
              </Box>
          </Box>
          
  
          
  
              <Box  bg = '#281E63' m='4'>
              <Button
              bg = '#281E63'
              color= '#FFFFFF'
              >
              Approve
            </Button>
              </Box>
              <Box bg = '#EFEFEF' m='4'>
              <Button
              fontSize={'sm'}
              color={'black'}
              >
              Decline
            </Button>
              </Box>
            
            
        </Box>
      </Center>
    );
  }
  export default AccessDetails
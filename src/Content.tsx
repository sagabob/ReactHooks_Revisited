import { Box, Flex, Icon, useColorModeValue, useDisclosure, Text, Collapse, IconButton, InputGroup, InputLeftElement, Input, Avatar, DrawerContent, Drawer } from "@chakra-ui/react";
import React from "react";
import { FaClipboardCheck, FaRss } from 'react-icons/fa';
import { MdHome ,MdKeyboardArrowRight} from "react-icons/md";
import { HiCode, HiCollection } from "react-icons/hi";
import { Link } from '@chakra-ui/react'

const Content = () => {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
  
  
    const NavItem = () => {
    
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="inherit"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            bg: "gray.100",
            _dark: {
              bg: "gray.900",
            },
            color: "gray.900",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          
        >
          
        </Flex>
      );
    };
  
    const SidebarContent = () => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        
        color="inherit"
        borderRightWidth="1px"
        w="60"
        
      >
        <Flex px="4" py="5" align="center">
          
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: "white",
            }}
            fontWeight="semibold"
          >
            Choc UI
          </Text>
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <Link>Home</Link >      
   
        </Flex>
      </Box>
    );
  
    return (
      <Box
        as="section"
        bg="gray.50"
        _dark={{
          bg: "gray.700",
        }}
        minH="100vh"
      >
        <SidebarContent
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
          transition=".3s ease"
        >
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{
                base: "inline-flex",
                md: "none",
              }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            
  
            <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src="https://avatars.githubusercontent.com/u/30869823?v=4"
                cursor="pointer"
              />
            </Flex>
          </Flex>
  
          <Box as="main" p="4">
            {/* Add content here, remove div below  */}
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
          </Box>
        </Box>
      </Box>
    );
  };
  
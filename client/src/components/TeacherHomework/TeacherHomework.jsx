import {
    Flex,
    Box,
    useColorModeValue,
    Link,
    Avatar
  } from '@chakra-ui/react';

  function TeacherHomework({fileURL,fileName,student,}) {
    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
         
  
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {fileName}
              </Box>
              
            </Flex>
            <Flex justifyContent="space-between" alignContent="center">
              <Flex mt={3} alignItems="center">
                <Avatar name={student} mr={3}/>
                {student}
                <Link href={fileURL} color="blue.300" ml={3}>
                    URL
                </Link>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignContent="center" mt={3}>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default TeacherHomework;
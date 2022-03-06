import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
    Spinner
  } from '@chakra-ui/react';
  import {
    CheckCircleIcon,
    WarningTwoIcon
  } from '@chakra-ui/icons';
  import { useRef, useState } from 'react';
  import HomeWorkImage from '../../assets/homework.png'
  export default function Homework({description,homeworkName,id,currentFile}) {
    
    //Upload file
    const inputFileRef = useRef(null) 
    const [currentUploadFile,setCurrentUploadFile] = useState(currentFile);
    const [uploadFile,setUploadFile] = useState(null);
    const [isUploading,setIsUploading] = useState(false);
    const handleUploadFile = () => {
        // `current` points to the mounted file input element
       inputFileRef.current.click();
    };

    //Handle the API Upload 
    const handleSubmit = async(e) =>{
        setIsUploading(true);
        await setTimeout(() => {
            setCurrentUploadFile(uploadFile.name);
            setIsUploading(false);
        }, 3000);
    }
    return (
      <Center py={6}>
          
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '350px', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>

          {currentUploadFile ?
            //FIX: This need fixing after connect the API
            <CheckCircleIcon  w={10} h={10} color="green.300" />
            : <WarningTwoIcon  w={10} h={10} color="red.300"/>
          }
          <Flex flex={1} justifyContent="center" alignItems="center" >
            <Image
              objectFit="cover"
              boxSize="50%"
              src={
               HomeWorkImage
              }
            />
            
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {homeworkName}
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {description}
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={10}>
                <Flex direction="column" justifyContent="center" alignItems="center">
                    {currentUploadFile &&
                    <>
                        <Heading fontSize={'xl'} fontFamily={'body'}>
                            Previous Upload
                        </Heading>
                        <p>{currentUploadFile}</p>
                    </>
                    }

                    {uploadFile && 
                    <>
                        <Heading fontSize={'xl'} fontFamily={'body'} mt={3}>
                            Current Upload
                        </Heading>
                        <p>{uploadFile.name}</p>
                    </>
                    }
                </Flex>
              {/* <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #art
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #photography
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                #music
              </Badge> */}
            </Stack>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                onClick={handleUploadFile}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.200'}
                _hover={{
                    bg: 'blue.200',
                }}
                _focus={{
                  bg: 'blue.200',
                }}>
                Upload file
              </Button>
              <input type='file' id='file' ref={inputFileRef} onChange={(e)=>setUploadFile(e.target.files[0])} style={{display: 'none'}}/>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'green.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'green.400',
                }}
                _focus={{
                  bg: 'green.500',
                }}
                disabled={!uploadFile ? true : false}
                onClick={(e)=>handleSubmit(e)}
              >
                 {isUploading ? <Spinner/> : "Submit" }
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }
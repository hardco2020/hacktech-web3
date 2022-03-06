import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Button,
} from '@chakra-ui/react';
import { Link as Route } from 'react-router-dom';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
      <Image
        borderRadius='full'
        boxSize='40px'
        src={props.img}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight='medium'>{props.name}</Text>
    </HStack>
  );
};

const ArticleList = ({
  classId,
  ClassName,
  description,
  teacher,
  label,
  classImage,
  teacherImage,
  unsubmit,
}) => {
  console.log('teacher dashboard');
  return (
    <Container maxW={'7xl'} p='12'>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'
          >
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius='lg'
                src={classImage}
                alt='some good alt text'
                objectFit='contain'
              />
            </Link>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags tags={label} />
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              {ClassName}
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize='lg'
          >
            {description}
          </Text>
          {/* <BlogAuthor name={teacher} img={teacherImage} /> */}
          <Route to={`/${classId}/homework`}>
            <Button mt={3} colorScheme='teal' isFullWidth>
              See Homework
            </Button>
          </Route>
          <Button mt={3} disabled>
            Unsubmitted {unsubmit}{' '}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;

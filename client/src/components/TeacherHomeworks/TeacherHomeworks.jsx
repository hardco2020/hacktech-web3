import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import { fakeTeacherhomeworks } from '../../fakedata';
import TeacherHomework from '../TeacherHomework/TeacherHomework';
import { Button,Flex, Spinner } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const TeacherHomeworks = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleCheck = async () =>{
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/1/result`);
    }, 4000);
  }
  return (
      <div>
        <Navbar/>
        {fakeTeacherhomeworks.map((h)=>(
            <TeacherHomework fileName={h.fileName} student={h.studentName} key={h.id} fileURL = {h.fileURL} />
        ))}
        <Flex justifyContent="center" alignItems="center">
          <Button colorScheme="teal" onClick={handleCheck}>
            {isLoading ? <Spinner/> : "Check" }
          </Button>
        </Flex>
      </div>
  )
}

export default TeacherHomeworks
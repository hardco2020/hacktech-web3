import React from 'react'
import Navbar from '../Navbar/Navbar';
import { fakeTeacherworks } from '../../fakedata';
import TeacherHomework from '../TeacherHomework/TeacherHomework';

const TeacherHomeworks = () => {
  return (
      <div>
        <Navbar/>
        {fakeTeacherworks.map((h)=>(
            <TeacherHomework fileName={h.fileName} student={h.studentName} key={h.id} fileURL = {h.fileURL} />
        ))}
    </div>
  )
}

export default TeacherHomeworks
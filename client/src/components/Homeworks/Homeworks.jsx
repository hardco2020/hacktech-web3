import React from 'react'
import Homework from '../Homework/Homework'
import { fakeHomeworks } from '../../fakedata'
const Homeworks = () => {
  return (
    <div>
        { fakeHomeworks.map((h)=>(
           <Homework key={h.id} id={h.id} homeworkName={h.homeworkName} description={h.description} currentFile={h.currentFile} />
        ))}
    </div>
  )
}

export default Homeworks
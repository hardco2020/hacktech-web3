import React from 'react'
import Homework from '../Homework/Homework'
import { fakeHomeworks } from '../../fakedata'
import { create } from 'ipfs-http-client'
const Homeworks = () => {
  const ipfs = create('http://127.0.0.1:5001');
  return(
    <div>
        { fakeHomeworks.map((h)=>(
           <Homework key={h.id} id={h.id} homeworkName={h.homeworkName} description={h.description} currentFile={h.currentFile} ipfs={ipfs} />
        ))}
    </div>
  )
}

export default Homeworks
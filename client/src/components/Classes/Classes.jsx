import React from 'react'
import Class from '../Class/Class'
import { fakeClass } from '../../fakedata'

const Classes = () => {

  return (
    <div>
        { fakeClass.map((c)=>(
            <Class key={c.id} ClassName={c.className} teacher={c.teacher} description={c.description} label={c.label} classImage={c.classImage} unsubmit = {c.unsubmit} teacherImage={c.teacherImage}/>
        ))}
    </div>
  )
}

export default Classes
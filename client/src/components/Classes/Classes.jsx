import React from 'react'
import Class from '../Class/Class'

const fakeClass = [
    {
        id:1,
        className: "Chinese101",
        description: "Welcome to this class, you will be study how to speak chinese fluently in this class",
        teacher: "Lotus Perry",
        teacherImage: "",
        classImage:"",
        label:[
            "Chinese",
            "Language"
        ]
    },
    {
        id:2,
        className: "Economy305",
        description: "I want to teach everybody how the world is affected by Economy",
        teacher: "Johnny Riley",
        teacherImage: "",
        classImage:"",
        label:[
            "Economy",
            "Finance"
        ]
    },
    {
        id:3,
        className: "E-commerce206",
        description: "In this class, we gonna talk about the whole new way to change E-commerce world",
        teacher: "Alison Jr",
        teacherImage: "",
        classImage:"",
        label:[
            "Finance",
            "Information"
        ]
    },
    {
        id:4,
        className: "History210",
        description: "We will be learning Europe history in this class",
        teacher: "Jimmy Chen",
        teacherImage: "",
        classImage:"",
        label:[
            "History",
            "Information"
        ]
    },
]
const Classes = () => {

  return (
    <div>
        { fakeClass.map((c)=>(
            <Class key={c.id} ClassName={c.className} teacher={c.teacher} description={c.description} label={c.label} />
        ))}
    </div>
  )
}

export default Classes
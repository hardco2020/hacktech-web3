import React from 'react';
import TeacherClass from '../TeacherClass/TeacherClass';
import { fakeClass } from '../../fakedata';

const Classes = () => {
  return (
    <div>
      {fakeClass.map((c) => (
        <TeacherClass
          key={c.id}
          ClassName={c.className}
          teacher={c.teacher}
          description={c.description}
          label={c.label}
          classImage={c.classImage}
          unsubmit={c.unsubmit}
          teacherImage={c.teacherImage}
          classId={c.id}
        />
      ))}
    </div>
  );
};

export default Classes;

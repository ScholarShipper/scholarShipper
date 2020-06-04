// export{}
// // @ts-ignore
// const db = require('../models/models');
// const studentControllers = <any>{};

// studentControllers.getStudents = (req, res, next) => {
  // console.log('get students request');
  // const studentsGetReq = `SELECT s.first_name, s.last_name, s.school
  // FROM students s
  // INNER JOIN cohort c
  // ON s.cohort_id = c.cohort_id
  // WHERE s.start_year = $1`

  // const cohort = [req.params.cohort_id]

  // db.query(studentsGetReq, cohort)
  // .then((students)=> {
  //   res.locals.students = students.rows[0]
  //   next()
  // })
  // .catch(err => console.log(`error: ${err}`))

//   res.locals.students = {
//     name: 'AL',
//     date: 'now',
//   };

// // @ts-ignore
// module.exports = studentControllers

const StudentService = {
    getAllStudents(knex) {
      return knex.select('*').from('students')
    },
    insertStudent(knex, newStudent) {
      return knex
        .insert(newStudent)
        .into('students')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
//     getById(knex, id) {
//       return knex.from('folders').select('*').where('id', id).first()
//     },
//     deleteFolder(knex, id) {
//       return knex('folders')
//         .where({ id })
//         .delete()
//     },
//     updateFolder(knex, id, newStudentFields) {
//       return knex('folders')
//         .where({ id })
//         .update(newStudentFields)
//     },
//   }
  
  module.exports = StudentService
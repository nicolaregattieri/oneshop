import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: "Nick",
    email: 'nick@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: "May",
    email: 'may@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },

]

export default users;
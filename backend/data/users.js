import bcrypt from "bcryptjs";

let users = [
  {
    name: "Jeet",
    email: "jeet@email.com",
    password: "123456",
    isAdmin: false,
  },
  {
    name: "Ram",
    email: "ram@email.com",
    password: "123456",
    isAdmin: false,
  },
  {
    name: "Admin",
    email: "admin@email.com",
    password: "123456",
    isAdmin: true,
  },
];

users = users.map((user) => ({
  ...user,
  password: bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)),
}));

export default users;

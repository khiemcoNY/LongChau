import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "LongChau@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "CongDanUyTinGuongMau",
    email: "khiem22072001@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

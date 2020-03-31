const mongoose = require('mongoose');
const schema =mongoose.Schema;
//All model regards user will be created here
const User = new schema({
  userName:String,
  password:String
});

const User_Role = new schema({
    userName:String,
    userRole:String
  });


let  Users = mongoose.model('Users',User);
let  User_Roles = mongoose.model('User_Roles',User_Role);


module.exports = {
    Users:Users,
    User_Roles: User_Roles
};

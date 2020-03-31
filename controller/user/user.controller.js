var userModel = require('../../model/user.model');

class User {
    static addUser(req, res) {

        let permission = 'basic';
        userModel.Users.count((err, count) => {
            if (err) {
                console.log(err);
            }

            if (count == 0) {
                permission = 'admin';
            }

            let user = new userModel.Users({
                userName: req.body.name,
                password: req.body.password
            });
            user.save((err, data) => {
                if (err) {
                    console.log("getting error while saving the user record");
                    res.status(500);
                    res.send({ status: err });

                }
                let userPermission = new userModel.User_Roles({
                    userName: req.body.name,
                    userRole: permission
                });
                userPermission.save((err, data) => {
                    if (err || !data) {
                        console.log("getting error while saving the user record");
                        res.status(500);
                        res.send({ status: err });

                    }
                    res.send({ status: 'success' });

                });

            })


        })




    }

}

module.exports = User;
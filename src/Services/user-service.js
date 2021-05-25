const { User} = require('../Models');

module.exports = {
    login: async (username, password) => {
        try {
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            const matched = await user.validatePassword(password);
            if(matched) {
                loggedInUser = user;
                return user;
            }
        } catch(err) {
            console.error(`UerService.login(): Error loging in "${username}" with pass "${password}"`, err);
        }

        return null;
    },
    signup: async (username, password) => {
        try {
            const exisiting = await User.findOne({
                where: {
                    username: username
                }
            });
            if(exisiting) {
                console.warn(`UerService.signup(): Error creating user with username="${username}", already exists"`)
                return null;
            }

            const user = await User.create({username, password});

            return user;
        } catch(err) {
            console.error(`UerService.signup(): Error creating user with username="${username}"`, err);
        }

        return null;
    },
}
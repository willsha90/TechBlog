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
                return user;
            }

            return null;
        } catch(err) {
            throw err;
        }
    }
}
const model = require("../models");
const userModel = model.user;
module.exports = {
    index: async (req, res) => {
        const users = await userModel.findAll({});
        res.render("users", {users: users});
    },
    detail: async (req, res) => {
        const userId = req.params.id;
        const user = await userModel.findByPk(userId);
        res.render("userDetail", { user: user})
    }
}
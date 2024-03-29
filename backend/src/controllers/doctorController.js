import Sequelize from "sequelize";
import models from '../models';

const Op = Sequelize.Op;

export const index = async (req, res) => {
    let {q} = req.query;
    const searchQuery = q ? {name: {[Op.like]: `%${q.replace(' ', '')}%`}} : {};
    try {
        const doctors = await models.User.findAll({
            where: {userType: 'doctor', ...searchQuery},
            include: [{model: models.Profile, as: "profile"}],
            attribute: {exclude: ['password']}
        });

        res.status(200).json(doctors);
    } catch(e) {
        res.status(500).json(e);
    }
}
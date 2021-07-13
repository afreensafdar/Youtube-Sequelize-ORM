const {sequelize, DataTypes, Model} = require('./db');

class Comments extends Model {

}

Comments.init({
    description: DataTypes.STRING,
    likes: DataTypes.BOOLEAN ,
    date :DataTypes.DATE	
}, {
sequelize,
timestamps: false,
});

module.exports = {Comments};
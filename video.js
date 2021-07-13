const {sequelize, DataTypes, Model} = require('./db');

class Video extends Model {

}

Video.init({
    title: DataTypes.STRING,
    views: DataTypes.INTEGER ,
    likes: DataTypes.INTEGER,
    dislikes :DataTypes.INTEGER,
    description: DataTypes.STRING	
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Video};
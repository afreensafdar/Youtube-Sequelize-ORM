const {sequelize, DataTypes, Model} = require('./db');

class CommentSection extends Model {

}
CommentSection.init({
    numberComments: DataTypes.INTEGER,
    disabled:DataTypes.BOOLEAN  
}, {
	sequelize,
	timestamps: false,
});

module.exports = {CommentSection};
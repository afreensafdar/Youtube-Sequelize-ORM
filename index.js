const {sequelize, DataTypes, Model} = require('./db');
const { Video } = require('./Video');
const { Comments } = require('./Comments');
const { CommentSection } = require('./CommentSection');


//Create our Association!
//Connecting Comments and Video tables
Comments.belongsTo(Video, {foreignKey: 'video_id'}) //adds a foreign key on restaurant table, for the menu that belongs to
Video.hasMany(Comments,{as: 'comments', foreignKey: 'video_id'}) 
//module.exports={Comments,Video}

//Connecting CommentSection and Comments tables
Comments.belongsTo(CommentSection)
CommentSection.hasMany(Comments)
//module.exports={Comments,CommentSection}

//Connecting CommentSection and Video tables
CommentSection.belongsTo(Video)
Video.hasOne(CommentSection)
//module.exports={Video,CommentSection}

module.exports = { Video,Comments, CommentSection};


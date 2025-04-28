// const { Model, DataTypes } = require('DataTypes');

module.exports = function(sequelize, DataTypes){
    return sequelize.define(
        'Province',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true                
            },
            englishName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            field: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: 'provinces',
            timestamps: true
        }
    );
    Province.associate = models => {
        Province.hasMany(models.Municipality, {
             foreignKey: 'provinceId',
             onDelete: 'SET NULL' });
    };   
}
'use strict';

const { on } = require("nodemon");
const municipality = require("./municipality");

module.exports = function(sequelize, DataTypes){
    const Address = sequelize.define(
        'Address', 
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            userId: { type: DataTypes.INTEGER, allowNull: false},
            provinceId: { type: DataTypes.INTEGER, allowNull: true},
            municipalityId: { type: DataTypes.INTEGER, allowNull: true},
            fullAddress: { type: DataTypes.STRING, allowNull: true},
            zipcode: {type: DataTypes.STRING,allowNull: true}
        },
        {
            tableName: 'addresses',
            timestamps: true
        }
    );

    Address.associate = models =>{
        Address.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
        Address.belongsTo(models.Province,{
            foreignKey: 'provinceId',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });
        Address.belongsTo(models.Municipality,{
            foreignKey: 'municipalityId',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });
    };
    return Address; 
};

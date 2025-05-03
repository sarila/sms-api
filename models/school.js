'use strict';

module.exports = function(sequelize, DataTypes){
    const School = sequelize.define(
        'School',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull:false,
                autoIncrement: true,
                primaryKey: true
            },
            englishName: {
                type: DataTypes.STRING,
                allowNull: true
            },
            nepaliName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            municipalityId: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'schools',
            timestamps: true
        }
    );
    School.associate = models => {
        School.belongsTo(models.Municipality, {
            foreignKey: 'municipalityId',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });
    };
    return School;
}
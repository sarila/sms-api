'use strict';

module.exports = function (sequelize, DataTypes) {
    const Municipality = sequelize.define(
        'Municipality',
        {
            id: {
                type: DataTypes.INTEGER(11),
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
            provinceId: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'municipalities',
            timestamps: true
        }
    );
    Municipality.associate = models => {
        Municipality.belongsTo(models.Province, {
            foreignKey: 'provinceId',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });
    };
    return Municipality;
};
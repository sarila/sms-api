const { Model, DataTypes } = require('DataTypes');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        lastName: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        email: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        password: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        mobile: {
          type: DataTypes.STRING(128),
          allowNull: true,
          get() {
            const number = this.getDataValue('mobile');
            return number ? `${number}`.replace(/\s/g, '') : number;
          },
        }, 
        gender: {
          type: DataTypes.ENUM('male','female'),
          allowNull: true
        },
        accessToken: {
          type: DataTypes.STRING(128),
          allowNull: true
        },
        resetPasswordToken: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        adminAccess: {
          type: DataTypes.INTEGER(1),
          allowNull: true,
          defaultValue: '0'
        },
        temporaryAddress: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        permanentAddress: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        schoolId:{
          type: DataTypes.INTEGER,
          references: {
            model: 'schools',
            key: 'id',
          },
          onDelete: 'set null',
          allowNull: true
        },
        roleId:{
          type: DataTypes.INTEGER,
          references: {
            model: 'userRoles',
            key: 'id',
          },
          onDelete: 'set null',
          allowNull: true
        },
        studentIdNo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        citizenshipNo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        emailVerifiedAt: {
          type: DataTypes.DATE,
          allowNull: true
        },
        profileImage: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true
        },
      }
    );
  };
  

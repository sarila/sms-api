'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role', 
    {
      id: { 
        type: DataTypes.INTEGER, 
        allowNull:false, 
        autoIncrement:true, 
        primaryKey:true
       },
      label: { 
        type: DataTypes.STRING,
        allowNull:false
        },
      title: { 
        type: DataTypes.TEXT,
        allowNull:true 
        },
      scopes:{ 
        type: DataTypes.JSON,
        allowNull:true 
        },
      createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },      
    {
      tableName: 'roles',
      timestamps: true
    }
  );
  return Role;
};

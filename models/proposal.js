'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define(
    'Proposal', 
    {
      id:            { type: DataTypes.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true },
      title:         { type: DataTypes.STRING,  allowNull:false },
      description:   { type: DataTypes.TEXT,    allowNull:true },
      files:         { type: DataTypes.JSON,    allowNull:true },
      userId:        { type: DataTypes.INTEGER, allowNull:false },
      provinceId:    { type: DataTypes.INTEGER, allowNull:true },
      municipalityId:{ type: DataTypes.INTEGER, allowNull:true },
      schoolId:      { type: DataTypes.INTEGER, allowNull:true },
      tags:          { type: DataTypes.JSON,    allowNull:true },
      metadata:      { type: DataTypes.JSON,    allowNull:true },
      status:        { type: DataTypes.STRING,  allowNull:true }
    },
    {
      tableName: 'proposals',
      timestamps: true
    }
  );

  Proposal.associate = models => {
    Proposal.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete:   'CASCADE',
      onUpdate:   'CASCADE'
    });
    Proposal.belongsTo(models.Province, {
      foreignKey: 'provinceId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Proposal.belongsTo(models.Municipality, {
      foreignKey: 'municipalityId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    Proposal.belongsTo(models.School, {
      foreignKey: 'schoolId',
      onDelete:   'SET NULL',
      onUpdate:   'CASCADE'
    });
    //  a Proposal can have many Reports
    Proposal.hasMany(models.Report, {
      foreignKey: 'proposalId',
      onDelete:   'CASCADE',
      onUpdate:   'CASCADE'
    });
  };

  return Proposal;
};

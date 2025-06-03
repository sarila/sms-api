const { where } = require("sequelize");
const { Report } = require("../models");

const list = async (req, res) => {
  try {
    const reports = await Report.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const data = {
      
      title: req.body.title,
      description: req.body.description,
      files: req.body.files,
      userId: req.user.id, // Assume `req.user` is populated by your auth middleware
      provinceId: req.body.provinceId,
      municipalityId: req.body.municipalityId,
      schoolId: req.body.schoolId,
      proposalId: req.body.proposalId,
      tags: req.body.tags,
      metadata: req.body.metadata,
      status: req.body.status,
      submittedOn: new Date(),
    };
    const report = await Report.create(data);
    res.status(201).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const [n] = await Report.update(
      {
        title: req.body.title,
        description: req.body.description,
        files: req.body.files,
        userId: req.user.id, // Assume `req.user` is populated by your auth middleware
        provinceId: req.body.provinceId,
        municipalityId: req.body.municipalityId,
        schoolId: req.body.schoolId,
        proposalId: req.body.proposalId,
        tags: req.body.tags,
        metadata: req.body.metadata,
        status: req.body.status,
        submittedOn: new Date(),        
      },
      {
        where: { id: req.params.id, userId: req.user.id },
        returning: true,
      }
    );
    if (n == 0) return res.status(404).json({ error: "Not found/Not changed" });
    const updated = await Report.findOne({ where: { id: req.params.id, userId: req.user.id } });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const count = await Report.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (count == 0) return res.status(404).json({ error: "Not found" });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { create, list, update, remove };

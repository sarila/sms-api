const { where } = require("sequelize");
const { Proposal } = require("../models");

const list = async (req, res) => {
  try {
    const proposals = await Proposal.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const data = {
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      files: req.body.files,
      provinceId: req.body.provinceId,
      municipalityId: req.body.municipalityId,
      schoolId: req.body.schoolId,
      tags: req.body.tags,
      metadata: req.body.metadata,
      status: req.body.status,
    };
    const prop = await Proposal.create(data);
    res.status(201).json(prop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const [n, [updated]] = await Proposal.update(
      {
        //returns affectedCOUNT and affectedROWS
        title: req.body.title,
        description: req.body.description,
        files: req.body.files,
        provinceId: req.body.provinceId,
        municipalityId: req.body.municipalityId,
        schoolId: req.body.schoolId,
        tags: req.body.tags,
        metadata: req.body.metadata,
        status: req.body.status,
      },
      {
        where: { id: req.params.id, userId: req.params.userId },
        returning: true,
      }
    );
    if (n == 0) return res.status(404).json({ error: "Not found/Not changed" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const count = await Proposal.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (count == 0) return res.status(404).json({ error: "Not found" });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { create, list, update, remove };

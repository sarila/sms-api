const { where } = require("sequelize");
const { Notice } = require("../models");

const list = async (req, res) => {
  try {
    const notices = await Notice.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      file: req.body.file,
      userId: req.user.id,
      provinceId: req.body.provinceId,
      municipalityId: req.body.municipalityId,
      tags: req.body.tags,
      deadline: req.body.deadline,
      metadata: req.body.metadata,
      status: req.body.status,
    };
    const notice = await Notice.create(data);
    res.status(201).json(notice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const [n] = await Notice.update(
      {
      title: req.body.title,
      description: req.body.description,
      file: req.body.file,
      userId: req.user.id,
      provinceId: req.body.provinceId,
      municipalityId: req.body.municipalityId,
      tags: req.body.tags,
      deadline: req.body.deadline,
      metadata: req.body.metadata,
      status: req.body.status,
      },
      {
        where: { id: req.params.id, userId: req.user.id },
        returning: true,
      }
    );
    if (n == 0) return res.status(404).json({ error: "Not found/Not changed" });
    const updated = await Notice.findOne({ where: { id: req.params.id, userId: req.user.id } });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const count = await Notice.destroy({
      where: { id: req.params.id, userId: req.user.id },
    });
    if (count == 0) return res.status(404).json({ error: "Not found" });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { create, list, update, remove };

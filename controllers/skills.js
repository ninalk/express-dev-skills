// require the Todo model
const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time 
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  console.log(req.body, 'THIS IS req.body');
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {
    skill: Skill.getOne(req.params.id)
  });
}

function update(req, res) {
  console.log('hitting the controller function')
  console.log(req.body)
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`)
}

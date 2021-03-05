const skills = [
  {id: 1, skill: 'JavaScript expert', confirm: true},
  {id: 2, skill: 'Knowledgeable with Express', confirm: false},
  {id: 3, skill: 'MVC architecture', confirm: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  const index = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(index, 1);
}

function update(id, skill) {
  const index = skills.findIndex(skill => skill.id === parseInt(id));
  console.log(index, ' this is the index')
  skills[index].skill = skill.skill;
}
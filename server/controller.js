const teams = [
  {
    name: "Jazz",
    id: 1
  },
  {
    name: "lakers",
    id: 2
  },
  {
    name: "braves",
    id: 3
  },
  {
    name: "Huskers",
    id: 4
  }
];
const editTeam = (req, res) => {
  const item = teams.findIndex(team => team.id === +req.params.id);
  teams[item].name = req.body.newName;
  console.log(teams);
  res.json(teams);
};
const addTeam = (req, res) => {
  teams.push(req.body);
  res.json(teams);
};

const getAll = (req, res) => {
  res.json(teams);
};
const getTeam = (req, res) => {
  const item = teams.findIndex(team => team.id === +req.params.id);

  res.json(teams[item]);
};

const deleteTeam = (req, res) => {
  console.log(req.body.id);
  const item = teams.findIndex(team => team.id === +req.body.id);
  teams.splice(item, 1);
  res.json(teams);
};

module.exports = {
  deleteTeam,
  getAll,
  addTeam,
  editTeam,
  getTeam
};

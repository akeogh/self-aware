module.exports = function(err, status, res) {
  console.log(err);
  res.status(status).json({msg: 'Something went wrong! Ouch!'});
};

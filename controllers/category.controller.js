module.exports = {
  create: (req, res) => {
    console.log(req.user.username);
    res.render("category/create");
  }
}

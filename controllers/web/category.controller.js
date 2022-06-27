module.exports = {
  create: (req, res) => {
    console.log(req.user);
    res.render("category/create");
  }
}

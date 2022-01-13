const router = require("express").Router();
const phones = require("./phones.json");

// get all phones
router.get(`/phones`, async (req, res, next) => {
  try {
    res.status(200).json({ data: phones });
  } catch (err) {
    console.log(err);
  }
});

//  get phone by id
router.get(`/phones/:id`, async (req, res, next) => {
  try {
    const id = req.params.id;
    const phoneById = phones.find((phone) => {
      return phone.id === Number(id);
    });
    res.status(200).json(phoneById);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

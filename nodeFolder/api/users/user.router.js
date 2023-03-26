const {
  createUser,
  getUsers,
  loginUser,
  deleteUser,
  getMedicament,
  deleteMed,
  createMed,
  getUserByEmail,
  getAddresses,
  getOrders,
  addAddress,
  searchMed,
  getMedById,
  sendOrder,

} = require("./user.controller");
const router = require("express").Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/login", loginUser);
router.delete("/users", deleteUser);
// router.get('/users/:email', )
router.get("/medicaments", getMedicament);
router.delete("/medicaments", deleteMed);
router.post("/medicaments", createMed);
router.get("/users/:email", getUserByEmail);
router.get("/addresses/:email", getAddresses);
router.get('/orders', getOrders)
router.post('/address', addAddress)
router.get('/searchmed/:name',searchMed)
router.get('/medicaments/:id', getMedById)
router.post('/order',sendOrder)
module.exports = router;

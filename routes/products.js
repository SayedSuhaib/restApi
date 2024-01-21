const expres = require("express");
const { getAllProducts, getTestingProducts } = require('../controllers/products');
const router = expres.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getTestingProducts);

module.exports = router;
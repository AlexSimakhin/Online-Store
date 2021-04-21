const Router = require('express');

const router = new Router();

const typeContoller = require('../controllers/typeController');

router.post('/', typeContoller.create);
router.get('/', typeContoller.getAll);

module.exports = router;
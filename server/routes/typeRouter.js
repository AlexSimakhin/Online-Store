const Router = require('express');

const router = new Router();

const typeContoller = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), typeContoller.create);
router.get('/', typeContoller.getAll);

module.exports = router;
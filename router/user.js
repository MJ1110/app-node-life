const Router = require('koa-router');
const router = new Router();
const { reg,login } = require('../controllers/product')

/**
 * @route GET api/users/register
 * @desc 测试接口地址
 * @access 接口是公开的
 */
router.post('/register',reg);
router.post('/login',login);


module.exports = router;
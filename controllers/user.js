const User = require('../models/user');
const keys = require('../config/keys')

class Products {
    async reg(ctx) {
        // console.log(ctx.request.body);
        ctx.body = ctx.request.body;
        //存储到数据库
        const findResult = await User.find({ username: ctx.request.body.username });
        // findResult数组
        if (findResult.length > 0) {
            ctx.body = { msg: '邮箱已经存在！！！' }
        } else {
            //没查到
            const newUser = new User({
                username: ctx.request.body.username,
                password: ctx.request.body.password
            })

            //存储到数据库
            await newUser.save().then(res => {
                ctx.body = newUser
            }).catch(err => {
                console.log(err)
            })
        }
    }
    async login(ctx) {
        const findResult = await User.find({ username: ctx.request.body.username });

        if (findResult.length === 0) {
            ctx.status = 404
            ctx.body = { email: '用户不存在！！！' }
        } else {
            const user = findResult[0];
            const password = ctx.request.body.password;
            // 返回true和false
            const result = password == user.password;
            if (result) {
                ctx.status = 200;
                ctx.body = { msg: '登录成功！！！'};
            } else {
                ctx.status = 400;
                ctx.body = { msg: '登录失败！！！' };
            }

        }
    }
    async delUser(ctx){
        
    }
}

module.exports = new Products();
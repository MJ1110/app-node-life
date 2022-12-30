const Koa = require("koa");
const Router = require("koa-router");

const { koaBody } = require('koa-body');

//koa实例化
const app = new Koa();
app.use(koaBody());
const router = new Router();

router.get("/home", async (ctx) => {
  ctx.body = "hello World111";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务启动了");
});

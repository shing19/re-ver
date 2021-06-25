const Koa = require('koa')
  , json = require('koa-json')
  , logger = require('koa-logger');
const app = module.exports = new Koa();

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.on('error', function(err, ctx){
  console.log('sever error', err);
});

app.listen(8889, () => {
  console.log('Koa is listening in 8889');
});
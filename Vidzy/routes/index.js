/*当使用 require方法时，依赖于目标模块是怎样实现的，require方法可能返回1个方法或者对象。在这个例子中，
这个 express变量是1个对象。它提供了一个叫做 Router的方法，我们在第2行就调用了这个方法。用来访问Express中的路由对象。
我们用1个路由来定义我们应用中的端点。我们在这些端点中接收请求。每个端点将会被关联到1个路由处理器，处理器负责处理在端点中收到的请求。
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

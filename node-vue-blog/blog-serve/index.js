const koa = require("koa");
const app = new koa();
const cors = require("koa-cors");
const Router = require("koa-router")
const router = new Router();
const {contentMysqlConn} = require("./mysql");
// const bodyParser = require('koa-bodyparser');
const bodyParser = require("koa-bodyparser")
app.use(bodyParser());
app.use(cors());

//查询文章
router.get('/blog-content', async (ctx, next) => {
    let query = () => {
        return new Promise((resolve, reject) => {
            contentMysqlConn.query("SELECT * FROM `blogcontent`", (err, data) => {
                if (err) {
                    resolve({
                        message: err.message
                    })
                }
                resolve(data);
            })
        })
    }
    let result = await query();
    ctx.body = result;
})

//查询内容
router.get('/blog-content/single', async (ctx, next) => {
    let query = () => {
        return new Promise((resolve, reject) => {
            let idd = ctx.query.id;
            // console.log(idd)
            let sql = "SELECT * FROM `blogcontent` WHERE id =" + idd

            contentMysqlConn.query(sql, (err, data) => {
                if (err) {
                    resolve({
                        message: err.message
                    })
                }
                resolve(data);

            })
        })
    }
    let result = await query();
    ctx.body = result;
})

//删除文章
router.get('/blog-content/delete', async (ctx, next) => {
    let query = () => {
        return new Promise((resolve, reject) => {
            let idd = ctx.query.id;
            //  console.log(id)
            let sql = "DELETE FROM  `blogcontent` WHERE id =" + idd
            contentMysqlConn.query(sql, (err, data) => {
                if (err) {
                    resolve({
                        message: err.message
                    })
                }
                resolve(data);

            })
        })
    }
    let result = await query();
    ctx.body = result;
})

// 添加文章
router.post("/add-blog", async (ctx, next) => {
    let query = () => {
        return new Promise((resolve, reject) => {
            let idd = ctx.query.id;
            let { title, body, author, classification } = ctx.request.body
            let sql = "INSERT INTO `blogcontent` (title,body,author,classification) VALUES(?,?,?,?)";
            contentMysqlConn.query(sql, [title, body, author, classification], (err, data) => {
                if (err) {
                    console.log(err)
                    resolve({
                        message: err.message
                    })
                }
                resolve(data);
            })
        })
    }
    let result = await query();
    ctx.body = result;

})


// 修改文章
router.post("/modifyBlogblog", async (ctx, next) => {
    let query = () => {
        return new Promise((resolve, reject) => {
            let idd = ctx.request.body.id;

            // let sql = "SELECT * FROM `blog-content` WHERE id =" + idd
            let { title, body, author, classification } = ctx.request.body
            let sql1 = `UPDATE  blogcontent SET title = '${title}' WHERE id =  ${idd}`
            let sql2 = `UPDATE  blogcontent SET body = '${body}' WHERE id =  ${idd}`
            let sql3 = `UPDATE  blogcontent SET author = '${author}' WHERE id =  ${idd}`
            let sql4 = `UPDATE  blogcontent SET classification = '${classification}' WHERE id =  ${idd}`
            var sql = [sql1, sql2, sql3, sql4];
            sql.forEach(item => {
                contentMysqlConn.query(item, [title, body, author, classification], (err, data) => {
                    if (err) {
                        console.log(err)
                        resolve({
                            message: err.message
                        })
                    }
                    resolve(data);
                })
            });
        })
    }
    let result = await query();
    ctx.body = result;
})

// 登入接口




router.use('/', router.routes(), router.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())
app.use(async ctx => {
}).listen(3000)

const express = require('express')
const app = express()

const db = require('./config/database.js')


//Middleware
app.use(express.json())

//
app.get("/", (req, res) => {
    res.json({
        message: 'Welcome to Database'
    })
})

//------------------------------------------------USER_CRED------------------------------------------------

//GET
app.get('/user', (req, res) => {
    let sql = `select * from user_cred`
    db.connection.query(sql, (error, result) => {
        if(error){
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            data: result
        })
    })
})

//GET BY ID
app.get('/user/:id', (res, req) => {
    let id = req.params.id
    const sql = `select * from user_cred where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: `Here is the result of id: ${id}`,
            data: result
        })
    })
})

//POST TODO:
app.post('/user',  (req, res) => {
    let wrap = req.body

    let uEmail = wrap.email
    let uPass = wrap.password

    let sql = `insert into user_cred (password, email) values ('${uPass}', '${uEmail}')`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(201).json({
            error: false,
            message: 'Record has been added.',
            data: result
        })
    })
})

//PUT
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let sql = `update user_cred set 
    email = '${body.email}', 
    password = '${body.password}' 
    where id = ${id}`
    db.connection.query(sql, (err, res) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'record updated successfully',
            data: result
        })
    })
})

//DELETE
app.delete('/users/:id', (res, req) => {
    let id = req.params.id
    let sql = `delete from user_cred where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'Record has been deleted',
            data: result
        })
    })
})

//-----------------------------------------------USER_DETAILS--------------------------------------------------
//GET ALL
app.get('/ud', (req, res) => {
    const sql = `select * from user_details`
    db.connection.query(sql, (error, result) => {
        if(error){
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            data: result
        })
    })
})

//GET BY ID
app.get('/ud/:id', (req, res) => {
    const sql = `select * from user_details where id = ${id}`
    db.connection.query(sql, (err, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: true,
            message: error.message
        })
    })
})

//POST TODO:
app.post('/ud', (res, req) => {
    let wrap = req.body

    let uName = wrap.user_name
    let uSkill = wrap.skills
    let uMobile = wrap.mobile
    let uSocialMedia = wrap.social
    
    let sql = `insert into users (name, password, email, skills, mobile, sm) values ('${uName}', '${uPass}', '${uEmail}', '${uSkill}', ${uMobile}, '${uSocialMedia}')`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(201).json({
            error: false,
            message: 'Record has been added.',
            data: result
        })
    })
})

//PUT
app.put('/ud/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let sql = `update user_details set 
    user_name = '${body.name}', 
    user_mobile = '${body.mobile}', 
    user_description = '${body.description}', 
    user_photo = '${body.photo}', 
    user_category = '${body.category}', }'
    user_portfolio = '${body.portfolio}',
    user_fb = '${body.fb}'
    user_ig = '${body.ig}'
    user_twitter = '${body.twitter}
    user_linkedin = '${body.linkedin}'
    user_behance = '${body.behance}'

    where id = ${id}`
    db.connection.query(sql, (err, res) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'record updated successfully',
            data: result
        })
    })
})

//DELETE
app.delete('/ud/:id', (res, req) => {
    let id = req.params.id
    let sql = `delete from user_details where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'Record has been deleted',
            data: result
        })
    })
})

//------------------------------------------SERVICE_POST------------------------------------------

//GET ALL
app.get('/sp', (req, res) => {
    const sql = `select * from service_post`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            data: result
        })
    })
})

//GET BY ID
app.get('/sp/:id', (req, res) => {
    let id = req.params.id
    const sql = `select * from service_post where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: error.message
        })
    })
})

//POST TODO:
app.get('/sp', (req, res) => {
    let wrap = req.body

    let sName = wrap.name
    let sPhoto = wrap.photo
    let sDesc = wrap.desc
    let sPrice = wrap.price
    let SCat = wrap.cat

    let sql = `insert into service_post (
        service_photo,
        service_name, 
        servie_description,
        service_price,
        service_category) values (
            '${sPhoto}',
            '${sName}',
            '${sDesc}',
            '${sPrice}',
            '${SCat}'
        ) where id = `
    db.connection.query(sql, (error, result) => {
        if(error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(201).json({
            error: false,
            message: 'Post has been created',
            data: result
        })
    })
})

//PUT
app.put('/sp', (req, res) => {
    let id = req.params.id

    let wrap = req.body

    let sql = `update service_post set 
    service_photo = '${body.photo}', 
    service_name = '${body.name}', 
    service_description = '${body.description}', 
    service_price = '${body.price}', 
    service_category = '${body.category}, 

    where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if(error) {
            return res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'Record has been updated',
            data: result
        })
    })
})

//DELETE
app.delete('/sp/:id', (res, req) => {
    let id = req.params.id
    let sql = `delete from service_post where id = ${id}`
    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(200).json({
            error: false,
            message: 'Record has been deleted',
            data: result
        })
    })
})

const PORT = 5000
app.listen(PORT, () => {
    console.log('Server is up')
})
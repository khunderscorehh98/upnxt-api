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
app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    let sql = `select * from user_cred where user_cred_id = ${id}`
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
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let sql = `update user_cred set 
    email = '${body.email}', 
    password = '${body.password}' 
    where user_cred_id = ${id}`
    db.connection.query(sql, (error, result) => {
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
app.delete('/user/:id', (req, res) => {
    let id = req.params.id
    let sql = `delete from user_cred where user_cred_id = ${id}`
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
    let id = req.params.id
    const sql = `select * from user_details where user_details_id = ${id}`
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

//POST TODO:
app.post('/ud', (req, res) => {
    let wrap = req.body

    let [uName, uMobile, uDes, uPhoto, uCat, uPort, uFB, uIG, uTW, uLI, uBE, uCred] =
    [wrap.user_name, wrap.user_mobile, wrap.user_description, wrap.user_photo, wrap.user_category, wrap.user_portfolio,
    wrap.user_fb, wrap.user_ig, wrap.user_twitter, wrap.user_linkedin, wrap.user_behance, wrap.user_cred_id]
    
    let sql = `insert into user_details 
    (user_cred_id,
    user_name,
    user_mobile,
    user_description,
    user_photo,
    user_category,
    user_portfolio,
    user_fb,
    user_ig,
    user_twitter,
    user_linkedin,
    user_behance) values 
    ('${uCred}', '${uName}', '${uMobile}', '${uDes}', '${uPhoto}', '${uCat}', '${uPort}', '${uFB}', '${uIG}', '${uTW}', '${uLI}', '${uBE}')`
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
    user_name = '${body.user_name}', 
    user_mobile = '${body.user_mobile}', 
    user_description = '${body.user_description}', 
    user_photo = '${body.user_photo}', 
    user_category = '${body.user_category}', 
    user_portfolio = '${body.user_portfolio}',
    user_fb = '${body.user_fb}',
    user_ig = '${body.user_ig}',
    user_twitter = '${body.user_twitter}',
    user_linkedin = '${body.user_linkedin}',
    user_behance = '${body.user_behance}'

    where user_details_id = ${id}`
    db.connection.query(sql, (error, result) => {
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
app.delete('/ud/:id', (req, res) => {
    let id = req.params.id
    let sql = `delete from user_details where user_details_id = ${id}`
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
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


//Get All
app.get('/user', (req, res) => {
    const sql = `select * from user`
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

// Get by ID
app.get('/user/:id', (req, res) => {
    let id = req.params.id
    const sql = `select * from user where id = ${id}`
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

// Post
app.post('/user', (req, res) => {
    let wrap = req.body

    let uName = wrap.name
    let uAddress = wrap.address
    let uContact = wrap.contact

    const sql = `insert into user (name, address, contact) values ('${uName}', '${uAddress}', '${uContact}')`

    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
                error: true,
                message: error.message
            })
        }
        res.status(201).json({
            error: false,
            message: 'Record has been added',
            data: result
        })
    })
})

// Put
app.put('/user/:id', (req, res) => {
    let id = req.params.id

    //wrap
    let wrap = req.body

    let uName = wrap.name
    let uAddress = wrap.address
    let uContact = wrap.contact

    let sql = `update user set name = '${uName}', address = '${uAddress}', contact = ${uContact} where id = ${id}`

    db.connection.query(sql, (error, result) => {
        if (error) {
            res.status(500).json({
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

// Delete
app.delete('/user/:id', (req, res) => {
    let id = req.params.id
    let sql = `delete from user where id = ${id}`
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


//------------------------------------------------USER------------------------------------------------

//GET
app.get('/users', (res, req) => {
    const sql = 'select * from users'
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
app.get('/users/:id', (res, req) => {
    let id = req.params.id
    const sql = `select * from users where id = ${id}`
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
app.post('/users', (res, req) => {
    let wrap = req.body

    let uid = wrap.id
    let uName = wrap.name
    let uPass = wrap.password
    let uEmail = wrap.email
    let uSkill = wrap.skills
    let uMobile = wrap.mobile
    let uSocialMedia = wrap.sm
    
    let sql = `insert into users (id, name, password, email, skills, mobile, sm, )`
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

//DELETE
app.delete('/users/:id', (res, req) => {
    let id = req.params.id
    let sql = `delete from users where id = ${id}`
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

//POST
app.get('/sp', (req, res) => {
    let wrap = req.body

    let uid = wrap.uid
    let sName = wrap.name
    let sDesc = wrap.desc
    let sPrice = wrap.price
    let SCat = wrap.cat

    let sql = `insert into service_post ()`
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
//DELETE

const PORT = 5000
app.listen(PORT, () => {
    console.log('Server is up')
})
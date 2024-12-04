const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
const dbconfig = require('./dbconfig')
const conn = mysql.createConnection(dbconfig);
const cors = require('cors')

let corsOption = {
    origin: 'http://localhost:8080',
    credential: true
}

app.use(cors(corsOption));

app.listen(port, () => {
    console.log("server open");
    // conn.query("select id from user_arbitrator;", function(err, row) {
    //     if(err) throw err;
    //     console.log(row);
    // })
});


app.get("/", async(req, res) => {
    var state = [{count: 0}, {count: 0}, {count: 0}, {count: 0}, {count: 0}];
    
    conn.query
    ("select experience as 'experience', count(*) as count from (select case when experience_year between 0 and 1 then '0-1' when experience_year between 2 and 3 then '2-3' when experience_year between 4 and 5 then '4-5' when experience_year between 6 and 10 then '6-10' else 'more than 10' end as experience from user_arbitrator )A group by A.experience order by experience asc;", function(err, row) {
        if(err) throw err;
        state[0].count = row[0].count;
        state[1].count = row[1].count;
        state[2].count = row[2].count;
        state[3].count = row[3].count;
        state[4].count = row[4].count;
        
        console.log(row);
        console.log("state: " + JSON.stringify(state));
        res.send(state);
        // console.log(state);

    }) //이전 코드
    // try {
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where experience_year between 0 and 1;"
    //         , function(err, row) {
    //             state[0].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where experience_year between 2 and 3;"
    //         , function(err, row) {
    //             state[1].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where experience_year between 4 and 5;"
    //         , function(err, row) {
    //             state[2].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })

    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where experience_year between 6 and 10;"
    //         , function(err, row) {
    //             state[3].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })

    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where experience_year > 10;"
    //         , function(err, row) {
    //             state[4].count = JSON.stringify(row[0].count);
    //             // console.log('experience end' + JSON.stringify(state));
    //             // res.send(state);
    //         })
    // }
    // catch(error) {
    //     console.log(error);
    // }
});

app.get("/result", async (req, res) => {
    var state = [{count: 0}, {count: 0}, {count: 0}, {count: 0}, {count: 0}];
    // try {
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where result_amount between 0 and 5;"
    //         ,function(err, row) {
    //             // console.log(state);
    //             state[0].count = JSON.stringify(row[0].count);
    //         })
    
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where result_amount between 6 and 10;"
    //         ,function(err, row) {
    //             state[1].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })
    
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where result_amount between 11 and 15;"
    //         ,function(err, row) {
    //             state[2].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where result_amount between 16 and 20;"
    //         ,function(err, row) {
    //             state[3].count = JSON.stringify(row[0].count);
    //             // console.log(state);
    //         })
    //     await conn.query(
    //         "select count(*) as count from user_arbitrator where result_amount > 20;"
    //         ,function(err, row) {
    //             state[4].count = JSON.stringify(row[0].count);
    //         //     console.log(state);
    //             console.log('result end' + JSON.stringify(state));
    //             res.send(state);
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }

    });


app.get("/rating", (req, res) => {
    var state = [{count: 0}, {count: 0}, {count: 0}, {count: 0}, {count: 0}];
    conn.query("SELECT count(*) as count from user_arbitrator group by rating order by rating asc", function(err, row) {
        if(err) throw err;
        for(var i = 0; i < state.length; i++) {
            state[i]= row[i].count;
        }

        res.send(state);
        // console.log((state));
    })
});
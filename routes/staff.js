
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const { pool } = require('../config/dbConnection');

router.post('/', async (req, res) => {

    const { email, password } = req.body;
    try {
        const staff = await pool.query(`SELECT * FROM userRoles WHERE email= $1;`, [email])
        const role = staff.rows[0].role;

        if (staff.rows.length === 0) {
            res.status(401).json({
            error: "Access denied.",
            });
            console.log("Access denied.");
        }
        else {
        bcrypt.compare(password, staff.rows[0].password, (err, result) => { 
            if (err) {
            res.status(500).json({
            error: "Server error",
            });
        } 
        else if (result === true) { 
            // const sampleId = await pool.query(`SELECT * FROM sampleSubmission WHERE email= $1;`, [email])
            req.session.staffRole = role;
            req.session.staffId = staff.rows[0].staff_id;
            if(role === 'labTechnician'){
            // res.redirect('dashboardPage.ejs')
            res.status(200).json({
                message: "Welcome labTechnician",
                // token: token
                });
                console.log("Signed in successfully");
            }
            else if (role === 'seniorEngineer'){
                    
            // res.redirect('dashboardPage.ejs')
            res.status(200).json({
                message: "Welcome seniorEngineer",
                // token: token
                });
                console.log("Signed in successfully");
            }
            else if(role === 'RTDAManager'){
                        
            // res.redirect('dashboardPage.ejs')
            res.status(200).json({
                message: "Welcome RTDAManager",
                // token: token
                });
                console.log("Signed in successfully");
                console.log(req.session);
            }

            else if (role === 'labDirector'){
                    
                // res.redirect('dashboardPage.ejs')
                res.status(200).json({
                    message: "Welcome labDirector",
                    // token: token
                    });
                    console.log("Signed in successfully");
                }

            else if(role === 'admin'){
                        
                // res.redirect('/staff/registration')
                res.status(200).json({
                    message: "Welcome Super Admin",
                    // token: token
                    });
                    console.log("Signed in successfully");
                    // console.log(req.session);
                }
            else{
                res.status(200).json({
                    message: "You are not authorized",
                    // token: token
                    });
                    console.log("You are not authorized");
            }

        }
        else {
        
        if (result !== true)
        res.status(400).json({
        error: "Sorry, you are not allowed",
        });
        console.log("Sorry, you are not allowed");
        }
        })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
        error: "Database error occurred while signing in!",
        });
        };
    });

    module.exports = router;

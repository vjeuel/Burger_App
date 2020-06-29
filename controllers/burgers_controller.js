const express = require("express");
const router = express.Router();

const burgerModel = require("../models/burger.js");
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
   burger.all(data => {
      const hbsObject = {
         burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
   });
});

router.post("/api/burgers", (req, res) => {
   burger.create([
      "name", "devoured"
   ], [
      req.body.name, req.body.devoured
   ], result => {
      res.jsom({ id: result.insertId });
   });
});

router.put("/api/burgers/:id", (req, res) => {
   const condition = "id = " + req.params.id;

   console.log("condition", condition);
   
   burger.update({
      devoured: req.body.devoured
   }, condition, result => {
      if (result.changeRows == 0) {
         return res.status(404).end();
      } else {
         res.status(200).end();
      }
   });
});

router.delete("/api/burgers/:id", (req, res) => {
   const condition = "id = " + req.params.id;

   burger.delete(condition, result => {
      if (result.affectedRows == 0) {
         return res.status(404).end();
      } else {
         res.status(200).end();
      }
   });
});

module.exports = router;
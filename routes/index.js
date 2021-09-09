const db = require("../database");
const express = require("express");
const router = express.Router();

/* GET home page. */
router
  .route("/")
  .get(function (req, res, next) {
    db.query("SELECT * FROM staffs", (err, result) => {
      if (err) {
        res.status(400).json({ message: "failed" });
      }
      const array = [];
      let totalTax = (rate = first = firstTax = 0);
      result.map((r) => {
        let salary = r.monthly_salary * 12;
        salary = parseInt(salary)
        if (salary <= 5000) {
          totalTax = 0;
        } else if (salary <= 20000) {
          rate = 0.01;
          first = 5000;
          firstTax = 0;
        } else if (salary <= 35000) {
          rate = 0.03;
          first = 20000;
          firstTax = 150;
        } else if (salary <= 50000) {
          rate = 0.08;
          first = 35000;
          firstTax = 600;
        } else if (salary <= 70000) {
          rate = 0.14;
          first = 50000;
          firstTax = 1800;
        } else if (salary <= 100000) {
          rate = 0.21;
          first = 70000;
          firstTax = 4600;
        } else if (salary <= 250000) {
          rate = 0.24;
          first = 100000;
          firstTax = 10900;
        } else if (salary <= 400000) {
          rate = 0.245;
          first = 250000;
          firstTax = 46900;
        } else if (salary <= 600000) {
          rate = 0.25;
          first = 400000;
          firstTax = 83650;
        }

        nextTax = (salary - first) * rate;
        totalTax = firstTax + nextTax;
        tax_payable = array.push({
          name: r.name,
          salary: salary,
          tax_payable: totalTax,
        });
      });

      res.status(200).json({ array });
    });
  })
  .put(function (req, res, next) {
    console.log(req.body);

    db.query(
      "UPDATE staffs SET monthly_salary = ? WHERE name = ?",
      [req.body.monthly_salary, req.body.name],
      (err, result) => {
        if (err) {
          res.status(400).json({ message: "failed" });
        }

        res.status(200).json({ message: "update success" });
      }
    );
  });

module.exports = router;

var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllProducts();
});

function queryAllProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].product_department + " | " + res[i].price + " | " + res[i].quantity);
    }
    console.log("-----------------------------------");
    questions(res)

  });
}

function questions(res) {
  inquirer.prompt([
    {
      name: "product",
      message: "What is the ID of the product you would like to buy?"
    },
    {
      name: "units",
      message: "How many blast masters would you like to add to your collection?"
    }
  ]).then(function (ans) {

    for (var i = 0; i < res.length; i++) {
      if (ans.product == res[i].id) {
        console.log("You've productSelection", res[i].product_name);
        var productSelection = res[i];
        if (productSelection.quantity > ans.units) {
          console.log("hi")
          productSelection.quantity = productSelection.quantity - ans.units;
          updateItems(productSelection);
        }
        else {
          console.log("Insufficient quantity, there are only", productSelection.quantity, " remaining");
          connection.end();
        }
      }
    }
  })
}

function updateItems(productSelection) {
  console.log("Updating your blast master quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: parseFloat(productSelection.quantity)
      },
      {
        id: parseFloat(productSelection.id)
      }
    ],
    function (err, resp) {
      if (err) throw err;
      console.log(resp.affectedRows + " items updated!\n");
    }
  );
  console.log(query.sql);
};



var cart = [];
var cart2 = [];
function add() {
  var company = document.getElementById("company").value;
  var model = document.getElementById("model").value;
  var memory = document.getElementById("memory").value;
  var price = document.getElementById("price").value;
  var quant = document.getElementById("quantity").value;
  var Ratingval=document.getElementById("rates").value;

  mytable =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";

  var product = {
    Comp: company,
    Mod: model,
    Mem: memory,
    Price: price,
    Quantity: quant,
    Rating:Ratingval,
  };
  cart.push(mytable);
  cart2.push(product);

  myDD="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD+="<option>"+element.Comp+"</option>";
  });
  myDD+="</select>"
  document.getElementById('bill').innerHTML=myDD;

  myDD2="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD2+="<option>"+element.Comp+"</option>";
  });
  myDD2+="</select>"
  document.getElementById('Item').innerHTML=myDD2;

  myDD3="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD3+="<option>"+element.Comp+"</option>";
  });
  myDD3+="</select>"
  document.getElementById('sel').innerHTML=myDD3;
  display();
 
}
function display() {
  mytable =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";

  cart2.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.Comp +
      "</td><td>" +
      element.Mod +
      "</td><td>" +
      element.Mem +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      "</td><td>"+
    '<input type="checkbox" name="field" value="${index}"/></td><td>'+
      element.Rating;
    "</td></tr>";
  });
  mytable += "</table>";

  document.getElementById("table1").innerHTML = mytable;
}

function sort() {
  var st = document.getElementById("sort").value;
  var sel = document.getElementById("sortby").value;
  
  if (sel == "company") {
    if (st == "ascending") {
      cart2.sort((a, b) => {
        if (a.Comp < b.Comp) {
          return -1;
        }
        if (a.Comp > b.Comp) {
          return 1;
        }
        return 0;
      });
    } else if (st == "descending") {
      cart2.sort((a, b) => {
        if (a.Comp > b.Comp) {
          return -1;
        }
        if (a.Comp < b.Comp) {
          return 1;
        }
        return 0;
      });
    }
  } else if (sel == "model") {
    if (st == "ascending") {
      cart2.sort((a, b) => {
        if (a.Mod < b.Mod) {
          return -1;
        }
        if (a.Mod > b.Mod) {
          return 1;
        }
        return 0;
      });
    } else if (st == "descending") {
      cart2.sort((a, b) => {
        if (a.Mod > b.Mod) {
          return -1;
        }
        if (a.Mod < b.Mod) {
          return 1;
        }
        return 0;
      });
    }
  } else if (sel == "mem") {
    if (st == "ascending") {
      cart2.sort((a, b) => a.Mem - b.Mem);
    } else if (st == "descending") {
      cart2.sort((a, b) => b.Mem - a.Mem);
    }
  } else if (sel == "price") {
    if (st == "ascending") {
      cart2.sort((a, b) => a.Price - b.Price);
    } else if (st == "descending") {
      cart2.sort((a, b) => b.Price - a.Price);
    }
  }

  display();
}

var invoice = [];
function add_cart() {
  var des = document.getElementById("bill").value;
  var quanti = document.getElementById("quantityy").value;
  var am = (document.getElementById("price").value) * (quanti);

  table2 =
    "<table><tr><th>Bill</th><tr><th>Description</th><th>Quantity</th><th>Amount(Rs)</th></tr>";
  var bill = {
    Description: des,
    Quantity: quanti,
    Amount: am,
  };
  invoice.push(bill);

  invoice.forEach((element) => {
    table2 +=
      "<tr><td>" +
      element.Description +
      "</td><td>" +
      element.Quantity +
      "</td><td>" +
      element.Amount +
      "</td><td>" +
      "  " +
      "</td></tr>";
  });
  table2 += "</table>";
  document.getElementById("table2").innerHTML = table2;
}

function upFun(){
  let upval=document.getElementById("Item").value;
  let qty=document.getElementById("new").value;
  cart2.forEach(element => {
    if(element.Comp==upval){
      element.Quantity=qty;
    }
  });
}

function updateItems(){
  upFun();
  display();
}

function rateFun(){
  let selRate=document.getElementById("sel").value;
  let rates=document.getElementById("rates").value;
  cart2.forEach(element => {
    if(element.Comp==selRate){
      element.Rating=rates;
    }
  });
  display();
}

function delFun(){
  let del =document.querySelectorAll('input[name="field"]:checked');
  let check=[];
  del.forEach(element => {
    check.push(checkbox.value)
  });
  check.forEach(element => {
    cart2.splice(element,1)
  });
  display();
}



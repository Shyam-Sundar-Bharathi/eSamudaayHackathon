// const dop = document.getElementsByClassName('dropoption');

// const con = document.getElementsByClassName("form_control");
// const methods = require("methods");
// const { stringify } = require("querystring");
//  con.defaultValue= Math.floor(Math.random() * 10001);

// var tran = document.getElementById("tran");
// tran.defaultValue = 100;

// const pro = document.getElementsByClassName('product');

// let x = Math.random();
// Returns a random integer from 0 to 100:

// let p = Math.floor(Math.random() * 10001);
// let text = p.toString();
// console.log(text);

// let  k = parseInt(x);
// console.log(k);
// let text = k.toString();
// console.log(text);
// Math.floor(Math.random() * 10001).toString()

const btt = document.getElementById("submitbtn");

let url = 'https://api.test.esamudaay.com/external/v1/ondc/retail/bpp/search';
console.log(url);
const re =  
fetch(url,{
        method: "POST",
        body: {
          context: {
            city: "std:080",
            action: "search",
            bap_id: "ondc.paytm.com",
            domain: "nic2004:52110",
            bap_uri: "https://1824-45-112-146-2.ngrok.io",
            country: "IND",
            timestamp: "2022-07-28T08:00:48.462Z",
            message_id: "1658995248462",
            core_version: "1.0.0",
            transaction_id: "jhjgyfjnjhj",
          },
          message: {
            intent: {
              payment: {
                "@ondc/org/buyer_app_finder_fee_type": "percent",
                "@ondc/org/buyer_app_finder_fee_amount": 3,
              },
              fulfillment: {
                type: "Delivery",
              },
            },
          },
        },
      }).then(res => console.log(res.body));


btt.addEventListener("click", re);

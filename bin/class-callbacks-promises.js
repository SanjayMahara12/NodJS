
const regular = function (a, b) {
    return a + b;
};
console.log(regular(2, 3));

const fluent = (x, y) => {
    return x + y;
};
console.log(fluent(3, 4));
//--------------Callback---------------------------
function myCallbackFunction(error, data) {
    if (error) {
        console.log("An error occurred:", error);
    } else {
        console.log("Data received:", data);
    }
};

function myFunction(name, id, callback) {
    // Perform some task
    let error = null;
    let data = '';
    if (name !== "sanjay") {
        error = "Your name has to be sanjay";
    } else {
        data = `Simple Callback:Hello Sanjay, your account id ${id} is linked with the credit card. Thanks`;
    }
    // Call the callback function
    callback(error, data);
};

myFunction("sanjay", 1, myCallbackFunction);

//--------------------Sync Callback-------------------
//nodejs create a sample code with use of:-
//const backcall = bank.makecall(banknumber,mobilenumber,(error,data)=>{});

// Define a Bank class
class HDFCBank {
    //makeCall(bankNumber, mobileNumber, timeout, callback) //to set the timeout from outside
    makeCall(bankNumber, mobileNumber, callback) {
        // Simulate a call to the bank's server
        setTimeout(() => {
            if (bankNumber === "1234" && mobileNumber === "9999999999") {
                callback(null, "HDFC:Transaction successful");
            } else {
                callback("HDFC:Invalid bank number or mobile number");
            }
        }, 2000); // Simulate a 2-second delay
    }
};

// Create an instance of the Bank class
const bank = new HDFCBank();

// Define the bank number and mobile number
const hdfc_bankNumber = "1234";
const mobileNumber1 = "9999999999";
// Make the call to the bank's server with a callback function
const backCall = bank.makeCall(hdfc_bankNumber, mobileNumber1, (error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

//--------------------ASync Callback--------------------

// Define a Bank class
class ICICIBank {
    makeCall(bankNumber, mobileNumber, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (bankNumber === "0124254272123" && mobileNumber === "+915637632834") {
                    resolve("ICICI:Welcome,cheque passed.Transaction successful");
                } else {
                    reject("ICICI:Invalid bank number or mobile number");
                }
            }, timeout);
        });
    }
};

// Create an instance of the Bank class
const mybank = new ICICIBank();
// Define the bank number, mobile number, and timeout
const icici_bankNumber = "0124254272123";
const mobileNumber2 = "+915637632834";
const timeout = 3000; // 3-second timeout (adjust to your needs)
// Make the call to the bank's server asynchronously
async function makeBankCall() {
    try {
        const data = await mybank.makeCall(icici_bankNumber, mobileNumber2, timeout);
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}
// Call the asynchronous function
makeBankCall();
//-------class + callback:Promise->resolve,reject,then--------------
class Atm {

    constructor(accountnumber, amount) {
        this.accountnumber = accountnumber;
        this.amount = amount;
    };
    withdraw() {
        return new Promise((resolve, reject) => {
            // Simulate some asynchronous operation
            setTimeout(() => {
                if (this.accountnumber === "123456789") {
                    resolve("Success! amount credited is " + this.amount);
                } else {
                    reject("Error: credit is not 'success'");
                }
            }, 2000);
        });
    }
}

// Usage:
const myClass = new Atm("123456789",1200);
myClass.withdraw()
    .then((result) => {
        console.log(result); // Output: Success! Param2 is hello
    })
    .catch((error) => {
        console.error(error);
    });
//-----------------------------------------------------------------
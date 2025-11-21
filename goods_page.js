//https://raw.githubusercontent.com/SashaCoders/CarMXshop//main/db.json
//https://github.com/SashaCoders/CarMXshop/blob/main/db.json

let UrlW = `https://raw.githubusercontent.com/SashaCoders/CarMXshop//main/db.json`
let id = ""
let name = ""
let surname = ""
let Car = ""
let balance = ""



fetch(UrlW)
    .then(async function (res) {
        let data = await res.json();
        console.log(data);
    });






 




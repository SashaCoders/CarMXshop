//https://raw.githubusercontent.com/SashaCoders/CarMXshop//main/db.json
//https://github.com/SashaCoders/CarMXshop/blob/main/db.json

let UrlW = `https://raw.githubusercontent.com/SashaCoders/CarMXshop//main/db.json`
// let id = ""
// let name = ""
// let surname = ""
// let Car = ""
// let balance = ""



// fetch(UrlW)
//     .then(async function (res) {
//         let data = await res.json();
//         console.log(data);
//     });

let site = document.getElementById("Dash");
fetch(UrlW)
    .then(async function (res) {
        let data = await res.json();
        console.log(data);
        draw(data);
    });

function draw(list) {

    list.users.forEach(user => {
        site.innerHTML += `
   <div class="card">
        <div class="content">
        
      
          <p>id: ${user.id}</p>
          <h2>name: ${user.name}</h2>
          <p>surname: ${user.surname}</p>
          <p>car: ${user.Car}</p>
          <p>balance: ${user.balance}</p>
        </div>
        <div class="buy"><a href="#">Buy</a></div>
      </div>`
    });


}








let myBtn = document.getElementById("dataBtn");
let fetchBtn = document.getElementById("fetchBtnData");

// function getData(){
//     const url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// getData();

// myBtn.addEventListener('click', getData);
// fetchBtn.addEventListener('click', getData);

// function postData() {
//   const url = "https://dummy.restapiexample.com/api/v1/create";
//   const data = '{"name":"roshan","salary":"123","age":"23"}'

//   const params = {
//     method: "post",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(data)
//   };

//   fetch(url, params).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:" + error))
// }
// postData();

// myBtn.addEventListener('click', postData);
// fetchBtn.addEventListener('click', postData);

async function getNewData() {
  try {
    const response = await fetch("https://api.github.com/users");
    if (!response.ok) {
      throw new Error("HTTPS error! status: ${response.status}");
    }
    const data = await response.json();
    console.log(data);
    
  } catch (error) {
    console.error("Error fetching data :" + error);
  }
}

getNewData();
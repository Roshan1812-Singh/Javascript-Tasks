console.log("AJAX Tutorial in One video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickandler);

function buttonClickandler() {
  console.log("You have clicked fetchBtn");

  // Instantiation of the object
  const xhr = new XMLHttpRequest();

  // Open the request
  //   GET Request
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  //   POST Request
  xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "applicatiom/x-www-form-urlencoded");

  // Checking the progress (Optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // When the request is complete or response is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };

  // send the request
  params = `{"name":"test1818","salary":"123","age":"23"}`;
  xhr.send(params);
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("You have clicked fetchBtn");

  // Instantiation of the object
  const xhr = new XMLHttpRequest();

  // Open the request
  //   GET Request
  xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);

  // When the request is complete or response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
    } else {
        console.log("Some error occured!");
    }
  };

  // send the request
  xhr.send();

  console.log("We are done fetching Employee Data ");
}

Promise
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

    const url = "http://localhost:3000/toys/"
    
    
    const renderToys = toys => {
      for(const toyObj of toys){
        renderToy(toyObj)
      }
    }


    function fetchToys() {
      fetch(url)
      .then(response => response.json())
      .then(toys => renderToys(toys))
    }


    
    function renderToy(toyObj) {
      let toyCard = document.createElement("div")
      let toyCollection = document.getElementById('toy-collection')
      toyCard.setAttribute('class', 'card')
      toyCard.innerHTML = `
        <h2>${toyObj.name}</h2>
        <img src="${toyObj.image}" class="toy-avatar" />
        <p>${toyObj.likes} likes</p>
        <button class="like-btn">Like <3</button>
      `
      toyCollection.append(toyCard)
    }


    
    function submitHandler() {
      const formDiv = document.querySelector('.add-toy-form')
      formDiv.addEventListener('submit', function(e) {
        e.preventDefault()
        
        let toyPost = {
          name: formDiv["name"].value, 
          image:  formDiv["image"].value,
          likes: 0 }
          
          // debugger
      const options = {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify(toyPost)
        }

        fetch(url, options)
        .then(response => response.json())
        .then(toy => renderToy(toy))

    })

  }




    fetchToys()
    // postToy()
    submitHandler()
  




















});

//1: Make a get request to Andy's Toys (fetch) ---
//2: Get the data from the fetch request ---
//3: Create card element with Data from fetch request --
//4: Make post request to database 
//5: Make patch request to database
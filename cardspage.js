function myFunction(){
let loop = false
  createRadioButton();
  createCard();
  
  function createCard(){
    var courseDetails = {
      "course":[
        {
          "title":"Computer",
          "author":"Duckling",
          "description" : "This course gives the brief note about the title",
          "Date":"Apr 28 - Apr 30"
        },
        {
          "title":"Geometry",
          "author":"Pythagoras",
          "description" : "This course gives the brief note about the title",
          "Date":"Apr 28 - Apr 30"
        },
        {
          "title":"The Earth",
          "author":"God",
          "description" : "This course gives the brief note about the title",
          "Date":"Apr 1 - Apr 30"
        },
        {
          "title":"Warrior",
          "author":"Alexander",
          "description" : "This course gives the brief note about the title",
          "Date":"Apr 1 - Apr 30"
        }
      ]
    }

    
    courseDetails.course.forEach(loopCards);

    console.log(courseDetails)
  }

function loopCards(course,index){
  console.log(loop)
  if(loop == true){
    console.log(prev)
      removeCards();
  }
  var mainDiv = document.getElementById("main")
  var cardDiv = document.createElement("div")
    cardDiv.setAttribute("id","cardDiv")
    var cardTitleDiv = document.createElement("div")
    var cardDescription = document.createElement("div")
    var cardFooter = document.createElement("div")
    cardTitleDiv.setAttribute("id","titleDiv")
    cardDescription.setAttribute("id","bodyDiv")
    cardFooter.setAttribute("id","footerDiv")
  console.log(course);
  var courseTitle = document.createElement("h2")
  courseTitle.innerHTML=course.title
  var courseAuthor = document.createElement("h4")
  courseAuthor.innerHTML=course.author
  var courseDescription = document.createElement("p")
  courseDescription.innerHTML=course.description
  var courseDuration = document.createElement("p")
  courseDuration.innerHTML=course.Date
  if((loop == false)||(prev === "All")){
    cardTitleDiv.appendChild(courseTitle)
    cardTitleDiv.appendChild(courseAuthor)
    cardDescription.appendChild(courseDescription)
    cardFooter.appendChild(courseDuration)
    cardDiv.appendChild(cardTitleDiv)
    cardDiv.appendChild(cardDescription)
    cardDiv.appendChild(cardFooter)
    mainDiv.appendChild(cardDiv)
    document.body.appendChild(mainDiv)
  }
  else if((loop == true)&&(course.title === prev)){
    cardTitleDiv.appendChild(courseTitle)
    cardTitleDiv.appendChild(courseAuthor)
    cardDescription.appendChild(courseDescription)
    cardFooter.appendChild(courseDuration)
    cardDiv.appendChild(cardTitleDiv)
    cardDiv.appendChild(cardDescription)
    cardDiv.appendChild(cardFooter)
    mainDiv.appendChild(cardDiv)
    document.body.appendChild(mainDiv)
  }
  else{
    document.getElementById("cardDiv").style.backgroundColor="gray";
    document.body.appendChild(cardDiv)
  }
 
}


  function createRadioButton(){
    var courses = ["All","Computer","Mathematics","Science"]
    var radioList = document.getElementById("nav-radio")
    var radioDiv = document.createElement("form")
    var radioForm = document.createElement("form")
    var radioButtonDiv = document.createElement("div")
    radioDiv.setAttribute("name","myForm")
  radioDiv.setAttribute("id","radioDiv")
  courses.forEach(loop);

  function loop(item,index){
    var radioButton = document.createElement("input")
    radioButton.setAttribute("type","radio")
    radioButton.setAttribute("name","course")
    radioButton.setAttribute("value",item)
    if(index === 0){
      radioButton.setAttribute("checked","checked")
    }
    document.body.appendChild(radioButton)
    var label = document.createElement("label")
    label.innerHTML = item
    radioDiv.appendChild(radioButton)
    radioDiv.appendChild(label)
    radioForm.appendChild(radioDiv)
    radioList.appendChild(radioDiv)
    document.body.appendChild(radioForm)
  }

  }
  var rad = document.myForm.course;
  let prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this.value;
            loop = true
            createCard();
        }
    });
}

function removeCards(){
  var deleDiv = document.getElementById("cardDiv")
  deleDiv.parentNode.removeChild(deleDiv)
}

}
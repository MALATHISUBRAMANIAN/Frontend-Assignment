function myFunction(){
let loop = false
  createRadioButton();
  createCard();
  
  function createCard(){
    var courseDetails = {
      "course":[
        {
          "title":"Java 1",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-08-24",
          "end_date":"2020-08-25",
          "estimated_workload":"4",
          "category":"Computer"
        },
        {
          "title":"Dental care 2",
          "instructor_name":"Dr.Sebastin",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-07-27",
          "end_date":"2030-06-15",
          "estimated_workload":"4",
          "category":"Science"
        },
        {
          "title":"Surgeon 3",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Science"
        },
        {
          "title":"Geometry 4",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Mathematics"
        },
        {
          "title":"Computer 5",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Computer"
        },
        {
          "title":"Computer 6",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Computer"
        },
        ,
        {
          "title":"Computer 7",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Computer"
        },
        {
          "title":"Computer 8",
          "instructor_name":"Duckling",
          "description" : "This course gives the brief note about the title",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Computer"
        }
      ]
    }
   
    courseDetails.course.forEach(loopCards);
  }

function loopCards(course,index){
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var mainDiv = document.getElementById("main")
  var cardDiv = document.createElement("div")
    cardDiv.setAttribute("id","cardDiv")
    var cardTitleDiv = document.createElement("div")
    var cardDescription = document.createElement("div")
    var cardFooter = document.createElement("div")
    cardTitleDiv.setAttribute("id","titleDiv")
    cardDescription.setAttribute("id","bodyDiv")
    cardFooter.setAttribute("id","footerDiv")
  var courseTitle = document.createElement("h2")
  courseTitle.innerHTML=course.title
  var courseAuthor = document.createElement("h4")
  courseAuthor.innerHTML=course.instructor_name
  var courseDescription = document.createElement("p")
  courseDescription.innerHTML=course.description
  var registration = document.createElement("p")
  registration.setAttribute("id","footPara")
  var courseStartDate = document.createElement("p")
  courseStartDate.setAttribute("id","footPara")
  var courseduration = document.createElement("p")
  courseduration.setAttribute("id","footPara")
  var begningDate= new Date(course.start_date)
  var finishingDate= new Date(course.end_date)
  if(new Date()<begningDate){
    registration.innerHTML="Pre-registration"
  }
  else if(new Date > begningDate && new Date() < finishingDate){
    registration.innerHTML="On going"
  }
  else{
    registration.innerHTML="Completed"
  }
  var weeks = (finishingDate.getTime() - begningDate.getTime()) / 1000;
  diff =(Math.abs(Math.round(weeks/ (60 * 60 * 24 * 7))));
  var startDate = begningDate.getDate()
  var startMonth = begningDate.getMonth()
  var endDate = finishingDate.getDate()
  var endMonth = finishingDate.getMonth()
  courseStartDate.innerHTML=months[startMonth]+" "+startDate +" - " + months[endMonth]+ " " +endDate
  courseduration.innerHTML =diff+ "week course," + course.estimated_workload + " hrs per day"
  if((loop == false)||(prev === "All")){
    cardTitleDiv.appendChild(courseTitle)
    cardTitleDiv.appendChild(courseAuthor)
    cardDescription.appendChild(courseDescription)
    cardFooter.append(registration)
    cardFooter.appendChild(courseStartDate)
    cardFooter.appendChild(courseduration)
    cardDiv.appendChild(cardTitleDiv)
    cardDiv.appendChild(cardDescription)
    cardDiv.appendChild(cardFooter)
    mainDiv.appendChild(cardDiv)
    document.body.appendChild(mainDiv)
    document.getElementById("footPara").style.marginTop ="0%"
  document.getElementById("footPara").style.marginBottom ="0%"
  }
  else if((loop == true)&&(course.category === prev)){
    cardTitleDiv.appendChild(courseTitle)
    cardTitleDiv.appendChild(courseAuthor)
    cardDescription.appendChild(courseDescription)
    cardFooter.append(registration)
    cardFooter.appendChild(courseStartDate)
    cardFooter.appendChild(courseduration)
    cardDiv.appendChild(cardTitleDiv)
    cardDiv.appendChild(cardDescription)
    cardDiv.appendChild(cardFooter)
    mainDiv.appendChild(cardDiv)
    document.body.appendChild(mainDiv)
  }
  else{
    //document.getElementById("cardDiv").style.display="none";
    document.body.appendChild(cardDiv)

  }
 
}


  function createRadioButton(){
    var courses = ["All","Computer","Mathematics","Science"]
    var radioList = document.getElementById("navRadio")
    var radioDiv = document.createElement("form")
    var radioForm = document.createElement("form")
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
            var deleDiv = document.getElementById("main")
            deleDiv.parentNode.removeChild(deleDiv)
            var main = document.createElement("div")
            main.setAttribute("id","main")
            document.body.appendChild(main)
            createCard();
        }
    });
}



}
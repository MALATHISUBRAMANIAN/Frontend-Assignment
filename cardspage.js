let loop = false

//RadioButton value
let prev = "All"

//keyword value
let keywordValue = ""

//number of available courses
let numberOfOpenCourses = 0

//myfunction is used to create and load the data in the card, radiobutton
function myFunction(){

  //used to create the readioButton
  createRadioButton();

  //used to create the card
  createCard();

  //used to create the search key word filter
  createKeywordFilter();

  
  function createCard(){
    var courseDetails = {
      "course":[
        {
          "title":"Java 1",
          "instructor_name":"James Gosling",
          "description" : "Lets dive deeply in the OOP's",
          "start_date":"2020-08-24",
          "end_date":"2020-08-25",
          "estimated_workload":"4",
          "category":"Computer"
        },
        {
          "title":"Electrical",
          "instructor_name":"Dr.Sebastin",
          "description" : "This course gives the brief note about the electricals",
          "start_date":"2020-07-27",
          "end_date":"2030-06-15",
          "estimated_workload":"4",
          "category":"Engineering"
        },
        {
          "title":"Mechanical",
          "instructor_name":"Dr.Maran",
          "description" : "This course gives the note about the Mech machines",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Engineering"
        },
        {
          "title":"Geometry 4",
          "instructor_name":"Euclid",
          "description" : "Everything is a dimension, every dimension is geometry",
          "start_date":"2020-06-01",
          "end_date":"2020-06-15",
          "estimated_workload":"4",
          "category":"Mathematics"
        },
        {
          "title":"PUBG",
          "instructor_name":"Prof.Louis",
          "description" : "This deals with the gaming concepts of the PUBG game",
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
          "instructor_name":"StoneCold",
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
  var Courses = document.createElement("p")
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

  //logic for the courseType
  if(new Date()<begningDate){
    registration.innerHTML="Pre-registration"
    numberOfOpenCourses++
  }
  else if(new Date > begningDate && new Date() < finishingDate){
    registration.innerHTML="On going"
  }
  else{
    registration.innerHTML="Completed"
  }

  //logic to get the number of weeks between the start_date and the end_date
  var weeks = (finishingDate.getTime() - begningDate.getTime()) / 1000;
  diff =(Math.abs(Math.round(weeks/ (60 * 60 * 24 * 7))));

  var startDate = begningDate.getDate()
  var startMonth = begningDate.getMonth()
  var endDate = finishingDate.getDate()
  var endMonth = finishingDate.getMonth()
  courseStartDate.innerHTML=months[startMonth]+" "+startDate +" - " + months[endMonth]+ " " +endDate
  courseduration.innerHTML =diff+ "week course," + course.estimated_workload + " hrs per day"

  //logic to load the data without any filter
  if((loop == false)&&(prev === "All") && (keywordValue.length == 0)){
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
   // document.getElementById("footPara").style.marginTop ="0%"
    //document.getElementById("footPara").style.marginBottom ="0%"
  }

  //logic to load the data with the filter only as radio button
  else if((loop == true)&&(keywordValue.length == 0)&&(course.category === prev)){
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

  //logic to load the data with filter as keyword
  else if((loop == false)&&(keywordValue.length != 0)&&(prev === "All")){
    if(course.title.includes(keywordValue) | course.instructor_name.includes(keywordValue)){
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
  }

  //logic to load the data with filter as both radio button and search keyword
  else if((loop == true)&&(keywordValue != 0 )&&(course.category === prev)){
    if(course.title.includes(keywordValue) | course.instructor_name.includes(keywordValue)){
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
  }
}

//function to create the search box
function createKeywordFilter(){
  var radioList = document.getElementById("keyword")
  var keywordFilter = document.createElement("form")
  keywordFilter.setAttribute("name","keywordForm")
  keywordFilter.setAttribute("id","keywordId")
  var keyword = document.createElement("input")
  keyword.setAttribute("type","input")
  keyword.setAttribute("id","inputKeywordId")
  document.body.appendChild(keyword)
  keywordFilter.appendChild(keyword)
  radioList.appendChild(keywordFilter)

}


//function to create the radio buttons dynamically as per the json
  function createRadioButton(){
    var courses = ["All","Computer","Mathematics","Science"]
    var radioList = document.getElementById("navRadio")
    var radioDiv = document.createElement("form")
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
    radioList.appendChild(radioDiv)
  }

  }

  //eventListener whenever the radiobutton is clicked
  var rad = document.myForm.course;
  var key = document.getElementById("inputKeywordId").value
  prev = "All"
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this.value;
            if(prev === "All"){
              loop = false
            }
            else{
              loop = true
            }
            
            keywordValue = key
            var deleDiv = document.getElementById("main")
            deleDiv.parentNode.removeChild(deleDiv)
            var main = document.createElement("div")
            main.setAttribute("id","main")
            document.body.appendChild(main)
            createCard();
        }
    });
  }

  //evenListener whenever the keyword is typed in the searchbox
  var filterKeyword = document.getElementById("inputKeywordId")
  filterKeyword.addEventListener('keyup',function(event){
      if(!filterKeyword.value.length == 0){
        keywordValue = filterKeyword.value
        var deleDiv = document.getElementById("main")
            deleDiv.parentNode.removeChild(deleDiv)
            var main = document.createElement("div")
            main.setAttribute("id","main")
            document.body.appendChild(main)
            createCard();
      }else{
        keywordValue = ""
        var deleDiv = document.getElementById("main")
            deleDiv.parentNode.removeChild(deleDiv)
            var main = document.createElement("div")
            main.setAttribute("id","main")
            document.body.appendChild(main)
            createCard();
      }
  });
}

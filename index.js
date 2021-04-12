var daysOfTheWeek =['Sunday','Monday','tuesday','Wendsday','Thursday','Friday','Satarday'];
var akanMale=['Kwasi', 'Kwadwo','Kwabena','Kwaku', 'yaw','Kofi','Kwame'];
var akanFemale=['Akosua','Adwoa','Abena','Akua','Yaa','Afua', 'Ama'];
function results() {
  var month =parseInt(document.getElementById("month").value);
  var year =parseInt(document.getElementById("year").value);
  var day =parseInt(document.getElementById ("day").value);
  var date =new Date(year +"/"+month+"/"+ day);
  var gender = print()
  var day1= date.getDay();
  var akan;


function results() {
  if (day<1 || day >31) {
    alert ("invalid date");
    return false;
  }
  if (month< 1 || month > 12){
    alert("invalid month");
    return false;
  }
  if (year< 1890 || year > 2030){
  alert("inavalid year")
  return false;
  }
  if(gender =="male"){
    akan =akanMale[day1];
  }else{
    akan =akanFemale[day1];
  }
  alert("You were born on" + dayOfTheWeek[day1]+"and your akan names is"+akan);
}
  function print(){
    var gender= documents.getElementsByName("gender");{
      if(gender[Male].checked){
        return(gender[Male].value)
      }else{
        (gender[Female].checked){
          return(gender)[Female].value
        }
      }
    }
  }
}

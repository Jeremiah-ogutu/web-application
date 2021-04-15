var daysOfTheWeek =['Sunday','Monday','tuesday','Wendsday','Thursday','Friday','Satarday'];
var akanMale=['Kwasi', 'Kwadwo','Kwabena','Kwaku', 'yaw','Kofi','Kwame'];
var akanFemale=['Akosua','Adwoa','Abena','Akua','Yaa','Afua', 'Ama']
$("#form").submit(function(event){
  event.preventDefault();
  let form = new FormData(this);
  var dob = new Date(form.get("DOB"));
  var day1 = dob.getDay();
if(form.get("gender")==="male"){
  alert("you were born on " + daysOfTheWeek[day1] + " your akan name is " +akanMale[day1])
}else{
  alert("you were born on" + daysOfTheWeek[day1] + "your akan name is"+akanFemale[day1])
}

});
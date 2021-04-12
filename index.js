var daysOfTheWeek =['Sunday','Monday','tuesday','Wendsday','Thursday','Friday','Satarday'];
var akanMale=['Kwasi', 'Kwadwo','Kwabena','Kwaku', 'yaw','Kofi','Kwame'];
var akanFemale=['Akosua','Adwoa','Abena','Akua','Yaa','Afua', 'Ama'];
function results() {
  var month =parseInt(document.getElementById("month").value);
  var year =parseInt(document.getElementById("year").value);
  var day =parseInt(document.getElementById ("day").value);
  var date =new Date(year +"/"+month+"/"+ day);




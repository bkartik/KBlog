	function submitM()
{

var x = document.getElementById("data");
//document.write(x.value);
var title = document.getElementById('heading');
document.getElementById('headLabel').innerHTML= title.value;
document.getElementById('dataPrv').innerHTML= x.value;
document.getElementById('recent').innerHTML=title.value;


var cat= document.getElementById("cat0");
if (cat=="Project")
 {document.getElementById('recentPRO').innerHTML=title.value; } 
else if(cat=="Tutorial")
 {document.getElementById('recentTUT').innerHTML=title.value;}
else
 {document.getElementById('recentOTH').innerHTML=title.value;}


}
var zajak = 1; 
var zhelka = 1; 
var track = new Array (70); 
var intervalId; 
raceCounter = 0; 
for (var i = 0;i < track.length; ++i)
	track[i] = i;
outputArray(track);

function outputArray(theArray)
{
	document.writeln("<table border = \"1\"");
	document.writeln("<tbody><tr>");

	var toPrint = "&nbsp;";
	for (var i = 1; i <= theArray.length; i++)
	{
		toPrint = "&nbsp;";
		if (i == zhelka) toPrint = "Zhelka";
		if (i == zajak) toPrint = "Zajak";
		if ((i == zhelka) && (i == zajak)) toPrint = "OUCH"; 
		document.writeln("<td>" + toPrint + "</td>");
	}
	document.writeln("</tr></tbody></table>");
} 


function updateClock(){
	
	moveposT();
	moveposH();
	
	if (zhelka > 70) zhelka = 70;
	if (zajak > 70) zajak = 70;
	outputArray(track);
	if ((zajak == 70) || (zhelka == 70))
		raceEnds();
	else
		intervalId = window.setInterval(updateClock(), 1000);
} 


function raceStarts(){
	document.write("Trkata moze da zapocni!<br/>");
	outputArray(track);
	
	intervalId = window.setInterval(updateClock(), 1000); 
} 


function moveposT(){
	i = Math.floor( Math.random() * 11);
	
	if ((i >= 1) && (i <= 5)){ 
		zhelka = zhelka + 3;      
	}
	if ((i >= 6) && (i <= 7)){ 
		zhelka = zhelka - 6;       
	}
	if ((i >= 8) && (i <= 10)){
		zhelka = zhelka + 1;      
	}
	if (zhelka < 1){             
		zhelka = 1;              
	}
	
} 
function moveposH()
{
	i = Math.floor(Math.random() * 11);
	
	if ((i >= 1) && (i <= 2)){
		zajak = zajak + 0;      
	}
	if ((i >= 3) && (i <= 4)){
		zajak = zajak + 9;      
	}
	if (5 == i){             
		zajak = zajak - 12;     
	}
	if ((i >= 7) && (i <= 8)){
		zajak = zajak + 1;     
	}
	if ((i >= 9) && (i <= 10)){
		zajak = zajak - 2;       
	}
	if (zajak < 1){             
		zajak = 1;              
		
	}
	
} 



function raceEnds()

{
clearInterval(intervalId);
if ((zhelka == 70 - 1) && (zajak == 70 - 1))
	document.write("<br/><br/><b>Ne resheno.</b>");
else {
	if (zhelka >= 69)
	{
		zhelka = 70 - 1;
		document.write("<br/><br/><b>Zhelkata pobedi!</b>");
	}
	if (zajak >= 69)
	{
		zajak = 70 - 1;
		document.write("<br/><br/><b>Zajakot pobedi!</b>");
	}
 }
} 


alert('je werk in de albert hein er komt iemand binnen lopen vlak voor sluit hij loopt rustig rond en verstopt zich totdat de winkel is gesloten hij heeft daar een bivak muts op en met pistool houd die iemand onder schot en wilt geld hebben je ziet het gebeuren je staat er niet naast ')

var vraag1 = prompt("Wat doe je of je rent weg of je doet wat hij zegt")


if (vraag1 == "doet wat hij zegt"){
alert('je hebt de goede keuze gemaakt je word nu gebruikt door hem en hij wilt dat je de kassa opent')
var vraag2 = prompt("Wat doe je je opent de kassa of je schreeuwt naar die meneer dat je dat niet gaat doen  ") 
}else if (vraag1 ='rent weg')
alert ('je hebt de verkeerde keuze gemaakt je bent neergeschoten' )
if (vraag2 == "opent de kassa"){
alert('je hebt de goede keuze gemaakt je opent de kassa en er zit niks in hij wilt dat je de andere kassa ook open maakt ')
var vraag3 = prompt("wat doe je nu open je de kassa of werk je tegen en doet niks ")
}else if (vraag2 == 'schreeuwen ')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je niet mee helpt')

if (vraag3 == "open de kassa"){
alert('je hebt hem opengemaakt en hij pakt het geld en wilt meer hij zegt dat hij naar de kluis wilt maar jij hebt de sleutel daar niet voor dus je moet je manager zoeken die is ergens in de winkel want de deuren zijn dicht  ')
 var vraag4 = prompt("wat doe je zoeken voor de manager of proberen weg te rennen ")
}else if (vraag3 == 'werk tegen')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je niet mee helpt')

if (vraag4 == "zoeken naar de manager"){
alert('je hebt de goede keuze gemaakt je gaat nu met hem rondjes lopen en kijken waar de manager is ')
var vraag5 = prompt("Wat doe je probeer je weg te rennen tijdens het zoeken of help je mee met zoeken tot je hem vind ")
}else if (vraag4=='proberen weg te rennen')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je probeerd weg te rennen')

if (vraag5 == "helpen met zoeken "){
alert('je hebt de goede keuze gemaakt je ben nog steeds aan het zoeken en hij vraagt waar is de kantine ')
var vraag6 = prompt("Wat doe je leid je hem naar de kantine of neem je een omweg om te kijken of de achterdeur open is ") 
}else if (vraag5 == 'probeerd weg te rennen' )
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je niet mee helpt')

if (vraag6 == "leid hem naar de kantine"){
alert('je hebt de goede keuze gemaakt je loopt naar de kantine en de deur zit op slot want de manager zit daar in en jij hoort dat hij belt met de politie maar de meneer die je vast heeft hoort dat niet ')
var vraag7 = prompt("Wat doe je rondjes lopen en tijd rekken of zeg je tegen hem dat de politie word gebeld ") 
}else if (vraag6 =='met een omweg')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je niet mee helpt ')

if (vraag7 == "tijd rekken "){
alert('je hebt de goede keuze gemaakt en hij zegt loop voor me rustig handen omhoog en geen rare bewegingen en niet rennen want dat schiet ik je ');
var vraag8 = prompt("Wat doen wat hij zegt of gaan rennnen ") 
}else if (vraag7 =='zeggen tegen hem')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je hij niks aan je heeft als de politie komt ')

if (vraag8 == "doen wat hij zegt"){
alert('je hebt de goede keuze gemaakt en je loopt rondje langs de bakker afdeling en hij paakt daar wat boordjes en eet het tijdens het lopen van eet je loopt weer naar de kassa en hij zegt waar liggen de sigaretten ');
var vraag9 = prompt("Wat doe je laten zien waar de sigaretten liggen of zeggen dat je het niet weet  ") 
}else if (vraag8 =='gaan rennen')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je weg rent ')

if (vraag9 == "laten zien"){
alert('je hebt de goede keuze gemaakt hij heeft nu heel ze tas vol met sigaretten maar toen sotnd je politie voor de deur te wachten tot je naar buiten rende');
var vraag10 = prompt("wat doe je rent weg naar de deur naar de politie of blijft bij hem   ") 
}else if (vraag9 == 'zeggen dat je het niet weet')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je liegt ')

if (vraag10 == " rent weg "){
alert('je hebt de goede keuze gemaakt je bent nu veilig buiten bij de politie de politie vraagt zijn er nog mensen binnen jij zegt de manager ze vragen wat de snelste weg naar binnen  ')
var vraag11 = prompt("wat is  de snelste weg naar binnen via de voordeur of achterdeur   ") 
}else if (vraag10 =='blijft bij hem ')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat hij weet dat de politie er is ')

if (vraag11 == " achterdeur "){
alert('je hebt de goede keuze gemaakt je ben veilig en de politie neemt het over en je kan naar huis  ')
}else if (vraag11 =='voordeur')
alert('je hebt de verkeerde keuze gemaakt je word neergeschoten omdat je hem tegen komt naar de voordeur')
alert('ben je veilig buiten gefelicteerd maar anders ben je dood probeer het nog een keer')
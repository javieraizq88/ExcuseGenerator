let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


whoRandom = Math.floor(Math.random() * who.length);
whatRandom = Math.floor(Math.random() * what.length);
whenRandom = Math.floor(Math.random() * when.length);


var aleat = who[whoRandom] + " " + what[whatRandom] + " " + when[whenRandom];

document.querySelector("#excuse").innerHTML= aleat;


/*
1) se definen las variables con let que van a formar el mensaje final

2) math.floor redondea a numeros enteros pq mis variables son numero enteros
    math random redondea los numeros para que el math.floor los pueda usar 

3) se define una nueva variable con nombre "aleat" y se toman los nombres del who que 
van a estar random igual que el what y el who
    se agrega un " " para tener un espacio separado entre cada mensaje

4) se pone el mismo nombre q esta en el html en script src para que copie e imprima el 
mensaje en la pagina web.
*/


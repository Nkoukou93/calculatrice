 // Utiliser la fonction  insert() pour inserer le nombre.
function insert(num) 
{
document.form1.textview.value = document.form1.textview.value + num;
}

//Utilisez la fonction égal() pour renvoyer le résultat enfonction des nombres entrés et de l'opération.
function equal()
{
var exp = document.form1.textview.value;
if(exp)
{
document.form1.textview.value = eval(exp)
}
}

function backspace()
{
var exp = document.form1.textview.value;

}
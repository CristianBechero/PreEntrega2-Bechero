
let totalPrice = 0;
let exit = false;
let cart = [];
let maquinasTotal = 0;
let option;




// Create Travels INIT
class maquinarias {

  constructor(maquinariaNum, maquinariaName, maquinariaPrice, maquinariaStars){
    this.maquinariaNum = maquinariaNum;
    this.maquinariaName = maquinariaName;
    this.maquinariaPrice = maquinariaPrice;
    this.maquinariaStars = maquinariaStars;
  }
}

const maquinaria1 = new maquinarias(1, "Casillas", 2500000, 2)
const maquinaria2 = new maquinarias(2, "Cisternas", 2300000, 3)
const maquinaria3 = new maquinarias(3, "Rastradiscos", 3200000, 4)
const maquinaria4 = new maquinarias(4, "Tractores", 7000000, 5)
const maquinaria5 = new maquinarias(5, "Cosechadoras", 40000000, 5)
const maquinaria6 = new maquinarias(6, "Sembradoras", 15000000, 3)
const maquinaria7 = new maquinarias(7, "Autoelevadores", 2600000, 5)
const maquinaria8 = new maquinarias(8, "Tolvas Semilleras", 1600000, 5)


const maquinariaOptions = [maquinaria1, maquinaria2, maquinaria3, maquinaria4, maquinaria5, maquinaria6, maquinaria7,];
// Create Travels FINISH


// Function to show Travels options. Opcion 1
function choseMaquinaria(){
  let choseOption = parseInt(prompt(`Elija el Implemento que desea comprar:
  
  1) Casillas              5) Cosechadoras     
  2) Cisternas             6) Sembradoras
  3) Rastrasdiscos         7) Autoelevadores 
  4) Tractores             8) Tolvas Semilleras`));


  switch(choseOption){
    case 1:
      alertChoseMaquina(maquinaria1)
    break;
    case 2:
      alertChoseMaquina(maquinaria2)
    break;
    case 3:
      alertChoseMaquina(maquinaria3)
    break;
    case 4:
      alertChoseMaquina(maquinaria4)
      break;
    case 5:
      alertChoseMaquina(maquinaria5)
      break;
    case 6:
      alertChoseMaquina(maquinaria6)
    break;
    case 7:
      alertChoseMaquina(maquinaria7)
    break;
    case 8:
      alertChoseMaquina(maquinaria8)
    break;
    default:
      alert("No has elegido ninguna opcion (elige del 1 al 9)")
    break;
  }
}

function alertChoseMaquina(maquinariaNumber) {
  let thisOption = parseInt(prompt(`Perfecto, elegiste ${maquinariaNumber.maquinariaName} con un costo de $${maquinariaNumber.maquinariaPrice} por implemento,¿Cuántos implementos desea?`));
  option += thisOption;
  let thismaquinas = thisOption * maquinariaNumber.maquinariaPrice
  maquinasTotal += thismaquinas;
   let answer = prompt(`El precio de ${thisOption} implementos es ${thismaquinas} ¿Desea Añadirlos al carrito? (elija si o no)`).toLowerCase();
      if (answer == "no"){
        alert("No hay problema, elija otro implemento que le guste.");
      }else if(answer == "si"){
        addToCart(maquinariaNumber.maquinariaName, thisOption);
      }else{
        alert("escriba si o no para continuar");
      }
}

// Function to add to cart
function addToCart(maquinas, thisOption){
  if(cart.includes(maquinas)){
    alert("Ya añadiste este Implemento")
  }else{
    cart.push(maquinas);
    alert(`Agregaste ${thisOption} ${maquinas} al carro`);
  }
}

// arraycheck. Opcion 2
function maquinariasArrayCheck(){
  maquinariaOptions.forEach((maquinaria) => {
      alert(`El implemento ${maquinaria.maquinariaName} tiene un precio de $${maquinaria.maquinariaPrice}.`);
  });
}

// Function to search Opcion 3
function maquinariaSearch(){
  let searchMaquinaria = prompt("¿Ingrese el Implemento a buscar?");
  let findMaquinaria = maquinariaOptions.find((maquinaria)=> maquinaria.maquinariaName.toLowerCase() == searchMaquinaria.toLowerCase());

  if(findMaquinaria === undefined){
    alert(`Estamos sin stock de ${searchMaquinaria}`);
  }else{
    alert(`Perfecto, tenemos ${findMaquinaria.maquinariaName} en stock .
    Éste tiene un precio de $${findMaquinaria.maquinariaPrice}`)
  }
}
// Function to ask what to sort
function sortMaquinaria(){
  let order = parseInt(prompt(`¿De qué manera le gustaría ordenar los implementos?
  1)Orden desde menor a mayor precio
  2)Ordern desde mayor a menor precio
  
  (elegir 1 o 2)`));
  switch(order){
    case 1:
      maquinariaOptions.sort((a,b) => a.maquinariaPrice - b.maquinariaPrice);
      maquinariasArrayCheck();
      break;
      case 2:
        maquinariaOptions.sort((a,b) => b.maquinariaPrice - a.maquinariaPrice);
        maquinariasArrayCheck();
        break;

      default:
        alert("Todavía no tenemos esa opcion (escriba 1 o 2)");
        break;
  }
}
// Function to buy 
function buyMaquinarias(cart){
  agree = prompt(`¡¡FELICITACIONES!! Esta por adquirir ${option}  ${cart}
  ¿Desea realizar la compra? (elegir si o no)`).toLowerCase();

  if(agree == "si"){
    alert("COMPRA REALIZADA");
    cart = [];
    cartArray = "";
    totalPrice = 0;
  }else if(agree == "no"){
    alert("Perfecto, esperamos un futuro regreso.");
    cart.length = 0;
    cartArray = "";
  }else{
    alert("ingrese 'si' o 'no'");
  }
}


const name = prompt("Bienvenido a CB Implementos Agricolas. Ingrese su NOMBRE");

alert(name+", "+"elija el tipo de maquinaria, luego indique la cantidad que quiera comprar y para finalizar esa operacion y tener reservado su compra aprete 0");

do{
  let election = parseInt(prompt(`¿Qué quiere hacer?
  (elija una opción de 1 al 6 o 0 si desea salir del menu)
  
  1) Maquinaria disponible
  2) Información de los distintos Implementos
  3) Buscar un Implemento en particular
  4) Ordenar cursos (por precio ascendente o desendente)
  5) Ver carrito
  0) Salir del menu`));

  switch (election){
    case 0:
      alert("Gracias por visitarnos. CB Implementos Agricolas");
      exit = true;
      break;
      case 1:
      choseMaquinaria();
      break;
      case 2:
        maquinariasArrayCheck();
        break;
      case 3:
        maquinariaSearch();
        break;
      case 4:
        sortMaquinaria();
        break;
      case 5:
        if (cart == ""){
          alert("Todavía no has seleccionado ningun Implemento");
        }else{
          totalPrice= maquinasTotal ;
          let cartArray = cart.join(`, `);
          alert(`Agregaste ${option} IMPLEMENTOS ${cartArray} con un total de $${totalPrice}`);
          buyMaquinarias(cart);
        }
        break;
      default:
        alert("Ingrese una opcion valida (del 1 a 5 o 0 para salir del menu)");
        break;
  }
}while (!exit);
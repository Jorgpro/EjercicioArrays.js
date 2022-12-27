const lista=["azucar","leche","pan","huevos","fideos"]
lista.push("Aceite de girasol");
console.log(lista)
lista.pop()
console.log(lista)

const peliculasFavoritas=[
    {Titulo:"Forrest gump" ,Director:"Robert Zemeckis", Fecha: 2011      },
    { Titulo:"Hasta el ultimo hombre" ,Director:"Mel Gibson", Fecha: 2012      },
    { Titulo:"La pasion de Cristo" ,Director:"Mel Gibson", Fecha: 2008       },
   


];
const fechaExacta= peliculasFavoritas.filter(valor => valor.Fecha < 2010 )
console.log(fechaExacta);

const directores= peliculasFavoritas.map(obj => obj.Director);
console.log(directores)

const titulos= peliculasFavoritas.map(valor=> valor.Titulo)
console.log(titulos)

const listaconC=titulos.concat(directores);
console.log(listaconC)

const listaNueva= directores.concat(...titulos)
console.log(listaNueva)

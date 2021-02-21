db.herramientas.drop()
db.herramientas.insertMany([
    {cod: "001",
     nombre:'Pintura', 
     precio:20, 
     cantidad: 200},
    {cod: "002", nombre:'Madera', precio: 60, cantidad: 1500},
    {cod: "003", nombre:'Caja de Tornillo', precio: 10, cantidad: 100},
    {cod: "004", nombre:'Caja de Clavos', precio:8 , cantidad: 80},
    {cod: "005", nombre:'Martillo', precio: 18, cantidad: 150},
    {cod: "006", nombre:'Lijadoras', precio:50 , cantidad: 100},
    {cod: "007", nombre:'Destornillador', precio:40 , cantidad: 180}
])

db.carpinterias.drop()
db.carpinterias.insertMany([
    {cod: '748',
     fechacompra: new Date("2020-09-28"),
      cliente: "Carpinteria Dominguez",
       compra: {cod: "006", 
       cantidad:80}},
    {cod: '894', fechacompra: new Date("2020-09-28"), cliente: "Carpinteria Dominguez", compra: {cod: "004", cantidad:40}},
    {cod: '743', fechacompra: new Date("2020-02-10"), cliente: "Carpinteria Duran", compra: {cod: "007", cantidad:100}},
    {cod: '328', fechacompra: new Date("2020-02-10"), cliente: "Carpinteria Duran", compra: {cod: "006", cantidad:20}},
    {cod: '935', fechacompra: new Date("2020-02-10"), cliente: "Carpinteria Duran", compra: {cod: "001", cantidad:160}},
    {cod: '725', fechacompra: new Date("2020-07-14"), cliente: "Carpinteria Vieta", compra: {cod: "002", cantidad:700}},
    {cod: '783', fechacompra: new Date("2020-07-14"), cliente: "Carpinteria Vieta", compra: {cod: "005", cantidad:110}},
    {cod: '264', fechacompra: new Date("2020-09-28"), cliente: "Carpinteria Dominguez", compra: {cod: "003", cantidad:400}},
    {cod: '576', fechacompra: new Date("2020-09-28"), cliente: "Carpinteria Dominguez", compra: {cod: "007", cantidad:50}},
])
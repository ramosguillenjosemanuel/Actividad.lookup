/*Consultas Personalizadas*/

// He realizado una unión de dos colecciones , la colección herramientas y la colección carpinterías
// Realizando una agrupación de más de un campo, que son:cliente, fecha compra,cantidad y precio
// Y realizando una multiplicación redondeada calculando el precio total de cada articulo.

db.carpinterias.aggregate(
    [
        {

            $lookup: {
                from: "herramientas",
                localField: "compra.cod",
                foreignField: "cod",
                as: "utilidades"
            }
        },
        {
            $unwind: "$utilidades"

        },
        {
            $group: {
                _id: {
                    cliente: "$cliente",
                    fechacompra: "$fechacompra",
                    cantidad: "$compra.cantidad",
                    precio: "$utilidades.precio"
                }
            }
        },
        {
            $project: {
                _id: 0,
                fechacompra: "$_id.fechacompra",
                cliente: "$_id.cliente",
                precio_total: { $round: [{ $multiply: ["$_id.precio", "$_id.cantidad"] }, 0] }
            }
        }
    ]
)

/* { "fechacompra" : ISODate("2020-09-28T00:00:00Z"),
 "cliente" : "Carpinteria Dominguez",
  "precio_total" : 2000 }
{ "fechacompra" : ISODate("2020-02-10T00:00:00Z"), "cliente" : "Carpinteria Duran", "precio_total" : 4000 }
{ "fechacompra" : ISODate("2020-09-28T00:00:00Z"), "cliente" : "Carpinteria Dominguez", "precio_total" : 4000 }
{ "fechacompra" : ISODate("2020-09-28T00:00:00Z"), "cliente" : "Carpinteria Dominguez", "precio_total" : 320 }
{ "fechacompra" : ISODate("2020-02-10T00:00:00Z"), "cliente" : "Carpinteria Duran", "precio_total" : 1000 }
{ "fechacompra" : ISODate("2020-07-14T00:00:00Z"), "cliente" : "Carpinteria Vieta", "precio_total" : 42000 }
{ "fechacompra" : ISODate("2020-02-10T00:00:00Z"), "cliente" : "Carpinteria Duran", "precio_total" : 3200 }
{ "fechacompra" : ISODate("2020-07-14T00:00:00Z"), "cliente" : "Carpinteria Vieta", "precio_total" : 1980 }
{ "fechacompra" : ISODate("2020-09-28T00:00:00Z"), "cliente" : "Carpinteria Dominguez", "precio_total" : 4000 } */





// He realizado consulta uniendo dos colecciones , una sobre unas clases donde se imparte ingles y otra colección mostrando algunos de los alumnos que pertenecen a cada una de ellas
// Realizando una agrupación por nivel de ingles  y por el precio de las clases.

db.alumno.aggregate(
    [
        {

            $lookup: {
                from: "aulas",
                localField: "clases.codigo",
                foreignField: "codigo",
                as: "clasesdeingles"
            }
        },
        {
            $unwind: "$clasesdeingles"

        },
        
        {
            $group: {
                _id: {
                   
                    
                    nivel: "$clasesdeingles.nivel",
                    precio: "$clasesdeingles.precio"
                }
            }
        },
        {
            $project: {
                _id: 0,
                nivel:"$_id.nivel",
            precio_anual: { $round: [{ $multiply: ["$_id.precio", 12] }, 0] }
            }
        },
        {
            $sort:
            {
                precio_anual:-1,
              
                
            }
        }
    ])



    /* 
{ "nivel" : "C2", "precio_anual" : 1025 }
{ "nivel" : "C1", "precio_anual" : 910 }
{ "nivel" : "B1", "precio_anual" : 668 }
{ "nivel" : "B2", "precio_anual" : 666 } */


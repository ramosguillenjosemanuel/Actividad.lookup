db.aulas.drop()
db.aulas.insertMany([
    {codigo:001,
        aula:"A",
        profesor:"Francisco gomez",
        nivel:"B1",
        alumnos:35,precio:55.7},
    {codigo:002,aula:"B",profesor:"Juan Lopez",nivel:"B2",alumnos:30,precio:55.5},
    {codigo:003,aula:"C",profesor:"Sandra Ramos",nivel:"C1",alumnos:28,precio:75.8},
    {codigo:004,aula:"D",profesor:"Carlos Romero",nivel:"C2",alumnos:25,precio:85.4},
])

db.alumno.drop()
db.alumno.insertMany([
    {cod:01,
        nombre:"Fernando Sanz",
        fechamatricula:new Date("2020-03-16"),
        clases:{nivel:"B2",
        codigo:002}},
    {cod:02,nombre:"Lorenzo Ramirez",fechamatricula:new Date("2020-06-10"),clases:{nivel:"C2",codigo:004}},
    {cod:03,nombre:"Guillermo Montes",fechamatricula:new Date("2020-03-04"),clases:{nivel:"C1",codigo:003}},
    {cod:04,nombre:"Laura Borrego",fechamatricula:new Date("2020-09-25"),clases:{nivel:"C2",codigo:004}},
    {cod:05,nombre:"Alba Quiñones",fechamatricula:new Date("2020-05-28"),clases:{nivel:"B1",codigo:001}},
    {cod:05,nombre:"Marcos Lopez",fechamatricula:new Date("2020-05-28"),clases:{nivel:"B1",codigo:001}},
    {cod:05,nombre:"Alejandro Calderon",fechamatricula:new Date("2020-05-28"),clases:{nivel:"B1",codigo:001}},
])
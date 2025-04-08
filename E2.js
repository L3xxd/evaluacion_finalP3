const work_days = [
  ["lunes", "maria"],
  ["martes", "luis"],
  ["miercoles", "antonia"],
  ["jueves", "pedro"],
  ["viernes", "marisa"],
];

function searchByDay(recibed_day) {
    const finder = work_days.find(item => item[0] === recibed_day);
    if (finder) { 
        return console.log(`Este dia: ${recibed_day}, se encargará: ${finder[1]}`);

    } else {
        return console.log("No hay servicio ese dia");     
    }
}

let input_day = "lunes"
searchByDay(input_day);

import destinosLisboaViernes from "./destinosLisboaViernes";
import destinosLisboaSabado from "./destinosLisboaSabado";

const planViajeLisboa = [
    {
        dia: "Viernes",
        actividades: [
            { horario: "9:00 - 10:00", destino: destinosLisboaViernes[0]},
            { horario: "10:00 - 10:30", destino: destinosLisboaViernes[1]},
            { horario: "10:30 - 12:30", destino: destinosLisboaViernes[2] },
            { horario: "13:30 - 14:00", destino: destinosLisboaViernes[3]},
            { horario: "15:30 - 17:30", destino: destinosLisboaViernes[4]},
            { horario: "17:30 - ..", destino: destinosLisboaViernes[5]},
            { horario: "17:30 - ..", destino: destinosLisboaViernes[6]},
            { horario: "17:30 - ..", destino: destinosLisboaViernes[7]},
            { horario: "17:00 - ..", destino: destinosLisboaViernes[8]},
            { horario: "21:00 - ..", destino: destinosLisboaViernes[9]},
        ]
    },
    {
        dia: "Sábado",
        actividades: [
            { horario: "7:30 - 8:00", destino: destinosLisboaSabado[0]},
            { horario: "8:00 - 10:00", destino: destinosLisboaSabado[1]},
            { horario: "10:00 - 11:00", destino: destinosLisboaSabado[2]},
            { horario: "11:00 - 13:00", destino: destinosLisboaSabado[3]},
            { horario: "13:00 - 14:00", destino: destinosLisboaSabado[4]},
            { horario: "14:00 - 15:00", destino: destinosLisboaSabado[5]},
            { horario: "19:00 - 21:00", destino: destinosLisboaSabado[6]},
            { horario: "21:30 - 23:00", destino: destinosLisboaSabado[7]},
        ]
    },
    {
        dia: "Domingo",
        actividades: []
    }
];

export default planViajeLisboa
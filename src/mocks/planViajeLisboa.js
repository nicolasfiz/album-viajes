import destinosLisboa from "./destinosLisboa";

const planViajeLisboa = [
    {
        dia: "Jueves",
        actividades: [
            { horario: "9:00 - 10:00", destino: destinosLisboa[0]},
            { horario: "10:30 - 12:30", destino: destinosLisboa[1] }
        ]
    },
    {
        dia: "Viernes",
        actividades: [] // Puedes llenar con actividades
    },
    {
        dia: "Sábado",
        actividades: [] // Puedes llenar con actividades
    },
    {
        dia: "Domingo",
        actividades: [] // Puedes llenar con actividades
    }
];

export default planViajeLisboa
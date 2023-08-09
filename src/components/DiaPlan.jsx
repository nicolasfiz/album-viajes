import CardDestinos from "./cardDestinosLisboa";

const timeGap = (index, actividades) => ({
  borderBottom: index === actividades.length - 1 ? 'none' : '5px solid #e0e0e0',
  paddingBottom: '10px', // Espaciado hacia abajo
  marginBottom: '10px'  // Espacio adicional después de la línea
})

function DiaPlan({ dia, actividades }) {
  return (
    <div>
      <h1 className="text-sky-400 text-5xl font-serif">{dia}</h1>
      {actividades.map((actividad, index) => (
        <div
          key={actividad.horario}
          style={timeGap(index, actividades)}
        >
          <p className="pb-4 font-semibold">{actividad.horario}</p>
          <CardDestinos destino={actividad.destino} />
        </div>
      ))}
    </div>
  );
}


export default DiaPlan
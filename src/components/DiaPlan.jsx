import CardDestinos from "./cardDestinosLisboa";

const timeGap = (index, actividades) => ({
  borderBottom: index === actividades.length - 1 ? 'none' : '3px solid rgb(255 255 255 / 48%)',
  paddingBottom: '1rem', // Espaciado hacia abajo
  marginBottom: '1rem'  // Espacio adicional después de la línea
})

function DiaPlan({ dia, actividades }) {
  return (
    <div>
      <h1 className="text-sky-400 text-5xl font-serif">{dia}</h1>
      {actividades.map((actividad, index) => (
        <div
          key={index + dia + actividad.horario}
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
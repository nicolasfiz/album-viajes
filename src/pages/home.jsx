import GridDestinos from '../components/GridDestinos'

function Home() {
  return (
    <>
      <h1>¡Bienvenida a nuestro album de viajes oficial! 🎉</h1>
      <div className="bg-white/20 rounded-md p-2 m-2">
        <h2 className="mt-4">Este es solo un prototipo de lo que acabará siendo nuestro blog de viajes</h2>
        <p className="mb-4">El primer paso es decidir cual quieres que sea nuestro primer viaje</p>
      </div>
      <GridDestinos />
      <p>Y existe la posiblidad de que se vayan añadiendo mas destinos...</p>
    </>
  )
}

export default Home

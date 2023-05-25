function CardDestinos({destino}) {
  console.log(destino.image)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <img className="rounded-t-lg" src={destino.image} alt={destino.title+'_image'} />
      <div className="p-1">
        <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-gray-900 ">{destino.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {destino.description}
        </p>
        <a
          href={destino.googleMaps}
          className="mb-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Ver en google maps
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
export default CardDestinos

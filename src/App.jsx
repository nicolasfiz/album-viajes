import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Lisboa from "./pages/lisboa";

const router = createBrowserRouter([
  {
    path: "/album-viajes",
    element: <Home />,
  },
  {
    path: "/album-viajes/lisboa",
    element: <Lisboa />
  }

]);

function App() {
  return (
    <main className="text-center flex flex-col justify-center items-center mx-3 my-2">
      <RouterProvider router={router} />
    </main>
  )
}

export default App

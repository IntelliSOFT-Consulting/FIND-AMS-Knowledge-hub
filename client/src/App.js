import {Route, Routes} from "react-router-dom";
import {routes} from "./routes.js";

export default function App() {
  return (
      <Routes>
        {
          routes.map(route => (
              <Route path={route.path} element={<route.component/>} key={route.path}/>
          ))
        }
      </Routes>
  )
}
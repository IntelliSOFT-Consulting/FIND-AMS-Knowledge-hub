import {Route, Routes, Navigate} from "react-router-dom";
import {routes} from "./routes.js";

export default function App() {
  return (
      <Routes>

        {
          routes.map(route => (
              <Route path={`knowledge-hub/${route.path}`} element={<route.component/>} key={route.path}/>
          ))
        }
        <Route path="/" element={<Navigate to="knowledge-hub" replace />} />
      </Routes>
  )
}
import { Routes, Route } from "react-router-dom";
import { PrincipalPage } from "../principal/pages";
import { Favorites } from "../principal/components";
import { FavoritePage } from "../principal/components";
import { NotFound } from "../principal/pages/NotFound";


export const PrincipalRoutes = () => {
  return (
    <Routes>
      
      <Route path='/' element={<PrincipalPage />} />
      <Route path='/auth/login' element={<PrincipalPage />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="character/:id" element={<FavoritePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

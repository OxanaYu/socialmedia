import React from "react";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import BookMarksPage from "../pages/BookMarksPage";
import EditPage from "../pages/EditPage";
import AddPage from "../pages/AddPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/posts", element: <PostPage /> },
    { id: 3, link: "/bm", element: <BookMarksPage /> },
    { id: 4, link: "/edit/:id", element: <EditPage /> },
    { id: 5, link: "/addpage", element: <AddPage /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;

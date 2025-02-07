import { BrowserRouter, Route, Routes } from "react-router";
import { Posts } from "./features/posts/pages/Posts";
import { NotFoundPage } from "./features/misc/pages/NotFoundPage";
import { MainLayout } from "./components/layouts/MainLayout";
import { Post } from "./features/posts/pages/Post";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Posts />} />
          <Route path="post/:postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

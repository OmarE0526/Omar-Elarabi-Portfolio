import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ExperienceDetail } from "./pages/ExperienceDetail";
import { EducationDetail } from "./pages/EducationDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:projectId",
    Component: ProjectDetail,
  },
  {
    path: "/experience/:experienceId",
    Component: ExperienceDetail,
  },
  {
    path: "/education/:educationId",
    Component: EducationDetail,
  },
]);
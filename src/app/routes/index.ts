import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { EducationRoutes } from "../modules/education/education.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/profile",
    route: ProfileRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

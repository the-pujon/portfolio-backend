import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { EducationRoutes } from "../modules/education/education.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { CertificateRoutes } from "../modules/certificate/certificate.route";

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
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/certificate",
    route: CertificateRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

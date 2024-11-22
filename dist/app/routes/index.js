"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const profile_route_1 = require("../modules/profile/profile.route");
const skill_route_1 = require("../modules/skill/skill.route");
const education_route_1 = require("../modules/education/education.route");
const experience_route_1 = require("../modules/experience/experience.route");
const blog_route_1 = require("../modules/blog/blog.route");
const project_route_1 = require("../modules/project/project.route");
const certificate_route_1 = require("../modules/certificate/certificate.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/profile",
        route: profile_route_1.ProfileRoutes,
    },
    {
        path: "/skill",
        route: skill_route_1.SkillRoutes,
    },
    {
        path: "/education",
        route: education_route_1.EducationRoutes,
    },
    {
        path: "/experience",
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: "/blog",
        route: blog_route_1.BlogRoutes,
    },
    {
        path: "/project",
        route: project_route_1.ProjectRoutes,
    },
    {
        path: "/certificate",
        route: certificate_route_1.CertificateRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

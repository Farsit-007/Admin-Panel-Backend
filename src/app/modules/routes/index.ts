import { Router } from 'express';
import { AuthRoutes } from '../Auth/auth.route';
import { ProjectRoutes } from '../project/project.route';
import { blogRoutes } from '../blog/blog.route';
import { SkillRoutes } from '../skill/skill.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },

  {
    path: '/blogs',
    route: blogRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
export default router;

import {
  createRouter,
  createWebHashHistory,
  RouteMeta,
  RouteRecordRaw,
} from "vue-router";
import Main from "../view/Main.vue";
import Home from "../view/Home.vue";
import { isLogin } from "../utils/auth";

interface AppRouteMeta extends RouteMeta {
  title?: string;
  requireAuth?: boolean;
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Main,
    meta: { title: "主页", requireAuth: true },
    children: [
      { path: "", name: "Home", component: Home },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => {
          return import("../view/Dashboard.vue");
        },
      },
      {
        path: "file-manager",
        name: "FileManager",
        component: () => {
          return import("../view/FileManager.vue");
        },
      },
      {
        path: "file-sharing",
        name: "FileSharing",
        component: () => {
          return import("../view/FileSharing.vue");
        },
      },
      {
        path: "plugin",
        name: "Plugin",
        component: () => import("../view/Plugin.vue"),
      },
      {
        path: "service",
        name: "Service",
        component: () => import("../view/Service.vue"),
      },
      {
        path: "process",
        name: "Process",
        component: () => import("../view/Process.vue"),
      },
      {
        path: "console",
        name: "Console",
        component: () => import("../view/Console.vue"),
      },
      {
        path: "/user",
        children: [
          {
            path: "",
            name: "UserManager",
            component: () => import("../view/UserManager.vue"),
          },
          {
            path: "edit/:username",
            name: "EditUser",
            component: () => import("../view/EditUser.vue"),
          },
        ],
      },
      {
        path: "/sharing",
        name: "SharingService",
        component: () => import("../view/SharingService.vue"),
      },
      {
        path: "/disk",
        name: "Disk",
        component: () => import("../view/DiskManager.vue"),
      },
      {
        path: "/network",
        name: "Network",
        component: () => import("../view/Network.vue"),
      },
      {
        path: "/setting",
        name: "Setting",
        component: () => import("../view/Setting.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录", requireAuth: false },
    component: () => {
      return import("../view/Login.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const meta = to.meta as AppRouteMeta;

  if (meta.title) {
    document.title = meta.title ? `${meta.title} | NodeNas` : "NodeNas";
  }

  if (!meta.requireAuth) {
    next();
    return;
  }

  if (isLogin()) {
    next();
    return;
  }

  next({
    name: "Login",
    query: { redirect: to.fullPath },
  });
});

export default router;

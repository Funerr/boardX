const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "ep/home-filled",
    title: "仪表盘",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "首页",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "主仪表盘",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    },
    {
      path: "/welcome/HC100",
      name: "HC100",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "HC100仪表盘",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    },
    {
      path: "/welcome/HC200",
      name: "HC200",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "HC200仪表盘",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;

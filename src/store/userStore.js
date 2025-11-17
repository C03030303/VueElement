export const useUserStore = defineStore(
  "user",
  () => {
    //用户信息
    const userInfo = ref({
      username: "", //姓名
      phone: "", //手机号
      avatar: "", //头像
    });
    const getUserInfo = computed(() => userInfo.value);
    function setUserInfo(user) {
      userInfo.value = user;
    }

    //token
    const token = ref(null);
    const getToken = computed(() => token.value);
    function setToken(tk) {
      token.value = tk;
    }

    //权限
    const menus = ref([]);
    const getMenus = computed(() => menus.value);
    function setMenus(mn) {
      menus.value = mn;
    }

    //退出登录
    function logout() {
      setToken(null);
      setUserInfo({
        username: "",
        phone: "",
        avatar: "",
      });
      window.localStorage.clear();
    }

    return {
      userInfo,
      getUserInfo,
      setUserInfo,
      token,
      getToken,
      setToken,
      menus,
      getMenus,
      setMenus,
      logout,
    };
  },
  {
    persist: {
      storage: localStorage,
      omit: ["menus"],
    },
  },
);

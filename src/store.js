import { writable } from "svelte/store";
import { router } from "tinro";
import { AUTH_TOKEN } from "./constants";
import { getApi, postApi } from "./services/api";

function setCurrentArticlesPage() {}
function setArticles() {}
function setLoadingArticle() {}
function setArticleContent() {}
function setArticleMode() {}
function setComments() {}
function setAuth() {
  let initValues = {
    id: "",
    email: "",
  };
  let values = { ...initValues };
  const { subscribe, set, update } = writable(values);

  const isLogin = async () => {
    try {
      const getUserInfo = await getApi({ path: "/user" });
      set(getUserInfo);
    } catch (error) {
      auth.resetUserInfo();
      authToken.resetAuthToken();
      console.error(error);
    }
  };
  const resetUserInfo = () => {
    const nameValues = { ...initValues };
    set(nameValues);
  };
  const register = async (email, password) => {
    try {
      const options = {
        path: "/users",
        data: {
          email,
          password,
        },
      };
      await postApi(options);
      alert("가입이 성공적으로 완료되었습니다 !");
      router.goto("/login");
    } catch (error) {
      alert("오류가 발생했습니다 다시 시도해 주세요");
      console.error(error);
    }
  };

  return {
    subscribe,
    isLogin,
    resetUserInfo,
    register,
  };
}
function setAuthToken() {
  const token = localStorage.getItem(AUTH_TOKEN);
  const { subscribe, set } = writable(token);
  const login = async (email, password) => {
    try {
      const options = {
        path: "/login",
        data: {
          email,
          password,
        },
      };
      const response = await postApi(options);
      const token = response.authToken;
      localStorage.setItem(AUTH_TOKEN, token);
      set(token);
      router.goto("/articles");
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
      console.error(error);
    }
  };
  const logout = async () => {
    try {
      const options = {
        path: "/logout",
      };
      await postApi(options);
      authToken.resetAuthToken();
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
      console.error(error);
    }
  };
  const resetAuthToken = () => {
    set("");
    localStorage.removeItem(AUTH_TOKEN);
  };
  return {
    subscribe,
    login,
    logout,
    resetAuthToken,
  };
}

export const currentArticlePage = setCurrentArticlesPage();
export const articles = setArticles();
export const loadingArticle = setLoadingArticle();
export const articlePageLock = writable(false);
export const articleContent = setArticleContent();
export const articleMode = setArticleMode();
export const comments = setComments();
export const auth = setAuth();
export const authToken = setAuthToken();

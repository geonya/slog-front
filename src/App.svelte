<script>
  import Router from "./router.svelte";
  import { auth, authToken } from "./store";
  $: {
    if ($authToken) {
      auth.isLogin();
    } else {
      auth.resetUserInfo();
    }
  }
</script>

<div class="mdl-layout__container">
  <Router />
</div>

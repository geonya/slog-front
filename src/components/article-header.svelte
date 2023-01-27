<script>
  import { router } from "tinro";
  import { authToken } from "../store";

  const goLogin = () => router.goto("/login");
  const goLogout = () => authToken.logout();
  const goHome = () => {
    router.goto("/");
  };
</script>

<!-- start header -->
<header class="mdl-layout__header mdl-layout__header--waterfall">
  <div class="mdl-layout__header-row">
    <!-- Title -->
    <span
      class="mdl-layout-title logo"
      on:click={goHome}
      on:keypress={() => true}>SLogs</span
    >
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link selected" href="#null">모두 보기</a>
      <a class="mdl-navigation__link blocked" href="#null">좋아요 보기</a>
      <a class="mdl-navigation__link blocked" href="#null">내글 보기</a>
    </nav>
    {#if $authToken}
      <i class="bx bx-log-out" on:click={goLogout} on:keypress={() => true} />
    {:else}
      <i class="bx bx-log-in" on:click={goLogin} on:keypress={() => true} />
    {/if}
  </div>
</header>
<!-- end header -->

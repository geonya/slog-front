<script>
  import { Route } from "tinro";
  import Articles from "./pages/articles.svelte";
  import Login from "./pages/login.svelte";
  import Register from "./pages/register.svelte";
</script>

<Route path="/" redirect="/articles" />
<Route path="/articles/*"><Articles /></Route>
<Route path="/login"><Login /></Route>
<Route path="/register"><Register /></Route>

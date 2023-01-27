<script>
  import { authToken } from "../store";

  let values = {
    formEmail: "",
    formPassword: "",
    formPasswordConfirm: "",
  };
  const onRegister = () => {};
</script>

<!-- start main register box-->
<main class="mdl-layout__content">
  <div class="box mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div class="mdl-textfield mdl-js-textfield">
        <input
          class="mdl-textfield__input"
          type="text"
          placeholder="이메일"
          bind:value={values.formEmail}
        />
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input
          class="mdl-textfield__input"
          type="password"
          placeholder="비밀번호"
          bind:value={values.formPassword}
        />
      </div>
      <div class="mdl-textfield mdl-js-textfield">
        <input
          class="mdl-textfield__input"
          type="password"
          placeholder="비밀번호 확인"
          bind:value={values.formPasswordConfirm}
        />
      </div>
      <div class="mdl-card__actions btn-box">
        <a
          href="#null"
          class="mdl-button mdl-js-button mdl-js-ripple-effect"
          on:click={onRegister}>회원가입</a
        >
      </div>
    </div>
  </div>
</main>
<!-- end main register box-->

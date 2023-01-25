<script>
  import Comment from "./comment.svelte";
</script>

<!-- start comment-modal-bg-->
<div class="comment-modal-bg modal-show">
  <div class="mdl-layout__content comment-wrap">
    <!--  start box-comment-article -->
    <div class="box mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <div class="mdl-card mdl-cell mdl-cell--12-col comment-box">
        <div class="mdl-card__supporting-text ">
          <div class="info-box">
            <div class="info">
              <p class="user-id">freeseamew</p>
              <p class="post-day">2021-11-11</p>
            </div>
          </div>
        </div>
        <div class="mdl-card__supporting-text bottom-padding ">
          <p class="pre">
            Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi
            cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat
            consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor
            laboris eiusmod qui id Lorem esse commodo in. Exercitation aute
            dolore deserunt culpa consequat elit labore incididunt elit anim.
          </p>
        </div>
        <div class="mdl-card__supporting-text flex-right ">
          <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"
            >글 목록 보기</a
          >
        </div>
        <div class="mdl-card__supporting-text ">
          <h5>Comments</h5>
        </div>

        <!-- start comment list-->
        <ul class="mdl-list">
          <Comment />
        </ul>
        <!-- end comment list-->

        <div class="mdl-card__actions">
          <div class="mdl-textfield">
            <textarea
              class="mdl-textfield__input"
              type="text"
              rows="5"
              id="sample5"
            />
          </div>
        </div>
        <div class="btn-box">
          <a href="#" class="mdl-button mdl-js-button mdl-js-ripple-effect"
            >입력</a
          >
        </div>
      </div>
    </div>
    <!--end box-comment-article-->
  </div>
  <!-- end mdl-layout__content-->
</div>
<!-- end comment-modal-bg-->

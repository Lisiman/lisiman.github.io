document.getElementById("legal").innerHTML = `
<div class="legal">
<div class="legal_top" id="legal_top_id">
  <img
    class="legal_item clickable"
    id="legal_logo"
    src="resources/img/sqsp_icon.svg"
    alt=""
  />
  <div class="legal_item clickable" id="legal_info">INFO</div>
  <div class="legal_item" id="legal_mode">
    MODE<label class="switch"
      ><input onclick="myFunction()" type="checkbox" /><span
        class="slider round"
      ></span
    ></label>
  </div>
  <div class="legal_item clickable legal_index_cl" id="legal_index">
    INDEX
    <div class="legal_index_cl" id="hamburger">
      <div class="topleft ham_dot transitionAni" id="index_tl_id"></div>
      <div class="topright ham_dot transitionAni" id="index_tr_id"></div>
      <div class="bottomright ham_dot transitionAni" id="index_br_id"></div>
      <div class="bottomleft ham_dot transitionAni" id="index_bl_id"></div>
    </div>
  </div>
</div>
<div class="legal_bottom transitionAni">
  <a
    href="https://www.squarespace.com/privacy"
    target="_blank"
    class="legal_item legal_bottom_links transitionAni"
    id="legal_privacy"
    >PRIVACY POLICY</a
  >
  <a
    href="https://www.squarespace.com/terms-of-service"
    target="_blank"
    class="legal_item legal_bottom_links transitionAni"
    id="legal_terms"
    >TERMS OF SERVICE</a
  >
  <div></div>
</div>
</div>
  `;

  

/* Isolated enhancement: no dependency on matching or navigation code. */
(function () {
  var section = document.querySelector(".studio-layers");
  if (!section) return;
  var selected = 0;
  var copy = {
    en: {
      eyebrow: "What you build with", title: "Your venture. Supported by a connected studio.",
      lead: "Practical tools to move work forward, relevant people and preparation for suitable funding pathways.", venture: "Your venture",
      name0: "Build & operate", short0: "Turn ideas into practical work",
      name1: "People & network", short1: "Bring relevant experience around you",
      name2: "Funding & readiness", short2: "Prepare for appropriate capital pathways",
      items: [
        ["Workspace prototype", "A shared way of working.", "Organise your business context and use practical workflows to prepare work and keep decisions consistent.", ["Company context and brand references", "Product planning and operating routines", "AI-assisted drafts with human review"], "The Founder Workspace is a local prototype. Live People and resource connections are not yet implemented.", "Explore our support", "services.html"],
        ["People directory", "The right experience for the next step.", "Explore the network for expertise relevant to your venture’s actual challenge.", ["Specialists and potential collaborators", "Experience-led profile discovery", "Introduction requests for review"], "A profile is not a guarantee of availability. Introductions require both parties’ agreement; AI matching is currently available in the local pilot.", "Explore People", "people.html"],
        ["Venture support", "Prepare before you pursue funding.", "Identify suitable pathways and strengthen the evidence behind your investment or funding application.", ["Funding strategy and readiness gaps", "Investor and application preparation", "Relevant operator and partner pathways"], "Investment and programme selection are not guaranteed. TIPS requires separate operator review, nomination and government evaluation.", "Explore funding support", "services.html"]
      ]
    },
    ko: {
      eyebrow: "함께 만드는 기반", title: "당신의 벤처를 지원하는 세 가지 기반.",
      lead: "실행을 돕는 도구, 필요한 경험을 가진 사람, 적합한 자금 경로를 위한 준비.", venture: "당신의 벤처",
      name0: "개발과 운영", short0: "아이디어를 실질적인 실행으로",
      name1: "사람과 네트워크", short1: "필요한 경험을 연결합니다",
      name2: "자금 전략과 준비", short2: "적합한 자금 경로를 준비합니다",
      items: [
        ["워크스페이스 프로토타입", "함께 일하는 방식.", "사업의 맥락을 정리하고 실용적인 워크플로로 업무를 준비하며 의사결정의 일관성을 유지합니다.", ["회사 정보와 브랜드 레퍼런스", "제품 기획과 운영 루틴", "사람의 검토를 거치는 AI 초안"], "Founder Workspace는 로컬 프로토타입입니다. People 및 자료와의 실시간 연결은 아직 구현되지 않았습니다.", "지원 서비스 살펴보기", "services.html"],
        ["피플 디렉토리", "다음 단계에 필요한 경험.", "벤처가 실제로 해결해야 할 과제에 맞는 전문성을 네트워크에서 탐색합니다.", ["전문가와 잠재적 협력자", "경험 중심의 프로필 탐색", "검토를 위한 연결 요청"], "프로필은 참여 가능 여부를 보장하지 않습니다. 소개는 양측 동의가 필요하며 AI 매칭은 현재 로컬 파일럿에서 제공됩니다.", "피플 살펴보기", "people.html"],
        ["벤처 지원", "자금 확보에 앞서 준비합니다.", "적합한 경로를 검토하고 투자 및 지원사업 신청을 뒷받침할 근거를 강화합니다.", ["자금 전략과 준비 과제", "투자 자료와 신청 준비", "관련 운영사 및 파트너 경로"], "투자나 사업 선정을 보장하지 않습니다. TIPS는 별도 운영사 검토, 추천과 정부 평가가 필요합니다.", "자금 지원 서비스 보기", "services.html"]
      ]
    }
  };
  function render() {
    var language = document.documentElement.lang === "ko" ? "ko" : "en";
    var c = copy[language], item = c.items[selected];
    section.querySelectorAll("[data-layer-copy]").forEach(function (el) { el.textContent = c[el.dataset.layerCopy]; });
    section.querySelector(".layers-stack").setAttribute("aria-label", language === "ko" ? "스튜디오 지원 영역" : "Studio support layers");
    section.querySelectorAll("[data-layer]").forEach(function (el) { el.setAttribute("aria-pressed", String(Number(el.dataset.layer) === selected)); });
    ["layer-status","layer-detail-title","layer-description","layer-caveat","layer-link"].forEach(function (id,i) { document.getElementById(id).textContent = item[[0,1,2,4,5][i]]; });
    var list = document.getElementById("layer-capabilities"); list.replaceChildren();
    item[3].forEach(function (text) { var li = document.createElement("li"); li.textContent = text; list.appendChild(li); });
    document.getElementById("layer-link").href = item[6];
  }
  section.querySelectorAll("[data-layer]").forEach(function (button) {
    function choose() {
      var next = Number(button.dataset.layer);
      if (next === selected) return;
      selected = next; render();
    }
    button.addEventListener("click", choose);
    button.addEventListener("focus", choose);
    button.addEventListener("pointerenter", function (event) { if (event.pointerType === "mouse") choose(); });
  });
  // Reserve each text row for its longest variant at the actual panel width.
  // This keeps headings, body text and CTA anchored without clipping translations.
  function stabilize() {
    var panel = document.getElementById("layer-detail");
    var fields = ["layer-status", "layer-detail-title", "layer-description", "layer-capabilities", "layer-caveat", "layer-link"];
    var heights = fields.map(function () { return 0; });
    var language = document.documentElement.lang === "ko" ? "ko" : "en";
    copy[language].items.forEach(function (item) {
      var clone = panel.cloneNode(true);
      var nodes = fields.map(function (id) { return clone.querySelector("#" + id); });
      clone.removeAttribute("id");
      clone.querySelectorAll("[id]").forEach(function (el) { el.removeAttribute("id"); });
      clone.setAttribute("aria-hidden", "true");
      clone.inert = true;
      clone.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;left:-10000px;box-sizing:border-box;width:" + panel.getBoundingClientRect().width + "px";
      nodes.forEach(function (node, i) {
        node.style.minHeight = "0";
        if (i === 3) {
          node.replaceChildren();
          item[3].forEach(function (text) { var li = document.createElement("li"); li.textContent = text; node.appendChild(li); });
        } else node.textContent = item[[0,1,2,3,4,5][i]];
      });
      panel.parentNode.appendChild(clone);
      nodes.forEach(function (node, i) { heights[i] = Math.max(heights[i], node.getBoundingClientRect().height); });
      clone.remove();
    });
    fields.forEach(function (id, i) { document.getElementById(id).style.minHeight = Math.ceil(heights[i]) + "px"; });
  }
  new MutationObserver(function () { render(); stabilize(); }).observe(document.documentElement, {attributes:true,attributeFilter:["lang"]});
  render();
  stabilize();
  if (document.fonts) document.fonts.ready.then(stabilize);
  var resizeTimer;
  window.addEventListener("resize", function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(stabilize, 100); });
})();

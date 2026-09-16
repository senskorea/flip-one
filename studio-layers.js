/* Isolated enhancement: no dependency on matching or navigation code. */
(function () {
  var section = document.querySelector(".studio-layers");
  var services = document.getElementById("studio-capabilities");
  if (!section && !services) return;
  var selected = 0;
  var copy = {
  "en": {
    "eyebrow": "What you build with",
    "title": "Build Stack. Growth Network. Funding Support.",
    "lead": "Hands-on venture building, supported by AI-enabled operations, relevant relationships and funding expertise.",
    "name0": "Build Stack",
    "short0": "An AI-enabled way of working",
    "name1": "Growth Network",
    "short1": "AI-powered matching. Human connections.",
    "name2": "Funding Support",
    "short2": "Find and prepare for suitable opportunities",
    "items": [
      [
        "In development",
        "Build Stack",
        "An AI-enabled workspace and reusable workflows for research, product, sales and operations.",
        [
          "Set up the founder’s workspace, documents and AI tools.",
          "Research customers and test business assumptions.",
          "Build and improve the first product.",
          "Create repeatable sales, marketing and admin workflows."
        ],
        "The Founder Workspace is a local prototype, not a released platform. Live People and resource connections are not yet implemented.",
        "Explore our support",
        "services.html"
      ],
      [
        "Local AI pilot",
        "Growth Network",
        "AI-powered matching. Human connections. Tell Flip One what you need, in your own words. Our AI matches your challenge with relevant people and helps you request an introduction.",
        [
          "Discover relevant experience, with clear reasons for each match.",
          "Request introductions to operators, potential customers and partners.",
          "Explore creator collaborations and distribution opportunities.",
          "Build relationships through focused events and peer exchanges."
        ],
        "AI matching is available in the local pilot; the public directory uses keyword search. Availability and introductions require confirmation from both parties.",
        "Explore People",
        "people.html"
      ],
      [
        "Opportunity assessment",
        "Funding Support",
        "Funding strategy, application preparation and investor connections across Korea and international markets.",
        [
          "Explore funding opportunities in Korea, the EU, North America and Southeast Asia.",
          "Prioritise programmes by eligibility, timing and fit.",
          "Prepare applications, pitch materials and supporting evidence.",
          "Pursue investor and TIPS operator introductions where appropriate."
        ],
        "We assess opportunities, not guarantee access or awards. TIPS requires separate operator review, nomination and government evaluation.",
        "Explore funding support",
        "services.html"
      ]
    ]
  },
  "ko": {
    "eyebrow": "함께 만드는 기반",
    "title": "빌드 스택. 성장 네트워크. 자금 지원.",
    "lead": "AI 기반 업무 방식, 필요한 경험을 가진 사람, 자금 조달 전문성을 바탕으로 벤처를 함께 만듭니다.",
    "name0": "빌드 스택",
    "short0": "AI와 함께 일하는 방식",
    "name1": "성장 네트워크",
    "short1": "AI로 찾고, 사람과 연결합니다",
    "name2": "자금 지원",
    "short2": "적합한 기회를 찾고 준비합니다",
    "items": [
      [
        "개발 중",
        "빌드 스택",
        "리서치, 제품, 영업과 운영을 위한 AI 기반 워크스페이스와 재사용 가능한 워크플로입니다.",
        [
          "창업가의 워크스페이스, 문서와 AI 도구를 구성합니다.",
          "고객을 조사하고 사업 가설을 검증합니다.",
          "첫 제품을 만들고 개선합니다.",
          "영업, 마케팅과 관리 업무를 반복 가능한 프로세스로 정리합니다."
        ],
        "Founder Workspace는 출시된 플랫폼이 아닌 로컬 프로토타입입니다. People 및 자료와의 실시간 연결은 아직 구현되지 않았습니다.",
        "지원 서비스 살펴보기",
        "services.html"
      ],
      [
        "로컬 AI 파일럿",
        "성장 네트워크",
        "AI로 찾고, 사람과 연결합니다. 필요한 도움을 편하게 설명해 주세요. AI가 과제에 맞는 경험을 가진 사람을 찾고 소개 요청을 돕습니다.",
        [
          "과제에 맞는 경험을 가진 사람과 추천 이유를 확인합니다.",
          "실무 전문가, 잠재 고객과 파트너에게 소개를 요청합니다.",
          "크리에이터 협업과 유통 기회를 탐색합니다.",
          "주제별 행사와 동료 교류를 통해 관계를 쌓습니다."
        ],
        "AI 매칭은 로컬 파일럿에서 제공되며 공개 디렉토리는 키워드 검색을 사용합니다. 참여 가능 여부와 소개는 양측 확인이 필요합니다.",
        "피플 살펴보기",
        "people.html"
      ],
      [
        "지원 기회 검토",
        "자금 지원",
        "한국과 해외 시장의 자금 전략, 신청 준비와 투자자 연결을 지원합니다.",
        [
          "한국, EU, 북미와 동남아시아의 자금 지원 기회를 탐색합니다.",
          "신청 자격, 일정과 적합성을 기준으로 우선순위를 정합니다.",
          "신청서, 피치 자료와 근거 자료를 준비합니다.",
          "적합한 경우 투자자와 TIPS 운영사 소개를 추진합니다."
        ],
        "지원 기회를 검토하며 자금 확보나 선정을 보장하지 않습니다. TIPS는 별도 운영사 검토, 추천과 정부 평가가 필요합니다.",
        "자금 지원 서비스 보기",
        "services.html"
      ]
    ]
  }
};
  if (services) {
    function renderServices() {
      var lang = document.documentElement.lang === "ko" ? "ko" : "en";
      var c = copy[lang];
      services.replaceChildren();
      var heading = document.createElement("h2");
      heading.textContent = lang === "ko" ? "실제로 어떤 일을 함께 하나요?" : "What we do in practice";
      services.appendChild(heading);
      var note = document.createElement("p");
      note.textContent = lang === "ko" ? "벤처 공동 개발은 합의한 기여 범위에 따라 지분 참여로 함께합니다. 개별 성장 서비스는 별도로 범위를 정합니다." : "For co-built ventures, equity reflects our agreed contribution. Individual growth services are scoped separately.";
      services.appendChild(note);
      var grid = document.createElement("div"); grid.className = "capabilities-grid";
      c.items.forEach(function(item) {
        var article = document.createElement("article");
        [item[1],item[2]].forEach(function(text,i) { var el=document.createElement(i ? "p" : "h3"); el.textContent=text; article.appendChild(el); });
        var ul=document.createElement("ul");
        item[3].forEach(function(text) { var li=document.createElement("li"); li.textContent=text; ul.appendChild(li); }); article.appendChild(ul);
        var caveat=document.createElement("p"); caveat.className="capability-caveat"; caveat.textContent=item[4]; article.appendChild(caveat);
        grid.appendChild(article);
      });
      services.appendChild(grid);
    }
    renderServices();
    new MutationObserver(renderServices).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
  }
  if (!section) return;
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

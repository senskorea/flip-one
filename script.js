(function () {
  var header = document.getElementById("site-header");
  var hero = document.querySelector(".hero");

  var translations = {
    ko: {
      title: "Flip One | 스타트업의 길을 밝히는 등대",
      description: "Flip One은 창업가가 시장을 탐색하고, 자금을 확보하며, 한국과 세계를 연결할 팀을 구축하도록 돕습니다.",
      skip: "본문으로 건너뛰기",
      languageLabel: "언어 선택",
      mobileNavLabel: "모바일 내비게이션",
      navLabel: "주요 내비게이션",
      search: "검색",
      openResource: "자료 열기",
      openEvent: "이벤트 열기",
      menu: "메뉴",
      navPeople: "피플",
      navResources: "자료",
      navEvents: "이벤트",
      navServices: "서비스",
      cta: "항로를 그려보세요",
      heroEyebrow: "한국과 세계를 연결하며 성장하는 창업가를 위해",
      heroTitle1: "스타트업의 길을",
      heroTitle2: "밝히는 등대.",
      heroSummary: "스타트업을 만드는 일은 하나의 항해입니다. 가장 단단한 창업가도 때로는 방향을 잃습니다. Flip One은 앞으로 나아가는 데 필요한 방향, 사람, 기회를 연결합니다.",
      exploreServices: "서비스 살펴보기",
      heroKeywords: "방향 · 자금 · 사람",
      sectionLabel: "01 · 방향 찾기",
      directionTitle: "앞으로의 여정을 위한 방향.",
      directionSummary: "Flip One은 창업가가 한국과 글로벌 시장을 탐색하고, 프로젝트 보조금을 확보하며, 지속가능한 성장에 필요한 관계를 구축하도록 돕습니다.",
      value1Title: "시장 탐색",
      value1Body: "한국과 글로벌 기회 사이의 경로를 이해합니다.",
      value2Title: "자금 확보",
      value2Body: "보조금, 투자자, 전략적 기회를 발굴하고 추진합니다.",
      value3Title: "팀 구축",
      value3Body: "앞으로 나아가는 데 필요한 사람, 전문성, 지원을 연결합니다.",
      pathwaysLabel: "두 개의 방향 · 하나의 플랫폼",
      pathwaysTitle: "어느 방향으로 성장하고 있나요?",
      pathwaysSummary: "방향을 선택하면 같은 Flip One 서비스가 당신의 시장 여정에 맞게 조정됩니다.",
      pathwaysAria: "성장 방향",
      inboundTitle: "한국 진출",
      inboundBody: "해외 창업가와 조직을 한국의 시장, 자금, 파트너와 연결합니다.",
      outboundTitle: "글로벌 진출",
      outboundBody: "한국 창업가를 글로벌 시장, 자금, 파트너와 연결합니다.",
      bothDirection: "양쪽 시장 연결",
      servicesLabel: "02 · 서비스",
      servicesTitle: "여정의 모든 단계에 필요한 지원.",
      servicesSummary: "아이디어의 시작부터 확장과 지속가능한 성장까지, 지금 필요한 다음 단계를 함께 설계합니다.",
      ideationTitle: "아이디어 구체화",
      ideationBody: "초기 아이디어를 명확하고 신뢰할 수 있으며 자금 확보가 가능한 방향으로 발전시킵니다.",
      ideation1: "시장 및 기회 탐색",
      ideation2: "공동창업자 매칭",
      ideation3: "초기 자금 전략",
      scalingTitle: "스케일업",
      scalingBody: "성장에 필요한 파트너십, 자금, 글로벌 역량을 구축합니다.",
      scaling1: "보조금 신청 지원",
      scaling2: "투자자 연결",
      scaling3: "글로벌 시장 진출",
      sustainingTitle: "지속가능한 성장",
      sustainingBody: "창업가와 조직이 긴 여정을 이어갈 수 있도록 기반을 강화합니다.",
      sustaining1: "창업가 코칭",
      sustaining2: "웰빙과 회복탄력성",
      sustaining3: "커뮤니티 지원",
      expectedOutcome: "기대 결과",
      stageCta: "이 단계의 항로 그리기",
      platformLabel: "03 · 플랫폼",
      platformTitle: "사람과 기회가 만나는 곳.",
      platformSummary: "네트워크를 탐색하고, 필요한 전문성을 찾고, 다음 기회와 연결하세요.",
      peopleLabel: "피플 네트워크",
      peopleTitle: "함께 항해할 사람을 찾으세요.",
      peopleBody: "창업가, 전문가, 협력자와 잠재적 파트너를 한곳에서 탐색합니다.",
      exploreNetwork: "네트워크 살펴보기",
      askExample: "한국 바이오 보조금 경험이 있는 사람을 찾아주세요.",
      askBody: "자연어로 필요한 경험과 연결을 검색하세요.",
      filterStage: "단계",
      filterDirection: "방향",
      filterExpertise: "전문 분야",
      filterReset: "초기화",
      filterAll: "전체",
      noMatches: "조건에 맞는 사람을 찾지 못했습니다. 더 넓은 표현으로 다시 검색해 보세요.",
      showingMatches: "명의 추천 인물을 찾았습니다.",
      resourcesLabel: "전문 자료",
      resourceTitle: "더 나은 결정을 위한 실용적인 지식.",
      browseResources: "자료 살펴보기",
      resourcesSectionLabel: "04 · 자료",
      resourcesSectionTitle: "다음 결정을 위한 실용적인 지식.",
      resourcesSectionSummary: "자금, 팀, 시장, 창업가의 지속가능성을 위한 간결하고 실행 가능한 가이드입니다.",
      resourceDone: "자료로 돌아가기",
      eventsLabel: "다가오는 이벤트",
      eventTitle: "Seoul Founder Night",
      eventMeta: "서울 · 오후 7시",
      browseEvents: "이벤트 살펴보기",
      eventsSectionLabel: "05 · 이벤트",
      eventsSectionTitle: "좋은 연결은 함께 모일 때 시작됩니다.",
      eventsSectionSummary: "창업가, 전문가, 투자자와 함께 배우고 연결하며 다시 에너지를 채우세요.",
      gridView: "카드",
      listView: "목록",
      eventAgenda: "프로그램",
      eventFor: "추천 대상",
      eventHost: "호스트",
      addCalendar: "캘린더에 추가",
      registerInterest: "참가 관심 등록",
      eventDemoNote: "프레젠테이션용 이벤트 미리보기입니다.",
      interestSaved: "관심이 등록되었습니다. 정식 출시 시 이 단계에서 신청을 연결합니다.",
      communityLabel: "06 · 함께 항해하기",
      communityTitle: "혼자 가는 여정이 아닙니다.",
      communityBody: "Flip One과 함께하면 독점 이벤트, 전문 지식, 전략적 파트너십을 이용할 수 있는 강력한 스타트업 커뮤니티에 합류하게 됩니다.",
      courseLabel: "07 · 다음 단계",
      courseTitle: "당신의 항로를 그릴 준비가 되셨나요?",
      courseBody: "지금 어디에 있고 어디로 가고 싶은지 알려주세요. 다음 여정을 함께 설계하겠습니다.",
      footerLine: "한국과 세계를 연결하는 스타트업 플랫폼.",
      dialogLabel: "항로 설계",
      dialogTitle: "어디로 향하고 있나요?",
      close: "닫기",
      nameLabel: "이름",
      emailLabel: "이메일",
      directionLabel: "성장 방향",
      stageLabel: "현재 단계",
      stageIdea: "아이디어 구체화",
      stageScale: "스케일업",
      stageSustain: "지속가능한 성장",
      helpLabel: "지금 가장 필요한 것은 무엇인가요?",
      send: "문의 보내기",
      formNote: "현재 프레젠테이션용 문의 양식입니다.",
      formSuccess: "감사합니다. 다음 항로를 함께 살펴보겠습니다."
    },
    en: {
      title: "Flip One | Your startup lighthouse",
      description: "Flip One helps founders navigate markets, secure funding and build the right crew between Korea and the world.",
      skip: "Skip to content",
      languageLabel: "Language selection",
      mobileNavLabel: "Mobile navigation",
      navLabel: "Primary navigation",
      search: "Search",
      openResource: "Open resource",
      openEvent: "Open event",
      menu: "Menu",
      navPeople: "People",
      navResources: "Resources",
      navEvents: "Events",
      navServices: "Services",
      cta: "Chart your course",
      heroEyebrow: "For founders building between Korea and the world",
      heroTitle1: "Your startup",
      heroTitle2: "lighthouse.",
      heroSummary: "Building a startup is a voyage, and even the most determined founders can lose their bearings. Flip One brings the direction, people and opportunities you need to move forward.",
      exploreServices: "Explore our services",
      heroKeywords: "Direction · Funding · People",
      sectionLabel: "01 · Find your bearings",
      directionTitle: "Direction for the journey ahead.",
      directionSummary: "Flip One helps founders navigate Korean and global markets, secure project grant funding and build the relationships required for sustainable growth.",
      value1Title: "Navigate markets",
      value1Body: "Understand the route between Korea and global opportunities.",
      value2Title: "Secure funding",
      value2Body: "Identify and pursue grants, investors and strategic opportunities.",
      value3Title: "Build your crew",
      value3Body: "Find the people, expertise and support needed to keep moving.",
      pathwaysLabel: "Two directions · One platform",
      pathwaysTitle: "Which way are you growing?",
      pathwaysSummary: "Choose a direction and the same Flip One services adapt to your market journey.",
      pathwaysAria: "Growth direction",
      inboundTitle: "Entering Korea",
      inboundBody: "Connecting international founders and organisations with Korean markets, funding and partners.",
      outboundTitle: "Expanding globally",
      outboundBody: "Connecting Korean founders with global markets, funding and partners.",
      bothDirection: "Connecting both markets",
      servicesLabel: "02 · Services",
      servicesTitle: "Support for every stage of the voyage.",
      servicesSummary: "From the first idea through scaling and sustainable growth, we help design the next step you need now.",
      ideationTitle: "Ideation",
      ideationBody: "Turn an early idea into a clear, credible and fundable direction.",
      ideation1: "Market and opportunity discovery",
      ideation2: "Cofounder matching",
      ideation3: "Early funding strategy",
      scalingTitle: "Scaling",
      scalingBody: "Build the partnerships, funding and global capabilities required to grow.",
      scaling1: "Grant application support",
      scaling2: "Investor connections",
      scaling3: "Global market entry",
      sustainingTitle: "Sustaining",
      sustainingBody: "Strengthen the founder and organisation for the long journey ahead.",
      sustaining1: "Founder coaching",
      sustaining2: "Wellbeing and resilience",
      sustaining3: "Community support",
      expectedOutcome: "Expected outcome",
      stageCta: "Chart this stage",
      platformLabel: "03 · Platform",
      platformTitle: "Where people meet opportunity.",
      platformSummary: "Explore the network, find the expertise you need and connect with what comes next.",
      peopleLabel: "People network",
      peopleTitle: "Find the people who can move the journey forward.",
      peopleBody: "Explore founders, experts, collaborators and potential partners in one place.",
      exploreNetwork: "Explore the network",
      askExample: "Find someone with Korean biotech funding experience.",
      askBody: "Search for the experience and connections you need in natural language.",
      filterStage: "Stage",
      filterDirection: "Direction",
      filterExpertise: "Expertise",
      filterReset: "Reset",
      filterAll: "All",
      noMatches: "No matching people found. Try a broader description.",
      showingMatches: "recommended people found.",
      resourcesLabel: "Expert knowledge",
      resourceTitle: "Practical knowledge for better decisions.",
      browseResources: "Browse resources",
      resourcesSectionLabel: "04 · Resources",
      resourcesSectionTitle: "Practical knowledge for your next decision.",
      resourcesSectionSummary: "Concise, actionable guides for funding, teams, markets and sustainable founder performance.",
      resourceDone: "Back to resources",
      eventsLabel: "Upcoming event",
      eventTitle: "Seoul Founder Night",
      eventMeta: "Seoul · 7:00 PM",
      browseEvents: "Explore events",
      eventsSectionLabel: "05 · Events",
      eventsSectionTitle: "Strong connections begin by coming together.",
      eventsSectionSummary: "Learn, connect and recharge alongside founders, experts and investors.",
      gridView: "Grid",
      listView: "List",
      eventAgenda: "Agenda",
      eventFor: "Who it is for",
      eventHost: "Host",
      addCalendar: "Add to calendar",
      registerInterest: "Register interest",
      eventDemoNote: "This is a presentation preview of the event experience.",
      interestSaved: "Interest noted. The production version will connect registration here.",
      communityLabel: "06 · Sail together",
      communityTitle: "You are not making the journey alone.",
      communityBody: "When you build with Flip One, you join a powerful startup community with access to exclusive events, expert knowledge and strategic partnerships.",
      courseLabel: "07 · Next step",
      courseTitle: "Ready to chart your course?",
      courseBody: "Tell us where you are now and where you want to go. We will help design the next stage of your journey.",
      footerLine: "A startup platform connecting Korea with the world.",
      dialogLabel: "Chart your course",
      dialogTitle: "Where are you heading?",
      close: "Close",
      nameLabel: "Name",
      emailLabel: "Email",
      directionLabel: "Growth direction",
      stageLabel: "Current stage",
      stageIdea: "Ideation",
      stageScale: "Scaling",
      stageSustain: "Sustaining",
      helpLabel: "What do you need most right now?",
      send: "Send enquiry",
      formNote: "This is currently a presentation enquiry form.",
      formSuccess: "Thank you. We will explore the next course together."
    }
  };

  var languageButtons = document.querySelectorAll("[data-language]");
  var activeLanguage = "ko";
  var activeDirection = "inbound";

  function setLanguage(language) {
    activeLanguage = language;
    var copy = translations[language] || translations.ko;
    document.documentElement.lang = language;
    document.title = copy.title;
    document.querySelector('meta[name="description"]').setAttribute("content", copy.description);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (copy[key]) element.textContent = copy[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria");
      if (copy[key]) element.setAttribute("aria-label", copy[key]);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-placeholder");
      if (copy[key]) element.setAttribute("placeholder", copy[key]);
    });

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try { localStorage.setItem("flip-one-language", language); } catch (error) {}
    renderPeopleDirectory();
    renderServiceStage();
    renderResources();
    renderEvents();
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"));
    });
  });

  var people = [
    { initials: "JK", image: "jiwon-kim.jpg", name: "김지원", nameEn: "Jiwon Kim", role: "바이오 보조금 전략가", roleEn: "Biotech Grant Strategist", location: "서울", locationEn: "Seoul", direction: "both", stage: "scaling", expertise: "funding", tags: "바이오 보조금 정부지원사업 한국 유럽 funding grant biotech korea eu", bio: "한국 바이오 스타트업의 정부지원사업과 유럽 공동연구 자금 전략을 설계합니다.", bioEn: "Designs Korean and European grant strategies for biotech startups." },
    { initials: "MP", image: "minseo-park.jpg", name: "박민서", nameEn: "Minseo Park", role: "AI 공동창업자", roleEn: "AI Cofounder", location: "서울", locationEn: "Seoul", direction: "inbound", stage: "ideation", expertise: "cofounder", tags: "인공지능 제품 기술 공동창업자 ai product technology cofounder", bio: "초기 AI 제품의 기술 방향과 팀 구성을 함께 만듭니다.", bioEn: "Shapes technical direction and founding teams for early AI products." },
    { initials: "SL", image: "sophie-laurent.jpg", name: "소피 로랑", nameEn: "Sophie Laurent", role: "EU 펀딩 전문가", roleEn: "EU Funding Specialist", location: "브뤼셀", locationEn: "Brussels", direction: "outbound", stage: "scaling", expertise: "funding", tags: "유럽 호라이즌 보조금 컨소시엄 eu europe horizon funding grant consortium", bio: "유럽 연구개발 컨소시엄과 Horizon Europe 제안서를 연결합니다.", bioEn: "Connects R&D consortia and Horizon Europe proposals." },
    { initials: "DC", image: "daniel-cho.jpg", name: "조다니엘", nameEn: "Daniel Cho", role: "글로벌 시장 진출 자문", roleEn: "Global Market Entry Advisor", location: "싱가포르", locationEn: "Singapore", direction: "outbound", stage: "scaling", expertise: "market", tags: "해외진출 아시아 한국 싱가포르 파트너십 market entry asia korea singapore partnership", bio: "한국 스타트업의 아시아 시장 진출과 현지 파트너십을 지원합니다.", bioEn: "Supports Asian market entry and local partnerships for Korean startups." },
    { initials: "HL", image: "hana-lee.jpg", name: "이하나", nameEn: "Hana Lee", role: "창업가 웰빙 코치", roleEn: "Founder Wellbeing Coach", location: "서울", locationEn: "Seoul", direction: "both", stage: "sustaining", expertise: "wellbeing", tags: "코칭 웰빙 회복탄력성 번아웃 창업가 coaching wellbeing resilience burnout founder", bio: "성장 과정에서 창업가의 회복탄력성과 지속가능한 리더십을 강화합니다.", bioEn: "Builds founder resilience and sustainable leadership through growth." },
    { initials: "MC", image: "marcus-chen.jpg", name: "마커스 첸", nameEn: "Marcus Chen", role: "하드웨어 투자 파트너", roleEn: "Hardware Investment Partner", location: "타이베이", locationEn: "Taipei", direction: "inbound", stage: "scaling", expertise: "investment", tags: "투자자 하드웨어 제조 대만 투자 investor hardware manufacturing taiwan capital", bio: "하드웨어 창업팀을 아시아 투자자와 제조 네트워크에 연결합니다.", bioEn: "Connects hardware teams with Asian investors and manufacturing networks." }
  ];

  var stageNames = {
    ideation: { ko: "아이디어 구체화", en: "Ideation" },
    scaling: { ko: "스케일업", en: "Scaling" },
    sustaining: { ko: "지속가능한 성장", en: "Sustaining" }
  };
  var expertiseNames = {
    funding: { ko: "자금 및 보조금", en: "Funding and grants" },
    cofounder: { ko: "공동창업 및 제품", en: "Cofounding and product" },
    market: { ko: "시장 진출", en: "Market entry" },
    wellbeing: { ko: "코칭 및 웰빙", en: "Coaching and wellbeing" },
    investment: { ko: "투자", en: "Investment" }
  };
  var directionNames = {
    inbound: { ko: "한국 진출", en: "Entering Korea" },
    outbound: { ko: "글로벌 진출", en: "Expanding globally" },
    both: { ko: "양쪽 시장 연결", en: "Connecting both markets" }
  };
  var peopleGrid = document.getElementById("people-grid");
  var peopleCount = document.getElementById("people-count");
  var peopleStage = document.getElementById("people-stage");
  var peopleDirection = document.getElementById("people-direction");
  var peopleExpertise = document.getElementById("people-expertise");
  var peopleAsk = document.getElementById("people-ask");
  var peopleQuery = document.getElementById("people-query");
  var peopleReset = document.getElementById("people-reset");
  var matchNote = document.getElementById("match-note");
  var activePeopleQuery = "";

  function setFilterOptions(select, names) {
    if (!select) return;
    var selected = select.value;
    select.innerHTML = '<option value="">' + translations[activeLanguage].filterAll + "</option>";
    Object.keys(names).forEach(function (key) {
      var option = document.createElement("option");
      option.value = key;
      option.textContent = names[key][activeLanguage];
      select.appendChild(option);
    });
    select.value = selected;
  }

  function renderPeopleDirectory() {
    if (!peopleGrid) return;
    setFilterOptions(peopleStage, stageNames);
    setFilterOptions(peopleDirection, directionNames);
    setFilterOptions(peopleExpertise, expertiseNames);
    var tokens = activePeopleQuery.toLowerCase().split(/\s+/).filter(function (token) { return token.length > 1; });
    var matches = people.map(function (person) {
      var haystack = [person.name, person.nameEn, person.role, person.roleEn, person.location, person.locationEn, person.tags, person.bio, person.bioEn].join(" ").toLowerCase();
      var score = tokens.reduce(function (total, token) { return total + (haystack.indexOf(token) !== -1 ? 1 : 0); }, 0);
      return { person: person, score: score };
    }).filter(function (entry) {
      var person = entry.person;
      var filtersMatch = (!peopleDirection.value || person.direction === peopleDirection.value || person.direction === "both") && (!peopleStage.value || person.stage === peopleStage.value) && (!peopleExpertise.value || person.expertise === peopleExpertise.value);
      return filtersMatch && (!tokens.length || entry.score > 0);
    }).sort(function (a, b) { return b.score - a.score; });

    peopleGrid.innerHTML = "";
    matches.forEach(function (entry) {
      var person = entry.person;
      var card = document.createElement("article");
      card.className = "person-card";
      card.innerHTML = '<div class="person-card__portrait"><img src="Assets/People/' + person.image + '" alt="' + (activeLanguage === "ko" ? person.name : person.nameEn) + '" loading="lazy"></div><div class="person-card__head"><span class="person-location">' + (activeLanguage === "ko" ? person.location : person.locationEn) + '</span></div><h4>' + (activeLanguage === "ko" ? person.name : person.nameEn) + '</h4><strong>' + (activeLanguage === "ko" ? person.role : person.roleEn) + '</strong><p>' + (activeLanguage === "ko" ? person.bio : person.bioEn) + '</p><div class="person-tags"><span>' + stageNames[person.stage][activeLanguage] + '</span><span>' + expertiseNames[person.expertise][activeLanguage] + '</span></div>';
      peopleGrid.appendChild(card);
    });
    peopleCount.textContent = String(matches.length).padStart(2, "0");
    if (activePeopleQuery) matchNote.textContent = matches.length ? matches.length + " " + translations[activeLanguage].showingMatches : translations[activeLanguage].noMatches;
    else matchNote.textContent = "";
  }

  if (peopleStage) peopleStage.addEventListener("change", renderPeopleDirectory);
  if (peopleDirection) peopleDirection.addEventListener("change", renderPeopleDirectory);
  if (peopleExpertise) peopleExpertise.addEventListener("change", renderPeopleDirectory);
  if (peopleAsk) peopleAsk.addEventListener("submit", function (event) {
    event.preventDefault();
    activePeopleQuery = peopleQuery.value.trim();
    renderPeopleDirectory();
  });
  if (peopleReset) peopleReset.addEventListener("click", function () {
    peopleStage.value = "";
    peopleDirection.value = "";
    peopleExpertise.value = "";
    peopleQuery.value = "";
    activePeopleQuery = "";
    renderPeopleDirectory();
  });

  var servicePathCopy = {
    inbound: {
      ideation: { ko: ["한국 시장에 맞는 아이디어와 진입 가설을 검증합니다.", "한국 시장 및 고객 검증", "현지 공동창업자와 전문가", "한국 초기 자금 전략", "검증된 한국 시장 가설과 첫 현지 실행 계획을 갖추게 됩니다."], en: ["Validate your idea and entry assumptions for the Korean market.", "Korean market and customer validation", "Local cofounders and specialists", "Korean early funding strategy", "Leave with a validated Korean market hypothesis and a first local action plan."] },
      scaling: { ko: ["한국에서 성장하는 데 필요한 자금, 파트너십, 현지 역량을 구축합니다.", "한국 보조금 신청 지원", "국내 투자자 및 파트너 연결", "현지화와 시장 진입", "명확한 한국 진입 경로와 자금 전략, 실행 파트너 네트워크를 갖추게 됩니다."], en: ["Build the funding, partnerships and local capability required to grow in Korea.", "Korean grant application support", "Local investor and partner connections", "Localisation and market entry", "Leave with a clear Korean entry route, funding strategy and local partner network."] },
      sustaining: { ko: ["한국에서 장기적으로 운영할 수 있는 조직과 리더십 기반을 강화합니다.", "현지 운영과 리더십", "창업가 웰빙과 회복탄력성", "한국 스타트업 커뮤니티", "한국에서 지속적으로 성장할 수 있는 현지 운영 리듬과 지원망을 구축합니다."], en: ["Strengthen the organisation and leadership needed to operate in Korea for the long term.", "Local operations and leadership", "Founder wellbeing and resilience", "Korean startup community", "Build a sustainable local operating rhythm and support network in Korea."] }
    },
    outbound: {
      ideation: { ko: ["해외 시장에 맞는 기회와 첫 진출 가설을 검증합니다.", "글로벌 시장 우선순위 설정", "해외 고객 및 기회 검증", "국제 자금 전략", "우선 진출 시장과 검증 가능한 첫 해외 실험을 갖추게 됩니다."], en: ["Validate the opportunity and first entry hypothesis for overseas markets.", "Global market prioritisation", "Overseas customer validation", "International funding strategy", "Leave with a priority market and a testable first overseas experiment."] },
      scaling: { ko: ["글로벌 성장에 필요한 자금, 파트너십, 국제 역량을 구축합니다.", "국제 보조금 신청 지원", "글로벌 투자자 연결", "해외 파트너십과 시장 진출", "명확한 해외 진출 계획과 국제 자금 경로, 실행 파트너를 갖추게 됩니다."], en: ["Build the funding, partnerships and international capability required for global growth.", "International grant support", "Global investor connections", "Overseas partnerships and market entry", "Leave with a clear overseas plan, international funding route and execution partners."] },
      sustaining: { ko: ["국경을 넘어 성장하는 팀과 창업가의 지속가능성을 강화합니다.", "국제 운영과 분산 팀", "창업가 코칭과 회복탄력성", "글로벌 창업가 커뮤니티", "국제 조직의 실행력과 창업가의 에너지를 보호하는 운영 방식을 구축합니다."], en: ["Strengthen the team and founder for sustainable growth across borders.", "International operations and distributed teams", "Founder coaching and resilience", "Global founder community", "Build an operating model that protects founder energy and international execution."] }
    }
  };
  var activeServiceStage = "scaling";
  var serviceCards = document.querySelectorAll("[data-service-stage]");
  var serviceDetailTitle = document.getElementById("service-detail-title");
  var serviceDetailCopy = document.getElementById("service-detail-copy");
  var serviceDetailButton = document.querySelector("#service-detail [data-course-stage]");

  function renderServiceStage() {
    if (!serviceDetailTitle) return;
    var pathway = servicePathCopy[activeDirection];
    Object.keys(pathway).forEach(function (stage) {
      var copy = pathway[stage][activeLanguage];
      var body = document.querySelector('[data-service-body="' + stage + '"]');
      if (body) body.textContent = copy[0];
      copy.slice(1, 4).forEach(function (item, index) {
        var element = document.querySelector('[data-service-item="' + stage + '-' + index + '"]');
        if (element) element.textContent = item;
      });
    });
    serviceCards.forEach(function (card) {
      var isActive = card.getAttribute("data-service-stage") === activeServiceStage;
      card.classList.toggle("stage-card--active", isActive);
      card.setAttribute("aria-selected", String(isActive));
    });
    serviceDetailTitle.textContent = stageNames[activeServiceStage][activeLanguage];
    serviceDetailCopy.textContent = pathway[activeServiceStage][activeLanguage][4];
    serviceDetailButton.setAttribute("data-course-stage", activeServiceStage);
  }

  function selectServiceStage(card) {
    activeServiceStage = card.getAttribute("data-service-stage");
    renderServiceStage();
  }

  serviceCards.forEach(function (card) {
    card.addEventListener("click", function () { selectServiceStage(card); });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectServiceStage(card);
      }
    });
  });

  var pathwayButtons = document.querySelectorAll("[data-direction]");
  function selectDirection(direction) {
    activeDirection = direction;
    pathwayButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-direction") === direction;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    if (peopleDirection) peopleDirection.value = direction;
    var formDirection = document.querySelector('#course-form select[name="direction"]');
    if (formDirection) formDirection.value = direction;
    renderServiceStage();
    renderPeopleDirectory();
    renderResources();
  }
  pathwayButtons.forEach(function (button) {
    button.addEventListener("click", function () { selectDirection(button.getAttribute("data-direction")); });
  });

  var resourceCategories = {
    all: { ko: "전체", en: "All" },
    funding: { ko: "자금", en: "Funding" },
    team: { ko: "팀", en: "Team" },
    market: { ko: "시장", en: "Market" },
    wellbeing: { ko: "웰빙", en: "Wellbeing" }
  };
  var resources = [
    { id: "korea-grants", category: "funding", icon: "chart-line-up.svg", time: 8, title: "한국 스타트업 지원사업 로드맵", titleEn: "Korean Startup Grant Roadmap", summary: "정부지원사업을 탐색하고 우리 팀에 맞는 공고를 선별하는 기본 경로입니다.", summaryEn: "A practical route for finding and selecting Korean public funding opportunities.", points: ["현재 단계와 기술 분야 정의", "관련 기관과 공고 일정 매핑", "평가 기준에 맞춘 준비 순서"], pointsEn: ["Define your stage and technology field", "Map relevant agencies and calls", "Prepare in the order evaluators expect"] },
    { id: "horizon-europe", category: "funding", icon: "book-open-text.svg", time: 10, powered: true, title: "Horizon Europe 입문", titleEn: "Horizon Europe Introduction", summary: "유럽 공동연구 자금이 어떻게 작동하고 스타트업이 어디서 시작해야 하는지 설명합니다.", summaryEn: "How European collaborative funding works and where a startup should begin.", points: ["프로그램 구조와 주요 용어", "컨소시엄에서 스타트업의 역할", "적합한 공고와 파트너를 찾는 방법"], pointsEn: ["Programme structure and key terms", "The startup role in a consortium", "How to find suitable calls and partners"] },
    { id: "cofounder", category: "team", icon: "users-three.svg", time: 6, title: "공동창업자 매칭 체크리스트", titleEn: "Cofounder Matching Checklist", summary: "기술보다 먼저 정렬해야 할 동기, 역할, 의사결정 방식에 관한 질문입니다.", summaryEn: "Questions to align motivation, roles and decision-making before technology.", points: ["개인의 동기와 장기 목표", "역할, 지분, 의사결정 원칙", "갈등과 이탈 상황의 대응"], pointsEn: ["Personal motivation and long-term goals", "Roles, equity and decision principles", "Conflict and founder-exit scenarios"] },
    { id: "market-entry", category: "market", icon: "globe.svg", time: 9, title: "한국에서 글로벌 시장으로", titleEn: "Korea-to-Global Market Entry Guide", summary: "새로운 시장을 선택하고 현지 파트너와 첫 실험을 설계하는 프레임워크입니다.", summaryEn: "A framework for choosing a market and designing the first local experiment.", points: ["시장 매력도와 진입 난이도 비교", "현지 고객 가설 검증", "파트너 역할과 첫 실험 설계"], pointsEn: ["Compare market value and entry friction", "Validate local customer assumptions", "Define partners and the first experiment"] },
    { id: "investor-ready", category: "funding", icon: "checks.svg", time: 7, title: "투자 준비도 체크리스트", titleEn: "Investor Readiness Checklist", summary: "투자자 대화 전에 스토리, 지표, 자료실을 점검하는 빠른 진단입니다.", summaryEn: "A quick diagnostic for your story, metrics and data room before investor conversations.", points: ["투자 논리와 핵심 증거", "견인력 지표와 재무 가정", "자료실과 후속 질문 준비"], pointsEn: ["Investment logic and core evidence", "Traction metrics and financial assumptions", "Data room and follow-up preparation"] },
    { id: "resilience", category: "wellbeing", icon: "heart.svg", time: 5, title: "창업가 회복탄력성 툴킷", titleEn: "Founder Resilience Toolkit", summary: "압박 속에서도 에너지와 판단력을 지키기 위한 작은 운영 습관입니다.", summaryEn: "Small operating habits that protect energy and judgement under pressure.", points: ["주간 에너지와 집중도 점검", "고위험 결정 전 회복 루틴", "팀과 신호를 공유하는 방법"], pointsEn: ["Weekly energy and focus review", "Recovery before high-risk decisions", "Share signals safely with the team"] }
  ];
  var resourceGrid = document.getElementById("resource-grid");
  var resourceFilters = document.getElementById("resource-filters");
  var activeResourceCategory = "all";
  var resourceDialog = document.getElementById("resource-dialog");
  var resourceDirections = { "korea-grants": "inbound", "horizon-europe": "outbound", cofounder: "both", "market-entry": "outbound", "investor-ready": "both", resilience: "both" };

  function renderResources() {
    if (!resourceGrid || !resourceFilters) return;
    resourceFilters.innerHTML = "";
    Object.keys(resourceCategories).forEach(function (key) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = key === activeResourceCategory ? "is-active" : "";
      button.textContent = resourceCategories[key][activeLanguage];
      button.setAttribute("data-resource-filter", key);
      resourceFilters.appendChild(button);
    });
    resourceGrid.innerHTML = "";
    resources.filter(function (resource) {
      var resourceDirection = resourceDirections[resource.id] || "both";
      var categoryMatch = activeResourceCategory === "all" || resource.category === activeResourceCategory;
      return categoryMatch && (resourceDirection === activeDirection || resourceDirection === "both");
    }).forEach(function (resource, index) {
      var card = document.createElement("article");
      card.className = "resource-card";
      var resourceDirection = resourceDirections[resource.id] || "both";
      card.innerHTML = '<div class="resource-card__top"><span class="resource-icon"><img src="Assets/Icons/' + resource.icon + '" alt=""></span><span class="resource-index">0' + (index + 1) + '</span></div><span class="resource-category">' + directionNames[resourceDirection][activeLanguage] + ' · ' + resourceCategories[resource.category][activeLanguage] + ' · ' + resource.time + ' MIN</span><h3>' + (activeLanguage === "ko" ? resource.title : resource.titleEn) + '</h3><p>' + (activeLanguage === "ko" ? resource.summary : resource.summaryEn) + '</p>' + (resource.powered ? '<span class="powered-badge">Powered by InsightMatches</span>' : '') + '<button type="button" data-resource-id="' + resource.id + '" aria-label="' + translations[activeLanguage].openResource + '">→</button>';
      resourceGrid.appendChild(card);
    });
  }

  function openResource(resourceId) {
    var resource = resources.find(function (item) { return item.id === resourceId; });
    if (!resource || !resourceDialog) return;
    document.getElementById("resource-dialog-category").textContent = resourceCategories[resource.category][activeLanguage] + " · " + resource.time + " MIN";
    document.getElementById("resource-dialog-title").textContent = activeLanguage === "ko" ? resource.title : resource.titleEn;
    document.getElementById("resource-dialog-summary").textContent = activeLanguage === "ko" ? resource.summary : resource.summaryEn;
    var points = activeLanguage === "ko" ? resource.points : resource.pointsEn;
    document.getElementById("resource-dialog-body").innerHTML = "<ol>" + points.map(function (point) { return "<li>" + point + "</li>"; }).join("") + "</ol>";
    document.getElementById("resource-dialog-attribution").hidden = !resource.powered;
    if (typeof resourceDialog.showModal === "function") resourceDialog.showModal();
  }

  if (resourceFilters) resourceFilters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-resource-filter]");
    if (!button) return;
    activeResourceCategory = button.getAttribute("data-resource-filter");
    renderResources();
  });
  if (resourceGrid) resourceGrid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-resource-id]");
    if (button) openResource(button.getAttribute("data-resource-id"));
  });
  document.querySelectorAll("[data-close-resource]").forEach(function (button) {
    button.addEventListener("click", function () { if (resourceDialog) resourceDialog.close(); });
  });

  var eventCategories = {
    all: { ko: "전체", en: "All" },
    networking: { ko: "네트워킹", en: "Networking" },
    funding: { ko: "자금", en: "Funding" },
    learning: { ko: "러닝", en: "Learning" },
    wellbeing: { ko: "웰빙", en: "Wellbeing" }
  };
  var events = [
    { id: "founder-night", category: "networking", icon: "users-three.svg", day: "18", month: "SEP", dateKo: "2026년 9월 18일 · 오후 7시", dateEn: "18 September 2026 · 7:00 PM", start: "20260918T100000Z", end: "20260918T120000Z", location: "서울 성수", locationEn: "Seongsu, Seoul", capacity: 60, title: "Seoul Founder Night", titleEn: "Seoul Founder Night", summary: "국경과 산업을 넘어 새로운 동료와 협력자를 만나는 편안한 창업가 모임입니다.", summaryEn: "A relaxed founder gathering for meeting new collaborators across borders and industries.", agenda: ["환영과 연결", "창업가 이야기", "오픈 네트워킹"], agendaEn: ["Welcome and connections", "Founder stories", "Open networking"], audience: "초기 및 성장 단계 창업가", audienceEn: "Early and growth-stage founders", host: "Flip One Community" },
    { id: "grant-clinic", category: "funding", icon: "funding.svg", day: "02", month: "OCT", dateKo: "2026년 10월 2일 · 오후 4시", dateEn: "2 October 2026 · 4:00 PM", start: "20261002T070000Z", end: "20261002T090000Z", location: "온라인", locationEn: "Online", capacity: 30, title: "보조금 전략 클리닉", titleEn: "Grant Strategy Clinic", summary: "현재 프로젝트에 맞는 지원사업과 다음 신청 단계를 전문가와 함께 점검합니다.", summaryEn: "Review suitable funding routes and the next application step with specialists.", agenda: ["기회 적합성 진단", "신청 논리 점검", "공개 질의응답"], agendaEn: ["Opportunity fit diagnostic", "Application logic review", "Open Q&A"], audience: "보조금 신청을 준비하는 팀", audienceEn: "Teams preparing grant applications", host: "Flip One Funding Team" },
    { id: "horizon-briefing", category: "learning", icon: "learning.svg", day: "15", month: "OCT", dateKo: "2026년 10월 15일 · 오후 6시", dateEn: "15 October 2026 · 6:00 PM", start: "20261015T090000Z", end: "20261015T103000Z", location: "서울 종로", locationEn: "Jongno, Seoul", capacity: 45, title: "Horizon Europe 브리핑", titleEn: "Horizon Europe Briefing", summary: "한국 스타트업을 위한 유럽 공동연구 자금과 컨소시엄 참여의 핵심을 소개합니다.", summaryEn: "An introduction to European collaborative funding and consortium participation for Korean startups.", agenda: ["Horizon Europe 구조", "스타트업의 역할", "파트너 탐색 전략"], agendaEn: ["Horizon Europe structure", "The startup role", "Partner search strategy"], audience: "연구개발 중심 스타트업", audienceEn: "Research-led startups", host: "Flip One × InsightMatches" },
    { id: "cofounder-table", category: "networking", icon: "users-three.svg", day: "29", month: "OCT", dateKo: "2026년 10월 29일 · 오후 7시", dateEn: "29 October 2026 · 7:00 PM", start: "20261029T100000Z", end: "20261029T120000Z", location: "서울 강남", locationEn: "Gangnam, Seoul", capacity: 24, title: "Cofounder Table", titleEn: "Cofounder Table", summary: "역할과 가치관을 중심으로 잠재적 공동창업자를 깊이 있게 알아가는 소규모 세션입니다.", summaryEn: "A small-group session for meeting potential cofounders through roles and values.", agenda: ["창업 동기 소개", "역할 기반 대화", "후속 연결 선택"], agendaEn: ["Founder motivations", "Role-based conversations", "Choose follow-up connections"], audience: "공동창업자를 찾는 예비 창업가", audienceEn: "Prospective founders seeking a cofounder", host: "Flip One People" },
    { id: "market-lab", category: "learning", icon: "globe.svg", day: "12", month: "NOV", dateKo: "2026년 11월 12일 · 오후 5시", dateEn: "12 November 2026 · 5:00 PM", start: "20261112T080000Z", end: "20261112T100000Z", location: "서울 마포", locationEn: "Mapo, Seoul", capacity: 36, title: "Global Market Entry Lab", titleEn: "Global Market Entry Lab", summary: "해외 시장 가설을 검증하고 가장 작은 현지 실험을 설계하는 워크숍입니다.", summaryEn: "A workshop for validating an overseas market and designing the smallest local experiment.", agenda: ["시장 우선순위", "고객 가설", "30일 실험 설계"], agendaEn: ["Market prioritisation", "Customer assumptions", "Design a 30-day experiment"], audience: "해외 진출을 준비하는 팀", audienceEn: "Teams preparing international expansion", host: "Flip One Market Team" },
    { id: "founder-reset", category: "wellbeing", icon: "heart.svg", day: "27", month: "NOV", dateKo: "2026년 11월 27일 · 오전 10시", dateEn: "27 November 2026 · 10:00 AM", start: "20261127T010000Z", end: "20261127T030000Z", location: "서울 한남", locationEn: "Hannam, Seoul", capacity: 20, title: "Founder Reset Morning", titleEn: "Founder Reset Morning", summary: "집중력과 에너지를 회복하고 지속가능한 주간 리듬을 설계하는 아침 세션입니다.", summaryEn: "A morning session to restore focus and design a more sustainable weekly rhythm.", agenda: ["에너지 체크인", "움직임과 호흡", "주간 리듬 설계"], agendaEn: ["Energy check-in", "Movement and breathing", "Weekly rhythm design"], audience: "회복과 재정비가 필요한 창업가", audienceEn: "Founders needing recovery and reset", host: "Flip One Wellbeing" }
  ];
  var eventGrid = document.getElementById("event-grid");
  var eventFilters = document.getElementById("event-filters");
  var eventDialog = document.getElementById("event-dialog");
  var activeEventCategory = "all";
  var activeEventView = "grid";
  var activeEvent = null;

  function renderEvents() {
    if (!eventGrid || !eventFilters) return;
    eventFilters.innerHTML = "";
    Object.keys(eventCategories).forEach(function (key) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = key === activeEventCategory ? "is-active" : "";
      button.setAttribute("data-event-filter", key);
      button.textContent = eventCategories[key][activeLanguage];
      eventFilters.appendChild(button);
    });
    eventGrid.classList.toggle("event-grid--list", activeEventView === "list");
    eventGrid.innerHTML = "";
    events.filter(function (item) { return activeEventCategory === "all" || item.category === activeEventCategory; }).forEach(function (item, index) {
      var card = document.createElement("article");
      card.className = "event-card" + (index === 0 && activeEventCategory === "all" ? " event-card--featured" : "");
      card.innerHTML = '<div class="event-card__date"><b>' + item.day + '</b><span>' + item.month + '</span></div><div class="event-card__content"><div class="event-card__category"><img src="Assets/Icons/' + item.icon + '" alt=""><span>' + eventCategories[item.category][activeLanguage] + '</span></div><h3>' + (activeLanguage === "ko" ? item.title : item.titleEn) + '</h3><p>' + (activeLanguage === "ko" ? item.summary : item.summaryEn) + '</p><div class="event-card__meta"><span>' + (activeLanguage === "ko" ? item.location : item.locationEn) + '</span><span>' + item.capacity + (activeLanguage === "ko" ? '명' : ' seats') + '</span></div></div><button type="button" data-event-id="' + item.id + '" aria-label="' + translations[activeLanguage].openEvent + '">→</button>';
      eventGrid.appendChild(card);
    });
  }

  function openEvent(eventId) {
    activeEvent = events.find(function (item) { return item.id === eventId; });
    if (!activeEvent || !eventDialog) return;
    document.getElementById("event-dialog-category").textContent = eventCategories[activeEvent.category][activeLanguage];
    document.getElementById("event-dialog-title").textContent = activeLanguage === "ko" ? activeEvent.title : activeEvent.titleEn;
    document.getElementById("event-dialog-meta").innerHTML = '<span>' + (activeLanguage === "ko" ? activeEvent.dateKo : activeEvent.dateEn) + '</span><span>' + (activeLanguage === "ko" ? activeEvent.location : activeEvent.locationEn) + '</span><span>' + activeEvent.capacity + '</span>';
    document.getElementById("event-dialog-summary").textContent = activeLanguage === "ko" ? activeEvent.summary : activeEvent.summaryEn;
    var agenda = activeLanguage === "ko" ? activeEvent.agenda : activeEvent.agendaEn;
    document.getElementById("event-dialog-agenda").innerHTML = agenda.map(function (item) { return "<li>" + item + "</li>"; }).join("");
    document.getElementById("event-dialog-audience").textContent = activeLanguage === "ko" ? activeEvent.audience : activeEvent.audienceEn;
    document.getElementById("event-dialog-host").textContent = activeEvent.host;
    document.querySelector(".event-dialog__note").hidden = true;
    if (typeof eventDialog.showModal === "function") eventDialog.showModal();
  }

  function downloadEventCalendar() {
    if (!activeEvent) return;
    var title = activeLanguage === "ko" ? activeEvent.title : activeEvent.titleEn;
    var location = activeLanguage === "ko" ? activeEvent.location : activeEvent.locationEn;
    var description = activeLanguage === "ko" ? activeEvent.summary : activeEvent.summaryEn;
    var calendar = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Flip One//Events//EN", "BEGIN:VEVENT", "UID:" + activeEvent.id + "@flipone.local", "DTSTAMP:20260903T000000Z", "DTSTART:" + activeEvent.start, "DTEND:" + activeEvent.end, "SUMMARY:" + title, "DESCRIPTION:" + description, "LOCATION:" + location, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    var blob = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "flip-one-" + activeEvent.id + ".ics";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (eventFilters) eventFilters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-event-filter]");
    if (!button) return;
    activeEventCategory = button.getAttribute("data-event-filter");
    renderEvents();
  });
  document.querySelectorAll("[data-event-view]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeEventView = button.getAttribute("data-event-view");
      document.querySelectorAll("[data-event-view]").forEach(function (item) { item.classList.toggle("is-active", item === button); });
      renderEvents();
    });
  });
  if (eventGrid) eventGrid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-event-id]");
    if (button) openEvent(button.getAttribute("data-event-id"));
  });
  document.querySelectorAll("[data-close-event]").forEach(function (button) {
    button.addEventListener("click", function () { if (eventDialog) eventDialog.close(); });
  });
  var eventCalendarButton = document.getElementById("event-calendar");
  if (eventCalendarButton) eventCalendarButton.addEventListener("click", downloadEventCalendar);
  var eventRegisterButton = document.querySelector(".event-register");
  if (eventRegisterButton) eventRegisterButton.addEventListener("click", function () {
    var note = document.querySelector(".event-dialog__note");
    note.textContent = translations[activeLanguage].interestSaved;
    note.hidden = false;
  });

  var savedLanguage = "ko";
  try { savedLanguage = localStorage.getItem("flip-one-language") || "ko"; } catch (error) {}
  setLanguage(savedLanguage === "en" ? "en" : "ko");
  selectDirection(activeDirection);

  var menuButton = document.getElementById("menu-button");
  var mobileNav = document.getElementById("mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      var willOpen = mobileNav.hasAttribute("hidden");
      mobileNav.toggleAttribute("hidden", !willOpen);
      menuButton.setAttribute("aria-expanded", String(willOpen));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  var courseDialog = document.getElementById("course-dialog");
  var courseForm = document.getElementById("course-form");
  var formSuccess = document.getElementById("form-success");

  document.querySelectorAll("[data-open-course]").forEach(function (button) {
    button.addEventListener("click", function () {
      var requestedStage = button.getAttribute("data-course-stage");
      var stageSelect = courseForm && courseForm.querySelector('select[name="stage"]');
      if (requestedStage && stageSelect) {
        var stageIndexes = { ideation: 0, scaling: 1, sustaining: 2 };
        stageSelect.selectedIndex = stageIndexes[requestedStage];
      }
      if (courseDialog && typeof courseDialog.showModal === "function") courseDialog.showModal();
    });
  });

  document.querySelectorAll("[data-close-course]").forEach(function (button) {
    button.addEventListener("click", function () {
      if (courseDialog) courseDialog.close();
    });
  });

  if (courseDialog) {
    courseDialog.addEventListener("click", function (event) {
      if (event.target === courseDialog) courseDialog.close();
    });
  }

  if (courseForm) {
    courseForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (formSuccess) formSuccess.hidden = false;
    });
  }

  if (!header || !hero) return;

  function updateHeader() {
    var heroBottom = hero.getBoundingClientRect().bottom;
    header.classList.toggle("is-light", heroBottom < 72);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();

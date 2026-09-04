(function () {
  var header = document.getElementById("site-header");
  var hero = document.querySelector(".hero");

  var translations = {
    ko: {
      title: "Flip One | 스타트업의 길을 밝히는 등대",
      description: "Flip One은 해외 벤처의 한국 진출과 한국 기반 비즈니스의 글로벌 확장을 지원하는 서울 기반 벤처 플랫폼입니다.",
      platformPageTitle: "Flip One | 피플",
      servicesPageTitle: "Flip One | 서비스",
      resourcesPageTitle: "Flip One | 가이드",
      eventsPageTitle: "Flip One | 이벤트",
      platformDescription: "Flip One의 창업가, 전문가, 파트너 네트워크를 탐색하세요.",
      servicesDescription: "아이디어 구체화부터 확장과 지속가능한 성장까지 지원하는 Flip One 서비스입니다.",
      resourcesDescription: "자금, 팀, 시장과 지속가능한 성장을 위한 Flip One 실용 가이드입니다.",
      eventsDescription: "Flip One 창업가 커뮤니티의 모임, 클리닉, 워크숍을 확인하세요.",
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
      cta: "성장 방향 상담하기",
      heroEyebrow: "한국과 세계 사이에서 성장하는 창업가를 위해",
      heroTitle1: "스타트업의 길을",
      heroTitle2: "밝히는 등대.",
      heroSummary: "Flip One은 한국과 세계 사이에서 성장하는 창업가를 위한 서울 기반 벤처 플랫폼입니다. 해외 벤처의 한국 진출과 한국 기반 비즈니스의 글로벌 확장을 지원합니다.",
      heroAudience: "기술 스타트업, AI 기반 크리에이터, 콘텐츠 및 엔터테인먼트 비즈니스와 함께합니다.",
      exploreServices: "서비스 살펴보기",
      exploreLabel: "02 · 더 알아보기",
      exploreTitle: "필요한 곳으로 바로 이동하세요.",
      exploreSummary: "플랫폼을 탐색하고, 서비스를 살펴보고, 지식과 이벤트를 찾아보세요.",
      portalPlatformTitle: "함께 항해할 사람을 찾으세요.",
      portalPlatformBody: "네트워크를 검색하고 필요한 경험과 연결을 발견하세요.",
      portalServicesTitle: "다음 성장 단계를 설계하세요.",
      portalServicesBody: "아이디어, 확장, 지속가능성에 맞는 지원을 확인하세요.",
      portalResourcesTitle: "실용적인 지식을 탐색하세요.",
      portalResourcesBody: "자금, 시장, 팀을 위한 가이드를 검색하세요.",
      portalEventsTitle: "커뮤니티와 만나세요.",
      portalEventsBody: "다가오는 모임, 클리닉, 워크숍을 확인하세요.",
      heroKeywords: "방향 · 자금 · 사람",
      sectionLabel: "01 · 방향 찾기",
      directionTitle: "항로를 찾으세요.",
      directionSummary: "시장과 기회를 정의하고, 자금 전략을 세우며, 실행에 필요한 사람을 연결합니다.",
      value1Title: "성장 경로 정의",
      value1Body: "적합한 시장, 기회와 프로그램을 찾아 우선순위를 정합니다.",
      value2Title: "자금 전략 수립",
      value2Body: "보조금, 투자 경로와 신청 우선순위를 구체화합니다.",
      value3Title: "적합한 사람 연결",
      value3Body: "전문가, 파트너, 공동창업자와 투자자를 연결합니다.",
      value4Title: "시장 진입과 성장",
      value4Body: "전략을 실제 시장 활동과 지속 가능한 성장으로 전환합니다.",
      pathwaysLabel: "두 개의 방향 · 하나의 플랫폼",
      pathwaysTitle: "어느 방향으로 성장하고 있나요?",
      pathwaysSummary: "공통된 실행 방식에 각 시장에 필요한 전문성과 자금 경로를 결합합니다.",
      homePathwaysTitle: "한국으로, 그리고 세계로.",
      homePathwaysSummary: "같은 실행 방식으로 서로 다른 시장 진출 과제를 해결합니다.",
      homeInbound1: "한국 시장 및 기회 검증",
      homeInbound2: "정부지원사업과 자금 경로",
      homeInbound3: "현지 파트너와 전문가",
      homeInbound4: "실행 가능한 진입 계획",
      homeOutbound1: "해외 시장 우선순위 설정",
      homeOutbound2: "국제 보조금과 자금 전략",
      homeOutbound3: "글로벌 파트너와 컨소시엄",
      homeOutbound4: "검증 가능한 확장 계획",
      pathwaysAria: "성장 방향",
      inboundTitle: "한국 진출",
      inboundBody: "해외 창업가와 조직을 한국의 시장, 자금, 파트너와 연결합니다.",
      outboundTitle: "글로벌 진출",
      outboundBody: "한국 창업가를 글로벌 시장, 자금, 파트너와 연결합니다.",
      bothDirection: "양쪽 시장 연결",
      servicesLabel: "01 · 서비스",
      servicesTitle: "국제 성장을 실행 가능한 계획으로.",
      servicesSummary: "시장 진출 진단, 자금 전략과 파트너 연결을 통해 한국과 글로벌 시장에서의 다음 단계를 구체화합니다.",
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
      expectedOutcome: "제공 결과물",
      stageCta: "이 단계 상담하기",
      platformLabel: "02 · 피플",
      platformTitle: "사람과 기회가 만나는 곳.",
      platformSummary: "네트워크를 탐색하고, 필요한 전문성을 찾고, 다음 기회와 연결하세요.",
      peopleLabel: "피플 네트워크",
      peopleTitle: "함께 항해할 사람을 찾으세요.",
      peopleBody: "창업가, 전문가, 협력자와 잠재적 파트너를 한곳에서 탐색합니다.",
      exploreNetwork: "네트워크 살펴보기",
      askExample: "한국 바이오 보조금 경험이 있는 사람을 찾아주세요.",
      askBody: "키워드나 짧은 설명으로 필요한 경험과 연결을 검색하세요.",
      directoryLabel: "피플 디렉토리",
      filterStage: "단계",
      filterDirection: "방향",
      filterExpertise: "전문 분야",
      filterReset: "초기화",
      filterAll: "전체",
      noMatches: "조건에 맞는 사람을 찾지 못했습니다. 더 넓은 표현으로 다시 검색해 보세요.",
      showingMatches: "명의 인물을 찾았습니다.",
      matchedBecause: "일치 항목",
      viewProfile: "프로필 보기",
      canHelpWith: "도움을 드릴 수 있는 분야",
      marketsLabel: "시장",
      languagesLabel: "언어",
      requestIntro: "소개 요청하기",
      introReasonLabel: "연결을 원하는 이유",
      sendIntro: "요청 준비하기",
      introNote: "이 프로토타입은 정보를 전송하거나 저장하지 않습니다.",
      introSuccess: "요청 미리보기가 완료되었습니다. 입력한 정보는 전송되지 않았습니다.",
      resourcesLabel: "전문 자료",
      resourceTitle: "더 나은 결정을 위한 실용적인 지식.",
      browseResources: "자료 살펴보기",
      resourcesSectionLabel: "03 · 가이드",
      resourcesSectionTitle: "다음 결정을 위한 실용적인 지식.",
      resourcesSectionSummary: "자금, 팀, 시장, 창업가의 지속가능성을 위한 간결하고 실행 가능한 가이드입니다.",
      wikiSearch: "가이드 검색",
      wikiSearchPlaceholder: "가이드, 시장, 자금 검색",
      wikiUpdated: "최근 업데이트",
      wikiKnowledge: "가이드 라이브러리",
      resourceDone: "자료로 돌아가기",
      eventsLabel: "다가오는 이벤트",
      eventTitle: "Seoul Founder Night",
      eventMeta: "서울 · 오후 7시",
      browseEvents: "이벤트 살펴보기",
      eventsSectionLabel: "04 · 이벤트",
      eventsSectionTitle: "좋은 연결은 함께 모일 때 시작됩니다.",
      eventsSectionSummary: "창업가, 전문가, 투자자와 함께 배우고 연결하며 다시 에너지를 채우세요.",
      eventWallLabel: "세 가지 방식으로 함께하세요",
      eventWallCopy: "어디서나 배우고, 테이블에서 깊이 만나고, 커뮤니티와 함께 성장하세요.",
      gridView: "카드",
      listView: "목록",
      eventAgenda: "프로그램",
      eventFor: "추천 대상",
      eventHost: "호스트",
      addCalendar: "캘린더에 추가",
      registerInterest: "참가 관심 등록",
      eventEnquire: "이벤트 문의",
      interestSaved: "관심이 등록되었습니다. 정식 출시 시 이 단계에서 신청을 연결합니다.",
      communityLabel: "03 · 함께 항해하기",
      communityTitle: "혼자 가는 여정이 아닙니다.",
      communityBody: "Flip One은 실용적인 이벤트, 전문 지식과 선별된 연결을 통해 창업가가 혼자 해결하기 어려운 국제 성장 과제를 함께 풀어갑니다.",
      credibilityLabel: "전문성을 기반으로",
      credibilityTitle: "서울에서 시작해 세계와 연결합니다.",
      credibility1Title: "국제 자금 전문성",
      credibility1Body: "InsightMatches의 국제 보조금 및 컨소시엄 경험을 기반으로 합니다.",
      credibility2Title: "한국 시장 실행력",
      credibility2Body: "한국 진출에 필요한 시장 이해와 현지 연결을 제공합니다.",
      credibility3Title: "엄선된 네트워크",
      credibility3Body: "창업가의 과제에 맞는 전문가, 운영자와 파트너를 연결합니다.",
      courseLabel: "04 · 다음 단계",
      courseTitle: "어디에서, 어디로 성장하고 있나요?",
      courseBody: "현재 시장, 목표 시장과 가장 큰 과제를 알려주세요. 실행 가능한 다음 단계를 함께 살펴보겠습니다.",
      footerLine: "한국과 세계를 연결하는 스타트업 플랫폼.",
      dialogLabel: "성장 방향 상담",
      dialogTitle: "어디에서, 어디로 성장하고 있나요?",
      close: "닫기",
      nameLabel: "이름",
      emailLabel: "이메일",
      directionLabel: "성장 방향",
      stageLabel: "현재 단계",
      stageIdea: "아이디어 구체화",
      stageScale: "스케일업",
      stageSustain: "지속가능한 성장",
      helpLabel: "지금 가장 필요한 것은 무엇인가요?",
      send: "상담 내용 준비하기",
      formNote: "이 미리보기에서는 개인정보가 전송되거나 저장되지 않습니다.",
      formSuccess: "미리보기가 완료되었습니다. 입력한 정보는 전송되지 않았습니다."
    },
    en: {
      title: "Flip One | Your startup lighthouse",
      description: "Flip One is a Seoul-based venture platform helping international ventures enter Korea and Korea-based businesses expand globally.",
      platformPageTitle: "Flip One | People",
      servicesPageTitle: "Flip One | Services",
      resourcesPageTitle: "Flip One | Guides",
      eventsPageTitle: "Flip One | Events",
      platformDescription: "Explore the Flip One network of founders, specialists and potential partners.",
      servicesDescription: "Flip One support from ideation through scaling and sustainable growth.",
      resourcesDescription: "Practical Flip One guides for funding, teams, markets and sustainable growth.",
      eventsDescription: "Discover Flip One founder gatherings, clinics and workshops.",
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
      cta: "Discuss your route",
      heroEyebrow: "For founders building between Korea and the world",
      heroTitle1: "Your startup",
      heroTitle2: "lighthouse.",
      heroSummary: "Flip One is a Seoul-based venture platform for founders building between Korea and the world. We help international ventures enter Korea and Korea-based businesses expand globally.",
      heroAudience: "Built for technology startups, AI-enabled creators, content companies and entertainment ventures.",
      exploreServices: "Explore our services",
      exploreLabel: "02 · Explore",
      exploreTitle: "Go directly where you need to be.",
      exploreSummary: "Enter the platform, explore our services, or find useful knowledge and events.",
      portalPlatformTitle: "Find the people for your voyage.",
      portalPlatformBody: "Search the network and discover the experience and connections you need.",
      portalServicesTitle: "Design your next stage of growth.",
      portalServicesBody: "Explore support for ideation, scaling and sustainable growth.",
      portalResourcesTitle: "Explore practical knowledge.",
      portalResourcesBody: "Search guides for funding, markets and founding teams.",
      portalEventsTitle: "Meet the community.",
      portalEventsBody: "Discover upcoming gatherings, clinics and workshops.",
      heroKeywords: "Direction · Funding · People",
      sectionLabel: "01 · Find your bearings",
      directionTitle: "Find your bearings.",
      directionSummary: "Define the market and opportunity, build a funding strategy and connect with the people required to execute it.",
      value1Title: "Define your route",
      value1Body: "Identify and prioritise the right market, opportunity and programme.",
      value2Title: "Build your funding strategy",
      value2Body: "Map relevant grants, investment pathways and application priorities.",
      value3Title: "Find the right people",
      value3Body: "Connect with specialists, partners, cofounders and investors.",
      value4Title: "Enter and grow",
      value4Body: "Turn the strategy into market activity and sustainable progress.",
      pathwaysLabel: "Two directions · One platform",
      pathwaysTitle: "Which way are you growing?",
      pathwaysSummary: "One operating method, adapted with the expertise and funding routes each market requires.",
      homePathwaysTitle: "Into Korea, and out to the world.",
      homePathwaysSummary: "One operating method for two distinct market-entry challenges.",
      homeInbound1: "Korean market and opportunity validation",
      homeInbound2: "Public programmes and funding routes",
      homeInbound3: "Local partners and specialists",
      homeInbound4: "An executable entry plan",
      homeOutbound1: "International market prioritisation",
      homeOutbound2: "International grants and funding strategy",
      homeOutbound3: "Global partners and consortia",
      homeOutbound4: "A testable expansion plan",
      pathwaysAria: "Growth direction",
      inboundTitle: "Entering Korea",
      inboundBody: "Connecting international founders and organisations with Korean markets, funding and partners.",
      outboundTitle: "Expanding globally",
      outboundBody: "Connecting Korean founders with global markets, funding and partners.",
      bothDirection: "Connecting both markets",
      servicesLabel: "01 · Services",
      servicesTitle: "Turn international ambition into an executable plan.",
      servicesSummary: "Market-entry diagnostics, funding strategy and partner connections for building in Korea and expanding globally.",
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
      expectedOutcome: "What we deliver",
      stageCta: "Discuss this stage",
      platformLabel: "02 · People",
      platformTitle: "Where people meet opportunity.",
      platformSummary: "Explore the network, find the expertise you need and connect with what comes next.",
      peopleLabel: "People network",
      peopleTitle: "Find the people who can move the journey forward.",
      peopleBody: "Explore founders, experts, collaborators and potential partners in one place.",
      exploreNetwork: "Explore the network",
      askExample: "Find someone with Korean biotech funding experience.",
      askBody: "Search for the experience and connections you need using keywords or a short description.",
      directoryLabel: "People directory",
      filterStage: "Stage",
      filterDirection: "Direction",
      filterExpertise: "Expertise",
      filterReset: "Reset",
      filterAll: "All",
      noMatches: "No matching people found. Try a broader description.",
      showingMatches: "people found.",
      matchedBecause: "Matched on",
      viewProfile: "View profile",
      canHelpWith: "Can help with",
      marketsLabel: "Markets",
      languagesLabel: "Languages",
      requestIntro: "Request an introduction",
      introReasonLabel: "Why would you like to connect?",
      sendIntro: "Prepare request",
      introNote: "This prototype does not transmit or store your information.",
      introSuccess: "Request preview complete. Your information was not submitted.",
      resourcesLabel: "Expert knowledge",
      resourceTitle: "Practical knowledge for better decisions.",
      browseResources: "Browse resources",
      resourcesSectionLabel: "03 · Guides",
      resourcesSectionTitle: "Practical knowledge for your next decision.",
      resourcesSectionSummary: "Concise, actionable guides for funding, teams, markets and sustainable founder performance.",
      wikiSearch: "Search guides",
      wikiSearchPlaceholder: "Search guides, markets or funding",
      wikiUpdated: "Last updated",
      wikiKnowledge: "Guide library",
      resourceDone: "Back to resources",
      eventsLabel: "Upcoming event",
      eventTitle: "Seoul Founder Night",
      eventMeta: "Seoul · 7:00 PM",
      browseEvents: "Explore events",
      eventsSectionLabel: "04 · Events",
      eventsSectionTitle: "Strong connections begin by coming together.",
      eventsSectionSummary: "Learn, connect and recharge alongside founders, experts and investors.",
      eventWallLabel: "Three ways to take part",
      eventWallCopy: "Learn from anywhere, meet deeply around the table and grow with the wider community.",
      gridView: "Grid",
      listView: "List",
      eventAgenda: "Agenda",
      eventFor: "Who it is for",
      eventHost: "Host",
      addCalendar: "Add to calendar",
      registerInterest: "Register interest",
      eventEnquire: "Ask about this event",
      interestSaved: "Interest noted. The production version will connect registration here.",
      communityLabel: "03 · Sail together",
      communityTitle: "You are not making the journey alone.",
      communityBody: "Flip One combines practical events, specialist knowledge and carefully selected connections to help founders solve international growth challenges together.",
      credibilityLabel: "Built on specialist experience",
      credibilityTitle: "Based in Seoul. Connected internationally.",
      credibility1Title: "International funding expertise",
      credibility1Body: "Built on InsightMatches experience in international grants and consortium development.",
      credibility2Title: "Korean market execution",
      credibility2Body: "Market understanding and local connections for ventures entering Korea.",
      credibility3Title: "A carefully selected network",
      credibility3Body: "Specialists, operators and partners matched to the founder’s actual challenge.",
      courseLabel: "04 · Next step",
      courseTitle: "Where are you building from, and where do you want to grow?",
      courseBody: "Tell us your current market, target market and biggest challenge. We will explore a practical next step with you.",
      footerLine: "A startup platform connecting Korea with the world.",
      dialogLabel: "Discuss your route",
      dialogTitle: "Where are you building from, and where do you want to grow?",
      close: "Close",
      nameLabel: "Name",
      emailLabel: "Email",
      directionLabel: "Growth direction",
      stageLabel: "Current stage",
      stageIdea: "Ideation",
      stageScale: "Scaling",
      stageSustain: "Sustaining",
      helpLabel: "What do you need most right now?",
      send: "Prepare discussion",
      formNote: "This preview does not transmit or store personal information.",
      formSuccess: "Preview complete. The information you entered was not submitted."
    }
  };

  var languageButtons = document.querySelectorAll("[data-language]");
  var activeLanguage = "ko";
  var activeDirection = document.querySelector("[data-direction]") ? "inbound" : "all";

  function setLanguage(language) {
    activeLanguage = language;
    var copy = translations[language] || translations.ko;
    document.documentElement.lang = language;
    var pageKey = document.body.classList.contains("platform-page") ? "platform" : document.body.classList.contains("services-page") ? "services" : document.body.classList.contains("resources-page") ? "resources" : document.body.classList.contains("events-page") ? "events" : "";
    document.title = pageKey ? copy[pageKey + "PageTitle"] : copy.title;
    document.querySelector('meta[name="description"]').setAttribute("content", pageKey ? copy[pageKey + "Description"] : copy.description);

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

  var people = [];

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
  var activePersonId = "";

  var searchAliases = {
    funding: ["funding", "fund", "grant", "자금", "보조금"],
    europe: ["europe", "eu", "horizon", "유럽", "호라이즌"],
    korea: ["korea", "korean", "한국", "국내"],
    market: ["market", "entry", "expansion", "시장", "진출"],
    cofounder: ["cofounder", "founder", "team", "공동창업자", "창업자", "팀"],
    wellbeing: ["wellbeing", "coach", "burnout", "resilience", "웰빙", "코칭", "번아웃", "회복탄력성"],
    biotech: ["biotech", "bio", "life science", "바이오", "생명과학"]
  };
  var stopWords = ["the", "a", "an", "and", "or", "for", "with", "who", "can", "help", "find", "someone", "person", "need", "looking", "있는", "사람", "찾아", "주세요", "관련", "경험이", "도와줄"];

  function localValue(value) { return value && value[activeLanguage] ? value[activeLanguage] : ""; }
  function normaliseQuery(query) {
    return query.toLowerCase().replace(/[.,!?()]/g, " ").split(/\s+/).map(function (token) {
      return token.replace(/(으로|에서|에게|하고|과|와|을|를|이|가|은|는|의|에|도)$/u, "");
    }).filter(function (token) { return token.length > 1 && stopWords.indexOf(token) === -1; });
  }
  function expandedTokens(tokens) {
    var expanded = tokens.slice();
    Object.keys(searchAliases).forEach(function (key) {
      if (searchAliases[key].some(function (alias) { return tokens.indexOf(alias) !== -1; })) expanded = expanded.concat(searchAliases[key]);
    });
    return expanded.filter(function (token, index) { return expanded.indexOf(token) === index; });
  }
  function scorePerson(person, tokens) {
    var fields = [
      { text: localValue(person.help).join(" "), weight: 4 },
      { text: localValue(person.role), weight: 3 },
      { text: localValue(person.markets).join(" "), weight: 3 },
      { text: person.keywords, weight: 2 },
      { text: [localValue(person.name), localValue(person.location), localValue(person.bio), localValue(person.longBio)].join(" "), weight: 1 }
    ];
    var labels = [];
    var score = 0;
    tokens.forEach(function (token) {
      fields.forEach(function (field) {
        if (field.text.toLowerCase().split(/\s+/).some(function (word) { return word === token || word.indexOf(token) === 0; })) {
          score += field.weight;
          if (labels.length < 3 && labels.indexOf(token) === -1) labels.push(token);
        }
      });
    });
    return { score: score, labels: labels };
  }

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
    var tokens = expandedTokens(normaliseQuery(activePeopleQuery));
    var matches = people.map(function (person) {
      var result = scorePerson(person, tokens);
      return { person: person, score: result.score, labels: result.labels };
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
      var reason = tokens.length && entry.labels.length ? '<p class="person-match"><b>' + translations[activeLanguage].matchedBecause + ':</b> ' + entry.labels.join(" · ") + '</p>' : "";
      card.innerHTML = '<button class="person-card__button" type="button" data-person-id="' + person.id + '"><div class="person-card__portrait"><img src="Assets/People/' + person.image + '" alt="' + localValue(person.name) + '" loading="lazy"></div><div class="person-card__head"><span class="person-direction">' + directionNames[person.direction][activeLanguage] + '</span><span class="person-location">' + localValue(person.location) + '</span></div><h4>' + localValue(person.name) + '</h4><strong>' + localValue(person.role) + '</strong><p>' + localValue(person.bio) + '</p><div class="person-tags"><span>' + stageNames[person.stage][activeLanguage] + '</span><span>' + expertiseNames[person.expertise][activeLanguage] + '</span><span>' + person.languages.join(" · ") + '</span></div>' + reason + '<span class="person-card__cta">' + translations[activeLanguage].viewProfile + ' →</span></button>';
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

  var personDialog = document.getElementById("person-dialog");
  var introForm = document.getElementById("intro-form");
  function openPerson(id) {
    var person = people.find(function (item) { return item.id === id; });
    if (!person || !personDialog) return;
    activePersonId = id;
    document.getElementById("person-dialog-image").src = "Assets/People/" + person.image;
    document.getElementById("person-dialog-image").alt = localValue(person.name);
    document.getElementById("person-dialog-name").textContent = localValue(person.name);
    document.getElementById("person-dialog-role").textContent = localValue(person.role);
    document.getElementById("person-dialog-location").textContent = localValue(person.location) + " · " + stageNames[person.stage][activeLanguage];
    document.getElementById("person-dialog-direction").textContent = directionNames[person.direction][activeLanguage];
    document.getElementById("person-dialog-bio").textContent = localValue(person.longBio);
    document.getElementById("person-dialog-help").innerHTML = localValue(person.help).map(function (item) { return "<span>" + item + "</span>"; }).join("");
    document.getElementById("person-dialog-markets").textContent = localValue(person.markets).join(" · ");
    document.getElementById("person-dialog-languages").textContent = person.languages.join(" · ");
    document.getElementById("intro-person-id").value = person.id;
    introForm.hidden = true;
    document.getElementById("intro-success").hidden = true;
    personDialog.showModal();
  }
  if (peopleGrid) peopleGrid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-person-id]");
    if (button) openPerson(button.getAttribute("data-person-id"));
  });
  document.querySelectorAll("[data-close-person]").forEach(function (button) { button.addEventListener("click", function () { personDialog.close(); }); });
  var introButton = document.getElementById("person-intro-button");
  if (introButton) introButton.addEventListener("click", function () { introForm.hidden = false; introButton.hidden = true; introForm.querySelector("input[name=name]").focus(); });
  if (introForm) introForm.addEventListener("submit", function (event) { event.preventDefault(); document.getElementById("intro-success").hidden = false; });
  if (personDialog) personDialog.addEventListener("close", function () { if (introButton) introButton.hidden = false; activePersonId = ""; });

  if (peopleGrid) fetch("people.json").then(function (response) { if (!response.ok) throw new Error("Directory unavailable"); return response.json(); }).then(function (data) { people = data; renderPeopleDirectory(); }).catch(function () { matchNote.textContent = activeLanguage === "ko" ? "디렉토리를 불러오지 못했습니다." : "The directory could not be loaded."; });

  var servicePathCopy = {
    inbound: {
      ideation: { ko: ["한국 시장에서 검증할 기회와 진입 가설을 정의합니다.", "시장 진출 진단", "한국 시장 및 고객 가설", "초기 자금 경로", "목표 고객, 우선 프로그램과 첫 30일 실행안을 담은 한국 진출 진단 메모를 제공합니다."], en: ["Define the opportunity and entry assumptions to test in Korea.", "Market-entry diagnostic", "Korean customer and market hypothesis", "Early funding route", "A Korea entry memo defining the target customer, priority programme and first 30-day action plan."] },
      scaling: { ko: ["한국에서 실행하는 데 필요한 자금과 현지 파트너를 구체화합니다.", "지원사업 및 자금 기회 목록", "현지 파트너와 전문가 탐색", "신청 및 진입 실행 계획", "우선 자금 기회, 파트너 후보와 단계별 실행 계획을 제공합니다."], en: ["Specify the funding and local partners required to execute in Korea.", "Programme and funding opportunity shortlist", "Local partner and specialist search", "Application and entry action plan", "A prioritised funding shortlist, partner candidates and phased execution plan."] },
      sustaining: { ko: ["한국에서 지속적으로 운영할 수 있는 조직과 창업가의 기반을 강화합니다.", "창업가 운영 리듬 진단", "리더십 및 웰빙 코칭 계획", "선별된 커뮤니티 연결", "창업가의 에너지, 리더십과 현지 네트워크를 위한 분기별 운영 계획을 제공합니다."], en: ["Strengthen the founder and organisation for sustained operation in Korea.", "Founder operating-rhythm review", "Leadership and wellbeing coaching plan", "Selected community connections", "A quarterly operating plan for founder energy, leadership and local network development."] }
    },
    outbound: {
      ideation: { ko: ["우선 진출할 해외 시장과 검증할 기회를 정의합니다.", "해외 시장 우선순위 진단", "현지 고객 및 기회 가설", "국제 자금 경로", "우선 시장, 검증 가설과 첫 30일 실험을 담은 글로벌 확장 진단 메모를 제공합니다."], en: ["Define the priority international market and opportunity to validate.", "International market-priority diagnostic", "Local customer and opportunity hypothesis", "International funding route", "A global expansion memo defining the priority market, validation hypothesis and first 30-day experiment."] },
      scaling: { ko: ["해외 확장에 필요한 자금, 컨소시엄과 실행 파트너를 구체화합니다.", "국제 보조금 기회 목록", "파트너 및 컨소시엄 탐색", "제안서와 시장 진입 계획", "우선 자금 기회, 파트너 후보와 국제 실행 로드맵을 제공합니다."], en: ["Specify the funding, consortia and execution partners required for expansion.", "International grant opportunity shortlist", "Partner and consortium search", "Proposal and market-entry plan", "A prioritised funding shortlist, partner candidates and international execution roadmap."] },
      sustaining: { ko: ["국경을 넘어 운영하는 팀과 창업가의 지속가능성을 강화합니다.", "국제 운영 리듬 진단", "창업가 코칭 계획", "선별된 글로벌 커뮤니티 연결", "국제 실행력과 창업가의 에너지를 보호하는 분기별 운영 계획을 제공합니다."], en: ["Strengthen the founder and team operating across borders.", "International operating-rhythm review", "Founder coaching plan", "Selected global community connections", "A quarterly operating plan designed to protect founder energy and international execution."] }
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
      card.setAttribute("aria-pressed", String(isActive));
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
    if (peopleDirection) peopleDirection.value = direction === "all" ? "" : direction;
    var formDirection = document.querySelector('#course-form select[name="direction"]');
    if (formDirection && direction !== "all") formDirection.value = direction;
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
  var activeResourceQuery = "";
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
      var haystack = [resource.title, resource.titleEn, resource.summary, resource.summaryEn, resourceCategories[resource.category].ko, resourceCategories[resource.category].en].concat(resource.points, resource.pointsEn).join(" ").toLowerCase();
      var queryMatch = !activeResourceQuery || haystack.indexOf(activeResourceQuery) !== -1;
      return categoryMatch && queryMatch && (activeDirection === "all" || resourceDirection === activeDirection || resourceDirection === "both");
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
  var resourceSearch = document.getElementById("resource-search");
  if (resourceSearch) resourceSearch.addEventListener("input", function () {
    activeResourceQuery = resourceSearch.value.trim().toLowerCase();
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
    online: { ko: "온라인 세션", en: "Online Sessions" },
    table: { ko: "파운더스 테이블", en: "Founders’ Table" },
    community: { ko: "커뮤니티 이벤트", en: "Community Events" }
  };
  var events = [
    { id: "founder-night", category: "community", image: "reference-01.jpg", accessKo: "오픈 RSVP", accessEn: "Open RSVP", icon: "users-three.svg", day: "18", month: "SEP", dateKo: "2026년 9월 18일 · 오후 7시", dateEn: "18 September 2026 · 7:00 PM", start: "20260918T100000Z", end: "20260918T120000Z", location: "서울 성수", locationEn: "Seongsu, Seoul", capacity: 60, title: "Seoul Founder Night", titleEn: "Seoul Founder Night", summary: "국경과 산업을 넘어 새로운 동료와 협력자를 만나는 편안한 창업가 모임입니다.", summaryEn: "A relaxed founder gathering for meeting new collaborators across borders and industries.", agenda: ["환영과 연결", "창업가 이야기", "오픈 네트워킹"], agendaEn: ["Welcome and connections", "Founder stories", "Open networking"], audience: "초기 및 성장 단계 창업가", audienceEn: "Early and growth-stage founders", host: "Flip One Community" },
    { id: "grant-clinic", category: "online", image: "reference-02.jpg", accessKo: "온라인 · 오픈", accessEn: "Online · Open", icon: "funding.svg", day: "02", month: "OCT", dateKo: "2026년 10월 2일 · 오후 4시", dateEn: "2 October 2026 · 4:00 PM", start: "20261002T070000Z", end: "20261002T090000Z", location: "온라인", locationEn: "Online", capacity: 30, title: "보조금 전략 클리닉", titleEn: "Grant Strategy Clinic", summary: "현재 프로젝트에 맞는 지원사업과 다음 신청 단계를 전문가와 함께 점검합니다.", summaryEn: "Review suitable funding routes and the next application step with specialists.", agenda: ["기회 적합성 진단", "신청 논리 점검", "공개 질의응답"], agendaEn: ["Opportunity fit diagnostic", "Application logic review", "Open Q&A"], audience: "보조금 신청을 준비하는 팀", audienceEn: "Teams preparing grant applications", host: "Flip One Funding Team" },
    { id: "horizon-briefing", category: "online", image: "reference-03.jpg", accessKo: "라이브 웨비나", accessEn: "Live webinar", icon: "learning.svg", day: "15", month: "OCT", dateKo: "2026년 10월 15일 · 오후 6시", dateEn: "15 October 2026 · 6:00 PM", start: "20261015T090000Z", end: "20261015T103000Z", location: "서울 종로", locationEn: "Jongno, Seoul", capacity: 45, title: "Horizon Europe 브리핑", titleEn: "Horizon Europe Briefing", summary: "한국 스타트업을 위한 유럽 공동연구 자금과 컨소시엄 참여의 핵심을 소개합니다.", summaryEn: "An introduction to European collaborative funding and consortium participation for Korean startups.", agenda: ["Horizon Europe 구조", "스타트업의 역할", "파트너 탐색 전략"], agendaEn: ["Horizon Europe structure", "The startup role", "Partner search strategy"], audience: "연구개발 중심 스타트업", audienceEn: "Research-led startups", host: "Flip One × InsightMatches" },
    { id: "cofounder-table", category: "table", image: "reference-05.jpg", accessKo: "신청제 · 24석", accessEn: "Application · 24 seats", icon: "users-three.svg", day: "29", month: "OCT", dateKo: "2026년 10월 29일 · 오후 7시", dateEn: "29 October 2026 · 7:00 PM", start: "20261029T100000Z", end: "20261029T120000Z", location: "서울 강남", locationEn: "Gangnam, Seoul", capacity: 24, title: "Cofounder Table", titleEn: "Cofounder Table", summary: "역할과 가치관을 중심으로 잠재적 공동창업자를 깊이 있게 알아가는 소규모 세션입니다.", summaryEn: "A small-group session for meeting potential cofounders through roles and values.", agenda: ["창업 동기 소개", "역할 기반 대화", "후속 연결 선택"], agendaEn: ["Founder motivations", "Role-based conversations", "Choose follow-up connections"], audience: "공동창업자를 찾는 예비 창업가", audienceEn: "Prospective founders seeking a cofounder", host: "Flip One People" },
    { id: "market-lab", category: "community", image: "reference-04.jpg", accessKo: "오픈 워크숍", accessEn: "Open workshop", icon: "globe.svg", day: "12", month: "NOV", dateKo: "2026년 11월 12일 · 오후 5시", dateEn: "12 November 2026 · 5:00 PM", start: "20261112T080000Z", end: "20261112T100000Z", location: "서울 마포", locationEn: "Mapo, Seoul", capacity: 36, title: "Global Market Entry Lab", titleEn: "Global Market Entry Lab", summary: "해외 시장 가설을 검증하고 가장 작은 현지 실험을 설계하는 워크숍입니다.", summaryEn: "A workshop for validating an overseas market and designing the smallest local experiment.", agenda: ["시장 우선순위", "고객 가설", "30일 실험 설계"], agendaEn: ["Market prioritisation", "Customer assumptions", "Design a 30-day experiment"], audience: "해외 진출을 준비하는 팀", audienceEn: "Teams preparing international expansion", host: "Flip One Market Team" },
    { id: "founder-reset", category: "table", image: "reference-06.jpg", accessKo: "초대 및 신청", accessEn: "Invite or apply", icon: "heart.svg", day: "27", month: "NOV", dateKo: "2026년 11월 27일 · 오전 10시", dateEn: "27 November 2026 · 10:00 AM", start: "20261127T010000Z", end: "20261127T030000Z", location: "서울 한남", locationEn: "Hannam, Seoul", capacity: 20, title: "Founder Reset Morning", titleEn: "Founder Reset Morning", summary: "집중력과 에너지를 회복하고 지속가능한 주간 리듬을 설계하는 아침 세션입니다.", summaryEn: "A morning session to restore focus and design a more sustainable weekly rhythm.", agenda: ["에너지 체크인", "움직임과 호흡", "주간 리듬 설계"], agendaEn: ["Energy check-in", "Movement and breathing", "Weekly rhythm design"], audience: "회복과 재정비가 필요한 창업가", audienceEn: "Founders needing recovery and reset", host: "Flip One Wellbeing" }
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
      card.innerHTML = '<button class="event-card__hit" type="button" data-event-id="' + item.id + '" aria-label="' + translations[activeLanguage].openEvent + '"><img class="event-card__poster" src="Assets/Events/' + item.image + '" alt="" loading="lazy"><span class="event-card__shade"></span><div class="event-card__date"><b>' + item.day + '</b><span>' + item.month + '</span></div><div class="event-card__content"><div class="event-card__category"><span>' + eventCategories[item.category][activeLanguage] + '</span><em>' + (activeLanguage === "ko" ? item.accessKo : item.accessEn) + '</em></div><h3>' + (activeLanguage === "ko" ? item.title : item.titleEn) + '</h3><p>' + (activeLanguage === "ko" ? item.summary : item.summaryEn) + '</p><div class="event-card__meta"><span>' + (activeLanguage === "ko" ? item.location : item.locationEn) + '</span><span>' + item.capacity + (activeLanguage === "ko" ? '명' : ' seats') + '</span></div></div><span class="event-card__arrow">↗</span></button>';
      eventGrid.appendChild(card);
    });
  }

  function openEvent(eventId) {
    activeEvent = events.find(function (item) { return item.id === eventId; });
    if (!activeEvent || !eventDialog) return;
    document.getElementById("event-dialog-category").textContent = eventCategories[activeEvent.category][activeLanguage];
    document.getElementById("event-dialog-title").textContent = activeLanguage === "ko" ? activeEvent.title : activeEvent.titleEn;
    document.getElementById("event-dialog-meta").innerHTML = '<span>' + (activeLanguage === "ko" ? activeEvent.dateKo : activeEvent.dateEn) + '</span><span>' + (activeLanguage === "ko" ? activeEvent.location : activeEvent.locationEn) + '</span><span>' + activeEvent.capacity + (activeLanguage === "ko" ? '명' : ' seats') + '</span>';
    document.getElementById("event-dialog-summary").textContent = activeLanguage === "ko" ? activeEvent.summary : activeEvent.summaryEn;
    var agenda = activeLanguage === "ko" ? activeEvent.agenda : activeEvent.agendaEn;
    document.getElementById("event-dialog-agenda").innerHTML = agenda.map(function (item) { return "<li>" + item + "</li>"; }).join("");
    document.getElementById("event-dialog-audience").textContent = activeLanguage === "ko" ? activeEvent.audience : activeEvent.audienceEn;
    document.getElementById("event-dialog-host").textContent = activeEvent.host;
    var eventNote = document.querySelector(".event-dialog__note");
    if (eventNote) eventNote.hidden = true;
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

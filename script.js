"use strict";

const FALLBACK_COMPANIES = [
  {
    id: "company-001",
    company: "中国空空导弹研究院",
    category: "研究所",
    companyUrl: "https://www.casic.com.cn/",
    recruitmentUrl: "",
    location: "洛阳",
    companyRemark: "关注图像算法与目标检测方向",
    position: "算法工程师",
    direction: "图像算法",
    batch: "提前批",
    status: "已投递",
    applyDate: "2026-07-26",
    deadline: "2026-08-18",
    positionUrl: "",
    remark: "等待笔试通知",
    createdAt: "2026-07-26T10:30:00+08:00"
  },
  {
    id: "company-002",
    company: "贵州航天电器股份有限公司",
    category: "央国企",
    companyUrl: "",
    recruitmentUrl: "",
    location: "贵阳",
    companyRemark: "央企在黔单位",
    position: "软件开发工程师",
    direction: "嵌入式开发",
    batch: "正式批",
    status: "待投递",
    applyDate: "",
    deadline: "2026-08-10",
    positionUrl: "",
    remark: "需要完善项目经历",
    createdAt: "2026-07-29T15:20:00+08:00"
  },
  {
    id: "company-003",
    company: "字节跳动",
    category: "私企",
    companyUrl: "https://www.bytedance.com/zh/",
    recruitmentUrl: "https://jobs.bytedance.com/campus/",
    location: "北京",
    companyRemark: "重点准备算法题",
    position: "后端开发工程师",
    direction: "基础架构",
    batch: "提前批",
    status: "一面",
    applyDate: "2026-07-22",
    deadline: "2026-08-30",
    positionUrl: "https://jobs.bytedance.com/campus/",
    remark: "8 月 5 日技术一面",
    createdAt: "2026-07-30T09:10:00+08:00"
  },
  {
    id: "company-004",
    company: "华为",
    category: "私企",
    companyUrl: "https://www.huawei.com/cn/",
    recruitmentUrl: "https://career.huawei.com/",
    location: "深圳",
    companyRemark: "关注计算机视觉岗位",
    position: "AI 工程师",
    direction: "计算机视觉",
    batch: "正式批",
    status: "Offer",
    applyDate: "2026-07-10",
    deadline: "2026-08-31",
    positionUrl: "https://career.huawei.com/",
    remark: "已收到意向沟通",
    createdAt: "2026-07-18T11:40:00+08:00"
  },
  {
    id: "company-005",
    company: "中国电子科技集团第十研究所",
    category: "研究所",
    companyUrl: "",
    recruitmentUrl: "",
    location: "成都",
    companyRemark: "关注雷达信号处理",
    position: "信号处理工程师",
    direction: "信号与系统",
    batch: "正式批",
    status: "笔试",
    applyDate: "2026-07-28",
    deadline: "2026-08-25",
    positionUrl: "",
    remark: "复习数字信号处理",
    createdAt: "2026-07-31T17:05:00+08:00"
  }
];

const FALLBACK_LEARNING = {
  projects: [
    {
      id: "project-001",
      name: "复杂场景目标检测研究",
      projectTime: "2025.03 - 2026.01",
      introduction: "针对小目标和遮挡场景优化检测精度，完成数据处理、模型训练与实验对比。",
      techStack: "Python、PyTorch、OpenCV、YOLO",
      work: "负责数据清洗、模型改进、消融实验和结果分析。",
      challengeSolution: "项目困难：小目标特征弱，类别分布不均衡。\n解决方式：引入多尺度特征融合并调整采样策略。",
      outcome: "完成多组消融实验，形成可复现的训练流程和项目报告。",
      explanation: "面试时按照背景、目标、个人工作、难点、量化结果和反思展开。",
      createdAt: "2026-07-24T09:30:00+08:00",
      updatedAt: "2026-07-30T19:20:00+08:00"
    }
  ],
  interviewKnowledge: [
    {
      id: "knowledge-001",
      question: "进程和线程有什么区别？",
      answer: "进程是资源分配的基本单位，线程是 CPU 调度的基本单位；同一进程内线程共享地址空间。",
      followUp: "线程切换为什么通常比进程切换开销小？",
      remark: "结合实际项目中的并发场景说明。",
      createdAt: "2026-07-28T13:00:00+08:00",
      updatedAt: "2026-07-28T13:00:00+08:00"
    }
  ],
  aptitudeTests: [
    {
      id: "aptitude-001",
      question: "某项目第一季度完成全年任务的 20%，第二季度完成剩余任务的 30%，两季度共完成全年任务的多少？",
      type: "数量关系",
      answer: "44%",
      analysis: "第二季度完成 80% × 30% = 24%，合计 20% + 24% = 44%。",
      wrongReason: "误把第二季度的 30% 直接与 20% 相加。",
      favorite: true,
      wrong: true,
      createdAt: "2026-07-29T18:10:00+08:00",
      updatedAt: "2026-07-29T18:10:00+08:00"
    }
  ],
  essays: [
    {
      id: "essay-001",
      title: "以数字化赋能基层治理",
      topic: "基层治理",
      content: "数字化不是简单地把线下流程搬到线上，而是以群众需求为导向重塑治理流程。",
      goldenSentence: "治理的温度，既体现在数据奔跑的速度，也体现在服务抵达的精度。",
      caseStudy: "贵州探索一窗通办、跨省通办，减少群众办事成本。",
      remark: "可用于科技赋能、服务型政府等主题。",
      createdAt: "2026-07-26T16:40:00+08:00",
      updatedAt: "2026-07-31T10:15:00+08:00"
    }
  ],
  leetcode: [
    {
      id: "leetcode-001",
      number: "1",
      name: "两数之和",
      problemDetail: "给定一个整数数组 nums 和一个整数目标值 target，请在数组中找出和为目标值的两个整数，并返回它们的数组下标。\n\n假设每种输入只对应一个答案，且同一个元素不能重复使用。",
      link: "https://leetcode.cn/problems/two-sum/",
      difficulty: "简单",
      type: "哈希表",
      approach: "遍历数组，用哈希表保存已经访问的值及其下标，查找目标差值。",
      code: "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        if target - num in seen:\n            return [seen[target - num], i]\n        seen[num] = i",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      completed: true,
      review: true,
      createdAt: "2026-07-20T20:00:00+08:00",
      updatedAt: "2026-07-30T20:25:00+08:00"
    }
  ],
  mockInterviews: [
    {
      id: "mock-001",
      question: "请用三分钟介绍一个你最有代表性的项目。",
      answer: "重点介绍目标检测项目中的模型改进与实验设计。",
      createdAt: "2026-07-27T11:00:00+08:00",
      updatedAt: "2026-07-27T11:00:00+08:00"
    },
    {
      id: "mock-002",
      question: "为什么选择我们单位和这个岗位？",
      answer: "从单位使命、岗位匹配、个人积累和长期发展四个角度说明，避免空泛表达。",
      createdAt: "2026-07-28T11:00:00+08:00",
      updatedAt: "2026-07-28T11:00:00+08:00"
    }
  ]
};

const FALLBACK_WEBSITES = [
  {
    id: "website-001",
    name: "牛客",
    category: "求职社区",
    url: "https://www.nowcoder.com/",
    remark: "查看校招信息、企业笔面经和在线题库。",
    createdAt: "2026-07-20T10:00:00+08:00",
    updatedAt: "2026-07-20T10:00:00+08:00"
  },
  {
    id: "website-002",
    name: "BOSS直聘",
    category: "综合招聘",
    url: "https://www.zhipin.com/",
    remark: "搜索社会招聘与校招岗位，直接沟通招聘方。",
    createdAt: "2026-07-21T10:00:00+08:00",
    updatedAt: "2026-07-21T10:00:00+08:00"
  },
  {
    id: "website-003",
    name: "智联招聘",
    category: "综合招聘",
    url: "https://www.zhaopin.com/",
    remark: "综合岗位搜索与校园招聘专题。",
    createdAt: "2026-07-22T10:00:00+08:00",
    updatedAt: "2026-07-22T10:00:00+08:00"
  },
  {
    id: "website-004",
    name: "国聘",
    category: "官方平台",
    url: "https://www.iguopin.com/",
    remark: "央企、国企及事业单位招聘信息。",
    createdAt: "2026-07-23T10:00:00+08:00",
    updatedAt: "2026-07-23T10:00:00+08:00"
  },
  {
    id: "website-005",
    name: "华为招聘",
    category: "企业官网",
    url: "https://career.huawei.com/",
    remark: "华为校园招聘与岗位投递官网。",
    createdAt: "2026-07-24T10:00:00+08:00",
    updatedAt: "2026-07-24T10:00:00+08:00"
  }
];

const FALLBACK_QUICK_LINKS = [];

const LEARNING_MODULES = {
  projectHub: {
    title: "我的项目及八股",
    kicker: "Project & knowledge",
    description: "沉淀项目经历和高频面试知识，形成随时可讲的答案库。",
    defaultDataset: "projects"
  },
  aptitudeTests: {
    title: "央国企行测",
    kicker: "Aptitude test",
    description: "按题型记录答案、解析和错因，集中复盘薄弱环节。",
    defaultDataset: "aptitudeTests"
  },
  essays: {
    title: "贵州选调申论",
    kicker: "Essay materials",
    description: "积累主题观点、金句和案例，为申论写作建立素材库。",
    defaultDataset: "essays"
  },
  leetcode: {
    title: "LeetCode 算法",
    kicker: "Algorithm practice",
    description: "记录题解与复杂度，标记完成和需要复习的算法题。",
    defaultDataset: "leetcode"
  },
  mockInterviews: {
    title: "模拟面试",
    kicker: "Mock interview",
    description: "记录面试问题和回答，并通过随机抽题反复练习。",
    defaultDataset: "mockInterviews"
  }
};

const LEARNING_FIELD_SCHEMAS = {
  projects: [
    { key: "name", label: "项目名称", type: "text", required: true, span: 2, placeholder: "科研项目或实习项目名称" },
    { key: "projectTime", label: "项目时间", type: "text", placeholder: "例如：2025.03 - 2026.01" },
    { key: "techStack", label: "技术栈", type: "text", placeholder: "例如：Python、PyTorch、OpenCV" },
    { key: "introduction", label: "项目简介", type: "textarea", required: true, span: 2, rows: 4, placeholder: "项目背景、目标和主要内容" },
    { key: "work", label: "我的工作", type: "textarea", span: 2, rows: 6, placeholder: "重点描述你负责的任务、采取的行动和个人贡献" },
    { key: "challengeSolution", label: "项目困难及解决", type: "textarea", span: 2, rows: 5, placeholder: "描述遇到的困难、分析过程和解决方法" },
    { key: "outcome", label: "项目成果", type: "textarea", span: 2, rows: 4, placeholder: "量化成果、交付内容、论文专利或能力提升" },
    { key: "explanation", label: "面试讲解", type: "textarea", span: 2, rows: 5, placeholder: "面试时如何清晰介绍该项目" }
  ],
  interviewKnowledge: [
    { key: "question", label: "面试问题", type: "textarea", required: true, span: 2, placeholder: "记录一个高频面试问题" },
    { key: "answer", label: "标准答案", type: "textarea", required: true, span: 2, placeholder: "结构清晰的参考答案" },
    { key: "followUp", label: "追问", type: "textarea", placeholder: "可能的深入追问" },
    { key: "remark", label: "备注", type: "textarea", placeholder: "易错点或回答提示" }
  ],
  aptitudeTests: [
    { key: "question", label: "题目", type: "textarea", required: true, span: 2, placeholder: "输入行测题目" },
    { key: "type", label: "题目类型", type: "select", required: true, options: ["言语理解", "判断推理", "数量关系", "资料分析", "常识"] },
    { key: "answer", label: "答案", type: "textarea", required: true, placeholder: "正确答案" },
    { key: "analysis", label: "解析", type: "textarea", span: 2, placeholder: "解题思路和关键步骤" },
    { key: "wrongReason", label: "错题原因", type: "textarea", span: 2, placeholder: "错误原因和避免方法" },
    { key: "favorite", label: "加入收藏", type: "checkbox" },
    { key: "wrong", label: "标记为错题", type: "checkbox" }
  ],
  essays: [
    { key: "title", label: "标题", type: "text", required: true, span: 2, placeholder: "文章或素材标题" },
    { key: "topic", label: "主题分类", type: "text", required: true, span: 2, placeholder: "例如：基层治理、乡村振兴" },
    { key: "content", label: "内容", type: "textarea", required: true, span: 2, placeholder: "观点、论证或完整内容" },
    { key: "goldenSentence", label: "金句", type: "textarea", placeholder: "可引用的精彩表达" },
    { key: "caseStudy", label: "案例", type: "textarea", placeholder: "典型案例与数据" },
    { key: "remark", label: "备注", type: "textarea", span: 2, placeholder: "适用场景或写作提示" }
  ],
  leetcode: [
    { key: "number", label: "题目编号", type: "text", required: true, placeholder: "例如：1" },
    { key: "name", label: "名称", type: "text", required: true, placeholder: "例如：两数之和" },
    { key: "problemDetail", label: "题目详情", type: "textarea", required: true, span: 2, rows: 7, placeholder: "输入题目描述、输入输出、示例和约束条件" },
    { key: "link", label: "LeetCode 链接", type: "url", required: true, span: 2, placeholder: "https://leetcode.cn/problems/..." },
    { key: "difficulty", label: "难度", type: "select", required: true, options: ["简单", "中等", "困难"] },
    { key: "type", label: "类型", type: "text", required: true, placeholder: "例如：哈希表、动态规划" },
    { key: "approach", label: "解题思路", type: "textarea", span: 2, placeholder: "核心思路与步骤" },
    { key: "code", label: "Python 代码", type: "code", span: 2, placeholder: "def solution(...):" },
    { key: "timeComplexity", label: "时间复杂度", type: "text", placeholder: "例如：O(n)" },
    { key: "spaceComplexity", label: "空间复杂度", type: "text", placeholder: "例如：O(n)" },
    { key: "completed", label: "标记完成", type: "checkbox" },
    { key: "review", label: "需要复习", type: "checkbox" }
  ],
  mockInterviews: [
    { key: "question", label: "面试问题", type: "textarea", required: true, span: 2, placeholder: "输入模拟面试题" },
    { key: "answer", label: "回答", type: "textarea", span: 2, rows: 7, placeholder: "记录该问题的回答" }
  ]
};

const GENERAL_LEARNING_DETAIL_CONFIGS = {
  projects: {
    title: "项目详情",
    kicker: "Project detail",
    fallbackTitle: "未命名项目",
    titleKey: "name",
    meta: (record) => compactDetails(["项目经历", record.projectTime && `项目时间：${record.projectTime}`]),
    sections: [
      { key: "introduction", label: "项目简介", icon: "简" },
      { key: "techStack", label: "技术栈", icon: "栈" },
      { key: "work", label: "主要工作", icon: "工", featured: true },
      { key: "challengeSolution", label: "项目困难及解决", icon: "解" },
      { key: "outcome", label: "项目成果", icon: "果" },
      { key: "explanation", label: "面试讲解", icon: "讲" }
    ]
  },
  interviewKnowledge: {
    title: "八股问答详情",
    kicker: "Interview knowledge",
    fallbackTitle: "未命名问题",
    titleKey: "question",
    meta: () => ["八股问答"],
    sections: [
      { key: "answer", label: "标准答案", icon: "答", featured: true },
      { key: "followUp", label: "追问", icon: "追" },
      { key: "remark", label: "备注", icon: "注" }
    ]
  },
  essays: {
    title: "申论素材详情",
    kicker: "Essay material",
    fallbackTitle: "未命名素材",
    titleKey: "title",
    meta: (record) => compactDetails(["贵州选调申论", record.topic && `主题：${record.topic}`]),
    sections: [
      { key: "content", label: "内容", icon: "文", featured: true },
      { key: "goldenSentence", label: "金句", icon: "句" },
      { key: "caseStudy", label: "案例", icon: "例" },
      { key: "remark", label: "备注", icon: "注" }
    ]
  },
  mockInterviews: {
    title: "模拟面试详情",
    kicker: "Mock interview",
    fallbackTitle: "未命名面试题",
    titleKey: "question",
    meta: () => ["模拟面试"],
    sections: [
      { key: "answer", label: "回答", icon: "答", featured: true }
    ]
  }
};

const state = {
  companies: [],
  learning: structuredCloneSafe(FALLBACK_LEARNING),
  websites: [],
  quickLinks: [],
  companyFilters: {
    category: "全部",
    batch: "全部",
    status: "全部",
    search: ""
  },
  pendingDeleteId: null,
  activeLearningModule: "projectHub",
  activeLearningDataset: "projects",
  learningSearch: "",
  learningFilter: "全部",
  pendingLearningDelete: null,
  randomQuestionId: null,
  activeAptitudeDetailId: null,
  activeLeetcodeDetailId: null,
  activeLearningDetail: null,
  websiteSearch: "",
  websiteCategory: "全部",
  pendingWebsiteDeleteId: null,
  pendingImportData: null,
  pendingImportFileName: "",
  imageStorageAvailable: true,
  imageStorageStats: { count: 0, size: 0 },
  localStorageAvailable: true,
  learningStorageCorrupt: false,
  learningStorageAuthoritative: false,
  learningImageDraft: null,
  imageLightbox: null,
  fileSync: {
    supported: false,
    handle: null,
    fileName: "",
    permission: "none",
    autoEnabled: false,
    lastSyncedAt: "",
    error: "",
    syncing: false,
    queued: false,
    timer: null
  }
};

const INTERVIEW_STATUSES = new Set(["笔试", "一面", "二面", "终面"]);
const ACTIONED_STATUSES = new Set(["已投递", "笔试", "一面", "二面", "终面", "Offer", "未通过"]);
const COMPANY_CATEGORIES = new Set(["央国企", "研究所", "私企", "外企"]);
const RESEARCH_INSTITUTE_NAME_PATTERN = /(研究所|研究院|科学院|院所)/;
const COMPANY_SEARCH_FIELDS = Object.freeze([
  "company",
  "category",
  "companyUrl",
  "recruitmentUrl",
  "location",
  "companyRemark",
  "position",
  "direction",
  "batch",
  "status",
  "applyDate",
  "deadline",
  "positionUrl",
  "remark"
]);
const IMAGE_DB_NAME = "JobAssistantMedia";
const IMAGE_DB_VERSION = 2;
const IMAGE_STORE_NAME = "images";
const FILE_HANDLE_STORE_NAME = "fileHandles";
const BACKUP_FILE_HANDLE_KEY = "backupFile";
const AUTO_FILE_SYNC_KEY = "jobAssistant.autoFileSync";
const LAST_FILE_SYNC_KEY = "jobAssistant.lastFileSync";
const ALLOWED_IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);
const MAX_IMAGE_SOURCE_SIZE = 10 * 1024 * 1024;
const MAX_IMAGES_PER_RECORD = 20;
const MAX_IMAGE_EDGE = 1920;
let imageDatabasePromise = null;

document.addEventListener("DOMContentLoaded", initApp);

async function initApp() {
  applyInitialTheme();
  bindNavigation();
  bindDashboardActions();
  bindCompanyManagement();
  bindLearningCenter();
  bindWebsiteManagement();
  bindSettings();
  setTodayText();
  [state.companies, state.learning, state.websites, state.quickLinks] = await Promise.all([
    loadCompanies(),
    loadLearningData(),
    loadWebsites(),
    loadQuickLinks()
  ]);
  await initializeImageStorage();
  await initializeFileSync();
  renderDashboard();
  renderCompanyManagement();
  renderLearningCenter();
  renderWebsiteManagement();
  renderSettings();
}

function bindNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => navigateTo(button.dataset.page));
  });

  document.querySelectorAll("[data-go-page]").forEach((button) => {
    button.addEventListener("click", () => navigateTo(button.dataset.goPage));
  });
}

function bindDashboardActions() {
  const refreshButton = document.getElementById("refreshDashboard");
  refreshButton.addEventListener("click", async () => {
    refreshButton.disabled = true;
    [state.companies, state.quickLinks] = await Promise.all([loadCompanies(), loadQuickLinks()]);
    renderDashboard();
    renderCompanyManagement();
    showToast("首页数据已刷新");
    window.setTimeout(() => {
      refreshButton.disabled = false;
    }, 300);
  });

  document.getElementById("addQuickLinkButton").addEventListener("click", () => openQuickLinkModal());
  document.getElementById("quickLinkForm").addEventListener("submit", handleQuickLinkSubmit);
  document.getElementById("quickLinkList").addEventListener("click", handleQuickLinkAction);
  document.querySelectorAll("[data-close-quick-link-modal]").forEach((button) => {
    button.addEventListener("click", closeQuickLinkModal);
  });
  const quickLinkModal = document.getElementById("quickLinkModal");
  quickLinkModal.addEventListener("click", (event) => {
    if (event.target === quickLinkModal) closeQuickLinkModal();
  });
  document.getElementById("quickLinkForm").addEventListener("input", (event) => {
    const field = event.target.closest(".form-field");
    if (!field) return;
    field.classList.remove("invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
    hideQuickLinkFormMessage();
  });
}

function bindCompanyManagement() {
  document.getElementById("addCompanyButton").addEventListener("click", () => openCompanyModal());
  document.getElementById("addCompanyTopbar").addEventListener("click", () => openCompanyModal());

  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.companyFilters.category = tab.dataset.companyCategory;
      document.querySelectorAll(".category-tab").forEach((item) => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      renderCompanyManagement();
    });
  });

  const searchInput = document.getElementById("companySearch");
  searchInput.addEventListener("input", () => {
    state.companyFilters.search = searchInput.value.trim();
    renderCompanyManagement();
  });

  document.getElementById("batchFilter").addEventListener("change", (event) => {
    state.companyFilters.batch = event.target.value;
    renderCompanyManagement();
  });

  document.getElementById("statusFilter").addEventListener("change", (event) => {
    state.companyFilters.status = event.target.value;
    renderCompanyManagement();
  });

  document.getElementById("resetCompanyFilters").addEventListener("click", resetCompanyFilters);
  document.getElementById("companyForm").addEventListener("submit", handleCompanySubmit);
  document.getElementById("companyList").addEventListener("click", handleCompanyListClick);

  document.querySelectorAll("[data-close-company-modal]").forEach((button) => {
    button.addEventListener("click", closeCompanyModal);
  });

  const companyModal = document.getElementById("companyModal");
  companyModal.addEventListener("click", (event) => {
    if (event.target === companyModal) closeCompanyModal();
  });

  document.getElementById("cancelDeleteCompany").addEventListener("click", closeDeleteModal);
  document.getElementById("confirmDeleteCompany").addEventListener("click", deletePendingCompany);

  const deleteModal = document.getElementById("deleteCompanyModal");
  deleteModal.addEventListener("click", (event) => {
    if (event.target === deleteModal) closeDeleteModal();
  });

  document.getElementById("companyForm").addEventListener("input", (event) => {
    const field = event.target.closest(".form-field");
    if (field) clearFieldError(event.target);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const learningDeleteModal = document.getElementById("deleteLearningModal");
    const learningModal = document.getElementById("learningModal");
    const aptitudeDetailModal = document.getElementById("aptitudeDetailModal");
    const leetcodeDetailModal = document.getElementById("leetcodeDetailModal");
    const generalLearningDetailModal = document.getElementById("generalLearningDetailModal");
    const learningImageLightbox = document.getElementById("learningImageLightbox");
    const quickLinkModal = document.getElementById("quickLinkModal");
    const websiteDeleteModal = document.getElementById("deleteWebsiteModal");
    const websiteModal = document.getElementById("websiteModal");
    if (!learningImageLightbox.hidden) closeLearningImageLightbox();
    else if (!websiteDeleteModal.hidden) closeWebsiteDeleteModal();
    else if (!websiteModal.hidden) closeWebsiteModal();
    else if (!quickLinkModal.hidden) closeQuickLinkModal();
    else if (!learningDeleteModal.hidden) closeLearningDeleteModal();
    else if (!generalLearningDetailModal.hidden) closeGeneralLearningDetail();
    else if (!leetcodeDetailModal.hidden) closeLeetcodeDetail();
    else if (!aptitudeDetailModal.hidden) closeAptitudeDetail();
    else if (!learningModal.hidden) closeLearningModal();
    else if (!deleteModal.hidden) closeDeleteModal();
    else if (!companyModal.hidden) closeCompanyModal();
  });
}

function bindLearningCenter() {
  document.getElementById("learningModuleGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-learning-module]");
    if (!card) return;
    const moduleName = card.dataset.learningModule;
    state.activeLearningModule = moduleName;
    state.activeLearningDataset = LEARNING_MODULES[moduleName].defaultDataset;
    resetLearningFilterState();
    state.randomQuestionId = null;
    renderLearningCenter();
  });

  document.getElementById("learningSubtabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-learning-dataset]");
    if (!tab) return;
    state.activeLearningDataset = tab.dataset.learningDataset;
    resetLearningFilterState();
    renderLearningCenter();
  });

  document.getElementById("learningSearch").addEventListener("input", (event) => {
    state.learningSearch = event.target.value.trim();
    renderLearningRecords();
  });

  document.getElementById("learningFilter").addEventListener("change", (event) => {
    state.learningFilter = event.target.value;
    renderLearningRecords();
  });

  document.getElementById("resetLearningFilters").addEventListener("click", () => {
    resetLearningFilterState();
    renderLearningCenter();
  });

  document.getElementById("addLearningRecord").addEventListener("click", () => openLearningModal());
  document.getElementById("learningForm").addEventListener("submit", handleLearningSubmit);
  document.getElementById("learningRecordList").addEventListener("click", handleLearningRecordAction);
  document.getElementById("learningRecordList").addEventListener("keydown", handleLearningRecordKeydown);

  document.querySelectorAll("[data-close-learning-modal]").forEach((button) => {
    button.addEventListener("click", closeLearningModal);
  });

  const modal = document.getElementById("learningModal");
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeLearningModal();
  });
  modal.addEventListener("paste", handleLearningImagePaste);

  const imageInput = document.getElementById("learningImageInput");
  imageInput.addEventListener("change", () => {
    if (imageInput.files?.length) addLearningImageFiles([...imageInput.files]);
    imageInput.value = "";
  });
  const imageDropzone = document.getElementById("learningImageDropzone");
  imageDropzone.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    imageInput.click();
  });
  ["dragenter", "dragover"].forEach((eventName) => imageDropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    imageDropzone.classList.add("dragging");
  }));
  ["dragleave", "drop"].forEach((eventName) => imageDropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    imageDropzone.classList.remove("dragging");
  }));
  imageDropzone.addEventListener("drop", (event) => {
    const files = [...(event.dataTransfer?.files || [])];
    if (files.length) addLearningImageFiles(files);
  });
  document.getElementById("learningImagePreviewGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-learning-image]");
    if (button) removeLearningDraftImage(button.dataset.removeLearningImage);
  });

  document.getElementById("learningFormFields").addEventListener("input", (event) => {
    const field = event.target.closest(".form-field");
    if (!field) return;
    field.classList.remove("invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
    hideLearningFormMessage();
  });

  document.getElementById("cancelDeleteLearning").addEventListener("click", closeLearningDeleteModal);
  document.getElementById("confirmDeleteLearning").addEventListener("click", deletePendingLearningRecord);
  const deleteModal = document.getElementById("deleteLearningModal");
  deleteModal.addEventListener("click", (event) => {
    if (event.target === deleteModal) closeLearningDeleteModal();
  });

  document.getElementById("randomQuestionButton").addEventListener("click", drawRandomQuestion);
  document.getElementById("drawAnotherQuestion").addEventListener("click", drawRandomQuestion);
  document.getElementById("viewRandomAnswer").addEventListener("click", toggleRandomAnswer);

  document.querySelectorAll("[data-close-aptitude-detail]").forEach((button) => {
    button.addEventListener("click", closeAptitudeDetail);
  });
  const aptitudeDetailModal = document.getElementById("aptitudeDetailModal");
  aptitudeDetailModal.addEventListener("click", (event) => {
    if (event.target === aptitudeDetailModal) closeAptitudeDetail();
  });
  document.getElementById("aptitudeDetailFavorite").addEventListener("click", () => toggleAptitudeDetailFlag("favorite"));
  document.getElementById("aptitudeDetailWrong").addEventListener("click", () => toggleAptitudeDetailFlag("wrong"));
  document.getElementById("editAptitudeFromDetail").addEventListener("click", editAptitudeFromDetail);

  document.querySelectorAll("[data-close-leetcode-detail]").forEach((button) => {
    button.addEventListener("click", closeLeetcodeDetail);
  });
  const leetcodeDetailModal = document.getElementById("leetcodeDetailModal");
  leetcodeDetailModal.addEventListener("click", (event) => {
    if (event.target === leetcodeDetailModal) closeLeetcodeDetail();
  });
  document.getElementById("leetcodeDetailCompleted").addEventListener("click", () => toggleLeetcodeDetailFlag("completed"));
  document.getElementById("leetcodeDetailReview").addEventListener("click", () => toggleLeetcodeDetailFlag("review"));
  document.getElementById("editLeetcodeFromDetail").addEventListener("click", editLeetcodeFromDetail);

  document.querySelectorAll("[data-close-general-learning-detail]").forEach((button) => {
    button.addEventListener("click", closeGeneralLearningDetail);
  });
  const generalLearningDetailModal = document.getElementById("generalLearningDetailModal");
  generalLearningDetailModal.addEventListener("click", (event) => {
    if (event.target === generalLearningDetailModal) closeGeneralLearningDetail();
  });
  document.getElementById("editGeneralLearningFromDetail").addEventListener("click", editGeneralLearningFromDetail);

  ["aptitudeDetailImageGrid", "leetcodeDetailImageGrid", "generalLearningDetailImageGrid"].forEach((id) => {
    document.getElementById(id).addEventListener("click", handleLearningGalleryClick);
  });
  const lightbox = document.getElementById("learningImageLightbox");
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLearningImageLightbox();
  });
  document.getElementById("closeLearningImageLightbox").addEventListener("click", closeLearningImageLightbox);
  document.getElementById("learningImagePrevious").addEventListener("click", () => stepLearningImageLightbox(-1));
  document.getElementById("learningImageNext").addEventListener("click", () => stepLearningImageLightbox(1));
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") stepLearningImageLightbox(-1);
    if (event.key === "ArrowRight") stepLearningImageLightbox(1);
  });
}

function bindWebsiteManagement() {
  document.getElementById("addWebsiteButton").addEventListener("click", () => openWebsiteModal());
  document.getElementById("websiteSearch").addEventListener("input", (event) => {
    state.websiteSearch = event.target.value.trim();
    renderWebsiteCards();
  });
  document.getElementById("websiteCategoryFilter").addEventListener("change", (event) => {
    state.websiteCategory = event.target.value;
    renderWebsiteManagement();
  });
  document.getElementById("resetWebsiteFilters").addEventListener("click", resetWebsiteFilters);
  document.getElementById("websiteCategoryChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-website-category]");
    if (!chip) return;
    state.websiteCategory = chip.dataset.websiteCategory;
    document.getElementById("websiteCategoryFilter").value = state.websiteCategory;
    renderWebsiteManagement();
  });
  document.getElementById("websiteList").addEventListener("click", handleWebsiteCardAction);
  document.getElementById("websiteForm").addEventListener("submit", handleWebsiteSubmit);

  document.querySelectorAll("[data-close-website-modal]").forEach((button) => {
    button.addEventListener("click", closeWebsiteModal);
  });
  const modal = document.getElementById("websiteModal");
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeWebsiteModal();
  });
  document.getElementById("websiteForm").addEventListener("input", (event) => {
    const field = event.target.closest(".form-field");
    if (!field) return;
    field.classList.remove("invalid");
    field.querySelector(".field-error").textContent = "";
    hideWebsiteFormMessage();
  });

  document.getElementById("cancelDeleteWebsite").addEventListener("click", closeWebsiteDeleteModal);
  document.getElementById("confirmDeleteWebsite").addEventListener("click", deletePendingWebsite);
  const deleteModal = document.getElementById("deleteWebsiteModal");
  deleteModal.addEventListener("click", (event) => {
    if (event.target === deleteModal) closeWebsiteDeleteModal();
  });
}

function bindSettings() {
  document.getElementById("themeToggle").addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
  });

  document.getElementById("exportAllData").addEventListener("click", exportAllData);
  document.getElementById("bindBackupFile").addEventListener("click", bindLocalBackupFile);
  document.getElementById("syncBackupFile").addEventListener("click", () => syncToBoundFile({
    requestPermission: true,
    notify: true,
    confirmWrite: true
  }));
  document.getElementById("unbindBackupFile").addEventListener("click", unbindLocalBackupFile);
  document.getElementById("autoFileSyncToggle").addEventListener("change", handleAutoFileSyncChange);
  const fileInput = document.getElementById("importDataFile");
  fileInput.addEventListener("change", () => {
    if (fileInput.files?.[0]) processImportFile(fileInput.files[0]);
  });

  const dropzone = document.getElementById("importDropzone");
  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.add("dragging");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropzone.classList.remove("dragging");
    });
  });
  dropzone.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (file) processImportFile(file);
  });

  document.getElementById("clearImportFile").addEventListener("click", clearPendingImport);
  document.getElementById("confirmImportData").addEventListener("click", confirmImportData);
  document.getElementById("importStrategy").addEventListener("change", updateImportWarning);
}

function navigateTo(pageName) {
  const targetPanel = document.getElementById(`page-${pageName}`);
  const targetNav = document.querySelector(`.nav-item[data-page="${pageName}"]`);
  if (!targetPanel || !targetNav) return;

  document.querySelectorAll(".page-panel").forEach((panel) => panel.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    item.removeAttribute("aria-current");
  });

  targetPanel.classList.add("active");
  targetNav.classList.add("active");
  targetNav.setAttribute("aria-current", "page");
  document.getElementById("pageTitle").textContent = targetPanel.dataset.title;
  if (pageName === "settings") renderSettings();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadCompanies() {
  const saved = readLocalStorage("jobAssistant.companies");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const migrated = migrateLegacyCompanyCategories(parsed);
        if (migrated.some((record, index) => record !== parsed[index])) {
          try {
            window.localStorage.setItem("jobAssistant.companies", JSON.stringify(migrated));
          } catch (error) {
            console.warn("旧企业分类已在当前页面迁移，但无法写回本机存储。", error);
          }
        }
        return migrated;
      }
    } catch (error) {
      console.warn("本地企业数据无法解析，将读取初始数据。", error);
    }
  }

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("data/companies.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (Array.isArray(data)) return migrateLegacyCompanyCategories(data);
    } catch (error) {
      console.warn("企业 JSON 加载失败，将使用内置初始数据。", error);
    }
  }

  return migrateLegacyCompanyCategories(structuredCloneSafe(FALLBACK_COMPANIES));
}

function resolveCompanyCategory(record) {
  const category = String(record?.category || "").trim();
  const companyName = String(record?.company || "").trim();
  const companyRemark = String(record?.companyRemark || "").trim();
  if (category === "研究所/央国企") {
    return RESEARCH_INSTITUTE_NAME_PATTERN.test(companyName) ? "研究所" : "央国企";
  }
  if (category === "私企" && companyRemark.includes("外企")) return "外企";
  return category;
}

function migrateLegacyCompanyCategories(records) {
  return records.map((record) => {
    if (!record || typeof record !== "object") return record;
    const category = resolveCompanyCategory(record);
    return category === record.category ? record : { ...record, category };
  });
}

async function loadLearningData() {
  const saved = readLocalStorage("jobAssistant.learning");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error("本机学习数据的顶层结构无效");
      }
      state.learningStorageAuthoritative = true;
      return normalizeLearningData(parsed);
    } catch (error) {
      console.warn("本地学习数据无法解析，将读取初始数据。", error);
      state.learningStorageCorrupt = true;
      state.learningStorageAuthoritative = false;
    }
  }

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("data/learning.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return normalizeLearningData(await response.json());
    } catch (error) {
      console.warn("学习 JSON 加载失败，将使用内置初始数据。", error);
    }
  }

  return normalizeLearningData(FALLBACK_LEARNING);
}

async function loadWebsites() {
  const saved = readLocalStorage("jobAssistant.websites");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (error) {
      console.warn("本地网站数据无法解析，将读取初始数据。", error);
    }
  }

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("data/websites.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (Array.isArray(data)) return data;
    } catch (error) {
      console.warn("网站 JSON 加载失败，将使用内置初始数据。", error);
    }
  }

  return structuredCloneSafe(FALLBACK_WEBSITES);
}

async function loadQuickLinks() {
  const saved = readLocalStorage("jobAssistant.quickLinks");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (error) {
      console.warn("本地常用链接数据无法解析，将读取初始数据。", error);
    }
  }

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch("data/quicklinks.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (Array.isArray(data)) return data;
    } catch (error) {
      console.warn("常用链接 JSON 加载失败，将使用空数据。", error);
    }
  }

  return structuredCloneSafe(FALLBACK_QUICK_LINKS);
}

function normalizeLearningData(data) {
  const normalized = {};
  Object.keys(LEARNING_FIELD_SCHEMAS).forEach((key) => {
    const records = Array.isArray(data?.[key]) ? data[key] : [];
    let normalizedRecords = records;
    if (key === "projects") normalizedRecords = records.map(normalizeProjectRecord);
    else if (key === "leetcode") normalizedRecords = records.map(normalizeLeetcodeRecord);
    else if (key === "mockInterviews") normalizedRecords = records.map(normalizeMockInterviewRecord);
    normalized[key] = normalizedRecords.map(normalizeLearningRecordImages);
  });
  return normalized;
}

function normalizeLearningRecordImages(record) {
  const source = record && typeof record === "object" ? record : {};
  return {
    ...source,
    images: Array.isArray(source.images)
      ? source.images.map(normalizeImageMetadata).filter(Boolean)
      : []
  };
}

function normalizeImageMetadata(image) {
  if (!image || typeof image !== "object" || !String(image.id || "").trim()) return null;
  return {
    id: String(image.id).trim(),
    name: String(image.name || "相关图片").trim(),
    type: ALLOWED_IMAGE_TYPES.has(image.type) ? image.type : "image/png",
    size: Math.max(0, Number(image.size) || 0),
    width: Math.max(0, Number(image.width) || 0),
    height: Math.max(0, Number(image.height) || 0),
    createdAt: image.createdAt || new Date().toISOString()
  };
}

function normalizeProjectRecord(record) {
  const source = record && typeof record === "object" ? record : {};
  const legacyChallenge = [source.difficulty, source.solution]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join("\n");
  const { difficulty, solution, ...rest } = source;
  return {
    ...rest,
    projectTime: String(source.projectTime || source.time || "").trim(),
    introduction: String(source.introduction || source.projectSummary || "").trim(),
    work: String(source.work || "").trim(),
    challengeSolution: String(source.challengeSolution || legacyChallenge).trim(),
    outcome: String(source.outcome || source.result || "").trim()
  };
}

function normalizeLeetcodeRecord(record) {
  const source = record && typeof record === "object" ? record : {};
  return {
    ...source,
    problemDetail: String(source.problemDetail || source.description || source.problem || "").trim()
  };
}

function normalizeMockInterviewRecord(record) {
  const source = record && typeof record === "object" ? record : {};
  const answer = [source.answer, source.myAnswer, source.referenceAnswer]
    .map((value) => String(value || "").trim())
    .find(Boolean) || "";
  const { type, referenceAnswer, myAnswer, review, ...rest } = source;
  return {
    ...rest,
    question: String(source.question || "").trim(),
    answer
  };
}

function readLocalStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.warn("浏览器本地存储暂不可用。", error);
    state.localStorageAvailable = false;
    return null;
  }
}

function persistCompanies(companies) {
  try {
    window.localStorage.setItem("jobAssistant.companies", JSON.stringify(companies));
    scheduleAutoFileSync();
    return true;
  } catch (error) {
    console.error("企业数据保存失败。", error);
    return false;
  }
}

function persistLearningData(learning) {
  try {
    window.localStorage.setItem("jobAssistant.learning", JSON.stringify(learning));
    scheduleAutoFileSync();
    return true;
  } catch (error) {
    console.error("学习数据保存失败。", error);
    return false;
  }
}

function persistWebsites(websites) {
  try {
    window.localStorage.setItem("jobAssistant.websites", JSON.stringify(websites));
    scheduleAutoFileSync();
    return true;
  } catch (error) {
    console.error("网站数据保存失败。", error);
    return false;
  }
}

function persistQuickLinks(quickLinks) {
  try {
    window.localStorage.setItem("jobAssistant.quickLinks", JSON.stringify(quickLinks));
    scheduleAutoFileSync();
    return true;
  } catch (error) {
    console.error("常用链接数据保存失败。", error);
    return false;
  }
}

function openImageDatabase() {
  if (!window.indexedDB) return Promise.reject(new Error("当前浏览器不支持图片存储"));
  if (imageDatabasePromise) return imageDatabasePromise;
  imageDatabasePromise = new Promise((resolve, reject) => {
    const request = window.indexedDB.open(IMAGE_DB_NAME, IMAGE_DB_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(IMAGE_STORE_NAME)) {
        const store = database.createObjectStore(IMAGE_STORE_NAME, { keyPath: "id" });
        store.createIndex("record", ["dataset", "recordId"], { unique: false });
      }
      if (!database.objectStoreNames.contains(FILE_HANDLE_STORE_NAME)) {
        database.createObjectStore(FILE_HANDLE_STORE_NAME, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("无法打开本机图片库"));
    request.onblocked = () => reject(new Error("图片库正在被其他页面占用"));
  }).catch((error) => {
    imageDatabasePromise = null;
    throw error;
  });
  return imageDatabasePromise;
}

async function initializeImageStorage() {
  try {
    await openImageDatabase();
    state.imageStorageAvailable = true;
    if (state.localStorageAvailable && state.learningStorageAuthoritative && !state.learningStorageCorrupt) {
      await cleanupOrphanImages();
    }
    await refreshImageStorageStats();
  } catch (error) {
    console.warn("本机图片存储不可用。", error);
    state.imageStorageAvailable = false;
    state.imageStorageStats = { count: 0, size: 0 };
  }
}

async function initializeFileSync() {
  const sync = state.fileSync;
  sync.supported = typeof window.showOpenFilePicker === "function" && window.isSecureContext !== false && state.imageStorageAvailable;
  sync.autoEnabled = readLocalStorage(AUTO_FILE_SYNC_KEY) === "true";
  sync.lastSyncedAt = readLocalStorage(LAST_FILE_SYNC_KEY) || "";
  if (!sync.supported) {
    sync.error = "当前浏览器不支持直接写入本地文件，请使用 Chrome 或 Edge，或继续使用“导出 JSON”。";
    return;
  }
  try {
    sync.handle = await loadBackupFileHandle();
    if (sync.handle) {
      sync.fileName = sync.handle.name || "已绑定的 JSON 文件";
      sync.permission = await getBackupFilePermission(sync.handle);
      if (sync.permission !== "granted" && sync.autoEnabled) {
        sync.error = "自动同步已暂停，请点击“立即同步”重新授予文件写入权限。";
      }
    }
  } catch (error) {
    console.warn("本地备份文件绑定无法恢复。", error);
    sync.error = "无法恢复之前的文件绑定，请重新绑定备份文件。";
    sync.handle = null;
    sync.fileName = "";
    sync.permission = "none";
  }
}

async function getBackupFilePermission(handle, request = false) {
  if (!handle) return "none";
  const options = { mode: "readwrite" };
  let permission = typeof handle.queryPermission === "function"
    ? await handle.queryPermission(options)
    : "prompt";
  if (permission !== "granted" && request && typeof handle.requestPermission === "function") {
    permission = await handle.requestPermission(options);
  }
  return permission;
}

async function bindLocalBackupFile() {
  const sync = state.fileSync;
  if (!sync.supported) {
    sync.error = "当前浏览器不支持文件绑定，请使用最新版 Chrome 或 Edge。";
    renderFileSyncSettings();
    return;
  }
  try {
    const [handle] = await window.showOpenFilePicker({
      id: "job-assistant-backup",
      multiple: false,
      types: [{
        description: "求职工作台 JSON 备份",
        accept: { "application/json": [".json"] }
      }]
    });
    if (!handle) return;
    await saveBackupFileHandle(handle);
    window.clearTimeout(sync.timer);
    sync.handle = handle;
    sync.fileName = handle.name || "JobAssistant-data.json";
    sync.permission = await getBackupFilePermission(handle);
    sync.autoEnabled = false;
    sync.lastSyncedAt = "";
    sync.queued = false;
    sync.error = "";
    persistFileSyncPreference(AUTO_FILE_SYNC_KEY, "false");
    persistFileSyncPreference(LAST_FILE_SYNC_KEY, "");
    renderFileSyncSettings();
    showToast(`已绑定 ${sync.fileName}，未读取或写入文件`);
  } catch (error) {
    if (error?.name === "AbortError") return;
    console.error("绑定本地备份文件失败。", error);
    sync.error = `绑定失败：${error.message || "浏览器未授予文件权限"}`;
    renderFileSyncSettings();
  }
}

async function unbindLocalBackupFile() {
  const sync = state.fileSync;
  if (!sync.handle) return;
  if (!window.confirm("解除绑定后不会删除磁盘上的备份文件，但工作台将停止自动写入。确认解除吗？")) return;
  try {
    await removeBackupFileHandle();
  } catch (error) {
    console.warn("文件句柄清理失败。", error);
  }
  window.clearTimeout(sync.timer);
  sync.handle = null;
  sync.fileName = "";
  sync.permission = "none";
  sync.autoEnabled = false;
  sync.error = "";
  sync.queued = false;
  persistFileSyncPreference(AUTO_FILE_SYNC_KEY, "false");
  renderFileSyncSettings();
  showToast("已解除本地备份文件绑定");
}

function handleAutoFileSyncChange(event) {
  const sync = state.fileSync;
  if (event.target.checked) {
    const confirmed = window.confirm(
      `开启后，每次修改都会用网页当前数据覆盖“${sync.fileName}”。\n\n` +
      "绑定文件中的原有内容不会自动导入。确认开启吗？"
    );
    if (!confirmed) {
      event.target.checked = false;
      return;
    }
  }
  sync.autoEnabled = Boolean(event.target.checked && sync.handle);
  persistFileSyncPreference(AUTO_FILE_SYNC_KEY, String(sync.autoEnabled));
  if (!sync.autoEnabled) {
    window.clearTimeout(sync.timer);
    sync.queued = false;
    sync.error = "";
  } else if (sync.permission === "granted") {
    scheduleAutoFileSync(100);
  } else {
    sync.error = "请先点击“立即同步”重新授予文件写入权限。";
  }
  renderFileSyncSettings();
}

function persistFileSyncPreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.warn("文件同步偏好无法保存。", error);
  }
}

function scheduleAutoFileSync(delay = 750) {
  const sync = state.fileSync;
  if (!sync.autoEnabled || !sync.handle || !sync.supported) return;
  window.clearTimeout(sync.timer);
  sync.timer = window.setTimeout(() => {
    syncToBoundFile({ requestPermission: false, notify: false });
  }, delay);
}

async function syncToBoundFile({ requestPermission = false, notify = false, confirmWrite = false } = {}) {
  const sync = state.fileSync;
  if (!sync.supported || !sync.handle) {
    sync.error = "请先绑定一个本地 JSON 备份文件。";
    renderFileSyncSettings();
    return false;
  }
  if (confirmWrite) {
    const confirmed = window.confirm(
      `“立即同步”会用网页当前数据覆盖“${sync.fileName}”。\n\n` +
      "该操作不会把文件内容导入网页。确认继续吗？"
    );
    if (!confirmed) return false;
  }
  if (sync.syncing) {
    sync.queued = true;
    return false;
  }

  let writable = null;
  try {
    sync.permission = await getBackupFilePermission(sync.handle, requestPermission);
    if (sync.permission !== "granted") {
      throw new Error(requestPermission
        ? "未获得文件写入权限"
        : "文件权限已失效，请点击“立即同步”重新授权");
    }
    sync.syncing = true;
    sync.error = "";
    renderFileSyncSettings();
    const payload = await createCompleteBackupPayload();
    const content = JSON.stringify(payload, null, 2);
    writable = await sync.handle.createWritable();
    await writable.write(content);
    await writable.close();
    writable = null;
    sync.lastSyncedAt = new Date().toISOString();
    persistFileSyncPreference(LAST_FILE_SYNC_KEY, sync.lastSyncedAt);
    if (notify) showToast(`已同步到 ${sync.fileName}`);
    return true;
  } catch (error) {
    if (writable?.abort) await writable.abort().catch(() => {});
    console.error("本地文件同步失败。", error);
    sync.error = `同步失败：${error.message || "无法写入本地文件"}`;
    if (!notify) showToast("自动同步失败，请到设置页面检查");
    return false;
  } finally {
    sync.syncing = false;
    renderFileSyncSettings();
    if (sync.queued) {
      sync.queued = false;
      scheduleAutoFileSync(120);
    }
  }
}

async function runImageStore(mode, operation) {
  const database = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(IMAGE_STORE_NAME, mode);
    const store = transaction.objectStore(IMAGE_STORE_NAME);
    let result;
    try {
      result = operation(store, transaction);
    } catch (error) {
      reject(error);
      return;
    }
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error || new Error("图片存储操作失败"));
    transaction.onabort = () => reject(transaction.error || new Error("图片存储操作已取消"));
  });
}

async function runDatabaseStore(storeName, mode, operation) {
  const database = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);
    let result;
    try {
      result = operation(store, transaction);
    } catch (error) {
      reject(error);
      return;
    }
    transaction.oncomplete = () => resolve(result);
    transaction.onerror = () => reject(transaction.error || new Error("本机存储操作失败"));
    transaction.onabort = () => reject(transaction.error || new Error("本机存储操作已取消"));
  });
}

async function saveBackupFileHandle(handle) {
  await runDatabaseStore(FILE_HANDLE_STORE_NAME, "readwrite", (store) => {
    store.put({ key: BACKUP_FILE_HANDLE_KEY, handle });
  });
}

async function loadBackupFileHandle() {
  const database = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(FILE_HANDLE_STORE_NAME, "readonly");
    const request = transaction.objectStore(FILE_HANDLE_STORE_NAME).get(BACKUP_FILE_HANDLE_KEY);
    request.onsuccess = () => resolve(request.result?.handle || null);
    request.onerror = () => reject(request.error || new Error("无法读取备份文件绑定"));
  });
}

async function removeBackupFileHandle() {
  await runDatabaseStore(FILE_HANDLE_STORE_NAME, "readwrite", (store) => {
    store.delete(BACKUP_FILE_HANDLE_KEY);
  });
}

async function putImageRecords(records) {
  if (!records.length) return;
  await runImageStore("readwrite", (store) => records.forEach((record) => store.put(record)));
}

async function deleteImageRecords(ids) {
  const uniqueIds = [...new Set((ids || []).filter(Boolean))];
  if (!uniqueIds.length || !state.imageStorageAvailable) return;
  await runImageStore("readwrite", (store) => uniqueIds.forEach((id) => store.delete(id)));
}

async function getStoredImage(id) {
  if (!state.imageStorageAvailable) return null;
  const database = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(IMAGE_STORE_NAME, "readonly");
    const request = transaction.objectStore(IMAGE_STORE_NAME).get(id);
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("图片读取失败"));
  });
}

async function getAllStoredImages() {
  if (!state.imageStorageAvailable) return [];
  const database = await openImageDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(IMAGE_STORE_NAME, "readonly");
    const request = transaction.objectStore(IMAGE_STORE_NAME).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error || new Error("图片列表读取失败"));
  });
}

function getReferencedImageIds(learning = state.learning) {
  return new Set(Object.values(learning || {})
    .flatMap((records) => Array.isArray(records) ? records : [])
    .flatMap((record) => Array.isArray(record.images) ? record.images.map((image) => image.id) : []));
}

async function cleanupOrphanImages() {
  const referenced = getReferencedImageIds();
  const stored = await getAllStoredImages();
  const orphanIds = stored.filter((image) => !referenced.has(image.id)).map((image) => image.id);
  if (orphanIds.length) await deleteImageRecords(orphanIds);
}

async function refreshImageStorageStats() {
  if (!state.imageStorageAvailable) {
    state.imageStorageStats = { count: 0, size: 0 };
    return;
  }
  const images = await getAllStoredImages();
  state.imageStorageStats = {
    count: images.length,
    size: images.reduce((sum, image) => sum + (Number(image.size) || image.blob?.size || 0), 0)
  };
}

function structuredCloneSafe(value) {
  return typeof structuredClone === "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));
}

function renderDashboard() {
  const companies = state.companies;
  const stats = {
    total: companies.length,
    applied: companies.filter((item) => item.status === "已投递").length,
    pending: companies.filter((item) => item.status === "待投递").length,
    interview: companies.filter((item) => INTERVIEW_STATUSES.has(item.status)).length,
    offer: companies.filter((item) => item.status === "Offer").length
  };

  animateNumber("statTotal", stats.total);
  animateNumber("statApplied", stats.applied);
  animateNumber("statPending", stats.pending);
  animateNumber("statInterview", stats.interview);
  animateNumber("statOffer", stats.offer);

  const actioned = companies.filter((item) => ACTIONED_STATUSES.has(item.status)).length;
  const percent = stats.total ? Math.round((actioned / stats.total) * 100) : 0;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressRing").style.setProperty("--progress-angle", `${percent * 3.6}deg`);
  document.getElementById("heroSummary").textContent = stats.total
    ? `已关注 ${stats.total} 家企业，${stats.pending} 个机会正等待你推进。`
    : "从添加第一家目标企业开始，建立你的求职节奏。";

  renderRecentCompanies(companies);
  renderTodos(companies);
  renderQuickLinks();
}

function renderQuickLinks() {
  const container = document.getElementById("quickLinkList");
  const links = [...state.quickLinks]
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));

  if (!links.length) {
    container.innerHTML = emptyState("暂无常用链接，点击“新增链接”添加邮箱或 AI 工具", "链");
    return;
  }

  const themes = [
    ["#2b67d9", "#e9f1ff"],
    ["#7a52c7", "#f1ebff"],
    ["#0d9463", "#e8f8f1"],
    ["#c57419", "#fff3e1"],
    ["#cc4f5e", "#fff0f2"]
  ];
  container.innerHTML = links.map((link, index) => {
    const [color, background] = themes[index % themes.length];
    const safeId = escapeHtml(link.id || "");
    const validUrl = isHttpUrl(link.url);
    return `
      <article class="quick-link-card" style="--quick-link-color:${color};--quick-link-bg:${background}">
        <div class="quick-link-card-top">
          <span class="quick-link-icon" aria-hidden="true">${escapeHtml(getCompanyInitial(link.name))}</span>
          <span class="quick-link-category">${escapeHtml(link.category || "其他")}</span>
          <div class="quick-link-actions">
            <button type="button" data-quick-link-action="edit" data-quick-link-id="${safeId}" title="编辑">编</button>
            <button class="delete" type="button" data-quick-link-action="delete" data-quick-link-id="${safeId}" title="删除">删</button>
          </div>
        </div>
        <strong class="quick-link-name">${escapeHtml(link.name || "未命名链接")}</strong>
        <span class="quick-link-host">${escapeHtml(validUrl ? getWebsiteHostname(link.url) : "网址无效")}</span>
        <p>${escapeHtml(link.remark || "点击打开常用工具")}</p>
        ${validUrl
          ? `<a class="quick-link-open" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">打开链接 <span aria-hidden="true">→</span></a>`
          : `<span class="quick-link-open disabled">网址无效</span>`}
      </article>`;
  }).join("");
}

function handleQuickLinkAction(event) {
  const button = event.target.closest("[data-quick-link-action]");
  if (!button) return;
  const link = state.quickLinks.find((item) => item.id === button.dataset.quickLinkId);
  if (!link) return;
  if (button.dataset.quickLinkAction === "edit") {
    openQuickLinkModal(link);
    return;
  }
  if (button.dataset.quickLinkAction !== "delete") return;
  if (!window.confirm(`确认删除常用链接“${link.name}”吗？`)) return;
  const nextLinks = state.quickLinks.filter((item) => item.id !== link.id);
  if (!persistQuickLinks(nextLinks)) {
    showToast("删除失败：本机常用链接数据无法保存");
    return;
  }
  state.quickLinks = nextLinks;
  renderQuickLinks();
  renderSettings();
  showToast("常用链接已删除");
}

function openQuickLinkModal(link = null) {
  const form = document.getElementById("quickLinkForm");
  form.reset();
  clearQuickLinkFormErrors();
  document.getElementById("quickLinkModalTitle").textContent = link ? "编辑常用链接" : "新增常用链接";
  document.getElementById("quickLinkId").value = link?.id || "";
  document.getElementById("quickLinkName").value = link?.name || "";
  document.getElementById("quickLinkCategory").value = link?.category || "";
  document.getElementById("quickLinkUrl").value = link?.url || "";
  document.getElementById("quickLinkRemark").value = link?.remark || "";
  document.getElementById("quickLinkModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("quickLinkName").focus(), 40);
}

function closeQuickLinkModal() {
  document.getElementById("quickLinkModal").hidden = true;
  syncModalBodyState();
}

function handleQuickLinkSubmit(event) {
  event.preventDefault();
  if (!validateQuickLinkForm()) return;
  const formData = new FormData(event.currentTarget);
  const existingId = document.getElementById("quickLinkId").value;
  const existing = state.quickLinks.find((item) => item.id === existingId);
  const now = new Date().toISOString();
  const link = {
    id: existing?.id || createId("quick-link"),
    name: String(formData.get("name") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    url: String(formData.get("url") || "").trim(),
    remark: String(formData.get("remark") || "").trim(),
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };
  const nextLinks = existing
    ? state.quickLinks.map((item) => item.id === existing.id ? link : item)
    : [...state.quickLinks, link];
  if (!persistQuickLinks(nextLinks)) {
    showQuickLinkFormMessage("保存失败：浏览器无法写入本机常用链接数据。");
    return;
  }
  state.quickLinks = nextLinks;
  closeQuickLinkModal();
  renderQuickLinks();
  renderSettings();
  showToast(existing ? "常用链接已更新" : "常用链接已添加并保存到本机");
}

function validateQuickLinkForm() {
  clearQuickLinkFormErrors();
  let valid = true;
  [
    ["quickLinkName", "请输入链接名称"],
    ["quickLinkCategory", "请输入链接分类"],
    ["quickLinkUrl", "请输入链接网址"]
  ].forEach(([id, message]) => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      setQuickLinkFieldError(input, message);
      valid = false;
    }
  });
  const urlInput = document.getElementById("quickLinkUrl");
  if (urlInput.value.trim() && !isHttpUrl(urlInput.value.trim())) {
    setQuickLinkFieldError(urlInput, "请输入以 http:// 或 https:// 开头的有效网址");
    valid = false;
  }
  if (!valid) {
    showQuickLinkFormMessage("请检查标红的表单内容后再保存。");
    document.querySelector("#quickLinkForm .form-field.invalid input, #quickLinkForm .form-field.invalid textarea")?.focus();
  }
  return valid;
}

function setQuickLinkFieldError(input, message) {
  const field = input.closest(".form-field");
  field.classList.add("invalid");
  field.querySelector(".field-error").textContent = message;
}

function clearQuickLinkFormErrors() {
  document.querySelectorAll("#quickLinkForm .form-field").forEach((field) => {
    field.classList.remove("invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
  });
  hideQuickLinkFormMessage();
}

function showQuickLinkFormMessage(message) {
  const element = document.getElementById("quickLinkFormMessage");
  element.textContent = message;
  element.classList.add("show");
}

function hideQuickLinkFormMessage() {
  const element = document.getElementById("quickLinkFormMessage");
  element.textContent = "";
  element.classList.remove("show");
}

function renderCompanyManagement() {
  renderCategoryCounts();
  const companies = getFilteredCompanies();
  const container = document.getElementById("companyList");
  document.getElementById("companyResultCount").textContent = `共 ${companies.length} 家企业`;

  if (!companies.length) {
    const message = state.companies.length ? "没有符合当前条件的企业" : "暂无企业记录，点击“新增企业”开始添加";
    container.innerHTML = emptyState(message, "企");
    return;
  }

  container.innerHTML = companies.map((item, index) => {
    const link = getPreferredCompanyLink(item);
    const deadline = getDeadlineInfo(item.deadline);
    const themes = [
      ["#2b67d9", "#e9f1ff"],
      ["#7a52c7", "#f1ebff"],
      ["#0d9463", "#e8f8f1"],
      ["#c57419", "#fff3e1"]
    ];
    const [color, background] = themes[index % themes.length];
    const safeId = escapeHtml(item.id || "");
    return `
      <article class="company-record" data-company-id="${safeId}">
        <div class="company-record-main">
          <span class="company-avatar" style="--avatar-color:${color};--avatar-bg:${background}">${escapeHtml(getCompanyInitial(item.company))}</span>
          <div class="company-record-copy">
            <strong title="${escapeHtml(item.company)}">${escapeHtml(item.company || "未命名企业")}</strong>
            <span class="company-category-label">${escapeHtml(item.category || "未分类")}</span>
          </div>
        </div>
        <div class="company-position-copy">
          <strong title="${escapeHtml(item.position)}">${escapeHtml(item.position || "岗位待定")}</strong>
          <span>${escapeHtml(item.direction || "方向待定")}</span>
        </div>
        <div class="company-place-copy">
          <strong>${escapeHtml(item.location || "地点待定")}</strong>
          <span>${escapeHtml(item.batch || "批次待定")}</span>
        </div>
        <span class="status-pill ${getStatusClass(item.status)}">${escapeHtml(item.status || "未关注")}</span>
        <div class="deadline-cell ${deadline.urgent ? "urgent" : ""}">
          <strong>${escapeHtml(deadline.dateText)}</strong>
          <span>${escapeHtml(deadline.relativeText)}</span>
        </div>
        <div class="record-actions">
          ${link
            ? `<a class="record-action" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer" title="打开招聘链接" aria-label="打开 ${escapeHtml(item.company)} 招聘链接">链</a>`
            : `<span class="record-action disabled" title="暂无招聘链接" aria-hidden="true">链</span>`}
          <button class="record-action" type="button" data-company-action="edit" data-company-id="${safeId}" title="编辑企业" aria-label="编辑 ${escapeHtml(item.company)}">编</button>
          <button class="record-action delete" type="button" data-company-action="delete" data-company-id="${safeId}" title="删除企业" aria-label="删除 ${escapeHtml(item.company)}">删</button>
        </div>
      </article>`;
  }).join("");
}

function renderCategoryCounts() {
  document.getElementById("categoryCountAll").textContent = state.companies.length;
  document.getElementById("categoryCountStateOwned").textContent = state.companies.filter((item) => item.category === "央国企").length;
  document.getElementById("categoryCountInstitute").textContent = state.companies.filter((item) => item.category === "研究所").length;
  document.getElementById("categoryCountPrivate").textContent = state.companies.filter((item) => item.category === "私企").length;
  document.getElementById("categoryCountForeign").textContent = state.companies.filter((item) => item.category === "外企").length;
}

function getFilteredCompanies() {
  const query = state.companyFilters.search.toLocaleLowerCase("zh-CN");
  return state.companies
    .filter((item) => state.companyFilters.category === "全部" || item.category === state.companyFilters.category)
    .filter((item) => state.companyFilters.batch === "全部" || item.batch === state.companyFilters.batch)
    .filter((item) => state.companyFilters.status === "全部" || item.status === state.companyFilters.status)
    .filter((item) => {
      if (!query) return true;
      return COMPANY_SEARCH_FIELDS.some((field) => String(item[field] || "")
        .toLocaleLowerCase("zh-CN")
        .includes(query));
    })
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
}

function resetCompanyFilters() {
  state.companyFilters = { category: "全部", batch: "全部", status: "全部", search: "" };
  document.getElementById("companySearch").value = "";
  document.getElementById("batchFilter").value = "全部";
  document.getElementById("statusFilter").value = "全部";
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const active = tab.dataset.companyCategory === "全部";
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderCompanyManagement();
}

function handleCompanyListClick(event) {
  const actionButton = event.target.closest("[data-company-action]");
  if (!actionButton) return;
  const company = state.companies.find((item) => item.id === actionButton.dataset.companyId);
  if (!company) return;

  if (actionButton.dataset.companyAction === "edit") openCompanyModal(company);
  if (actionButton.dataset.companyAction === "delete") openDeleteModal(company);
}

function openCompanyModal(company = null) {
  const form = document.getElementById("companyForm");
  form.reset();
  clearAllFormErrors();
  document.getElementById("companyModalTitle").textContent = company ? "编辑企业" : "新增企业";
  document.getElementById("companyId").value = company?.id || "";

  if (company) {
    const fieldMap = {
      companyName: company.company,
      companyCategory: company.category,
      companyLocation: company.location,
      companyUrl: company.companyUrl,
      recruitmentUrl: company.recruitmentUrl,
      companyRemark: company.companyRemark,
      positionName: company.position,
      positionDirection: company.direction,
      recruitmentBatch: company.batch,
      applicationStatus: company.status,
      applyDate: company.applyDate,
      deadline: company.deadline,
      positionUrl: company.positionUrl,
      applicationRemark: company.remark
    };
    Object.entries(fieldMap).forEach(([id, value]) => {
      document.getElementById(id).value = value || "";
    });
  } else {
    document.getElementById("companyCategory").value = state.companyFilters.category === "全部"
      ? ""
      : state.companyFilters.category;
    document.getElementById("recruitmentBatch").value = "正式批";
    document.getElementById("applicationStatus").value = "未关注";
  }

  document.getElementById("companyModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("companyName").focus(), 40);
}

function closeCompanyModal() {
  document.getElementById("companyModal").hidden = true;
  if (document.getElementById("deleteCompanyModal").hidden) document.body.classList.remove("modal-open");
}

function handleCompanySubmit(event) {
  event.preventDefault();
  if (!validateCompanyForm()) return;

  const form = event.currentTarget;
  const formData = new FormData(form);
  const existingId = document.getElementById("companyId").value;
  const existing = state.companies.find((item) => item.id === existingId);
  const now = new Date().toISOString();
  const company = {
    id: existing?.id || createId("company"),
    company: formData.get("company").trim(),
    category: formData.get("category"),
    companyUrl: formData.get("companyUrl").trim(),
    recruitmentUrl: formData.get("recruitmentUrl").trim(),
    location: formData.get("location").trim(),
    companyRemark: formData.get("companyRemark").trim(),
    position: formData.get("position").trim(),
    direction: formData.get("direction").trim(),
    batch: formData.get("batch"),
    status: formData.get("status"),
    applyDate: formData.get("applyDate"),
    deadline: formData.get("deadline"),
    positionUrl: formData.get("positionUrl").trim(),
    remark: formData.get("remark").trim(),
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };

  const nextCompanies = existing
    ? state.companies.map((item) => item.id === existing.id ? company : item)
    : [...state.companies, company];

  if (!persistCompanies(nextCompanies)) {
    showFormMessage("保存失败：浏览器无法写入本机数据，请检查隐私或存储设置。");
    return;
  }

  state.companies = nextCompanies;
  renderCompanyManagement();
  renderDashboard();
  closeCompanyModal();
  showToast(existing ? "企业信息已更新" : "企业已添加并保存到本机");
}

function validateCompanyForm() {
  clearAllFormErrors();
  let valid = true;
  const requiredFields = [
    ["companyName", "请输入企业名称"],
    ["companyCategory", "请选择企业分类"],
    ["companyLocation", "请输入工作地点"],
    ["positionName", "请输入岗位名称"],
    ["recruitmentBatch", "请选择招聘批次"],
    ["applicationStatus", "请选择投递状态"]
  ];

  requiredFields.forEach(([id, message]) => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      setFieldError(input, message);
      valid = false;
    }
  });

  ["companyUrl", "recruitmentUrl", "positionUrl"].forEach((id) => {
    const input = document.getElementById(id);
    if (input.value.trim() && !isHttpUrl(input.value.trim())) {
      setFieldError(input, "请输入以 http:// 或 https:// 开头的有效网址");
      valid = false;
    }
  });

  const applyDate = document.getElementById("applyDate");
  const deadline = document.getElementById("deadline");
  const dateInputs = [applyDate, deadline];
  dateInputs.forEach((input) => {
    const hasFourDigitYear = !input.value || /^\d{4}-\d{2}-\d{2}$/.test(input.value);
    if (input.validity.rangeOverflow || !hasFourDigitYear) {
      setFieldError(input, "年份必须为4位数字");
      valid = false;
    }
  });

  const datesWithinRange = dateInputs.every((input) => !input.validity.rangeOverflow && (!input.value || /^\d{4}-\d{2}-\d{2}$/.test(input.value)));
  if (datesWithinRange && applyDate.value && deadline.value && deadline.value < applyDate.value) {
    setFieldError(deadline, "截止日期不能早于投递日期");
    valid = false;
  }

  if (!valid) {
    showFormMessage("请检查标红的表单内容后再保存。");
    document.querySelector(".form-field.invalid input, .form-field.invalid select, .form-field.invalid textarea")?.focus();
  }
  return valid;
}

function setFieldError(input, message) {
  const field = input.closest(".form-field");
  if (!field) return;
  field.classList.add("invalid");
  field.querySelector(".field-error").textContent = message;
}

function clearFieldError(input) {
  const field = input.closest(".form-field");
  if (!field) return;
  field.classList.remove("invalid");
  field.querySelector(".field-error").textContent = "";
  const message = document.getElementById("companyFormMessage");
  message.classList.remove("show");
  message.textContent = "";
}

function clearAllFormErrors() {
  document.querySelectorAll("#companyForm .form-field").forEach((field) => {
    field.classList.remove("invalid");
    field.querySelector(".field-error").textContent = "";
  });
  const message = document.getElementById("companyFormMessage");
  message.classList.remove("show");
  message.textContent = "";
}

function showFormMessage(message) {
  const element = document.getElementById("companyFormMessage");
  element.textContent = message;
  element.classList.add("show");
}

function openDeleteModal(company) {
  state.pendingDeleteId = company.id;
  document.getElementById("deleteCompanyMessage").textContent = `即将删除“${company.company}”及其投递记录，此操作无法撤销。`;
  document.getElementById("deleteCompanyModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("cancelDeleteCompany").focus(), 30);
}

function closeDeleteModal() {
  state.pendingDeleteId = null;
  document.getElementById("deleteCompanyModal").hidden = true;
  if (document.getElementById("companyModal").hidden) document.body.classList.remove("modal-open");
}

function deletePendingCompany() {
  const company = state.companies.find((item) => item.id === state.pendingDeleteId);
  if (!company) {
    closeDeleteModal();
    return;
  }
  const nextCompanies = state.companies.filter((item) => item.id !== company.id);
  if (!persistCompanies(nextCompanies)) {
    showToast("删除失败：本机数据无法保存");
    return;
  }
  state.companies = nextCompanies;
  closeDeleteModal();
  renderCompanyManagement();
  renderDashboard();
  showToast(`已删除“${company.company}”`);
}

function getPreferredCompanyLink(company) {
  return [company.positionUrl, company.recruitmentUrl, company.companyUrl]
    .find((value) => isHttpUrl(value)) || "";
}

function isHttpUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function getDeadlineInfo(dateText) {
  const date = parseLocalDate(dateText);
  if (!date) return { dateText: "未设置", relativeText: "—", urgent: false };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.ceil((date - today) / 86400000);
  return {
    dateText: `${date.getMonth() + 1} 月 ${date.getDate()} 日`,
    relativeText: days < 0 ? "已截止" : days === 0 ? "今天截止" : `${days} 天后`,
    urgent: days >= 0 && days <= 7
  };
}

function createId(prefix) {
  if (window.crypto?.randomUUID) return `${prefix}-${window.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function renderLearningCenter() {
  renderLearningCounts();
  const module = LEARNING_MODULES[state.activeLearningModule];

  document.querySelectorAll("[data-learning-module]").forEach((card) => {
    card.classList.toggle("active", card.dataset.learningModule === state.activeLearningModule);
  });

  document.getElementById("learningWorkspaceTitle").textContent = module.title;
  document.getElementById("learningWorkspaceKicker").textContent = module.kicker;
  document.getElementById("learningWorkspaceDescription").textContent = module.description;

  const subtabs = document.getElementById("learningSubtabs");
  subtabs.hidden = state.activeLearningModule !== "projectHub";
  subtabs.querySelectorAll("[data-learning-dataset]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.learningDataset === state.activeLearningDataset);
  });

  const isMockInterview = state.activeLearningModule === "mockInterviews";
  document.getElementById("randomQuestionButton").hidden = !isMockInterview;
  if (!isMockInterview || !state.randomQuestionId) {
    document.getElementById("randomQuestionPanel").hidden = true;
  } else {
    renderRandomQuestion();
  }

  const addLabels = {
    projects: "新增项目",
    interviewKnowledge: "新增问答",
    aptitudeTests: "新增题目",
    essays: "新增素材",
    leetcode: "新增算法题",
    mockInterviews: "新增面试题"
  };
  document.getElementById("addLearningRecord").innerHTML = `<span aria-hidden="true">＋</span> ${addLabels[state.activeLearningDataset]}`;
  document.getElementById("learningSearch").placeholder = `搜索${getDatasetDisplayName(state.activeLearningDataset)}`;
  configureLearningFilter();
  renderLearningRecords();
}

function renderLearningCounts() {
  const total = Object.keys(LEARNING_FIELD_SCHEMAS)
    .reduce((sum, key) => sum + (state.learning[key]?.length || 0), 0);
  document.getElementById("learningTotalCount").textContent = total;
  document.getElementById("moduleCountProjectHub").textContent = (state.learning.projects?.length || 0) + (state.learning.interviewKnowledge?.length || 0);
  document.getElementById("moduleCountAptitude").textContent = state.learning.aptitudeTests?.length || 0;
  document.getElementById("moduleCountEssays").textContent = state.learning.essays?.length || 0;
  document.getElementById("moduleCountLeetcode").textContent = state.learning.leetcode?.length || 0;
  document.getElementById("moduleCountMock").textContent = state.learning.mockInterviews?.length || 0;
}

function configureLearningFilter() {
  const dataset = state.activeLearningDataset;
  const filterField = document.getElementById("learningFilterField");
  const select = document.getElementById("learningFilter");
  let options = [];
  let label = "分类筛选";

  if (dataset === "aptitudeTests") {
    options = ["言语理解", "判断推理", "数量关系", "资料分析", "常识"];
    label = "题目类型";
  } else if (dataset === "essays") {
    options = uniqueValues(state.learning.essays, "topic");
    label = "主题分类";
  } else if (dataset === "leetcode") {
    options = ["简单", "中等", "困难"];
    label = "题目难度";
  }

  filterField.hidden = options.length === 0;
  document.getElementById("learningFilterLabel").textContent = label;
  if (!options.includes(state.learningFilter)) state.learningFilter = "全部";
  select.innerHTML = `<option value="全部">全部</option>${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}`;
  select.value = state.learningFilter;
}

function uniqueValues(records, key) {
  return [...new Set((records || []).map((item) => String(item[key] || "").trim()).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function renderLearningRecords() {
  const dataset = state.activeLearningDataset;
  const records = getFilteredLearningRecords(dataset);
  const container = document.getElementById("learningRecordList");
  document.getElementById("learningResultCount").textContent = `共 ${records.length} 条记录`;

  if (!records.length) {
    const allRecords = state.learning[dataset] || [];
    const message = allRecords.length ? "没有符合当前条件的记录" : `暂无${getDatasetDisplayName(dataset)}，点击右上角开始添加`;
    container.innerHTML = emptyState(message, "学");
    return;
  }

  container.innerHTML = records.map((record) => renderLearningCard(dataset, record)).join("");
}

function getFilteredLearningRecords(dataset) {
  const query = state.learningSearch.toLocaleLowerCase("zh-CN");
  const filterKeys = {
    aptitudeTests: "type",
    essays: "topic",
    leetcode: "difficulty"
  };
  const filterKey = filterKeys[dataset];

  return [...(state.learning[dataset] || [])]
    .filter((record) => {
      if (!query) return true;
      return Object.entries(record)
        .filter(([key]) => !["id", "createdAt", "updatedAt"].includes(key))
        .some(([, value]) => typeof value === "string" && value.toLocaleLowerCase("zh-CN").includes(query));
    })
    .filter((record) => !filterKey || state.learningFilter === "全部" || record[filterKey] === state.learningFilter)
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));
}

function renderLearningCard(dataset, record) {
  const view = getLearningCardView(dataset, record);
  const safeId = escapeHtml(record.id || "");
  const commonData = `data-learning-dataset="${dataset}" data-learning-id="${safeId}"`;
  const detailLabels = {
    projects: `查看项目详情：${record.name || "未命名项目"}`,
    interviewKnowledge: `查看八股问答详情：${record.question || "未命名问题"}`,
    aptitudeTests: `查看题目详情：${record.question || "未命名题目"}`,
    essays: `查看申论素材详情：${record.title || "未命名素材"}`,
    leetcode: `查看算法题详情：${record.name || "未命名题目"}`,
    mockInterviews: `查看模拟面试详情：${record.question || "未命名面试题"}`
  };
  const detailAttributes = detailLabels[dataset]
    ? `data-learning-view="${dataset}" data-learning-id="${safeId}" tabindex="0" aria-label="${escapeHtml(detailLabels[dataset])}"`
    : "";
  const specialActions = [];

  if (dataset === "aptitudeTests") {
    specialActions.push(`<button class="learning-card-action ${record.favorite ? "active" : ""}" type="button" data-learning-action="favorite" ${commonData} title="收藏">藏</button>`);
    specialActions.push(`<button class="learning-card-action ${record.wrong ? "active" : ""}" type="button" data-learning-action="wrong" ${commonData} title="错题标记">错</button>`);
  }

  if (dataset === "leetcode") {
    if (isHttpUrl(record.link)) {
      specialActions.push(`<a class="learning-card-action" href="${escapeHtml(record.link)}" target="_blank" rel="noopener noreferrer" title="打开 LeetCode">题</a>`);
    }
    specialActions.push(`<button class="learning-card-action ${record.completed ? "active" : ""}" type="button" data-learning-action="completed" ${commonData} title="完成标记">完</button>`);
    specialActions.push(`<button class="learning-card-action ${record.review ? "active" : ""}" type="button" data-learning-action="review" ${commonData} title="复习标记">复</button>`);
  }

  return `
    <article class="learning-record-card" ${detailAttributes}>
      <div class="learning-record-top">
        <div class="learning-record-title">
          <h3>${escapeHtml(view.title)}</h3>
          <span class="record-type-tag">${escapeHtml(view.tag)}</span>
          ${view.states.map((stateText) => `<span class="record-state-tag">${escapeHtml(stateText)}</span>`).join("")}
        </div>
        <div class="learning-card-actions">
          ${specialActions.join("")}
          <button class="learning-card-action" type="button" data-learning-action="edit" ${commonData} title="编辑">编</button>
          <button class="learning-card-action delete" type="button" data-learning-action="delete" ${commonData} title="删除">删</button>
        </div>
      </div>
      <p class="learning-record-summary">${escapeHtml(view.summary || "暂未填写详细内容")}</p>
      <div class="learning-record-details">
        ${view.details.map((detail) => `<span>${escapeHtml(detail)}</span>`).join("")}
        ${(record.images?.length || 0) ? `<span class="learning-image-count-badge">图 ${record.images.length}</span>` : ""}
        ${detailAttributes ? `<span class="learning-card-view-hint">点击卡片查看详情 →</span>` : ""}
      </div>
    </article>`;
}

function getLearningCardView(dataset, record) {
  if (dataset === "projects") return {
    title: record.name || "未命名项目",
    tag: "项目经历",
    summary: record.introduction,
    states: [],
    details: compactDetails([
      record.projectTime && `时间：${record.projectTime}`,
      record.techStack && `技术栈：${record.techStack}`,
      record.outcome && `成果：${record.outcome}`
    ])
  };
  if (dataset === "interviewKnowledge") return {
    title: record.question || "未命名问题",
    tag: "八股问答",
    summary: record.answer,
    states: [],
    details: compactDetails([record.followUp && `追问：${record.followUp}`, record.remark && `备注：${record.remark}`])
  };
  if (dataset === "aptitudeTests") return {
    title: record.question || "未命名题目",
    tag: record.type || "未分类",
    summary: record.analysis || `答案：${record.answer || "待补充"}`,
    states: compactDetails([record.favorite && "已收藏", record.wrong && "错题"]),
    details: compactDetails([record.answer && `答案：${record.answer}`, record.wrongReason && `错因：${record.wrongReason}`])
  };
  if (dataset === "essays") return {
    title: record.title || "未命名素材",
    tag: record.topic || "未分类",
    summary: record.content,
    states: [],
    details: compactDetails([record.goldenSentence && `金句：${record.goldenSentence}`, record.caseStudy && `案例：${record.caseStudy}`])
  };
  if (dataset === "leetcode") return {
    title: `#${record.number || "—"} ${record.name || "未命名题目"}`,
    tag: `${record.difficulty || "难度待定"} · ${record.type || "未分类"}`,
    summary: record.problemDetail || record.approach,
    states: compactDetails([record.completed && "已完成", record.review && "待复习"]),
    details: compactDetails([record.timeComplexity && `时间 ${record.timeComplexity}`, record.spaceComplexity && `空间 ${record.spaceComplexity}`])
  };
  return {
    title: record.question || "未命名面试题",
    tag: "模拟面试",
    summary: record.answer,
    states: [],
    details: compactDetails([record.answer && "已记录回答"])
  };
}

function compactDetails(values) {
  return values.filter(Boolean);
}

function resetLearningFilterState() {
  state.learningSearch = "";
  state.learningFilter = "全部";
  document.getElementById("learningSearch").value = "";
  document.getElementById("learningFilter").value = "全部";
}

function getDatasetDisplayName(dataset) {
  return {
    projects: "项目经历",
    interviewKnowledge: "八股问答",
    aptitudeTests: "行测题目",
    essays: "申论素材",
    leetcode: "算法题",
    mockInterviews: "模拟面试题"
  }[dataset] || "学习记录";
}

function handleLearningRecordAction(event) {
  const target = event.target.closest("[data-learning-action]");
  if (!target) {
    if (event.target.closest("a, button, input, select, textarea")) return;
    const detailCard = event.target.closest("[data-learning-view]");
    if (detailCard?.dataset.learningView === "aptitudeTests") openAptitudeDetail(detailCard.dataset.learningId);
    else if (detailCard?.dataset.learningView === "leetcode") openLeetcodeDetail(detailCard.dataset.learningId);
    else if (GENERAL_LEARNING_DETAIL_CONFIGS[detailCard?.dataset.learningView]) {
      openGeneralLearningDetail(detailCard.dataset.learningView, detailCard.dataset.learningId);
    }
    return;
  }
  const dataset = target.dataset.learningDataset;
  const record = state.learning[dataset]?.find((item) => item.id === target.dataset.learningId);
  if (!record) return;

  const action = target.dataset.learningAction;
  if (action === "edit") openLearningModal(record, dataset);
  else if (action === "delete") openLearningDeleteModal(record, dataset);
  else if (["favorite", "wrong", "completed", "review"].includes(action)) toggleLearningFlag(dataset, record.id, action);
}

function handleLearningRecordKeydown(event) {
  if (!['Enter', ' '].includes(event.key)) return;
  const detailCard = event.target.closest("[data-learning-view]");
  if (!detailCard || event.target !== detailCard) return;
  event.preventDefault();
  if (detailCard.dataset.learningView === "aptitudeTests") openAptitudeDetail(detailCard.dataset.learningId);
  else if (detailCard.dataset.learningView === "leetcode") openLeetcodeDetail(detailCard.dataset.learningId);
  else if (GENERAL_LEARNING_DETAIL_CONFIGS[detailCard.dataset.learningView]) {
    openGeneralLearningDetail(detailCard.dataset.learningView, detailCard.dataset.learningId);
  }
}

function toggleLearningFlag(dataset, recordId, field) {
  const nextRecords = state.learning[dataset].map((record) => record.id === recordId
    ? { ...record, [field]: !record[field], updatedAt: new Date().toISOString() }
    : record);
  const nextLearning = { ...state.learning, [dataset]: nextRecords };
  if (!persistLearningData(nextLearning)) {
    showToast("操作失败：本机学习数据无法保存");
    return;
  }
  state.learning = nextLearning;
  renderLearningCenter();
  if (dataset === "aptitudeTests" && state.activeAptitudeDetailId === recordId) renderAptitudeDetail();
  if (dataset === "leetcode" && state.activeLeetcodeDetailId === recordId) renderLeetcodeDetail();
  showToast("学习标记已更新");
}

function openAptitudeDetail(recordId) {
  const record = state.learning.aptitudeTests.find((item) => item.id === recordId);
  if (!record) return;
  state.activeAptitudeDetailId = recordId;
  renderAptitudeDetail();
  document.getElementById("aptitudeDetailModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.querySelector("[data-close-aptitude-detail]")?.focus(), 30);
}

function renderAptitudeDetail() {
  const record = state.learning.aptitudeTests.find((item) => item.id === state.activeAptitudeDetailId);
  if (!record) {
    closeAptitudeDetail();
    return;
  }

  document.getElementById("aptitudeDetailType").textContent = record.type || "未分类";
  document.getElementById("aptitudeDetailQuestion").textContent = record.question || "未填写题目";
  document.getElementById("aptitudeDetailAnswer").textContent = record.answer || "暂未填写答案。";
  document.getElementById("aptitudeDetailAnalysis").textContent = record.analysis || "暂未填写题目解析。";
  document.getElementById("aptitudeDetailWrongReason").textContent = record.wrongReason || "暂未记录错题原因。";
  document.getElementById("aptitudeDetailFavoriteState").hidden = !record.favorite;
  document.getElementById("aptitudeDetailWrongState").hidden = !record.wrong;
  renderRecordImageGallery("aptitudeDetailImages", "aptitudeDetailImageGrid", "aptitudeTests", record);

  const favoriteButton = document.getElementById("aptitudeDetailFavorite");
  favoriteButton.classList.toggle("active", Boolean(record.favorite));
  favoriteButton.textContent = record.favorite ? "取消收藏" : "收藏题目";
  favoriteButton.setAttribute("aria-pressed", String(Boolean(record.favorite)));

  const wrongButton = document.getElementById("aptitudeDetailWrong");
  wrongButton.classList.toggle("active", Boolean(record.wrong));
  wrongButton.textContent = record.wrong ? "取消错题" : "标记错题";
  wrongButton.setAttribute("aria-pressed", String(Boolean(record.wrong)));
}

function closeAptitudeDetail() {
  document.getElementById("aptitudeDetailModal").hidden = true;
  state.activeAptitudeDetailId = null;
  syncModalBodyState();
}

function toggleAptitudeDetailFlag(field) {
  if (!state.activeAptitudeDetailId) return;
  toggleLearningFlag("aptitudeTests", state.activeAptitudeDetailId, field);
}

function editAptitudeFromDetail() {
  const record = state.learning.aptitudeTests.find((item) => item.id === state.activeAptitudeDetailId);
  if (!record) return;
  closeAptitudeDetail();
  openLearningModal(record, "aptitudeTests");
}

function openLeetcodeDetail(recordId) {
  const record = state.learning.leetcode.find((item) => item.id === recordId);
  if (!record) return;
  state.activeLeetcodeDetailId = recordId;
  renderLeetcodeDetail();
  document.getElementById("leetcodeDetailModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.querySelector("[data-close-leetcode-detail]")?.focus(), 30);
}

function renderLeetcodeDetail() {
  const record = state.learning.leetcode.find((item) => item.id === state.activeLeetcodeDetailId);
  if (!record) {
    closeLeetcodeDetail();
    return;
  }

  document.getElementById("leetcodeDetailNumber").textContent = `#${record.number || "—"}`;
  document.getElementById("leetcodeDetailName").textContent = record.name || "未命名题目";
  document.getElementById("leetcodeDetailDifficulty").textContent = record.difficulty || "难度待定";
  document.getElementById("leetcodeDetailType").textContent = record.type || "未分类";
  document.getElementById("leetcodeDetailProblem").textContent = record.problemDetail || "暂未填写题目详情";
  document.getElementById("leetcodeDetailApproach").textContent = record.approach || "暂未填写解题思路";
  document.getElementById("leetcodeDetailCode").textContent = record.code || "# 暂未填写 Python 代码";
  document.getElementById("leetcodeDetailTime").textContent = record.timeComplexity || "暂未填写";
  document.getElementById("leetcodeDetailSpace").textContent = record.spaceComplexity || "暂未填写";
  renderRecordImageGallery("leetcodeDetailImages", "leetcodeDetailImageGrid", "leetcode", record);

  const completedState = document.getElementById("leetcodeDetailCompletedState");
  const reviewState = document.getElementById("leetcodeDetailReviewState");
  completedState.hidden = false;
  completedState.textContent = record.completed ? "已完成" : "未完成";
  reviewState.hidden = false;
  reviewState.textContent = record.review ? "待复习" : "无需复习";

  const completedButton = document.getElementById("leetcodeDetailCompleted");
  completedButton.classList.toggle("active", Boolean(record.completed));
  completedButton.textContent = record.completed ? "取消完成" : "标记完成";
  completedButton.setAttribute("aria-pressed", String(Boolean(record.completed)));

  const reviewButton = document.getElementById("leetcodeDetailReview");
  reviewButton.classList.toggle("active", Boolean(record.review));
  reviewButton.textContent = record.review ? "取消复习" : "标记复习";
  reviewButton.setAttribute("aria-pressed", String(Boolean(record.review)));

  const openLink = document.getElementById("leetcodeDetailOpenLink");
  const hasValidLink = isHttpUrl(record.link);
  openLink.hidden = !hasValidLink;
  if (hasValidLink) openLink.href = record.link;
  else openLink.removeAttribute("href");
}

function closeLeetcodeDetail() {
  document.getElementById("leetcodeDetailModal").hidden = true;
  state.activeLeetcodeDetailId = null;
  syncModalBodyState();
}

function toggleLeetcodeDetailFlag(field) {
  if (!state.activeLeetcodeDetailId) return;
  toggleLearningFlag("leetcode", state.activeLeetcodeDetailId, field);
}

function editLeetcodeFromDetail() {
  const record = state.learning.leetcode.find((item) => item.id === state.activeLeetcodeDetailId);
  if (!record) return;
  closeLeetcodeDetail();
  openLearningModal(record, "leetcode");
}

function openGeneralLearningDetail(dataset, recordId) {
  const config = GENERAL_LEARNING_DETAIL_CONFIGS[dataset];
  const record = state.learning[dataset]?.find((item) => item.id === recordId);
  if (!config || !record) return;
  state.activeLearningDetail = { dataset, recordId };
  renderGeneralLearningDetail();
  document.getElementById("generalLearningDetailModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.querySelector("[data-close-general-learning-detail]")?.focus(), 30);
}

function renderGeneralLearningDetail() {
  const active = state.activeLearningDetail;
  const config = active && GENERAL_LEARNING_DETAIL_CONFIGS[active.dataset];
  const record = config && state.learning[active.dataset]?.find((item) => item.id === active.recordId);
  if (!config || !record) {
    closeGeneralLearningDetail();
    return;
  }

  document.getElementById("generalLearningDetailKicker").textContent = config.kicker;
  document.getElementById("generalLearningDetailTitle").textContent = config.title;
  document.getElementById("generalLearningDetailRecordTitle").textContent = record[config.titleKey] || config.fallbackTitle;
  document.getElementById("generalLearningDetailPanel").dataset.detailDataset = active.dataset;

  const metaContainer = document.getElementById("generalLearningDetailMeta");
  metaContainer.replaceChildren();
  config.meta(record).forEach((text, index) => {
    const tag = document.createElement("span");
    tag.className = index === 0 ? "record-type-tag" : "record-state-tag";
    tag.textContent = text;
    metaContainer.append(tag);
  });

  const sectionsContainer = document.getElementById("generalLearningDetailSections");
  sectionsContainer.replaceChildren();
  config.sections.forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.className = `general-detail-section${section.featured ? " featured" : ""}`;

    const heading = document.createElement("h4");
    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = section.icon;
    heading.append(icon, document.createTextNode(` ${section.label}`));

    const content = document.createElement("p");
    content.textContent = String(record[section.key] || "").trim() || `暂未填写${section.label}`;
    sectionElement.append(heading, content);
    sectionsContainer.append(sectionElement);
  });
  renderRecordImageGallery("generalLearningDetailImages", "generalLearningDetailImageGrid", active.dataset, record);
}

function closeGeneralLearningDetail() {
  document.getElementById("generalLearningDetailModal").hidden = true;
  state.activeLearningDetail = null;
  syncModalBodyState();
}

function editGeneralLearningFromDetail() {
  const active = state.activeLearningDetail;
  const record = active && state.learning[active.dataset]?.find((item) => item.id === active.recordId);
  if (!active || !record) return;
  const dataset = active.dataset;
  closeGeneralLearningDetail();
  openLearningModal(record, dataset);
}

async function renderRecordImageGallery(sectionId, gridId, dataset, record) {
  const section = document.getElementById(sectionId);
  const grid = document.getElementById(gridId);
  if (!section || !grid) return;
  const images = Array.isArray(record.images) ? record.images : [];
  section.hidden = images.length === 0;
  grid.replaceChildren();
  if (!images.length) return;
  const renderKey = `${dataset}:${record.id}:${Date.now()}`;
  grid.dataset.renderKey = renderKey;
  images.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "learning-detail-image-button loading";
    button.dataset.learningImageIndex = String(index);
    button.dataset.learningImageDataset = dataset;
    button.dataset.learningImageRecord = record.id;
    button.setAttribute("aria-label", `查看图片 ${index + 1}：${image.name}`);
    const img = document.createElement("img");
    img.alt = image.name;
    const caption = document.createElement("span");
    caption.textContent = image.name;
    button.append(img, caption);
    grid.append(button);
    getStoredImage(image.id).then((stored) => {
      if (!stored?.blob || grid.dataset.renderKey !== renderKey || !button.isConnected) throw new Error("图片不存在");
      const url = URL.createObjectURL(stored.blob);
      img.onload = () => URL.revokeObjectURL(url);
      img.onerror = () => URL.revokeObjectURL(url);
      img.src = url;
      button.classList.remove("loading");
    }).catch(() => {
      button.classList.remove("loading");
      button.classList.add("missing");
      caption.textContent = `${image.name}（读取失败）`;
    });
  });
}

function handleLearningGalleryClick(event) {
  const button = event.target.closest("[data-learning-image-index]");
  if (!button) return;
  const dataset = button.dataset.learningImageDataset;
  const record = state.learning[dataset]?.find((item) => item.id === button.dataset.learningImageRecord);
  if (!record?.images?.length) return;
  openLearningImageLightbox(record.images, Number(button.dataset.learningImageIndex) || 0, button);
}

function openLearningImageLightbox(images, index, returnFocus) {
  closeLearningImageLightbox(false);
  state.imageLightbox = {
    images: images.map((image) => ({ ...image })),
    index: Math.max(0, Math.min(index, images.length - 1)),
    objectUrl: "",
    returnFocus
  };
  document.getElementById("learningImageLightbox").hidden = false;
  document.body.classList.add("modal-open");
  renderLearningImageLightbox();
  window.setTimeout(() => document.getElementById("closeLearningImageLightbox").focus(), 30);
}

async function renderLearningImageLightbox() {
  const lightbox = state.imageLightbox;
  if (!lightbox) return;
  if (lightbox.objectUrl) URL.revokeObjectURL(lightbox.objectUrl);
  lightbox.objectUrl = "";
  const metadata = lightbox.images[lightbox.index];
  const imageElement = document.getElementById("learningImageLightboxImage");
  imageElement.removeAttribute("src");
  imageElement.alt = metadata.name;
  document.getElementById("learningImageLightboxName").textContent = metadata.name;
  document.getElementById("learningImageLightboxMeta").textContent = `${metadata.width || "—"} × ${metadata.height || "—"} · ${formatBytes(metadata.size)}`;
  document.getElementById("learningImageLightboxCounter").textContent = `${lightbox.index + 1} / ${lightbox.images.length}`;
  const showNavigation = lightbox.images.length > 1;
  document.getElementById("learningImagePrevious").hidden = !showNavigation;
  document.getElementById("learningImageNext").hidden = !showNavigation;
  try {
    const stored = await getStoredImage(metadata.id);
    if (!stored?.blob || state.imageLightbox !== lightbox || lightbox.images[lightbox.index]?.id !== metadata.id) return;
    lightbox.objectUrl = URL.createObjectURL(stored.blob);
    imageElement.src = lightbox.objectUrl;
  } catch (error) {
    imageElement.alt = "图片读取失败";
    document.getElementById("learningImageLightboxMeta").textContent = "图片读取失败";
  }
}

function stepLearningImageLightbox(direction) {
  const lightbox = state.imageLightbox;
  if (!lightbox || lightbox.images.length < 2) return;
  lightbox.index = (lightbox.index + direction + lightbox.images.length) % lightbox.images.length;
  renderLearningImageLightbox();
}

function closeLearningImageLightbox(restoreFocus = true) {
  const lightbox = state.imageLightbox;
  if (lightbox?.objectUrl) URL.revokeObjectURL(lightbox.objectUrl);
  document.getElementById("learningImageLightbox").hidden = true;
  state.imageLightbox = null;
  syncModalBodyState();
  if (restoreFocus && lightbox?.returnFocus?.isConnected) lightbox.returnFocus.focus();
}

function openLearningModal(record = null, dataset = state.activeLearningDataset) {
  const schema = LEARNING_FIELD_SCHEMAS[dataset];
  clearLearningImageDraft();
  const recordId = record?.id || createId(dataset.replace(/s$/, ""));
  document.getElementById("learningRecordId").value = recordId;
  document.getElementById("learningRecordDataset").value = dataset;
  document.getElementById("learningModalTitle").textContent = `${record ? "编辑" : "新增"}${getDatasetDisplayName(dataset)}`;
  document.getElementById("learningModalKicker").textContent = LEARNING_MODULES[state.activeLearningModule].kicker;
  document.getElementById("learningFormFields").innerHTML = schema.map((field) => renderLearningFormField(field, record?.[field.key])).join("");
  state.learningImageDraft = {
    dataset,
    recordId,
    images: (record?.images || []).map((image) => ({ ...image })),
    pendingBlobs: new Map(),
    removedIds: new Set(),
    previewUrls: new Map()
  };
  renderLearningImageDraft();
  hideLearningFormMessage();
  document.getElementById("learningModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.querySelector("#learningFormFields input:not([type='checkbox']), #learningFormFields textarea, #learningFormFields select")?.focus(), 40);
}

function renderLearningFormField(field, value) {
  const fieldId = `learningField-${field.key}`;
  const spanClass = field.span === 2 ? " form-span-2" : "";
  if (field.type === "checkbox") {
    return `<div class="form-field checkbox-field${spanClass}"><label for="${fieldId}"><input id="${fieldId}" name="${field.key}" type="checkbox" ${value ? "checked" : ""}>${escapeHtml(field.label)}</label></div>`;
  }

  const requiredMark = field.required ? " <em>*</em>" : "";
  const requiredAttribute = field.required ? " required" : "";
  let control = "";
  if (field.type === "textarea" || field.type === "code") {
    control = `<textarea id="${fieldId}" name="${field.key}" rows="${field.type === "code" ? 7 : (field.rows || 4)}" placeholder="${escapeHtml(field.placeholder || "")}"${requiredAttribute}>${escapeHtml(value || "")}</textarea>`;
  } else if (field.type === "select") {
    control = `<select id="${fieldId}" name="${field.key}"${requiredAttribute}><option value="">请选择</option>${field.options.map((option) => `<option value="${escapeHtml(option)}" ${value === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  } else {
    control = `<input id="${fieldId}" name="${field.key}" type="${field.type}" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(field.placeholder || "")}"${requiredAttribute}>`;
  }
  const codeClass = field.type === "code" ? " code-field" : "";
  return `<label class="form-field${spanClass}${codeClass}"><span>${escapeHtml(field.label)}${requiredMark}</span>${control}<small class="field-error"></small></label>`;
}

function handleLearningImagePaste(event) {
  if (!state.learningImageDraft) return;
  const imageFiles = [...(event.clipboardData?.items || [])]
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter(Boolean);
  if (!imageFiles.length) return;
  event.preventDefault();
  addLearningImageFiles(imageFiles, true);
}

async function addLearningImageFiles(files, fromClipboard = false) {
  const draft = state.learningImageDraft;
  if (!draft) return;
  if (!state.imageStorageAvailable) {
    showLearningImageMessage("当前浏览器无法使用本机图片库，文字内容仍可正常保存。", true);
    return;
  }
  const availableSlots = MAX_IMAGES_PER_RECORD - draft.images.length;
  if (availableSlots <= 0) {
    showLearningImageMessage(`每条记录最多添加 ${MAX_IMAGES_PER_RECORD} 张图片。`, true);
    return;
  }

  const selectedFiles = files.slice(0, availableSlots);
  let added = 0;
  let firstError = "";
  setLearningImageBusy(true);
  for (let index = 0; index < selectedFiles.length; index += 1) {
    const file = selectedFiles[index];
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      firstError ||= `不支持“${file.name || "该图片"}”的格式，请使用 PNG、JPEG 或 WebP。`;
      continue;
    }
    if (file.size > MAX_IMAGE_SOURCE_SIZE) {
      firstError ||= `“${file.name || "该图片"}”超过 10 MB，无法添加。`;
      continue;
    }
    try {
      const optimized = await optimizeImageFile(file);
      const id = createId("image");
      const extension = optimized.type === "image/webp" ? "webp" : optimized.type.split("/")[1];
      const defaultName = fromClipboard ? `clipboard-${formatCompactTimestamp()}.${extension}` : file.name;
      const name = optimized.type === "image/webp" && !defaultName.toLowerCase().endsWith(".webp")
        ? defaultName.replace(/\.[^.]+$/, "") + ".webp"
        : defaultName;
      const metadata = {
        id,
        name,
        type: optimized.type,
        size: optimized.blob.size,
        width: optimized.width,
        height: optimized.height,
        createdAt: new Date().toISOString()
      };
      draft.images.push(metadata);
      draft.pendingBlobs.set(id, optimized.blob);
      draft.previewUrls.set(id, URL.createObjectURL(optimized.blob));
      added += 1;
    } catch (error) {
      console.warn("图片处理失败。", error);
      firstError ||= `“${file.name || "该图片"}”无法读取或压缩。`;
    }
  }
  setLearningImageBusy(false);
  renderLearningImageDraft();
  if (files.length > availableSlots) firstError ||= `最多还能添加 ${availableSlots} 张图片，其余图片已忽略。`;
  showLearningImageMessage(firstError || `已添加 ${added} 张图片，保存记录后生效。`, Boolean(firstError));
}

async function optimizeImageFile(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  if (file.type === "image/png" && scale === 1) {
    bitmap.close?.();
    return { blob: file, type: file.type, width, height };
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { alpha: file.type === "image/png" });
  if (!context) {
    bitmap.close?.();
    throw new Error("浏览器无法创建图片画布");
  }
  context.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();
  const outputType = file.type === "image/png" ? "image/png" : "image/webp";
  const blob = await new Promise((resolve, reject) => canvas.toBlob(
    (result) => result ? resolve(result) : reject(new Error("图片压缩失败")),
    outputType,
    outputType === "image/webp" ? 0.86 : undefined
  ));
  return { blob, type: outputType, width, height };
}

function formatCompactTimestamp() {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    "-",
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("");
}

function renderLearningImageDraft() {
  const draft = state.learningImageDraft;
  const field = document.getElementById("learningImageField");
  if (!draft || !field) return;
  field.classList.toggle("disabled", !state.imageStorageAvailable);
  document.getElementById("learningImageInput").disabled = !state.imageStorageAvailable;
  document.getElementById("learningImageDropzone").setAttribute("aria-disabled", String(!state.imageStorageAvailable));
  document.getElementById("learningImageCount").textContent = `${draft.images.length} / ${MAX_IMAGES_PER_RECORD}`;
  const container = document.getElementById("learningImagePreviewGrid");
  container.replaceChildren();
  draft.images.forEach((image) => {
    const card = document.createElement("article");
    card.className = "learning-image-preview-card";
    card.dataset.imageId = image.id;
    const preview = document.createElement("div");
    preview.className = "learning-image-preview";
    const img = document.createElement("img");
    img.alt = image.name;
    preview.append(img);
    const copy = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = image.name;
    const meta = document.createElement("span");
    meta.textContent = `${image.width || "—"} × ${image.height || "—"} · ${formatBytes(image.size)}`;
    copy.append(name, meta);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "learning-image-remove";
    remove.dataset.removeLearningImage = image.id;
    remove.setAttribute("aria-label", `删除图片 ${image.name}`);
    remove.textContent = "×";
    card.append(preview, copy, remove);
    container.append(card);
    loadDraftPreviewImage(image.id, img, card);
  });
}

async function loadDraftPreviewImage(imageId, img, card) {
  const draft = state.learningImageDraft;
  if (!draft || !draft.images.some((image) => image.id === imageId)) return;
  let url = draft.previewUrls.get(imageId);
  if (!url) {
    try {
      const stored = await getStoredImage(imageId);
      if (!stored?.blob) throw new Error("图片内容不存在");
      url = URL.createObjectURL(stored.blob);
      draft.previewUrls.set(imageId, url);
    } catch (error) {
      card.classList.add("missing");
      img.alt = "图片读取失败";
      return;
    }
  }
  if (state.learningImageDraft === draft && card.isConnected) img.src = url;
}

function removeLearningDraftImage(imageId) {
  const draft = state.learningImageDraft;
  if (!draft) return;
  const image = draft.images.find((item) => item.id === imageId);
  if (!image || !window.confirm(`确认移除图片“${image.name}”吗？保存记录后生效。`)) return;
  draft.images = draft.images.filter((item) => item.id !== imageId);
  if (draft.pendingBlobs.has(imageId)) draft.pendingBlobs.delete(imageId);
  else draft.removedIds.add(imageId);
  const url = draft.previewUrls.get(imageId);
  if (url) URL.revokeObjectURL(url);
  draft.previewUrls.delete(imageId);
  renderLearningImageDraft();
  showLearningImageMessage("图片已从当前编辑中移除，保存记录后生效。", false);
}

function clearLearningImageDraft() {
  const draft = state.learningImageDraft;
  draft?.previewUrls.forEach((url) => URL.revokeObjectURL(url));
  state.learningImageDraft = null;
  const container = document.getElementById("learningImagePreviewGrid");
  if (container) container.replaceChildren();
  showLearningImageMessage("", false);
}

function setLearningImageBusy(busy) {
  const input = document.getElementById("learningImageInput");
  const submit = document.querySelector("#learningForm button[type='submit']");
  if (input) input.disabled = busy || !state.imageStorageAvailable;
  if (submit) submit.disabled = busy;
  document.getElementById("learningImageField")?.classList.toggle("processing", busy);
}

function showLearningImageMessage(message, isError) {
  const element = document.getElementById("learningImageMessage");
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", Boolean(isError));
}

function closeLearningModal() {
  document.getElementById("learningModal").hidden = true;
  clearLearningImageDraft();
  syncModalBodyState();
}

async function handleLearningSubmit(event) {
  event.preventDefault();
  const dataset = document.getElementById("learningRecordDataset").value;
  const schema = LEARNING_FIELD_SCHEMAS[dataset];
  if (!validateLearningForm(schema)) return;

  const formData = new FormData(event.currentTarget);
  const recordId = document.getElementById("learningRecordId").value;
  const existing = state.learning[dataset].find((record) => record.id === recordId);
  const now = new Date().toISOString();
  const record = {
    id: existing?.id || recordId || createId(dataset.replace(/s$/, "")),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    images: (state.learningImageDraft?.images || existing?.images || []).map((image) => ({ ...image }))
  };

  schema.forEach((field) => {
    record[field.key] = field.type === "checkbox"
      ? document.getElementById(`learningField-${field.key}`).checked
      : String(formData.get(field.key) || "").trim();
  });

  const nextRecords = existing
    ? state.learning[dataset].map((item) => item.id === existing.id ? record : item)
    : [...state.learning[dataset], record];
  const nextLearning = { ...state.learning, [dataset]: nextRecords };

  const draft = state.learningImageDraft;
  const newImageRecords = draft
    ? [...draft.pendingBlobs.entries()].map(([id, blob]) => {
        const metadata = draft.images.find((image) => image.id === id);
        return { ...metadata, dataset, recordId: record.id, blob };
      })
    : [];

  try {
    if (newImageRecords.length) {
      if (!state.imageStorageAvailable) throw new Error("当前浏览器无法保存图片");
      await putImageRecords(newImageRecords);
    }
  } catch (error) {
    console.error("图片保存失败。", error);
    showLearningFormMessage("保存失败：图片无法写入本机，请检查浏览器存储空间。");
    return;
  }

  if (!persistLearningData(nextLearning)) {
    if (newImageRecords.length) await deleteImageRecords(newImageRecords.map((image) => image.id)).catch(() => {});
    showLearningFormMessage("保存失败：浏览器无法写入本机学习数据。");
    return;
  }
  state.learning = nextLearning;
  if (draft?.removedIds.size) await deleteImageRecords([...draft.removedIds]).catch((error) => console.warn("旧图片清理失败。", error));
  closeLearningModal();
  renderLearningCenter();
  await refreshImageStorageStats().catch(() => {});
  showToast(existing ? "学习记录已更新" : "学习记录已添加并保存到本机");
}

function validateLearningForm(schema) {
  let valid = true;
  hideLearningFormMessage();
  document.querySelectorAll("#learningFormFields .form-field").forEach((field) => {
    field.classList.remove("invalid");
    const error = field.querySelector(".field-error");
    if (error) error.textContent = "";
  });

  schema.forEach((field) => {
    if (field.type === "checkbox") return;
    const input = document.getElementById(`learningField-${field.key}`);
    if (field.required && !input.value.trim()) {
      setLearningFieldError(input, `请填写${field.label}`);
      valid = false;
    } else if (field.type === "url" && input.value.trim() && !isHttpUrl(input.value.trim())) {
      setLearningFieldError(input, "请输入以 http:// 或 https:// 开头的有效网址");
      valid = false;
    }
  });

  if (!valid) {
    showLearningFormMessage("请检查标红的表单内容后再保存。");
    document.querySelector("#learningFormFields .form-field.invalid input, #learningFormFields .form-field.invalid textarea, #learningFormFields .form-field.invalid select")?.focus();
  }
  return valid;
}

function setLearningFieldError(input, message) {
  const field = input.closest(".form-field");
  field.classList.add("invalid");
  field.querySelector(".field-error").textContent = message;
}

function showLearningFormMessage(message) {
  const element = document.getElementById("learningFormMessage");
  element.textContent = message;
  element.classList.add("show");
}

function hideLearningFormMessage() {
  const element = document.getElementById("learningFormMessage");
  element.textContent = "";
  element.classList.remove("show");
}

function openLearningDeleteModal(record, dataset) {
  state.pendingLearningDelete = { id: record.id, dataset };
  const title = getLearningCardView(dataset, record).title;
  document.getElementById("deleteLearningMessage").textContent = `即将删除“${title}”，此操作无法撤销。`;
  document.getElementById("deleteLearningModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("cancelDeleteLearning").focus(), 30);
}

function closeLearningDeleteModal() {
  state.pendingLearningDelete = null;
  document.getElementById("deleteLearningModal").hidden = true;
  syncModalBodyState();
}

async function deletePendingLearningRecord() {
  const pending = state.pendingLearningDelete;
  if (!pending) return closeLearningDeleteModal();
  const record = state.learning[pending.dataset]?.find((item) => item.id === pending.id);
  if (!record) return closeLearningDeleteModal();

  const nextLearning = {
    ...state.learning,
    [pending.dataset]: state.learning[pending.dataset].filter((item) => item.id !== pending.id)
  };
  if (!persistLearningData(nextLearning)) {
    showToast("删除失败：本机学习数据无法保存");
    return;
  }
  state.learning = nextLearning;
  if (record.images?.length) {
    await deleteImageRecords(record.images.map((image) => image.id)).catch((error) => console.warn("记录图片清理失败。", error));
    await refreshImageStorageStats().catch(() => {});
  }
  if (state.randomQuestionId === record.id) state.randomQuestionId = null;
  closeLearningDeleteModal();
  renderLearningCenter();
  showToast("学习记录已删除");
}

function syncModalBodyState() {
  const modalIds = [
    "companyModal",
    "deleteCompanyModal",
    "learningModal",
    "deleteLearningModal",
    "aptitudeDetailModal",
    "leetcodeDetailModal",
    "generalLearningDetailModal",
    "learningImageLightbox",
    "quickLinkModal",
    "websiteModal",
    "deleteWebsiteModal"
  ];
  const anyOpen = modalIds.some((id) => !document.getElementById(id).hidden);
  document.body.classList.toggle("modal-open", anyOpen);
}

function drawRandomQuestion() {
  const questions = state.learning.mockInterviews || [];
  if (!questions.length) {
    showToast("请先添加至少一道模拟面试题");
    return;
  }
  let candidates = questions;
  if (questions.length > 1 && state.randomQuestionId) {
    candidates = questions.filter((question) => question.id !== state.randomQuestionId);
  }
  state.randomQuestionId = candidates[Math.floor(Math.random() * candidates.length)].id;
  renderRandomQuestion();
}

function renderRandomQuestion() {
  const question = state.learning.mockInterviews.find((item) => item.id === state.randomQuestionId);
  if (!question) {
    document.getElementById("randomQuestionPanel").hidden = true;
    return;
  }
  document.getElementById("randomQuestionText").textContent = question.question;
  document.getElementById("randomAnswer").textContent = question.answer || "暂未填写回答。";
  document.getElementById("randomAnswer").hidden = true;
  document.getElementById("viewRandomAnswer").textContent = "查看回答";
  document.getElementById("randomQuestionPanel").hidden = false;
}

function toggleRandomAnswer() {
  const answer = document.getElementById("randomAnswer");
  if (document.getElementById("randomQuestionPanel").hidden) return;
  answer.hidden = !answer.hidden;
  document.getElementById("viewRandomAnswer").textContent = answer.hidden ? "查看回答" : "收起回答";
}

function renderWebsiteManagement() {
  const categories = uniqueValues(state.websites, "category");
  if (state.websiteCategory !== "全部" && !categories.includes(state.websiteCategory)) {
    state.websiteCategory = "全部";
  }

  document.getElementById("websiteTotalCount").textContent = state.websites.length;
  const categoryFilter = document.getElementById("websiteCategoryFilter");
  categoryFilter.innerHTML = `<option value="全部">全部分类</option>${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}`;
  categoryFilter.value = state.websiteCategory;

  document.getElementById("websiteCategoryChips").innerHTML = ["全部", ...categories].map((category) => {
    const count = category === "全部"
      ? state.websites.length
      : state.websites.filter((website) => website.category === category).length;
    return `<button class="website-category-chip ${state.websiteCategory === category ? "active" : ""}" type="button" data-website-category="${escapeHtml(category)}">${escapeHtml(category === "全部" ? "全部网站" : category)} <span>${count}</span></button>`;
  }).join("");

  renderWebsiteCards();
}

function renderWebsiteCards() {
  const query = state.websiteSearch.toLocaleLowerCase("zh-CN");
  const websites = [...state.websites]
    .filter((website) => state.websiteCategory === "全部" || website.category === state.websiteCategory)
    .filter((website) => {
      if (!query) return true;
      return [website.name, website.category, website.remark, website.url]
        .some((value) => String(value || "").toLocaleLowerCase("zh-CN").includes(query));
    })
    .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));

  document.getElementById("websiteResultCount").textContent = `共 ${websites.length} 个网站`;
  const container = document.getElementById("websiteList");
  if (!websites.length) {
    const message = state.websites.length ? "没有符合当前条件的网站" : "暂无招聘网站，点击“新增网站”开始添加";
    container.innerHTML = emptyState(message, "链");
    return;
  }

  const themes = [
    ["#2b67d9", "#e9f1ff"],
    ["#7a52c7", "#f1ebff"],
    ["#0d9463", "#e8f8f1"],
    ["#c57419", "#fff3e1"],
    ["#cc4f5e", "#fff0f2"]
  ];
  container.innerHTML = websites.map((website, index) => {
    const [color, background] = themes[index % themes.length];
    const safeId = escapeHtml(website.id || "");
    const hostname = getWebsiteHostname(website.url);
    return `
      <article class="website-card" style="--website-color:${color};--website-bg:${background}">
        <div class="website-card-top">
          <div class="website-identity">
            <span class="website-logo-letter" aria-hidden="true">${escapeHtml(getCompanyInitial(website.name))}</span>
            <div class="website-identity-copy">
              <strong title="${escapeHtml(website.name)}">${escapeHtml(website.name || "未命名网站")}</strong>
              <span title="${escapeHtml(website.url)}">${escapeHtml(hostname)}</span>
            </div>
          </div>
          <span class="website-card-category">${escapeHtml(website.category || "未分类")}</span>
        </div>
        <p class="website-card-remark">${escapeHtml(website.remark || "暂无备注，点击访问直接打开该招聘网站。")}</p>
        <div class="website-card-actions">
          <a class="website-visit-button" href="${escapeHtml(website.url)}" target="_blank" rel="noopener noreferrer">访问网站 <span aria-hidden="true">↗</span></a>
          <button class="website-action-button" type="button" data-website-action="edit" data-website-id="${safeId}" title="编辑网站" aria-label="编辑 ${escapeHtml(website.name)}">编</button>
          <button class="website-action-button delete" type="button" data-website-action="delete" data-website-id="${safeId}" title="删除网站" aria-label="删除 ${escapeHtml(website.name)}">删</button>
        </div>
      </article>`;
  }).join("");
}

function resetWebsiteFilters() {
  state.websiteSearch = "";
  state.websiteCategory = "全部";
  document.getElementById("websiteSearch").value = "";
  renderWebsiteManagement();
}

function handleWebsiteCardAction(event) {
  const button = event.target.closest("[data-website-action]");
  if (!button) return;
  const website = state.websites.find((item) => item.id === button.dataset.websiteId);
  if (!website) return;
  if (button.dataset.websiteAction === "edit") openWebsiteModal(website);
  if (button.dataset.websiteAction === "delete") openWebsiteDeleteModal(website);
}

function openWebsiteModal(website = null) {
  const form = document.getElementById("websiteForm");
  form.reset();
  clearWebsiteFormErrors();
  document.getElementById("websiteModalTitle").textContent = website ? "编辑网站" : "新增网站";
  document.getElementById("websiteId").value = website?.id || "";
  document.getElementById("websiteName").value = website?.name || "";
  document.getElementById("websiteCategory").value = website?.category || (state.websiteCategory === "全部" ? "" : state.websiteCategory);
  document.getElementById("websiteUrl").value = website?.url || "";
  document.getElementById("websiteRemark").value = website?.remark || "";
  document.getElementById("websiteModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("websiteName").focus(), 40);
}

function closeWebsiteModal() {
  document.getElementById("websiteModal").hidden = true;
  syncModalBodyState();
}

function handleWebsiteSubmit(event) {
  event.preventDefault();
  if (!validateWebsiteForm()) return;

  const formData = new FormData(event.currentTarget);
  const existingId = document.getElementById("websiteId").value;
  const existing = state.websites.find((website) => website.id === existingId);
  const now = new Date().toISOString();
  const website = {
    id: existing?.id || createId("website"),
    name: formData.get("name").trim(),
    category: formData.get("category").trim(),
    url: formData.get("url").trim(),
    remark: formData.get("remark").trim(),
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };
  const nextWebsites = existing
    ? state.websites.map((item) => item.id === existing.id ? website : item)
    : [...state.websites, website];

  if (!persistWebsites(nextWebsites)) {
    showWebsiteFormMessage("保存失败：浏览器无法写入本机网站数据。");
    return;
  }
  state.websites = nextWebsites;
  closeWebsiteModal();
  renderWebsiteManagement();
  showToast(existing ? "网站信息已更新" : "招聘网站已添加并保存到本机");
}

function validateWebsiteForm() {
  clearWebsiteFormErrors();
  let valid = true;
  const required = [
    ["websiteName", "请输入网站名称"],
    ["websiteCategory", "请输入网站分类"],
    ["websiteUrl", "请输入网站网址"]
  ];
  required.forEach(([id, message]) => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      setWebsiteFieldError(input, message);
      valid = false;
    }
  });
  const urlInput = document.getElementById("websiteUrl");
  if (urlInput.value.trim() && !isHttpUrl(urlInput.value.trim())) {
    setWebsiteFieldError(urlInput, "请输入以 http:// 或 https:// 开头的有效网址");
    valid = false;
  }
  if (!valid) {
    showWebsiteFormMessage("请检查标红的表单内容后再保存。");
    document.querySelector("#websiteForm .form-field.invalid input")?.focus();
  }
  return valid;
}

function setWebsiteFieldError(input, message) {
  const field = input.closest(".form-field");
  field.classList.add("invalid");
  field.querySelector(".field-error").textContent = message;
}

function clearWebsiteFormErrors() {
  document.querySelectorAll("#websiteForm .form-field").forEach((field) => {
    field.classList.remove("invalid");
    field.querySelector(".field-error").textContent = "";
  });
  hideWebsiteFormMessage();
}

function showWebsiteFormMessage(message) {
  const element = document.getElementById("websiteFormMessage");
  element.textContent = message;
  element.classList.add("show");
}

function hideWebsiteFormMessage() {
  const element = document.getElementById("websiteFormMessage");
  element.textContent = "";
  element.classList.remove("show");
}

function openWebsiteDeleteModal(website) {
  state.pendingWebsiteDeleteId = website.id;
  document.getElementById("deleteWebsiteMessage").textContent = `即将删除“${website.name}”快捷入口，此操作无法撤销。`;
  document.getElementById("deleteWebsiteModal").hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => document.getElementById("cancelDeleteWebsite").focus(), 30);
}

function closeWebsiteDeleteModal() {
  state.pendingWebsiteDeleteId = null;
  document.getElementById("deleteWebsiteModal").hidden = true;
  syncModalBodyState();
}

function deletePendingWebsite() {
  const website = state.websites.find((item) => item.id === state.pendingWebsiteDeleteId);
  if (!website) return closeWebsiteDeleteModal();
  const nextWebsites = state.websites.filter((item) => item.id !== website.id);
  if (!persistWebsites(nextWebsites)) {
    showToast("删除失败：本机网站数据无法保存");
    return;
  }
  state.websites = nextWebsites;
  closeWebsiteDeleteModal();
  renderWebsiteManagement();
  showToast(`已删除“${website.name}”`);
}

function getWebsiteHostname(urlText) {
  try {
    return new URL(urlText).hostname.replace(/^www\./, "");
  } catch {
    return urlText || "网址待补充";
  }
}

function applyInitialTheme() {
  const savedTheme = readLocalStorage("jobAssistant.theme");
  setTheme(savedTheme === "dark" ? "dark" : "light", false);
}

function setTheme(theme, savePreference = true) {
  const selectedTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selectedTheme;
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    const isDark = selectedTheme === "dark";
    toggle.textContent = isDark ? "日" : "夜";
    toggle.title = isDark ? "切换浅色模式" : "切换深色模式";
    toggle.setAttribute("aria-label", toggle.title);
  }

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === selectedTheme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", String(active));
  });

  if (savePreference) {
    try {
      window.localStorage.setItem("jobAssistant.theme", selectedTheme);
      showToast(selectedTheme === "dark" ? "已切换为深色模式" : "已切换为浅色模式");
    } catch (error) {
      console.warn("主题偏好无法保存。", error);
    }
  }
}

function renderSettings() {
  const learningCount = Object.keys(LEARNING_FIELD_SCHEMAS)
    .reduce((sum, key) => sum + (state.learning[key]?.length || 0), 0);
  document.getElementById("settingsCompanyCount").textContent = state.companies.length;
  document.getElementById("settingsLearningCount").textContent = learningCount;
  document.getElementById("settingsWebsiteCount").textContent = state.websites.length + state.quickLinks.length;
  document.getElementById("settingsStorageSize").textContent = formatBytes(getCurrentDataSize());
  document.getElementById("settingsImageCount").textContent = state.imageStorageStats.count;
  document.getElementById("settingsImageSize").textContent = state.imageStorageAvailable
    ? `图片占用 ${formatBytes(state.imageStorageStats.size)}`
    : "图片存储不可用";

  const currentTheme = document.documentElement.dataset.theme || "light";
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    const active = button.dataset.themeChoice === currentTheme;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", String(active));
  });
  renderFileSyncSettings();
}

function renderFileSyncSettings() {
  const sync = state.fileSync;
  const status = document.getElementById("fileSyncStatus");
  if (!status) return;
  const hasHandle = Boolean(sync.handle);
  const granted = sync.permission === "granted";
  let statusText = "尚未绑定备份文件";
  let statusClass = "unbound";
  if (!sync.supported) {
    statusText = "当前浏览器不支持文件同步";
    statusClass = "error";
  } else if (sync.syncing) {
    statusText = "正在同步完整数据…";
    statusClass = "syncing";
  } else if (sync.error) {
    statusText = hasHandle ? "文件同步需要处理" : "文件同步暂不可用";
    statusClass = "error";
  } else if (hasHandle && granted) {
    statusText = sync.autoEnabled ? "已绑定并开启自动同步" : "已绑定（尚未写入）";
    statusClass = "connected";
  } else if (hasHandle) {
    statusText = sync.autoEnabled ? "已绑定，自动同步等待授权" : "已绑定（尚未写入）";
    statusClass = sync.autoEnabled ? "warning" : "connected";
  }

  status.className = `file-sync-status ${statusClass}`;
  document.getElementById("fileSyncStatusText").textContent = statusText;
  document.getElementById("fileSyncFileName").textContent = hasHandle
    ? sync.fileName
    : "请选择一个本地 JSON 文件";
  document.getElementById("fileSyncLastTime").textContent = sync.lastSyncedAt
    ? formatFileSyncTime(sync.lastSyncedAt)
    : "尚未同步";

  const error = document.getElementById("fileSyncError");
  error.hidden = !sync.error;
  error.textContent = sync.error;

  const bindButton = document.getElementById("bindBackupFile");
  bindButton.disabled = !sync.supported || sync.syncing;
  bindButton.textContent = hasHandle ? "重新绑定文件" : "绑定本地备份文件";
  document.getElementById("syncBackupFile").disabled = !sync.supported || !hasHandle || sync.syncing;
  document.getElementById("unbindBackupFile").disabled = !hasHandle || sync.syncing;
  const toggle = document.getElementById("autoFileSyncToggle");
  toggle.disabled = !sync.supported || !hasHandle || sync.syncing;
  toggle.checked = Boolean(sync.autoEnabled && hasHandle);
  document.getElementById("fileSyncHelp").textContent = sync.supported
    ? "绑定只记录文件位置，不会读取或写入。恢复数据请使用下方“导入 JSON”；写入文件需点击“立即同步”并确认。"
    : "此功能需要最新版 Chrome 或 Edge；其他浏览器请继续使用“导出 JSON”。";
}

function formatFileSyncTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "时间未知";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function getCurrentDataSize() {
  const serialized = JSON.stringify({
    companies: state.companies,
    learning: state.learning,
    websites: state.websites,
    quickLinks: state.quickLinks
  });
  return new Blob([serialized]).size;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function exportAllData() {
  const button = document.getElementById("exportAllData");
  const originalText = button.textContent;
  const fileName = `JobAssistant-backup-${formatCompactTimestamp()}.json`;
  const supportsSavePicker = typeof window.showSaveFilePicker === "function" && window.isSecureContext !== false;
  let fileHandle = null;
  let writable = null;
  button.disabled = true;
  button.textContent = supportsSavePicker ? "请选择保存位置…" : "正在整理图片…";
  try {
    if (supportsSavePicker) {
      fileHandle = await window.showSaveFilePicker({
        id: "job-assistant-json-export",
        suggestedName: fileName,
        types: [{
          description: "求职工作台 JSON 备份",
          accept: { "application/json": [".json"] }
        }]
      });
      button.textContent = "正在整理图片…";
    }
    const payload = await createCompleteBackupPayload();
    const content = JSON.stringify(payload, null, 2);
    if (fileHandle) {
      writable = await fileHandle.createWritable();
      await writable.write(content);
      await writable.close();
      writable = null;
      showToast(`全部数据与 ${state.imageStorageStats.count} 张图片已保存到 ${fileHandle.name}`);
    } else {
      const blob = new Blob([content], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 500);
      showToast(`全部数据与 ${state.imageStorageStats.count} 张图片已导出到浏览器下载目录`);
    }
  } catch (error) {
    if (writable?.abort) await writable.abort().catch(() => {});
    if (error?.name === "AbortError") return;
    console.error("完整备份导出失败。", error);
    showToast(`导出失败：${error.message || "图片读取异常"}`);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

async function createCompleteBackupPayload() {
  return {
    app: "JobAssistant",
    version: "1.3.0",
    exportedAt: new Date().toISOString(),
    companies: state.companies,
    learning: await buildExportLearningData(),
    websites: state.websites,
    quickLinks: state.quickLinks
  };
}

async function buildExportLearningData() {
  const exported = {};
  for (const [dataset, records] of Object.entries(state.learning)) {
    exported[dataset] = [];
    for (const record of records || []) {
      const images = [];
      for (const metadata of record.images || []) {
        const stored = await getStoredImage(metadata.id);
        if (!stored?.blob) throw new Error(`“${metadata.name}”的图片内容无法读取，未生成不完整备份`);
        images.push({ ...metadata, dataUrl: await blobToDataUrl(stored.blob) });
      }
      exported[dataset].push({ ...record, images });
    }
  }
  return exported;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error || new Error("图片编码失败"));
    reader.readAsDataURL(blob);
  });
}

async function processImportFile(file) {
  clearImportMessage();
  if (!file.name.toLocaleLowerCase().endsWith(".json")) {
    showImportMessage("请选择扩展名为 .json 的数据文件。");
    return;
  }
  if (file.size > 100 * 1024 * 1024) {
    showImportMessage("文件超过 100 MB，请减少图片数量或分批整理后再导入。");
    return;
  }

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    state.pendingImportData = prepareImportData(parsed);
    state.pendingImportFileName = file.name;
    renderImportPreview();
  } catch (error) {
    state.pendingImportData = null;
    document.getElementById("importPreview").hidden = true;
    showImportMessage(error instanceof SyntaxError
      ? "JSON 文件格式错误，无法解析。"
      : `无法导入：${error.message || "文件内容不符合要求"}`);
  }
}

function prepareImportData(data) {
  const prepared = { companies: null, learning: null, websites: null, quickLinks: null, imageRecords: [] };
  if (Array.isArray(data)) {
    if (!data.length) throw new Error("空数组无法判断数据类型");
    if (data.some((item) => item && Object.prototype.hasOwnProperty.call(item, "company"))) {
      prepared.companies = normalizeImportedCompanies(data);
    } else if (data.some((item) => item && Object.prototype.hasOwnProperty.call(item, "url") && Object.prototype.hasOwnProperty.call(item, "name"))) {
      prepared.websites = normalizeImportedWebsites(data);
    } else {
      throw new Error("无法识别该数组属于企业数据还是网站数据");
    }
    return prepared;
  }

  if (!data || typeof data !== "object") throw new Error("JSON 顶层必须是对象或数组");
  const learningKeys = Object.keys(LEARNING_FIELD_SCHEMAS);
  const isFullBackup = ["companies", "learning", "websites", "quickLinks"].some((key) => Object.prototype.hasOwnProperty.call(data, key));

  if (isFullBackup) {
    if (Object.prototype.hasOwnProperty.call(data, "companies")) prepared.companies = normalizeImportedCompanies(data.companies);
    if (Object.prototype.hasOwnProperty.call(data, "learning")) prepared.learning = normalizeImportedLearning(data.learning, prepared.imageRecords);
    if (Object.prototype.hasOwnProperty.call(data, "websites")) prepared.websites = normalizeImportedWebsites(data.websites);
    if (Object.prototype.hasOwnProperty.call(data, "quickLinks")) prepared.quickLinks = normalizeImportedQuickLinks(data.quickLinks);
  } else if (learningKeys.some((key) => Object.prototype.hasOwnProperty.call(data, key))) {
    prepared.learning = normalizeImportedLearning(data, prepared.imageRecords);
  } else {
    throw new Error("未找到企业、学习资料、招聘网站或常用链接数据");
  }
  return prepared;
}

function normalizeImportedCompanies(records) {
  if (!Array.isArray(records)) throw new Error("companies 必须是数组");
  const validBatches = new Set(["提前批", "正式批", "补录", "其他"]);
  const validStatuses = new Set(["未关注", "待投递", "已投递", "笔试", "一面", "二面", "终面", "Offer", "未通过"]);
  return records.map((record, index) => {
    if (!record || typeof record !== "object" || !String(record.company || "").trim()) {
      throw new Error(`第 ${index + 1} 条企业记录缺少企业名称`);
    }
    const category = resolveCompanyCategory(record);
    if (!COMPANY_CATEGORIES.has(category)) throw new Error(`“${record.company}”的企业分类无效`);
    const now = new Date().toISOString();
    return {
      id: String(record.id || createId("company")),
      company: String(record.company).trim(),
      category,
      companyUrl: String(record.companyUrl || "").trim(),
      recruitmentUrl: String(record.recruitmentUrl || "").trim(),
      location: String(record.location || "").trim(),
      companyRemark: String(record.companyRemark || "").trim(),
      position: String(record.position || "").trim(),
      direction: String(record.direction || "").trim(),
      batch: validBatches.has(record.batch) ? record.batch : "其他",
      status: validStatuses.has(record.status) ? record.status : "未关注",
      applyDate: String(record.applyDate || "").trim(),
      deadline: String(record.deadline || "").trim(),
      positionUrl: String(record.positionUrl || record.url || "").trim(),
      remark: String(record.remark || "").trim(),
      createdAt: record.createdAt || now,
      updatedAt: record.updatedAt || now
    };
  });
}

function normalizeImportedLearning(data, imageRecords = []) {
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("learning 必须是对象");
  const normalized = {};
  Object.entries(LEARNING_FIELD_SCHEMAS).forEach(([key, schema]) => {
    if (!Object.prototype.hasOwnProperty.call(data, key)) return;
    if (!Array.isArray(data[key])) throw new Error(`${key} 必须是数组`);
    normalized[key] = data[key].map((record, index) => {
      if (!record || typeof record !== "object") throw new Error(`${key} 第 ${index + 1} 条记录无效`);
      const now = new Date().toISOString();
      const result = {
        id: String(record.id || createId(key.replace(/s$/, ""))),
        createdAt: record.createdAt || now,
        updatedAt: record.updatedAt || now
      };
      const sourceRecord = key === "projects"
        ? normalizeProjectRecord(record)
        : key === "leetcode"
          ? normalizeLeetcodeRecord(record)
          : key === "mockInterviews"
            ? normalizeMockInterviewRecord(record)
            : record;
      schema.forEach((field) => {
        result[field.key] = field.type === "checkbox"
          ? Boolean(sourceRecord[field.key])
          : String(sourceRecord[field.key] || "").trim();
      });
      result.images = normalizeImportedImages(record.images, key, result.id, index, imageRecords);
      const missingRequired = schema.find((field) => {
        const isCompatibleLegacyField = key === "leetcode" && field.key === "problemDetail";
        return field.required && !isCompatibleLegacyField && !String(result[field.key] || "").trim();
      });
      if (missingRequired) throw new Error(`${key} 第 ${index + 1} 条记录缺少“${missingRequired.label}”`);
      if (key === "leetcode" && result.link && !isHttpUrl(result.link)) throw new Error(`LeetCode 第 ${index + 1} 条记录网址无效`);
      return result;
    });
  });
  if (!Object.keys(normalized).length) throw new Error("learning 中没有可识别的学习模块");
  return normalized;
}

function normalizeImportedImages(images, dataset, recordId, recordIndex, imageRecords) {
  if (images === undefined) return null;
  if (!Array.isArray(images)) throw new Error(`${dataset} 第 ${recordIndex + 1} 条记录的 images 必须是数组`);
  if (images.length > MAX_IMAGES_PER_RECORD) throw new Error(`${dataset} 第 ${recordIndex + 1} 条记录超过 ${MAX_IMAGES_PER_RECORD} 张图片`);
  return images.map((image, imageIndex) => {
    if (!image || typeof image !== "object") throw new Error(`${dataset} 第 ${recordIndex + 1} 条记录的第 ${imageIndex + 1} 张图片无效`);
    const id = String(image.id || "").trim();
    if (!id) throw new Error(`${dataset} 第 ${recordIndex + 1} 条记录的第 ${imageIndex + 1} 张图片缺少 ID`);
    if (imageRecords.some((item) => item.id === id)) throw new Error(`图片 ID “${id}”重复`);
    const blob = dataUrlToImageBlob(image.dataUrl);
    if (blob.size > MAX_IMAGE_SOURCE_SIZE) throw new Error(`图片“${image.name || id}”超过 10 MB`);
    const metadata = normalizeImageMetadata({
      ...image,
      id,
      type: blob.type,
      size: blob.size
    });
    imageRecords.push({ ...metadata, dataset, recordId, blob });
    return metadata;
  });
}

function dataUrlToImageBlob(dataUrl) {
  if (typeof dataUrl !== "string" || !dataUrl.trim()) throw new Error("图片数据缺失，无法恢复不完整备份");
  const match = dataUrl.match(/^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/=\s]+)$/);
  if (!match || !ALLOWED_IMAGE_TYPES.has(match[1])) throw new Error("图片数据格式无效，仅支持 PNG、JPEG 和 WebP");
  try {
    const binary = window.atob(match[2].replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return new Blob([bytes], { type: match[1] });
  } catch (error) {
    throw new Error("图片 Base64 数据损坏");
  }
}

function normalizeImportedWebsites(records) {
  if (!Array.isArray(records)) throw new Error("websites 必须是数组");
  return records.map((record, index) => {
    if (!record || typeof record !== "object" || !String(record.name || "").trim()) {
      throw new Error(`第 ${index + 1} 条网站记录缺少名称`);
    }
    if (!String(record.category || "").trim()) throw new Error(`“${record.name}”缺少网站分类`);
    if (!isHttpUrl(record.url)) throw new Error(`“${record.name}”的网址无效`);
    const now = new Date().toISOString();
    return {
      id: String(record.id || createId("website")),
      name: String(record.name).trim(),
      category: String(record.category).trim(),
      url: String(record.url).trim(),
      remark: String(record.remark || "").trim(),
      createdAt: record.createdAt || now,
      updatedAt: record.updatedAt || now
    };
  });
}

function normalizeImportedQuickLinks(records) {
  if (!Array.isArray(records)) throw new Error("quickLinks 必须是数组");
  return records.map((record, index) => {
    if (!record || typeof record !== "object" || !String(record.name || "").trim()) {
      throw new Error(`第 ${index + 1} 条常用链接缺少名称`);
    }
    if (!String(record.category || "").trim()) throw new Error(`“${record.name}”缺少链接分类`);
    if (!isHttpUrl(record.url)) throw new Error(`“${record.name}”的网址无效`);
    const now = new Date().toISOString();
    return {
      id: String(record.id || createId("quick-link")),
      name: String(record.name).trim(),
      category: String(record.category).trim(),
      url: String(record.url).trim(),
      remark: String(record.remark || "").trim(),
      createdAt: record.createdAt || now,
      updatedAt: record.updatedAt || now
    };
  });
}

function renderImportPreview() {
  const data = state.pendingImportData;
  if (!data) return;
  const parts = [];
  if (data.companies) parts.push(`${data.companies.length} 家企业`);
  if (data.learning) {
    const count = Object.values(data.learning).reduce((sum, records) => sum + records.length, 0);
    parts.push(`${count} 条学习记录`);
  }
  if (data.imageRecords?.length) parts.push(`${data.imageRecords.length} 张图片`);
  if (data.websites) parts.push(`${data.websites.length} 个网站`);
  if (data.quickLinks) parts.push(`${data.quickLinks.length} 个常用链接`);
  document.getElementById("importFileName").textContent = state.pendingImportFileName;
  document.getElementById("importFileSummary").textContent = parts.join(" · ") || "没有可导入的数据";
  document.getElementById("importPreview").hidden = false;
  document.getElementById("importDropzone").hidden = true;
  document.getElementById("importStrategy").value = "merge";
  updateImportWarning();
}

function clearPendingImport() {
  state.pendingImportData = null;
  state.pendingImportFileName = "";
  document.getElementById("importDataFile").value = "";
  document.getElementById("importPreview").hidden = true;
  document.getElementById("importDropzone").hidden = false;
  clearImportMessage();
}

function updateImportWarning() {
  const replace = document.getElementById("importStrategy").value === "replace";
  document.getElementById("importWarning").textContent = replace
    ? "覆盖会清除对应类别的现有记录，请确认已提前备份。"
    : "合并时，相同 ID 的记录将以导入文件为准。";
}

async function confirmImportData() {
  const imported = state.pendingImportData;
  if (!imported) {
    showImportMessage("请先选择一个有效的 JSON 文件。");
    return;
  }
  const merge = document.getElementById("importStrategy").value === "merge";
  const next = {
    companies: imported.companies
      ? (merge ? mergeRecordsById(state.companies, imported.companies) : imported.companies)
      : state.companies,
    learning: { ...state.learning },
    websites: imported.websites
      ? (merge ? mergeRecordsById(state.websites, imported.websites) : imported.websites)
      : state.websites,
    quickLinks: imported.quickLinks
      ? (merge ? mergeRecordsById(state.quickLinks, imported.quickLinks) : imported.quickLinks)
      : state.quickLinks
  };

  if (imported.learning) {
    Object.entries(imported.learning).forEach(([key, records]) => {
      next.learning[key] = merge
        ? mergeLearningRecordsById(state.learning[key] || [], records)
        : normalizeImportedLearningImages(records);
    });
  }

  const button = document.getElementById("confirmImportData");
  const originalText = button.textContent;
  const importedImages = imported.imageRecords || [];
  let previousImages = [];
  button.disabled = true;
  button.textContent = "正在恢复数据…";

  try {
    if (importedImages.length) {
      if (!state.imageStorageAvailable) throw new Error("当前浏览器无法使用本机图片库");
      previousImages = await Promise.all(importedImages.map((image) => getStoredImage(image.id)));
      importedImages.forEach((image, index) => {
        const previous = previousImages[index];
        if (previous && (previous.dataset !== image.dataset || previous.recordId !== image.recordId)) {
          throw new Error(`图片 ID “${image.id}”与现有记录冲突`);
        }
      });
      await putImageRecords(importedImages);
    }

    if (!persistImportedBundle(next, imported)) {
      if (importedImages.length) await restoreImportedImages(importedImages, previousImages);
      throw new Error("浏览器无法保存这些数据，请检查本机存储设置");
    }

    state.companies = next.companies;
    state.learning = normalizeLearningData(next.learning);
    state.websites = next.websites;
    state.quickLinks = next.quickLinks;
    await cleanupOrphanImages().catch((error) => console.warn("导入后的无主图片清理失败。", error));
    await refreshImageStorageStats().catch((error) => console.warn("图片占用统计刷新失败。", error));
    resetCompanyFilters();
    resetLearningFilterState();
    resetWebsiteFilters();
    refreshAllViews();
    clearPendingImport();
    showToast(importedImages.length ? `JSON 数据及 ${importedImages.length} 张图片导入成功` : "JSON 数据导入成功");
  } catch (error) {
    console.error("导入失败。", error);
    showImportMessage(`导入失败：${error.message || "本机存储异常"}`);
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

async function restoreImportedImages(importedImages, previousImages) {
  const existing = previousImages.filter(Boolean);
  const newIds = importedImages
    .filter((image, index) => !previousImages[index])
    .map((image) => image.id);
  if (existing.length) await putImageRecords(existing);
  if (newIds.length) await deleteImageRecords(newIds);
}

function mergeRecordsById(existing, imported) {
  const records = new Map(existing.map((record) => [record.id, record]));
  imported.forEach((record) => records.set(record.id, record));
  return [...records.values()];
}

function mergeLearningRecordsById(existing, imported) {
  const records = new Map(existing.map((record) => [record.id, record]));
  imported.forEach((record) => {
    const previous = records.get(record.id);
    const images = record.images === null
      ? (Array.isArray(previous?.images) ? previous.images : [])
      : record.images;
    records.set(record.id, { ...record, images: Array.isArray(images) ? images : [] });
  });
  return [...records.values()];
}

function normalizeImportedLearningImages(records) {
  return records.map((record) => ({
    ...record,
    images: Array.isArray(record.images) ? record.images : []
  }));
}

function persistImportedBundle(next, imported) {
  const targets = [];
  if (imported.companies) targets.push(["jobAssistant.companies", JSON.stringify(next.companies)]);
  if (imported.learning) targets.push(["jobAssistant.learning", JSON.stringify(next.learning)]);
  if (imported.websites) targets.push(["jobAssistant.websites", JSON.stringify(next.websites)]);
  if (imported.quickLinks) targets.push(["jobAssistant.quickLinks", JSON.stringify(next.quickLinks)]);
  const previous = new Map();
  try {
    targets.forEach(([key, value]) => {
      previous.set(key, window.localStorage.getItem(key));
      window.localStorage.setItem(key, value);
    });
    scheduleAutoFileSync();
    return true;
  } catch (error) {
    console.error("批量导入保存失败。", error);
    previous.forEach((value, key) => {
      try {
        if (value === null) window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, value);
      } catch {
        // 回滚失败时保留浏览器当前状态，避免再次中断用户操作。
      }
    });
    return false;
  }
}

function refreshAllViews() {
  renderDashboard();
  renderCompanyManagement();
  renderLearningCenter();
  renderWebsiteManagement();
  renderSettings();
}

function showImportMessage(message) {
  const element = document.getElementById("importMessage");
  element.textContent = message;
  element.classList.add("show");
}

function clearImportMessage() {
  const element = document.getElementById("importMessage");
  element.textContent = "";
  element.classList.remove("show");
}

function animateNumber(elementId, target) {
  const element = document.getElementById(elementId);
  const duration = 360;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function renderRecentCompanies(companies) {
  const container = document.getElementById("recentCompanies");
  const recent = [...companies]
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, 4);

  if (!recent.length) {
    container.innerHTML = emptyState("暂无企业记录", "企");
    return;
  }

  const avatarThemes = [
    ["#2b67d9", "#e9f1ff"],
    ["#7a52c7", "#f1ebff"],
    ["#0d9463", "#e8f8f1"],
    ["#c57419", "#fff3e1"]
  ];

  container.innerHTML = recent.map((item, index) => {
    const [color, background] = avatarThemes[index % avatarThemes.length];
    return `
      <article class="recent-row">
        <span class="company-avatar" style="--avatar-color:${color};--avatar-bg:${background}">${escapeHtml(getCompanyInitial(item.company))}</span>
        <strong class="company-name" title="${escapeHtml(item.company)}">${escapeHtml(item.company || "未命名企业")}</strong>
        <span class="company-position" title="${escapeHtml(item.position)}">${escapeHtml(item.position || "岗位待定")}</span>
        <span class="company-location">${escapeHtml(item.location || "地点待定")}</span>
        <span class="status-pill ${getStatusClass(item.status)}">${escapeHtml(item.status || "未关注")}</span>
      </article>`;
  }).join("");
}

function renderTodos(companies) {
  const container = document.getElementById("todoList");
  const todos = createTodos(companies).slice(0, 4);
  document.getElementById("todoCount").textContent = `${todos.length} 项`;

  if (!todos.length) {
    container.innerHTML = emptyState("近期没有待处理事项", "✓");
    return;
  }

  container.innerHTML = todos.map((todo) => `
    <article class="todo-item">
      <span class="todo-icon" style="--todo-color:${todo.color};--todo-bg:${todo.background}">${todo.icon}</span>
      <div class="todo-copy">
        <strong>${escapeHtml(todo.title)}</strong>
        <span>${escapeHtml(todo.description)}</span>
      </div>
      <time class="todo-date">${escapeHtml(todo.dateText)}</time>
    </article>`).join("");
}

function createTodos(companies) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const todos = [];

  companies.forEach((item) => {
    const deadline = parseLocalDate(item.deadline);
    if (deadline && item.status !== "Offer" && item.status !== "未通过") {
      const days = Math.ceil((deadline - now) / 86400000);
      if (days >= 0 && days <= 30) {
        todos.push({
          priority: days,
          icon: "期",
          color: days <= 7 ? "#d84e5b" : "#d2831e",
          background: days <= 7 ? "#fff0f1" : "#fff5e8",
          title: `${item.company} 即将截止`,
          description: `${item.position || "目标岗位"} · ${item.batch || "招聘批次待定"}`,
          dateText: days === 0 ? "今天" : `${days} 天后`
        });
      }
    }

    if (item.status === "待投递") {
      todos.push({
        priority: 0.5,
        icon: "投",
        color: "#3270de",
        background: "#eaf1ff",
        title: `${item.company} 待投递`,
        description: `${item.position || "岗位待定"} · 请检查简历与岗位要求`,
        dateText: "尽快"
      });
    }

    if (INTERVIEW_STATUSES.has(item.status)) {
      todos.push({
        priority: 1,
        icon: "备",
        color: "#7552ca",
        background: "#f1ecff",
        title: `${item.company} ${item.status}准备`,
        description: item.remark || `${item.position || "目标岗位"}需要复习准备`,
        dateText: "进行中"
      });
    }
  });

  return todos.sort((a, b) => a.priority - b.priority);
}

function parseLocalDate(dateText) {
  if (!dateText) return null;
  const parts = dateText.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function getCompanyInitial(name = "") {
  const cleanName = name.trim();
  return cleanName ? cleanName.charAt(0) : "企";
}

function getStatusClass(status) {
  if (status === "已投递") return "status-applied";
  if (status === "待投递") return "status-pending";
  if (INTERVIEW_STATUSES.has(status)) return "status-interview";
  if (status === "Offer") return "status-offer";
  return "status-default";
}

function setTodayText() {
  const formatted = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date());
  document.getElementById("todayText").textContent = formatted;
}

function emptyState(message, icon) {
  return `<div class="empty-state"><span aria-hidden="true">${icon}</span><p>${escapeHtml(message)}</p></div>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);
}

# TCM Learner — Next.js + Sanity + 双语起步项目

主色：松石绿（emerald）。已包含：Next.js 14（App Router）、Tailwind、Sanity（schemas）、中英文路由、sitemap/robots 配置。

## 使用步骤（10~15 分钟）

### 1) 安装依赖
```bash
pnpm i   # 或 npm i / yarn
```

### 2) 初始化 Sanity（免费层）
```bash
# 全局安装 sanity CLI（一次）
npm i -g sanity@latest

# 登录并创建项目（选择免费层）
sanity login

# 在本项目根目录，链接或创建项目：
sanity init --project tcm-learner --dataset production --template clean

# 记下 projectId，把它填进 sanity.config.ts 的 projectId 字段
# 启动后台（Sanity Studio）
sanity start
```

### 3) 开发与预览
```bash
pnpm dev   # http://localhost:3000
```

### 4) 生成 sitemap / robots（可选）
```bash
pnpm sitemap
```

### 5) 部署 Vercel
- 用 Git 推到你的仓库（建议：Yulin-Dong666/tcm-learner）
- Vercel 导入该仓库 → 环境变量：`NEXT_PUBLIC_SANITY_PROJECT_ID`，并把 `sanity.config.ts` 的 projectId 改成同值
- 绑定临时域：tcm-learner.vercel.app（可后续更换正式域）

## 内容模型（schemas）
- post：文章（title_zh / title_en / excerpt_zh / excerpt_en / content_zh / content_en / module / cover / seo）
- page：页面（双语）
- glossaryEntry：术语双语
- meridian：经络信息
- acupoint：穴位信息（含配伍/禁忌）

## TODO（后续我来补）
- 接入 next-sanity 实时数据渲染（现在是静态示例）
- 添加 shadcn/ui 组件库与主题层
- 交互式经络 SVG → 数据驱动

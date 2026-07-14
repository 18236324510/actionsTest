# 战团同伴指南

面向《骑马与砍杀：战团》新手的**玩法蓝图**工具：选择打仗 / 带队 / 跑商 / 混搭后，查看招谁、冲突注意、加点与推荐配装。

推荐内容属**意见型稳妥路线**，以原版卡拉迪亚为准。

## 本地运行

```bash
npm install
npm run dev
```

其它常用命令：

```bash
npm test      # 跑测试
npm run build # 生产构建
```

## 如何改内容

- 同伴库：`src/data/companions.ts`（含 likes / dislikes）
- 玩法蓝图：`src/data/blueprints.ts`（推荐名单、加点、配装）
- 类型定义：`src/data/types.ts`

每条内容带 `source: 'native'`，便于日后扩展 Mod 数据集（v1 不做切换 UI）。

改完后请跑 `npm test`，完整性测试会检查引用与蓝图内部冲突。

## 需求与计划

见 `docs/plans/2026-07-14-001-feat-warband-companion-guide-plan.md`。

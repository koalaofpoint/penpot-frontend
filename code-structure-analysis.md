# Penpot 前端项目代码结构分析

## 项目概述

Penpot 是一个开源的设计协作工具，前端项目采用 ClojureScript 作为主要开发语言，结合 React 19.2.3 和现代前端技术栈。
本次分析旨在全面理解项目的代码结构、架构模式和最佳实践。

### 技术栈
- **主要语言**: ClojureScript (编译为 JavaScript)
- **UI 框架**: React 19.2.3 (使用 Rumext 作为 React 封装)
- **构建工具**: Shadow-CLJS (ClojureScript 构建工具)
- **样式**: SCSS/Sass
- **测试**: Vitest + Playwright
- **包管理**: pnpm (workspace)
- **组件文档**: Storybook

### 项目结构
```
frontend/
├── src/                    # 主要源代码
├── resources/              # 静态资源
├── packages/              # 共享包
├── scripts/               # 构建和开发脚本
├── text-editor/           # 文本编辑器子项目
├── test/                  # 测试文件
├── translations/          # 国际化翻译文件
├── .storybook/           # Storybook 配置
└── playwright/           # E2E 测试配置
```

## 核心源代码结构

### src/app/main/ 目录结构
```
src/app/main/
├── main.cljs        # 应用入口文件
├── data/           # 数据层 (状态管理、事件处理)
│   ├── dashboard/  # 仪表板相关数据
│   ├── workspace/  # 工作区相关数据
│   ├── auth/       # 认证相关数据
│   └── viewer/     # 查看器相关数据
├── features/       # 功能模块
└── ui/             # UI 组件
    ├── auth/       # 认证页面
    ├── dashboard/  # 仪表板界面
    ├── workspace/  # 工作区界面
    ├── viewer/     # 查看器界面
    ├── ds/         # 设计系统组件
    │   ├── buttons/
    │   ├── controls/
    │   ├── foundations/  # 基础样式和设计令牌
    │   ├── layers/       # 图层组件
    │   ├── layout/       # 布局组件
    │   └── notifications/
    ├── shapes/     # 形状组件
    │   ├── frame/
    │   ├── path/
    │   └── text/
    └── tokens/     # 设计令牌管理
```

## ClojureScript 与 React 集成

### Rumext 框架使用
- 使用 `mf/defc` 定义函数组件
- 支持 React Hooks：`mf/use-state`, `mf/use-effect`, `mf/use-memo`, `mf/use-fn`, `mf/use-ref`
- 组件采用函数式编程范式

### 组件定义模式
```clojure
(ns app.main.ui.components.button-link
  (:require-macros [app.main.style :as stl])
  (:require
   [app.common.data.macros :as dm]
   [app.util.keyboard :as kbd]
   [rumext.v2 :as mf]))

(mf/defc button-link
  {::mf/wrap-props false}  ; 优化性能，避免不必要的属性包装
  [{:keys [on-click icon label class]}]  ; 属性定义
  (let [on-key-down (mf/use-fn  ; memoized 事件处理函数
                     (mf/deps on-click)
                     (fn [event]
                       (when (kbd/enter? event)
                         (when (fn? on-click)
                           (on-click event))))]
    [:a
     {:class (dm/str class " " (stl/css :button))  ; CSS 模块化
      :tab-index "0"
      :on-click on-click
      :on-key-down on-key-down}
     [:span.logo icon]
     label]))
```

## 设计系统实现

### 设计令牌系统
- 基础令牌定义在 `foundations/` 目录
- 支持主题切换和样式一致性
- 使用 CSS 宏系统实现样式模块化

### 样式系统
- 使用 `stl/css` 宏生成 CSS 类名
- 支持 CSS Modules 和传统 CSS
- SCSS 模块化组织样式

## 状态管理

### Potok 事件系统
- 基于事件驱动的状态管理
- 与 React 18 并发特性深度集成
- 支持异步状态处理

### 全局状态访问
- 使用 `mf/deref` 访问全局状态
- 自定义 Hooks 如 `use-rxsub` 处理响应式数据

## 构建配置

### Shadow-CLJS 配置
- 多个构建目标：main, worker, storybook, test
- 模块化构建，支持代码分割
- 优化选项：高级优化、源码映射、伪命名

### 脚本配置
- 开发模式：`watch` 监听模式
- 构建流程：`build:app`, `build:wasm`, `build:storybook`
- 测试：`test`, `test:e2e`, `watch:test`

## 代码组织模式

### 模块化设计
- 按功能模块组织代码
- 共享代码抽取到独立目录
- 组件库独立管理

### 最佳实践
- 组件无状态设计
- 事件处理函数 memoization
- CSS 模块化
- 无障碍性支持

## 验证计划

### 测试策略
- 单元测试：`cljs.test` 框架
- E2E 测试：Playwright
- 组件测试：Storybook

### 验证步骤
1. 确认组件渲染和交互正常
2. 验证状态管理流程
3. 检查样式应用和响应式
4. 测试无障碍性功能
5. 验证构建和部署流程

## 关键文件位置
- 入口文件：`src/app/main.cljs`
- 按钮组件：`src/app/main/ui/components/button_link.cljs`
- 构建配置：`shadow-cljs.edn`
- 依赖管理：`package.json`
- 设计系统：`src/app/main/ui/ds/`

## 结论
Penpot 前端项目采用现代化、模块化的架构设计，结合 ClojureScript 的函数式编程特性和 React 的声明式 UI 模式，通过精心设计的令牌系统和模块化样式架构，实现了高度一致和可维护的 UI 组件库。项目结构清晰，遵循最佳实践，适合大型复杂应用的开发和维护。
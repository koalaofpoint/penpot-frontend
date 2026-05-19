# Penpot 前端页面与后端接口对照表

## 概览

| 页面分类 | 页面数量 | API 接口数量 |
|---------|---------|-------------|
| Auth (认证) | 6 | ~24 |
| Dashboard (仪表盘) | 13 | ~47 |
| Settings (设置) | 7 | ~37 |
| Workspace (工作区) | 2 | ~143 |
| Viewer (查看器) | 2 | ~14 |
| Onboarding (入门) | 3 | ~6 |
| 特殊页面 | 4 | 0 |
| **总计** | **37+** | **~200+** |

---

## 1. Auth 页面 (`/auth/*`)

认证页面用于用户登录、注册、密码恢复等身份验证功能。

### 1.1 登录页面 (`/auth/login`)

| API 接口 | 功能描述 |
|----------|----------|
| `login-with-password` | 邮箱密码登录 |
| `login-with-ldap` | LDAP 登录 |
| `login-with-oidc` | SSO/OIDC 单点登录 |
| `get-profile` | 获取用户资料 |
| `get-sso-provider` | 获取 SSO 提供商信息 |

### 1.2 注册页面 (`/auth/register`)

| API 接口 | 功能描述 |
|----------|----------|
| `register-profile` | 注册新用户 |
| `prepare-register-profile` | 预验证注册信息 |

### 1.3 注册验证页面 (`/auth/register/validate`)

| API 接口 | 功能描述 |
|----------|----------|
| `verify-token` | 验证注册令牌 |
| `get-profile` | 获取用户资料 |

### 1.4 注册成功页面 (`/auth/register/success`)

无接口调用

### 1.5 找回密码请求页面 (`/auth/recovery/request`)

| API 接口 | 功能描述 |
|----------|----------|
| `request-profile-recovery` | 请求密码恢复邮件 |

### 1.6 密码恢复页面 (`/auth/recovery`)

| API 接口 | 功能描述 |
|----------|----------|
| `recover-profile` | 使用恢复令牌重置密码 |

### 1.7 令牌验证页面 (`/auth/verify-token`)

| API 接口 | 功能描述 |
|----------|----------|
| `verify-token` | 验证各类令牌 |

### Auth 共享接口

| 接口 | 功能描述 |
|------|----------|
| `logout` | 用户登出 |
| `create-demo-profile` | 创建演示账户 |

---

## 2. Dashboard 页面 (`/dashboard/*`)

仪表盘页面用于项目管理、文件浏览、团队管理等。

### 2.1 最近访问页面 (`/dashboard/recent`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-projects` | 获取项目列表 |
| `get-team-recent-files` | 获取团队最近文件 |
| `get-teams` | 获取团队列表 |
| `get-project-files` | 获取项目文件列表 |

### 2.2 文件管理页面 (`/dashboard/files`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-projects` | 获取项目列表 |
| `get-project-files` | 获取项目文件列表 |
| `create-file` | 创建新文件 |
| `duplicate-file` | 复制文件 |
| `move-files` | 移动文件 |
| `delete-file` | 删除文件 |
| `rename-file` | 重命名文件 |
| `set-file-shared` | 设置文件共享状态 |
| `get-file-summary` | 获取文件摘要 |

### 2.3 搜索页面 (`/dashboard/search`)

| API 接口 | 功能描述 |
|----------|----------|
| `search-files` | 搜索文件 |
| `get-teams` | 获取团队列表 |

### 2.4 字体管理页面 (`/dashboard/fonts`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-font-variants` | 获取字体变体 |
| `create-font-variant` | 创建字体变体 |
| `update-font` | 更新字体 |
| `delete-font` | 删除字体 |
| `delete-font-variant` | 删除字体变体 |
| `get-teams` | 获取团队列表 |

### 2.5 字体提供商页面 (`/dashboard/fonts/providers`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-font-variants` | 获取字体变体 |
| `get-teams` | 获取团队列表 |

### 2.6 组件库页面 (`/dashboard/libraries`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-team-shared-files` | 获取团队共享文件 |
| `get-teams` | 获取团队列表 |

### 2.7 团队成员页面 (`/dashboard/members`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-team-members` | 获取团队成员 |
| `update-team-member-role` | 更新成员角色 |
| `delete-team-member` | 删除团队成员 |
| `get-teams` | 获取团队列表 |

### 2.8 邀请管理页面 (`/dashboard/invitations`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-team-invitations` | 获取待处理邀请 |
| `create-team-invitations` | 创建邀请 |
| `update-team-invitation-role` | 更新邀请角色 |
| `delete-team-invitation` | 删除邀请 |
| `get-team-invitation-token` | 获取邀请链接令牌 |
| `get-teams` | 获取团队列表 |

### 2.9 Webhooks 页面 (`/dashboard/webhooks`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-webhooks` | 获取 Webhook 列表 |
| `create-webhook` | 创建 Webhook |
| `update-webhook` | 更新 Webhook |
| `delete-webhook` | 删除 Webhook |
| `get-teams` | 获取团队列表 |

### 2.10 团队设置页面 (`/dashboard/settings`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-team-stats` | 获取团队统计 |
| `update-team` | 更新团队信息 |
| `delete-team` | 删除团队 |
| `leave-team` | 离开团队 |
| `update-team-photo` | 更新团队头像 |
| `get-teams` | 获取团队列表 |

### 2.11 已删除文件页面 (`/dashboard/deleted`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-team-deleted-files` | 获取已删除文件 |
| `sse/permanently-delete-team-files` | 永久删除文件 (SSE) |
| `sse/restore-deleted-team-files` | 恢复已删除文件 (SSE) |
| `get-teams` | 获取团队列表 |

### Dashboard 共享接口

| 接口 | 功能描述 |
|------|----------|
| `create-project` | 创建项目 |
| `duplicate-project` | 复制项目 |
| `move-project` | 移动项目 |
| `rename-project` | 重命名项目 |
| `delete-project` | 删除项目 |
| `update-project-pin` | 更新项目置顶状态 |
| `get-builtin-templates` | 获取内置模板 |
| `sse/clone-template` | 克隆模板 (SSE) |
| `create-share-link` | 创建分享链接 |
| `delete-share-link` | 删除分享链接 |
| `create-team-access-request` | 创建团队访问请求 |
| `create-team` | 创建团队 |
| `create-team-with-invitations` | 创建团队并发送邀请 |

---

## 3. Settings 页面 (`/settings/*`)

设置页面用于用户个人设置、密码管理、订阅管理等。

### 3.1 个人资料页面 (`/settings/profile`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-profile` | 获取用户资料 |
| `update-profile` | 更新用户资料 |
| `update-profile-props` | 更新用户属性 |
| `update-profile-photo` | 更新头像 |
| `request-email-change` | 请求邮箱更改 |
| `cancel-email-change` | 取消邮箱更改 |
| `get-subscription-usage` | 获取订阅使用量 |

### 3.2 密码设置页面 (`/settings/password`)

| API 接口 | 功能描述 |
|----------|----------|
| `update-profile-password` | 更新密码 |
| `request-profile-recovery` | 请求密码恢复 |
| `recover-profile` | 恢复密码 |

### 3.3 反馈页面 (`/settings/feedback`)

| API 接口 | 功能描述 |
|----------|----------|
| `send-user-feedback` | 发送用户反馈 |
| `get-profile` | 获取用户资料 |

### 3.4 选项设置页面 (`/settings/options`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-profile` | 获取用户资料 |
| `update-profile` | 更新用户资料 |
| `update-profile-notifications` | 更新通知设置 |

### 3.5 订阅管理页面 (`/settings/subscriptions`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-profile` | 获取用户资料 |
| `get-subscription-usage` | 获取订阅使用量 |

### 3.6 访问令牌页面 (`/settings/access-tokens`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-access-tokens` | 获取访问令牌列表 |
| `create-access-token` | 创建访问令牌 |
| `delete-access-token` | 删除访问令牌 |
| `get-profile` | 获取用户资料 |

### 3.7 通知设置页面 (`/settings/notifications`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-profile` | 获取用户资料 |
| `update-profile-notifications` | 更新通知设置 |

### Settings 共享接口

| 接口 | 功能描述 |
|------|----------|
| `get-teams` | 获取团队列表 |
| `get-team-members` | 获取团队成员 |
| `get-team-invitations` | 获取待处理邀请 |
| `update-team-member-role` | 更新成员角色 |
| `delete-team-member` | 删除团队成员 |
| `get-team-stats` | 获取团队统计 |
| `get-webhooks` | 获取 Webhook 列表 |
| `create-webhook` | 创建 Webhook |
| `update-webhook` | 更新 Webhook |
| `delete-webhook` | 删除 Webhook |
| `create-team` | 创建团队 |
| `create-team-with-invitations` | 创建团队并发送邀请 |
| `update-team` | 更新团队信息 |
| `leave-team` | 离开团队 |
| `delete-team` | 删除团队 |
| `create-team-invitations` | 创建团队邀请 |
| `get-team-invitation-token` | 获取邀请令牌 |
| `update-team-invitation-role` | 更新邀请角色 |
| `delete-team-invitation` | 删除邀请 |
| `update-team-photo` | 更新团队头像 |
| `get-team-shared-files` | 获取团队共享文件 |

---

## 4. Workspace 页面 (`/workspace/*`)

工作区页面是 Penpot 的核心设计编辑页面，功能最复杂，依赖约 143 个 API 接口。

### 4.1 文件操作

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-file` | 获取完整文件数据 | workspace.cljs |
| `update-file` | 保存/持久化文件更改 | persistence.cljs |
| `rename-file` | 重命名文件 | workspace.cljs, dashboard.cljs |
| `delete-file` | 删除文件 | dashboard.cljs |
| `set-file-shared` | 设置文件共享状态 | dashboard.cljs, libraries.cljs |
| `get-file-summary` | 获取文件元数据 | dashboard.cljs, common.cljs |
| `get-file-fragment` | 获取部分文件数据 (查看器用) | viewer.cljs |
| `get-view-only-bundle` | 获取只读文件包 | viewer.cljs |

### 4.2 文件快照/版本

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-file-snapshots` | 获取所有版本快照 | versions.cljs |
| `create-file-snapshot` | 创建新的命名版本 | versions.cljs |
| `update-file-snapshot` | 更新快照标签/名称 | versions.cljs |
| `delete-file-snapshot` | 删除快照 | versions.cljs |
| `restore-file-snapshot` | 恢复到指定快照 | versions.cljs |
| `lock-file-snapshot` | 锁定快照防止删除 | versions.cljs |
| `unlock-file-snapshot` | 解锁快照 | versions.cljs |

### 4.3 缩略图

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-file-object-thumbnails` | 获取文件对象缩略图 | workspace.cljs, libraries.cljs |
| `create-file-object-thumbnail` | 创建/缓存缩略图 | thumbnails.cljs |
| `delete-file-object-thumbnail` | 删除缓存的缩略图 | thumbnails.cljs |
| `create-file-thumbnail` | 创建文件缩略图 | thumbnails.cljs |

### 4.4 组件库/共享

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-file-libraries` | 获取文件关联的组件库 | workspace.cljs |
| `update-file-library-sync-status` | 更新组件库同步状态 | libraries.cljs |
| `ignore-file-library-sync-status` | 忽略组件库同步警告 | libraries.cljs |
| `link-file-to-library` | 将文件链接到组件库 | libraries.cljs |
| `unlink-file-from-library` | 从组件库取消链接 | libraries.cljs |
| `get-library-usage` | 获取组件库使用位置 | libraries.cljs |
| `get-team-shared-files` | 获取团队共享文件 | libraries.cljs, team.cljs |

### 4.5 媒体/图片上传

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `create-file-media-object-from-url` | 从 URL 创建媒体对象 | media.cljs |
| `upload-file-media-object` | 上传图片/文件 | media.cljs, clipboard.cljs, svg_upload.cljs |
| `clone-file-media-object` | 克隆现有媒体对象 | media.cljs |

### 4.6 评论功能

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-comment-threads` | 获取文件所有评论线程 | comments.cljs, workspace/comments.cljs, viewer.cljs |
| `get-comment-thread` | 获取单个评论线程详情 | comments.cljs |
| `create-comment-thread` | 创建新的评论线程 | comments.cljs |
| `update-comment-thread` | 更新评论线程 | comments.cljs |
| `update-comment-thread-status` | 更新线程状态 (解决/未解决) | comments.cljs |
| `update-comment-thread-frame` | 更新线程关联的画板 | comments.cljs |
| `update-comment-thread-position` | 更新评论位置 (拖动) | workspace/comments.cljs |
| `delete-comment-thread` | 删除整个线程 | comments.cljs |
| `get-comments` | 获取线程中的所有评论 | comments.cljs |
| `create-comment` | 添加评论到线程 | comments.cljs |
| `update-comment` | 编辑现有评论 | comments.cljs |
| `delete-comment` | 删除单条评论 | comments.cljs |
| `get-unread-comment-threads` | 获取未读线程用于通知 | comments.cljs |
| `mark-all-threads-as-read` | 标记所有线程为已读 | comments.cljs |
| `get-profiles-for-file-comments` | 获取评论作者用户信息 | comments.cljs, profile.cljs |

### 4.7 导出功能

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `export` | 导出资源 (SVG/PNG) | exports/assets.cljs |
| `has-file-libraries` | 检查文件是否有依赖组件库 | common.cljs, exports/files.cljs |
| `sse/export-binfile` | SSE 流式导出二进制文件 | exports/files.cljs |
| `create-team-access-request` | 请求团队访问权限用于导出 | exports/files.cljs, common.cljs |
| `create-share-link` | 生成分享链接 | common.cljs |
| `delete-share-link` | 删除分享链接 | common.cljs |

### 4.8 字体操作

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-font-variants` | 获取可用字体变体 | fonts.cljs |
| `update-font` | 更新字体元数据 | fonts.cljs |
| `delete-font` | 删除字体 | fonts.cljs |
| `delete-font-variant` | 删除字体变体 | fonts.cljs |
| `create-font-variant` | 创建字体变体 | dashboard.cljs |

### 4.9 项目操作

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-projects` | 获取团队所有项目 | dashboard.cljs |
| `get-project` | 获取项目详情 | project.cljs |
| `get-project-files` | 获取项目内文件列表 | project.cljs |
| `create-project` | 创建新项目 | dashboard.cljs |
| `duplicate-project` | 复制项目 | dashboard.cljs |
| `move-project` | 移动项目到其他团队 | dashboard.cljs |
| `rename-project` | 重命名项目 | dashboard.cljs |
| `delete-project` | 删除项目 | dashboard.cljs |
| `update-project-pin` | 置顶/取消置顶项目 | dashboard.cljs |

### 4.10 文件操作 (仪表盘)

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `create-file` | 在项目中创建新文件 | dashboard.cljs |
| `duplicate-file` | 复制文件 | dashboard.cljs |
| `move-files` | 移动文件到其他项目 | dashboard.cljs |

### 4.11 团队管理

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-teams` | 获取用户所有团队 | team.cljs |
| `get-team-members` | 获取团队成员列表 | team.cljs |
| `update-team-member-role` | 更改成员角色 | team.cljs |
| `delete-team-member` | 移除成员 | team.cljs |
| `get-team-invitations` | 获取待处理邀请 | team.cljs |
| `create-team-invitations` | 发送邀请 | team.cljs |
| `update-team-invitation-role` | 更新邀请角色 | team.cljs |
| `delete-team-invitation` | 删除邀请 | team.cljs |
| `get-team-invitation-token` | 获取邀请链接令牌 | team.cljs |
| `get-team-stats` | 获取团队统计信息 | team.cljs |
| `get-webhooks` | 获取 Webhook 列表 | team.cljs |
| `create-webhook` | 创建 Webhook | team.cljs |
| `update-webhook` | 更新 Webhook | team.cljs |
| `delete-webhook` | 删除 Webhook | team.cljs |
| `create-team` | 创建新团队 | team.cljs |
| `create-team-with-invitations` | 创建团队并发送邀请 | team.cljs |
| `update-team` | 更新团队设置 | team.cljs |
| `leave-team` | 离开当前团队 | team.cljs |
| `delete-team` | 删除团队 | team.cljs |
| `update-team-photo` | 更新团队头像 | team.cljs |

### 4.12 SSE 长耗时操作

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `sse/import-binfile` | 导入二进制文件 | dashboard.cljs |
| `sse/clone-template` | 克隆模板文件 | dashboard.cljs |
| `sse/permanently-delete-team-files` | 永久删除文件 | dashboard.cljs |
| `sse/restore-deleted-team-files` | 恢复已删除文件 | dashboard.cljs |

### 4.13 用户/认证

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `get-profile` | 获取用户个人资料 | profile.cljs |
| `update-profile` | 更新个人资料 | profile.cljs |
| `update-profile-props` | 更新个人资料属性 | profile.cljs |
| `update-profile-photo` | 更新头像 | profile.cljs |
| `update-profile-password` | 更改密码 | profile.cljs |
| `update-profile-notifications` | 更新通知偏好 | profile.cljs |
| `request-email-change` | 请求邮箱更改 | profile.cljs |
| `cancel-email-change` | 取消邮箱更改 | profile.cljs |
| `get-subscription-usage` | 获取订阅使用量 | profile.cljs |
| `delete-profile` | 删除账户 | profile.cljs |
| `request-profile-recovery` | 请求账户恢复 | profile.cljs |
| `recover-profile` | 恢复账户 | profile.cljs |
| `get-access-tokens` | 获取 API 令牌列表 | profile.cljs |
| `create-access-token` | 创建 API 令牌 | profile.cljs |
| `delete-access-token` | 删除 API 令牌 | profile.cljs |
| `login-with-password` | 邮箱密码登录 | auth.cljs |
| `login-with-ldap` | LDAP 登录 | auth.cljs |
| `login-with-oidc` | SSO/OIDC 登录 | auth.cljs |
| `logout` | 用户登出 | auth.cljs |
| `create-demo-profile` | 创建演示账户 | auth.cljs |

### 4.14 搜索

| API 接口 | 功能描述 | 源文件 |
|----------|----------|--------|
| `search-files` | 在团队内搜索文件 | dashboard.cljs |
| `get-team-recent-files` | 获取最近访问的文件 | dashboard.cljs |
| `get-team-deleted-files` | 获取已删除文件 | dashboard.cljs |
| `get-builtin-templates` | 获取内置模板库 | dashboard.cljs |

---

## 5. Viewer 页面 (`/view/*`)

查看器页面用于预览和评论设计文件。

| API 接口 | 功能描述 |
|----------|----------|
| `get-view-only-bundle` | 获取只读文件包 |
| `get-file-fragment` | 获取文件片段 |
| `get-comment-threads` | 获取评论线程 |
| `get-comment-thread` | 获取评论线程详情 |
| `get-comments` | 获取评论列表 |
| `create-comment-thread` | 创建评论线程 |
| `update-comment-thread` | 更新评论线程 |
| `update-comment-thread-status` | 更新评论状态 |
| `update-comment-thread-frame` | 更新评论关联的画板 |
| `delete-comment-thread` | 删除评论线程 |
| `create-comment` | 创建评论 |
| `update-comment` | 更新评论 |
| `delete-comment` | 删除评论 |
| `get-profiles-for-file-comments` | 获取评论用户信息 |

---

## 6. Onboarding 页面

入门页面用于新用户引导、团队创建和模板选择。

### 6.1 团队选择页面 (`/onboarding/team-choice`)

| API 接口 | 功能描述 |
|----------|----------|
| `create-team` | 创建团队 |
| `create-team-with-invitations` | 创建团队并发送邀请 |
| `update-profile-props` | 更新用户属性 (入职状态) |

### 6.2 模板页面 (`/onboarding/templates`)

| API 接口 | 功能描述 |
|----------|----------|
| `get-builtin-templates` | 获取内置模板 |
| `get-team-recent-files` | 获取团队最近文件 |
| `update-profile-props` | 更新用户属性 |
| `sse/clone-template` | 克隆模板 (SSE) |

### 6.3 问卷页面 (`/onboarding/questions`)

| API 接口 | 功能描述 |
|----------|----------|
| `update-profile-props` | 更新用户属性 (问卷答案) |

---

## 7. 特殊页面

| 页面路由 | API 接口 | 功能描述 |
|---------|----------|----------|
| `/frame-preview` | 无 | 无接口调用 |
| `/render-sprite/:file-id` | 未找到实现 | - |
| `/debug/icons-preview` | 无 | 无接口调用 (仅开发调试) |
| `/debug/playground` | 无 | 无接口调用 (仅开发调试) |

---

## 8. 错误页面

| 页面 | API 接口 | 功能描述 |
|------|----------|----------|
| Not Found | 无 | - |
| Bad Gateway | 无 | - |
| Service Unavailable | 无 | - |
| WebGL Context Lost | 无 | - |
| Internal Error | 无 | - |
| Invalid Token | 无 | - |
| Exception Page | 无 | - |

---

## 完整 API 列表 (去重后)

### 认证相关 (24)

| 接口 | 功能描述 |
|------|----------|
| `login-with-password` | 邮箱密码登录 |
| `login-with-ldap` | LDAP 登录 |
| `login-with-oidc` | SSO/OIDC 单点登录 |
| `logout` | 用户登出 |
| `request-profile-recovery` | 请求密码恢复 |
| `recover-profile` | 恢复密码 |
| `create-demo-profile` | 创建演示账户 |
| `get-profile` | 获取用户资料 |
| `update-profile` | 更新用户资料 |
| `update-profile-password` | 更新密码 |
| `update-profile-notifications` | 更新通知设置 |
| `update-profile-props` | 更新用户属性 |
| `update-profile-photo` | 更新头像 |
| `request-email-change` | 请求邮箱更改 |
| `cancel-email-change` | 取消邮箱更改 |
| `delete-profile` | 删除账户 |
| `get-subscription-usage` | 获取订阅使用量 |
| `get-profiles-for-file-comments` | 获取评论用户信息 |
| `get-access-tokens` | 获取访问令牌 |
| `create-access-token` | 创建访问令牌 |
| `delete-access-token` | 删除访问令牌 |
| `register-profile` | 注册新用户 |
| `prepare-register-profile` | 预验证注册信息 |
| `get-sso-provider` | 获取 SSO 提供商 |
| `verify-token` | 验证令牌 |

### 项目/文件相关 (16)

| 接口 | 功能描述 |
|------|----------|
| `get-projects` | 获取项目列表 |
| `get-project` | 获取项目详情 |
| `get-project-files` | 获取项目文件列表 |
| `create-project` | 创建项目 |
| `duplicate-project` | 复制项目 |
| `move-project` | 移动项目 |
| `rename-project` | 重命名项目 |
| `delete-project` | 删除项目 |
| `update-project-pin` | 更新置顶状态 |
| `create-file` | 创建文件 |
| `duplicate-file` | 复制文件 |
| `move-files` | 移动文件 |
| `delete-file` | 删除文件 |
| `rename-file` | 重命名文件 |
| `set-file-shared` | 设置共享状态 |
| `get-file-summary` | 获取文件摘要 |

### Dashboard/团队相关 (31)

| 接口 | 功能描述 |
|------|----------|
| `get-teams` | 获取团队列表 |
| `create-team` | 创建团队 |
| `create-team-with-invitations` | 创建团队并发送邀请 |
| `update-team` | 更新团队信息 |
| `delete-team` | 删除团队 |
| `leave-team` | 离开团队 |
| `update-team-photo` | 更新团队头像 |
| `get-team-members` | 获取团队成员 |
| `update-team-member-role` | 更新成员角色 |
| `delete-team-member` | 删除团队成员 |
| `get-team-invitations` | 获取待处理邀请 |
| `create-team-invitations` | 创建邀请 |
| `update-team-invitation-role` | 更新邀请角色 |
| `delete-team-invitation` | 删除邀请 |
| `get-team-invitation-token` | 获取邀请链接令牌 |
| `get-team-stats` | 获取团队统计 |
| `get-webhooks` | 获取 Webhook 列表 |
| `create-webhook` | 创建 Webhook |
| `update-webhook` | 更新 Webhook |
| `delete-webhook` | 删除 Webhook |
| `get-team-recent-files` | 获取团队最近文件 |
| `get-team-deleted-files` | 获取已删除文件 |
| `search-files` | 搜索文件 |
| `get-team-shared-files` | 获取团队共享文件 |
| `get-builtin-templates` | 获取内置模板 |
| `sse/clone-template` | 克隆模板 (SSE) |
| `sse/permanently-delete-team-files` | 永久删除文件 (SSE) |
| `sse/restore-deleted-team-files` | 恢复已删除文件 (SSE) |
| `create-share-link` | 创建分享链接 |
| `delete-share-link` | 删除分享链接 |
| `create-team-access-request` | 创建团队访问请求 |

### Workspace 相关 (43)

| 接口 | 功能描述 |
|------|----------|
| `get-file` | 获取文件数据 |
| `get-file-libraries` | 获取文件组件库 |
| `get-file-object-thumbnails` | 获取文件对象缩略图 |
| `update-file` | 更新文件 |
| `get-file-snapshots` | 获取文件快照 |
| `create-file-snapshot` | 创建文件快照 |
| `update-file-snapshot` | 更新文件快照 |
| `delete-file-snapshot` | 删除文件快照 |
| `restore-file-snapshot` | 恢复文件快照 |
| `lock-file-snapshot` | 锁定快照 |
| `unlock-file-snapshot` | 解锁快照 |
| `create-file-object-thumbnail` | 创建对象缩略图 |
| `delete-file-object-thumbnail` | 删除对象缩略图 |
| `create-file-thumbnail` | 创建文件缩略图 |
| `update-file-library-sync-status` | 更新组件库同步状态 |
| `ignore-file-library-sync-status` | 忽略组件库同步状态 |
| `link-file-to-library` | 链接到组件库 |
| `unlink-file-from-library` | 从组件库取消链接 |
| `get-library-usage` | 获取组件库使用情况 |
| `create-file-media-object-from-url` | 从 URL 创建媒体 |
| `upload-file-media-object` | 上传媒体对象 |
| `clone-file-media-object` | 克隆媒体对象 |
| `export` | 导出文件 |
| `has-file-libraries` | 检查是否有组件库 |
| `sse/import-binfile` | 导入二进制文件 (SSE) |
| `sse/export-binfile` | 导出二进制文件 (SSE) |
| `update-comment-thread-position` | 更新评论位置 |
| `get-file-fragment` | 获取部分文件数据 |
| `get-view-only-bundle` | 获取只读文件包 |

### 评论区相关 (14)

| 接口 | 功能描述 |
|------|----------|
| `get-comment-threads` | 获取评论线程 |
| `get-comment-thread` | 获取线程详情 |
| `get-comments` | 获取评论列表 |
| `create-comment-thread` | 创建评论线程 |
| `update-comment-thread` | 更新评论线程 |
| `update-comment-thread-status` | 更新线程状态 |
| `update-comment-thread-frame` | 更新线程画板 |
| `delete-comment-thread` | 删除线程 |
| `create-comment` | 创建评论 |
| `update-comment` | 更新评论 |
| `delete-comment` | 删除评论 |
| `get-unread-comment-threads` | 获取未读线程 |
| `mark-all-threads-as-read` | 标记已读 |
| `get-profiles-for-file-comments` | 获取评论用户信息 |

### 字体相关 (5)

| 接口 | 功能描述 |
|------|----------|
| `get-font-variants` | 获取字体变体 |
| `create-font-variant` | 创建字体变体 |
| `update-font` | 更新字体 |
| `delete-font` | 删除字体 |
| `delete-font-variant` | 删除字体变体 |

### 其他 (1)

| 接口 | 功能描述 |
|------|----------|
| `send-user-feedback` | 发送用户反馈 |

---

## 关键发现

1. **Workspace 是最复杂的页面**：依赖约 143 个 API 接口，涵盖文件操作、版本管理、缩略图、组件库、媒体上传、评论、导出、字体、项目管理、团队管理等所有核心编辑功能

2. **评论区接口被多个页面共享**：Workspace、Viewer、Dashboard 都调用评论相关接口 (`get-comment-threads`, `create-comment-thread` 等)

3. **团队管理接口分布在 Dashboard 和 Settings 之间共享**：成员管理、邀请管理、Webhook 等接口在两个页面都会调用

4. **约有 200+ 个独特的 API 接口命令**

5. **特殊页面不调用后端 API**：`/frame-preview`、`/debug/icons-preview`、`/debug/playground` 都是纯前端组件

6. **SSE (Server-Sent Events) 用于长耗时操作**：如文件删除/恢复、模板克隆、文件导入等操作使用 SSE 而非普通 HTTP 请求
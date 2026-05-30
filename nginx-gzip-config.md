# Nginx Gzip 压缩配置

## 启动配置

```nginx
http {
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        application/xml
        text/xml
        image/svg+xml
        application/wasm;
}
```

## 参数说明

| 参数 | 值 | 说明 |
|------|-----|------|
| `gzip` | `on` | 开关 gzip 压缩 |
| `gzip_vary` | `on` | 响应头添加 `Vary: Accept-Encoding`，让 CDN/代理按编码缓存 |
| `gzip_comp_level` | `6` | 压缩级别 1-9，6 是性能与压缩率的最佳平衡 |
| `gzip_min_length` | `1000` | 小于 1KB 的文件不压缩，节省 CPU |
| `gzip_types` | - | 显式指定需要压缩的 MIME 类型 |

## Brotli 替代方案（压缩率更高 15-25%）

```nginx
brotli on;
brotli_comp_level 6;
brotli_types
    text/plain
    text/css
    text/javascript
    application/javascript
    application/json
    application/xml
    text/xml
    image/svg+xml
    application/wasm;
```

## Penpot 项目压缩效果预估

| 文件 | 原始大小 | Gzip 预期 |
|------|---------|-----------|
| shared.js | 17MB | ~1.9MB |
| libs.js | 5.9MB | ~1.7MB |
| main-workspace.js | 5.9MB | ~703KB |
| worker/main.js | 3.6MB | ~400KB |
| main.js | 1.9MB | ~226KB |
| main.css | 8.2MB | ~722KB |
| render-wasm.wasm | 34MB | ~8-10MB |

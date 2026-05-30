结论：如果你需要一次性完成完整生产构建（含 wasm 和静态资源），应该执行：
```angular2html
pnpm run build:wasm && pnpm run build:app:assets && pnpm run build:app       
```

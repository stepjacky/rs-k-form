# Rsbuild Project
运行build.ps1 生成umd格式文件，构建产物k-form-design.js放在浏览器里头运行，
页面文件在public/index.html，语法错误，配置文件都在工程下
提示错误
```javascript
Uncaught ReferenceError: Cannot access 's' before initialization
    at Object.A (k-form-design.js:2:1476595)
    at 84326 (k-form-design.js:2:1476543)
    at r (k-form-design.js:2:2066777)
    at 22155 (k-form-design.js:2:1478179)
    at r (k-form-design.js:2:2066777)
    at 8863 (k-form-design.js:2:1476616)
    at r (k-form-design.js:2:2066777)
    at k-form-design.js:2:2075943
    at k-form-design.js:138:50540
    at k-form-design.js:138:50546
(索引):32  Uncaught ReferenceError: Kform is not defined
```
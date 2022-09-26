import moduleA from './module/moduleA.js'
import { moduleB } from './module/moduleB.js'


//由于在package.json中type 为 module  所以 只能用ES6语法导入  不能使用commonjs规范的require导入
// const moduleA = require("./module/moduleA.js")


console.log(moduleA.getName())

console.log(moduleB.getName())
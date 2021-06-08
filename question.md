```js
/**
 *实现一个randomString函数，返回一个数组，该数组内有一千个字符串，每串字符串为6位数0-9的随机验证码，
 *不可重复。
 */
function randomString() {
    let arr = [];
    let map = {};
    for (let i = 0; i < 1000; i++) {
        let v = Math.random().toString().slice(2, 8);
        while (map[v]) {
            v = Math.random().toString().slice(2, 8);
        }
        map[v] = true;
        arr.push(v);
    }
    return arr;
}
```

---

```js
/**
 * 实现一个sum函数，接收一个arr，
 * 累加arr的项，只能使用add方法，该方法接收两个参数
 * 模拟异步请求后端返回一个相加后的值
 */
function add(a, b) {
    return Promise.resolve(a + b);
}
function sum(arr) {
    // 思路可以二分，切成两部分beforeSum，afterSum
}
/**
 * 变种：如果后端设置了并发限制，一次不能请求超过三个，怎么办？
 */
```

---

```js
/**
 * 请实现抽奖函数rand，保证随机性
 * 输入表对象数组，对象有属性n表示人名，w表示权重
 * 随机返回一个中奖人名，中奖概率和w成正比
 */
let peoples = [
    { n: 'p1', w: 100 },
    { n: 'p2', w: 200 },
    { n: 'p3', w: 1 }
];
let rand = function (p) {
    let sum = 0;
    for (let i = 0; i < p.length; i++) {
        p[i].start = sum + 1;
        sum += p[i].w;
        p[i].end = sum;
    }
    let v = getRand(sum + 1, 1);
    for (let i = 0; i < p.length; i++) {
        if (v >= p[i].start && v <= p[i].end) {
            return p[i];
        }
    }
};
function getRand(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function test(i = 1000) {
    let obj = {};
    while (i--) {
        let v = rand(peoples);
        if (obj[v.n]) {
            obj[v.n]++;
        } else {
            obj[v.n] = 1;
        }
    }
    return obj;
}
```

---

```js
/**
 * 开放题：一个html引入一个超大的JS, js中是一个乱序数字数组（长度巨大），从中找到最大值显示，遇到这种需求怎么做？
 */
// 将数组分割成若干份，求出每一份的最大值，然后进一步求这些最大值里的最大值。。。
```

import { rejects } from 'assert';
import fs, { realpath } from 'fs';
import { resolve } from 'path';
/* fs.readFile('./test.txt', 'utf-8', function(err, dataStr){
    if(err){
        return console.log('文件读取失败！' + err.message);
    }
    console.log(dataStr);
}); */

/* fs.writeFile('./files/test.txt', 'Hello Node.js!!', function(err){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
}); */

//使用Promise封装
/* const p = new Promise(function(resolve, reject){
    fs.readFile("./files/test.txt", "utf-8",(err, data) => {
        if(err) reject(err);
        resolve(data);
    });
});
p.then(function(value){
    console.log(value);
}, function(reason){
    console.log("读取失败！！");
}); */

/* fs.readFile('./files/1.txt', 'utf-8', (err, data1) => {
    fs.readFile('./files/2.txt', 'utf-8', (err, data2) => {
        fs.readFile('./files/3.txt', 'utf-8', (err, data3) => {
            let result = data1 + data2 + data3;
            console.log(result);
        })
    })
}) */
//使用promise实现
/* const p = new Promise((res, reject) => {
    fs.readFile("./files/1.txt", 'utf-8', (err, data) => {
        res(data);
    });
});
p.then(value => {
    return new Promise((res, reject) => {
        fs.readFile("./files/2.txt", 'utf-8', (err, data) => {
            res([value, data]);
        });
    })
}).then(value => {
    return new Promise((res, reject) => {
        fs.readFile("./files/3.txt", 'utf-8', (err, data) => {
            value.push(data);
            res(value);
        });
    })
}).then(value => {
    console.log(value);
}) */
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //设置p对象的状态为失败，并设置失败的值
        reject("出错啦！");
    }, 1000);
});

/* p.then(function(value){}, function(reason){
    console.error(reason);
}) */
p.catch(function(reason){
    console.warn(reason);
})
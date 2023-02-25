//1. 引入fs模块
import fs from "fs";
//读取1.txt
function readOne(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/1.txt", "utf-8", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function readTwo(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/2.txt", "utf-8", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

function readThree(){
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/3.txt", "utf-8", (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

//声明一个async函数
async function main(){
    let one = await readOne();
    let two = await readTwo();
    let three = await readThree();
    console.log(one + two + three);
}

main();

const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
const input = fs.readFileSync(filePath).toString().split("\n");
const currentTime=input[0].split(" ").map((item)=>+item);//현재 시간
const cookingTime=Number(input[1]);//요리 시간

let H = currentTime[0]; // 현재 시간(시)
let M = currentTime[1]; // 현재 시간(분)
const C = cookingTime; // 요리 시간(분)


function solution(H,M,C)
{
    let newM = M + C;
    let newH = H;
    if(newM >= 60){
        newH += Math.floor(newM/60);
        newM %=60
    }
    if(newH>23){
        newH -= 24;
    }
    console.log(newH,newM);
}
solution(H,M,cookingTime);



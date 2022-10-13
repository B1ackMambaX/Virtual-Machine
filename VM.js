let fs = require('fs');
const readline = require('readline-sync');
let arg = process.argv;
let commands = [];
let mem = new Array();
let labels = new Array();
let programm = fs.readFileSync(arg[2]+ '');
programm = programm.toString();
programm += ' exit';
commands = programm.split(' ');
let ip = 0;

/*for  (let i = 0; i < commands.length; i++){
    console.log (`В ячейке ${i} хранится ${commands[i]}`);
}*/

while(commands[ip] != 'exit'){
    switch (commands[ip]){
        case 'set':
            mem[commands[ip+1]] = +commands[ip+2];
            ip += 3;
            break;
        case 'jsin':
            mem[commands[ip+1]] = parseFloat(readline.question("Enter a number: "));
            ip += 2;
            break;
        case 'notEquals':
            if (mem[commands[ip+1]] != mem[commands[ip+2]]){
                ip += 3;
            }
            else {
                ip += 8;
            }
            break;
        case 'sub':
            if(mem[commands[ip+1]] > mem[commands[ip+2]]){
                mem[commands[ip+1]] = mem[commands[ip+1]] - mem[commands[ip+2]];
            }
            else {
                mem[commands[ip+2]] = mem[commands[ip+2]] - mem[commands[ip+1]]; 
            }
            ip += 3;
            break;
        case 'label':
            labels[commands[ip+1]] = ip + 2;
            ip +=2;
            break;
        case 'mult':
            mem[commands[ip+3]] = mem[commands[ip+1]] * mem[commands[ip+2]];
            ip += 4;
            break;
        case 'add':
            mem[commands[ip+3]] = mem[commands[ip+1]] + +commands[ip+2];
            ip += 4;
            break;
        case 'compare':
            if(mem[commands[ip+1]] <= mem[commands[ip+2]]) {
                ip += 3;
            }
            else {
                ip += 5;
            }
            break;
        case 'goto':
            ip = labels[commands[ip+1]];
            break;
        case 'jsout':
            console.log(`Result: ${mem[commands[ip+1]]}`);
            ip += 2;
            break;    
    } 
}
/*console.log(mem);
console.log(labels);*/



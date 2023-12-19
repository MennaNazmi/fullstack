const readline= require('readline');
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout


})

rl.question('please enter ur name:', (name)=>{
    console.log('ur name:' +name);
    rl.close();
} )

rl.on('close',()=>{
    console.log('interface closed');
    process.send(0);
})
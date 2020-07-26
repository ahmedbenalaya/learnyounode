let sum=0
for (let i=2;i<process.argv.length;i++)
{
    let num = Number(process.argv[i])
    
    sum = sum+num
    
}
console.log(sum)

const fs=require("fs");

function getInput()
{
    const input=process.argv[2];
    return input;
}


function writeToFile()
{
    const text=getInput()
    fs.writeFile("demo.txt",text,function(err){
        if(err)
        {
            console.log(err)
            return;
        }
        console.log("data written ....")
    })
}



writeToFile();
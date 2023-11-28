var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    result.forEach(element=>{console.log("name:",element.name);
    console.log("capital:",element.capital);
    console.log("flag:",element.flags);
    })
}   
    
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);a
    var a=result.reduce((accumulator,ele)=>accumulator+ele.population,0);
    console.log(a);

}

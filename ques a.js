var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    var a=result.filter((ele)=>ele.region==="Asia");
    var b=a.map((ele)=>ele.name)
    console.log(b);

}
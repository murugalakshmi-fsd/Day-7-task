var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
    console.log(result);
    var a=result.filter((item) => item?.currencies?.USD?.name === "United States dollar");
    var b=a.map((item)=>item.name);
    console.log(b);
    

}
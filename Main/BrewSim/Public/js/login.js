/*
 * Copyright (c) 2016 ASU CodeDevils

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function login(){
    document.getElementById('login').setAttribute("hidden",true);
    document.getElementById('register').setAttribute("hidden",true);
    document.getElementById('forgotpass').setAttribute("hidden",true);
    document.getElementById("username").removeAttribute("hidden");
    document.getElementById("pass").removeAttribute("hidden");
    document.getElementById("logincheck").removeAttribute("hidden");
    document.getElementById("tag1").removeAttribute("hidden");
    document.getElementById("tag2").removeAttribute("hidden");

}
function checkLog(){
    var username = document.getElementById('username').value;
    var pass = document.getElementById('username').value;
     
    var pack = packJson("LogReg","login", username,pass);
    getInfo(pack,valid);
}

function valid(result){
        console.log(result);
        result = JSON.parse(result);
        if(result.Boolean)
            {
                localStorage.name=result.Name;
                start();
            }
        else
            {
               document.getElementById('errorlogin').innerHTML ="<h4>Login or Password Incorrect</h4>";
            }
}
function register(){
    document.getElementById('login').setAttribute("hidden",true);
    document.getElementById('register').setAttribute("hidden",true);
    document.getElementById('forgotpass').setAttribute("hidden",true);
    document.getElementById("username").removeAttribute("hidden");
    document.getElementById("pass").removeAttribute("hidden");
    document.getElementById("reg").removeAttribute("hidden");
    document.getElementById("tag1").removeAttribute("hidden");
     document.getElementById("tag2").removeAttribute("hidden");
}
function reg(){
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var pack = packJson("LogReg","addUsername", username, pass);
    getInfo(pack,added);
}
function added(result){
    console.log(result);
    result = JSON.parse(result);
    if(result.Boolean)
        {
            document.getElementById("tag5").removeAttribute("hidden");
            document.getElementById("startgame").removeAttribute("hidden");
            document.getElementById("qquestionadd").removeAttribute("hidden");
            document.getElementById("username").setAttribute("hidden",true);
            document.getElementById("pass").setAttribute("hidden",true);
            document.getElementById("reg").setAttribute("hidden",true);
            document.getElementById("tag1").setAttribute("hidden",true);
            document.getElementById("tag2").setAttribute("hidden",true);
            localStorage.name=result.Name;
        }
    else
        {
            document.getElementById("tag6").removeAttribute("hidden");
        }
}
function forgot(){
     document.getElementById('login').setAttribute("hidden",true);
    document.getElementById('register').setAttribute("hidden",true);
    document.getElementById('forgotpass').setAttribute("hidden",true);
    document.getElementById("username").removeAttribute("hidden");
    
    document.getElementById("checkforchallenge").removeAttribute("hidden");
    document.getElementById("tag1").removeAttribute("hidden");
   
}
function checkchallenge(){
    var username = document.getElementById('username').value;
    var pack = packJson("LogReg","isUser", username);
    getInfo(pack,isname);
}
function isname(result)
{
    result = JSON.parse(result);
    if(result.Boolean){
        console.log(result.Question);
        document.getElementById("username").setAttribute("hidden",true);
    
        document.getElementById("checkforchallenge").setAttribute("hidden",true);
        document.getElementById("tag1").setAttribute("hidden",true);
        document.getElementById("tag7").innerHTML = result.Question;
        document.getElementById("cresponse").removeAttribute("hidden");
        document.getElementById("subchallenge").removeAttribute("hidden");
        document.getElementById("tag3").removeAttribute("hidden");
        document.getElementById("tag4").removeAttribute("hidden");
        localStorage.namecheck = result.Name;
    }
    else
        {
             document.getElementById('errorlogin').innerHTML ="<h4>Username Invalid</h4>";
        }
}
function subchallenge(){
       
        var resp = document.getElementById('cresponse').value;
        var pack = packJson("LogReg","checkChallenge", localStorage.namecheck, resp);
        getInfo(pack,challcheck);
}
function challcheck(result){
    result = JSON.parse(result);
    if(result.Boolean){
        localStorage.name = localStorage.namecheck;
        document.getElementById("tag7").innerHTML = "Your password is: "+result.Pass;
         document.getElementById("cresponse").setAttribute("hidden",true);
        document.getElementById("subchallenge").setAttribute("hidden",true);
        document.getElementById("tag3").setAttribute("hidden",true);
        document.getElementById("tag4").setAttribute("hidden",true);
        document.getElementById("startgame").removeAttribute("hidden");
        
    }
    else
        {
           document.getElementById('errorlogin').innerHTML ="<h4>Response Doesn't Match</h4>"; 
        }
}
function addchallenge(){
            document.getElementById("tag5").setAttribute("hidden",true);
            document.getElementById("startgame").setAttribute("hidden",true);
            document.getElementById("qquestionadd").setAttribute("hidden",true);
            document.getElementById("cquestion").removeAttribute("hidden");
            document.getElementById("cresponse").removeAttribute("hidden");
            document.getElementById("logchallenge").removeAttribute("hidden");
            document.getElementById("tag3").removeAttribute("hidden");
            document.getElementById("tag4").removeAttribute("hidden");
            console.log(localStorage.name);
    
}
function logchallenge(){
    var ques = document.getElementById('cquestion').value;
    var resp = document.getElementById('cresponse').value;
    var pack = packJson("LogReg","addChallenge",localStorage.name, ques, resp);
    getInfo(pack,start);
    
    
}
function start(){
    console.log("done");
    window.location="game.html";
}

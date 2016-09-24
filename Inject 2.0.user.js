// ==UserScript==
// @name         Inject 2.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  shows how to use babel compiler
// @author       Vineeth
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match *://skillrack.com/faces/candidate/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
    /* jshint ignore:end */
    /* jshint esnext: true */

    var d = document;
    if (window.top === window.self) {
    //--- Script is on domain_B.com when/if it is the MAIN PAGE.
    }
    {
    var inp=`
Number of plants
Id and height of each plant.
`;
    var proc=`
Store the data in a dictionary.
Sort dictionary by value
`;
    var oup=`
Print the keys of the dictionary one per line.
`;
    var alt=`
This Code can be replaced with lambda function and ordered dict function:
OrderedDict(sorted(d.items(), key=lambda t: t[1]))
Print keys of d
`;
    var pseudo =`
Read number of plants
If all inputs are positive
Read ID and height of the plants
Store the values of dictionary in Lid
Sort Lid
Append values of the keys corresponding to the values of sorted Lid in ‘key’
Print keys one per line
Stop
`;
    var code=`
n=int(input())
if(n>=0):
d={}
for i in range(0,n):
ID=input()
h=int(input())
d[ID]=h
Lid=list(d.values())
Lid.sort()
key=list()
for i in range(0,len(Lid)):
for x in d.keys():
if(d[x]==Lid[i]):
key.append(x)
break
for x in key:
print(x)

`;
    //--- Script is on  skillrack.com when/if it is IN AN IFRAME.
    alert("Collaborative Coding Activated !!");
    var inpc=d.getElementById("j_id_1l");                        //Input
    inpc.innerHTML=inp;

    var procc=d.getElementById("j_id_1o");                        //process
    procc.innerHTML=proc;

    var oupc=d.getElementById("j_id_1r");                        //output
    oupc.innerHTML=oup;

    var altc=d.getElementById("j_id_1u");                        //Alternative
    altc.innerHTML=alt;

    var pseudoc=d.getElementById("j_id_1z");                        //Psuedo
    pseudoc.innerHTML=pseudo;

    var codec=d.d.getElementById("txtCode");
    codec=code;
    }
    /* jshint ignore:start */
]]></>).toString();
                  var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */

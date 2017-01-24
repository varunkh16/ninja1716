var request=require('sync-request');
var res=request('GET','http://rhythm.lntinfotech.com/sites',{
    json:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Username':'NMUMARL//10638639',
        'Password':'Recursion@456',
        'Domain':'NMUMARL'
    }
});
var user=JSON.parse(res.getBody('utf8'));
console.log(user);
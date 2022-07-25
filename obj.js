var arr1=[
    {
        name :'arun',
        number :6379055616,
        batch :'FSD-10',
        git :'arunclenton',
        referby :'reo',
        location :'chennai'
    },
    {
        name :'kani',
        number :6379055616,
        batch :'FSD-10',
        git :'kani',
        referby :'reo',
        location :'chennai'
    },
    {
        name :'sri',
        number :6379055616,
        batch :'FSD-10',
        git :'sri',
        referby :'reo',
        location :'chennai'
    },
    {
        name :'magi',
        number :6379055616,
        batch :'FSD-10',
        git :'magi',
        referby :'reo',
        location :'chennai'
    },
    {
        name :'ravi',
        number :6379055616,
        batch :'FSD-10',
        git :'ravi',
        referby :'reo',
        location :'chennai'
    }
]
// var body = document.querySelector('.body');
// var table = document.querySelector('.arun');
// var th=document.createElement('th');
// var td =document.createElement('td');
// // var tablehed =[]
// console.log(tablehed);
//  table.append(th)
//  th.innerHTML = tablehed;
//  console.log(table);
//  table.append(td)
//  console.log(td);
// // th.append(tablehed)
// // body.appendChild(table)
var table = document.createElement('table');
var tr = document.createElement('tr');
var array = ['photo','name','number','batch','git','referby','location'];

for (var j = 0; j < array.length; j++) {
  var th = document.createElement('th'); //column
  var text = document.createTextNode(array[j]); //cell
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);
// table.setAttribute('array')
for (var i = 0; i < array.length; i++) {
  var tr = document.createElement('tr');


  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  var text1 = document.createTextNode('photo');
  var text2 = document.createTextNode('name');
  var text3 = document.createTextNode('number');
  var text4 = document.createTextNode('batch');
  var text5 = document.createTextNode('git');
  var text6 = document.createTextNode('referby');
  var text7 = document.createTextNode('location');

  td1.appendChild(text1);
  td2.appendChild(text2);
  td3.appendChild(text3);
  td4.appendChild(text4);
  td5.appendChild(text5);
  td6.appendChild(text6);
  td7.appendChild(text7);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);

  table.appendChild(tr);
}
document.body.appendChild(table);
array.forEach(array)


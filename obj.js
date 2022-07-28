var arr1=[
    {
        img :'css/image/1658042314869.jpg',
        name :'arun',
        number :6379055616,
        batch :'FSD-10',
        git :'arunclenton',
        referby :'reo',
        location :'chennai'
    },
    {
        img:'css/image/IMG-20220607-WA0002.jpg',
        name :'kani',
        number :6379055616,
        batch :'FSD-10',
        git :'kani',
        referby :'reo',
        location :'chennai'
    },
    {
        img :'css/image/IMG-20220613-WA0003.jpg',
        name :'sri',
        number :6379055616,
        batch :'FSD-10',
        git :'sri',
        referby :'reo',
        location :'chennai'
    },
    {
        img :'css/image/Snapchat-82447130.jpg',
        name :'magi',
        number :6379055616,
        batch :'FSD-10',
        git :'magi',
        referby :'reo',
        location :'chennai'
    },
    {
        img :'css/image/Snapchat-1492123380.jpg',
        name :'ravi',
        number :6379055616,
        batch :'FSD-10',
        git :'ravi',
        referby :'reo',
        location :'chennai'
    }
]

var table = document.createElement('table');
var tr = document.createElement('tr');
var array = ['image','name','number','batch','git','referby','location'];

for (var i = 0; i < array.length; i++) {
  var th = document.createElement('th'); 
  var text = document.createTextNode(array[i]); 
  th.appendChild(text);
  tr.appendChild(th);
}
table.appendChild(tr);
console.log(table)

    arr1.forEach((arun)=>{
  var tr = document.createElement('tr');



  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  var text1 = document.createElement('img');
  text1.src=arun.img;
  td1.appendChild(text1);

  text1.setAttribute('class','image' );
  var text2 = document.createTextNode(arun.name);
  var text3 = document.createTextNode(arun.number);
  var text4 = document.createTextNode(arun.batch);
  var text5 = document.createTextNode(arun.git);
  var text6 = document.createTextNode(arun.referby);
  var text7 = document.createTextNode(arun.location);

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
})
document.body.appendChild(table);




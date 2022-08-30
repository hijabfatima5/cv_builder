// adding new projects

function addNewPrField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('prField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder', 'Enter here');

    let projOb=document.getElementById('proj');
    let prAddButtonOb=document.getElementById('prAddButton');

    projOb.insertBefore(newNode, prAddButtonOb);


}

// adding new work experience

function addNewWeField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb=document.getElementById('we');
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

// adding academic qualification

function addNewAqField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder', 'Enter here');

    let aqOb=document.getElementById('aq');
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// CV generation --> take values from form field and insert into template field

function generateCV(){
    //console.log("generating cv")
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML= nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    
    //contact
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
    
    //important links
    document.getElementById('lnT').innerHTML=document.getElementById('lnField').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('portT').innerHTML=document.getElementById('portField').value;
    
    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //projects
    let prs= document.getElementsByClassName('prField')

    let strs=''
    for(let e of prs)
    {
        strs += `<li> ${e.value} </li>`;
    }
    document.getElementById('prT').innerHTML= strs;

    //work experience
    let wes= document.getElementsByClassName('weField')

    let str=''
    for(let e of wes)
    {
        str += `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML= str;

   //academic qualification
   let aqs= document.getElementsByClassName('aqField')

   let str1=''
   for(let e of aqs)
   {
       str1 += `<li> ${e.value} </li>`;
   }
   document.getElementById('aqT').innerHTML= str1;

   //code for setting photo
   let file = document.getElementById("imgField").files[0];
   console.log(file);

   //reader --> reading content from file and then setting photo
   let reader = new FileReader();
   reader.readAsDataURL(file);

   console.log(reader.result);

   //setting image to template
   
   reader.onloadend = function(){
   document.getElementById("imgT").src = reader.result
   }


   document.getElementById('cv-form').style.display="none"
   document.getElementById('cv-template').style.display="block"


}

//print cv

function printCV(){
    window.print();
}
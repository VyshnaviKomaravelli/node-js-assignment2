interface Student1{
    
    Name:String;
    id:Number;
    Dept:String;
    Percentage:Number;
}
 function display(d:Student1[])
 {
     var val=1;
    var myTableDiv = document.getElementById("res");
    var node6 = document.createElement("UL");
    //var node = document.createElement("LI");
    for(var std2 of d)
    {
        var node = document.createElement("UL");
        var node1 = document.createElement("LI");
        var node2 = document.createElement("LI");
        var node3 = document.createElement("LI");
        node.appendChild(document.createTextNode((val++)+".  "+std2.Name.toString().toLocaleUpperCase()));
        node.appendChild(node1);
        node.appendChild(node2);
        node.appendChild(node3);
    node1.appendChild(document.createTextNode(std2.id.toString()));
    node2.appendChild(document.createTextNode(std2.Dept.toString().toLowerCase()));
    node3.appendChild(document.createTextNode(std2.Percentage.toString()));
    myTableDiv.appendChild(node);
    }
    myTableDiv.appendChild(node6);
    
  
 }
 
 var u:Student1[] =
[
    {Name:"Mani",id:10,Dept:"CSE",Percentage:85},
    {Name:"supriya",id:20,Dept:"EEE",Percentage:67},
    {Name:"sreeshma",id:30,Dept:"IT",Percentage:89},
    {Name:"himaja",id:40,Dept:"ECE",Percentage:75},
    {Name:"jyothi",id:50,Dept:"MECH",Percentage:79},
    {Name:"sindhu",id:60,Dept:"IT",Percentage:90}
    
];

     
  display(u)

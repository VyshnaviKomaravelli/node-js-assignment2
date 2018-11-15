function display(d) {
    var val = 1;
    var myTableDiv = document.getElementById("res");
    var node6 = document.createElement("UL");
    //var node = document.createElement("LI");
    for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
        var std2 = d_1[_i];
        var node = document.createElement("UL");
        var node1 = document.createElement("LI");
        var node2 = document.createElement("LI");
        var node3 = document.createElement("LI");
        node.appendChild(document.createTextNode((val++) + ".  " + std2.Name.toString().toLocaleUpperCase()));
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
var u = [
    { Name: "Mani", id: 10, Dept: "CSE", Percentage: 85 },
    { Name: "supriya", id: 20, Dept: "EEE", Percentage: 67 },
    { Name: "sreeshma", id: 30, Dept: "IT", Percentage: 89 },
    { Name: "himaja", id: 40, Dept: "ECE", Percentage: 75 },
    { Name: "jyothi", id: 50, Dept: "MECH", Percentage: 79 },
    { Name: "sindhu", id: 60, Dept: "IT", Percentage: 90 }
];
display(u);

function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ul><li>Represent HTML file as an object so that Javascript can easily access </li><li>Represented in a tree structure where the &lt;html&gt; tag is the root</li></ul>";
}

function answer_3() {
  document.getElementsByClassName("q34-answer")[0].innerHTML = "<ul><li>Parent node - A node directly above a node </li><li>Child nodes - Nodes one level directly below</li><li>Sibling nodes - Nodes at the same level</li><li>Descendant nodes - A set of nodes any number of levels below another node</li><li>Ancestor nodes - A set of nodes above a node in a tree</li></ul>";
}

function answer_4() {
  document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById() - Returns an element with a given ID_NAME<strong>(One)</strong> </li><li>document.getElementsByClassName() - Get a list of elements based on the class name<strong>(Many)</strong></li><li>document.getElementsByName() - Get a list of elements based on the name<strong>(Many)</strong></li><li>document.getElementsByTagName() - Get a list of elements with the input tag name<strong>(Many)</strong></li></ul>";
}

/*Answer5*/
$('a').click(function(){$(this).text("Answer5")});

/*Answer6*/
$('.item').click(function(){$(this).attr('style', 'font-size : 3em')});

/*Answer7*/
$('div.demo').dblclick(function(){$(this).attr('style', 'color : blue')});

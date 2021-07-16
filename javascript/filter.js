function myFunction() {
    var input, filter, ul, li, a, x, txtValue;
    input = document.getElementById('myId');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName('li');

    for (x=0; x<li.length; x++) {
        a = li[x].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[x].style.display = "";
        } else {
            li[x].style.display = "none";
        }
    }
}

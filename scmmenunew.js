    var colHome = 5;
    var colAway = 7;
    var colSem = 0;
    var colPalm = 2;
    var colSaison = 0;



    function DateModif() {
        NomMois = new Tableau(12)
        NomMois[1] = "janvier"
        NomMois[2] = "février"
        NomMois[3] = "mars"
        NomMois[4] = "avril"
        NomMois[5] = "mai"
        NomMois[6] = "juin"
        NomMois[7] = "juillet"
        NomMois[8] = "août"
        NomMois[9] = "septembre"
        NomMois[10] = "octobre"
        NomMois[11] = "novembre"
        NomMois[12] = "décembre"
        mDate = new Date(document.lastModified)
        var dayNames = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
        var Mois = NomMois[mDate.getMonth() + 1]
        var MoisNum = mDate.getMonth() + 1;
        var Annee = mDate.getYear()

        //return dayNames[mDate.getDay()] +" " +mDate.getDate()+" "+Mois+" "+mDate.getFullYear()
        return dayNames[mDate.getDay()] + " " + mDate.getDate() + "/" + MoisNum + "/" + mDate.getFullYear()
    }

 function FilterTeam(source,col1, col2) {
      var filter;
      filter = source.textContent || source.innerText;
      FilterTreat(filter,col1, col2);
}

  function FilterTreat(filter,col1, col2) {
        var table, tr, td, i, txtValue, th;
        table = document.getElementById("Calendrier");
        if (col1 == colSem) {
            document.getElementById("SemNbr").innerHTML = 'Semaine ' + filter;
            document.getElementById("SemNbr").style.display = "";
            document.getElementById("SemInit").style.display = "none";
        }
        else {
            document.getElementById("SemInit").style.display = "";
            document.getElementById("SemNbr").style.display = "none";       
        }
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[col1];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue == filter) {
                  tr[i].style.display = "";
              } else {
                  td = tr[i].getElementsByTagName("td")[col2];
                  txtValue = td.textContent || td.innerText;
                  if (txtValue == filter) {
                      tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
              }
          }
      }
  }
    function UnfilterTable() {
        var table, tr, td, i, txtValue,th ;
        document.getElementById("SemInit").style.display = "";
        document.getElementById("SemNbr").style.display = "none";
        
      table = document.getElementById("Calendrier");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            tr[i].style.display = "";
          }
      }
  }

function DropDownClose() {
    var dropdowns = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
       
        var dropdownContent = dropdowns[i].nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            dropdowns[i].classList.toggle("active");
        } 
    }

}


function DropDownAction(dropdown) {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

    dropdown.classList.toggle("active");
    var dropdownContent = dropdown.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }

}

function includeHTMLbyname(attributename) {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(attributename);
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute(attributename);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    DropDownClose();
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}





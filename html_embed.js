function EmbedHTML() {
  // Loop through elements
  var aElements = document.getElementsByTagName("*");
  
  for (var iElement = 0; iElement < aElements.length; iElement++) {
    var pElement = aElements[iElement];
    
    // Search for elements with the right atrribute
    var pFile = pElement.getAttribute("embed-html");
    
    if (pFile) {
      // Make an HTTP request using specified file name
      var pRequest = new XMLHttpRequest();
      pRequest.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            pElement.innerHTML = this.responseText;
          }
          
          if (this.status == 404) {
            pElement.innerHTML = "Embeded page not found.";
          }
          
          // Remove the attribute and embed again
          pElement.removeAttribute("embed-html");
          EmbedHTML();
        }
      }
      pRequest.open("GET", pFile, true);
      pRequest.send();
      
      return;
    }
  }
};

EmbedHTML();
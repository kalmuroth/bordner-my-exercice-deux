const selectMap = document.querySelector("object");
console.log(selectMap)
const selectLegend = document.querySelector("object.legend");
console.log(selectLegend)
const selectPaths = selectMap.querySelector("svg").contentDocument;

selectPaths.forEach(function (path) {
  path.addEventListener(
    "mouseenter",
    function (e){
      if (e.target.style.fill !== "red"){
        e.target.style.fill = "blue";

        const landName = e.target.id;
        selectLegend.textContent = landName;
      }
      false
    }
  );
  
  path.EventListener(
    "mouseout",
    function (e){
      if (e.target.style.fill !== "blue"){
        e.target.style.fill = "grey";

        const landName = e.target.id;
        selectLegend.textContent = landName;
      }
      false
    }
  );
})
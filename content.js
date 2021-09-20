function SnapShotDOM(target){
    var data = {};

    //use jquery or getComputedStyle|style.overflow
    data.overflow = target.style.overflow;
    data.width = target.style.width;
    data.height = target.style.height;
    //data.maxWidth = /*get maxWidth property*/;
    //data.maxHeight = /*get maxHeight  property*/;

    target.style.overflow = "visible !important";
    target.style.height = target.scrollHeight + "px";
    target.style.width = target.scrollWidth + "px";
    target.parentElement.style.borderColor = "yellow";

    html2canvas(target).then(function(canvas) {
            target.style.overflow = data.overflow;
            target.style.width = data.width;
            target.style.height = data.height;
            //target.style.maxWidth = data.maxWidth;
            //target.style.maxHeight = data.maxHeight;
            target.parentElement.style.borderColor = "green";
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = document.location.pathname.split("/").at(-1) + ".png";
            a.click();
        }
    );
}



document.addEventListener("dblclick", function(event){
    let element = event.target.closest("table");
    if (typeof(element) != 'undefined' && element != null){
        SnapShotDOM(element);
    };
    
}, true);



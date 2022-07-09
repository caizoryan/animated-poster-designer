
function inputAction(obj){
    obj.value = obj.element.val()
    currentElement.css(obj.property, obj.value+obj.unit)
}

function changeValues(){
    tracking.element.prop("value", parseInt(currentElement.css("letter-spacing")))
    fontSize.element.prop("value", parseInt(currentElement.css("font-size")))
    weight.element.prop("value", parseInt(currentElement.css("font-weight"))) 
    up.element.prop("value", parseInt(currentElement.css("top")))    
    left.element.prop("value", parseInt(currentElement.css("left")))    
}

function collapseAll(){
    $('.typography').css("display", "none");
    typographyCollapse.text("OPEN")
    $('.transform').css("display", "none");
    transformCollapse.text("OPEN")
}


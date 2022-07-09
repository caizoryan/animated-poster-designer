var newText = 0;
var numberOfObjects = 15;
var alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn']
var rArray = []

//UI elements
const newTextArray = [$(".newText1"), $(".newText2"), $(".newText3")]
const typographyCollapse = $(".typographyCollapse");
const transformCollapse = $(".transformCollapse");
const textCollapse = $(".textCollapse")
const svgEntry = $(".svgEntry")

//typography 
const tracking = {
    element : $(".tracking"),
    property : "letter-spacing",
    value : 0,
    unit : "px",
}

const fontSize = {
    element : $(".fontSize"),
    property : "font-size",
    value : 0,
    unit : "px",
}

const weight = {
    element : $(".weight"),
    property : "font-weight",
    value : 0,
    unit : "",
}

//transforms

const up = {
    element : $(".top"),
    property : "top",
    value : 0,
    unit : "px",
}

const left = {
    element : $(".left"),
    property : "left",
    value : 0,
    unit : "px",
}

//text

const addText  = $(".addText")

//Canvas elements

const head = $(".head")
const subHead = $(".subHead")

//current element

var currentElement = head

//collapse–—need to find a better way to do this

typographyCollapse.click(function(){
    if(typographyCollapse.text() == "COLLAPSE"){
        $('.typography').css("display", "none");
        typographyCollapse.text("OPEN")
    }else if(typographyCollapse.text()=="OPEN"){
        $('.typography').css("display", "flex");
        typographyCollapse.text("COLLAPSE")
    }
    
})

transformCollapse.click(function(){
    console.log(transformCollapse.text())
    if(transformCollapse.text() == "COLLAPSE"){
        $('.transform').css("display", "none");
        transformCollapse.text("OPEN")
    }else{
        $('.transform').css("display", "flex");
        transformCollapse.text("COLLAPSE")
    }
    
})

textCollapse.click(function(){
    console.log(textCollapse.text())
    if(textCollapse.text() == "COLLAPSE"){
        $('.textCollapsable').css("display", "none");
        textCollapse.text("OPEN")
    }else{
        $('.textCollapsable').css("display", "flex");
        textCollapse.text("COLLAPSE")
    }
    
})

//current element selector

const container = $('.text');
container.focus(function(e) {
    if(e.target.classList.contains("head")){
        currentElement = head
        changeValues()    
    }if(e.target.classList.contains("subHead")){
        currentElement = subHead
        changeValues()    
    }if(e.target.classList.contains("newText1")){
        currentElement = newTextArray[0]
        changeValues() 
    }if(e.target.classList.contains("newText2")){
        currentElement = newTextArray[1]
        changeValues() 
    }if(e.target.classList.contains("newText3")){
        currentElement = newTextArray[2]
        changeValues() 
    }

});

//input trigger

tracking.element.change(function(){
    inputAction(tracking)
})

fontSize.element.change(function(){
    inputAction(fontSize)
})

weight.element.change(function(){
    inputAction(weight)
})

up.element.change(function(){
    inputAction(up)
})

left.element.change(function(){
    inputAction(left)
})

//button triggers

addText.click(function(){
    
    newTextArray[newText].css("display", "block")
    newTextArray[newText].css("top", (Math.random()*200)+400)
    newText++
    if(newText==3){
        addText.prop("disabled", "true")
        addText.text("Limit Reached")
        addText.css("text-transform", "uppercase")
    }
})

//run on load
//collapseAll();
changeValues();

//animations——need to find a better way to do this


$(".animate").click(function(){
    if(typeof interval !== 'undefined'){
        clearInterval(interval)
        console.log("ok")

        for(let i = 0; i<rArray.length; i++){
            $(`.${rArray[i].className}`).remove()
        }
        
    }

    let svg = $('.svgEntry').val()
    numberOfObjects = $(".numberOfObjects").val()
    for(let i = 0; i<numberOfObjects; i++){
        let str = `<div id="r" class="${alphabetArray[i]}">${svg}</div>`
        console.log(i)

        $('.canvas').append(str)
        setTimeout(function(){
        $("#r").css("opacity", "1")
        rArray = $('[id=r]');
        }, 3000)
        }   
        interval = setInterval(function(){
        
        // var classList = currentElement.attr("class");
        // var classArr = classList.split(/\s+/);
        // flicker(`.${classArr[1]}`)
        for(let i = 0; i<rArray.length; i++){
            $(`.${rArray[i].className}`).css("top", Math.random()*700)
            $(`.${rArray[i].className}`).css("left", Math.random()*500)
        }
        flicker("#r") 
    }, 3000) 
})


    





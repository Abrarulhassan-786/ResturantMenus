//--------Create constructor for Menus of Sides food Detail------------
function sidesMenu (french_Fires,sweet_Potato,collards_Green,mashed_Potatos,baked_beans,pasta_Salad,baked_Roll){
    this.french_Fires = french_Fires;
    this.sweet_Potato = sweet_Potato;
    this.collards_Green = collards_Green;
    this.mashed_Potatos = mashed_Potatos;
    this.baked_beans = baked_beans;
    this.pasta_Salad = pasta_Salad;
    this.pasta_Salad = baked_Roll;
}

//--------Create constructor for Menus of Sides food Detail------------
function drinks (sata_Water,mineral_Water,flavoured_Milk,fresh_Juice,tea,leaf_Tea){
    this.sata_Water = sata_Water;
    this.mineral_Water = mineral_Water;
    this.flavoured_Milk = flavoured_Milk;
    this.fresh_Juice = fresh_Juice;
    this.tea =  tea;
    this.leaf_Tea = leaf_Tea;
}


var side = new sidesMenu(3.4,2.4,3.5,2,5,6,3)
var drinks = new drinks(4.4,3.4,5.5,3,4,4,5)

// var divOuter = document.getElementById("main");
// var divIneer = document.getElementById("sideMenuDeatil");
var olsides = document.getElementById("sideMenu");

function callFunction(){
    var olListData = document.getElementById("olList");
    for(var key in side){
        var liCreate = document.createElement("li");
        var liText = document.createTextNode(key.toUpperCase()+"------->"+side[key])
        // console.log(liCreate.appendChild(liText));
        liCreate.appendChild(liText);
        olListData.appendChild(liCreate);
    }
    var olListdrValue = document.getElementById("olListdrink");
    for(var key in drinks){
        var liCreate = document.createElement("li");
        var liText = document.createTextNode(key.toUpperCase()+"------->"+drinks[key])
        // console.log(liCreate.appendChild(liText));
        liCreate.appendChild(liText);
        olListdrValue.appendChild(liCreate);
    }
}
callFunction();
// for(var key in side){
//     var liCreate = document.createElement("li");
//     var liText = document.createTextNode(key+"------>"+side[key])
//     liCreate.appendChild(liText);
//     olsides.append(liCreate);
// }
// var oldrinks = document.getElementById("sideMenu");
// var drinkMenu = document.getElementById("drinksMenuDeatil");
// drinkMenu.appendChild(oldrinks);
// for(var key in drinks){
//     var liCreate = document.createElement("li");
//     var liText = document.createTextNode(key+"------>"+drinks[key])
//     liCreate.appendChild(liText);
//     oldrinks.append(liCreate);
// }
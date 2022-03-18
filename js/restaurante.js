//////////////////////
//Restaurante Menu
//////////////////////
var starters = [ 
		 {  type : "separator" ,  description : "Elige una o varias pizza de tu gusto"  },
		 {  type : "food" ,  name : "Pizza de 3 quesos" ,  description : "Tomato sauce, mozzarella, organic oregano" ,  price : 18.50  },
		 {  type : "food" ,  name : "Pizza de boloñesa" ,  description : "Tomato sauce, mozzarella, organic oregano" ,  price : 6.00  }, 

] ;
var mains = [ 
		 {  type : "separator" ,  description : "Crea una pizza con tus ingredientes preferidos"  },
		 {  type : "food" ,  name : "Mi pizza combinacion 1" ,  description : "Tomato sauce, mozzarella, organic oregano" ,  price : 0.00  } 

];

var desserts = [

]

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");


let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");


startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
      creartabla();
	//populateItems(desserts);
      //Colocar acá funcion para crear tabla e info del reporte con html
});


function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
	}
}
function creartabla() {
      var menu = $("#menuitems");
	var idorigen = "tbltabla";
	menu.html("<table id='tbltabla' class='table table-striped' style='width:100%' ></table>");

      var tabladatos = [
		{
			npedido: "1",
			fecha: '2022-03-17 16:24:33',
		      total: 26.50
		},
		{
			npedido: "2",
			fecha: '2022-03-14 16:24:33',
		      total: 26.50
		},
		{
			npedido: "3",
			fecha: '2022-03-15 16:24:33',
		      total: 26.50
		},
	];
      
      var oTblReport = $("#" + idorigen);
      oTblReport.DataTable ({
        "data" : tabladatos,
        "columns" : [
            { "data" : "npedido" },
            { "data" : "fecha" },
            { "data" : "total" }
        ]
    });
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);


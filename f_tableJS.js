function create_table(getPart, tableID){
	var thePartToFill = getPart;
	var theTableID = tableID;
	
	var theTable = document.createElement("TABLE");
	theTable.setAttribute("id", theTableID);
	theTable.setAttribute("class", "f_tables_table");
	theTable.style.textAlign = "center";
	thePartToFill.appendChild(theTable);
}


function fill_table(tableID, tableHeaderValue, tablebodyValue){
		
		var the_ELEMENT_VAR = "";
		var counterForTableHeight = 0;
		var theTablePart;
		var theLatestID = "";
		var tableWidth = 0;
		var tableHeaderGetPart = "";
		var tableBodyGetPart = "";
		var theTableIdGet = "";
		
		var theCellName = [];
		
		theTableIdGet = tableID;
		
		var theTableHeaderContent = tableHeaderValue;
		var theTableBodyContent = tablebodyValue;
		
		var theTable = document.getElementById(theTableIdGet);
		//theTable.setAttribute("id", "tableJSTable");
		//document.body.appendChild(theTable);
		
		var theTableHeader = document.createElement("thead");
		//theTableHeader.setAttribute("id", "theadJStable");
		//document.getElementById("tableJSTable").appendChild(theTableHeader);
		theTable.appendChild(theTableHeader);
		
		theTablePart = document.createElement("tr");
		//theLatestID = "h" + String(counterForTableHeight);
		//theTablePart.setAttribute("id", theLatestID);
		//document.getElementById("theadJStable").appendChild(theTablePart);
		theTableHeader.appendChild(theTablePart);
		
		
		var tableHeaderLength = theTableHeaderContent.length;
		////
		theTable.value = String(tableHeaderLength);
		////
		tableHeaderLength = Number(tableHeaderLength);
		
		
		var tableBodyValueLength = theTableBodyContent.length;
		tableBodyValueLength = Number(tableBodyValueLength);
		
		
		
		var counter1Header = 0;
		counter1Header = Number(counter1Header);
		
		//console.log(theTableHeaderContent[1])
		
		
		var counterForTheTableWidth = 0;
		
		
		
		
		while(counter1Header<tableHeaderLength){
			
			counterForTheTableWidth = counterForTheTableWidth + 1;
			
			tableHeaderGetPart = theTableHeaderContent[counter1Header];
			theLatestID = "h" + String(counterForTableHeight);
			
			the_ELEMENT_VAR = document.createElement("th");
			the_ELEMENT_VAR.setAttribute("class", "f_tables_headerOfTable");
			the_ELEMENT_VAR.textContent = tableHeaderGetPart;
			the_ELEMENT_VAR.style.border = "2px solid #e10000";
			the_ELEMENT_VAR.style.margin = "0";
			the_ELEMENT_VAR.style.width = "150px";
			the_ELEMENT_VAR.style.height = "48px";
			the_ELEMENT_VAR.style.backgroundColor = "#e10000";
			the_ELEMENT_VAR.style.color = "#fff";
			theTablePart.appendChild(the_ELEMENT_VAR)
			
			
			counter1Header = counter1Header + 1;
			
			
		}
		
		//echo '<tr>';
		
		
		//reien
		counterForTableHeight = Number(counterForTableHeight);
		counterForTableHeight = counterForTableHeight + 1;
		
		theTablePart = document.createElement("tr");
		//theLatestID = "h" + String(counterForTableHeight);
		//theTablePart.setAttribute("id", theLatestID);
		theTable.appendChild(theTablePart);
		
		
		counterForTheTableWidth = 0;
		
		var countUpForBodySemikolonsNumber = 0;
		
		while(countUpForBodySemikolonsNumber<tableBodyValueLength){
			
			tableBodyGetPart = theTableBodyContent[countUpForBodySemikolonsNumber];
			
			counterForTheTableWidth = counterForTheTableWidth + 1;
			
			the_ELEMENT_VAR = document.createElement("td");
			the_ELEMENT_VAR.setAttribute("class", "f_tables_bodyOfTable");
			the_ELEMENT_VAR.textContent = tableBodyGetPart;
			the_ELEMENT_VAR.style.border = "2px solid #000";
			the_ELEMENT_VAR.style.margin = "0";
			the_ELEMENT_VAR.style.width = "150px";
			the_ELEMENT_VAR.style.height = "48px";
			the_ELEMENT_VAR.style.backgroundColor = "#000";
			the_ELEMENT_VAR.style.color = "#fff";
			theTablePart.appendChild(the_ELEMENT_VAR)
			
			
			
			if(counterForTheTableWidth>=tableHeaderLength){
				
				counterForTableHeight = Number(counterForTableHeight);
				counterForTableHeight = counterForTableHeight + 1;
				
				theTablePart = document.createElement("tr");
				//theLatestID = "h" + String(counterForTableHeight);
				//theTablePart.setAttribute("id", theLatestID);
				theTable.appendChild(theTablePart);
				
				counterForTheTableWidth = 0;
			}
			
			countUpForBodySemikolonsNumber = countUpForBodySemikolonsNumber + 1;
			
		}
				
					
		if(counterForTheTableWidth<tableHeaderLength && counterForTheTableWidth!=0){
			
			//console.log("in not enough")
			
			counterForTheTableWidth = Number(counterForTheTableWidth);
					
			while(counterForTheTableWidth<tableHeaderLength){
				the_ELEMENT_VAR = document.createElement("td");
				the_ELEMENT_VAR.setAttribute("class", "f_tables_bodyOfTable");
				the_ELEMENT_VAR.textContent = "";
				the_ELEMENT_VAR.style.border = "2px solid #000";
				the_ELEMENT_VAR.style.margin = "0";
				the_ELEMENT_VAR.style.width = "150px";
				the_ELEMENT_VAR.style.height = "48px";
				the_ELEMENT_VAR.style.backgroundColor = "#000";
				the_ELEMENT_VAR.style.color = "#fff";
				theTablePart.appendChild(the_ELEMENT_VAR);
				
				counterForTheTableWidth = counterForTheTableWidth + 1;
			}	
		}
			
}


function fill_table_with_cell_id(tableID, tableHeaderValue, tablebodyValue){
		
		var the_ELEMENT_VAR = "";
		var counterForTableHeight = 0;
		var theTablePart;
		var theLatestID = "";
		var tableWidth = 0;
		var tableHeaderGetPart = "";
		var tableBodyGetPart = "";
		var theTableIdGet = "";
		
		var theCellName = [];
		
		theTableIdGet = tableID;
		
		var theTableHeaderContent = tableHeaderValue;
		var theTableBodyContent = tablebodyValue;
		
		var theTable = document.getElementById(theTableIdGet);
		//theTable.setAttribute("id", "tableJSTable");
		//document.body.appendChild(theTable);
		
		var theTableHeader = document.createElement("thead");
		//theTableHeader.setAttribute("id", "theadJStable");
		//document.getElementById("tableJSTable").appendChild(theTableHeader);
		theTable.appendChild(theTableHeader);
		
		theTablePart = document.createElement("tr");
		//theLatestID = "h" + String(counterForTableHeight);
		//theTablePart.setAttribute("id", theLatestID);
		//document.getElementById("theadJStable").appendChild(theTablePart);
		theTableHeader.appendChild(theTablePart);
		
		
		var tableHeaderLength = theTableHeaderContent.length;
		////
		theTable.value = String(tableHeaderLength);
		//console.log(theTable.value)
		////
		tableHeaderLength = Number(tableHeaderLength);
		
		
		var tableBodyValueLength = theTableBodyContent.length;
		tableBodyValueLength = Number(tableBodyValueLength);
		
		
		
		var counter1Header = 0;
		counter1Header = Number(counter1Header);
		
		//console.log(theTableHeaderContent[1])
		
		
		var counterForTheTableWidth = 0;
		var counterForTheTableHeightForCellID = 0;
		
		counterForTheTableHeightForCellID = 1;
		
		
		
		while(counter1Header<tableHeaderLength){
			
			counterForTheTableWidth = counterForTheTableWidth + 1;
			
			tableHeaderGetPart = theTableHeaderContent[counter1Header];
			theLatestID = "h" + String(counterForTableHeight);
			
			the_ELEMENT_VAR = document.createElement("th");
			the_ELEMENT_VAR.setAttribute("class", "f_tables_headerOfTable");
			
			theCellName = [counterForTheTableHeightForCellID, counterForTheTableWidth];
			
			theCellName = String(theCellName);
			theCellName = theTableIdGet + "_" + theCellName;
			
			the_ELEMENT_VAR.setAttribute("id", theCellName);
			the_ELEMENT_VAR.textContent = tableHeaderGetPart;
			the_ELEMENT_VAR.style.border = "2px solid #e10000";
			the_ELEMENT_VAR.style.margin = "0";
			the_ELEMENT_VAR.style.width = "150px";
			the_ELEMENT_VAR.style.height = "48px";
			the_ELEMENT_VAR.style.backgroundColor = "#e10000";
			the_ELEMENT_VAR.style.color = "#fff";
			theTablePart.appendChild(the_ELEMENT_VAR)
			
			
			counter1Header = counter1Header + 1;
			
			
		}
		
		//echo '<tr>';
		
		
		//reien
		counterForTableHeight = Number(counterForTableHeight);
		counterForTableHeight = counterForTableHeight + 1;
		
		counterForTheTableHeightForCellID = counterForTheTableHeightForCellID + 1;
		
		theTablePart = document.createElement("tr");
		//theLatestID = "h" + String(counterForTableHeight);
		//theTablePart.setAttribute("id", theLatestID);
		theTable.appendChild(theTablePart);
		
		
		counterForTheTableWidth = 0;
		
		var countUpForBodySemikolonsNumber = 0;
		
		while(countUpForBodySemikolonsNumber<tableBodyValueLength){
			
			tableBodyGetPart = theTableBodyContent[countUpForBodySemikolonsNumber];
			
			counterForTheTableWidth = counterForTheTableWidth + 1;
			
			the_ELEMENT_VAR = document.createElement("td");
			the_ELEMENT_VAR.setAttribute("class", "f_tables_bodyOfTable");
			
			theCellName = [counterForTheTableHeightForCellID, counterForTheTableWidth];
			
			theCellName = String(theCellName);
			theCellName = theTableIdGet + "_" + theCellName;
			
			the_ELEMENT_VAR.setAttribute("id", theCellName);
			the_ELEMENT_VAR.textContent = tableBodyGetPart;
			
			the_ELEMENT_VAR.style.border = "2px solid #000";
			the_ELEMENT_VAR.style.margin = "0";
			the_ELEMENT_VAR.style.width = "150px";
			the_ELEMENT_VAR.style.height = "48px";
			the_ELEMENT_VAR.style.backgroundColor = "#000";
			the_ELEMENT_VAR.style.color = "#fff";
			
			theTablePart.appendChild(the_ELEMENT_VAR)
			
			
			
			if(counterForTheTableWidth>=tableHeaderLength){
				
				counterForTableHeight = Number(counterForTableHeight);
				counterForTableHeight = counterForTableHeight + 1;
				
				counterForTheTableHeightForCellID = counterForTheTableHeightForCellID + 1;
				
				theTablePart = document.createElement("tr");
				//theLatestID = "h" + String(counterForTableHeight);
				//theTablePart.setAttribute("id", theLatestID);
				theTable.appendChild(theTablePart);
				
				counterForTheTableWidth = 0;
			}
			
			countUpForBodySemikolonsNumber = countUpForBodySemikolonsNumber + 1;
			
		}
				
					
		if(counterForTheTableWidth<tableHeaderLength && counterForTheTableWidth!=0){
			
			//console.log("in not enough")
			
			counterForTheTableWidth = Number(counterForTheTableWidth);
					
			while(counterForTheTableWidth<tableHeaderLength){
				the_ELEMENT_VAR = document.createElement("td");
				the_ELEMENT_VAR.setAttribute("class", "f_tables_bodyOfTable");
				the_ELEMENT_VAR.textContent = "";
				the_ELEMENT_VAR.style.border = "2px solid #000";
				the_ELEMENT_VAR.style.margin = "0";
				the_ELEMENT_VAR.style.width = "150px";
				the_ELEMENT_VAR.style.height = "48px";
				the_ELEMENT_VAR.style.backgroundColor = "#000";
				the_ELEMENT_VAR.style.color = "#fff";
				theTablePart.appendChild(the_ELEMENT_VAR);
				
				counterForTheTableWidth = counterForTheTableWidth + 1;
			}	
		}
			
}

function header_color_table(tableID, headerBackgroundColor, headerFontColor){
	
	var counterForAllElements = 0;
	var theTable = document.getElementById(tableID);
	
	var theBackColor = headerBackgroundColor;
	var theFontColor = headerFontColor;
	
	theBackColor = String(theBackColor);
	theFontColor = String(theFontColor);
		
	var theElements = theTable.getElementsByClassName("f_tables_headerOfTable");
	
	//console.log(document.getElementById("testTagID2"));
	//theArrayOfTheClasses = theElements[0];
	//console.log(theElements.length)
	
	var theLength = theElements.length;
	
	while(counterForAllElements<theLength){
		
		theArrayOfTheClasses = theElements[counterForAllElements];
		
		theArrayOfTheClasses.style.backgroundColor = theBackColor;
		theArrayOfTheClasses.style.borderColor = theBackColor;
		theArrayOfTheClasses.style.color = theFontColor;
		
		counterForAllElements = counterForAllElements + 1;
	}
}

function body_color_table(tableID, bodyBackgroundColor, bodyFontColor){
	
	var counterForAllElements = 0;
	var theTable = document.getElementById(tableID);
	
	var theBackColor = bodyBackgroundColor;
	var theFontColor = bodyFontColor;
	
	theBackColor = String(theBackColor);
	theFontColor = String(theFontColor);
		
	var theElements = theTable.getElementsByClassName("f_tables_bodyOfTable");
	
	//console.log(document.getElementById("testTagID2"));
	//theArrayOfTheClasses = theElements[0];
	//console.log(theElements.length)
	
	var theLength = theElements.length;
	
	while(counterForAllElements<theLength){
		
		theArrayOfTheClasses = theElements[counterForAllElements];
		
		theArrayOfTheClasses.style.backgroundColor = theBackColor;
		theArrayOfTheClasses.style.borderColor = theBackColor;
		theArrayOfTheClasses.style.color = theFontColor;
		
		counterForAllElements = counterForAllElements + 1;
	}
}

function extent_of_table(tableID, tableWidth, tableHeight, tableFontSize){
	
	var counterForAllElements = 0;
	var theTable = document.getElementById(tableID);
	
	var theTableWidth = tableWidth;
	var theTableHeight = tableHeight;
	var theTableFontSize = tableFontSize;
	
	theTableWidth = String(tableWidth);
	theTableHeight = String(tableHeight);
	theTableFontSize = String(theTableFontSize);
	
	var theElementsHeader = theTable.getElementsByClassName("f_tables_headerOfTable");
	var theElementsBody = theTable.getElementsByClassName("f_tables_bodyOfTable");
	
	
	//console.log(document.getElementById("testTagID2"));
	//theArrayOfTheClasses = theElements[0];
	//console.log(theElements.length)
	
	var theLengthHeader = theElementsHeader.length;
	var theLengthBody = theElementsBody.length;
	
	
	
	while(counterForAllElements<theLengthHeader){
		
		theArrayOfTheClasses = theElementsHeader[counterForAllElements];
		
		theArrayOfTheClasses.style.width = theTableWidth;
		theArrayOfTheClasses.style.height = theTableHeight;
		theArrayOfTheClasses.style.fontSize = theTableFontSize;
		
		counterForAllElements = counterForAllElements + 1;
	}
	
	theArrayOfTheClasses = [];
	counterForAllElements = 0;
	
	while(counterForAllElements<theLengthBody){
		
		theArrayOfTheClasses = theElementsBody[counterForAllElements];
		
		theArrayOfTheClasses.style.width = theTableWidth;
		theArrayOfTheClasses.style.height = theTableHeight;
		theArrayOfTheClasses.style.fontSize = theTableFontSize;
		
		counterForAllElements = counterForAllElements + 1;
	}
}

function get_cell_of_table(tableID, tableCell){
	
	var theTableCell = tableCell;
	var theTableIdGet = tableID;
	var theTableWidth = 0;
	var theCell = [];
	
	var theTable = document.getElementById(theTableIdGet);
	
	theTableWidth = theTable.value;
	theTableWidth = Number(theTableWidth);
	
	theCell = tableCell;
	
	theCell = String(theCell);
	
	theCell = theTableIdGet + "_" + theCell;
	
	return document.getElementById(theCell).textContent;
	
	
}

function transfer_cell_of_table(tableID, tableCell, endElementID){
	
	var theTableCell = tableCell;
	var theTableIdGet = tableID;
	var theTableWidth = 0;
	var theCell = [];
	
	var theTable = document.getElementById(theTableIdGet);
	
	
	var theEndElement = endElementID;
	
	theTableWidth = theTable.value;
	theTableWidth = Number(theTableWidth);
	
	theCell = tableCell;
	
	theCell = String(theCell);
	
	theCell = theTableIdGet + "_" + theCell;
	
	theEndElement.value = document.getElementById(theCell).textContent;
	
	
}

function destroy_table(tableID){
	document.getElementById(tableID).remove();
}

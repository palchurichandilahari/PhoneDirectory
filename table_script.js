function edit_row(no)
{
//  document.getElementById("edit_button"+no).style.display="none";
console.log('clicked',no)
document.getElementById("edit_button"+no).style.display = "None";
document.getElementById("save_button"+no).style.display="inline-block";

	
 var name=document.getElementById("name_row"+no);
 var number=document.getElementById("number_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var number_data=number.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 number.innerHTML="<input type='text' id='number_text"+no+"' value='"+number_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var number_val=document.getElementById("number_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("number_row"+no).innerHTML=number_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="inline-block";
 document.getElementById("save_button"+no).style.display="None";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_number=document.getElementById("new_number").value;
 var new_age=document.getElementById("new_age").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 console.log('valu',table_len)
var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='number_row"+table_len+"'>"+new_number+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit btn btn-primary' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save btn btn-success' style='display:none' onclick='save_row("+table_len+")'><input type='button' value='Delete' class='delete btn btn-danger' onclick='delete_row("+table_len+")'></td></tr>";
 document.getElementById("new_name").value="";
 document.getElementById("new_number").value="";
 document.getElementById("new_age").value="";


//  document.getElementById("edit_button"+no).style.display="None";
//  document.getElementById("save_button"+no).style.display="None";

}
   
Array_of_names=[];

function submit(){
var display_student_array=[];
for(var a=1;a<=4;a++) {
var hahahaha=document.getElementById("name_"+a).value;
console.log(hahahaha);
Array_of_names.push(hahahaha);

}


console.log(Array_of_names);
var length=Array_of_names.length;
 console.log(length);

 for(var b=0;b<length;b++) {
display_student_array.push("<h4>Name-"+Array_of_names[b]+"</h4>");
console.log(display_student_array);
 }
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_names_without_commas").innerHTML=remove_commas


document.getElementById("display").innerHTML=Array_of_names;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort() {
Array_of_names.sort();
console.log(Array_of_names);
var sorted_array=[];
var length=Array_of_names.length;
console.log(length);
for(var b=0;b<length;b++) {
sorted_array.push("<h4>Name-"+Array_of_names[b]+"</h4>");
console.log(sorted_array);
}
var remove_commas=sorted_array.join(" ");
console.log(remove_commas);
document.getElementById("display_names_without_commas").innerHTML=remove_commas
document.getElementById("display").innerHTML=sort;
}
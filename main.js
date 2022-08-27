var student_array = [];
function submit(){
    var display_array = [];
    for(var j=1;j<=4;j++)
    {
        var student_name=document.getElementById("name_of_the_student_"+j).value;
        student_array.push(student_name);
    }
    var length_array = student_array.length;
    for(var k=0;k<length_array;k++){
        display_array.push("<h4>NAME - "+ student_array[k]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    display_sorting_array = [];
    length_array = student_array.length;
    for(var k=0;k<length_array;k++){
        display_sorting_array.push("<h4> Name- "+student_array[k]+"</h4>");
    }
    var remove_commas = display_sorting_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
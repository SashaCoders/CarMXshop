let submite = document.getElementById('submite');



$("#submite").click(function () {
   let data = {
        id: $("#id").val,
        name:  $("#name").val,
        surname:  $("#surname").val,
        car:  $("#car").val,
        balance:  $("#balance").val
    }
    JSON.stringify(data);
});
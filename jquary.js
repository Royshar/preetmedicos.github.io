$(document).ready(function(){
    $("#myInput").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });
    });
})

document.addEventListener("DOMContentLoaded", () =>{
    const rows = document.querySelectorAll("tr[data-href]");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;
        });
    });
});
  




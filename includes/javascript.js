$( document ).ready(function() {
    $("#post").click(function () {
        $.post("http://localhost/DCS/calculator/service_calculator/index.php/",
            {func:"sum",num1:10,num2:15,num3:20},
            function( data ) {
                $(".result").append(data.retVal+" ");
                console.log( "Return data: " + data.retVal);
            });
    });
    $("#put").click(function (){
        var dataObj = {'func':'sum','num1':1,'num2':2,'num3':3,'num4':4};
        $.ajax({
            url: 'http://localhost/DCS/calculator/service_calculator/index.php/',
            data:dataObj,
            type: 'PUT',
            success : function(data){
                $(".result").append(data.retVal+" ");
                console.log("Return data: " + data.retVal);
            }
        });
    });
    $("#get").click(function (){
        $.get("http://localhost/DCS/calculator/service_calculator/index.php?num1=10&num2=20&num3=30&num4=40&func=sum",
            function(data){
                $(".result").append(data.retVal+" ");
                console.log("Return data: " + data.retVal);
            });
    });
});
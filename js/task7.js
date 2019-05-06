$('.button').on("click",function(){

    var input = $('input').val();
    if(!input){
        alert('Error enter some text');
        return; 
    }
    if((input)){
         $( "#task" ).append( '<p>' +input +'</p' );
        return;
    }
    

});

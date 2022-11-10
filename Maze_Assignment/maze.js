// $(document).ready('on', function(){
// deprecated
// });

$(function(){

    //mouse hover on top left wall
    $('.boundary')
        .on('mouseover', lose);

    $('#start').on('click', function(){
        $('.boundary').removeClass('youlose');
        $('#indicator').text('Game started...');
        $('.example').text(`0%`);
    });

    $('#end').on('mouseover', function(){
        if($('#indicator').text().indexOf('started') > 0){
            $('#indicator').text('You win! :) Click the "S" to begin again.');
            alert('You win! :)');
            $('.example').text(`100%`);
        }
    })

    let lastX = 0;
    let lastY = 0;
    let totalX = 0;
    let totalY = 0;

    $('#maze')
        .on('mouseleave', lose)
        .on('mousemove', function(e){

            if($('#indicator').text().indexOf('started') > 0){
                if(lastX === 0){
                    lastX = e.offsetX;
                    lastY = e.clientY;
                } 
                
                if (Math.abs(e.offsetX - lastX) > 5) {
                    totalX = totalX + e.offsetX - lastX;
                    lastX = e.offsetX;
                    lastY = e.clientY;
                } 
                
                if (Math.abs(lastY - e.clientY) > 5) {
                    totalY = totalY + Math.abs(lastY - e.clientY);
                    lastY = e.clientY;
                }
                percentage = (totalX + totalY) / 670 * 100;

                if(percentage > 100)
                    percentage = 100;

                $('.example').text(`${Math.round(percentage)}%`);
            }
        });

    function lose(){

        //avoid multiple popups and avoid popup after win when closing popup
        if($('#indicator').text().indexOf('started') > 0 && $('#indicator').text().indexOf('win') < 0){
            $('.boundary').addClass('youlose');
            $('#indicator').text('You failed :( .\nClick the "S" to begin again.');
            alert('Sorry, you lost :(');
        }
    }
});

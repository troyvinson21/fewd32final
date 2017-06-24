jQuery(document).ready(function() {


   
    jQuery(".allImages").isotope({
        itemSelector: '.fullImage',
        layoutMode: 'masonry'
    });


    jQuery(".fullImage").on('click',function(){
        // Remove the large class from all
        jQuery(".fullImage").removeClass("isoItemLarge");


        // Add the large class to the item clicked on
        jQuery(this).addClass("isoItemLarge");


        // Update the layout
        jQuery(".allImages").isotope();


    });

});


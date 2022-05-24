$(function(){
    $('#sortCat').click(function(){
        $('#sortCat .select-sorting-list').slideToggle(100);
        $('#sortCat .current i').toggleClass('active-select-sorting-icon');
    
    })
    $('#sortPage').click(function(){
        $('#sortPage .select-sorting-list').slideToggle(100);
        $('#sortPage .current i').toggleClass('active-select-sorting-icon');
    })

    let pageStyleIcons = $('.filter-list-icons .icn');
    [...pageStyleIcons].forEach(el=>{
      
        let dataId = el.getAttribute("data-id");
        
        let style = $("#"+dataId);
   
        console.log(el);

        el.addEventListener('click',function(){
         
            style.siblings('.row').removeClass('active-page-style');
            style.siblings('.row').addClass('d-none');
            style.addClass('active-page-style');

            let activeIcon = $('.active-icon');
            if(activeIcon){
                activeIcon.removeClass('active-icon');
            }
            $(this).addClass('active-icon');
           
        })
    })
})
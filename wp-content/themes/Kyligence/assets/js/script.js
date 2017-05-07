/*Stunning header carousel*/
(function($) {
    "use strict";
    $(document).ready(function() {

        // initialisation
        var pageNumber = 0;
        var cat = null;
        var keyword='';
        $("#ajax_join").html($("#LoadingImage").html());
        load_posts();

        $('body').on('click', '.cat', function() {
            var that = $(this);
            cat = that.data('cat');
            pageNumber = 0;
            load_posts_filtre('select');
        });
        $('body').on('click', '.load-more_join', function() {
            load_posts();
        });

        $('body').on('keyup', '#sjoin', function() {
            keyword = $(this).val();
            load_posts_filtre('search');

        });

        function load_posts(){
            pageNumber++;
            var str = '&cat='+cat+'&pageNumber=' + pageNumber +'&action=mon_action';
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajaxurl,
                data: str,
                success: function(data){
                    var $data = $(data);
                    if($data.length)
                    {
                        $("#ajax_join > li:nth-child(1)").hide();
                        $("#ajax_join").append($data);
                        if($("#ajax_join").find('.load').last().val()=='false')
                        {
                            $(".load-more_join").hide();
                        }else {
                            $(".load-more_join").show();
                        }
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                }

            });
            return false;
        }
        function load_posts_filtre(action){
            $("#ajax_join").html($("#LoadingImage").html());
            pageNumber++;
            if(action != 'search'){
                var str = '&cat=' + cat + '&pageNumber=' + pageNumber +'&action='+action+'';
            }else {
                var str = '&keyword=' + keyword + '&pageNumber=' + pageNumber +'&action='+action+'';
            }
            $.ajax({
                type: "POST",
                dataType: "html",
                url: ajaxurl,
                data: str,
                success: function(data){
                    var $data = $(data);
                    if($data.length)
                    {
                        $("#ajax_join").html($data);
                        if($("#ajax_join").find('.load').last().val()=='false')
                        {
                            $(".load-more_join").hide();
                        }else {
                            $(".load-more_join").show();
                        }
                    }
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
                }

            });
            return false;
        }
    });
})(jQuery);

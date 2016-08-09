/**
 * Created by lenovo on 2016/8/8.
 */
;$(function () {
    var sidebar=$('#sidebar'),
    	mask=$('.mask'),
		sidebar_trigger=$('#sidebar_trigger');

	function showSidebar() {
		mask.fadeIn();
		sidebar.css('right',0);
	}

	function hideSidebar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}

    sidebar_trigger.on('click',showSidebar);
    mask.on('click',hideSidebar);
});
var jq = jQuery.noConflict();

(function($){

	const breakpoint = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	};

	$.paginate = {
		init: function(elemID){
			var $elem = $(elemID);
			var item_count = $(elemID).find('.card').length;
			var item_max_show = 10;
			var current_items_count = item_max_show;

			// hide remaining elements
			$elem.find('.card:gt(' + (item_max_show - 1) + ')').hide();
			

		},
		createButtons: function(){

		}
	}

	$.table = {
		initDataTable: function(id, startIndex, endIndex) {
			var table = $(id).DataTable({
				"columnDefs": $.table.hideColumns(startIndex, endIndex),
				"order": [[1, 'asc']]
			});
			return table;
		},
		responsive: function() {
			
		},
		hideColumns: function(start, end) {
			var arr = [];
			for(var i = start; i <= end; i++){
				arr.push({
					"targets": [ i ],
					"visible": false
				});
			}
			arr.push({
				"targets": [ 0 ],
				"orderable": false
			});
			return arr;
		},
		format: function(d, th, n) {
			//console.log($(th).eq(10).html());
			var html = '';
			var n_tables = 2; 
			// for (var i = 0; i < n_tables; i++){
			// 	if(i % n_tables == 0){
			// 		html = '<table cellpadding="5" cellspacing="0" border="0" style="float: left;">';
			// 	}
				

			// }
			
			// for ( var i = 0; i < n; i++ ) {
			// 	html = '';
			// }
			// html += '</table>';
			return '<table cellpadding="5" cellspacing="0" border="0" style="float: left;">' +
				'<tr>' +
					'<td class="font-weight-bold">' + $(th).eq(10).html() + '</td>' +
					'<td class="text-right">'+d[10]+'</td>' + 
				'</tr>' + 
				'<tr>' +
					'<td class="font-weight-bold">' + $(th).eq(11).html() + '</td>' +
					'<td class="text-right">'+d[11]+'</td>' + 
				'</tr>' + 
				'<tr>' +
					'<td class="font-weight-bold">' + $(th).eq(12).html() + '</td>' +
					'<td class="text-right">'+d[12]+'</td>' + 
				'</tr>' + 
				'<tr>' +
					'<td class="font-weight-bold">' + $(th).eq(13).html() + '</td>' +
					'<td class="text-right">'+d[13]+'</td>' + 
				'</tr>' + 
			'</table>' + 
			'<table cellpadding="5" cellspacing="0" border="0" style="margin-left: .3rem; float:left">' +
				'<tr>' +
				'<td class="font-weight-bold">'+$(th).eq(14).html()+'</td>' +
				'<td class="text-right">'+d[14]+'</td>' + 
			'</tr>' + 
			'<tr>' +
				'<td class="font-weight-bold">'+$(th).eq(15).html()+'</td>' +
				'<td class="text-right">'+d[15]+'</td>' + 
			'</tr>' + 
			'<tr>' +
				'<td class="font-weight-bold">'+$(th).eq(16).html()+'</td>' +
				'<td class="text-right">'+d[16]+'</td>' + 
			'</tr>' + 
			'</table>';
		}
	}

	$.menu = {
		open: function(id){
			$("body").toggleClass("mobile-nav-opened");
			$("html").toggleClass("mobile-nav-opened");
		},
		close: function(id){
			$("body").toggleClass("mobile-nav-opened");
			$("html").toggleClass("mobile-nav-opened");
		}
	}

	$.dropdown = {
		init: function(){
			$(".dropdown-item-menu")
				.mouseenter(function(){
					$(this).find(".dropdown-content").addClass("show");
				})
				.mouseleave(function(){
					setTimeout(function(){
						$(this).find(".dropdown-content").removeClass("show");
					}, 300);
			});

			$(".dropdown-content").mouseleave(function(){
				$(this).removeClass("show");
			});
		},
		closeAll: function(){
			$(document).click(function(e) {
				if (!$(e.target).is('.collapse')) {
						$('.collapse').collapse('hide');	    
					}
			});
			// $(document).hover(function(e) {
			// 	e.stopPropagation();
			// 	if (!$(e.target).is('.collapse')) {
			// 		setTimeout(function(){
			// 			$('.collapse').collapse('hide');	
			// 		}, 300);    
			// 	}
			// });
		}
	}
	
})(jq);
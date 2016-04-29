// JavaScript Document


        $(document).ready(function() {

            $(".setup_icon").click(function(e) {          
				e.preventDefault();
                $("fieldset#signin_menu").toggle();
				$(".setup_icon").toggleClass("menu-open");
            });
			
			$("fieldset#signin_menu").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.setup_icon").length==0) {
					$(".setup_icon").removeClass("menu-open");
					$("fieldset#signin_menu").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".username").click(function(e) {          
				e.preventDefault();
                $("fieldset#signin_menu_username").toggle();
				$(".username").toggleClass("menu-open");
            });
			
			$("fieldset#signin_menu_username").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.username").length==0) {
					$(".username").removeClass("menu-open");
					$("fieldset#signin_menu_username").hide();
				}
			});			
			
        });
		
		
		$(document).ready(function() {

            $(".quick_link").click(function(e) {          
				e.preventDefault();
                $("fieldset#quicklink").toggle();
				$(".quick_link").toggleClass("menu-open");
            });
			
			$("fieldset#quicklink").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.quick_link").length==0) {
					$(".quick_link").removeClass("menu-open");
					$("fieldset#quicklink").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".notes_icon").click(function(e) {          
				e.preventDefault();
                $("fieldset#notes").toggle();
				$(".notes_icon").toggleClass("menu-open");
            });
			
			$("fieldset#notes").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.notes_icon").length==0) {
					$(".notes_icon").removeClass("menu-open");
					$("fieldset#notes").hide();
				}
			});			
			
        });
		
		
		
		
		$(document).ready(function() {

            $(".more").click(function(e) {          
				e.preventDefault();
                $("fieldset#more_div").toggle();
				$(".more").toggleClass("menu-open");
            });
			
			$("fieldset#more_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.more").length==0) {
					$(".more").removeClass("menu-open");
					$("fieldset#more_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".new_items").click(function(e) {          
				e.preventDefault();
                $("fieldset#new_item_div").toggle();
				$(".new_items").toggleClass("menu-open");
            });
			
			$("fieldset#new_item_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.new_items").length==0) {
					$(".new_items").removeClass("menu-open");
					$("fieldset#new_item_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".recent_items").click(function(e) {          
				e.preventDefault();
                $("fieldset#recent_items_div").toggle();
				$(".recent_items").toggleClass("menu-open");
            });
			
			$("fieldset#recent_items_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.recent_items").length==0) {
					$(".recent_items").removeClass("menu-open");
					$("fieldset#recent_items_div").hide();
				}
			});			
			
        });
		
		
		$(document).ready(function() {

            $(".calender").click(function(e) {          
				e.preventDefault();
                $("fieldset#calender_div").toggle();
				$(".calender").toggleClass("menu-open");
            });
			
			$("fieldset#calender_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.calender").length==0) {
					$(".calender").removeClass("menu-open");
					$("fieldset#calender_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".modify_filter").click(function(e) {          
				e.preventDefault();
                $("fieldset#modify_filter_div").toggle();
				$(".modify_filter").toggleClass("menu-open");
            });
			
			$("fieldset#modify_filter_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.modify_filter").length==0) {
					$(".modify_filter").removeClass("menu-open");
					$("fieldset#modify_filter_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".actions").click(function(e) {          
				e.preventDefault();
                $("fieldset#actions_div").toggle();
				$(".actions").toggleClass("menu-open");
            });
			
			$("fieldset#actions_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.actions").length==0) {
					$(".actions").removeClass("menu-open");
					$("fieldset#actions_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".search").click(function(e) {          
				e.preventDefault();
                $("fieldset#search_div").toggle();
				$(".search").toggleClass("menu-open");
            });
			
			$("fieldset#search_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.search").length==0) {
					$(".search").removeClass("menu-open");
					$("fieldset#search_div").hide();
				}
			});			
			
        });
		
		
		
		$(document).ready(function() {

            $(".camp_tools").click(function(e) {          
				e.preventDefault();
                $("fieldset#camp_tools_div").toggle();
				$(".camp_tools").toggleClass("menu-open");
            });
			
			$("fieldset#camp_tools_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.camp_tools").length==0) {
					$(".camp_tools").removeClass("menu-open");
					$("fieldset#camp_tools_div").hide();
				}
			});			
			
        });




$(document).ready(function() {

            $(".dateof_birth").click(function(e) {          
				e.preventDefault();
                $("fieldset#dateof_birth_div").toggle();
				$(".dateof_birth").toggleClass("menu-open");
            });
			
			$("fieldset#dateof_birth_div").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent("a.dateof_birth").length==0) {
					$(".dateof_birth").removeClass("menu-open");
					$("fieldset#dateof_birth_div").hide();
				}
			});			
			
        });

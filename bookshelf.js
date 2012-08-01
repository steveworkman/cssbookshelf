// CSS Bookshelf JS
// By Steve Workman - www.steveworkman.com/bookshelf
// Requires jQuery, works with 1.4+
function bookshelf() {
	var className = '';
	if (!$(this).hasClass('showBook')) {
		className = $(this).attr('class');
		$('.bookshelf .'+className).addClass('showBook');
	} else {
		$(this).removeClass('showBook');
		className = $(this).attr('class');
		$('.bookshelf .'+className).removeClass('showBook');
	}
  }
$('.bookshelf dt').click(bookshelf);
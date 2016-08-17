$(document).ready(function () {
  $('input#lyric-thai').on('input', function() {
    $('.lyric.-thai').html($(this).val());
  });
  $('input#lyric-roman').on('input', function() {
    $('.lyric.-roman').html($(this).val().replace(/\s+/g, '-').toUpperCase());
  });
  $('input#img-url').on('input', function() {
    $('.karaoke-container').css("background-image", "url("+$(this).val()+")");
  });
  $('input#progress-slider').on('input', function() {
    $('.lyric-slider').css("width", $(this).val()+"%");
  });
});

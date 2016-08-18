$(document).ready(function () {
  $('input#lyric-thai').on('input', function() {
    $('.lyric.-thai').html($(this).val());
  });
  $('input#lyric-roman').on('input', function() {
    $('.lyric.-roman').html($(this).val().replace(/\s+/g, '-').toUpperCase());
  });
  $('input#img-url').on('input', function() {
    $('.karaoke-container').css('background-image', 'url('+$(this).val()+')');
  });
  $('input#progress-slider').on('input', function() {
    $('.lyric-slider').css('width', $(this).val()+'%');
  });

  $('#img-upload').change(function () {
    const reader  = new FileReader()

    reader.addEventListener('load', () => {
      $('#karaoke-container').css('background-image', `url(${reader.result})`)
    }, false)

    const file = this.files[0]
    if (file) {
      reader.readAsDataURL(file)
    }
  })

  $('#download').click(function(){
    domtoimage.toJpeg(document.getElementById('karaoke-container'), { quality: 0.95 }) .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = dataUrl;
      link.click();
    });
  });
});

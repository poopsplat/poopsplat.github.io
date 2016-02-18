$(document).ready(function() {

  var $contactForm = $('#contactForm');

  $contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: '//formspree.io/matt.m.soria@gmail.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        $contactForm.prepend('<div class="alert alert-loading"><p>Sending message…</p></div>');
      },
      success: function(data) {
        $contactForm.addClass('form-sent').find('.alert').removeClass('alert-loading').addClass('alert-success').html('<p>Thanks! Your message has been sent!</p>');
      },
      error: function(err) {
        $contactForm.find('.alert').removeClass('alert-loading').addClass('alert-error').html('<p>Ops, there was an error.</p>');
      }
    });
  });
});
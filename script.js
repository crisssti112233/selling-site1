(function() {

  var $body = document.querySelector('body'),
      $wrapper = document.querySelector('#wrapper'),
      $articles = document.querySelectorAll('article');

  // Stop animations until load
  window.addEventListener('load', function() {
    setTimeout(function() {
      $body.classList.remove('is-preload');
    }, 100);
  });

  // Navigation
  window.addEventListener('hashchange', function(event) {
    var id = location.hash ? location.hash.substring(1) : null;

    if (!id || !document.getElementById(id)) {
      return;
    }

    // Hide all articles
    $articles.forEach(function(article) {
      article.style.display = 'none';
    });

    // Show the target article
    document.getElementById(id).style.display = 'block';
  });

})();

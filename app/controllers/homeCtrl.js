var homeCtrl = angular.module('homeCtrl', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
homeCtrl.controller('homeCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  slides.push({
      image: 'https://blog-assets1.herokucdn.com/assets/heroku-og-cad174838a49b266550809e29026ec9bc18e056dae8f9cf523ea4237379691f9.png',
      text: 'Cloud Host Provider',
      id: currIndex++
    });

  slides.push({
      image: 'http://skeeterz71.com/wp-content/uploads/2014/09/bootstrap.jpg',
      text: 'CSS Framework',
      id: currIndex++
    });
  slides.push({
      image: 'data:image/png;base64,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',
      text: 'Front End with Express',
      id: currIndex++
    });
  slides.push({
      image: 'http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png',
      text: 'Back End with Express',
      id: currIndex++
    });

  slides.push({
      image: 'https://s16-us2.ixquick.com/cgi-bin/serveimage?url=http:%2F%2Fwww.vizteams.com%2Fwp-content%2Fuploads%2F2013%2F05%2Fruby-on-rails.jpg&sp=c5083320587476c6af8750682a74c3be',
      text: 'Server handling messages',
      id: currIndex++
    });


/*
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    
  };


  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }


  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
  */
});


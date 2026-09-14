  // Duplicate the marquee track content once for a seamless loop.
  (function(){
    var track = document.getElementById('marqueeTrack');
    if(track){ track.innerHTML += track.innerHTML; }
  })();
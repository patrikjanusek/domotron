// Check if other modules are loaded and signal GTM

function(){
  var modulesLoaded = "{{Modules - DataLayer Variable - Modules Loaded}}";
  modulesLoaded++;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'modulesLoaded' : modulesLoaded
  });

  if (modulesLoaded == "{{Modules - Constant - Modules Count}}") {
    window.dataLayer.push({
      'event' : 'modulesLoaded'
    });
  };
  return modulesLoaded
}

(function init(Drupal, once) {

  Drupal.popoverApi = {
    targetElement: document.getElementById('my-popover'),
  }

  Drupal.behaviors.popoverApi = {
    attach(context) {
      once('popoverApiInit', '#my-popover', context).forEach(() => {
        const timer = parseInt(Drupal.popoverApi.targetElement.dataset.timer);
        setTimeout(() => {
          Drupal.popoverApi.targetElement.showPopover();
          console.log('popup opened');
        }, timer)
      });
    },
  };

})(Drupal, once);

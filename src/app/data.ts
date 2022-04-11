export const builtInButtons = {
  // cancel: {
  //   classes: 'cancel-button',
  //   secondary: true,
  //   text: 'Exit',
  //   type: 'cancel',
  // },
  next: {
    classes: 'next-button',
    text: 'Next',
    type: 'next',
  },
  back: {
    classes: 'back-button',
    secondary: true,
    text: 'Back',
    type: 'back',
  },
};

export const defaultStepOptions = {
  classes: 'shepherd-theme-arrows custom-default-class',
  scrollTo: true,
  cancelIcon: {
    enabled: true,
  },
};

export const steps = [
  {
    id: 'intro',
    // beforeShowPromise: function () {
    //   return new Promise(function (resolve) {
    //     setTimeout(function () {
    //       window.scrollTo(0, 0);
    //       resolve();
    //     }, 500);
    //   });
    // },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel',
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
      },
    ],
    cancelIcon: {
      enabled: true,
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Hello World!',
    text: ['Testing things here.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      },
    },
  },
  {
    id: 'second-step',
    attachTo: {
      element: '.card.highlight-card.card-small',
      on: 'top',
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Back',
        type: 'back',
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next',
      },
    ],
    cancelIcon: {
      enabled: true,
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Good Bye World!',
    text: ['Second step text.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      },
    },
  },
];

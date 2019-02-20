class DOMTraverser {
  constructor(settings) {
    this.settings = settings
    this.setup()
  }

  setup() {
    this.rootNode = this.settings.rootNode
    this.animationModule.setup()
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {} // Most of the time, we won't need to animate when traversing.
  // ...
})

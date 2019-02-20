class AjaxAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'ajaxAdapter'
  }

  request(url) {
    // request and return promise
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super()
    this.name = 'nodeAdapter'
  }

  request(url) {
    // request and return promise
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transform response and return
    })
  }
}

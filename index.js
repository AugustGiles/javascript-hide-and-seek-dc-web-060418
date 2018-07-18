function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let startingNode = document.querySelector('#grand-node');
  const deeperNode = function(node) { return node.firstElementChild }
  function recursive(node) {
    if (!node) {
      return node
    } else {
      let deeper = deeperNode(node)
      return (deeperNode(node) === null ? node : recursive(deeper))
    }
  }
  debugger
  return recursive(startingNode);

}

function increaseRankBy(n) {
  const node_list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < node_list.length; i++) {
    let text = node_list[i].innerHTML
    let int = parseInt(text, 10)
    node_list[i].innerHTML = n + int
  }
}

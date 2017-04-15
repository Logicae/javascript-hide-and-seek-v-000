function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    var list = document.querySelectorAll('.ranked-list')

    for(let i = 0, l = list.length; i < l; i++){
        var elements = list[i].children

        for (let j = 0, k = elements.length; j < k; j++){
            elements[j].innerHTML = parseInt(elements[j].innerHTML) + n
        }
    }
}

function deepestChild(){
    let nodeOne = document.getElementById('grand-node')
    let deeperNode = nodeOne.children[0]
    
    while (deeperNode) {
        nodeOne = deeperNode //nodeOne becomes child[0] of var nodeOne
        deeperNode = nodeOne.children[0] //deeperNode becomes child[0] of nodeOne
  }

    return nodeOne
}
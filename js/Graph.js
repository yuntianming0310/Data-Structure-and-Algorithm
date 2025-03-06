class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = []
  }

  addEdge(vertex1, vertex2) {
    const first = this.adjacencyList[vertex1]
    const second = this.adjacencyList[vertex2]

    if (first && second) {
      first.push(vertex2)
      second.push(vertex1)
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacencyVertext = this.adjacencyList[vertex].pop()
        this.removeEdge(vertex, adjacencyVertext)
      }

      delete this.adjacencyList[vertex]
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      )
    }
  }

  recursivelyDFS(startVertex) {
    if (!this.adjacencyList[startVertex]) return

    const visited = {}
    const result = []

    const _recursiveSearch = vertex => {
      if (visited[vertex]) return

      visited[vertex] = true
      result.push(vertex)

      this.adjacencyList[vertex].forEach(v => {
        if (!visited[v]) _recursiveSearch(v)
      })
    }

    _recursiveSearch(startVertex)
    return result
  }

  iterativelyDFS(startVertex) {
    if (!this.adjacencyList[startVertex]) return []

    const trackingStack = []
    const result = []
    const visited = {}

    trackingStack.push(startVertex)
    while (trackingStack.length) {
      const vertex = trackingStack.pop()

      if (visited[vertex]) continue
      visited[vertex] = true
      result.push(vertex)

      // 以相反顺序入栈
      for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
        const v = this.adjacencyList[vertex][i]
        if (!visited[v]) trackingStack.push(v)
      }
    }

    return result
  }
}

const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

console.log(g.iterativelyDFS('A'))

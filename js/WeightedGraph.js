import PriorityQueue from './PriorityQueue.mjs'

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    const first = this.adjacencyList[vertex1]
    const second = this.adjacencyList[vertex2]

    if (!first || !second) return

    first.push({
      node: vertex2,
      weight,
    })
    second.push({
      node: vertex1,
      weight,
    })
  }

  dijkstra(startVertex, endVertex) {
    const graph = this.adjacencyList
    if (!graph[startVertex] || !graph[endVertex])
      throw new Error('The startVertex or endVertex was not exists in graph!')

    // initial state
    const priQ = new PriorityQueue('distance')
    const path = []
    const visited = {}
    const distances = {}
    const previous = {}

    priQ.enqueue({ node: startVertex, distance: 0 })
    while (!priQ.isEmpty()) {
      const { node: smallest, distance: curDist } = priQ.dequeue()
      visited[smallest] = true

      // find the shortest path, break
      if (smallest === endVertex) {
        let cur = endVertex
        path.push(cur)
        while (previous[cur]) {
          path.push(previous[cur])
          cur = previous[cur]
        }
        break
      }

      if (graph[smallest]) {
        graph[smallest].forEach(v => {
          if (visited[v.node]) return

          const nextDist = curDist + v.weight

          if (nextDist < (distances[v.node] || Infinity)) {
            distances[v.node] = nextDist
            previous[v.node] = smallest

            priQ.enqueue({ node: v.node, distance: nextDist })
          }
        })
      }
    }

    return [distances[endVertex], path.reverse()]
  }
}

const wg = new WeightedGraph()

wg.addVertex('A')
wg.addVertex('B')
wg.addVertex('C')
wg.addVertex('D')
wg.addVertex('E')
wg.addVertex('F')

wg.addEdge('A', 'B', 4)
wg.addEdge('A', 'C', 2)
wg.addEdge('B', 'E', 3)
wg.addEdge('C', 'D', 2)
wg.addEdge('C', 'F', 4)
wg.addEdge('D', 'E', 3)
wg.addEdge('D', 'F', 1)
wg.addEdge('F', 'E', 1)

console.log(wg.dijkstra('A', 'E'))

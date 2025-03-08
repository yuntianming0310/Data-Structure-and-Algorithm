# JAVASCRIPT DATA STRUCTURE AND ALGORITHM

## BIG O NOTATION

```js
function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}
```

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2
}
```

So, how to compare both of them?
Is there a better way?

_Counting Operations_

- ![alt text](img/image-2.png)
- ![alt text](img/image-1.png)

### Performance Tracker

![alt text](img/image_0.png)

### Introducing...Big O

- Big O Notation is a way formalize fuzzy counting
- It allow us to talk formally about how the runtime of an algorithm grows as the inputs grow
- We don't care about the details, only the trends

### Big O Shorthands

![alt text](img/image_1.png)

### Space Complexity

We can also use big o Notation to analyze space complexity: how much addtional memory do we need to allocate in order to run the code in out algorithm?

### Space Complexity in JS

![alt text](img/image_2.png)

### Recap

![alt text](img/image_3.png)

## PROBLEM SOLVING APPROACH

### Introduction to Problem Solving

#### What Is An Algorithm

A **process** or **set of steps** to accomplish a certain task

#### Why Do I Need To Know This

![alt text](img/image-4.png)

#### Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve / Simplify
- Look Back and Refactor

### Step 1: Understand The Problem

> A book 《 How To Solve it 》--by George Polya
> It is a good resource for anyone who wants to become a better problem solver

#### Understand The Problem

![alt text](img/image-5.png)

### Step 2: Concrete Examples

![alt text](img/image-6.png)

### Step 3: Break It Down

```js
function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND not in object, add it to object and set value to 1
  // if character is something else (space, period, etc.) don't do anything
  // return object at end
}
```

### Step 4: Solve Or Simplify

```js
function charCount(str) {
  // make object to return at end
  const result = {}
  // loop over string, for each character...
  for (let char of str) {
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char] += 1
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1
    }
  }
  // return object at end
  return result

  // if character is something else (space, period, etc.) don't do anything
}
```

### Step 5: Look Back and Refactor

![alt text](img/image-7.png)

```js
function charCount(str) {
  const result = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) result[char] = ++result[char] || 1
  }
  return result
}
```

> There is an article stating that regex is slower than using character codes

### Recap!

- Understand the Problem
  - Clarify the problem, make sure you understand it
  - Make sure that you really have thought out:
    - how your solution
    - how your application should operate
    - how it should behave in every scenario
- Explore Concrete Examples
  - Understring:
    - inputs
    - outputs
    - edge cases
  - How do you handle errors
    - Such as what happens when a user enters something invalid
- Break It Down
  - Break out a couple of steps
  - You can write pseudocode line by line
- Solve / Simplify
  - If you can't solve the problem right away, solve a problem that you can, even if it's simpler
  - If you are not sure about the preblem, ignore that part and just write that problem so that you could then plug it in later
- Look Back and Refactor
  - The most important for learning or improving as a developer
  - Looking back on your code and sometimes refactoring it
  - Sometimes just looking back and analyzing it and patting yourself on the back
  - It can be very useful to look at other people's solutions

## PROBLEM SOLVING PATTERNS

### Intro To Problem Solving Patterns

#### How Do You Improve

1. **Devise** a plan for solving problems
2. **Master** common problem solving patterns

#### Some Patterns...

![alt text](img/image-8.png)

### Frequency Counter Pattern

![alt text](img/image-9.png)

#### Anagram

![alt text](img/image-10.png)

### Multiple Pointers Pattern

![alt text](img/image-11.png)

#### CountUniqueValues

> Compare and move the pointers
> If pointed values are different, then change the value
> j++

![alt text](img/image-12.png)
![alt text](img/image-13.png)

### Sliding Window Pattern

![alt text](img/image-14.png)

### Divide and Conquer

![alt text](img/image-15.png)

## RECURSION

### Story Time: Martin & The Dargon

> Just a story to let you know about recursion...

#### Objective

![alt text](img/image-16.png)

### Why Use Recursion

#### What is Recursion

> A **progress**(a function in out case) that **called itself**

#### It's EVERYWHERE!

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structure
- It's sometimes a cleaner alternative to iteration

### The Call Stack

#### But first...let's talk about functions

- In almost all program languages, there is a built in data structure that manages what happens when functions are invoked
- It's named the **call stack!**

#### The Call Stack

![alt text](img/image-17.png)

### Out First Recursive Function

#### How recursive functions work

Invoke the **same** function with a different input until you reach your base case

#### The essantial parts of a recursive function!

- Base Case
- Different Input

#### Where things go wrong

- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow!

### Helper Method Recursion

> Example

```js
function collectOddValues(arr) {
  const result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}
```

### Pure Recursion

```js
function collectOddValues(arr) {
  const newArr = []

  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])

  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}
```

![alt text](img/image-18.png)

#### Pure Recursion Tips

![alt text](img/image-19.png)

## SEARCHING ALGORITHMS

### Intro to Searching

#### Objectives

![alt text](img/image-20.png)

### Intro to Linear Search

#### JavaScript has Search!

![alt text](img/image-21.png)

#### Linear Search

![alt text](img/image-22.png)

### Intro to Binary Search

#### Pseudocode

![alt text](img/image-23.png)

### Native String Search

#### Pseudocode

![alt text](img/image-24.png)

## DATA STRUCTURES INTRODUCTION

### Which Data Structure Is The Best

#### What Do They Do?

![alt text](img/image-26.png)
![alt text](img/image-25.png)

#### Why So Many??

> Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

#### Why Care?

> - The more time you spend as a developer, the more likely you'll need to use one of these data structures
> - You've already worked with many of them unknowingly!
> - And of course...INTERVIEWS

## SINGLY LINKED LISTS

### Intro to Singly Linked Lists

#### What is a linked list?

- A data structure that contains a **head**, **tail** and **length** property.
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null

#### Comparisons with Arrays

- Lists
  - Do not have indexes!
  - Connected via nodes with a next pointer
  - Random access is not allowed
- Arrays
  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

## DOUBLY LINKED LISTS

### Recap

![alt text](img/image-27.png)

## STACKS + QUEUES

### Intro to Stacks

#### Objectives

![alt text](img/image-28.png)

##### What is a stack?

A **LIFO** data structure!

The last element added to the stack will be the first element removed from the stack

##### Where stacks are used

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

### Big O of Stacks

![alt text](img/image-29.png)

### Recap for Stack

![alt text](img/image-30.png)

### Intro to Queues

#### Objectives

![alt text](img/image-31.png)

##### What is a Queue?

A **FIFO** data structure

##### We've seen this before

> Queue exist everywhere! Think about the last time you waited in line...

**How do we use them in programming?**

- Background tasks
- Uploading resources
- Printing / Task processing

### Big O of Queues

![alt text](img/image-32.png)

### Recap for Queue

![alt text](img/image-33.png)

## BINARY SEARCH TREES

### Introduction to Trees

#### Objectives

![alt text](img/image-34.png)

#### What is a tree?

A data structure that consists of nodes in a **parent/child** relationship

#### Tree Terminology

- **Root**: The top node in a tree
- **Child**: A node directly connected to another node when moving away from the Root
- **Parent**: The converse notion of a child
- **Siblings**: A group of nodes with the same parent
- **Leaf**: A node with no children
- **Edge**: The connection between one node and another

### Uses For Trees

> Lots of different applications!

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
  - ![alt text](img/image-35.png)
- Folders in Operating Systems
- Computer File Systems

### Intro to Binary Trees

#### Kinds of Trees

- Trees
- Binary Trees
- Binary Search Trees

#### BST - Binary Search Trees

![alt text](img/image-36.png)

### Searching a Binary Search Tree

#### How BSTs Work

- Every parent node has at most **two** children
- Every node to the left of a parent node is **always less** than the parent
- Every node to the right of a parent node is **always greater** than the parent

### Big O of Binary Search Trees

![alt text](img/image-37.png)

## Tree Traversal

### Intro to Tree Traversal

#### Breadth-first Search & Depth-first Search

**Breadth-first Search**

> Stack

---

**Depth-first Search**

> Queue

- PreOrder
- InOrder
- PostOrder

## BINARY HEAPS

### Intro to Heaps

#### Objectives

![alt text](img/image-48.png)

#### What is A Binary Heap?

- **Very** similar to a binary search tree, but with some different rules
- In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. In a **MinBinaryHeap**, parent nodes are always smaller than child nodes

#### Why do we need to know this?

- Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures
- They are also used quite a bit, with **graph traversal** algorithms

### Heap: ExtractMax Intro

#### Remove and Sink Down

### Priority Queue Intro

#### What is A Priority Queue?

> A data structure where each elements has a priority. Elements with higher priorities are served before elements with lower priorities.
> React Fiber Scheduler

![alt text](img/image-49.png)

## HASH TABLES

### Intro to Hash Tables

#### Objectives

- Explain what a hash table is
- Define what a hashing algorithm
- Discuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handle collisions using separate chaining or linear probing

#### WHAT IS A HASH TABLE?

- Hash tables are used to store key-value pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

#### WHY SHOULD I CARE?

- Nearly every programming language has some sort of hash table data structure
- Because of their speed, hash tables are very commonly used!

#### Hash Tables in The Wild

<!-- prettier-ignore -->
> `Python` has `Dictionaries`
> `JS` has `Objects` and `Maps*`
> `Java`, `Go`, & `Scala` have `Maps`
> `Ruby` has...`Hashes`
>
> * Objects have some restrictions, but are basically hash tables

### More About Hash Tables

#### The Hash Part

- To implement a hash table, we'll be using an array.
- In order to look up values by key, we need a way to **convert keys into valid array indices**.
- A function that performs this task is called a _hash function_

#### What Makes A Good Hash?

> (not a cryptographically secure one)

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

#### Prime numbers? wut.

- The prime number in the hash is helpful in spreading out the keys more uniformly.
- It's also helpful if the array that you're putting values into has a prime length.
- You don't need to know why. (Math is complicated!) But here are some links if you're curious.

> Why do hash functions use prime numbers?
> Does making array size a prime number help in hash table implementation?

### Handling Collisions

- Even with a large array and a great hash function, collisions are inevitable.
- There are many strategies for dealing with collisions, but we'll focus on two:
  1. Separate Chaining
  2. Linear Probing

#### Separate Chaining

- With _separate chaining_, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
- This allows us to store multiple key-value pairs at the same index.

![alt text](img/image-50.png)

#### Linear Probing

- With _linear probing_, when we find a collision, we search through the array to find the next empty slot.
- Unlike with separate chaining, this allows us to store a single key-value at each index.

![alt text](img/image-51.png)

### Set / Get

![alt text](img/image-52.png)

### Keys / Values

![alt text](img/image-53.png)

### Big O of Hash Tables

![alt text](img/image-54.png)

### Recap

![alt text](img/image-55.png)

## GRAPHS

### Intro to Graph

#### Objectives

- Explain what a graph is
- Compare and contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS
- Compare and contrast graph traversal algorithms

#### WHAT ARE GRAPHS

> A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**.

**Nodes + Connections**

#### Uses For Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- EVERYWHERE!

#### Recommendations

- "People also watched"
- "You might also like..."
- "People you might know"
- "Frequently bought with"

#### ESSENTIAL GRAPH TERMS

- **Vertex** - a node
- **Edge** - connection between nodes
- **Weighted/Unweighted** - values assigned to distances between vertices
- **Directed/Undirected** - directions assigned to distanced between vertices

### Storing Graphs

#### Adjacency Matrix

![alt text](img/image-56.png)

#### Adjacency List

![alt text](img/image-57.png)

#### Differences & Big O

![alt text](img/image-58.png)

#### Adjacency List vs. Adjacency Matrix

![alt text](img/image-59.png)

## GRAPH TRAVERSAL

### Intro to Graph Traversal

> **Visiting / Updating / Checking**
> each vertex in a graph

### Uses of Graph Traversal

![alt text](img/image-60.png)

### Depth-first Traversal

> Explore as far as possible down one branch before "backtracking"

### Breadth-first Traversal

> Visit neighbors at current depth first!

## DIJKSTRA's ALGORITHM!

### Intro to Dijkstra's and Prerequisites

#### Objectives

- Understand the importance of Dijkstra's
- Implement a Weighted Graph
- Walk through the stepss of Dijkstra's
- Implement Dijkstra's using a native priority queue
- Implement Dijkstra's using a binary heap priority queue

### Who was Dijkstra and what is his Algorithm?

#### What is it?

> One of the most famous and widely used algorithms around!
>
> Finds the shortest path between two vertives on a graph
>
> "What's the fastest way to get from point A to point B?"

#### Who was he?

- **Edsger Dijkstra** was a Dutch programmer physicist, essayist, and all around smarty-pants
- He helped to advance the field of computer science from an "art" to an academic discipline
- Many of his discoveries and algorithms are still commonly used to this day

![alt text](img/image-38.png)

#### Why is it useful?

- GPS
  - finding fastest route
- Network Routing
  - finds open shortest path for data
- Biology
  - used to model the spread of viruses among humans
- Airline tickets
  - finding cheapest route to your destination
- Many other uses!

## DYNAMIC PROGRAMMING

### Intro to Dynamic Programming

#### Objectives

- Define that dynamic programming is
- Explain what overlapping subproblems are
- Understand what optimal substructure is
- Solve more challenging problems using dynamic programming

#### What is Dynamic Programming

> "A method for solving complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

### Overlapping Subproblems

> It only works on problems with...
>
> - Optimal Substructure
> - Overlapping Subproblems

#### Overlapping Subproblems

A problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are reused several times

- Overlapping Subproblems
  ![alt text](img/image-39.png)
  ![alt text](img/image-40.png)
- Not Overlapping
  ![alt text](img/image-41.png)

### Optimal Substructure

A problem is said to have optimal substructure if an **optimal solution** can be constructed from optimal solutions of its subproblems

![alt text](img/image-42.png)

### Write a Recursive Solution

![alt text](img/image-43.png)
![alt text](img/image-44.png)

### The Time Complexity of Our Solution

![alt text](img/image-45.png)

![alt text](img/image-46.png)
![alt text](img/image-47.png)

### The Problem With Our Solution

#### Enter Dynamic Programming

> ## "Using past knowledge to make solving a future problem easier"
>
> "A method for solving complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions."

### Enter Memoization!

> Storing the results of expensive function calls and returning the cached result when the same inputs occur again

#### A Memo-ized Solution

```js
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]

  if (n <= 2) return 1
  const res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}

function fib_memoized(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n]
  const res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}
```

### Tabulation: A Bottom Up Approach

> "Bottom Up"

- Storing the result of a previous result in a "table"(usually an array)
- Usually done using **iteration**
- Better **space complexity** can be achieved using tabulation

```js
function fib_tabluation(n) {
  if (n <= 2) return 1

  const fibNums = [0, 1, 1]
  for (i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }

  return fibNums[n]
}
```

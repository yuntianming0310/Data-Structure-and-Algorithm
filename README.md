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

![alt text](image.png)

### Introducing...Big O

- Big O Notation is a way formalize fuzzy counting
- It allow us to talk formally about how the runtime of an algorithm grows as the inputs grow
- We don't care about the details, only the trends

### Big O Shorthands

![alt text](image-1.png)

### Space Complexity

We can also use big o Notation to analyze space complexity: how much addtional memory do we need to allocate in order to run the code in out algorithm?

### Space Complexity in JS

![alt text](image-2.png)

### Recap

![alt text](image-3.png)

## PROBLEM SOLVING APPROACH

### Introduction to Problem Solving

#### What Is An Algorithm

A **process** or **set of steps** to accomplish a certain task

#### Why Do I Need To Know This

![alt text](image-4.png)

#### Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve / Simplify
- Look Back and Refactor

### Step 1

> A book 《 How To Solve it 》--by George Polya
> It is a good resource for anyone who wants to become a better problem solver

#### Understand The Problem

![alt text](image-5.png)

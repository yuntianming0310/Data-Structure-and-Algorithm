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

### Step 1: Understand The Problem

> A book 《 How To Solve it 》--by George Polya
> It is a good resource for anyone who wants to become a better problem solver

#### Understand The Problem

![alt text](image-5.png)

### Step 2: Concrete Examples

![alt text](image-6.png)

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

![alt text](image-7.png)

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

![alt text](image-8.png)

### Frequency Counter Pattern

![alt text](image-9.png)

#### Anagram

![alt text](image-10.png)

### Multiple Pointers Pattern

![alt text](image-11.png)

#### CountUniqueValues

> Compare and move the pointers
> If pointed values are different, then change the value
> j++

![alt text](image-12.png)
![alt text](image-13.png)

### Sliding Window Pattern

![alt text](image-14.png)

### Divide and Conquer

![alt text](image-15.png)

## RECURSION

### Story Time: Martin & The Dargon

> Just a story to let you know about recursion...

#### Objective

![alt text](image-16.png)

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

![alt text](image-17.png)

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

![alt text](image-18.png)

#### Pure Recursion Tips

![alt text](image-19.png)

## SEARCHING ALGORITHMS

### Intro to Searching

#### Objectives

![alt text](image-20.png)

### Intro to Linear Search

#### JavaScript has Search!

![alt text](image-21.png)

#### Linear Search

![alt text](image-22.png)

### Intro to Binary Search

#### Pseudocode

![alt text](image-23.png)

### Native String Search

#### Pseudocode

![alt text](image-24.png)

## DATA STRUCTURES INTRODUCTION

### Which Data Structure Is The Best

#### What Do They Do?

![alt text](image-26.png)
![alt text](image-25.png)

#### Why So Many??

> Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

#### Why Care?

> - The more time you spend as a developer, the more likely you'll need to use one of these data structures
> - You've already worked with many of them unknowingly!
> - And of course...INTERVIEWS

## SINGLY LINKED LISTS

### Intro to Singly Linked Lists

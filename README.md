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

import React, { useState } from 'react';
import { Search, Code, BookOpen } from 'lucide-react';

const InterviewQuestionsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const questions = [
    {
      category: 'Array/Math',
      problem: 'Find Missing Number',
      formula: 'n × (n+1) / 2',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `const n = arr.length + 1;
const total = (n * (n+1)) / 2;
const sum = arr.reduce((a,b) => a+b, 0);
return total - sum;`,
      example: '[1,2,4,5] → 3',
      trick: 'Expected Sum - Actual Sum'
    },
    {
      category: 'Array/Math',
      problem: 'Find Duplicate Number',
      formula: 'sum - n×(n+1)/2',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `const n = arr.length - 1;
const expected = (n * (n+1)) / 2;
const actual = arr.reduce((a,b) => a+b, 0);
return actual - expected;`,
      example: '[1,2,3,3,4] → 3',
      trick: 'Actual Sum - Expected Sum'
    },
    {
      category: 'Array',
      problem: 'Two Sum',
      formula: 'target - current',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      solution: `const map = new Map();
for(let i=0; i<arr.length; i++){
  const complement = target - arr[i];
  if(map.has(complement)) 
    return [map.get(complement), i];
  map.set(arr[i], i);
}`,
      example: '[2,7,11,15], target=9 → [0,1]',
      trick: 'Store seen numbers in Map'
    },
    {
      category: 'Array',
      problem: 'Max Subarray Sum (Kadane)',
      formula: 'max(curr+num, num)',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let maxSum = arr[0], currSum = arr[0];
for(let i=1; i<arr.length; i++){
  currSum = Math.max(arr[i], currSum + arr[i]);
  maxSum = Math.max(maxSum, currSum);
}
return maxSum;`,
      example: '[-2,1,-3,4,-1,2,1,-5,4] → 6',
      trick: 'Reset or Continue?'
    },
    {
      category: 'Array',
      problem: 'Reverse Array',
      formula: 'swap(i, n-1-i)',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let left = 0, right = arr.length - 1;
while(left < right){
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++; right--;
}`,
      example: '[1,2,3,4,5] → [5,4,3,2,1]',
      trick: 'Two pointers from ends'
    },
    {
      category: 'String',
      problem: 'Reverse String',
      formula: 'str.split("").reverse().join("")',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      solution: `// Method 1
return str.split('').reverse().join('');

// Method 2 (in-place for array)
let left = 0, right = arr.length - 1;
while(left < right){
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++; right--;
}`,
      example: '"hello" → "olleh"',
      trick: 'Split-Reverse-Join or Two Pointers'
    },
    {
      category: 'String',
      problem: 'Palindrome Check',
      formula: 's === s.reverse()',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let left = 0, right = s.length - 1;
while(left < right){
  if(s[left] !== s[right]) return false;
  left++; right--;
}
return true;`,
      example: '"racecar" → true',
      trick: 'Compare from both ends'
    },
    {
      category: 'String',
      problem: 'Anagram Check',
      formula: 'sort(s1) === sort(s2)',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
      solution: `// Method 1: Sort
const sorted1 = s1.split('').sort().join('');
const sorted2 = s2.split('').sort().join('');
return sorted1 === sorted2;

// Method 2: Frequency Map (O(n))
const map = {};
for(let c of s1) map[c] = (map[c] || 0) + 1;
for(let c of s2) map[c] = (map[c] || 0) - 1;
return Object.values(map).every(v => v === 0);`,
      example: '"listen", "silent" → true',
      trick: 'Sort or Count characters'
    },
    {
      category: 'LinkedList',
      problem: 'Reverse Linked List',
      formula: 'prev, curr, next pointers',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let prev = null, curr = head;
while(curr){
  let next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;`,
      example: '1→2→3→4 → 4→3→2→1',
      trick: 'Three pointers: prev, curr, next'
    },
    {
      category: 'LinkedList',
      problem: 'Detect Cycle (Floyd)',
      formula: 'slow & fast pointers',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let slow = head, fast = head;
while(fast && fast.next){
  slow = slow.next;
  fast = fast.next.next;
  if(slow === fast) return true;
}
return false;`,
      example: '1→2→3→4→2 (cycle) → true',
      trick: 'Tortoise & Hare meet if cycle'
    },
    {
      category: 'LinkedList',
      problem: 'Middle of LinkedList',
      formula: 'slow & fast pointers',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `let slow = head, fast = head;
while(fast && fast.next){
  slow = slow.next;
  fast = fast.next.next;
}
return slow;`,
      example: '1→2→3→4→5 → 3',
      trick: 'Fast moves 2x, slow at middle'
    },
    {
      category: 'Recursion',
      problem: 'Fibonacci',
      formula: 'fib(n) = fib(n-1) + fib(n-2)',
      timeComplexity: 'O(2^n) / O(n) memo',
      spaceComplexity: 'O(n)',
      solution: `// Memoization
const memo = {};
function fib(n){
  if(n <= 1) return n;
  if(memo[n]) return memo[n];
  memo[n] = fib(n-1) + fib(n-2);
  return memo[n];
}`,
      example: 'fib(6) → 8',
      trick: 'Base: 0,1 | Recursive: n-1 + n-2'
    },
    {
      category: 'Recursion',
      problem: 'Factorial',
      formula: 'n! = n × (n-1)!',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      solution: `function factorial(n){
  if(n <= 1) return 1;
  return n * factorial(n - 1);
}`,
      example: 'factorial(5) → 120',
      trick: 'Base: 1 | Recursive: n × (n-1)!'
    },
    {
      category: 'Sorting',
      problem: 'Bubble Sort',
      formula: 'Compare adjacent, swap',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      solution: `for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr.length-i-1; j++){
    if(arr[j] > arr[j+1]){
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
}`,
      example: '[5,2,8,1] → [1,2,5,8]',
      trick: 'Bubble largest to end each pass'
    },
    {
      category: 'Sorting',
      problem: 'Binary Search',
      formula: 'mid = (low+high)/2',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      solution: `let low = 0, high = arr.length - 1;
while(low <= high){
  let mid = Math.floor((low + high) / 2);
  if(arr[mid] === target) return mid;
  if(arr[mid] < target) low = mid + 1;
  else high = mid - 1;
}
return -1;`,
      example: '[1,3,5,7,9], target=5 → 2',
      trick: 'Divide search space in half'
    },
    {
      category: 'Matrix',
      problem: 'Rotate Matrix 90°',
      formula: 'Transpose + Reverse rows',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      solution: `// Transpose
for(let i=0; i<n; i++)
  for(let j=i; j<n; j++)
    [m[i][j], m[j][i]] = [m[j][i], m[i][j]];

// Reverse each row
for(let i=0; i<n; i++)
  m[i].reverse();`,
      example: '[[1,2],[3,4]] → [[3,1],[4,2]]',
      trick: 'Transpose then Reverse'
    },
    {
      category: 'Hash/Map',
      problem: 'First Non-Repeating Char',
      formula: 'Frequency Map',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      solution: `const map = {};
for(let c of str) map[c] = (map[c] || 0) + 1;
for(let c of str)
  if(map[c] === 1) return c;
return null;`,
      example: '"leetcode" → "l"',
      trick: 'Count all, find first with count=1'
    },
    {
      category: 'Stack/Queue',
      problem: 'Valid Parentheses',
      formula: 'Stack push/pop matching',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      solution: `const stack = [], map = {')':'(', '}':'{', ']':'['};
for(let c of s){
  if(c === '(' || c === '{' || c === '[')
    stack.push(c);
  else if(stack.pop() !== map[c])
    return false;
}
return stack.length === 0;`,
      example: '"({[]})" → true',
      trick: 'Push open, pop for close'
    },
    {
      category: 'Math',
      problem: 'Prime Number Check',
      formula: 'Check divisors till √n',
      timeComplexity: 'O(√n)',
      spaceComplexity: 'O(1)',
      solution: `if(n <= 1) return false;
if(n <= 3) return true;
if(n % 2 === 0 || n % 3 === 0) return false;
for(let i=5; i*i<=n; i+=6){
  if(n % i === 0 || n % (i+2) === 0)
    return false;
}
return true;`,
      example: '17 → true, 18 → false',
      trick: 'Check till square root only'
    },
    {
      category: 'Math',
      problem: 'GCD (Euclidean)',
      formula: 'gcd(a,b) = gcd(b, a%b)',
      timeComplexity: 'O(log(min(a,b)))',
      spaceComplexity: 'O(1)',
      solution: `function gcd(a, b){
  while(b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}`,
      example: 'gcd(48, 18) → 6',
      trick: 'Remainder keeps shrinking'
    }
  ];

  const categories = ['All', ...new Set(questions.map(q => q.category))];

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSearch = q.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.formula.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-6">
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Interview Questions Cheat Sheet</h1>
          </div>
          <p className="text-purple-300 text-lg">20 Most Common Coding Problems with Solutions</p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search problems or formulas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-purple-300 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-purple-300 mb-4">
          Showing {filteredQuestions.length} of {questions.length} problems
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6">
          {filteredQuestions.map((q, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500 transition-all">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium mb-2">
                    {q.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{q.problem}</h3>
                </div>
                <Code className="w-6 h-6 text-purple-400" />
              </div>

              {/* Formula & Trick */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
                  <div className="text-blue-300 text-sm font-semibold mb-1">Formula</div>
                  <code className="text-blue-100 font-mono">{q.formula}</code>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3">
                  <div className="text-green-300 text-sm font-semibold mb-1">Memory Trick</div>
                  <div className="text-green-100">{q.trick}</div>
                </div>
              </div>

              {/* Complexity */}
              <div className="flex gap-4 mb-4 text-sm">
                <div className="bg-orange-500/20 px-3 py-1 rounded-lg">
                  <span className="text-orange-300">Time:</span>{' '}
                  <span className="text-orange-100 font-mono">{q.timeComplexity}</span>
                </div>
                <div className="bg-pink-500/20 px-3 py-1 rounded-lg">
                  <span className="text-pink-300">Space:</span>{' '}
                  <span className="text-pink-100 font-mono">{q.spaceComplexity}</span>
                </div>
              </div>

              {/* Example */}
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3 mb-4">
                <div className="text-yellow-300 text-sm font-semibold mb-1">Example</div>
                <code className="text-yellow-100 font-mono">{q.example}</code>
              </div>

              {/* Solution */}
              <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
                <div className="text-purple-300 text-sm font-semibold mb-2">Solution</div>
                <pre className="text-green-300 font-mono text-sm whitespace-pre-wrap">
                  {q.solution}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-purple-300 text-sm">
          <p>💡 Tip: Practice each problem at least 3 times to memorize the pattern!</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestionsTable;
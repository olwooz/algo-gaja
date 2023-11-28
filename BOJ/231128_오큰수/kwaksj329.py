import sys
input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))
answer = []
stack = []

for i in range(n):
  if i != 0 and numbers[n-i-1] < numbers[n-i]:
    stack.append(numbers[n-i])
    answer.append(numbers[n-i])
    continue

  while len(stack) > 0:
    if numbers[n-i-1] < stack[-1]:
      answer.append(stack[-1])
      break
    stack.pop()

  if len(stack) == 0:
    answer.append(-1)

print(' '.join(map(str, answer[::-1])))

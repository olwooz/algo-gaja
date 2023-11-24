import sys
input = sys.stdin.readline

n = int(input())
numberArr = list(map(int, input().split()))
add, sub, mul, div = map(int, input().split())

minNum = 1000000000
maxNum = -1000000000

def dfs(add, sub, mul, div, index, sum):
  global minNum, maxNum
  if n == index:
    if sum > maxNum:
      maxNum = sum
    if sum < minNum:
      minNum = sum
    return
  
  if add:
    dfs(add-1, sub, mul, div, index+1, sum + numberArr[index])

  if sub:
    dfs(add, sub-1, mul, div, index+1, sum - numberArr[index])

  if mul:
    dfs(add, sub, mul-1, div, index+1, sum * numberArr[index])

  if div:
    dfs(add, sub, mul, div-1, index+1, int(sum / numberArr[index]))

dfs(add, sub, mul, div, 1, numberArr[0])
print(maxNum)
print(minNum)
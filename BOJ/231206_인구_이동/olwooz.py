from sys import stdin
from collections import deque
input = stdin.readline

dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]
N, L, R = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(N)]
ans = 0

def migrate(union):
    new_population = sum(A[x][y] for x, y in union) // len(union)
    for x, y in union:
        A[x][y] = new_population

def dfs():
    migration = False
    visited = [[False] * N for _ in range(N)]
    queue = deque()
    for i in range(N):
        for j in range(N):
            if not visited[i][j]:
                union = [(i, j)]
                visited[i][j] = True
                queue.append((i, j))
                while queue:
                    x, y = queue.popleft()
                    for k in range(4):
                        nx, ny = x+dx[k], y+dy[k]
                        if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny] and L <= abs(A[nx][ny]-A[x][y]) <= R:
                            visited[nx][ny] = True
                            queue.append((nx, ny))
                            union.append((nx, ny))
                if len(union) > 1:
                    migrate(union)
                    migration = True
    return migration

while dfs():
    ans += 1

print(ans)
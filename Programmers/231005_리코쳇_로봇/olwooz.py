from collections import deque

dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]

def solution(board):
    M, N = len(board), len(board[0])
    visited = [[False] * N for _ in range(M)]
    R = (-1, -1, 0)
    
    for i in range(M):
        for j in range(N):
            if board[i][j] == 'R': 
                R = (i, j, 0)
                visited[i][j] = True
    
    queue = deque()
    queue.append(R)
    
    while queue:        
        x, y, move = queue.popleft();
        
        if board[x][y] == 'G': return move
        
        for i in range(4):
            nx, ny = x, y
            
            if dx[i] != 0:
                while 0 <= nx < M and board[nx][ny] != 'D':
                    nx += dx[i]
                nx -= dx[i]
            else:
                while 0 <= ny < N and board[nx][ny] != 'D':
                    ny += dy[i]
                ny -= dy[i]
            
            if not visited[nx][ny]:
                visited[nx][ny] = True
                queue.append((nx, ny, move + 1))
                
    return -1
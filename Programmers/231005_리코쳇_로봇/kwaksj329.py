from collections import deque

def fourPosition(point, board, index):
    move = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    while True:
        point[0] += move[index][0]
        point[1] += move[index][1]
        if point[0] < 0 or point[1] < 0 or point[0] >= len(board) or point[1] >= len(board[0]): break
        if board[point[0]][point[1]] == 'D': break
    return point[0] - move[index][0], point[1] - move[index][1]
            
def solution(board):
    answer = 0
    visited = [[-1 for _ in range(len(board[0]))] for _ in range(len(board))]
    
    for lineIdx, line in enumerate(board):
        for letterIdx, letter in enumerate(line):
            if letter == 'R':
                r = [lineIdx, letterIdx]
                visited[r[0]][r[1]] = 0
            if letter == 'G':
                g = [lineIdx, letterIdx]
    
    queue = deque([r])
    while queue:
        y, x = queue.popleft()
        for i in range(0, 4):
            my, mx = fourPosition([y, x], board, i)
            if visited[my][mx] == -1:
                queue.append([my, mx])
                visited[my][mx] = visited[y][x] + 1
    
    return visited[g[0]][g[1]]
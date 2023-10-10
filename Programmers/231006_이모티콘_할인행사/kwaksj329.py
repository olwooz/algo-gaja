from itertools import product


def solution(users, emoticons):
    answer = []
    percent = [10, 20, 30, 40]
    percentCombi = list(product(percent, repeat=len(emoticons)))
    for saleList in percentCombi:
        result = [0, 0]
        for user in users:
            price = 0
            for idx, emoticon in enumerate(emoticons):
                if saleList[idx] >= user[0]:
                    price += emoticon * (100-saleList[idx]) / 100
            if price >= user[1]:
                result[0] += 1
            else:
                result[1] += price
        answer.append(result)
        answer.sort(reverse=True)
    return answer[0]

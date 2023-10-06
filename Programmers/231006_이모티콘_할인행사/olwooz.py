from itertools import product

DISCOUNT_RATES = [10, 20, 30, 40]

def solution(users, emoticons):
    NUM_EMOTICONS = len(emoticons)
    discount_rate_product = list(product(DISCOUNT_RATES, repeat=NUM_EMOTICONS))
    
    max_plus_users, max_revenue = 0, 0
    
    for discount_rates in discount_rate_product:
        rate_price_list = list(map(lambda x, y: [y, x * (100 - y) // 100], emoticons, discount_rates))

        plus_users, revenue = 0, 0
        
        for min_rate, max_price in users:
            total_price = 0
            is_emoticon_plus = False
            
            for rate, price in rate_price_list:
                if rate >= min_rate:
                    total_price += price
                if total_price >= max_price:
                    is_emoticon_plus = True
                    break
                    
            if is_emoticon_plus:
                plus_users += 1
            else:
                revenue += total_price
        
        if plus_users > max_plus_users or (plus_users == max_plus_users and revenue > max_revenue):
            max_plus_users, max_revenue = plus_users, revenue
            
    return [max_plus_users, max_revenue]
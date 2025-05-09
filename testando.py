MOD = 10**9 + 7

def contar_maneiras(n):
    # Base de recursão
    dp = [0] * (n + 1)
    dp[1] = 12
    
    for i in range(2, n + 1):
        dp[i] = (6 * dp[i - 1]) % MOD
    
    return dp[n]

# Leitura do valor de n
n = int(input())
print(contar_maneiras(n))
# Задача о рюкзаке
## Максимальный вес
$n$ предметов  
веса $ w_1, w_2, w_3, ..., w_n$  
$M$ - максимальный вес для рюкзака  

## Точный вес
```cpp
// dp[i][j] - можно ли набрать вес j первыми i предметами
dp[0][0] = 1
for (int i = 0; i < n; i++) {
	for (int w = 0; w <= M; w++) {
		if (dp[i][w]) {
			if(w + a[i] <= M) dp[i + 1][w + a[i]] = true;
			dp[i + 1][w] = true;
		}
	}
}
```

## Точный вес за линию по памяти

```cpp
vector<bool> dp(M + 1, false);
dp[0] = true;

for (int i = 0; i < n; i++) {
    for (int w = M - a[i]; w >= 0; w--) {
        if (dp[w]) {
            dp[w + a[i]] = true;
        }
    }
}
```

Рюкзак с точным весом

```cpp

int n, m;
vector<int> a(n);
vector<vector<bool>> dp(n+1, vector<bool>(m+1));
dp[0][0] = true;
for (int i = 0; i < n; i++) {
    for (int w = 0; w <= m; w++) {
        if (dp[i][w]) {
            if(w + a[i] <= m) dp[i + 1][w + a[i]] = true;
            dp[i + 1][w] = true;
        }
    }
}
if (dp[n][m]) {
    cout << "YES" << endl;
} else {
    cout << "NO" << endl;
}

```

Рюкзак с ценами

```cpp
int N, M;
vector<int> m(N), c(N);
vector<vector<int>> dp(N + 1, vector<int> (M + 1));
for(int i = 0; i <= N; i++){
    dp[i][0] = 0;
}
for(int i = 0; i <= M; i++){
    dp[0][i] = 0;
}
for(int w = 1; w <= M; w++){
    for(int p = 1; p <= N; p++){
        if(m[p - 1] > w){
            dp[p][w] = dp[p - 1][w];
        }
        else {
            dp[p][w] = max(dp[p - 1][w], dp[p - 1][w - m[p - 1]] + c[p - 1]);
        }
    }
}
cout << dp[N][M] << endl;
```

Рюкзак с наибольшим весом

```cpp

int N, M;
vector<int> m(N);
vector<vector<int>> dp(N+1, vector<int> (M + 1));
for(int i = 0; i <= N; i++){
    dp[i][0] = 0;
}
for(int i = 0; i <= M; i++){
    dp[0][i] = 0;
}
for(int w = 1; w <= M; w++){
    for(int p = 1; p <= N; p++){
        if(m[p - 1] > w){
            dp[p][w] = dp[p - 1][w];
        }
        else {
            dp[p][w] = max(dp[p - 1][w], dp[p - 1][w - m[p - 1]] + m[p - 1]);
        }
    }
}    
cout << dp[N][M] << endl;
```

# Декартово дерево
![Декартово дерево на координатной плоскости](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Treap.svg/330px-Treap.svg.png)
классическая реализация декартова дерева
```cpp
struct Node {  
    ll key, prior;  
    Node *left, *right;  
    Node(ll key) : key(key), prior(rand()), left(nullptr), right(nullptr) {}  
};  
Node* merge(Node* l, Node* r) {  
    if (!l) return r;  
    if (!r) return l;  
    if (l->prior > r->prior) {  
        l->right = merge(l->right, r);  
        return l;  
    } else {  
        r->left = merge(r->left, l);  
        return r;  
    }  
}  
pair<Node*, Node*> split(Node* root, ll key) {  
    if (!root) return {nullptr, nullptr};  
    if (key <= root->key) {  
        auto [l, r] = split(root->left, key);  
        root->left = r;  
        return {l, root};  
    } else {  
        auto [l, r] = split(root->right, key);  
        root->right = l;  
        return {root, r};  
    }  
}  
Node* insert(Node* root, ll key) {  
    auto newNode = new Node(key);  
    auto [l, r] = split(root, key);  
    return merge(merge(l, newNode), r);  
}  
Node* erase(Node* root, ll key) {  
    auto [l, r] = split(root, key);  
    auto [l1, l2] = split(l, key - 1);  
    if (l2) {  
        delete l2;  
    }  
    return merge(l1, r);  
}
void print(Node *root) {  
    if (!root) return;  
    print(root->left);  
    cout << root->key << ' ';  
    print(root->right);  
}
```

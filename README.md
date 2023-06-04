# base-site-admin

## 解决husky 报错

```bash
hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
hint: The '.husky/commit-msg' hook was ignored because it's not set as executable.
hint: You can disable this warning with `git config advice.ignoredHook false`.
```

> 执行以下代码

```bash
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

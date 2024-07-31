## 現状の初期データ注入手順

1. 基礎ユーザの作成（管理者がユーザー作成、作成されたユーザーデータで users.ts を更新）
2. yarn prisma db seed を実行。ただしpostデータ注入で失敗する
3. api-footballからの選手データの反映
4. yarn prisma db seed を再実行。

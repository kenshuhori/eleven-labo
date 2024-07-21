## Eleven Labo | ベストイレブン研究所

See https://eleven-labo.vercel.app/

<table>
  <tr>
    <td><img src="./public/readme/concept1.gif"></td>
    <td><img src="./public/readme/concept2.jpg"></td>
  </tr>
</table>


## 使用技術・利用サービス

<div style="display:flex; gap:8px">
  <img src="https://img.shields.io/badge/-Vercel-000000?style=flat&logoColor=white&logo=vercel">
  <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logoColor=white&logo=postgreSQL">
  <img src="https://img.shields.io/badge/-Clerk-6C47FF?style=flat&logoColor=white&logo=clerk">
  <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logoColor=white&logo=typescript">
  <img src="https://img.shields.io/badge/-Next.js-000000?style=flat&logoColor=white&logo=nextdotjs">
  <img src="https://img.shields.io/badge/-Figma-F24E1E?style=flat&logoColor=white&logo=figma">
  <img src="https://img.shields.io/badge/-Storybook-FF4785?style=flat&logoColor=white&logo=storybook">
  <img src="https://img.shields.io/badge/-Chakura%20UI-319795?style=flat&logoColor=white&logo=chakraui">
  <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-5C2D91?style=flat&logoColor=white&logo=visual-studio">
</div>


## Getting Started

開発には VSCode・devContainer(Docker) を利用しています

```sh
# 1. VScode・devContainer を起動

# 2. .env.local を作成
$ cp .env.dist .env.local

# 3. 開発環境 起動
$ yarn dev // http://localhost:3000

# 4. Storybook 起動
$ yarn storybook // http://localhost:6006
```


## 環境変数

値についてはコードオーナーから受領してください

| Key | Description |
| ---- | ---- |
| NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY | Clerkの利用に必要 |
| CLERK_SECRET_KEY | Clerkの利用に必要 |
| POSTGRES_URL | Vercel Storage の DB 利用に必要 |
| POSTGRES_PRISMA_URL | Vercel Storage の DB 利用に必要 |
| POSTGRES_URL_NO_SSL | Vercel Storage の DB 利用に必要 |
| POSTGRES_URL_NON_POOLING | Vercel Storage の DB 利用に必要 |
| POSTGRES_USER | Vercel Storage の DB ユーザ名 |
| POSTGRES_HOST | Vercel Storage の DB ホスト名 |
| POSTGRES_PASSWORD | Vercel Storage の DB パスワード |
| POSTGRES_DATABASE | Vercel Storage の DB 名 |


## 管理者向け

#### 各種管理コンソール・開発資料

- [Vercel | Eleven Labo](https://vercel.com/eleven-labo/eleven-labo)
- [Clerk | Eleven Labo](https://dashboard.clerk.com/apps/app_2iii3RLAoJrF3EfkSUtBqWRtcGl/instances/ins_2iii3P9Y06xFeEr9Di1hvyPVDGA)
- [Figma | Eleven Labo](https://www.figma.com/files/team/1378738534124220787/project/239964492?fuid=1378738532096732362)
- [Slack | Eleven Labo](https://app.slack.com/client/T07DC044G0K/C07DEHMA1V2)
- [Notion | Eleven Labo](https://www.notion.so/8a1c7f326a074d19b8ea66bc5bd22937)


#### データベース管理

```sh
# 現在のDB構成を prisma/schema.prisma に反映する
$ npx prisma db pull

# DB構成の変更、反映
# prisma/schema.prisma を変更する
$ npx prisma db push
$ npx prisma generate

# 初期データ（Seed）の更新
$ yarn prisma db seed

# マイグレーションの実行
$ npx prisma migrate deploy

# DB管理コンソールの起動 localhost:5555
$ npx prisma studio
```

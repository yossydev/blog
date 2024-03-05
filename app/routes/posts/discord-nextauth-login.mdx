---
title: "NextAuth で指定したギルドユーザー限定の Discord ログインを実装する"
emoji: "🔒"
date: "2023/01/22"
published: true
---

## 概要

こんにちは！現在仕事で東京で 1 ヶ月ホテル生活をしています[ユウト](https://twitter.com/codeyy_dev)です！

今回は自分の所属しているコミュニティで、NextAuth を使って Discord ログイン機能を実装し、その中で特定のギルドに入っていないとログインできないような機能を作りました！

実装していく中であんまり参考になるような記事がなかったので、メモがてら書きます！

## 使用技術

- [React v18.2.0](https://beta.reactjs.org/)
- [Next.js v13.1.1](https://nextjs.org/) (app ディレクトリは使ってないです)
- [next-auth v4.18.7](https://authjs.dev/)

…etc

## 早速本題

### Discord OAuth2 の設定

まずは Discord ログインの機能を使用するために、Discord の OAuth2 の設定をします。

1. **https://discord.com/developers/applications にアクセスをして、Discord ログインをする**
2. **`New Application`をクリックし、アプリケーションの名前を入力する**
   ![Discord OAuth2の設定](https://user-images.githubusercontent.com/87469023/213505084-a72d8d7c-4552-41c9-87db-77b787244c39.png)
3. **リダイレクト URL を入力する**
   Redirects という場所に、http://localhost:3000/api/auth/callback/discord を追加する
   (本番とかであれば、http://twitter.com/api/auth/callback/discord みたいな感じでもう一つ追加すれば OK)
   ![Redirectsの設定](https://user-images.githubusercontent.com/87469023/213904305-b0163c46-5f2c-4188-85d3-513834c037a1.png)

### NextAuth の設定

#### インストール

```bash
$ yarn add next-auth
```

#### Provider の設定

```tsx:pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
```

:::message
 ↓`DISCORD_CLIENT_SECRET` と `DISCORD_CLIENT_ID` が確認できる場所

![DISCORD_CLIENT_SECRET と DISCORD_CLIENT_ID が確認できる場所](https://user-images.githubusercontent.com/87469023/213904334-d7040e06-ffe6-4700-8a93-4010496e5c49.png)

これを環境変数として登録しましょう。
:::

### ここまでで一旦確認

実はここまでで Discord ログインは可能です。

```tsx
import { signIn, useSession } from "next-auth/react";

export const LoginPage: NextPage = () => {
  const { data: session } = useSession();

  return <button onClick={signIn}>Discordでログイン</button>;
};
```

みたいな感じで、ボタン と `NextAuth` から import した `signIn` メソッドを使用すると、ログインができるようになっているはずです。

そしてログインに成功すると、`useSession` の `session` にログインしたユーザーの情報が入っているのが確認できます。

ただ、これだと**特定のギルドに入っているか**というチェックができていないので、次にそのチェックを実装していきます。

### ギルドに入っているかどうかを確認するための準備

#### ギルド情報を取得する許可を与える

```diff ts:pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
+      authorization: {
+       params: { scope: 'identify email guilds' },
+     },
    }),
  ],
};

export default NextAuth(authOptions);
```

これでギルド情報を取得する許可を与えました。

#### ギルド情報を取得するための API を叩く

1. アプリ内で、さっきと同じ方法で普通にログインをする
2. [https://discord.com/developers/docs/resources/user#get-current-user-guilds](https://discord.com/developers/docs/resources/user#get-current-user-guilds) を使って、ログインしたユーザーのギルドを取得する
   :::message
   この際、ログインしたユーザーの accessToken が必要なので、以下でその設定も追加する
   :::

   [NextAuth に便利な callback](https://next-auth.js.org/configuration/callbacks) があるので、それを使います。

   ```diff tsx:pages/api/auth/[...nextauth].js
   import NextAuth from "next-auth";
   import DiscordProvider from "next-auth/providers/discord";

   export const authOptions = {
     providers: [
       DiscordProvider({
         clientId: process.env.DISCORD_CLIENT_ID,
         clientSecret: process.env.DISCORD_CLIENT_SECRET,
         authorization: {
           params: { scope: 'identify email guilds' },
         },
       }),
     ],

   +  callbacks: {
   +    /**
   +      * sessionにaccessTokenと、user.idを追加
   +      */
   +    session: async ({ session, token }) => {
   +      session.accessToken = token.accessToken;
   +      if (session.user) {
   +        session.user.id = token.id;
   +      }
   +      return session;
   +    },
   +
   +    /**
   +      * jwtにaccessTokenと、profile.idを追加
   +      */
   +    jwt: async ({ token, account, profile }) => {
   +      if (account && account.access_token) {
   +        token.accessToken = account.access_token;
   +      }
   +      if (profile) {
   +       token.id = profile.id;
   +      }
   +      return token;
   +    },
   +    },
   + };

   export default NextAuth(authOptions);
   ```

3. 実際に api 叩く

   ```tsx:pages/index.tsx
   export const Home:FC = () => {
    const { data: session } = useSession();

    const handleClick = async () => {
      const res = await fetch(`https://discordapp.com/api/users/@me/guilds`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      console.log('res', res);
    };

    return <button onClick={handleClick}>ギルド情報を取得</button>;
   }
   ```

ここまでで、

1. Discord でログインをする
2. ログインユーザーの加入しているギルド情報を取得する

ということはできました。

ここから最後に、**特定のギルドに入っていたらログイン成功**の処理をやっていきます。

### 特定のギルドに入っていたらログイン成功

#### 入っていて欲しいギルドの ID を指定する

1.  ID は [discord の web 版](https://discord.com/)から確認できます。
2.  `https://discord.com/channels/10000000001/1000000002` の`10000000001`のところが ID です。
3.  以下のような型の値が返ってきます。

    ```ts
    features: string[]
    icon: string
    id: string
    name: string
    owner: boolean
    permissions: number
    permissions_new: string
    ```

4.  ギルドに加入しているかどうかを判定するメソッドを作ります

    ```tsx
    async isJoinGuild(accessToken: string): Promise<boolean> {
      const res: Response = await fetch("https://discordapp.com/api/users/@me/guilds", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.ok) {
        const guilds: Guild[] = await res.json();
        return guilds.some((guild: Guild) => guild.id === guildId);
      }
      return false;
    },
    ```

最後にこの作成したメソッドを使用します！

#### isJoinGuild を使用する

- callback 内の、signIn というメソッドの中で使用すると、signIn した際に自動で発火するようにしてくれます。
- この際に、false を返すとログイン失敗になります。

```tsx
callbacks: {
  signIn: async ({ account, user, profile }) => {
    if (account == null || account.access_token == null) return false;
    return await isJoinGuild(account.access_token)
  },
}
```

ここまでで、特定のギルドに入っていたらログイン成功という処理ができました！！

### まとめ

最後に一連の流れで実装した`[…nextauth].ts` 内のコードを確認します！

```tsx
import { discordClientId, discordClientSecret } from '@/constants/env';
import { DiscordClient } from '@/lib/discord-client';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

async isJoinGuild(accessToken: string): Promise<boolean> {
  const res: Response = await fetch(`${BASE_DISCORD_URL}/api/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (res.ok) {
    const guilds: Guild[] = await res.json();
		return guilds.some((guild: Guild) => guild.id === guildId);
  }
  return false;
},

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: discordClientId,
      clientSecret: discordClientSecret,
      authorization: {
        params: { scope: 'identify email guilds' },
      },
    }),
  ],

  /**
   * ログイン情報を保存できる
   */
  session: { strategy: 'jwt' },

  callbacks: {
    /**
     * sessionにaccessTokenと、user.idを追加
     */
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },

    /**
     * jwtにaccessTokenと、profile.idを追加
     */
    jwt: async ({ token, account, profile }) => {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.id = profile.id;
      }
      return token;
    },

    /**
     * ログインボタンを押した際に発火される
     */
    signIn: async ({ account, user, profile }) => {
      if (account == null || account.access_token == null) return false;
      return await isJoinGuild(account.access_token);
    },
  },
};

export default NextAuth(authOptions);
```

あとは普通にボタンに nextauth の signIn を設定してあげれば、ログインできるようになります！

## 最後に

今回は、Discord でログインをする方法を紹介しました！
この記事が、誰かの役に立てば幸いです！

## 参考

- [NextAuth Discord](https://next-auth.js.org/providers/discord#options)
- [Discord の API をちょっと触ってみる](https://qiita.com/tan/items/d876fca53615e5dba85b)
- [「Discord の ID でログイン」を実装する(Oauth2)](https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98)
- [Getting Discord Guilds](https://github.com/nextauthjs/next-auth/discussions/3774)
- [Authenticating users with Discord in a Next.js app](https://blog.with-heart.xyz/authenticating-users-with-discord-in-a-nextjs-app)

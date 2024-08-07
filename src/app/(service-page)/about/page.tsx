import aboutImage from "@public/about.png";
import type { CSSProperties } from "react";
import "./about.css";

export default function Page() {
  return (
    <main style={baseStyle}>
      <h1>ベストイレブン研究所とは？</h1>
      <img alt="about" src={aboutImage.src} />
      <h2>ベストイレブン研究所の願い</h2>
      <article>
        <p>
          ElevenLaboは「
          <span style={boldStyle}>
            サッカーが好きな人々の熱量が集まり、毎日に楽しみをひとつ加えたい
          </span>
          」という想いから生まれました。
        </p>
        <p>
          ベストイレブン案を投稿したり、誰かの案に投票したりすることを通じて、新しい楽しみを見つけることができたら何よりです。
        </p>
      </article>

      <h2>今後の展開</h2>
      <article>
        <p>
          最初はプレミアリーグのベストイレブンを中心にしていますが、
          <span style={boldStyle}>4大リーグやJリーグ</span>も順次追加していく予定です。
        </p>
        <p>
          また、集まったベストイレブン案を集計し、
          <span style={boldStyle}>ポジションごとに投票が多かった選手ランキング</span>
          などを作成する機能も追加予定です。
        </p>
        <p>
          そのほかにも、集まったベストイレブン案の中で
          <span style={boldStyle}>最も集計結果と近かったユーザーの表彰</span>
          や、公式のベストイレブンとの比較なども行っていきたいと思っています。
        </p>
        <p>
          当サイトは少人数での運営のため、機能の追加や改善には時間がかかるかもしれませんが、
          皆様に愛されるサービスとして成長できるよう精進してまいります。そのためにご意見やご要望もお待ちしております。
        </p>
      </article>

      <h2>運営を手伝ってくれる方募集中！</h2>
      <article>
        <p>
          当サイトは現在、
          <span style={boldStyle}>運営メンバーを募集</span>しています。
        </p>
        <p>
          サッカーが好きな方、当サイトの機能開発に興味があるエンジニアの方、webマーケティングが得意な方などなど、ぜひご連絡ください。
        </p>
      </article>
    </main>
  );
}

const baseStyle: CSSProperties = {
  padding: "2rem",
  background: "#f8f8f0",
  lineHeight: 1.8,
};

const boldStyle: CSSProperties = {
  fontWeight: "bold",
};

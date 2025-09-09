flowchart TD

  subgraph Dev["開発環境 (ローカルPC)"]
    A1["VS Code<br/>Webデザイン/開発"]
    A2["Git<br/>ソース管理(GitHub/GitLab等)"]
  end

  subgraph Hosting["ホスティング/公開"]
    B1["Firebase Hosting<br/>（静的サイト/CDN最適）"]
    B2["Cloud Run<br/>（動的API/SSR用）"]
    B3["App Engine(GAE)<br/>※新規は非推奨"]
  end

  subgraph Domain["サイト公開/SEO"]
    C1["独自ドメイン + SSL"]
    C2["robots.txt / sitemap.xml"]
    C3["Google Search Console"]
    C4["Google Analytics (GA4)"]
  end

  subgraph Ads["収益化"]
    D1["Google AdSense<br/>（自動広告・ads.txt必須）"]
    D2["ASP アフィリエイト<br/>(A8.net, Amazon等)"]
  end

  subgraph Promotion["集客・拡散"]
    E1["SEO (記事設計, E-E-A-T)"]
    E2["SNS拡散 (X, note, Qiita等)"]
    E3["ニュースレター/被リンク施策"]
  end

  %% 矢印の流れ
  A1 --> A2
  A2 --> Hosting
  Hosting --> C1
  C1 --> C2
  C2 --> C3
  C3 --> C4
  C1 --> D1
  C1 --> D2
  C1 --> E1
  E1 --> E2
  E1 --> E3

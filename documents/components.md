# コンポーネントの設計

## 設計の意図

- コンポーネントの依存方向を決め、深い階層のコンポーネントは浅い階層のコンポーネントのみが利用する。
- 複数のコンポーネントから利用されるコンポーネントを明確にする `src/shard/*`

## ディレクトリ構造とコンポーネント

- `/public`: アクセス可能なオブジェクト
- `/src`
  - `/components`: 固有のコンポーネント
    - `/recipeForm`: レシピのフォーム-
      - `index.tsx`
      - `recipeFormPresenter.tsx`
      - `recipeFormContainer.tsx`
    - `/recipeTable`: レシピのテーブル
      - `index.tsx`
      - `recipeTablePresenter.tsx`
      - `recipeTableContainer.tsx`
    - `/recipeDetail`: レシピの詳細
      - `index.tsx`
      - `recipeDetailPresenter.tsx`
      - `recipeDetailContainer.tsx`
  - `/shard`: 共有する
    - `/components`: 共通コンポーネント
      - `CotentsTitle.tsx`: コンテンツタイトル
      - `Breadcrumbs.tsx`: パンくずリスト
      - `Navbar.tsx`
      - `Sidebar.tsx`
      - `Footer.tsx`
    - `/layouts`: レイアウト系
      - `DefaultLayout.tsx`: アプリのデフォルトレイアウト（Navbar, Sidebarなどの配置）
      - `ContentsLayout.tsx`: コンテンツのレイアウト
    - `types`: 共有する型
      - `Recipe.ts`: レシピの型
      - `errors`: 各種独自定義のエラー

## メモ

- CotentsTitleとBreadcrumbsはContentsLayoutの下にあってよさそう
- NavbarなどもDefaultLayoutの下で良い。今後新しいレイアウトができたら分ける。

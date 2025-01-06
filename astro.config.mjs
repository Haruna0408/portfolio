// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',  // 'static'に設定（Astroのビルド出力先）
    outDir: 'dist',    // ビルド結果を 'dist' フォルダに出力
});

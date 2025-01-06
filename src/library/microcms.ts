// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type Portfolio = {
  title: string;
  image: MicroCMSImage;
  launch: MicroCMSDate;
} & MicroCMSListContent;

// APIの呼び出し
export const getPortfolio = async (queries?: MicroCMSQueries) => {
  return await client.getList<Portfolio>({ endpoint: "portfolio", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Portfolio>({
    endpoint: "portfolio",
    contentId,
    queries,
  });
};
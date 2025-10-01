import ImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../lib/sanity";
import ProductCircleGridClient from "./ProductCircleGridClient";
import { qUrunKategorileri } from "../lib/queries";

type Item = { name: string; imageUrl?: string };

const builder = ImageUrlBuilder(sanityClient);
const urlFor = (source: any) => (source ? builder.image(source).width(800).height(800).url() : undefined);

export default async function ProductCircleGrid() {
  try {
    const data = await sanityClient.fetch<any[]>(qUrunKategorileri);
    const items: Item[] = (data || []).map((d: any) => ({ name: d.title, imageUrl: urlFor(d.image) }));
    return <ProductCircleGridClient items={items} />;
  } catch {
    return <ProductCircleGridClient items={[]} />;
  }
}


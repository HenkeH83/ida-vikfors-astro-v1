import type { Slug, Image, Block } from "@sanity/types/dist/dts"

export interface paintingType {
    title: string,
    slug: Slug,
    mainImage: Image,
    hoverImg: Image,
    alt: string,
    images: Array<Image>,
    body: Array<Block>,
    sort: number
}

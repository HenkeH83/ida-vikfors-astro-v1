import type { Image, Block } from "@sanity/types/dist/dts"

export interface aboutType {
  name: string,
  image?: Image,
  alt?: string,
  italic?: Array<Block>,
  paragraph?: Array<Block>,
  sort: number
}
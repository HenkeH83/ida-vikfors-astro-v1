import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import blocksToHtml from '@sanity/block-content-to-html'

export const client = sanityClient({
    projectId: 'ptqfikup',
    dataset: 'production',
    apiVersion: '2021-08-31',
    //token: 'sanity-auth-token', // or leave blank to be anonymous user
    useCdn: true // `false` if you want to ensure fresh data... byt vid prod
})

const builder = new imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}

const h = blocksToHtml.h;
const serializers = {
    types: {
        code: (props) =>
            h(
                "pre",
                { className: props.node.language },
                h("code", props.node.code)
            ),
    },
};

export const toHtml = (source) => {
    return blocksToHtml({
        blocks: source,
        serializers: serializers
    })
}

// Borde inte '=' sätta det till inte null?
export const toPlainText = (blocks = []) => {
    if(!blocks) return
    return blocks
        // loop through each block
        .map(block => {
            // if it's not a text block with children, 
            // return nothing
            if (block._type !== 'block' || !block.children) {
                return ''
            }
            // loop through the children spans, and join the
            // text strings
            return block.children.map(child => child.text).join('')
        })
        // join the paragraphs leaving split by two linebreaks
        .join('\n\n')
}
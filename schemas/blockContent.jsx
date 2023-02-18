import React from 'react'

const HighlightIcon = () => (
    <span style={{ fontWeight: 'bold' }}>H</span>
)
const HighlightDecorator = props => (
    <span style={{ backgroundColor: 'yellow', color: 'black' }}>{props.children}</span>
)

export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'H5', value: 'h5'},
                {title: 'H6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'}
            ],
            lists: [
                {title: 'Bullet', value: 'bullet'},
                {title: 'Numbered', value: 'number'}
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'},{title: 'Code', value:'code'},{ "title": "Underline", "value": "underline" },
                    { "title": "Strike", "value": "strike-through" },{
                    title: 'Highlight',
                    value: 'highlight',
                    icon: HighlightIcon,
                    component: HighlightDecorator
                }],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                                validation: Rule => Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel']
                                })
                            }
                        ]
                    }
                    ]
            }
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
            type: 'image',
            options: {hotspot: true}
        }
    ]
}
/*
{
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: UserIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [
                  { type: 'person' }
                  // other types you may want to link to
                ]
              }
            ]
          }
 */

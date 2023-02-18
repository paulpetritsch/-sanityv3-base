export default {
    name: 'datenschutz',
    title: 'Datenschutz',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Datenschutz Überschrift',
            type: 'string',
            initialValue: 'Datenschutz',
            hidden: true
        },
        {
            name: 'text',
            title: 'Text',
            type: 'localeBlockContent',
        },
        {
            name: 'seo_title',
            title: 'SEO Titel',
            description: 'Titel, welcher auch auf dem Browser Tab steht.',
            type: 'localeString',
            group: 'seo'
        },
        {
            name: 'seo_description',
            title: 'SEO Beschreibung der Seite',
            type: 'localeText',
            group: 'seo'
        },
        {
            name: 'seo_image',
            title: 'SEO Bild der Seite',
            type: 'image',
            group: 'seo'
        },
    ],

    preview: {
        select: {
            title: 'title'
        }
    },
}

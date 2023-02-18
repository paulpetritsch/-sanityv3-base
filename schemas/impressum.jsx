export default {
    name: 'impressum',
    title: 'Impressum',
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
            title: 'Impressum Überschrift',
            type: 'string',
            initialValue: 'Impressum',
            hidden: true
        },
        {
            name: 'adresse',
            title: 'Adresse',
            type: 'localeBlockContent',
        },
        {
            name: 'email',
            title: 'E-Mail',
            type: 'string',
        },
        {
            name: 'Phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'Text',
            title: 'text',
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

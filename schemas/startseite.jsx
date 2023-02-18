export default {
    name: 'startseite',
    title: 'Startseite',
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
            title: 'Startseite Überschrift',
            type: 'string',
            initialValue: 'Startseite',
            hidden: true
        },
        {
            name: 'headline',
            title: 'Überschrift',
            type: 'localeString',
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

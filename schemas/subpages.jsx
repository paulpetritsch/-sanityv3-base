import {FcPodiumWithSpeaker} from 'react-icons/fc';

export default {
    name: 'subpages',
    title: 'Unterseiten',
    type: 'document',
    icon: FcPodiumWithSpeaker,
    groups: [
        {
            name: 'seo',
            title: 'SEO'
        }
    ],
    fields: [
        {
            name: 'title',
            title: 'Unterseite Überschrift',
            type: 'string',
            initialValue: 'Unterseite',
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

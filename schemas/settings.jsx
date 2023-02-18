export default {
    name: 'settings',
    title: 'Allgemeine Einstellungen',
    type: 'document',
    groups: [
        {
            name: 'kontakt',
            title: 'Kontakt',
        },
        {
            name: 'social',
            title: 'Social Links',
        },
        {
            name: 'datenschutz',
            title: 'Datenschutz',
        },
        {
            name: 'error',
            title: 'Error',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Einstellungen Überschrift',
            type: 'string',
            initialValue: 'Allgemeine Einstellungen',
            hidden: true
        },
        {
            name: 'address_name',
            title: 'Adresse Bezeichnung',
            description: 'Firmenname/Name',
            type: 'localeString',
            group: 'kontakt'
        },
        {
            name: 'address_street',
            title: 'Straße',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_nr',
            title: 'Hausnummer',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_plz',
            title: 'PLZ',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'address_ort',
            title: 'Ort',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'telefon',
            title: 'Telefonnummer',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'email',
            title: 'E-Mail',
            type: 'string',
            group: 'kontakt'
        },
        {
            name: 'instagram',
            title: 'Instagram Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'facebook',
            title: 'Facebook Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn Link',
            type: 'string',
            group: 'social',
        },
        {
            name: 'cookietext',
            title: 'Cookie Text',
            type: 'localeBlockContent',
            group: 'datenschutz',
        },
        {
            name: 'errortext',
            title: '404 Error Text',
            type: 'localeString',
            group: 'error',
        },
    ],

    preview: {
        select: {
            title: 'title'
        }
    },
}

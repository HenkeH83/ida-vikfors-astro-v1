export default {
    widgets: [
        {
            name: 'netlify',
            options: {
                title: 'Netlify deploys',
                sites: [
                    // {    // Detta är bara för att visa Dashboard i sanity studio, eftersom den nu inte ligger på netlify utan hos sanity så behövs inte denna.
                    //     title: 'Sanity Studio',
                    //     apiId: '90b24aec-810e-4953-a61c-a049c855d011',
                    //     buildHookId: '602e2e73b2a306b29f38a0ac',
                    //     name: 'vigorous-montalcini-4acbe7.netlify.app',
                    // },
                    {
                        title: 'Website',
                        apiId: 'e2d0123a-f497-4680-af5e-14904b6e59ba',
                        buildHookId: '603615372a60c8c54c9aa74e',
                        name: 'pensive-lamarr-cafd96.netlify.app'
                    }
                ]
            }
        }
    ]
}
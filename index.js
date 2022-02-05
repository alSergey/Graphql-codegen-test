const { generate } = require('@graphql-codegen/cli')

const generateGraphql = async () => {
    return generate({
        schema: 'https://fruits-api.netlify.app/graphql',
        generates: {
            ['generated/schema.graphql']: {
                plugins: [
                    'schema-ast',
                ],
            },
            ['./generated/skd.ts']: {
                documents: './documents/**/*.graphql',
                plugins: [
                    'typescript',
                    'typescript-operations',
                    'typescript-graphql-apollo',
                ],
                config: {
                    typesPrefix: 'GQL',
                    arrayInputCoercion: false,
                },
            },
        },
    })
}

generateGraphql()




export function getComponentFileContent(component, useTypescript, componentType) {

    const filesContent = {
        'Class Components': {
            js: `import React, { Component } from 'react'

export default class ${component} extends Component {
    render() {
        return (
            <>${component}</>
        )
    }
}
`,
            ts: `import React, { Component } from 'react'

type Props = {}
            
type State = {}
            
export default class ${component} extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>${component}</>
        )
    }
}
`
        },
        'Class Components Exported': {
            js: `import React, { Component } from 'react'

export class ${component} extends Component {
    render() {
        return (
            <>${component}</>
        )
    }
}

export default ${component}
`,
            ts: `import React, { Component } from 'react'

type Props = {}

type State = {}

class ${component} extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>${component}</>
        )
    }
}

export default ${component}
`
        },
        'Functional Components': {
            js: `import React from 'react'

export default function ${component}() {
    return (
        <>${component}</>
    )
}
`,
            ts: `import React from 'react'

type Props = {}

export default function ${component}({ }: Props) {
    return (
        <>${component}</>
    )
}
`
        },
        'Functional Components Exported': {
            js: `import React from 'react'

function ${component}() {
    return (
        <>${component}</>
    )
}

export default ${component}
`,
            ts: `import React from 'react'

type Props = {}

function ${component}({ }: Props) {
    return (
        <div>${component}</div>
    )
}

export default ${component}
`
        },
        'Arrow Functions Components': {
            js: `import React from 'react'

export const ${component} = () => {
    return (
        <div>${component}</div>
    )
}
`,
            ts: `import React from 'react'

            type Props = {}
            
const ${component} = (props: Props) => {
    return (
        <div>${component}</div>
    )
}
`
        },
        'Arrow Functions Components Exported': {
            js: `import React from 'react'

const ${component} = () => {
    return (
        <div>${component}</div>
    )
}

export default ${component}
            `,
            ts: `import React from 'react'

type Props = {}

const ${component} = (props: Props) => {
    return (
        <div>${component}</div>
    )
}

export default ${component}
`
        }
    }

    return filesContent[componentType][useTypescript ? 'ts' : 'js'];
}

export function getExportFileContent(component) {
    return `export { default } from './${component}';`;
}
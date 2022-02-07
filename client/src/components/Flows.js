import { Button, CodeBlock, Flex } from '@looker/components'
import React, { useContext, useState } from 'react'
import { AppContext } from '../Context'


export const Flows = () => {
    // const { loggedIn } = useContext(AppContext)
    const [data, setData] = useState('')
    const testFn = () => {
        fetch('/api/flows')
        .then(response => response.json())
        .then(data => setData(data));
        // setData('HI THERE')
    }
    return (<Flex flexDirection='column' style={{justifyContent: 'flex-start', gap: '8px', alignItems: 'center', width: '90vw', margin: '0px auto'}}>
        Hi
        <Button onClick={testFn}>Click</Button>
        <CodeBlock style={{width: '100%', minHeight: '200px'}}>{JSON.stringify(data)}</CodeBlock>
    </Flex>)
}
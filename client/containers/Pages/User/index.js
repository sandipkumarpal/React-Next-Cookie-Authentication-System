import React, { useEffect } from 'react'
import axios from 'axios'
import withPageTitle from '../../../hoc/withPageTitle'
import { useRouter } from 'next/router'

function UserPage() {
    const router = useRouter()
    
    const retrieveUser = async () => {
        try {
            const { data } = await axios.get('/api/user');
            console.log({ data })
        } catch (error) {
            console.log(error)
            router.push('/logout')
        }
    }
    
    useEffect(() => {
        retrieveUser()
    }, [])

    return (
        <div>
            UserPage
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'User'
}

export default withPageTitle(UserPage, defaultsProps)

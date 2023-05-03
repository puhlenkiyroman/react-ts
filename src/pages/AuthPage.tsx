import React from 'react';
import {useInput} from "../hooks/input";



function AuthPage() {
    const username = useInput('')

    const password = useInput('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    return (
        <form
            className="container mx-auto max-w-[500px]"
            onSubmit={submitHandler}
        >

        <div className="mb-2">
            <label
                htmlFor="username"
                className="block"
            >
                Username
            </label>
            <input
                type="text" {...username}
                id="username"
                className="border py-1 px-2 w-full"
            />
        </div>

        <div className="mb-2">
            <label
                 htmlFor="password"
                 className="block"
            >
                 Password
            </label>
            <input
                 type="text" {...password}
                 id="password"
                 className="border py-1 px-2 w-full"
           />
        </div>

        </form>
    );
}

export default AuthPage;
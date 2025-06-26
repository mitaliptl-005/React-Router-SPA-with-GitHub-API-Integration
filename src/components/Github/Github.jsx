import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <>
            <div className='p-3 m-4 text-center text-white bg-gray-600'>
                <p className='mb-3 text-3xl'>Github followers: {data.followers}</p>
            </div>

            <div className="mt-4 text-center">
                <img
                    src={data.avatar_url}
                    alt="Git picture"
                    width={300}
                    className="mx-auto rounded-lg"
                />
            </div>
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mitaliptl-005');
    return response.json();
};

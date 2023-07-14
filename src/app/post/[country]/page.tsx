import React from 'react';
import { strapiService } from '@/app/api';

const Post = async (props: {
    params: {
        country: string,
    }
}) => {
    const country = props.params.country;
    const countriesResponse = await strapiService.fetchCountries({ country });

    return (
        <div>
            <div>Shared layout</div>
            {countriesResponse.data.map(country => {
                
                return (
                    <div key={country.id}>
                        <h2 className="font-bold mb-4">
                        {country.attributes.country}
                        </h2>
                        <div>
                            {country.attributes.description}
                        </div>
                    </div>
                );
            })}

        </div>
    );
}



export default Post;








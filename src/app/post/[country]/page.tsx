import React from "react";
import { strapiService } from "@/app/api";

const Post = async (props: {
  params: {
    country: string;
  };
}) => {
  const country = props.params.country;
  const countriesResponse = await strapiService.fetchCountries({ country });

  return (
    <div>
      {countriesResponse.data.map((country) => {
        return (
          <div key={country.id}>
            <h2 className="text-orange-600 text-xl font-bold">
              Welcome to {country.attributes.country}
            </h2>
            <div className="text-white">{country.attributes.description}</div>
            <a href="/search" className="text-white">Back to Search</a>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

import React from "react";
import { strapiService } from "@/app/api";
import RatingForm from "@/app/rating/rating";
import database from "@/app/database";
import { ResultSetHeader } from "mysql2";

const Post = async (props: {
  params: {
    country: string;
  };
}) => {
  const country = props.params.country;
  const countriesResponse = await strapiService.fetchCountries({ country });
  
  const query = `
    SELECT * FROM ratings WHERE country_id = ?
  `;
  const result = await database.execute<(ResultSetHeader & {
    user_rating: string
  })[]>(query, [
    country,
  ]);
  const rows = result[0];
  return (
    <div>
      {countriesResponse.data.map((country) => {
        return (
          <div key={country.id}>
            <h2 className="text-orange-600 text-xl font-bold">
              Welcome to {country.attributes.country}
            </h2>
            <div className="text-white text-4xl">{country.attributes.description}</div>
            <a href="/search" className="text-white">Back to Search</a>

            <RatingForm countryId={country.attributes.country} />
            <div className="bg-yellow-200 text-black font-bold flex-end">
              <h2>Comment Section</h2>
              {rows.map((row) => {
                return (


                  <div className="text-gray-400 hover:bg-red-200">
                    {row.user_rating} 
                  </div>
                );
              })}
            </div>
          </div>

          
        );
      })}
    </div>
  );
};

export default Post;

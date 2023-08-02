"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { countries } from "../search/countries";

function RatingForm(props: { className?: string, countryId: string }) {
  const [errors, setErrors] = useState<{
    userrating?: string;
    countryid?: string;
  } | null>(null);
  const router = useRouter();
  return (
    <form
      className={clsx("flex flex-col gap-2 w-64", props?.className)}
      onSubmit={async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement);
        const response = await fetch("/api/rate", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: localStorage.getItem("userid") ?? "",
          },
        });
        if (response.status === 400) {
          const body = await response.json();
          setErrors(body.errors);
          return;
        }

        const body = (await response.json()) as {
          token: string;
        };
        localStorage.setItem("userid", body.token);
        setErrors(null);
        router.push("/search")
      }}
    >
      <input 
        type="hidden"
        name="country_id"
        value={props.countryId}
      />
      <input
        type="text"
        id="user_rating"
        name="user_rating"
        className="bg-white h-10 text-center hover:placeholder:text-red-400 "
        placeholder="Comment away!"
      />
      <input
        type="submit"
        className="bg-white px-4 py-2  text-black uppercase hover:bg-red-700 hover:font-bold rounded"
      />
    </form>
  );
}
export default RatingForm;

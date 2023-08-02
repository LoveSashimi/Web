"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

function Register(props?: { className?: string }) {
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  } | null>(null);
  const router = useRouter();

  return (
    <div className="flex-1 mx-auto justify-center px-4 py-4">
      <form
        className={clsx("flex flex-col gap-2 w-64", props?.className)}
        onSubmit={async (ev) => {
          ev.preventDefault();
          const formData = new FormData(ev.target as HTMLFormElement);
          const response = await fetch("/api/reg", {
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
          router.push("/");
        }}
      >
        <input
          type="text"
          id="user_name_info"
          name="user_name_info"
          className="bg-white h-10 text-center hover:placeholder:text-red-400 "
          placeholder="Username"
        />
        <input
          type="text"
          id="user_password_info"
          name="user_password_info"
          className="bg-white h-10 text-center hover:placeholder:text-red-400"
          placeholder="Password"
        />
        
        {errors?.username && (
          <div className="text-red-400">{errors.username}</div>
        )}
        <input
          type="submit"
          className="bg-white px-4 py-2  text-black uppercase hover:bg-red-700 hover:font-bold rounded"
        />
        {errors?.password && (
          <div className="text-red-400">{errors.password}</div>
        )}
      </form>
    </div>
  );
}

export default Register;

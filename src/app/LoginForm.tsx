"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

function LoginForm(props?: { className?: string }) {
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  } | null>(null);
  const router = useRouter();

  return (
    <form
      className={clsx("flex flex-col gap-2 w-100 animate-fade animate-once animate-duration-[5000ms] animate-ease-in", props?.className)}
      onSubmit={async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement);
        const response = await fetch("/api/user", {
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
        console.log({ body });
        setErrors(null);
        router.push("/search");
        console.log(response);
      }}
    >
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white  mx-auto justify-center px-4 py-4">Rate My Gov</h1>
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
      {errors?.password && (
        <div className="text-red-400">{errors.password}</div>
      )}
      {errors?.username && (
        <div className="text-red-400">{errors.username}</div>
      )}
      <input
        type="submit"
        className="bg-white px-4 py-2  text-black uppercase hover:bg-red-700 hover:font-bold rounded"
      />

      <Link
        href="/register"
        className="bg-white text-center py-2 text-black uppercase hover:bg-red-700 hover:font-bold rounded"
      >
        Register
      </Link>
    </form>
  );
}

export default LoginForm;

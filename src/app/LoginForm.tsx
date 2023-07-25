"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm(props?: { className?: string }) {
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  } | null>(null);
  const router = useRouter();

  return (
    <form
      className={clsx('flex flex-col gap-2 w-64', props?.className)}
      onSubmit={async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target as HTMLFormElement);
        const response = await fetch("/api/user", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: localStorage.getItem("token") ?? "",
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
        localStorage.setItem("token", body.token);
        console.log({ body });
        setErrors(null);
        router.push("/search");
        console.log(response);
      }}
    >
      <input
        type="text"
        id="username"
        name="username"
        className="bg-white h-10 hover:placeholder:text-red-400 "
        placeholder="Username"
      />
      <input
        type="text"
        id="password"
        name="password"
        className="bg-white h-10 hover:placeholder:text-red-400"
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
    </form>
  );
}

export default LoginForm;

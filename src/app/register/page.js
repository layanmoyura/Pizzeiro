import Image from "next/image";

export default function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Register
      </h1>
      <form className="block max-w-sm mx-auto">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Register</button>
        <div className="text-center my-4 text-gray-500">
          or log in with a Provider
        </div>
        <button className="flex justify-center gap-4">
          <Image src="/googleIcon.png" width={24} height={24} alt="google icon"/>
          Log in with Google
        </button>
      </form>
    </section>
  );
}
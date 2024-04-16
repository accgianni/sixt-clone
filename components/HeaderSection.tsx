import Form from "./Form";
import Nav from "./Nav";

export default function HeaderSection() {
  return (
    <div className="bg-cover bg-bottom bg-no-repeat h-[65vh] bg-[url('/images/img-home.webp')] after:bg-gradient-to-b after:from-black after:opacity-75 after:absolute after:top-0 after:w-full after:h-72">
      <div className="max-w-[100rem] m-auto px-8 md:px-20 relative z-10">
        <Nav />
        <Form />
      </div>
    </div>
  );
}

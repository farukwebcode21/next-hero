import Link from "next/link";

const NoteFound = () => {
  return (
    <div className="flex items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NoteFound;

import Card from "./Card";

export default function GalerieSection({ content }: { content: any }) {
  return (
    <div className="grid grid-cols-3 gap-6 px-20 pb-10">
      {content.map((car: any, index: number) => (
        <Card key={index} content={car} />
      ))}
    </div>
  );
}

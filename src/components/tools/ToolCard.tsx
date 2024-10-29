/**
 * A function to render a card component displaying tool information.
 *
 * @param props - An object containing the properties for the card component.
 * @param props.id - The unique identifier for the card.
 * @param props.slug - The slug for the tool, used in the URL.
 * @param props.name - The name of the tool.
 * @param props.description - A brief description of the tool.
 *
 * @returns A React element representing the card component.
 */
export default function Card(props) {
  return (
    <div className="p-2 border-2 border-solid rounded-md bg-zinc-800/50 border-zinc-700/75" id={props.id}>
      <div>
        <a href={`/tools/${props.slug}`} className="font-semibold text-md">
          {props.name}
        </a>
      </div>
      <div>
        <p className="m-0 text-sm text-pretty">
          {props.description}
        </p>
      </div>
    </div>
  );
}
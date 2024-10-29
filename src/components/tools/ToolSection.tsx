/**
 * A function to render a section with a name and a grid of tools.
 *
 * @param props - The properties for the section component.
 * @param props.slug - The unique identifier for the section.
 * @param props.name - The name of the section.
 * @param props.back - A boolean indicating whether to display a back arrow.
 * @returns A React component representing the section.
 */
export default function Section(props) {
  const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
  const {
    faArrowRight,
    faArrowLeft,
  } = require("@fortawesome/free-solid-svg-icons");
  return (
    <div className="p-4 m-4 border-2 border-solid rounded-lg border-zinc-700/50 h-fit" id={props.slug}>
      <header className="mb-4">
        {props.back ? (
          <a
            href={`/tools/${props.slug}`}
            className="text-lg font-semibold cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {props.name}
          </a>
        ) : (
          <a
            href={`/tools/filter/${props.slug}`}
            className="text-lg font-semibold cursor-pointer"
          >
            {props.name} <FontAwesomeIcon icon={faArrowRight} />
          </a>
        )}
      </header>
      <main className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-6">
            {props.children}
      </main>
    </div>
  );
}
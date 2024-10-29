import BrowserOnly from "@docusaurus/BrowserOnly";
import Section from "@site/src/components/tools/ToolSection";
import Layout from "@theme/Layout";
import Tools from "/tools.json";
import Card from "@site/src/components/tools/ToolCard";
import Loading from "@site/src/components/Loading";
export default function main() {
  return (
    <BrowserOnly fallback={<Loading />}>
      {() => {
        return (
          <Layout>
            <div className="flex-grow max-w-full max-h-full m-3 rounded-lg bg-zinc-700/25 inter">
              <Section name="Back to Tools" slug="" back={true}>
                {Tools.tools.map(
                  (tool) =>
                    tool.tags.some((tag) => tag === "featured") && (
                      <Card
                        name={tool.name}
                        id={tool.id}
                        slug={tool.slug}
                        description={tool.description}
                      />
                    )
                )}
              </Section>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}

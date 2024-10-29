import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import "./index.module.css";
import Tags from "/tags.json";
import Tools from "/tools.json";
import Section from "@site/src/components/tools/ToolSection";
import Card from "@site/src/components/tools/ToolCard";
import Loading from "@site/src/components/Loading";
export default function main() {
  return (
    <BrowserOnly fallback={<Loading />}>
      {() => {
        return (
          <Layout>
            <div className="flex-grow max-w-full max-h-full m-3 rounded-lg bg-zinc-700/25 inter">
              <div className="grid grid-cols-1">
                {Tags.tags.map((Tag, tagindex) => {
                  return (
                    <Section name={Tag.name} key={tagindex} slug={Tag.slug}>
                      {Tools.tools.map((Tool, index) => {
                        return (
                          Tool.tags.some((tag) => tag === Tag.slug) &&
                          index < 10 ? (
                            <Card
                              key={index}
                              slug={Tool.slug}
                              id={Tool.id}
                              name={Tool.name}
                              description={Tool.description}
                            />
                          ) : index === Tools.tools.length - 1 && <span className="mt-auto text-sm text-zinc-400">And {Tools.tools.filter((tooll) => tooll.tags.some((tagss)=> tagss === Tag.slug)).length - 10} other{Tools.tools.filter((tooll) => tooll.tags.some((tagss)=> tagss === Tag.slug)).length >= 12 ? "s" : ""}</span>
                        ) 
                      })}
                    </Section>
                  );
                })}
                <Section slug="all" name="All">
                  {Tools.tools.map(
                    (tool, index) =>{
                      return (index < 10 ? (
                        <Card
                          id={tool.id}
                          name={tool.name}
                          slug={tool.slug}
                          description={tool.description}
                          key={index}
                        />
                      ) : index === Tools.tools.length - 1 && <span className="mt-auto text-sm text-zinc-400">And {Tools.tools.length - 10} other{Tools.tools.length >= 12 ? "s" : ""}</span>
                    )}
                  )
                  }
                  
                </Section>
              </div>
            </div>
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}

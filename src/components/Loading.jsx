import Layout from "@theme/Layout";

export default function Loading() {
  return (
    <Layout>
       <div className="grid items-center flex-grow w-full grid-cols-1 grid-rows-1 m-10 place-items-center">
       <div className="grid items-center grid-rows-2 gap-1 place-items-center">
        <img className="size-20" src="https://assets.redux.wtf/redocs/redocs.svg"></img>
        <div class="progress progress-warning progress-indeterminate"></div>
       </div>
       </div>
    </Layout>
  );
}

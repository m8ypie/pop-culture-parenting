import { StackContext, SvelteKitSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, "Pop-Culture-Parenting", {
    path: "website/"
  });
  stack.addOutputs({
    URL: site.url
  });
}

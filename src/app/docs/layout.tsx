import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tabs={[
        {
          title: "Computer Science",
          description: "База всего",
          url: "/docs/computer-science",
          urls: new Set(["/docs", "/docs/computer-science"]),
        },
        {
          title: "DevOps",
          url: "/docs/devops",
        },
        {
          title: "Backend",
          url: "/docs/backend",
        },
        {
          title: "Frontend",
          url: "/docs/frontend",
        },
        {
          title: "Mobile",
          url: "/docs/mobile",
        },
        {
          title: "Testing (A/QA)",
          description: "Для тестировщиков",
          url: "/docs/quality-assurance",
        },
      ]}
      tree={source.getPageTree()}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}

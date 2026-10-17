import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { Pen } from "lucide-react";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tabs={[
        {
          title: "Программы / утилиты",
          icon: null,
          description: "Для Windows, Linux, Mac",
          url: "/docs/programs",
        },
        {
          title: "Computer Science",
          description: "База всего",
          url: "/docs/computer-science",
        },
        {
          title: "DevOps",
          url: "/docs/devops",
        },
        {
          title: "Cybersecurity",
          icon: null,
          description:
            "AppSec, Pentester, DevSecOps, SOC Analyst / Security Analyst",
          url: "/docs/cybersecurity",
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
        {
          title: "1С",
          url: "/docs/1c",
        },
        {
          title: "Трудоустройство в IT",
          url: "/docs/it-job",
        },
      ]}
      tree={source.getPageTree()}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}

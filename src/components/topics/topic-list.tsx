import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {topics.map((topic) => (
        <Chip
          key={topic.id}
          as={Link}
          href={paths.topicShow(topic.slug)}
          color="warning"
          variant="shadow"
        >
          {topic.slug}
        </Chip>
      ))}
    </div>
  );
}

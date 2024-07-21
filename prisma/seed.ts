import { teams } from "@/fixtures/teams";
import { themes } from "@/fixtures/themes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // teams を upsert
  for (const team of teams) {
    await prisma.team.upsert({
      where: { id: team.id },
      update: {
        code: team.code,
        name: team.name,
        logo: team.logo,
        backgroundColor: team.backgroundColor,
        borderColor: team.borderColor,
        color: team.color,
        textShadowColor: team.textShadowColor || "",
      },
      create: {
        code: team.code,
        name: team.name,
        logo: team.logo,
        backgroundColor: team.backgroundColor,
        borderColor: team.borderColor,
        color: team.color,
        textShadowColor: team.textShadowColor || "",
      },
    });
  }

  // themes を upsert
  for (const theme of themes) {
    await prisma.theme.upsert({
      where: { id: theme.id },
      update: {
        id: theme.id,
        title: theme.title,
        likeCount: theme.likeCount,
      },
      create: {
        id: theme.id,
        title: theme.title,
        likeCount: theme.likeCount,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { teams } from "@/fixtures/teams";
import { themes } from "@/fixtures/themes";
import { users } from "@/fixtures/users";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // users を upsert
  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        hasImage: user.hasImage,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        deletedAt: user.deletedAt,
      },
      create: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        hasImage: user.hasImage,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        deletedAt: user.deletedAt,
      },
    });
  }

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
        id: team.id,
        code: team.code,
        name: team.name,
        logo: team.logo,
        leagueId: team.leagueId,
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
        thumbnail: theme.thumbnail,
        title: theme.title,
      },
      create: {
        id: theme.id,
        thumbnail: theme.thumbnail,
        title: theme.title,
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

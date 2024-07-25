import { posts } from "@/fixtures/posts";
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
        id: team.id,
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

  // posts を upsert
  for (const post of posts) {
    await prisma.post.upsert({
      where: { id: post.id },
      update: {
        id: post.id,
        description: post.description,
        pos1PlayerId: post.pos1PlayerId,
        pos2PlayerId: post.pos2PlayerId,
        pos3PlayerId: post.pos3PlayerId,
        pos4PlayerId: post.pos4PlayerId,
        pos5PlayerId: post.pos5PlayerId,
        pos6PlayerId: post.pos6PlayerId,
        pos7PlayerId: post.pos7PlayerId,
        pos8PlayerId: post.pos8PlayerId,
        pos9PlayerId: post.pos9PlayerId,
        pos10PlayerId: post.pos10PlayerId,
        pos11PlayerId: post.pos11PlayerId,
        likeCount: post.likeCount,
        themeId: post.themeId,
        createdAt: post.createdAt,
      },
      create: {
        id: post.id,
        description: post.description,
        pos1PlayerId: post.pos1PlayerId,
        pos2PlayerId: post.pos2PlayerId,
        pos3PlayerId: post.pos3PlayerId,
        pos4PlayerId: post.pos4PlayerId,
        pos5PlayerId: post.pos5PlayerId,
        pos6PlayerId: post.pos6PlayerId,
        pos7PlayerId: post.pos7PlayerId,
        pos8PlayerId: post.pos8PlayerId,
        pos9PlayerId: post.pos9PlayerId,
        pos10PlayerId: post.pos10PlayerId,
        pos11PlayerId: post.pos11PlayerId,
        likeCount: post.likeCount,
        themeId: post.themeId,
        createdAt: post.createdAt,
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

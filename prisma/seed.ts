import { teams } from "@/fixtures/teams";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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

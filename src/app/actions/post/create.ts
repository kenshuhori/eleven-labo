"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const {
    themeId,
    description,
    formation,
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    position10,
    position11,
  } = {
    themeId: formData.get("themeId"),
    description: formData.get("description"),
    formation: formData.get("formation"),
    position1: formData.get("position1"),
    position2: formData.get("position2"),
    position3: formData.get("position3"),
    position4: formData.get("position4"),
    position5: formData.get("position5"),
    position6: formData.get("position6"),
    position7: formData.get("position7"),
    position8: formData.get("position8"),
    position9: formData.get("position9"),
    position10: formData.get("position10"),
    position11: formData.get("position11"),
  };

  console.log(themeId);
  console.log(description);
  console.log(formation);
  console.log(position1);
  console.log(position2);
  console.log(position3);
  console.log(position4);
  console.log(position5);
  console.log(position6);
  console.log(position7);
  console.log(position8);
  console.log(position9);
  console.log(position10);
  console.log(position11);

  revalidatePath(`/themes/${themeId}`);
  redirect(`/themes/${themeId}`);
}

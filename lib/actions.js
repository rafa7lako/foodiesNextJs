"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructons: formData.get("instructons"),
		image: formData.get("image"),
		creator: formData.get("name"),
		cretor_email: formData.get("email"),
	};

	await saveMeal(meal);
	redirect('/meals')
}

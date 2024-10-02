"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

function isInvalidText(text) {
	return !text || text.trim() === "";
}

export async function shareMeal(formData) {
	const meal = {
		title: formData.get("title"),
		summary: formData.get("summary"),
		instructions: formData.get("instructons"),
		image: formData.get("image"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.inludes("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
	}

	await saveMeal(meal);
	redirect("/meals");
}

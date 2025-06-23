"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
    return await convex.query(api.documents.getByIds, {ids});
}
export async function getUsers() {
    const { userId, sessionClaims } = await auth();
    const clerk = await clerkClient();

    const response = await clerk.users.getUserList({
        organizationId: [sessionClaims?.org_id as string],
    });

    const users = response.data.map((user) => ({
        id: user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
        color: "",
    }));

    // Add current user if not already in the list
    if (userId && !users.some(user => user.id === userId)) {
        const currentUser = await clerk.users.getUser(userId);
        users.push({
            id: currentUser.id,
            name: currentUser.fullName ?? currentUser.primaryEmailAddress?.emailAddress ?? "Anonymous",
            avatar: currentUser.imageUrl,
            color: "",
        });
    }

    return users;
}
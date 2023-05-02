import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async () => {
    const data = await prisma.user.findMany();

    return json(data);
}
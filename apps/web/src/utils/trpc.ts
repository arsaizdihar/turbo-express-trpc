import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "server/src/trpc/server";

export const trpc = createReactQueryHooks<AppRouter>();

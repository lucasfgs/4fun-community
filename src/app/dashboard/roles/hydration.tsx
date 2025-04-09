import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

import { getQueryClient } from "@/lib/getQueryClient";
import {
  GET_ALL_ROLES_QUERY_KEY,
  getAllRolesAction,
} from "@/services/api/roles/use-get-all-roles";
export default async function Hydration({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: GET_ALL_ROLES_QUERY_KEY,
    queryFn: getAllRolesAction,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}

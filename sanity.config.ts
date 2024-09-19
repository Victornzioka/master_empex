import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import features from "./sunmoonventures/schemaTypes/features";
import services from "./sunmoonventures/schemaTypes/services";
import about from "./sunmoonventures/schemaTypes/about";

export const config = defineConfig({
    projectId: "7y8d1qxt",
    dataset: "production",
    title: "sunmoon ventures",
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types:[features, services, about]}
})

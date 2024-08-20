"use client";

import { builder, Builder } from "@builder.io/react";

import Counter from "./components/Counter/Counter";
import Footer from "./components/footer_component";
import Header from "./components/header_component";
import HeaderMenu from "./components/hearder-menu";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(HeaderMenu, {
  name: "HeaderMenu",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(Header, {
  name: "Header",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Search from "./Search";


storiesOf("Search", module).add("Search", () => {
  const [search, setSearch] = useState("");
  return (
    <Search 
        size="md"
        clearValue
        value={search}
        handleChange={(e) => setSearch(e.target.value)}
        handleClear={() => setSearch("")}
    />
  );
});

storiesOf("Search", module).add("Search Large", () => {
    const [search, setSearch] = useState("");
    return (
      <Search 
        size="lg"
        clearValue
        value={search}
        handleChange={(e) => setSearch(e.target.value)}
        handleClear={() => setSearch("")}
      />
    )
  });

"use client";

import React, { useState, useCallback, useEffect } from "react";
import { LoaderCircleIcon, Search, XIcon } from "lucide-react";
import Input from "../../Form/Input";
import debounce from "debounce";

function QuickSearch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  
  const search = useCallback(
    debounce(async (query) => {
      if (query) {
        console.log(query);
      }
    }, 1000),
    []
  );

  const clearInput = () => {
    setQuery("");
    setFocused(true);
    // resetFields();
  };

  const resetFields = () => {
    // setPost(undefined);
    // setUser(undefined);
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center relative bg-primary/10 rounded-md px-4 duration-100 ease-linear transition-all ${
          focused ? "ring-2 ring-primary" : "ring-0"
        }`}
      >
        <Search size={22} className={`text-primary z-10`} />
        <Input
          type="text"
          className="bg-transparent placeholder:text-primary text-sm z-10 flex-1 peer rounded-md"
          placeholder="Search"
          isOutline={false}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
            search(e.currentTarget.value);
            setLoading(true);
            resetFields();
          }}
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <XIcon
          size={20}
          onClick={clearInput}
          className={`stroke-primary cursor-pointer ${
            query.length > 0 ? "block" : "hidden"
          }`}
        />
      </div>
    </div>
  );
}

export default QuickSearch;

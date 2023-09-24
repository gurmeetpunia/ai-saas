"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8df6d1b2-6eb6-4ccf-befc-7ad61262c7e6");
  }, []);

  return null;
};